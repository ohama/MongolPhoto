---
phase: 18-local-merge
verified: 2026-07-15T00:00:00Z
status: passed
score: 3/3 must-haves verified
re_verification: false
---

# Phase 18: 국소 보정 + 합치기 Verification Report

**Phase Goal:** 독자가 마스킹·디테일로 국소 보정을 하고, 파노라마·HDR 병합을 촬영 브라케팅과 연결해 이해한다.
**Verified:** 2026-07-15
**Status:** passed
**Re-verification:** No — initial verification

## Goal Achievement

### Observable Truths

| # | Truth | Status | Evidence |
| - | ----- | ------ | -------- |
| 1 | (LOCAL-01) masking-and-detail.md fully teaches masking + detail tools deferred from Phase 17 | ✓ VERIFIED | See artifact + honesty checks below |
| 2 | (LOCAL-01) Over-editing avoidance box present (헤일로·과채도·검정 뭉갬·디헤이즈 과다) | ✓ VERIFIED | masking-and-detail.md L69–81 warning box |
| 3 | (LOCAL-02) panorama-hdr.md covers Photo Merge + DNG re-develop + verified R7 shooting connection | ✓ VERIFIED | See artifact + honesty checks below |

**Score:** 3/3 truths verified

### Required Artifacts

| Artifact | Expected | Status | Details |
| -------- | -------- | ------ | ------- |
| `src/13-editing/masking-and-detail.md` | Masking tools + detail + over-edit box | ✓ VERIFIED | 90 lines, no stubs, has H1 + 3 sections |
| `src/13-editing/panorama-hdr.md` | Photo Merge + Deghost + DNG + shooting link | ✓ VERIFIED | 80 lines, no stubs, 4 sections |

### Criterion 1 — Masking + Detail (masking-and-detail.md)

| Tool | Expected | Status | Line |
| ---- | -------- | ------ | ---- |
| Select Sky/Subject/People/Background/Objects | all 5 auto masks | ✓ | L22–26 |
| Brush / Linear Gradient / Radial Gradient / Range Mask | all 4 manual masks (+Color/Luminance/Depth) | ✓ | L30–33 |
| Sharpen + Alt-drag Masking slider | edge-only sharpen, 100% zoom | ✓ | L45–47 |
| AI Denoise RAW-only | CR3-only, JPEG excluded | ✓ | L56 |
| Denoise creates new DNG | 원본 CR3 불변 | ✓ | L57 |
| Denoise-before-sharpen | order rule | ✓ | L59–63 |
| Delivers Phase 17 deferred tools | explicit promise-repayment | ✓ | L14 + links to develop-order.md, travel-recipes.md |

### Criterion 2 — Over-editing box

All four required symptoms present in the ⚠️ box (L69–81): 헤일로 (halo, L70/74), 과채도·생동감 (L71), 검정 뭉갬 = 크러시드 블랙 (L72), 디헤이즈 과다 (L70/73). Prevention principles (절반만 남기기, 100%↔축소 토글, before/after `` ` ``, "덜 한 것이 낫다") included.

### Criterion 3 — Panorama/HDR (panorama-hdr.md)

| Item | Expected | Status | Line |
| ---- | -------- | ------ | ---- |
| Photo Merge Panorama / HDR / HDR Panorama | all 3, Ctrl/Cmd+M | ✓ | §1 L11–23 |
| Deghost | None/Low/Medium/High | ✓ | §2 L29 |
| Merged result = editable DNG re-develop | run through develop order 2–17 | ✓ | §3 L38–42 |
| R7 AEB 기본 3장 / 2·5·7 / ±3 EV / 1/3스톱 | verified numbers | ✓ | L52–54 |
| Panorama 30~50% overlap | overlap rule | ✓ | L67 |
| Manual exposure/WB/focus lock | 수동 고정 | ✓ | L68 |
| Links to shoot-for-edit.md, not duplicating | defers shooting reasons | ✓ | L75 |

### Key Link Verification

| From | To | Status | Details |
| ---- | -- | ------ | ------- |
| masking-and-detail.md | develop-order.md | ✓ WIRED | L7,9,89 — cites 15단계 마스킹·14단계 디테일, no duplication |
| masking-and-detail.md | travel-recipes.md | ✓ WIRED | L14,22,23,24,83 — repays (c)(d)(e) recipe promises |
| masking-and-detail.md | panorama-hdr.md | ✓ WIRED | L87 next-chapter link |
| panorama-hdr.md | develop-order.md | ✓ WIRED | L40 re-develop steps 2–17 |
| panorama-hdr.md | shoot-for-edit.md | ✓ WIRED | L75,79 shooting-part link |
| panorama-hdr.md | camera-settings.md, av-mode-auto-iso.md | ✓ WIRED | L75 |

All link targets confirmed to exist on disk.

### Honesty Checks

| Check | Result | Evidence |
| ----- | ------ | -------- |
| Adobe feature names match research/FEATURES.md | ✓ PASS | Denoise/Enhance/Detail-panel-v14.4/RAW-only (FEATURES L18), Masking panel (L19), Select Subject/Sky/Background/Objects/People (L20), Brush/Linear/Radial Gradient/Range Mask Color·Luminance·Depth (L21), Photo Merge Panorama/HDR/HDR Panorama Ctrl+M (L22) — all match doc verbatim |
| R7 AEB numbers NOT inflated | ✓ PASS | Doc 기본 3장·2/5/7·±3 EV·1/3스톱 exactly matches PITFALLS L71–72 & L180–181 (Canon 공식 매뉴얼 HIGH). Doc explicitly flags "9장·±5 EV" internet claim as exaggeration (L61) |
| No fabricated URL/price | ✓ PASS | No http URLs, no currency/prices in either file (grep hits were Korean words 원본/원재료/원형) |
| No new image assets | ✓ PASS | Both SUMMARYs `created: []`; git diff b0d09b0~1..HEAD shows zero .jpg/.png/.jpeg/.webp and no src/images/ changes |

### Build Verification

- `book.toml` has `create-missing = false` (L10)
- `/opt/homebrew/bin/mdbook build src` → EXIT 0, green, no missing-file errors
- `git restore docs/ && git clean -fdq docs/` executed — working tree clean
- No stray root `book/` or `src/book/` dir

### Anti-Patterns Found

None. No TODO/FIXME/placeholder/스텁/작성 예정 patterns in either file.

### Requirements Coverage

| Requirement | Status | Notes |
| ----------- | ------ | ----- |
| LOCAL-01 | ✓ SATISFIED | Masking + detail + over-edit box all delivered (truths 1–2) |
| LOCAL-02 | ✓ SATISFIED | Photo Merge + DNG re-develop + verified shooting connection (truth 3) |

### Human Verification Required

None required for goal achievement. Optional (prose/pedagogy quality, not structural): a Korean-reading editor may skim for tone consistency, but all factual and structural success criteria are verified.

### Gaps Summary

No gaps. All three observable truths verified, both artifacts substantive and correctly wired, all four honesty checks pass, build green, no new image assets, docs cleaned. Phase 18 goal achieved.

---

_Verified: 2026-07-15_
_Verifier: Claude (gsd-verifier)_
