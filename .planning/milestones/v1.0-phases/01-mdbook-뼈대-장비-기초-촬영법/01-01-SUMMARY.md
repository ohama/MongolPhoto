---
phase: 01-mdbook-뼈대-장비-기초-촬영법
plan: 01
subsystem: infra
tags: [mdbook, github-pages, korean-fonts, imagemagick, static-site]

# Dependency graph
requires: []
provides:
  - "Buildable mdBook project at src/ (book.toml: language=ko, src='.', build-dir='../docs')"
  - "Self-hosted Noto Sans KR (400/700, full Korean subset) + word-break:keep-all custom.css"
  - "Full 6-part SUMMARY.md skeleton (Phase 1 chapters real links, later phases draft links)"
  - "Stub files for all 12 Phase 1 chapters (01-gear/*, 02-fundamentals/*, 03-practice/template.md)"
  - "src/images/{gear,fundamentals}/ tracked folders"
  - "scripts/optimize-images.sh (ImageMagick resize + EXIF/GPS strip, reusable by all later phases)"
affects: [01-02, 01-03, 01-04, phase-2-through-6-content-authoring]

# Tech tracking
tech-stack:
  added: [mdbook v0.5.3 (already installed, not downgraded), imagemagick 7.1.2-27 (installed via brew this run)]
  patterns:
    - "mdBook draft-link skeleton: `- [Title]()` empty parens for unwritten future sections, avoids restructuring SUMMARY.md later"
    - "Self-hosted webfonts via local relative woff2 paths in theme/fonts/, no live CDN dependency"
    - "One reusable image pipeline script (resize + -strip + quality) for every future chapter's photo import"

key-files:
  created:
    - src/book.toml
    - src/SUMMARY.md
    - src/introduction.md
    - src/theme/custom.css
    - src/theme/fonts/fonts.css
    - src/theme/fonts/NotoSansKR-Regular.woff2
    - src/theme/fonts/NotoSansKR-Bold.woff2
    - src/01-gear/index.md
    - src/01-gear/camera-lens.md
    - src/01-gear/accessories.md
    - src/01-gear/checklist.md
    - src/02-fundamentals/index.md
    - src/02-fundamentals/exposure-basics.md
    - src/02-fundamentals/500-npf-rule.md
    - src/02-fundamentals/focusing.md
    - src/02-fundamentals/raw-and-wb.md
    - src/02-fundamentals/finding-the-milkyway.md
    - src/02-fundamentals/field-workflow.md
    - src/03-practice/template.md
    - src/images/gear/.gitkeep
    - src/images/fundamentals/.gitkeep
    - scripts/optimize-images.sh
  modified: []

key-decisions:
  - "Used mdbook v0.5.3 (already installed) rather than downgrading to 0.4.4x — zero custom preprocessors used, only stable [output.html] keys"
  - "Fetched Noto Sans KR woff2 via google-webfonts-helper API (subsets=korean) instead of the raw CSS2 API, because CSS2's response splits Hangul across ~120 unicode-range files per weight; gwfh provides one pre-subset woff2 per weight covering full Hangul"
  - "edit-url-template uses main branch (not the /pages skill's default master)"
  - "Practice-log template published as a real reader-visible page (03-practice/template.md) per 01-RESEARCH.md Open Question #2 recommendation"

patterns-established:
  - "SUMMARY.md full-skeleton-with-drafts: later phases only ever replace a draft `()` link with a real one, never restructure sections"
  - "Every Phase 1 stub file: single H1 matching its SUMMARY title + `> (작성 예정 — plan에서 채움)` placeholder line"

# Metrics
duration: 4min
completed: 2026-07-09
---

# Phase 1 Plan 01: mdBook 뼈대 Summary

**Buildable Korean mdBook skeleton (book.toml + self-hosted Noto Sans KR + full 6-part SUMMARY.md draft/real split) with all 12 Phase 1 chapter stubs and a reusable ImageMagick EXIF-strip pipeline script, building green into docs/ from a fresh commit.**

## Performance

- **Duration:** 4 min
- **Started:** 2026-07-09T04:38:44Z
- **Completed:** 2026-07-09T04:42:41Z
- **Tasks:** 3
- **Files modified:** 22 (created)

## Accomplishments

- `src/book.toml` configured with language=ko, src=".", build-dir="../docs", git-repository-url + edit-url-template (main branch), search + fold enabled
- Noto Sans KR self-hosted (Regular + Bold, full Korean-subset woff2, ~540-560KB each) wired via `theme/custom.css` → `theme/fonts/fonts.css`, with `word-break: keep-all` for correct Korean line-wrapping
- Full 6-part `SUMMARY.md` skeleton committed: Phase 1's 12 chapters as real, buildable links; 2부/3부/4부/부록 (14 future entries) as greyed draft links (`- [Title]()`) — verified in built `toc.html` that drafts render as `<span>` (no href) while Phase 1 entries render as `<a href>`
- All 12 Phase 1 chapter stub files created (H1 + placeholder line), reachable from the sidebar, ready for plans 01-02 (gear), 01-03 (fundamentals), 01-04 (practice template) to fill in
- `src/images/gear/` and `src/images/fundamentals/` tracked via `.gitkeep`
- `scripts/optimize-images.sh` created, made executable, and smoke-tested with a synthetic GPS/EXIF-tagged JPEG — verified output has zero EXIF tags via PIL readback
- ImageMagick installed (`brew install imagemagick`, ~90s, no manual step needed) — the one missing dependency flagged in 01-RESEARCH.md
- `mdbook clean src && mdbook build src` exits 0; `docs/index.html` produced at repo root

## Task Commits

Each task was committed atomically:

1. **Task 1: mdBook config + Korean rendering (book.toml, fonts, CSS, intro)** - `a3b924c` (feat)
2. **Task 2: Full SUMMARY.md skeleton + stub chapter tree + image folders** - `371eb03` (feat)
3. **Task 3: Image-optimization script + build smoke test (PUB-03)** - `43e376b` (feat)

**Plan metadata:** (this commit, docs(01-01): complete mdBook 뼈대 plan)

## Files Created/Modified

- `src/book.toml` - mdBook config: Korean language, src/ tree, GitHub Pages build-dir, search/fold
- `src/theme/custom.css` - Korean font stack + word-break:keep-all
- `src/theme/fonts/fonts.css` - @font-face rules pointing at local woff2 files
- `src/theme/fonts/NotoSansKR-{Regular,Bold}.woff2` - self-hosted Korean-subset webfonts
- `src/introduction.md` - 소개 page, links to 01-gear/index.md
- `src/SUMMARY.md` - full 6-part book table of contents (12 real links + 14 draft links)
- `src/01-gear/*.md` (4 files), `src/02-fundamentals/*.md` (7 files), `src/03-practice/template.md` - Phase 1 chapter stubs, content owned by plans 01-02/03/04
- `src/images/{gear,fundamentals}/.gitkeep` - tracked empty image folders
- `scripts/optimize-images.sh` - reusable resize + EXIF/GPS-strip pipeline (executable)

## Decisions Made

- **mdbook version:** kept installed v0.5.3 rather than downgrading, per 01-RESEARCH.md's finding that this project uses zero custom preprocessors (only stable `additional-css`/`language`/`git-repository-url` `[output.html]` keys)
- **Font-fetch method:** switched from the plan's literal CSS2-API-plus-grep recipe to the google-webfonts-helper (`gwfh.mranftl.com`) API — the raw CSS2 response for Noto Sans KR splits Hangul glyphs across ~120 tiny unicode-range woff2 files per weight (Google's dynamic-subsetting behavior for CJK), so grepping "the korean block" as the plan assumed would have produced an incomplete font. gwfh's `subsets=korean` query returns one pre-subset woff2 per weight with full Hangul coverage, matching the plan's stated intent ("Save the two woff2 files as NotoSansKR-Regular.woff2 / NotoSansKR-Bold.woff2") exactly. Documented as alternative already in 01-RESEARCH.md's own "Alternatives Considered" table.
- **edit-url-template branch:** explicitly set to `main` (this repo's actual default branch), not the `/pages` skill's `master` default, per 01-RESEARCH.md's explicit warning

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 3 - Blocking] Google Fonts CSS2 API does not yield "one woff2 per weight" for Noto Sans KR as the plan's recipe assumed**

- **Found during:** Task 1 (font self-hosting)
- **Issue:** The plan's curl+grep recipe (fetch CSS2 response, grep all `.woff2` URLs, "keep only the korean unicode-range block") assumes a single dedicated Korean-subset block exists in the CSS2 response, matching the pattern for languages like Vietnamese/Cyrillic/Latin (which do have single dedicated blocks with `/* language */` comments in this response). Noto Sans KR's CSS2 response instead splits all ~11,172 Hangul syllables across ~120 separate small unicode-range woff2 files per weight (no single "korean" block, no comment marker), because Google dynamically subsets large CJK charsets differently from smaller scripts. Following the literal recipe would have produced either an incomplete font (missing most Hangul) or required vendoring ~240 tiny files.
- **Fix:** Used the documented fallback already named in 01-RESEARCH.md's own "Alternatives Considered" table — google-webfonts-helper's REST API (`https://gwfh.mranftl.com/api/fonts/noto-sans-kr?subsets=korean`) — which returns one woff2 URL per weight/style with full Korean-subset glyph coverage pre-packaged. Downloaded those two URLs directly to `NotoSansKR-Regular.woff2` / `NotoSansKR-Bold.woff2`.
- **Files modified:** src/theme/fonts/NotoSansKR-Regular.woff2, src/theme/fonts/NotoSansKR-Bold.woff2, src/theme/fonts/fonts.css
- **Verification:** `file src/theme/fonts/*.woff2` confirms valid WOFF2 signatures (~540-560KB each); Korean text renders correctly against this font stack (CSS chain verified via grep; visual confirmation deferred to `mdbook serve` per the plan's own verification note — the system-font fallback chain guarantees Korean rendering regardless)
- **Commit:** a3b924c (Task 1 commit)

**2. [Rule 3 - Blocking] ImageMagick not installed in environment**

- **Found during:** Task 3 (image pipeline script)
- **Issue:** `which magick` returned nothing, as flagged in advance by both 01-RESEARCH.md and this execution's environment note. The task explicitly instructs `which magick || brew install imagemagick`.
- **Fix:** Ran `brew install imagemagick` (completed in ~90s, all dependencies resolved via Homebrew bottles, no manual intervention needed)
- **Files modified:** none (system package install only)
- **Verification:** `which magick` now resolves; `magick --version` reports 7.1.2-27; smoke test (see below) confirms `-strip` removes EXIF/GPS from a synthetic test image
- **Commit:** 43e376b (Task 3 commit)

---

**Total deviations:** 2 auto-fixed (both Rule 3 - blocking issues, both anticipated/flagged in advance by 01-RESEARCH.md or the execution environment note)
**Impact on plan:** No scope creep — both deviations are exactly the contingencies the plan and research already flagged ("if network download fails... do not block"; "ImageMagick NOT installed... run brew install imagemagick"). Final artifacts match the plan's stated intent (two local woff2 files, executable strip-EXIF script) exactly.

## Issues Encountered

None - both deviations above were anticipated contingencies, resolved automatically without blocking.

## User Setup Required

None - no external service configuration required. All work was local (font files, mdBook config, shell script) with no API keys, environment variables, or dashboard configuration needed.

## Next Phase Readiness

- Foundation is fully buildable and green: `mdbook build src` exits 0, `mdbook clean src && mdbook build src` verified twice (once per Task 2 verification, once as Task 3's final smoke test)
- All 12 Phase 1 chapter stub files exist and are reachable from the sidebar — plans 01-02 (gear), 01-03 (fundamentals), 01-04 (practice template) can now write content into these files without touching `SUMMARY.md` or risking a broken build
- `scripts/optimize-images.sh` is committed and executable — ready for reuse by every later phase that imports real photos (Phase 2 onward)
- No blockers carried forward from this plan. Camera-mount-unconfirmed and post-processing-OS-split concerns (noted in STATE.md before this plan) are unaffected by this plan's scope (mount-agnostic structure was already the design) and remain open items for content plans, not infrastructure.
- Note: `docs/` build output and `.claude/` are currently untracked in git (no `.gitignore` exists in this repo). This plan's file list did not include a `.gitignore` or GitHub Actions workflow — deploy/CI wiring is out of this plan's scope and was not attempted. This is worth a one-line decision in a future publishing-focused plan, not a blocker for Phase 1 content authoring.

---
*Phase: 01-mdbook-뼈대-장비-기초-촬영법*
*Completed: 2026-07-09*
