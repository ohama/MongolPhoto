---
phase: 02-집에서-연습할-사항
plan: 01
subsystem: docs
tags: [mdbook, korean, tutorial, astrophotography]

# Dependency graph
requires:
  - phase: 01-mdbook-장비-기초
    provides: "exposure-basics, 500-npf-rule, focusing, raw-and-wb, accessories, checklist 이론 페이지"
provides:
  - "HOME-01/02/03 집 연습 드릴 3개 페이지 (카메라 조작·세팅 / 초점·구도·인터벌 / 자가점검 체크리스트)"
  - "SUMMARY.md 2부를 개인 연습 로그에서 일반 '가기 전 연습' 가이드로 교체"
  - "2부 재구성으로 거짓이 된 스테일 참조 2곳 수정 + orphan 개인 스캐폴드 삭제"
affects: [03-야외에서-연습할-사항]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "이론 페이지는 링크만 재사용하고 새 페이지는 '집에서 어떻게 연습하는가'만 추가하는 no-duplication 패턴"
    - "SUMMARY.md 빈 괄호 draft-link(`- [야외에서 연습하기]()`)로 다음 phase 예정 표시 (build 안 깨짐)"

key-files:
  created:
    - src/03-practice/home-camera-controls.md
    - src/03-practice/home-focus-and-interval.md
    - src/03-practice/home-checklist.md
  modified:
    - src/SUMMARY.md
    - src/03-practice/template.md
    - src/02-fundamentals/index.md
  deleted:
    - src/03-practice/session-1-home.md

key-decisions:
  - "크롭 셔터 상한 숫자를 하드코딩하지 않고 500-npf-rule.md 공식 링크로 독자가 직접 계산하도록 안내 (마운트 미확정 원칙 유지)"
  - "SUMMARY 2부 교체는 surgical replacement — 1부/3부/4부/부록은 무변화, template.md의 '연습 로그 템플릿' 링크(PRAC-01)도 유지"

patterns-established:
  - "드릴 페이지 말미 forward-link 관용구: `이 연습 결과는 [연습 로그 템플릿](template.md)에 기록해 보세요.`"

# Metrics
duration: ~12min
completed: 2026-07-09
---

# Phase 2 Plan 1: 집에서 연습할 사항 (일반 가이드) Summary

**HOME-01/02/03 집 연습 드릴 3페이지 신설(카메라 조작·초점/구도/인터벌·자가점검) + SUMMARY 2부를 개인 연습 로그에서 일반 "가기 전 연습" 가이드로 교체, 스테일 참조 2곳 수정, orphan 개인 스캐폴드 삭제**

## Performance

- **Duration:** ~12 min
- **Tasks:** 2/2
- **Files modified:** 6 (3 created, 3 modified) + 1 deleted

## Accomplishments

- 독자가 집에서 M모드 다이얼 감각(어둠 속 조작), 본인 장비 기준 크롭 셔터 상한 직접 계산, RAW+수동 WB, 전원/저장 확인을 단계별로 연습할 수 있는 `home-camera-controls.md`(HOME-01) 작성
- 먼 불빛으로 무한대 초점 연습(성공 기준 명시), 구도·수평 연습, 인터벌 타이머/릴리즈 드라이런을 안내하는 `home-focus-and-interval.md`(HOME-02) 작성
- 결과 지향("~할 수 있다") 틱 체크리스트 `home-checklist.md`(HOME-03) 작성 — 9개 항목, 3부(야외 연습) 진입 준비 기준으로 마무리
- SUMMARY.md "# 2부 · 연습 로그"(개인 연습 1~4차 draft)를 "# 2부 · 가기 전 연습"(새 3개 실링크 + Phase 3 야외 placeholder)로 교체
- 스테일 참조 2곳 수정: `template.md` 인트로("연습 1~4차" → 2부 링크), `02-fundamentals/index.md`("집 연습 1차" → "가기 전 집 연습" 링크)
- orphan `src/03-practice/session-1-home.md`(개인 연습 1차 스캐폴드) 삭제

## Task Commits

Each task was committed atomically:

1. **Task 1: 집 연습 드릴 3개 페이지 작성 (HOME-01/02/03)** - `955075f` (feat)
2. **Task 2: SUMMARY 2부 교체 + 스테일 참조 수정 + orphan 삭제** - `00f27d0` (feat)

**Plan metadata:** (see final commit below)

## Files Created/Modified

- `src/03-practice/home-camera-controls.md` - HOME-01: 카메라 조작·세팅 연습 드릴 (M모드 다이얼 감각, 크롭 셔터 상한 계산, RAW+WB, 전원/저장)
- `src/03-practice/home-focus-and-interval.md` - HOME-02: 초점(먼 불빛 무한대)·구도·인터벌 연습 방법
- `src/03-practice/home-checklist.md` - HOME-03: 집 연습 자가점검 체크리스트
- `src/SUMMARY.md` - 2부 블록 전체 교체 (개인 draft → 일반 가이드 3링크 + 야외 placeholder)
- `src/03-practice/template.md` - 인트로 1문단 스테일 참조 수정
- `src/02-fundamentals/index.md` - 12행 스테일 참조 수정
- `src/03-practice/session-1-home.md` - 삭제 (orphan 개인 스캐폴드)

## Decisions Made

- 크롭 셔터 상한을 하드코딩하지 않고 500-npf-rule.md 공식으로 독자가 직접 계산하게 함 (마운트 미확정 + 재서술 금지 원칙 준수)
- SUMMARY 2부만 surgical하게 교체 — 1부의 `[연습 로그 템플릿](03-practice/template.md)` 링크(PRAC-01)와 3부/4부/부록은 무변화

## Deviations from Plan

None - plan executed exactly as written.

Note: 계획의 verification 정규식 `grep -n "연습 1차\|연습 2차\|연습 3차\|연습 4차\|연습 로그" src/SUMMARY.md`는 0건을 기대했으나, 1부의 기존·의도적으로 유지되는 링크 `[연습 로그 템플릿](03-practice/template.md)`(line 18, PRAC-01)이 "연습 로그"라는 부분 문자열에 걸려 1건이 나온다. 이는 실제 "연습 1~4차" 개인 draft와 무관한 사전 존재 링크이며, 계획 본문이 명시적으로 "다른 부(1부/3부/4부/부록)는 건드리지 말 것"이라 규정했으므로 수정하지 않았다. 실질적 성공 기준(2부 draft 제거, `가기 전 연습` 헤더 확인)은 모두 충족했다.

## Issues Encountered

None.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- Phase 3(야외에서 연습할 사항)에서 SUMMARY의 `- [야외에서 연습하기]()` placeholder를 실제 페이지로 채우면 됨.
- `src/02-fundamentals/finding-the-milkyway.md`의 "7/17 서해안 연습" 등 스테일 참조는 이 phase 범위 밖으로 의도적으로 남겨둠 — Phase 3에서 처리.
- HOME-01/02/03가 링크하는 fundamentals/accessories/checklist 이론 페이지는 모두 Phase 1에서 이미 완성되어 있어 추가 의존성 없음.

---
*Phase: 02-집에서-연습할-사항*
*Completed: 2026-07-09*
