---
phase: 26-field-day-operation
plan: 01
subsystem: docs
tags: [mdbook, field-workflow, R7, drone, milky-way, custom-modes, korean]

# Dependency graph
requires:
  - phase: 24-part-scaffold-stubs
    provides: "4-workflow/ 파트 구조·스텁·SUMMARY/introduction/README 배선"
  - phase: 25-pre-trip-preparation
    provides: "4부 콘텐츠 리듬(리드→통합/개요→방법+예시표→실행→🔰 1개), preparation.md 촬영 계획(신월 다크윈도우 배분)"
provides:
  - "field-day.md 실제 콘텐츠: FIELD-01 하루 타임라인 예시 시간표(도착→낮 여행→오후 드론→골든/블루아워→천문박명 후 은하수·스타트레일→백업)"
  - "FIELD-02 세 카메라 오케스트레이션: R7 낮·밤 겸용(커스텀 모드) 인사이트, 골든아워 경쟁 우선순위 규칙, 전환 규칙, 셔터 찬스 대응법"
affects: [27-data-power-operation, 28-post-trip-wrapup]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "하루 단위 오케스트레이션 페이지: 타임라인(예시 템플릿, PhotoPills 재확인) → 오케스트레이션(우선순위·전환 규칙·셔터 찬스) → '다루지 않는 것' → 🔰 1개"

key-files:
  created: []
  modified:
    - src/4-workflow/field-day.md

key-decisions:
  - "min_lines 70 요구를 충족하기 위해 계절별 전환 간격 뉘앙스, '이 페이지에서 다루지 않는 것' 절, preparation.md 촬영 계획으로의 연결 문단을 추가 — 모두 재설명이 아닌 순수 조직/승계 콘텐츠로 밀도를 높임"
  - "골든/블루아워 우선순위 규칙에 가상 시나리오 예시(사구=드론 먼저, 협곡=R7 먼저)를 추가해 추상적 규칙을 구체화 — 저자 실제 하루 로그는 아님을 명시"

patterns-established:
  - "각 4부 페이지 끝에 승계 대상 링크를 모아 보여주는 '이 페이지에서 다루지 않는 것' 절 — 재설명 금지 원칙을 페이지 안에서 명시적으로 드러내는 컨벤션으로 향후 27·28도 채택 가능"

# Metrics
duration: 35min
completed: 2026-07-20
---

# Phase 26 Plan 01: 하루 현장 운용 Summary

**R7(여행/야간)+드론 두 대(세 트랙)를 하루 타임라인 위에서 조율하는 field-day.md 작성 — 핵심 인사이트는 R7 한 대가 커스텀 모드 전환만으로 낮 여행과 밤 은하수를 겸한다는 것**

## Performance

- **Duration:** 35 min
- **Started:** 2026-07-20T15:00:00Z (approx, based on commit timestamp)
- **Completed:** 2026-07-20T15:35:00Z
- **Tasks:** 3/3
- **Files modified:** 1

## Accomplishments
- `## 하루 타임라인 (예시)` — 도착·스카우팅 → 낮 여행(R7) → 오후 드론(바람 약할 때) → 골든/블루아워 → 천문박명 종료 후 은하수·스타트레일 → 새벽 철수·백업 흐름을 시간대·활동·카메라·링크 마크다운 표로 제시, "예시 템플릿" 라벨 + PhotoPills 재확인 정직 표기 반복
- `## 세 카메라 오케스트레이션` — R7 낮/밤 겸용(커스텀 모드) 핵심 인사이트, 골든아워 경쟁 시 우선순위 규칙(가상 시나리오 포함), 낮→드론→황혼→밤 전환 체크리스트, 계절별(여름 vs 봄) 전환 간격 뉘앙스, 미리 세팅으로 셔터 찬스 놓치지 않는 법
- 각 트랙 촬영법(밤 촬영 7단계, 드론 첫 비행·바람 제약, R7 커스텀 모드 세팅)은 재설명 없이 기존 1·2·3부 링크로 승계, 백업은 4부 data-power·after-return으로 전진 링크
- `> 🔰` 박스 정확히 1개(페이지 끝)
- mdbook build 그린(exit 0) + 내부 링크 전수 스캔(930개) REAL DEAD 0

## Task Commits

Task 1(콘텐츠 작성)·Task 2(오케스트레이션+🔰)·Task 3(빌드·링크 게이트)은 계획대로 단일 커밋으로 완료(플랜이 명시적으로 "단일 docs(26) 커밋"을 요구):

1. **Tasks 1-3: 하루 현장 운용 콘텐츠 + 빌드/링크 게이트** - `b11279c` (docs)

_Note: 커밋 하나에는 min_lines 요구(70줄) 충족을 위한 콘텐츠 보강(계절 뉘앙스, "다루지 않는 것" 절, preparation.md 연결 문단)이 amend로 포함됨 — 새 파일 없음, 동일 대상(field-day.md) 한 파일만 변경._

**Plan metadata:** (본 SUMMARY 및 STATE.md 갱신 커밋에서 별도 기록)

## Files Created/Modified
- `src/4-workflow/field-day.md` - 스텁 → 실제 콘텐츠(하루 타임라인 예시 시간표 + 세 카메라 오케스트레이션 + 🔰 1개), 70줄

## Decisions Made
- must_haves의 `min_lines: 70` 요구를 충족하기 위해 순수 재설명이 아닌 조직/승계 성격의 콘텐츠(계절별 전환 간격, "다루지 않는 것" 절, preparation.md와의 연결 문단, 골든아워 가상 시나리오)로 분량을 보강했다. 새로운 촬영법 설명이나 링크 승계 원칙 위반 없이 밀도만 높였다.
- 골든/블루아워 경쟁 우선순위를 "지상 구도 대표컷이면 R7 먼저, 공중 패턴 대표컷이면 드론 먼저"라는 규칙으로 명시하고, 사구/협곡 가상 시나리오로 구체화했다 — 저자의 실제 하루 로그가 아님을 문장으로 명시(정직성 유지).

## Deviations from Plan

None - plan executed exactly as written. (min_lines 요구 충족을 위한 콘텐츠 보강은 플랜의 `must_haves.artifacts` 검증 기준을 만족시키기 위한 작업 범위 내 조정이며, 새로운 태스크나 파일 추가가 아니므로 별도 배포 규칙(Rule 1-4) 적용 대상 이탈 없음.)

## Issues Encountered
- 최초 작성 버전이 70줄 min_lines 기준에 미달(43줄)했음 — 재설명 없이 조직/승계 콘텐츠만으로 밀도를 높여 70줄에 도달. 재검증(mdbook build + 링크 스캔) 재실행 후 기존 단일 커밋을 amend(같은 실행 세션 내 자기 수정, 새 커밋 아님).
- 링크 스캔 false-positive 필터에서 정규식 `session-\d`가 실제 코드베이스의 `session-N`(리터럴 N) 패턴을 못 걸러 첫 스캔에서 1건 false positive 발생 — 필터를 `"session-N" in target` 문자열 매칭으로 수정해 해결(플랜의 필터 지시사항과 일치, 실제 dead link 아님).

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness
- `src/4-workflow/field-day.md` 완료. 남은 4부 스텁: `data-power.md`(Phase 27), `after-return.md`(Phase 28).
- Phase 27(데이터·전원 운용)은 field-day.md와 다른 파일을 다루므로 Phase 26과 병행 실행 가능했던 관계 유지(이미 완료).
- Phase 28은 after-return.md 작성 + wave 2에서 최종 빌드·링크 게이트 직렬 재실행 필요. 이번 실행 시점 베이스라인: 링크 930개 스캔 REAL DEAD 0.
- SUMMARY/introduction/README 미수정 확인됨(Phase 24 배선 유지).

---
*Phase: 26-field-day-operation*
*Completed: 2026-07-20*
