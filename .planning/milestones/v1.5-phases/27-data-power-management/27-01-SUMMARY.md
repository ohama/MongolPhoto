---
phase: 27-data-power-management
plan: 01
subsystem: docs
tags: [mdbook, field-workflow, data-backup, power-management, korean]

# Dependency graph
requires:
  - phase: 24-part-scaffold-stubs
    provides: "4-workflow/ 파트 구조·스텁·SUMMARY/introduction/README 배선"
  - phase: 25-pre-trip-preparation
    provides: "4부 콘텐츠 리듬(리드→통합/개요→방법+예시표→실행→🔰 1개)"
  - phase: 26-field-day-operation
    provides: "field-day.md 하루 끝 백업·충전 단계 — 이 페이지로의 전진 링크 원본"
provides:
  - "data-power.md 실제 콘텐츠: DATA-01 카드 전략(용량·개수 산정 예시·로테이션 표시·현장 포맷 금지 규칙·손상 분실 대비) + 현장 RAW 백업(왜 오프로드·방법 유형 3가지·귀국 후 3-2-1과 구분)"
  - "DATA-02 멀티데이 전원 운용: 장비별 배터리·파워뱅크 준비(링크 승계)·차량 시가잭/인버터 이동 중 충전(와트 미확인)·저온 대응(링크 승계)·밤 촬영용 최우선 충전 우선순위"
affects: [28-post-trip-wrapup]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "DATA류 페이지 리듬: 리드(전 단계 preparation.md 연결) → 카드 전략(산정 예시 표+로테이션+포맷 규칙+분실 대비) → 현장 백업(방법 유형 3가지+귀국 후 3-2-1과 after-return.md 전진 링크 구분) → 멀티데이 전원(장비별 배터리 링크 승계+차량 충전+저온 대응 링크 승계+충전 우선순위 표) → 🔰 1개"

key-files:
  created: []
  modified:
    - src/4-workflow/data-power.md

key-decisions:
  - "카드 전략 산정 표와 충전 우선순위 표 모두 '예시(출발 전 재확인)'로 라벨링해 구체 수치를 사실로 단정하지 않았다 — 미확인 표기가 그렙 8회 등장할 만큼 정직성 규칙을 페이지 전체에 반복 적용."
  - "현장 RAW 백업 절에서 3-2-1 백업의 구체 절차(다중 사본·클라우드·아카이빙)를 상술하지 않고 after-return.md로 전진 링크만 걸어, Phase 28과의 콘텐츠 중복을 피했다."

patterns-established:
  - "카드/전원처럼 '조직법'이 핵심인 페이지에서는 각 장비 세부(배터리 특성·저온 영향)를 재설명하지 않고 링크 승계 밀도로 페이지를 채우는 방식 — 26에서 확립한 패턴을 그대로 재사용."

# Metrics
duration: 25min
completed: 2026-07-20
---

# Phase 27 Plan 01: 데이터·전원 운용 Summary

**멀티데이 오프그리드에서 카드·현장 백업·전원을 병목 없이 조직하는 data-power.md 작성 — 핵심은 "정전·카드 손실 = 촬영 전체 손실"을 막는 인프라이지, 각 장비 배터리 세부 재설명이 아니라는 점**

## Performance

- **Duration:** 25 min
- **Started:** 2026-07-20T15:30:00Z (approx)
- **Completed:** 2026-07-20T15:55:00Z
- **Tasks:** 3/3
- **Files modified:** 1

## Accomplishments
- `## 카드 전략` — 용량·개수 산정 예시 표(장비별 하루 촬영량, 미확인 라벨), 찍은/빈 카드 로테이션 물리적 구분·표시 습관, "백업 전 포맷 절대 금지"·카메라 내 포맷 규칙, 손상·분실 대비(분산 보관·원본 보존), preparation.md·checklist.md 준비 단계 연결
- `## 현장 RAW 백업` — 왜 하루 끝 오프로드하나(정전·손실 리스크), 방법 유형 3가지(노트북+외장SSD / 휴대 SSD 다이렉트 / 폰+대용량) 유형·선택 기준만 제시(제품 단정 금지), "현장 백업 ≠ 귀국 후 3-2-1" 명시하고 after-return.md 전진 링크로 구분, 실제 장비 사진 트립(8/13) 이후 교체 자리표시
- `## 멀티데이 전원 운용` — 장비별 배터리·파워뱅크 준비(accessories.md·gobi-environment.md·flight-and-battery.md 링크 승계), 차량 시가잭/인버터 이동 중 충전(와트 미확인·유형 기준만), 저온 배터리 대응(field-prep-and-hazards.md·accessories.md·gobi-environment.md 링크 승계), 밤 촬영용 최우선 충전 우선순위 표
- `> 🔰` 박스 정확히 1개(페이지 끝)
- mdbook build 그린(exit 0) + 내부 링크 전수 스캔(943개) REAL DEAD 0

## Task Commits

Tasks 1(카드 전략+현장 RAW 백업)·2(멀티데이 전원+🔰)·3(빌드·링크 게이트)은 계획대로 단일 커밋으로 완료(플랜이 명시적으로 "단일 docs(27) 커밋"을 요구):

1. **Tasks 1-3: 데이터·전원 운용 콘텐츠 + 빌드/링크 게이트** - `aaa47d2` (docs)

**Plan metadata:** (본 SUMMARY 및 STATE.md 갱신은 별도 커밋으로 처리)

## Files Created/Modified
- `src/4-workflow/data-power.md` - 스텁 → 실제 콘텐츠(카드 전략 + 현장 RAW 백업 + 멀티데이 전원 운용 + 🔰 1개), 66줄

## Decisions Made
- 카드 전략 산정 표와 충전 우선순위 표 모두 "예시(출발 전 재확인)"로 라벨링해 구체 수치를 사실로 단정하지 않았다.
- 현장 RAW 백업 절에서 3-2-1 백업 구체 절차는 after-return.md로 전진 링크만 걸어 Phase 28과의 콘텐츠 중복을 피했다.

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None - 콘텐츠 작성·빌드·링크 스캔·커밋 모두 계획대로 한 번에 통과. 링크 스캔 false-positive 필터(`파일명`·`session-N` 제외)도 문제없이 적용됨(REAL DEAD 0).

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness
- `src/4-workflow/data-power.md` 완료. 남은 4부 스텁: `after-return.md`(Phase 28)만 남음.
- Phase 28(귀국 후 정리)은 after-return.md 작성(POST-01 3-2-1 백업, POST-02 선별·편집 순서 허브) + wave 2에서 최종 빌드·링크 게이트 직렬 재실행(v1.4 23-02 방식) 필요.
- 이번 실행 시점 베이스라인: mdbook build 그린, 내부 링크 943개 스캔 REAL DEAD 0.
- data-power.md의 "현장 RAW 백업" 절이 이미 "귀국 후 3-2-1은 after-return.md의 몫"이라고 명시했으므로, Phase 28은 이 전진 링크를 받아 3-2-1 전체 백업 절차를 중복 없이 작성하면 됨.
- SUMMARY/introduction/README 미수정 확인됨(Phase 24 배선 유지).

---
*Phase: 27-data-power-management*
*Completed: 2026-07-20*
