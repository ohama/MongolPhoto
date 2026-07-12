# Stack Research

**Domain:** Korean-language mdBook photo tutorial + untracked wide-field astrophotography gear/software recommendations
**Researched:** 2026-07-09
**Confidence:** HIGH (publishing toolchain) / MEDIUM-HIGH (gear — camera mount unknown, prices approximate and region-dependent)

---

## Part A — Publishing Toolchain (mdBook + GitHub Pages, Korean)

### Core Technologies

| Technology | Version | Purpose | Why Recommended |
|------------|---------|---------|-----------------|
| mdBook | 0.4.4x (latest 0.4.x) | Static book generator | Rust-based, single binary, zero-JS-framework overhead, renders Markdown → static HTML with built-in search, sidebar nav, code highlighting. Already scaffolded in this repo (`/mdbook`, `/pages` skills exist). Avoid pinning to **0.5.0**: it ships 130+ PRs of breaking API changes aimed at preprocessor/renderer authors ([CHANGELOG](https://github.com/rust-lang/mdBook/blob/master/CHANGELOG.md)). This project uses no custom preprocessors, so 0.5 *would* work, but 0.4.4x is the safer, more battle-tested choice for a photo-heavy content book with a hard deadline (8/13 Mongolia trip) — no reason to absorb migration risk. |
| GitHub Actions (`actions/checkout@v4`, `peaceiris/actions-mdbook@v1` or manual `cargo install mdbook`, `actions/configure-pages@v5`, `actions/upload-pages-artifact@v3`, `actions/deploy-pages@v5`) | latest majors | CI build + deploy to GitHub Pages | This is the 2026 GitHub-blessed pattern (`actions/starter-workflows/pages/mdbook.yml`): push to `main` → Action builds with `mdbook build` → uploads `./book` as a Pages artifact → deploys via OIDC (`id-token: write` permission), no long-lived deploy tokens needed. In repo Settings → Pages, set **Source: GitHub Actions** (not "Deploy from a branch"). This matches what the existing `/pages` skill in this repo already targets ("CI 자동 빌드"). |
| `book.toml` `[book] language = "ko"` | mdBook config | Sets `<html lang="ko">` | Needed for correct Korean font-fallback selection by browsers, screen-reader pronunciation, and search/typography behavior. Trivial one-line addition, easy to forget. |

### Korean Typography / CJK Handling

| Item | Recommendation | Why |
|------|-----------------|-----|
| Font stack | Self-host **Noto Sans KR** (Google Fonts, OFL-licensed) as woff2 via `theme/fonts/fonts.css` + `additional-css`, with fallback stack `"Noto Sans KR", "Apple SD Gothic Neo", "Malgun Gothic", sans-serif` | mdBook's default theme font (Open Sans / Source Serif) has no Hangul glyphs, so browsers silently fall back to whatever CJK font is installed on the reader's OS — inconsistent rendering across devices (지인들이 다른 OS로 볼 것). Self-hosting avoids a runtime dependency on Google Fonts CDN (works offline/on GitHub Pages with no external calls, slightly faster too). Ship the file as `theme/fonts/NotoSansKR-Regular.woff2` + `Bold.woff2` only (not the full CJK glyph set of every weight) to keep repo size down. |
| Line-breaking | Add to `theme/custom.css`: `body { word-break: keep-all; overflow-wrap: break-word; }` | Default `word-break: normal` lets browsers break Korean text mid-syllable in narrow containers (image captions, table cells), which looks broken. `keep-all` breaks only at spaces (Korean word/phrase boundaries), matching how Korean readers expect text to wrap. Combine with `overflow-wrap: break-word` so long unbroken strings (URLs, file paths) still wrap instead of overflowing on mobile. |
| Register `additional-css` | `book.toml`: `[output.html] additional-css = ["theme/custom.css"]`, `additional-js = []` | Standard mdBook mechanism to layer custom rules on top of the default theme without forking the whole theme — lowest-maintenance way to add Korean font + line-break rules. |
| Theme | Keep mdBook's **default theme** (no `mdbook-theme` preprocessor, no third-party theme) | This is a personal/friends tutorial, not a large reference doc — the built-in sidebar, search, and light/dark/rust/coal/navy/ayu theme switcher already covers everything needed. Adding `mdbook-theme` (pagetoc, extra color themes) is unnecessary complexity for a beginner-run project with a deadline. |

### Image Handling (photo-heavy book)

| Item | Recommendation | Why |
|------|-----------------|-----|
| Source format in repo | Resized **JPEG** (or WebP), **not RAW**, longest edge ≈ 1920–2400px, quality ≈ 75–85% | RAW files (25–50MB+ each) will bloat the git repo and make GitHub Pages builds/clones slow; 300 DPI print resolution is irrelevant for a web book — screens render at 72–150 effective PPI, so 2000px-wide JPEGs at 80% quality look sharp at any book-content width while staying in the 200–500KB range per image. |
| Preprocessing step | A one-line resize/strip-EXIF script before committing: macOS `sips -Z 2000 -s formatOptions 80 input.jpg --out output.jpg`, or `magick input.jpg -resize 2000x2000\> -strip -quality 82 output.jpg` (ImageMagick, cross-platform) | mdBook has **no built-in image pipeline** — it just copies whatever's in `src/` verbatim. Optimizing must happen before the file lands in the repo. `-strip` removes EXIF/GPS metadata (worth doing before publishing photos taken during a personal trip). |
| Optional preprocessor | `mdbook-image-size` (crates.io) — auto-injects `width`/`height` attributes on `<img>` tags | Prevents layout shift while images load, nice UX touch for a photo-heavy book; optional, not required for launch. |
| Git storage | Plain git is fine at this book's expected scale (tens to low hundreds of photos across ~10 chapters); **do not** reach for Git LFS unless the repo starts exceeding ~1GB or GitHub's soft 1GB-repo-size guidance becomes a problem | Adding LFS is extra tooling overhead (`.gitattributes`, LFS bandwidth quota) that this small a photo count doesn't justify. Revisit only if final Mongolia photo galleries push the repo large. |
| `.nojekyll` | `touch docs/.nojekyll` (or `./book/.nojekyll` depending on build-dir) if using the Actions upload-artifact path this is handled automatically by `actions/upload-pages-artifact`; only needed manually for the classic "deploy from branch" method | Prevents GitHub Pages' Jekyll processor from ignoring files/folders starting with `_` (mdBook's `book/` output uses no such prefixes by default, but harmless to keep — already covered by the repo's `/mdbook` skill). |

### What NOT to Use (Part A)

| Avoid | Why | Use Instead |
|-------|-----|--------------|
| GitBook, Docusaurus, VuePress, Sphinx | Heavier toolchains (Node/Python deps, plugin ecosystems) for what is fundamentally a linear Markdown book with photos — massive overkill for a solo/friends travel tutorial | mdBook (already scaffolded, single Rust binary, zero JS build step) |
| mdBook 0.5.0 pinned in CI right now | Breaking API changes for preprocessors/renderers; less battle-tested in the wild as of mid-2026 | mdBook 0.4.4x (latest patch) |
| Committing raw camera JPEGs/RAWs straight from the card | 20–50MB+ per photo × dozens of photos = multi-GB repo, slow clones/builds, GitHub Pages build minutes wasted | Resize + strip EXIF before commit (see above) |
| Relying on system-installed Korean fonts only (no explicit font-face) | Inconsistent rendering across readers' OS/browsers (Windows Malgun Gothic vs macOS Apple SD Gothic Neo vs Linux with no CJK font installed → tofu boxes) | Self-hosted Noto Sans KR web font |
| Google Fonts CDN `<link>` for Noto Sans KR | Adds an external network dependency + minor privacy/perf hit for site visitors on GitHub Pages, extra round trip | Self-host the woff2 files in `theme/fonts/` |

---

## Part B — Untracked Wide-Field Milky Way Kit (APS-C, no star tracker)

**Assumption / gap:** the user's specific camera mount (Sony E, Fujifilm X, Canon RF-S, Nikon Z DX) is not specified in PROJECT.md. Recommendations below default to **Sony E / Fujifilm X / Canon RF-S** (the three mounts with the deepest third-party wide-fast-prime selection); Nikon Z DX equivalents are called out separately since that ecosystem is thinner. **Confirm the user's actual mount before finalizing the gear chapter** — this is the single biggest open variable in this research.

### Lenses — APS-C wide/fast primes & zooms for untracked Milky Way

| Lens | Approx. Price (USD) | Mounts | Why |
|------|---------------------|--------|-----|
| **Sigma 10-18mm F2.8 DC DN \| Contemporary** (top pick) | ~$599 (Sony E/Fuji X/L-mount), ~$659 (Canon RF-S) | Sony E, Fuji X, Canon RF-S, L-mount | World's smallest/lightest F2.8 zoom for APS-C (~355g). Covers 15–27mm full-frame-equivalent — wide enough for Milky Way framing at 10mm, versatile enough to double as the *only* wide lens for daytime travel/landscape shots in Mongolia (fewer lenses to carry = the project's top gear criterion). Autofocus + weather sealing. Best "one-lens" value pick for a beginner who doesn't want to buy a dedicated astro prime *and* a separate travel wide zoom. |
| **Sigma 16mm F1.4 DC DN \| Contemporary** (fast-prime upgrade) | ~$449 | Sony E, Fuji X, Canon RF-S, L-mount | If the priority is squeezing every bit of light (shorter, star-trail-safe shutter speeds at lower ISO), f/1.4 gathers ~2 stops more light than the Sigma zoom at f/2.8. ~24mm-equivalent FoV is the classic "environmental Milky Way" framing (galactic core + foreground). Autofocus, compact (~405g). Recommended as the *second* lens/upgrade path, not the first purchase, given budget-conscious beginner framing. |
| **Viltrox AF 13mm F1.4 STM** (budget-AF alternative) | ~$400–430 | Sony E, Fuji X, Nikon Z (APS-C) | Comparable speed/FoV to the Sigma 16mm at a similar or slightly lower price, and critically **fills the Nikon Z DX gap** where Sigma doesn't make APS-C primes. Minor coma wide open at f/1.4 (cleans up by f/2) — acceptable trade-off for the price. |
| **Rokinon/Samyang 12mm F2.0 NCS CS** (manual-focus budget pick) | ~$399–499 | Sony E, Fuji X, Canon EF-M, MFT | Manual focus is a non-issue for Milky Way shooting (focus is set once, manually, to infinity, and left alone all night) — so paying extra for AF here buys nothing. ~18mm-equivalent ultra-wide, f/2.0, small and light. Good genuinely-cheap entry point if the Sigma/Viltrox price is a stretch. |
| **Rokinon 10mm F2.8 ED AS NCS CS** (widest FoV) | ~$529 | Sony E, Fuji X, Canon EF-M, Canon EF/Nikon F (DSLR) | Widest field of view of this set (~15mm-equivalent) — captures the most sky + foreground landscape in one frame, useful for Mongolia's open steppe horizons. Slower than the f/1.4–2.0 options above, so needs slightly higher ISO or a shorter list of exposure options; manual focus. |

**What NOT to use (lenses):**

| Avoid | Why | Use Instead |
|-------|-----|--------------|
| Kit zoom (e.g. 18-55mm f/3.5–5.6) | Too slow (f/3.5+ at the wide end) — forces very high ISO or long shutter speeds that cause visible star trailing without a tracker; also usually not wide enough for good Milky Way framing | Any lens above (f/2.8 or faster, ≤16mm) |
| Standard "travel" zooms (16-50mm f/2.8–4, 18-135mm, etc.) | Same aperture problem at the wide end on most budget zooms; heavier than a dedicated wide prime for no astro benefit | Sigma 10-18mm F2.8 (also serves the travel-zoom role) |
| Full-frame ultra-wide lenses (e.g. Sigma 14mm F1.8 Art, Sony 14mm F1.8 GM) mounted on the APS-C body | 2–4x heavier and 2–4x more expensive than the APS-C-native options above, for a field of view that ends up *narrower* than a native APS-C wide lens once the 1.5x crop is applied (a 14mm FF lens becomes a 21mm-equivalent on APS-C — less wide than the Sigma 16mm's 24mm-equiv would suggest is comparable, and *far* less wide than the Sigma 10-18mm or Rokinon 10mm) | Native APS-C primes/zooms above |

### Tripod

| Option | Approx. Price | Why |
|--------|---------------|-----|
| **Vanguard VEO 3 GO 204CB** (primary recommendation) | ~$130 | Carbon fiber, ~1.1kg, rated for this class of use, widely cited as the best value/lightweight pick for travel astro tripods. Matches the project's "가성비 + 휴대성" criteria far better than premium options — a beginner doing 4–5 shooting nights doesn't need a $400+ tripod. |
| **Peak Design Travel Tripod (Aluminum)** (upgrade option, mention only) | ~$380 (carbon fiber ~$600) | Best-in-class packed size and travel ergonomics if budget allows and the tripod will get heavy long-term use beyond this trip — but expensive relative to the beginner/value framing of this project. List as an alternative, not the default recommendation. |
| Avoid: sub-$40 "big-box" aluminum tripods with plastic ball heads | Not rigid enough to hold still through 10–25 second exposures, especially in Mongolia's open-steppe wind — motion blur ruins star sharpness regardless of lens/settings | Vanguard VEO 3 GO 204CB or equivalent carbon/aluminum tripod rated ≥ 2x the camera+lens weight |

### Intervalometer / Shutter Release

| Option | Approx. Price | Why |
|--------|---------------|-----|
| **Built-in camera interval timer / self-timer + electronic shutter** (primary recommendation) | $0 | Nearly every modern mirrorless body (Sony/Fuji/Canon/Nikon) has a built-in interval-shooting menu function and a 2s/5s self-timer, both of which avoid touching the camera during Bulb-mode long exposures (the main reason to want a remote in the first place). Zero extra weight/cost — matches the project's lightweight-first criterion. Camera companion apps (Sony Imaging Edge, Fujifilm X App, Canon Camera Connect, Nikon SnapBridge) give remote shutter control from a phone as a free bonus. |
| **Pixel TW-283 or similar wireless intervalometer** (backup / if body lacks interval timer) | ~$25–35 | Cheap insurance if the specific body's menu doesn't support in-camera interval shooting, or for star-trail/timelapse sequences where hands-free unattended shooting over many minutes is wanted. Not required for single-frame or short untracked Milky Way stacks. |

### Power

| Item | Recommendation | Why |
|------|-----------------|-----|
| Spare batteries | 2–3 spares (OEM or a well-reviewed third-party brand for the specific body) | Long exposures + LCD chimping + cool night temperatures all drain batteries faster than daytime shooting; 4–5 shooting nights in Mongolia with no guaranteed outlet access makes battery starvation a real trip-ending risk. |
| Power bank | One 10,000–20,000mAh USB-C PD power bank + USB-C cable, **if** the body supports USB power/charge-while-shooting (most 2020+ mirrorless APS-C bodies do) | Lets the camera run indefinitely off a single power bank overnight instead of swapping batteries in the dark/cold — very convenient for multi-night field days. Verify the specific body's USB charging capability before the trip. |
| Cold-weather tip | Keep spare batteries in an inner jacket pocket, not the camera bag exterior | Battery capacity drops measurably in cold; Mongolia's steppe nights in August can still be cool. Minor but worth a callout box in the book. |

### Red Headlamp

| Option | Approx. Price | Why |
|--------|---------------|-----|
| **Any headlamp with a dedicated, mode-switchable red-light setting** (e.g. Petzl Actik Core, Black Diamond Spot 350/Astro 300, or a budget ~$15–25 red-light headlamp) | $15–70 depending on brand | Preserves the shooter's (and companions') night-adapted vision and avoids light-polluting other people's long exposures. Beginner/value framing: a $15–25 basic red-mode headlamp is entirely sufficient for this trip — no need for the $70 Black Diamond Storm 500-R's extra lumens/modes. Key feature to check: red mode reachable *without* cycling through bright white light first (a common annoying failure mode on cheap headlamps). |

### Planning / Shooting Apps

| App | Platform / Price | Purpose | Why |
|-----|-------------------|---------|-----|
| **PhotoPills** | iOS/Android, ~$10.99 one-time | Milky Way core rise/set/transit time + azimuth for exact date/location, AR planner to preview framing before dark, and a "Spot Stars" exposure calculator that gives the max shutter speed before star trailing for the specific camera/lens combo — directly answers the "how long can I expose without a tracker" question this project needs. | Purpose-built for exactly this use case; considered close to mandatory for untracked Milky Way planning. |
| **Stellarium** (desktop, free/open-source) or **Stellarium Mobile Plus** (~$20/yr or one-time tiers) | Desktop free; mobile paid | Full sky simulation for a given date/location — deep catalog, good for scouting Mongolia's exact Milky Way orientation and galactic-core visibility window on 8/13–8/17. | Free desktop version is enough for pre-trip planning at home; mobile version optional for in-field double-checking. |
| **Sky Guide** | iOS only, ~$2.99–19.99 | Photorealistic AR sky view, point-phone-at-sky orientation | Nice-to-have supplement to PhotoPills/Stellarium for iPhone users in the friend group; skip if everyone's on Android (Android-only households can rely on PhotoPills + Stellarium alone). |
| **Windy.com** or **Clear Outside** | Free (app/web) | Cloud cover, humidity, and moon-phase forecasting for the shoot dates | Milky Way visibility is gated by clear skies and a dark (new/crescent) moon — worth a chapter callout to check forecast + moon phase for 8/13–8/17 in the days before departure. |

### Post-Processing Software

| Software | Platform / Price | Role | Why |
|----------|-------------------|------|-----|
| **Adobe Lightroom (Classic or Cloud)** | Subscription (~$12/mo Photography plan) | RAW development + AI Denoise (built-in diffusion-based noise reduction) in one app | Recommend as the primary path *if* the user/friends already have or are open to a Creative Cloud subscription — Lightroom's built-in AI Denoise is genuinely strong for high-ISO star fields and keeps the whole workflow (import → develop → denoise → export) in a single beginner-friendly app. |
| **darktable** (free, open-source) | Windows/macOS/Linux, $0 | Free Lightroom-equivalent RAW workflow, including a dedicated "astrophoto denoise" module | Recommended default for a **value-conscious, beginner-friendly** book that shouldn't assume readers already pay for Adobe. Mirrors Lightroom's module/workflow concepts closely enough to teach transferably. Note in the book: darktable's generic denoise can wipe out fine star detail/color if over-applied — teach conservative settings or prefer stacking (below) as the primary noise-reduction technique. |
| **RawTherapee** (free, open-source) | Windows/macOS/Linux, $0 | Alternative free RAW processor, pure single-image editor (no catalog/library) | Mention as an alternative to darktable for readers who prefer a lighter, non-database tool; slightly steeper manual-control learning curve, less ideal as the *first* tool taught to beginners than darktable. |
| **Sequator** (primary stacking tool) | Windows, free | Aligns and stacks multiple untracked frames, keeping the star field sharp while blending a separately-aligned static foreground | This is *the* correct tool category for this project: built specifically for **untracked** nightscape stacking (stars + foreground, no tracker needed), free, and widely cited as the most beginner-friendly option. Recommend as the default stacking workflow taught in the book (for Windows users, which likely covers most of the "지인" audience). |
| **Starry Landscape Stacker** | macOS, ~$39.99 one-time | Mac-native equivalent of Sequator | Recommend for any Mac-using reader in the friend group, since Sequator is Windows-only. Same underlying purpose (star+foreground alignment for untracked shots). |
| **DeepSkyStacker** (secondary/optional) | Windows, free | Classic deep-sky stacking tool | Useful only as a secondary option for stacking *star-only* frame sets (no foreground blending) — less well-suited than Sequator/Starry Landscape Stacker for this project's typical "Milky Way + steppe horizon" compositions. Mention briefly, don't lead with it. |
| **Free noise reduction via multi-frame stacking** (technique, not a product) | $0 | Capture 8–20 short exposures (e.g. 15–20s each) of the same composition and stack them in Sequator/Starry Landscape Stacker | This is the single best "free" noise-reduction lever available to an untracked beginner shooter — averaging N frames reduces random noise by roughly √N, often out-performing single-shot AI denoisers, at zero software cost. **Teach this before recommending any paid denoiser** — it fits the project's beginner + value framing better than software purchases. |
| DxO PureRAW 5 (optional, higher-budget) | ~$129 one-time | Standalone AI denoiser (DeepPRIME XD3) | Mention as an option for readers wanting best-in-class single-shot denoise without committing to a subscription — one-time license, not recurring. Optional, not required. |
| ON1 NoNoise AI 2026 (optional, budget denoiser) | ~$49.99 one-time (perpetual license) | Budget standalone denoiser | Cheaper one-time alternative to DxO PureRAW if extra denoising beyond stacking is wanted. |

**What NOT to use (post-processing):**

| Avoid | Why | Use Instead |
|-------|-----|--------------|
| Topaz Photo AI (as the primary/only recommendation) | Switched to **subscription-only** pricing in October 2025 — no more perpetual license, ongoing cost poorly suited to a one-off trip project aimed at beginners | Free frame-stacking (primary technique) + darktable/Lightroom's built-in denoise, or a one-time-license tool (DxO PureRAW, ON1 NoNoise) if a dedicated denoiser is wanted |
| DeepSkyStacker as the *default/first* stacking tool taught | Designed around deep-sky (telescope/tracked) stacking workflows without native foreground-blending — a worse fit than Sequator/Starry Landscape Stacker for "Milky Way over Mongolian steppe" compositions | Sequator (Win) / Starry Landscape Stacker (Mac) |
| Buying a paid AI denoiser before teaching frame-stacking | Skips the free, more effective noise-reduction technique in favor of a purchase — wrong ordering for a beginner + value-first book | Teach stacking first; treat denoiser software as optional polish |

---

## Alternatives Considered

| Recommended | Alternative | When to Use Alternative |
|-------------|-------------|--------------------------|
| Sigma 10-18mm F2.8 (zoom) | Sigma 16mm F1.4 / Viltrox 13mm F1.4 (prime) | When maximum light-gathering per frame matters more than carrying one fewer lens — e.g. if the user already owns a decent everyday zoom and only needs a dedicated astro prime |
| Vanguard VEO 3 GO 204CB tripod | Peak Design Travel Tripod | If budget isn't the primary constraint and the tripod will see years of continued travel use beyond this trip |
| darktable (free RAW workflow) | Adobe Lightroom | If the user/friends already pay for Creative Cloud — Lightroom's AI Denoise + familiar UI reduces the learning curve |
| Sequator (Windows stacking) | Starry Landscape Stacker (Mac) | Whenever the editing machine is a Mac, not Windows |
| Built-in camera interval timer | Pixel TW-283 wireless intervalometer | If a specific body lacks an in-camera interval-shooting menu, or for unattended star-trail/timelapse sequences |

## Stack Patterns by Variant

**If the camera body is Nikon Z DX (Z30/Z50/Zfc-class):**
- Prefer Viltrox AF 13mm F1.4 (Z-mount available) or Viltrox 16mm F1.8 Z over the Sigma options
- Because Sigma does not currently make APS-C-native prime/zoom lenses for Nikon Z mount (third-party support is thinner on Z DX than on Sony E / Fuji X / Canon RF-S) — this is a confirmed ecosystem gap, not an oversight

**If most of the friend group edits on Windows:**
- Teach Sequator + darktable (or Lightroom if subscribed) as the default post-processing chapter
- Because this maximizes how many readers can follow along without buying a Mac-only tool

**If most of the friend group edits on macOS:**
- Swap Sequator → Starry Landscape Stacker in the stacking chapter; darktable/RawTherapee/Lightroom all work identically on Mac

## Sources

- [rust-lang/mdBook CHANGELOG](https://github.com/rust-lang/mdBook/blob/master/CHANGELOG.md) — 0.5.0 breaking-change scope
- [actions/starter-workflows pages/mdbook.yml](https://github.com/actions/starter-workflows/blob/main/pages/mdbook.yml) — canonical GitHub Actions build+deploy pattern for mdBook → GitHub Pages
- [mdBook Theme docs](https://rust-lang.github.io/mdBook/format/theme/index.html) — `additional-css`, `fonts/fonts.css` mechanism
- [w3c/csswg-drafts #4285](https://github.com/w3c/csswg-drafts/issues/4285), [MDN word-break](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/word-break) — Korean `word-break: keep-all` rationale
- [Sigma 10-18mm F2.8 DC DN product page](https://www.sigmaphoto.com/10-18mm-f2-8-dc-dn-c) / [SIGMA Press Center pricing](https://press.sigmaphoto.com/product/09/pricing-and-availability-of-sigma-10-18mm-f2-8-dc-dn-contemporary-for-canon-rf-mount-announced/)
- [Sigma 16mm F1.4 DC DN product page](https://www.sigmaphoto.com/16mm-f1-4-dc-dn-c)
- [Viltrox AF 13mm F1.4 (Z-mount) product page](https://viltrox.com/products/af-13mmf14-z-mount-aps-c-prime-lens-for-nikon-z), [PetaPixel review](https://petapixel.com/2022/06/20/viltrox-af-13mm-f-1-4-stm-xf-lens-review-great-lens-better-price/)
- [Rokinon 12mm F2.0 / 10mm F2.8 product pages](https://rokinon.com/) — B&H pricing cross-check
- [Peak Design Travel Tripod official page](https://www.peakdesign.com/products/travel-tripod) — pricing/weight
- [astrobackyard.com Milky Way lens guide 2026](https://astrobackyard.com/best-milky-way-lens/), [capturetheatlas.com lens guide](https://capturetheatlas.com/best-lenses-milky-way-photography/), [PhotoPills Milky Way lens article](http://www.photopills.com/articles/best-lens-for-shooting-milky-way)
- [astrobackyard.com stacking software guide](https://astrobackyard.com/astrophotography-image-stacking-software/), [macobservatory.com Mac stacking guide](https://macobservatory.com/mac-deep-sky-stacking-software-guide/) — Sequator vs Starry Landscape Stacker vs DeepSkyStacker
- [capturetheatlas.com noise reduction software 2026](https://capturetheatlas.com/noise-reduction-software/) — DxO PureRAW 5, Topaz subscription-only shift (Oct 2025), ON1 NoNoise pricing
- [pixelretouching.com RawTherapee vs darktable](https://pixelretouching.com/rawtherapee-vs-darktable), [darktable.org](https://www.darktable.org/) — free RAW workflow comparison
- [skiesandscopes.com astrophotography apps 2026](https://skiesandscopes.com/astrophotography-apps/), [PhotoPills Milky Way guide](https://www.photopills.com/articles/milky-way-photography-guide) — planning app landscape
- [space.com best headlamps for astronomy 2026](https://www.space.com/best-headlamps), [astrophotons.com Petzl Actik Core review](https://astrophotons.com/petzl-actik-core-astrophotography-review) — red headlamp picks
- Confidence note: lens/tripod/software **prices are US retail approximations** as of mid-2026 search results; actual Korean retail pricing (11번가, 쿠팡, B&H 해외구매 등) and exact in-stock mounts should be verified before the book's gear chapter is finalized.

---
*Stack research for: Korean mdBook astrophotography tutorial (MongolPhoto)*
*Researched: 2026-07-09*
