---
phase: 03-야외에서-연습할-사항
verified: 2026-07-09T07:20:59Z
status: passed
score: 8/8 must-haves verified
---

# Phase 3: 야외에서 연습할 사항 Verification Report

**Phase Goal:** 독자가 몽골 전에 근교 어두운 곳에서 실전 연습을 어떻게 할지 일반 가이드로 알 수 있다.
**Verified:** 2026-07-09T07:20:59Z
**Status:** passed
**Re-verification:** No — initial verification

## Goal Achievement

### Observable Truths (from PLAN must_haves)

| # | Truth | Status | Evidence |
|---|-------|--------|----------|
| 1 | 독자가 실제 밤하늘 아래에서 노출·초점·구도를 실전 연습할 항목(FIELD-01)을 안다 | ✓ VERIFIED | `src/03-practice/field-practice.md` covers 근교 장소 찾기, 실전 노출 테스트, 별 흐름 실측(LCD 100% 확대), 실전 구도 — links to field-workflow.md, finding-the-milkyway.md, 500-npf-rule.md, home-camera-controls.md, focusing.md, home-focus-and-interval.md |
| 2 | 독자가 야외 준비와 현장 워크플로(이슬·바람·배터리·안전·이동)를 리허설하는 법(FIELD-02)을 안다 | ✓ VERIFIED | `src/03-practice/field-prep-and-hazards.md` covers all 5 hazard categories (이슬·결로, 바람·삼각대, 저온·배터리, 안전, 이동) each linking to theory pages, no re-derivation of the 7-step workflow |
| 3 | 독자가 야외 연습 결과를 관찰·진단해 다음 개선점을 찾는 법(FIELD-03)을 안다 | ✓ VERIFIED | `src/03-practice/field-review.md` is a 증상→확인/원인→다음개선 table (post-session observe/diagnose/improve loop), explicitly distinct from home-checklist.md's pre-session capability checkboxes |
| 4 | 새 야외 페이지들이 이론을 재서술하지 않고 기존 fundamentals/gear 페이지로 링크한다 | ✓ VERIFIED | Each of the 3 new pages contains ≥3 relative links to `../02-fundamentals/` or `../01-gear/`; no hardcoded shutter-speed/crop numbers found (grep for digit+초/sec = 0 hits) |
| 5 | SUMMARY 2부의 '야외에서 연습하기' placeholder가 3개 실제 링크로 교체되어 사이드바에서 탐색된다 | ✓ VERIFIED | `src/SUMMARY.md` lines 25-27 contain field-practice.md / field-prep-and-hazards.md / field-review.md links under `# 2부 · 가기 전 연습`; placeholder string count = 0; other sections (1부/3부/4부/부록) visually unchanged |
| 6 | finding-the-milkyway.md·index.md의 개인/날짜 참조(7/17·서해안 연습·연습 N차)가 일반 서술로 바뀐다 | ✓ VERIFIED | `grep -rn "7/17\|서해안\|[0-9]차 연습\|연습 [0-9]차\|평시 연습" src/02-fundamentals/ src/03-practice/` = 0 matches. `index.md` "서해안" count = 0. (Mongolia-date lines — 8월 몽골, 8/12 신월, 8/13~8/17 — remain intentionally, out of phase scope per plan.) |
| 7 | 이슬 관련 끊어진 링크가 실제로 이슬을 다루는 field-prep-and-hazards.md로 연결된다 | ✓ VERIFIED | `finding-the-milkyway.md:41` → `[야외 준비와 현장 워크플로 리허설](../03-practice/field-prep-and-hazards.md)`, not field-workflow.md |
| 8 | mdbook build src 가 exit 0으로 성공한다 | ✓ VERIFIED | `mdbook build src` ran, INFO logs only, exit code 0, no warnings/errors |

**Score:** 8/8 truths verified

### Required Artifacts

| Artifact | Expected | Status | Details |
|----------|----------|--------|---------|
| `src/03-practice/field-practice.md` | FIELD-01 실전 노출·초점·구도 야외 리허설 가이드, forward-links template.md | ✓ VERIFIED | Exists, 26 lines, 4 theory links, ends with template.md forward-link, no crop-shutter number hardcoded |
| `src/03-practice/field-prep-and-hazards.md` | FIELD-02 준비·현장 워크플로 리허설, contains "이슬" | ✓ VERIFIED | Exists, 28 lines, contains "이슬" (section header + body), 4 theory links, ends with template.md forward-link |
| `src/03-practice/field-review.md` | FIELD-03 결과 점검·복기·개선 루프, contains "다음 세션 개선 사항" | ✓ VERIFIED | Exists, 25 lines, contains "다음 세션 개선 사항" (1 occurrence), symptom-table format distinct from home-checklist.md checkboxes, ends with template.md forward-link |
| `src/SUMMARY.md` | 2부 placeholder → 3 real links | ✓ VERIFIED | Placeholder `- [야외에서 연습하기]()` removed (count=0); 3 field-*.md links present in 2부 block; other sections untouched |
| `src/02-fundamentals/finding-the-milkyway.md` | 개인/날짜 참조 제거 + 이슬 링크 리다이렉트 | ✓ VERIFIED | Lines 9,10,23,31,32 rewritten to general/undated prose; line 41 dew link points to field-prep-and-hazards.md |
| `src/02-fundamentals/index.md` | "서해안" 제거 | ✓ VERIFIED | Line 3 now reads "실전(야외 연습·몽골) 전에…"; "서해안" count = 0 |
| `src/03-practice/home-checklist.md` | "3부" 오표기 제거 + field-practice.md 링크 | ✓ VERIFIED | Line 23: "3부" count = 0; links to `field-practice.md` (1 occurrence) |

### Key Link Verification

| From | To | Via | Status | Details |
|------|----|----|--------|---------|
| `src/SUMMARY.md` | `src/03-practice/field-practice.md` | markdown link in 2부 block | ✓ WIRED | Line 25, path `03-practice/field-practice.md` (correct src-relative form) |
| `src/03-practice/field-review.md` | `src/03-practice/template.md` | forward-link to 다음 세션 개선 사항 | ✓ WIRED | Line 20 explicitly names template.md's "배운 점 / 문제점" and "다음 세션 개선 사항" sections; template.md line 33 has matching `## 다음 세션 개선 사항` heading |
| `src/02-fundamentals/finding-the-milkyway.md` | `src/03-practice/field-prep-and-hazards.md` | dew link redirect | ✓ WIRED | Line 41, relative path `../03-practice/field-prep-and-hazards.md` resolves correctly from `src/02-fundamentals/` |

### Requirements Coverage (FIELD-01, FIELD-02, FIELD-03)

| Requirement | Status | Blocking Issue |
|-------------|--------|-----------------|
| FIELD-01 | ✓ SATISFIED | Covered by field-practice.md (exposure/focus/composition field rehearsal) |
| FIELD-02 | ✓ SATISFIED | Covered by field-prep-and-hazards.md (dew/wind/battery/safety/travel) |
| FIELD-03 | ✓ SATISFIED | Covered by field-review.md (symptom→cause→fix loop, distinct from HOME-03) |

Note: `.planning/REQUIREMENTS.md` still shows FIELD-01/02/03 as "Pending" checkboxes — this is a tracking-doc status field, not a code artifact, and is expected to be updated by the orchestrator/roadmap process separately. It does not affect this codebase-level verification.

### Anti-Patterns Found

None. No TODO/FIXME/placeholder patterns, no empty handlers, no hardcoded crop-shutter numbers, no stub content in any of the modified/created files.

One minor observation (not a gap): the literal string "연습 N차" appears in `src/03-practice/template.md` (lines 8, 15) as part of the template's fill-in-the-blank heading pattern (`# 연습 N차 — [장소] ([날짜])`), which is pre-existing intentional template syntax from Phase 2, not a stale personal/date reference introduced or left over in this phase's scope (field-*.md, finding-the-milkyway.md, index.md). The plan's own verify regex (`[0-9]차 연습|연습 [0-9]차`, requiring a digit) correctly excludes this and returns 0 matches across `src/02-fundamentals/` and `src/03-practice/`.

### Build Verification

```
$ mdbook build src
 INFO Book building has started
 INFO Running the html backend
 INFO HTML book written to `.../docs`
$ echo $?
0
```

No dangling-link warnings, no errors.

### Human Verification Required

None. All success criteria were verifiable programmatically via file inspection, grep, and `mdbook build`.

### Gaps Summary

No gaps found. All 8 must-have truths, all 7 required artifacts, and all 3 key links verified. The phase goal — a general (undated, place-agnostic) field-practice guide covering FIELD-01 (exposure/focus/composition rehearsal), FIELD-02 (prep and field-workflow hazard rehearsal: dew/wind/battery/safety/travel), and FIELD-03 (post-session review/diagnose/improve loop) — is achieved in the actual codebase. Phase 2's IOU (stale personal/date references in finding-the-milkyway.md and index.md, and the broken dew link) is also fully resolved. `mdbook build src` succeeds with exit 0.

---

_Verified: 2026-07-09T07:20:59Z_
_Verifier: Claude (gsd-verifier)_
