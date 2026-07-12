---
phase: 04-후보정-연습
verified: 2026-07-09T17:20:00Z
status: passed
score: 3/3 must-haves verified
---

# Phase 4: 후보정(post-processing) 연습 Verification Report

**Phase Goal:** 독자가 은하수 사진을 RAW 현상 → 스태킹 → 강조 보정 → 전/후 비교 순으로 후보정하는 법을 일반 가이드로 익힌다.
**Verified:** 2026-07-09T17:20:00Z
**Status:** passed
**Re-verification:** No — initial verification

## Goal Achievement

### Observable Truths

| # | Truth | Status | Evidence |
|---|-------|--------|----------|
| 1 | 독자가 RAW 현상 기본(노출·화밸·대비·색감) 절차를 따라 할 수 있다 (EDIT-01) | ✓ VERIFIED | `src/05-postprocessing/raw-develop.md` — numbered 4-step order (화이트밸런스→노출/하이라이트·섀도→대비/디헤이즈→색감/채도), tool-agnostic (darktable/Lightroom), links `../02-fundamentals/raw-and-wb.md` for RAW rationale/WB value instead of restating |
| 2 | 독자가 Windows(Sequator)·Mac(Starry Landscape Stacker) 두 도구로 스태킹해 노이즈를 줄이는 법을 안다 (EDIT-02) | ✓ VERIFIED | `src/05-postprocessing/stacking.md` — both tools present with step lists, DeepSkyStacker/Topaz explicitly marked not-recommended with reasons, 10~20장/15~20초 premise stated, links `field-workflow.md` for "why multiple frames", stack-first order stated + mutual link to raw-develop.md |
| 3 | 독자가 은하수 강조 보정과 전/후 비교로 효과를 이해한다 (EDIT-03/EDIT-04) | ✓ VERIFIED | `enhance-milkyway.md` has 헤일로/블랙뭉갬/과채도 warnings, zero 마스크/레이어/주파수 분리 mentions; `before-after.md` has worded before/after per adjustment step + 3 HTML-comment placeholders, zero real image files |

**Score:** 3/3 truths verified

### Required Artifacts

| Artifact | Expected | Status | Details |
|----------|----------|--------|---------|
| `src/05-postprocessing/raw-develop.md` | EDIT-01 RAW 현상 워크플로 | ✓ VERIFIED | 16 lines, stack-first note in opening, links raw-and-wb.md ×2, links stacking.md, links enhance-milkyway.md, links template.md |
| `src/05-postprocessing/stacking.md` | EDIT-02 스태킹 | ✓ VERIFIED | 44 lines, "Sequator" ×2, "Starry Landscape Stacker" ×2, "DeepSkyStacker"+"Topaz" not-recommended section, "10~20장" premise, field-workflow.md link, raw-develop.md link (stack-first), 1 HTML placeholder |
| `src/05-postprocessing/enhance-milkyway.md` | EDIT-03 강조 보정 | ✓ VERIFIED | 23 lines, "헤일로" present, 블랙뭉갬/과채도 warnings present, 마스크/레이어/주파수 분리 grep = 0, links raw-develop.md and before-after.md |
| `src/05-postprocessing/before-after.md` | EDIT-04 전/후 비교 | ✓ VERIFIED | 33 lines, worded before/after for WB/노출/대비/채도/스태킹, `<!-- 사진` count = 3 (≥2 required), zero .png/.jpg files in src/05-postprocessing/ |
| `src/SUMMARY.md` | 4부 placeholder → 4 real links | ✓ VERIFIED | `- [워크플로 개요]()` gone; 4부 block now has exactly 4 links to 05-postprocessing/{raw-develop,stacking,enhance-milkyway,before-after}.md; 1~3부/부록 sections visually unchanged (same entries as before) |
| `src/01-gear/camera-lens.md` | Stale "Phase 3" ref → stacking.md link | ✓ VERIFIED | Line 26: "Phase 3" string count = 0; now reads "(부족하면 나중에 [스태킹](../05-postprocessing/stacking.md)으로 보완할 수 있습니다.)" |
| `src/02-fundamentals/raw-and-wb.md` | plain-text 후보정 ref → stacking.md link | ✓ VERIFIED | Line 33: "이는 [스태킹으로 노이즈 줄이기](../05-postprocessing/stacking.md)에서 다룬다." — real markdown link, not plain text |

### Key Link Verification

| From | To | Via | Status | Details |
|------|-----|-----|--------|---------|
| SUMMARY.md 4부 | raw-develop.md / stacking.md / enhance-milkyway.md / before-after.md | markdown links | ✓ WIRED | 4 links present, exact paths match |
| stacking.md | field-workflow.md | forward-link for burst prerequisite | ✓ WIRED | "[현장 촬영 워크플로](../02-fundamentals/field-workflow.md)의 7번(본 촬영)" |
| raw-develop.md ↔ stacking.md | mutual stack-first link | markdown links both directions | ✓ WIRED | raw-develop.md opens with link to stacking.md; stacking.md closes with link to raw-develop.md; both state the stack-first order explicitly |
| raw-develop.md / stacking.md | raw-and-wb.md | theory reuse (no restating) | ✓ WIRED | Both link `../02-fundamentals/raw-and-wb.md`, WB rationale/value not re-derived, only referenced |
| camera-lens.md | stacking.md | stale "Phase 3" redirect | ✓ WIRED | `../05-postprocessing/stacking.md` link present, "Phase 3" string removed |
| raw-and-wb.md | stacking.md | dangling forward-promise upgrade | ✓ WIRED | `../05-postprocessing/stacking.md` real link replaces plain-text "후보정 챕터" |
| enhance-milkyway.md → before-after.md | forward link | markdown link | ✓ WIRED | Closing line links before-after.md |

### Requirements Coverage

| Requirement | Status | Blocking Issue |
|-------------|--------|-----------------|
| EDIT-01 | ✓ SATISFIED | raw-develop.md covers 화밸→노출→대비→색감 order, tool-agnostic, links theory |
| EDIT-02 | ✓ SATISFIED | stacking.md covers both OS tools, non-recommended alternatives with reasons, premise + link |
| EDIT-03 | ✓ SATISFIED | enhance-milkyway.md covers local contrast/selective saturation + over-processing warnings, no scope creep (마스크/레이어/주파수 분리 = 0 hits) |
| EDIT-04 | ✓ SATISFIED | before-after.md covers worded before/after with placeholders, zero real images |

Note: `.planning/REQUIREMENTS.md` still lists EDIT-01~04 as "Pending" in its status table — this is a documentation bookkeeping item not covered by this phase's must_haves (plan did not include updating REQUIREMENTS.md status), so it is not treated as a gap here, but should be updated by the project owner/next workflow step for tracking hygiene.

### Anti-Patterns Found

None. Scanned all created/modified files (`src/05-postprocessing/*.md`, `src/SUMMARY.md`, `src/01-gear/camera-lens.md`, `src/02-fundamentals/raw-and-wb.md`) for TODO/FIXME/XXX/HACK/coming soon/lorem ipsum — zero hits. The only "placeholder"-adjacent content is the intentional `<!-- 사진: ... -->` HTML comments in before-after.md and one in stacking.md, which are required by design (EDIT-04 must_have), not stubs.

### Human Verification Required

None required for automated structural goal — all must-haves are grep/build verifiable. Optional (not blocking): a human proofread pass for Korean tone/register consistency with Phase 2/3 mirrored pages would be a nice-to-have but is not part of this phase's must_haves.

### Additional Automated Checks

- `grep -rEn "[0-9]/[0-9]|[0-9]차 연습|저자 개인" src/05-postprocessing/` → 0 matches (no dates, no personal-photo framing)
- `grep -Ec "마스크|레이어|주파수 분리" src/05-postprocessing/enhance-milkyway.md` → 0
- `ls src/05-postprocessing/*.png src/05-postprocessing/*.jpg` → no matches (zero real images)
- `mdbook build src` → exit 0, no broken-link errors

### Gaps Summary

No gaps found. All three ROADMAP success criteria, all four EDIT requirements, all must_haves truths/artifacts/key_links from 04-01-PLAN.md frontmatter, and the mdbook build gate are verified against actual file contents (not SUMMARY claims). SUMMARY.md's 4부 section is now navigable with 4 real links, replacing the prior `- [워크플로 개요]()` placeholder, and other SUMMARY sections (1~3부, 부록) are unchanged. Stale references in camera-lens.md ("Phase 3") and raw-and-wb.md (plain-text "후보정 챕터") are both now real links to stacking.md.

---

_Verified: 2026-07-09T17:20:00Z_
_Verifier: Claude (gsd-verifier)_
