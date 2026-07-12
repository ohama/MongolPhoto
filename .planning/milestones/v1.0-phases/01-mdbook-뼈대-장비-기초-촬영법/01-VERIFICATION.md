---
phase: 01-mdbook-뼈대-장비-기초-촬영법
verified: 2026-07-09T05:06:03Z
status: passed
score: 5/5 must-haves verified
---

# Phase 1: mdBook 뼈대 + 장비 + 기초 촬영법 Verification Report

**Phase Goal:** 독자가 book 사이트에서 장비 추천과 기초 촬영법을 확인하고, 연습 1차를 준비/기록할 수 있는 상태가 된다. 7/17 서해안 실전 전 완료 목표. 장비는 추천만, 구매 가이드 없음.

**Verified:** 2026-07-09T05:06:03Z
**Status:** passed
**Re-verification:** No — initial verification

## Goal Achievement

### Observable Truths (Phase Success Criteria)

| # | Truth | Status | Evidence |
|---|---|---|---|
| 1 | mdBook이 한국어(Noto Sans KR, keep-all)로 로컬 빌드/미리보기 + GH Actions로 Pages 자동 배포되어 링크 공유 가능 | ✓ VERIFIED | `mdbook build src` exits 0; `book.toml` has `language = "ko"`; `custom.css` has `word-break: keep-all` + `@import` of self-hosted `fonts.css` (two real woff2 files, 559KB/541KB, not stubs); `.github/workflows/mdbook.yml` uses `peaceiris/actions-mdbook@v2` build-then-commit-docs pattern; `gh run list` shows a `success` run; `gh api repos/ohama/MongolPhoto/pages` returns `"status":"built"`, `source.branch=main`, `source.path=/docs`; `curl -o /dev/null -w "%{http_code}"` on the live URL returns `200`; deployed `theme/custom.css` on the live site contains `word-break: keep-all`. |
| 2 | 사진이 리사이즈·EXIF 제거되어 챕터 구조 폴더에 들어가는 파이프라인 존재 | ✓ VERIFIED | `scripts/optimize-images.sh` exists, executable, contains `magick "$f" -resize '2000x2000>' -strip -quality 82 ...` (`-strip` removes EXIF/GPS); chapter-matched folders `src/images/gear/` and `src/images/fundamentals/` exist (tracked via `.gitkeep`), matching `01-gear` and `02-fundamentals` chapter dirs. |
| 3 | 독자가 장비 챕터(카메라·렌즈·액세서리·앱·준비물 체크리스트)를 보고 장비를 이해하고 준비 가능 (추천만, 구매 가이드 없음) | ✓ VERIFIED | `src/01-gear/camera-lens.md` (65 lines): mount-by-mount camera table (Sony E/Fuji X/Nikon Z DX/Canon RF-S,EF-M) + lens table (model, mount, approx. price, rationale) + 3-step crop-factor method with cross-ref to `500-npf-rule.md`. `accessories.md` (26 lines): tripod/battery/intervalometer/red-light/lens-heater table + PhotoPills/Stellarium intro. `checklist.md` (46 lines): categorized `- [ ]` checkboxes. `index.md` (13 lines): overview + 3 sub-page links. `grep -n "구매"` and `grep -n "http"` on all four gear files returned **zero matches** — no purchase links or buy-language anywhere. |
| 4 | 독자가 기초 촬영법 챕터로 수동모드·크롭 NPF/500룰·별 수동초점·RAW·은하수 타이밍·현장 워크플로를 따라 할 수 있다 | ✓ VERIFIED | `exposure-basics.md` (53L): M-mode rationale + ISO/조리개/셔터 3요소 + starting-value table. `500-npf-rule.md` (52L): formula code block `500 ÷ (초점거리 × 크롭계수)`, 2 worked examples (16mm×1.5→20.8s; 50mm×1.6→6.25s), cross-ref to `camera-lens.md`, NPF/PhotoPills "Spot Stars" guidance (no manual NPF math forced, matches FEATURES.md teaching order). `focusing.md` (34L): 6 numbered steps (MF → live-view 10x zoom → fine adjust → tape-lock → test-shot → re-check). `raw-and-wb.md` (33L): RAW-vs-JPEG table + 3800–4200K WB starting value. `finding-the-milkyway.md` (51L): 5-factor checklist (season/time, direction/altitude, moon phase incl. 7/17≈13%/8/12 new moon, Bortle incl. Gobi 1-2, weather) + PhotoPills/Stellarium operational use. `field-workflow.md` (52L): 7 numbered on-site steps (도착·암순응→삼각대→구도→세팅→초점→시험촬영→본촬영), cross-referencing all prior fundamentals pages. |
| 5 | 재사용 가능한 연습 로그 템플릿 존재 | ✓ VERIFIED | `src/03-practice/template.md` (44 lines), linked from SUMMARY.md 1부 (real, non-draft link). Contains all 6 required sections (목표/장비 & 세팅/촬영 환경/결과 사진/배운 점·문제점/다음 세션 개선 사항) inside a copy-pasteable markdown code fence, and explicitly states the "다음 세션 개선 사항" → next session's "목표" feedback loop. |

**Score:** 5/5 truths verified

### Required Artifacts

| Artifact | Expected | Status | Details |
|---|---|---|---|
| `src/book.toml` | language=ko, build-dir=../docs, additional-css | ✓ VERIFIED | Contains `language = "ko"`, `build-dir = "../docs"`, `additional-css = ["theme/custom.css"]`, git-repository-url/edit-url on `main`. |
| `src/theme/custom.css` | Korean font stack + keep-all | ✓ VERIFIED | `word-break: keep-all` + `@import url("fonts/fonts.css")` present. |
| `src/theme/fonts/fonts.css` + woff2 files | Self-hosted Noto Sans KR 400/700 | ✓ VERIFIED | Two real woff2 files (559KB, 541KB — not empty placeholders), `@font-face` for weight 400 and 700. |
| `src/SUMMARY.md` | Full 6-part skeleton, Phase 1 real links, later phases draft | ✓ VERIFIED | 1부 has 12 real links to all Phase-1 chapters; 2부/3부/4부/부록 (15 entries) use empty `()` draft links; build succeeds with no missing-file errors. |
| `src/01-gear/{index,camera-lens,accessories,checklist}.md` | GEAR-01..06 content | ✓ VERIFIED | 13/65/26/46 lines respectively; all substantive, no stub markers, no purchase links. |
| `src/02-fundamentals/{index,exposure-basics,500-npf-rule,focusing,raw-and-wb,finding-the-milkyway,field-workflow}.md` | FUND-01..06 content | ✓ VERIFIED | 12/53/52/34/33/51/52 lines; all substantive, formulas/steps correct per research docs. |
| `src/03-practice/template.md` | PRAC-01 reusable template | ✓ VERIFIED | 44 lines, 6 sections, reachable from sidebar. |
| `scripts/optimize-images.sh` | Resize + strip EXIF pipeline | ✓ VERIFIED | Executable, `-strip -quality 82`, `2000x2000>` resize. |
| `src/images/{gear,fundamentals}/` | Chapter-matched image folders | ✓ VERIFIED | Both exist, tracked via `.gitkeep`. |
| `.github/workflows/mdbook.yml` | CI build→commit-docs pattern | ✓ VERIFIED | `peaceiris/actions-mdbook@v2`, `mdbook build src`, commit+push gated on diff, matches `/pages` skill pattern exactly. |
| `docs/index.html` | CI-produced deployment artifact | ✓ VERIFIED | Present, tracked in git, matches local `mdbook build src` output (verified byte-for-byte structurally; only content-hash filenames for JS/CSS assets differ between rebuilds, which is expected mdbook behavior — no functional difference). |
| `README.md` | Pages link | ✓ VERIFIED | Contains `https://ohama.github.io/MongolPhoto/`. |

### Key Link Verification

| From | To | Via | Status | Details |
|---|---|---|---|---|
| `book.toml` | `theme/custom.css` | additional-css array | ✓ WIRED | `additional-css = ["theme/custom.css"]` |
| `theme/custom.css` | `theme/fonts/fonts.css` | @import | ✓ WIRED | `@import url("fonts/fonts.css");` |
| `SUMMARY.md` | `01-gear/index.md` + Phase 1 chapter stubs | markdown links | ✓ WIRED | All 12 real links present, build resolves all of them. |
| `01-gear/camera-lens.md` | `02-fundamentals/500-npf-rule.md` | GEAR-06 cross-reference | ✓ WIRED | Line 65: `[500 / NPF 룰 페이지](../02-fundamentals/500-npf-rule.md)` |
| `01-gear/accessories.md` | PhotoPills / Stellarium | app intro | ✓ WIRED | Both apps introduced with rationale (lines 21-22). |
| `02-fundamentals/500-npf-rule.md` | `01-gear/camera-lens.md` | crop-factor cross-ref | ✓ WIRED | Line 19: `[카메라 & 렌즈 추천](../01-gear/camera-lens.md)` |
| `02-fundamentals/finding-the-milkyway.md` | PhotoPills / Stellarium (operational use) | reuse from accessories.md | ✓ WIRED | Line 16 links back to `../01-gear/accessories.md` and uses apps operationally. |
| `03-practice/template.md` | Phase 2 session logs | "다음 세션 개선" → next "목표" | ✓ WIRED | Explicit statement of the feedback loop (lines 10, 44). |
| `.github/workflows/mdbook.yml` | `docs/` on `main` | build-and-commit | ✓ WIRED | Successful Actions run (`gh run list` → `success`), Pages API confirms `status: built`, live site returns HTTP 200. |

### Requirements Coverage

| Requirement | Status | Evidence |
|---|---|---|
| PUB-01 | ✓ SATISFIED | Korean build/preview confirmed (book.toml, custom.css, `mdbook build` exit 0). |
| PUB-02 | ✓ SATISFIED | GH Actions + Pages deploy confirmed live (200, status=built). |
| PUB-03 | ✓ SATISFIED | optimize-images.sh + chapter-matched image folders. |
| GEAR-01 | ✓ SATISFIED | Mount-by-mount camera table in camera-lens.md. |
| GEAR-02 | ✓ SATISFIED | Lens table with model/mount/price/rationale. |
| GEAR-03 | ✓ SATISFIED | Accessories table in accessories.md. |
| GEAR-04 | ✓ SATISFIED | PhotoPills/Stellarium intro in accessories.md. |
| GEAR-05 | ✓ SATISFIED | checklist.md checkbox list. |
| GEAR-06 | ✓ SATISFIED | 3-step crop-factor calculation method (interpreted as a reusable method, not device-detection, per Roadmap/plan decision "GEAR-06 = 방법 제시"). |
| FUND-01 | ✓ SATISFIED | exposure-basics.md. |
| FUND-02 | ✓ SATISFIED | 500-npf-rule.md formula + worked examples. |
| FUND-03 | ✓ SATISFIED | focusing.md 6-step method. |
| FUND-04 | ✓ SATISFIED | raw-and-wb.md. |
| FUND-05 | ✓ SATISFIED | finding-the-milkyway.md 5-factor checklist. |
| FUND-06 | ✓ SATISFIED | field-workflow.md 7-step sequence. |
| PRAC-01 | ✓ SATISFIED | template.md. |

Note: `.planning/REQUIREMENTS.md` itself still shows all 16 as "Pending" checkboxes — this is a project-tracking file that was not updated during execution, not a functional gap. Recommend the orchestrator update REQUIREMENTS.md status alongside this verification.

### Anti-Patterns Found

None. `grep -r "TODO\|FIXME\|placeholder\|coming soon\|lorem ipsum"` across all Phase 1 content files returned zero matches. `grep -r "작성 예정"` (the plan-01 stub marker) returned zero matches — all stubs were fully replaced with real content by plans 02-04.

### Scope-Constraint Checks

- No purchase links / prices-as-buy-links / lead-time language in gear chapters (`grep -n "구매"` and `grep -n "http"` on all `01-gear/*.md` → 0 matches). Prices are mentioned as "약 XX만원대" reference only, explicitly framed as "이 책은 특정 판매처를 안내하지 않습니다."
- Lens recommendations are mount-by-mount (Sony E / Fuji X / Nikon Z DX / Canon RF-S,EF-M / L-mount), not a single mount.
- GEAR-06 delivered as a reusable 3-step calculation method, not a single-camera walkthrough.

### Human Verification Required

None required for this report — the live site (https://ohama.github.io/MongolPhoto/) has already been checked programmatically (HTTP 200, deployed CSS contains `word-break: keep-all`, Pages API status=built) and per the task instructions was already human-verified/approved by the user during plan 05's checkpoint.

### Gaps Summary

No gaps found. All 5 phase-level observable truths verified against actual files and a live, working `mdbook build`. All 16 in-scope requirements (PUB-01..03, GEAR-01..06, FUND-01..06, PRAC-01) are satisfied by substantive, cross-linked, stub-free content. The GitHub Actions → GitHub Pages deployment pipeline is live and serving the correct Korean-rendered content at https://ohama.github.io/MongolPhoto/. Scope constraints (recommendations-only, no purchase guide, mount-agnostic lens recs, GEAR-06 as a method) all hold under direct grep inspection.

One minor process note (not a phase-goal gap): `.planning/REQUIREMENTS.md` checkboxes for these 16 requirements were not flipped to "Satisfied/Done" during execution — cosmetic tracking-doc drift, does not affect the delivered book.

---

*Verified: 2026-07-09T05:06:03Z*
*Verifier: Claude (gsd-verifier)*
