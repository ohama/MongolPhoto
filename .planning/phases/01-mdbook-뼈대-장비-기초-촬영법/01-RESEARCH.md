# Phase 1: mdBook 뼈대 + 장비 + 기초 촬영법 - Research

**Researched:** 2026-07-09
**Domain:** mdBook publishing setup (Korean) + astrophotography gear/fundamentals content authoring
**Confidence:** HIGH (publishing toolchain, verified against actual installed environment) / MEDIUM-HIGH (content facts, inherited from prior project research) / MEDIUM (open decisions flagged below need a planner/user call)

## Summary

This phase is two different kinds of work stitched together: (1) a one-time **mdBook + GitHub Pages plumbing setup** that is almost entirely mechanical and already half-automated by two skills already installed in this repo (`/pages`, `/mdbook`, plus `mdbook-docs-images`/`markdown-image-insertion`/`mdbook-utils`), and (2) **Korean prose content** (gear recommendations + shooting fundamentals + a reusable log template) that has to be *written*, not generated — no skill writes book content for you.

The critical discovery from inspecting this repo directly (not just prior research): **the repo's own `/pages` skill uses a different deploy pattern than `.planning/research/STACK.md` recommended**, and **the environment's installed mdbook is v0.5.3, not the 0.4.4x STACK.md recommended pinning to.** Both are resolvable, but the planner must pick one path, not silently blend two conflicting patterns. See "Don't Hand-Roll" and "Open Questions" below — this is the single most load-bearing finding in this document.

Content-wise, all the hard facts the gear/fundamentals chapters need (crop-corrected 500-rule formula with worked examples, NPF-rule guidance, focus-at-infinity method, moon-phase dates for 7/17 and 8/12-8/17, Bortle ratings) are **already fully derived** in `.planning/research/{STACK,FEATURES,PITFALLS}.md` — this research does not re-derive them, it tells the planner exactly where to pull each fact from so chapters can be drafted directly against those sources.

**Primary recommendation:** Run `/pages src` (repo root as project root, `src/` as the mdBook source directory) to get book.toml + SUMMARY.md scaffolding for free in the exact `src/01-gear/`, `src/02-fundamentals/`, `src/images/...` tree shape `ARCHITECTURE.md` already designed — then adopt the skill's built-in commit-docs-to-branch GitHub Pages deploy pattern (not the OIDC `actions/deploy-pages` pattern STACK.md described) since it's the one actually wired up and battle-tested in this repo already. Layer Noto Sans KR + `keep-all` CSS and an ImageMagick-based resize/strip-EXIF script on top; both are small, one-time additions. Sequence the phase as: (1) skeleton+deploy+image-pipeline first (blocking, everything else needs somewhere to live), then (2) gear and (3) fundamentals chapters in parallel (their cross-reference is soft, not blocking), then (4) practice-log template + final SUMMARY.md wiring last (small, needs fundamentals' vocabulary settled).

## Standard Stack

### Core

| Tool | Version (confirmed in this environment) | Purpose | Why Standard |
|------|-------------------------------------------|---------|---------------|
| mdBook | **v0.5.3** (`mdbook --version` on this machine, Homebrew) | Static book generator | STACK.md recommended pinning to 0.4.4x to avoid 0.5.0's preprocessor/renderer API churn — but **this environment already has 0.5.3 installed**, and this project uses zero custom preprocessors (only `additional-css`, a stable core-renderer feature, not a preprocessor API). Fighting the installed version (downgrading via `cargo install mdbook --version 0.4.4x`) adds friction with no benefit here. **Recommendation: use the installed 0.5.3, do not downgrade.** Verify with an early throwaway `mdbook build` that `additional-css`/`language`/`git-repository-url` keys still work as expected (they should — these are long-stable `[output.html]` keys, not part of the 0.5.0 preprocessor rewrite) — treat this as a 5-minute smoke test in the first plan, not a research gap. |
| `/pages` skill (`.claude/commands/pages.md`) | repo-local | Scaffolds `book.toml` + `SUMMARY.md` + GitHub Actions workflow | Already installed, already targets exactly this repo (origin `github.com/ohama/MongolPhoto`). Reuse it — don't hand-roll book.toml from scratch. |
| `/mdbook` skill (`.claude/commands/mdbook.md`) | repo-local | Local build/serve/clean/sync | Use `mdbook serve <dir> --open` for local Korean-rendering preview (PUB-01) during authoring. |
| `mdbook-docs-images` / `markdown-image-insertion` skills | repo-local | House-style rules: images under `images/` relative path, italic caption line under each image, no `<img>` tags, no HTML admonitions, alt text required, `SUMMARY.md` registration required | These already encode PUB-03's folder-structure requirement and the general Markdown discipline — apply automatically to every chapter file, no separate decision needed. |
| ImageMagick (`magick`) | not yet installed — `which magick` returned nothing in this environment; only `sips` (macOS built-in) is present | Resize + strip EXIF/GPS in one pass | `sips` alone cannot reliably strip all EXIF/GPS metadata (no dedicated "strip all metadata" flag); ImageMagick's `-strip` flag does this cleanly and is the same tool STACK.md already settled on. One-time setup: `brew install imagemagick`. |
| Self-hosted Noto Sans KR (woff2, Regular + Bold) | Google Fonts, OFL | Korean glyph coverage + consistent rendering across readers' OS | mdBook's default theme font has no Hangul glyphs; self-hosting avoids depending on a live Google Fonts CDN call from GitHub Pages and keeps rendering consistent. See Code Examples for the exact download recipe. |

### Supporting

| Tool | Purpose | When to Use |
|------|---------|-------------|
| `mdbook-fix-cjk-spacing` preprocessor | Fixes a known mdBook CJK line-wrap spacing quirk (Pitfall #17 in `PITFALLS.md`) | **Do not add preemptively.** STACK.md already decided against custom preprocessors to avoid migration/CI risk under deadline pressure. Only reach for this if visual QA during this phase's build actually shows the spacing artifact — treat as a conditional fallback, not a day-1 dependency. |
| `mdbook-image-size` preprocessor | Auto-injects width/height on `<img>` to prevent layout shift | Optional polish (STACK.md marked "not required for launch"). Skip in Phase 1; revisit in Phase 6 polish pass if there's time. |

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| ImageMagick `-strip` | `exiftool -all=` | Either works; ImageMagick is preferred here because it does resize + strip + quality in one command instead of two tools/two passes. Neither is currently installed — one `brew install` either way. |
| Self-hosted Noto Sans KR via curl + Google Fonts CSS2 API | google-webfonts-helper (gwfh.mranftl.com) pre-packaged download | gwfh is a faster manual download if the curl approach below is fiddly; functionally identical output (woff2 files + `@font-face` CSS). Either is fine — pick whichever the author finds less friction to do once. |
| `/pages src` (repo root + `src/` subdir) | `/pages .` (repo root itself as the mdBook source) | Root-as-source would mix `book.toml`/`SUMMARY.md`/`images/` directly alongside `.claude/`, `.planning/`, `.git/` at the repo root — works technically (mdBook only cares about files listed in `SUMMARY.md`) but is messier and diverges from `ARCHITECTURE.md`'s already-designed `src/01-gear/...` tree. `/pages src` reproduces that tree exactly by construction (see Architecture Patterns). |

**Installation:**
```bash
brew install imagemagick   # only missing dependency in this environment
# mdbook already installed (v0.5.3) — no action needed
```

## Architecture Patterns

### Recommended Project Structure (Phase 1 scope only)

```
MongolPhoto/                        # repo root (git already initialized, origin set)
├── .github/workflows/mdbook.yml    # generated by /pages src
├── src/                            # mdBook project root — pass this dir to /pages
│   ├── book.toml                   # generated by /pages src (src = ".", build-dir = "../docs")
│   ├── SUMMARY.md                  # generated + hand-edited (see below)
│   ├── introduction.md             # 소개 (prefix chapter)
│   ├── theme/
│   │   ├── custom.css              # word-break: keep-all, font-family stack
│   │   └── fonts/
│   │       ├── fonts.css           # @font-face rules
│   │       ├── NotoSansKR-Regular.woff2
│   │       └── NotoSansKR-Bold.woff2
│   ├── 01-gear/
│   │   ├── index.md                # 장비 가이드 개요
│   │   ├── camera-lens.md          # GEAR-01, GEAR-02, GEAR-06
│   │   ├── accessories.md          # GEAR-03, GEAR-04 (apps folded in here — see rationale below)
│   │   └── checklist.md            # GEAR-05
│   ├── 02-fundamentals/
│   │   ├── index.md
│   │   ├── exposure-basics.md      # FUND-01 (+ starting ISO/aperture/shutter numbers)
│   │   ├── 500-npf-rule.md         # FUND-02
│   │   ├── focusing.md             # FUND-03
│   │   ├── raw-and-wb.md           # FUND-04
│   │   ├── finding-the-milkyway.md # FUND-05
│   │   └── field-workflow.md       # FUND-06
│   ├── 03-practice/
│   │   └── template.md             # PRAC-01 — see "reader-visible template" decision below
│   └── images/
│       ├── gear/
│       └── fundamentals/
├── docs/                            # build output (git-committed by CI, per /pages skill pattern)
└── .planning/                       # unrelated to the book; not under src/, never touched by mdbook
```

**Why `src/` and not repo root or a nested `src/src/`:** `/pages src` treats `src/` itself as the mdBook project (its `book.toml` will have `src = "."`, meaning "the directory I'm sitting in," i.e. `src/` — not a further-nested `src/src/`). This reproduces `ARCHITECTURE.md`'s already-planned tree (`src/01-gear/...`, `src/images/...`) exactly, while keeping the repo root clean of book files (`.planning/`, `.claude/`, `.git/` stay siblings, not book content). `build-dir = "../docs"` puts build output at the repo root as `docs/`, which is what classic GitHub Pages branch-deploy expects.

**03-practice, 04-mongolia, 05-postprocessing, 06-appendix folders do not need to exist yet** — those are later phases' scope. Only stub them in `SUMMARY.md` as draft (unlinked) entries per the pattern below; do not create empty folders speculatively.

### Pattern 1: SUMMARY.md — full book skeleton now, draft links for unwritten parts

mdBook's `SUMMARY.md` supports **draft chapters**: `- [Title]()` with empty parens renders as a greyed-out, unclickable sidebar entry with no file required. Use this to lay out the *entire* planned book structure in Phase 1 (matching `ARCHITECTURE.md`'s six-part design) while only Phase 1's own chapters have real files behind them. This means every later phase's plan only ever needs to *replace a draft link with a real one and add the file* — never restructure `SUMMARY.md`'s shape.

```markdown
# Summary

[소개](introduction.md)

# 1부 · 준비하기

- [장비 가이드](01-gear/index.md)
  - [카메라 & 렌즈 추천](01-gear/camera-lens.md)
  - [필수 액세서리 & 앱](01-gear/accessories.md)
  - [출발 전 체크리스트](01-gear/checklist.md)
- [촬영 기초](02-fundamentals/index.md)
  - [노출의 기본: M모드 3요소](02-fundamentals/exposure-basics.md)
  - [500 / NPF 룰 — 크롭센서 셔터속도 계산](02-fundamentals/500-npf-rule.md)
  - [별에 초점 맞추기](02-fundamentals/focusing.md)
  - [RAW와 화이트밸런스](02-fundamentals/raw-and-wb.md)
  - [은하수 찾기와 타이밍](02-fundamentals/finding-the-milkyway.md)
  - [현장 촬영 워크플로](02-fundamentals/field-workflow.md)
- [연습 로그 템플릿](03-practice/template.md)

# 2부 · 연습 로그

- [연습 1차 — 집]()
- [연습 2차 — 서해안 (7/17)]()
- [연습 3차 — 집]()
- [연습 4차 — 집 (몽골 직전 리허설)]()

# 3부 · 몽골 (8/13 ~ 8/17)

- [여행 개요]()
- [Day 1 · 8/13]()
- [Day 2 · 8/14]()
- [Day 3 · 8/15]()
- [Day 4 · 8/16]()
- [Day 5 · 8/17]()

# 4부 · 후보정

- [워크플로 개요]()

# 부록

- [현장 치트시트]()
- [체크리스트 모음]()
- [앱·소프트웨어 가이드]()
- [용어 사전]()
```

**Note:** unlike `ARCHITECTURE.md`'s original plan (which kept `_template.md` unlinked and copy-paste-only), this research recommends **linking the practice-log template as a real, reader-visible page** (`03-practice/template.md`, part of 1부, not 2부) — see rationale under Open Questions. It stays reachable even after Session 1's real chapter replaces its own draft link in Phase 2.

### Pattern 2: GEAR-04 (앱 안내) folds into `accessories.md`, not a standalone page

`ARCHITECTURE.md`'s original tree didn't have a dedicated apps file under `01-gear/`; `FUND-05` (은하수 찾기·타이밍) also needs to reference the same apps (PhotoPills, Stellarium) operationally. Recommendation: introduce PhotoPills/Stellarium once, briefly, as a "필수 앱" subsection inside `01-gear/accessories.md` (satisfies GEAR-04: what they are, why you need them), then `02-fundamentals/finding-the-milkyway.md` (FUND-05) uses them operationally without re-introducing them. Avoids a near-duplicate page.

### Pattern 3: GEAR-06 is a method box, not a standalone chapter

Per the phase context (already decided): camera mount/model is unconfirmed, so GEAR-06 ("실제 기종에 맞춰 세팅·화각 계산") cannot be "here is your exact camera's menu path" — it must be **a teachable method**: (1) look up your camera's crop factor (table: Sony E / Fuji X / Nikon Z DX ≈ 1.5×, Canon RF-S/EF-M ≈ 1.6×), (2) compute full-frame-equivalent focal length (`lens mm × crop factor`), (3) apply that equivalent to the 500-rule formula in `02-fundamentals/500-npf-rule.md`. Place this as a labeled callout/subsection inside `01-gear/camera-lens.md` (where lens recommendations already live) and cross-reference it from `02-fundamentals/500-npf-rule.md` rather than writing it twice. This also directly satisfies Pitfall #16 in `PITFALLS.md` ("steps not reproducible by a beginner reader with a different camera").

### Anti-Patterns to Avoid

- **Writing `SUMMARY.md` only for Phase 1's chapters and re-structuring it every later phase.** Use the full-skeleton-with-drafts pattern above instead — it's a one-time decision that prevents five future re-edits.
- **Creating empty folders for `03-practice/`(sessions)/`04-mongolia/`/`05-postprocessing/`/`06-appendix/` now.** Only `SUMMARY.md` draft links are needed; folders/files get created by the phase that actually writes them.
- **Re-deriving the NPF rule's formula by hand for the book.** Every source consulted (this project's own `FEATURES.md`, `PITFALLS.md`, and the wider photography-teaching literature) converges on: teach the crop-corrected 500-rule as the hand-calculable fallback (formula + worked examples already exist in `PITFALLS.md` Pitfall #2), and point to PhotoPills' "Spot Stars" calculator or an online NPF calculator for the more accurate number — do not attempt to teach readers to hand-compute the NPF formula (it requires pixel pitch, a number readers won't have handy). This is a **Don't Hand-Roll** item, see below.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| mdBook + GitHub Actions scaffolding | A custom `book.toml`/workflow YAML from scratch | `/pages src` (repo-local skill) | Already targets this exact repo's origin, already produces a working Actions workflow + `.nojekyll` + README link — reinventing it risks subtly diverging from a pattern that's already tested in this environment. |
| NPF-rule hand computation for the book | A derived-from-scratch NPF formula walkthrough | Cite PhotoPills' Spot Stars calculator / any published NPF calculator, teach the crop-corrected 500-rule as the manual fallback | The NPF formula needs pixel pitch (sensor-specific, not something a beginner reader can look up easily); every source already reviewed recommends teaching it as "use this app," not deriving it by hand. |
| Image resize/EXIF-strip pipeline | A custom Node/Python image-processing script | `magick <in> -resize 2000x2000\> -strip -quality 82 <out>` (one ImageMagick call, wrapped in a 10-line shell loop — see Code Examples) | This is a solved, one-line problem; a custom script adds a dependency (Node/Python + libraries) for something ImageMagick already does natively and fast. |
| Korean web-font self-hosting | Manually converting TTF→WOFF2 with a font tool | Google Fonts CSS2 API (or gwfh.mranftl.com) already serves woff2 directly — just download it | Google already ships pre-subsetted woff2; there's no conversion step needed if you fetch the right endpoint (see Code Examples for the exact recipe, including the User-Agent trick needed to get woff2 instead of ttf). |
| Practice-log / field-day template design | Inventing a new logbook format from scratch | The exact skeleton already specified in `.planning/research/ARCHITECTURE.md` ("Pattern 1: The Repeatable Practice-Log Template") | Already designed, matches the project's practice-session structure, no reason to redesign. |

**Key insight:** almost nothing in this phase's *plumbing* half needs original engineering — every piece (scaffolding, image pipeline, font hosting, template shape) has an existing, already-researched or already-installed answer. The actual original work in this phase is the *prose* (gear picks with reasons, fundamentals explanations) — protect planning time for that, not for re-solving solved plumbing problems.

## Common Pitfalls

### Pitfall 1: Two conflicting GitHub Pages deploy patterns exist in this project's own history

**What goes wrong:** `.planning/research/STACK.md` (from prior project-level research) recommends the **OIDC / `actions/deploy-pages`** pattern (Settings → Pages → Source: **GitHub Actions**, no branch/folder setting, no bot commits). The repo's own installed `/pages` skill (`.claude/commands/pages.md`) instead implements a **build-and-commit-to-branch** pattern (`peaceiris/actions-mdbook@v2` builds `docs/`, the workflow `git commit`s and pushes it back, and Settings → Pages → Source: **Deploy from a branch**, Branch: `main`, Folder: `/docs`). These are mutually exclusive Pages configurations — mixing them (e.g., running the skill's workflow but setting Pages source to "GitHub Actions") will not deploy correctly.

**Why it happens:** The STACK.md research and the repo's skill were authored independently and reflect two different (both valid) eras/conventions of GitHub Pages + mdBook deployment.

**How to avoid:** **Recommendation: use the skill's committed pattern** (`/pages src`) — it's already implemented, already scoped to this repo's exact origin, and does not require writing new CI YAML by hand under deadline pressure. Set repo Settings → Pages → Source: **Deploy from a branch**, Branch: `main`, Folder: `/docs`. This is a decision the planner must make explicitly and record — do not leave both possible configurations implied in the plan.

**Warning signs:** GitHub Pages shows a 404 or stale content after a push; check Settings → Pages → Source matches whichever workflow pattern was actually implemented.

### Pitfall 2: Assuming `sips` strips EXIF/GPS like ImageMagick's `-strip`

**What goes wrong:** macOS's built-in `sips` (present in this environment; `magick`/`convert`/`exiftool` are **not** installed) can resize and re-encode JPEGs but has no dedicated "strip all metadata" flag — GPS coordinates from trip photos could survive a naive `sips`-only pipeline and leak location data when published to a public GitHub Pages site.

**How to avoid:** `brew install imagemagick` once, use `magick ... -strip ...` (see Code Examples) as the one-command resize+strip step for every image before it enters `src/images/`.

**Phase to address:** This phase, since PUB-03 requires it and this is the first phase creating any image pipeline convention — decided once here, used unchanged by every later phase.

### Pitfall 3: mdBook draft-chapter syntax used for content that should ship pre-emptively

`ARCHITECTURE.md`'s "Anti-Pattern 5" already documents this precisely for Mongolia day chapters (don't use `- [Day 3]()` for content that has a useful pre-trip planning pass) — that's Phase 4's concern, not this phase's. In Phase 1, the *opposite* risk applies: draft syntax is exactly the right tool for `2부`/`3부`/`4부`/부록 entries, since there is **zero** content — not even a plannable pre-pass — for any of them yet. Don't over-apply Anti-Pattern 5's lesson here; it doesn't transfer to genuinely-empty future sections.

### Pitfall 4: Forgetting the mdBook 0.5.x version mismatch when copy-pasting STACK.md's CI YAML

If the planner copies STACK.md's `actions/starter-workflows/pages/mdbook.yml` reference pattern verbatim, it will likely resolve to whatever mdBook version that starter workflow pins (check at execution time) — which may differ from the locally-installed 0.5.3 used for `mdbook serve` during authoring. **Keep local dev version and CI-pinned version the same** (whichever is chosen) to avoid "works locally, breaks in CI" surprises on a tight deadline. If adopting the `/pages` skill's workflow (`peaceiris/actions-mdbook@v2`, `mdbook-version: 'latest'`), this self-resolves since both will track latest — just re-run `mdbook serve` locally right after any `brew upgrade mdbook` to keep them in sync.

## Code Examples

### book.toml (target shape, produced by `/pages src` then hand-adjusted)

```toml
[book]
title = "몽골 은하수 촬영기"
authors = ["ohama"]
language = "ko"
description = "트래킹 장비 없이 몽골에서 은하수 사진 찍기 — 장비부터 촬영, 후보정까지"
src = "."

[build]
build-dir = "../docs"
create-missing = false

[output.html]
default-theme = "light"
preferred-dark-theme = "navy"
git-repository-url = "https://github.com/ohama/MongolPhoto"
edit-url-template = "https://github.com/ohama/MongolPhoto/edit/main/src/{path}"
additional-css = ["theme/custom.css"]

[output.html.fold]
enable = true

[output.html.search]
enable = true
limit-results = 30
boost-title = 2
boost-hierarchy = 1
```

Note `edit-url-template` uses `main` (this repo's actual default branch, confirmed via `git status` → "On branch main") — the `/pages` skill's own template defaults to `master` in its docs; override it.

### theme/custom.css (Korean line-breaking + font stack)

```css
@import url("fonts/fonts.css");

body {
  font-family: "Noto Sans KR", "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
  word-break: keep-all;
  overflow-wrap: break-word;
}
```

### theme/fonts/fonts.css — self-hosting recipe

```bash
# One-time: fetch Korean-subset woff2 files + matching @font-face CSS from Google Fonts.
# Requires a modern-browser User-Agent string, otherwise Google serves ttf, not woff2.
mkdir -p src/theme/fonts
UA="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36"
curl -s -A "$UA" \
  "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap" \
  -o /tmp/notosanskr.css

# Download every referenced woff2 into theme/fonts/, keeping only the "korean" unicode-range block
# (Noto Sans KR's CSS2 response ships multiple unicode-range subsets; korean-subset block covers
# Hangul + the Latin/punctuation glyphs actually used in this book — pulling only that block keeps
# the woff2 payload small instead of vendoring every language subset Google serves.)
grep -oE 'https://fonts.gstatic.com/[^)]+\.woff2' /tmp/notosanskr.css | sort -u | while read -r url; do
  curl -s -o "src/theme/fonts/$(basename "$url")" "$url"
done

# Then hand-edit /tmp/notosanskr.css's @font-face blocks: keep only the 400/700-weight, Korean
# unicode-range entries, rewrite each src: url(https://fonts.gstatic.com/...) to a local relative
# path url(NotoSansKR-Regular.woff2) / url(NotoSansKR-Bold.woff2), save as src/theme/fonts/fonts.css.
```

If this curl dance is friction, the documented alternative is manually downloading a pre-packaged kit from `https://gwfh.mranftl.com/fonts/noto-sans-kr?subsets=korean` (select weights 400 + 700, "Modern" woff2-only format) — it produces the same `fonts.css` + `.woff2` files, no scripting required.

### Image pipeline script (PUB-03)

```bash
#!/usr/bin/env bash
# scripts/optimize-images.sh <input-dir> <output-dir>
# Resize to max 2000px long edge, strip EXIF/GPS, JPEG quality 82.
# Requires: brew install imagemagick
set -euo pipefail
IN="$1"; OUT="$2"
mkdir -p "$OUT"
shopt -s nullglob nocaseglob
for f in "$IN"/*.jpg "$IN"/*.jpeg "$IN"/*.png; do
  base="$(basename "$f")"
  magick "$f" -resize '2000x2000>' -strip -quality 82 "$OUT/${base%.*}.jpg"
done
echo "Done: $(ls "$OUT" | wc -l) file(s) -> $OUT"
```

Usage during authoring: `scripts/optimize-images.sh ~/Desktop/raw-exports src/images/gear` (repeat per chapter subfolder). This directly satisfies PUB-03's "resize + strip EXIF" requirement with a single reusable command; no images exist yet for this phase (see Open Questions), but the script should be committed now so every later phase's photo import reuses it unchanged.

### Practice-log template (PRAC-01) — verbatim, already fully specified

Reuse exactly as designed in `.planning/research/ARCHITECTURE.md` ("Pattern 1: The Repeatable Practice-Log Template"):

```markdown
# 연습 N차 — [장소] ([날짜])

## 목표
이번 세션에서 확인/연습하려는 것 (예: 초점 잡는 법 숙달, 인터벌로미터 세팅)

## 장비 & 세팅
사용 장비, 카메라 설정값 (조리개/ISO/셔터스피드/초점거리)

## 촬영 환경
날씨, 월령, 광공해, 시간대 (야외 세션이면 위치·GPS 추가)

## 결과 사진
![설명](../images/practice/session-N/xxx.jpg)
*그림. 캡션*

## 배운 점 / 문제점
잘 된 것, 실패한 것, 원인 분석

## 다음 세션 개선 사항
다음 번에 바꿀 것 → 다음 세션 "목표" 섹션과 연결됨
```

For Phase 1, publish this as `03-practice/template.md` with a short intro paragraph explaining it's meant to be copied for each session (rather than as a hidden `_template.md` — see Open Questions for why).

### Crop-corrected 500-rule — worked examples (already derived, reuse verbatim)

From `.planning/research/PITFALLS.md` Pitfall #2 — use directly in `02-fundamentals/500-npf-rule.md`:

```
최대 노출시간(초) = 500 ÷ (렌즈 초점거리 × 크롭계수)
```

- Sony/Fuji-style APS-C (crop 1.5×), 16mm lens: 500 ÷ (16 × 1.5) = 500 ÷ 24 ≈ **20.8초**
- Canon APS-C (crop 1.6×), 50mm lens: 500 ÷ (50 × 1.6) = **6.25초**

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|-------------------|---------------|--------|
| mdBook 0.4.x pinning to avoid 0.5.0 preprocessor churn (STACK.md's original recommendation) | Use whatever is installed (0.5.3 confirmed in this environment) since this project has zero custom preprocessors | This research pass (2026-07-09), by directly checking `mdbook --version` in the actual environment | Removes an unnecessary pinning/downgrade step; one less thing to manage under deadline pressure |
| OIDC `actions/deploy-pages` GitHub Pages deploy (STACK.md's original recommendation) | Commit-`docs/`-to-branch via the repo's own `/pages` skill, since it's the pattern actually implemented and ready to invoke | This research pass, by reading `.claude/commands/pages.md` directly | Avoids writing/debugging new CI YAML from scratch; reuses tested repo tooling. Trade-off: adds bot commits to the repo's history (minor, accepted) |

## Open Questions

1. **Which GitHub Pages deploy pattern to lock in — OIDC (STACK.md) vs. commit-to-branch (`/pages` skill)?**
   - What we know: both work technically; the skill's pattern is already implemented and repo-scoped.
   - What's unclear: whether the user has any preference (e.g., dislike of bot commits cluttering history).
   - **Recommendation: use the skill's commit-to-branch pattern** (lower implementation risk under the 7/17 deadline) unless the user objects — flag this as a one-line decision to confirm at plan time, not a research gap requiring more investigation.

2. **Should the practice-log template be a hidden author-only file (`_template.md`, `ARCHITECTURE.md`'s original design) or a reader-visible chapter?**
   - What we know: PRAC-01's phase success criterion says "독자가 ... 연습 1차를 준비/기록할 수 있는 상태" (the *reader* can prepare/log), and the project's audience explicitly includes 지인(초보자) who may want to run their own parallel practice log.
   - What's unclear: whether the author wants friends copying this template for their own logs, or whether it's purely the author's own internal scaffold.
   - **Recommendation: publish it as a real, linked page** (`03-practice/template.md`) — costs nothing extra (it was already going to be written), and better serves the "지인들도 따라 할 수 있게" core value from `PROJECT.md`. If wrong, downgrading it to unlinked is a one-line `SUMMARY.md` edit later.

3. **No sample photos exist yet for this phase.** Today is 2026-07-09; Practice Session 1 (which would produce the first real photos) hasn't happened. Phase 1's requirements (GEAR-*, FUND-*, PRAC-01) don't actually require real astrophotos — PROJECT.md's "각 단계별 실제 촬영 사진 수록" requirement is satisfied starting PRAC-02 (Phase 2), not here. **Recommendation: Phase 1 chapters should ship without photos**, using text + the `mdbook-docs-images` skill's HTML-comment "image spec" convention (documents *what* a diagram would show, e.g. exposure-triangle diagram, focus-technique steps) where a visual would help, rather than fabricating placeholder images (the repo's own image-insertion skill explicitly forbids generating fake image files). Gear-chapter product photos are also out — no product photography exists and none should be fabricated; describe gear in prose/tables instead (which is also what STACK.md's gear tables already look like).

4. **Camera mount still unconfirmed** (carried over from `STACK.md`/`SUMMARY.md`'s top open item). GEAR-01/02/06 as scoped by the phase context are explicitly mount-agnostic ("렌즈 추천은 마운트별로 제시", GEAR-06 = teach the calculation method, not assume one body) — so this phase does **not** block on resolving the mount. If the user confirms their exact body before Phase 2, `01-gear/camera-lens.md` can be tightened with a "당신의 카메라" callout; not required for Phase 1 completion.

5. **Editing OS for post-processing (Windows vs. Mac)** — resolved per phase context ("둘 다 다루기로 결정됨"). Not a Phase 1 blocker (Phase 3's stacking chapter is where this actually matters), but if `01-gear/accessories.md`'s app section or checklist mentions software, note both platforms rather than defaulting to one, for consistency with the resolved decision.

## Sources

### Primary (HIGH confidence)
- This repo, directly inspected: `.claude/commands/pages.md`, `.claude/commands/mdbook.md`, `.claude/skills/mdbook-utils.skill.md`, `.claude/skills/mdbook-docs-images.skill.md`, `.claude/skills/markdown-image-insertion.skill.md` — exact scaffolding behavior, deploy pattern, house style rules
- This environment, directly checked: `mdbook --version` → v0.5.3; `which magick/convert/exiftool/sips` → only `sips` present; `git status`/`git remote -v` → repo initialized, `main` branch, origin `github.com/ohama/MongolPhoto.git`
- `.planning/PROJECT.md`, `.planning/REQUIREMENTS.md`, `.planning/ROADMAP.md` — phase scope, requirement IDs, success criteria, the GEAR-06/lens-mount scope decision already made in context

### Secondary (MEDIUM-HIGH confidence, inherited from prior project research — not re-verified in this pass)
- `.planning/research/STACK.md` — mdBook/GitHub Pages toolchain (deploy-pattern recommendation superseded by finding #1 above), font self-hosting rationale, gear lens/tripod/app picks
- `.planning/research/ARCHITECTURE.md` — six-part book structure, practice-log template skeleton, `src/` tree design (reused directly)
- `.planning/research/FEATURES.md` — NPF-vs-500-rule teaching order, moon-phase dates (7/17 ~13% waxing crescent; 8/12 new moon), Bortle ratings for Gobi sites
- `.planning/research/PITFALLS.md` — crop-corrected 500-rule formula + worked examples (Pitfall #2), focus-at-infinity method (Pitfall #3), CJK mdBook spacing quirk (Pitfall #17)

## Metadata

**Confidence breakdown:**
- Standard stack (mdBook/GitHub Pages plumbing): HIGH — verified directly against this repo's installed skills and this environment's installed tool versions, not just external docs
- Architecture (SUMMARY.md/folder structure): HIGH — reconciles two previously-independent designs (`ARCHITECTURE.md`'s tree vs. the `/pages` skill's scaffolding convention) into one consistent, verified-compatible plan
- Content facts (500-rule, moon phase, Bortle, focus method): MEDIUM-HIGH — inherited from prior research passes (`STACK.md`/`FEATURES.md`/`PITFALLS.md`), not re-verified with fresh web searches in this pass, since the task instructed reusing existing research rather than re-deriving it
- Open decisions (deploy pattern, template visibility): flagged explicitly rather than silently resolved — planner should make a one-line call on each, not treat them as blocking unknowns

**Research date:** 2026-07-09
**Valid until:** ~30 days for the plumbing/stack findings (stable); content facts (moon phase, dates) are tied to the fixed 2026 calendar dates already locked in `PROJECT.md` and don't expire before the trip.
