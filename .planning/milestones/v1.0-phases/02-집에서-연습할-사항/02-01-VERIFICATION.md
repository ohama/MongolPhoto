---
phase: 02-집에서-연습할-사항
verified: 2026-07-09T06:53:18Z
status: passed
score: 7/7 must-haves verified
---

# Phase 2: 집에서 연습할 사항 Verification Report

**Phase Goal:** 독자가 몽골에 가기 전, 집에서 무엇을 어떻게 연습해야 하는지 일반 가이드로 알 수 있다 (개인 일지가 아니라 누구나 따라 할 지침).
**Verified:** 2026-07-09T06:53:18Z
**Status:** passed
**Re-verification:** No — initial verification

## Goal Achievement

### Observable Truths

| # | Truth | Status | Evidence |
|---|-------|--------|----------|
| 1 | 독자가 집에서 M모드/ISO·조리개·셔터, RAW+수동 화밸, 본인 장비 크롭 셔터 상한 계산을 단계별로 따라 연습할 수 있다 (HOME-01) | ✓ VERIFIED | `src/03-practice/home-camera-controls.md` (18 lines) has a numbered `## 연습 항목` list covering blind-dial M-mode practice, per-device 500/NPF shutter-cap calculation ("독자 값으로 계산" — no hardcoded number, grep for `N초` returns 0 hits), RAW+manual WB (3800–4200K), and battery/card check, plus a `## 연습 방법` closing paragraph. |
| 2 | 독자가 실내/베란다에서 먼 불빛으로 무한대 초점, 구도·수평, 인터벌/릴리즈 드라이런을 연습하는 구체적 방법을 안다 (HOME-02) | ✓ VERIFIED | `src/03-practice/home-focus-and-interval.md` (21 lines) has 3 numbered sections: focus practice with distant point-lights + success criterion (10x live-view / 100% crop test), composition/level practice, and interval-timer/release dry-run with histogram habit. |
| 3 | 독자가 집 연습이 끝났는지 스스로 점검할 체크리스트가 있다 (HOME-03) | ✓ VERIFIED | `src/03-practice/home-checklist.md` (23 lines) has 3 grouped sections (조작·세팅 / 초점·구도 / 촬영 진행) with 9 tickable `- [ ]` items, outcome-oriented framing, closing with "야외 연습(3부)로 넘어갈 준비" statement. |
| 4 | 새 페이지들이 이론을 재서술하지 않고 기존 fundamentals/accessories 페이지로 링크한다 (중복 서술 없음) | ✓ VERIFIED | No formulas/step-by-step theory duplicated. Links present to `exposure-basics.md`, `500-npf-rule.md`, `raw-and-wb.md`, `focusing.md`, `accessories.md`, `checklist.md` — each theory point deferred by reference ("focusing.md에 이미 있으니 다시 옮기지 않고", "accessories.md에 이미 설명되어 있으니 여기서는 다시 다루지 않습니다"). |
| 5 | 사이드바 2부가 '연습 로그'(개인 1~4차 draft)에서 '가기 전 연습'(새 3개 링크 + 야외 연습 placeholder)으로 교체된다 | ✓ VERIFIED | `src/SUMMARY.md` line 20: `# 2부 · 가기 전 연습` with 4 items: 3 real links to the new pages + `- [야외에서 연습하기]()` placeholder. `grep -n "연습 1차\|연습 2차\|연습 3차\|연습 4차" src/SUMMARY.md` → 0 hits. (The 1부 `[연습 로그 템플릿](03-practice/template.md)` line remains — this is the PRAC-01 link from Phase 1 and is intentionally kept, confirmed against phase instructions.) |
| 6 | 스테일 참조(template.md 인트로, 02-fundamentals/index.md 12행)가 일반 서술로 고쳐지고 orphan session-1-home.md가 삭제된다 | ✓ VERIFIED | `template.md` intro now reads "[2부 · 가기 전 연습](home-camera-controls.md)의 안내를 따라 연습하면서..." (no "연습 1~4차" claim). `02-fundamentals/index.md` line 12 now reads "[가기 전 집 연습](../03-practice/home-camera-controls.md)에서 반드시 먼저 연습해야 하는 항목입니다" (no "집 연습 1차"). `src/03-practice/session-1-home.md` confirmed absent (`ls` → "No such file or directory"). |
| 7 | mdbook build src가 exit 0으로 성공한다 | ✓ VERIFIED | `mdbook build src` ran clean: "HTML book written to `docs`", exit code 0. No broken-link errors, no warnings. |

**Score:** 7/7 truths verified

### Required Artifacts

| Artifact | Expected | Status | Details |
|----------|----------|--------|---------|
| `src/03-practice/home-camera-controls.md` | HOME-01 카메라 조작·세팅 연습 드릴 | ✓ VERIFIED | 18 lines (meets min 18), exports N/A (markdown), links to exposure-basics/500-npf-rule/raw-and-wb, no stub patterns, ends with template.md link, referenced from SUMMARY.md and 02-fundamentals/index.md. |
| `src/03-practice/home-focus-and-interval.md` | HOME-02 초점·구도·인터벌 연습 방법 | ✓ VERIFIED | 21 lines (meets min 18), links to focusing.md and accessories.md, no stub patterns, ends with template.md link, referenced from SUMMARY.md and home-checklist.md. |
| `src/03-practice/home-checklist.md` | HOME-03 자가점검 체크리스트 | ✓ VERIFIED | 23 lines (meets min 10), 9 `- [ ]` items across 3 groups, no stub patterns, referenced from SUMMARY.md. |
| `src/SUMMARY.md` | 2부 · 가기 전 연습 (새 3개 링크 + 야외 placeholder) | ✓ VERIFIED | 46 lines (meets min 40), contains "가기 전 연습", all 3 new links present + placeholder, old 개인 연습 1~4차 links removed. |

### Key Link Verification

| From | To | Via | Status | Details |
|------|-----|-----|--------|---------|
| `home-camera-controls.md` | `exposure-basics.md`, `500-npf-rule.md`, `raw-and-wb.md` | markdown links | ✓ WIRED | All three theory links present and used as references, not duplicated. |
| `home-focus-and-interval.md` | `focusing.md`, `accessories.md` | markdown links | ✓ WIRED | Both links present; text explicitly defers to them ("다시 옮기지 않고", "다시 다루지 않습니다"). |
| `SUMMARY.md` | `home-camera-controls.md` | sidebar link | ✓ WIRED | `03-practice/home-camera-controls.md` reachable from 2부 sidebar block. |
| `home-*.md` | `template.md` | forward link | ⚠️ PARTIAL | `home-camera-controls.md` and `home-focus-and-interval.md` both end with `[연습 로그 템플릿](template.md)에 기록해 보세요`. `home-checklist.md` does **not** link to template.md — it closes with a plain-text sentence ("모두 체크되면 야외 연습(3부)로 넘어갈 준비가 된 것입니다") instead, per the plan's own Task 1 detailed instructions for HOME-03 ("3부는 아직 미완이므로 링크 없이 텍스트로"). This is a minor internal inconsistency between the plan's blanket `<verify>` line ("세 파일 모두 template.md 링크로 끝남") and its more specific per-page action text — the implementation followed the more specific, more sensible instruction (a checklist naturally gates to "next phase," not to "log this session"). Does not affect any Phase 2 observable truth or success criterion. |

### Requirements Coverage

| Requirement | Status | Blocking Issue |
|-------------|--------|-----------------|
| HOME-01 | ✓ SATISFIED | None |
| HOME-02 | ✓ SATISFIED | None |
| HOME-03 | ✓ SATISFIED | None |

(Note: `.planning/REQUIREMENTS.md` still shows these as `[ ] Pending` checkboxes — that tracking file was not updated as part of this plan's execution scope; this is a documentation-bookkeeping matter for the orchestrator, not a phase-goal gap.)

### Anti-Patterns Found

| File | Line | Pattern | Severity | Impact |
|------|------|---------|----------|--------|
| `src/03-practice/home-checklist.md` | (end of file) | Missing `template.md` forward link (present in the other two new pages) | ℹ️ Info | Cosmetic/consistency only — deliberate per plan's detailed per-page instructions; does not block goal achievement. |

No blocker or personal-logbook anti-patterns found. `grep -rn "7/17\|연습 1차\|연습 2차\|연습 3차\|연습 4차\|(세션 후 채움)" src/03-practice/home-*.md` → 0 hits. No hardcoded crop-shutter numbers (`grep -nE "[0-9]+(\.[0-9]+)?\s*초" src/03-practice/home-camera-controls.md` → 0 hits).

### Human Verification Required

None. All success criteria are structurally verifiable via file content, link graph, and `mdbook build`. No visual, real-time, or external-service behavior is involved in this phase's deliverables.

### Gaps Summary

No gaps blocking phase-goal achievement. All 3 phase success criteria are met:

1. Camera controls (HOME-01): step-by-step home drills for M-mode dial sense, per-device shutter-speed calculation (no hardcoded numbers), RAW+manual WB, and power/storage check — all linking out to Phase 1 theory pages rather than re-explaining them.
2. Focus/composition/interval (HOME-02): concrete indoor/balcony methods for infinity focus on distant point lights, composition/leveling, and interval-timer/release dry-runs — linking to `focusing.md` and `accessories.md`.
3. Self-check checklist (HOME-03): 9 tickable, outcome-oriented items across 3 groups.

SUMMARY.md's 2부 block was correctly replaced (personal 연습 1~4차 drafts removed, 3 new links + Phase 3 placeholder added). Both stale references (`template.md` intro, `02-fundamentals/index.md` line 12) were fixed to general phrasing. The orphan `session-1-home.md` was deleted. `mdbook build src` exits 0.

One minor, non-blocking observation: `home-checklist.md` does not end with a `template.md` link (unlike the other two new pages) — this follows the plan's own more specific per-page instruction and does not affect goal achievement.

---

*Verified: 2026-07-09T06:53:18Z*
*Verifier: Claude (gsd-verifier)*
