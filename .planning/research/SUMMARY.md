# Project Research Summary

**Project:** MongolPhoto — 몽골 여행 사진 파트 (v1.2)
**Domain:** Beginner ground-based daytime/twilight travel-photography guide (content project, Korean mdBook), inserted as the new first part of an existing three-part photo guide (기존: 드론 → 준비/연습 → 은하수 → 후보정)
**Researched:** 2026-07-14
**Confidence:** HIGH

## Executive Summary

This milestone adds "몽골 여행 사진" as a brand-new first part of MongolPhoto, ahead of the existing 드론 and 은하수 parts, covering the gear the author actually owns — Canon EOS R7 + Samyang AF 12mm F2.0 RF-S (≈19mm equiv.) + Canon RF 50mm F1.8 STM (≈80mm equiv.) — plus a recommended (not required) RF-S 18-150mm zoom to close the ≈20–79mm gap between the two primes. The single most important open question from planning — whether the Samyang AF 12mm F2.0 actually exists as a genuine Canon RF-S autofocus lens rather than requiring an adapter or manual focus — is **confirmed**: Samyang shipped this exact lens for Canon's APS-C-only RF-S mount in late 2024/early 2025, with real AF (Linear STM) and weather sealing, fully compatible with the R7. No stack changes are needed elsewhere: CR3 RAW reuses the book's existing darktable/Lightroom workflow verbatim, and no new tools, stacking software, or converters are required (daytime single-frame shooting is simpler than the astro part's long-exposure workflow).

The recommended approach mirrors the proven v1.1 drone-part pattern almost exactly: add new numerically-next folders (`11-travel/`, `12-travel-sites/`) without renumbering any existing `01-`–`10-` folders, write all stubs + a reorganized `SUMMARY.md` + updated `book.toml`/`introduction.md`/`README.md` in one "structure first" phase (required because `create-missing = false` hard-fails any build with a dangling link), verify a green `mdbook build`, and only then fill in content — fundamentals first, per-site guides second, reference/gallery last. Content should aggressively reuse what the book already has: the GPS table in `04-mongolia/overview.md`, the exposure/RAW fundamentals in `02-fundamentals/`, the crop-factor method in `07-appendix/camera-lens-picks.md`, and the composition/light concepts introduced in `09-drone/composition.md` — link plus a genuinely-new delta, never re-teach from zero. One necessary structural side-effect: the existing "4부 · 몽골 여행지별 촬영 가이드" (the 은하수 site-by-site guide) must be **renamed** to "은하수 명소별 촬영 가이드," because once a travel-photography part exists, the old title's generic "여행지별" wording becomes ambiguous with the new part's own "여행 사진" branding.

The two risks that matter most for this milestone are both about honesty, not gear or code. First, reference/example photos: any embedded (downloaded and rehosted) image must be traceable to a genuinely free license (Wikimedia Commons CC0/CC BY/CC BY-SA, or Unsplash with no identifiable person) — Google Images, Instagram, 500px, and Unsplash photos with a visible identifiable subject are link-only or excluded, exactly extending the embed-vs-link rule the book already established in `08-references/drone-galleries.md`. Second, people photography: Mongolia-specific consent and etiquette content (ask before photographing anyone identifiable, gers are homes not photo sets, no payment for photos especially of children, livestock aren't props, herders' work takes priority, ovoo ritual etiquette) must be taught as real, cited, Mongolia-specific guidance — not generic Western "always ask permission" boilerplate — while being explicitly tagged MEDIUM confidence (tourism-industry secondary sources, not an ethnographic authority) per the book's existing "정직 표기" discipline. A handful of smaller pitfalls (lens focal-length gap, IBIS/non-IS-prime caveats, sensor-dust during lens swaps, a pre-existing broken "사진 준비" link in `introduction.md`, missing glossary terms) round out what a competent execution needs to get right.

## Key Findings

### Recommended Stack

No new tools or libraries are needed — this milestone is entirely a content addition on top of the existing mdBook + darktable/Lightroom + CR3 workflow. The critical unknown going in (does the Samyang AF 12mm F2.0 actually mount and autofocus on the R7?) is now resolved with HIGH confidence via manufacturer and independent review cross-checks.

**Core technologies / gear (confirmed):**
- **Canon EOS R7** (owned): APS-C, 32.5MP, 1.6× crop, up to 7-stop IBIS, CR3 RAW, dust/drip-resistant (90D-comparable, not fully weatherproof).
- **Samyang AF 12mm F2.0 RF-S** (owned): confirmed genuine Canon RF-S (APS-C-only) mount, real AF via Linear STM, weather-sealed, ≈19mm equivalent, 213g. No adapter or MF workaround needed. Known optical behavior to disclose: barrel distortion (correctable via lens profile), corner softness/coma wide open at F2 (improves by F2.8), vignetting present at both F2 and F5.6.
- **Canon RF 50mm F1.8 STM** (owned): full-frame RF lens used in crop mode on R7 → ≈80mm equivalent, F1.8, no IS, no weather sealing, 160g. Role: environmental portrait/detail/compression lens, not a general walk-around "normal" lens.
- **Canon RF-S 18-150mm F3.5-6.3 IS STM** (recommended, not owned): ≈29–240mm equivalent, IS coordinates with R7's IBIS up to ~7 stops, no weather sealing, 310g. Fills the real ≈20–79mm gap between the two owned primes; framed as "이미 있는 렌즈로도 충분하다, 이건 편의성 업그레이드" — recommend-only, no purchase links/price-comparison content (book-wide constraint).
- **CR3 RAW workflow**: reused as-is — darktable (3.8.0+) and Lightroom/ACR both natively support R7 CR3; no converter or plugin needed. Daytime/twilight shooting is single-frame (no stacking), simpler than the astro workflow.

**Anti-additions confirmed unnecessary:** stacking software (Sequator/DSS — night-only), separate CR3-to-DNG converters, adapter-based third-party-mount lens discussion, and any purchase-guide/price-comparison content beyond rough US-price ranges (Korean retail pricing was out of scope and should be marked "국내가 재확인 필요" if quoted at all).

### Expected Features

Content should follow a teaching dependency chain: intro/structure → daytime camera settings → lens-specific technique → composition/light → people/story → per-site guides → references. See FEATURES.md for the full per-site subject/lens/light table (Tsagaan Suvarga, Bayanzag, Khongoryn Els, Yolyn Am, Baga Gazriin Chuluu).

**Must have (table stakes):**
- 여행 사진 개요·매력 + 책 구조를 최상단 1부로 재편
- 카메라 설정 기초 — daytime M→Av mode switch (explicit "unlearn" of the night chapters' forced-M habit), exposure compensation, metering mode choice
- RAW·화이트밸런스 — daylight WB preset delta (reuse core RAW/WB concept, don't re-teach)
- 초광각(12mm)/준망원(50mm) 활용법 + RF-S 18-150mm 추천 (with the ≈19–80mm gap stated explicitly, in numbers)
- 구도 기초 — rule of thirds, foreground/midground/background layering, frame-within-frame, leading lines/scale (ground-level version of concepts touched in the drone part)
- 빛과 타이밍 — golden/blue hour, midday hard light is *bad* for portraits (unlike the aerial teaching), backlight/silhouette, site-specific light-direction insight (e.g., Tsagaan Suvarga faces east)
- 인물/현장 사진 기초 — candid over posed, expose for skin tone, background simplification
- 여행 사진 스토리텔링 — wide/medium/detail shot framework mapped directly to the two owned lenses
- 명소별 여행 사진 가이드 (5곳) — subjects/composition/timeline per site, reusing existing terrain research
- 유목민 환경인물사진 (동의 예절) — Mongolia-specific, MEDIUM confidence, honesty-tagged
- 고비 야생동물 사진 소재 (아이벡스·수염수리) — framed as "보이면," not guaranteed; honest about the 50mm's non-telephoto limitation
- 여행 사진 참고 자료 — CC-licensed galleries + tutorial links, same embed-vs-link discipline as `drone-galleries.md`

**Should have (differentiators):** the terrain-grounded per-site travel-photo detail (cliff orientation, canyon width forcing 12mm-only shots, dune-ridge shadow timing) is the book's proven competitive moat, already validated twice (astro, drone) — extending it here is high value, high effort, and should not be shortcut.

**Defer (v2+):** real trip photo before/after examples and filling per-site galleries with actual shots (blocked on the real Mongolia trip, same production-timeline dependency as the drone/astro parts); travel video content (hard exclusion, stricter than the drone part's one shallow hyperlapse page); deep studio-portrait lighting technique (orthogonal to environmental/candid travel portraiture).

### Architecture Approach

Insert the new part using the exact structural pattern v1.1 already validated for the drone part: new numerically-next folders on disk (order is controlled entirely by `SUMMARY.md`, not folder numbers), a stubs-first phase to satisfy `create-missing = false`, then content phases, then references/verification last.

**Major components:**
1. **`src/11-travel/`** (4 files: index, camera-settings, composition-and-light, landscape-and-street) — core travel-photography fundamentals, mirrors `09-drone/`'s file shape.
2. **`src/12-travel-sites/`** (overview + 5 site pages) — per-site travel-photo guide, mirrors `10-drone-sites/`; overview must link to `04-mongolia/overview.md`'s GPS table rather than duplicate it, exactly as `10-drone-sites/overview.md` already does.
3. **`src/08-references/travel-*.md`** (2 new files: gear-tutorials, galleries) — added into the existing references folder, mirrors `08-references/drone-*.md`.
4. **Structural rewrites** — `src/SUMMARY.md` (insert new 1부 block, relabel 드론/준비하기/연습/후보정 by +1, and **rename** the old 4부 title to "은하수 명소별 촬영 가이드" to remove the "여행" naming collision), `src/book.toml` description (two-track → three-track), `src/introduction.md` (hero caption, opening paragraph + link target, "이 책을 읽는 법" list rewritten from 6→7 items, closing CTA link, plus a scope disclaimer on the existing 은하수-only gear section), `README.md` 목차.

Reuse discipline is explicit and repo-verified: link, don't duplicate, the GPS table, the glossary (extend in place, don't fork), the RAW-develop workflow (link + short delta, following `09-drone/drone-postprocessing.md`'s template), and the image-licensing/captioning conventions already established in `introduction.md` and `drone-galleries.md`.

### Critical Pitfalls

1. **Unlicensed reference photos** — treating Google Images/Instagram/500px/Flickr-ARR or an Unsplash photo with an identifiable person as embed-safe. Mitigation: apply the book's existing embed-vs-link decision table verbatim (Wikimedia CC0/CC BY/CC BY-SA and non-identifiable Unsplash = embed; everything else = link-only or omit with an honest "찾지 못했습니다" note), reuse the exact caption/attribution format from `introduction.md`/`drone-galleries.md`.
2. **Generic or overstated people-etiquette content** — either bland "ask permission" boilerplate that misses Mongolia specifics, or ritual/payment details stated as settled fact. Mitigation: dedicated Mongolia-specific subsection (consent, ger threshold, ovoo ritual, no payment especially for children, herders/livestock priority) cross-referenced against multiple independent tour-operator sources, tagged MEDIUM confidence with the book's existing "가이드에게 확인" hedge, cross-linked to the drone part's already-published consent rule.
3. **Re-teaching content that already exists** — exposure/histogram reading, RAW rationale, crop-factor math, GPS coordinates, or site hazards restated from zero instead of linked. Mitigation: link + delta pattern to `09-drone/composition.md`, `02-fundamentals/`, `07-appendix/camera-lens-picks.md`, `04-mongolia/overview.md`, and existing per-site pages.
4. **Lens/mount misstatement or optical overstatement** — calling it "RF 12mm" instead of "RF-S," or presenting F2 corner sharpness as typical without a distortion/coma caveat. Mitigation: always state RF-S explicitly; teach barrel-distortion correction as a normal step; recommend F2.8 as the practical working aperture for foreground+background sharpness.
5. **Silent 19–80mm focal-length gap and IBIS overstatement** — implying the two primes form a complete kit, or citing "8 stops" of stabilization without noting neither owned lens has optical IS. Mitigation: state the gap in numbers and tie the 18-150mm recommendation directly to it; caveat IBIS-only performance for the two non-IS primes; add a lens-swap sensor-dust callout (genuinely new content, not covered by the drone chapter's sealed-gimbal advice).

## Implications for Roadmap

Based on combined research, the v1.1 drone-part precedent is directly reusable and should shape phase structure almost 1:1. Suggested phase structure:

### Phase 1: 구조·제목 재편 + 스텁 (Structure & Stubs)
**Rationale:** `create-missing = false` means any SUMMARY.md link to a nonexistent file breaks the entire book build — v1.1 proved that locking structure first, before any real content, is not optional. This must also be the phase that fixes the "1부" naming collision.
**Delivers:** 12 stub files (`11-travel/*` ×4, `12-travel-sites/*` ×6, `08-references/travel-*` ×2), reorganized `SUMMARY.md` (new 1부 여행 사진 + 여행 참고자료 블록; relabel 드론→2부, 준비하기→3부, 연습→4부, 후보정→6부; **rename** old 4부 to "5부 · 은하수 명소별 촬영 가이드"), updated `book.toml` description, rewritten `introduction.md` (hero caption, opening paragraph, reading-order list, closing CTA, 은하수-gear scope disclaimer), updated `README.md` 목차, and a green `mdbook build src`.
**Addresses:** 여행 사진 개요·매력 + 책 구조 재편 (table stakes).
**Avoids:** Pitfall — silently stale "1부 = 드론" cross-links anywhere in the book (audit every existing internal reference, not just add the new ones); the pre-existing naming collision between the new part and the old 4부 title.

### Phase 2: 여행 사진 기초 (`11-travel/`)
**Rationale:** Camera settings and lens technique are prerequisites for composition/light content, which in turn is a prerequisite for per-site and people content (per the dependency chain in FEATURES.md) — this phase must land before per-site guides can reference it.
**Delivers:** index (개요), camera-settings (M→Av switch, exposure comp, metering, 12mm/50mm technique, 18-150mm recommendation, mount/optics/IBIS/dust caveats), composition-and-light (구도 기초 + 빛과 타이밍, ground-level delta from the drone part's aerial teaching), landscape-and-street (인물/현장 기초 including the Mongolia people-etiquette subsection + 스토리텔링 wide/medium/detail framework).
**Uses:** CR3/RAW reuse via link to `02-fundamentals/`; crop-factor reuse via link to `07-appendix/camera-lens-picks.md`.
**Implements:** `11-travel/` component from ARCHITECTURE.md.
**Avoids:** Pitfalls 2 (generic/overstated etiquette), 3 (re-teaching exposure/RAW/crop-factor from zero), 4 (mount/optics misstatement), 5 (silent focal-length gap), 6 (IBIS overstatement, missing dust callout).

### Phase 3: 코스 명소별 여행 사진 가이드 (`12-travel-sites/`)
**Rationale:** Per-site content depends on the fundamentals (lens choice, composition, light, people technique) established in Phase 2, and is explicitly the book's highest-leverage differentiator per FEATURES.md — cheap relative to value because the terrain research already exists twice over.
**Delivers:** overview hub (linking to `04-mongolia/overview.md`'s GPS table, not duplicating it) + 5 site pages (Tsagaan Suvarga, Bayanzag, Khongoryn Els, Yolyn Am, Baga Gazriin Chuluu) each with subject/lens/light pairings and a daytime shooting timeline, reusing terrain facts from `04-mongolia/*.md` and `10-drone-sites/*.md`.
**Addresses:** 명소별 여행 사진 가이드, 명소별 촬영 타임라인, 고비 야생동물 소재 (differentiators from FEATURES.md).
**Avoids:** Pitfall 3 (duplicate GPS table or hazard content), Pitfall 1 (unlicensed per-site reference photos — verify every embedded image against the licensing table).

### Phase 4: 여행 사진 참고 자료 + 최종 검증 (Gallery & References)
**Rationale:** Highest licensing risk of the entire milestone (Pitfall 1 is explicitly the top-priority risk, mirroring how the drone milestone's regulations chapter was the v1.1 top priority) — sequencing it last maximizes verification time before publishing and matches the v1.1 precedent of ending with references + a final full build/link check.
**Delivers:** `08-references/travel-gear-tutorials.md`, `08-references/travel-galleries.md` (structured like `drone-galleries.md`'s ✅ 재사용가능/👁 감상전용 split), glossary additions for new terms (배럴 디스토션, IBIS, STM, 환산 화각), a fix or proper inline restatement of the pre-existing broken "사진 준비" reference in `introduction.md` (do not propagate it into the new gallery page), and a final `mdbook build` + link/license audit against the "Looks Done But Isn't" checklist in PITFALLS.md.
**Addresses:** 여행 사진 참고 자료 (table stakes).
**Avoids:** Pitfall 1 (core risk), Pitfall 7 (dead "사진 준비" link), Pitfall 8 (missing glossary terms).

### Phase Ordering Rationale

- Structure-first is a hard build-system requirement (`create-missing = false`), not a stylistic choice — confirmed by direct precedent in v1.1's Phase 7.
- Fundamentals-before-per-site follows the feature dependency chain documented in FEATURES.md (settings → lens technique → composition/light → people → per-site synthesis).
- References/gallery last maximizes the time available to verify licensing on every embedded image — the single highest-risk content type in this milestone — before the book ships, mirroring v1.1's Phase 10 placement.
- The 4부 rename is bundled into Phase 1 (not a separate phase) because it's a single heading-line change with no content impact, but it must happen alongside the SUMMARY reorg or the naming collision persists into every later phase's cross-references.

### Research Flags

Phases likely needing deeper research during planning:
- **Phase 2 (여행 사진 기초):** Mongolia people-etiquette content is MEDIUM confidence (tourism-industry secondary sources only) — planning should decide exactly how to hedge/cite this content, and may benefit from an additional pass specifically re-verifying ovoo/ger/payment norms if a Mongolian cultural-authority source becomes available.
- **Phase 4 (참고 자료):** Per-image licensing verification is inherently a research-per-image task, not a one-time lookup — planning should budget explicit time for this rather than treating it as boilerplate, and should decide the fix for the pre-existing `checklists.md` dead-link gap (in-scope patch vs. flagged-and-deferred).

Phases with standard patterns (skip research-phase):
- **Phase 1 (구조 재편):** Direct, already-executed precedent exists in v1.1 Phase 7 — mechanical replay, no new research needed.
- **Phase 3 (명소별 가이드):** Terrain facts, GPS table, and site-page structure all already exist and are directly reusable; the lens/light/subject pairings are already worked out in FEATURES.md's per-site table.

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack | HIGH | Samyang RF-S mount existence/specs confirmed via manufacturer page + independent reviews (DPReview, Digital Camera World, B&H stock); all gear specs cross-verified against Canon official spec pages; CR3/darktable/Lightroom compatibility confirmed via release notes and official supported-camera lists. Only gap: Korean (domestic) retail pricing was out of scope and remains unverified. |
| Features | HIGH on composition/settings/light fundamentals (cross-verified against generic travel-photography sources and the book's own proven drone/astro teaching pattern). MEDIUM on Mongolia nomad-photography etiquette and Gobi wildlife-sighting specifics (aggregated from tour-operator/photographer blogs, not one authoritative source) — this MEDIUM rating must carry into the shipped content's framing, not just this research doc. |
| Architecture | HIGH on folder naming, SUMMARY reorg, write order, and reuse points (all directly observed by reading the current repo state and the one-milestone-old v1.1 precedent that solved the identical structural problem). MEDIUM on the exact travel-content file split (4 files in `11-travel/`, 6 in `12-travel-sites/`) — reasonable proposal, but roadmap/planning should feel free to adjust file boundaries within the same folder structure. |
| Pitfalls | HIGH on reference-photo licensing mechanics and the book's own existing honesty conventions (directly read from repo). HIGH on Samyang/Canon R7 spec verification. MEDIUM-HIGH on Mongolia people-photography etiquette (cross-referenced across multiple independent tourism sources that converge, but still secondary sources). MEDIUM on exact redundancy boundaries since the new part's final chapter list doesn't exist yet. |

**Overall confidence:** HIGH

### Gaps to Address

- **Korean retail pricing** for all four gear items was not researched (scope was US-market only) — if the camera-settings chapter quotes any price, it must be marked "국내가 재확인 필요," and planning should decide whether to include price figures at all given the book's "추천만, 구매 강제 아님" stance.
- **Mongolia people-etiquette specifics** (ovoo offering customs, exact ger-threshold rules, payment norms) are MEDIUM confidence secondary-source aggregations — planning should carry the "가이드에게 확인," "일반적으로 통용되는 예절" hedge language into the actual chapter text, not just this summary, and should not invent specifics beyond what's traceable to the cited sources.
- **Pre-existing broken "사진 준비" link** in `introduction.md` (points to a rule that doesn't exist in `07-appendix/checklists.md`) was discovered as a side effect of this research, not created by it — planning should explicitly decide whether Phase 4 fixes this or merely avoids propagating it, and flag it as a small independent cleanup item either way.
- **Exact `11-travel/`/`12-travel-sites/` file boundaries** are a reasonable proposal, not a hard requirement — if planning finds a natural reason to split or merge a proposed file (e.g., merging landscape-and-street into composition-and-light, or splitting camera-settings into gear vs. settings), that's within the same folder-structure envelope and doesn't require new research.
- **Gobi wildlife content (ibex, bearded vulture)** is opportunistic/seasonal by nature — planning should ensure the shipped copy never reads as a sighting guarantee, consistent with the "보이면" framing already established in FEATURES.md.

## Sources

### Primary (HIGH confidence)
- [Samyang US — AF 12mm F2.0 RF-S official product page](https://samyangus.com/products/samyang-af-12mm-f2-0-rf-s-ultra-wide-angle-lens)
- [LK Samyang (manufacturer) official product page](https://www.lksamyang.com/en/product/product-view.php?seq=657)
- [Canon Europe — EOS R7 official specifications](https://www.canon-europe.com/cameras/eos-r7/specifications/)
- [Canon Central & North Africa — RF 50mm F1.8 STM official specifications](https://en.canon-cna.com/lenses/rf-50mm-f1-8-stm/specifications/)
- [Canon Europe — RF-S 18-150mm F3.5-6.3 IS STM official specifications](https://www.canon-europe.com/lenses/rf-s-18-150mm-f3-5-6-3-is-stm/specifications/)
- [Adobe official — Camera Raw supported cameras list](https://helpx.adobe.com/camera-raw/kb/camera-raw-plug-supported-cameras.html)
- [Unsplash License](https://unsplash.com/license) / [Unsplash Help Center — model releases](https://help.unsplash.com/en/articles/6604664-when-do-i-need-to-get-a-model-release)
- [Wikimedia Commons — Commons:Licensing](https://commons.wikimedia.org/wiki/Commons:Licensing) / [Commons:License laundering](https://commons.wikimedia.org/wiki/Commons:License_laundering)
- This project's own repo, directly read: `src/SUMMARY.md`, `src/book.toml`, `src/introduction.md`, `README.md`, `src/04-mongolia/overview.md`, `src/09-drone/*.md`, `src/10-drone-sites/*.md`, `src/08-references/drone-galleries.md`, `src/08-references/drone-mongolia-regulations.md`, `src/07-appendix/*.md`, `.planning/PROJECT.md`, `.planning/milestones/v1.1-ROADMAP.md`, `.planning/milestones/v1.1-phases/07-구조-제목-확장/07-01-PLAN.md`, `.planning/milestones/v1.1-research/PITFALLS.md`

### Secondary (MEDIUM confidence)
- [DPReview — Samyang RF-S mount announcement](https://www.dpreview.com/news/4046261270/samyang-rf-mount-aps-c-lens-announcement-12mm-f2), [Digital Camera World review](https://www.digitalcameraworld.com/cameras/lenses/lk-samyang-af-12mm-f-2-rf-s-review), [nightscapephotographer.com hands-on review](https://nightscapephotographer.com/samyang-af-12mm-f2-rf-s-lens-review/) (distortion/coma/vignetting findings), [techradar.com R7 review](https://www.techradar.com/reviews/canon-eos-r7) (IBIS/weather-sealing)
- [Responsible Photography in Mongolia — Eternal Landscapes](https://eternal-landscapes.co.uk/responsible-photography-in-mongolia/) (Mongolia-specialist operator, already cited elsewhere in this project)
- [Mongolia's Sacred Ovoos — Eternal Landscapes](https://eternal-landscapes.co.uk/mongolias-sacred-ovoos-2/), [Ovoo — Wikipedia](https://en.wikipedia.org/wiki/Ovoo), [Ger Etiquette — Atlas Mongolia Travel](https://atlasmongoliatravel.com/ger-etiquette-mongolia/), [Mongolian Customs & Etiquette — World Nomads](https://www.worldnomads.com/travel-safety/eastern-asia/mongolia/a-guide-to-mongolian-customs)
- Generic travel-photography technique sources (PhotoWhoa, DIYPhotography, Amateur Photographer Guide, Nomad Photographer, Photographei, Finding the Universe) — used for composition/light/settings fundamentals, cross-verified against the book's own established teaching pattern

### Tertiary (LOW confidence)
- Gobi wildlife-tour marketing pages (Explorer Company, Three Camel Lodge, Whitehawk Birding) — used only for opportunistic-sighting framing (ibex, bearded vulture at Yolyn Am), explicitly not treated as a sighting guarantee
- US retail pricing snapshots (B&H, Samyang US, Amazon) — timestamp-dependent, marked "국내가 재확인 필요" for any Korean-market use

---
*Research completed: 2026-07-14*
*Ready for roadmap: yes*
