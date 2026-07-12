---
phase: 01-mdbook-뼈대-장비-기초-촬영법
plan: 03
subsystem: docs
tags: [mdbook, korean-content, astrophotography, exposure, crop-sensor, manual-focus]

# Dependency graph
requires:
  - phase: 01-01
    provides: mdBook 뼈대, SUMMARY.md 구조, 02-fundamentals/ 스텁 파일
provides:
  - src/02-fundamentals/index.md (촬영 기초 파트 개요 + 하위 페이지 안내)
  - src/02-fundamentals/exposure-basics.md (FUND-01: M모드 노출 3요소 + 은하수 시작 세팅값)
  - src/02-fundamentals/500-npf-rule.md (FUND-02: 크롭보정 500룰 공식 + 워크드 예제 + NPF 안내)
  - src/02-fundamentals/focusing.md (FUND-03: 별 수동 초점 단계별 방법)
affects: [01-04, 02-practice-logs, 03-post-processing]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "HTML 주석 이미지 스펙 (실제 이미지 파일 미생성, 사람이 나중에 채울 명세만 남김) — mdbook-docs-images 스킬 준수"
    - "크롭센서 우선 서술 — 풀프레임 값을 각주로 취급하지 않고 크롭센서 계산을 본문 공식으로 사용"

key-files:
  created: []
  modified:
    - src/02-fundamentals/index.md
    - src/02-fundamentals/exposure-basics.md
    - src/02-fundamentals/500-npf-rule.md
    - src/02-fundamentals/focusing.md

key-decisions:
  - "NPF 룰은 손계산을 가르치지 않고 PhotoPills 'Spot Stars' / 온라인 계산기 사용을 안내 (픽셀피치 계산이 비현실적이라는 FEATURES.md 교수 순서를 따름)"
  - "500룰 공식은 PITFALLS.md Pitfall #2를 그대로 인용 (재도출 없음): 500 ÷ (초점거리 × 크롭계수)"
  - "500-npf-rule.md에서 01-gear/camera-lens.md(GEAR-06, 병렬 plan 01-02)로 상호참조 — 마운트별 크롭계수 표는 그쪽에서 관리"

patterns-established:
  - "각 촬영법 페이지 말미에 다음 페이지로의 안내 문장을 넣어 순서대로 읽도록 유도 (노출→500/NPF→초점)"

# Metrics
duration: ~20min
completed: 2026-07-09
---

# Phase 01 Plan 03: 촬영 기초 (노출/500·NPF룰/초점) Summary

**크롭보정 500룰 공식(500÷(초점거리×크롭계수))과 워크드 예제 2개, NPF 룰 안내, 별 수동 초점 6단계 절차를 담은 촬영 기초 4개 페이지 작성**

## Performance

- **Duration:** ~20 min
- **Started:** 2026-07-09T04:30:00Z (approx.)
- **Completed:** 2026-07-09T04:48:17Z
- **Tasks:** 2
- **Files modified:** 4

## Accomplishments
- FUND-01: M모드가 왜 필요한지(야간 자동측광 무력화)부터 ISO/조리개/셔터 각각의 트레이드오프, 은하수 시작 세팅값 표(조리개 최대개방·ISO 1600~3200·셔터 15~20초·WB 3800~4200K·RAW)까지 정리
- FUND-02: 크롭보정 500룰 공식을 코드블록으로 명시하고, 크롭계수 누락이 흔한 실수임을 별도로 경고. 소니/후지(1.5×, 16mm→20.8초)와 캐논(1.6×, 50mm→6.25초) 워크드 예제 2개 제공. NPF 룰은 더 정확한 대안으로만 소개하고 손계산은 요구하지 않음
- FUND-03: 초점 실패가 초보자 1순위 실패 원인임을 강조하는 경고로 시작, AF/무한대 마크를 믿으면 안 되는 이유 설명 후 라이브뷰 확대→미세조정→고정→검증→재확인까지 6단계로 절차화

## Task Commits

Each task was committed atomically:

1. **Task 1: 기초 개요 + M모드 노출 3요소 (FUND-01)** - `52dbcac` (feat)
2. **Task 2: 크롭보정 500룰 계산 (FUND-02) + 별 수동 초점 (FUND-03)** - `bb57458` (feat)

**Plan metadata:** (this commit)

## Files Created/Modified
- `src/02-fundamentals/index.md` - 촬영 기초 파트 개요, 6개 하위 페이지 순서 안내
- `src/02-fundamentals/exposure-basics.md` - M모드 이유, ISO/조리개/셔터 설명, 은하수 시작 세팅값 표
- `src/02-fundamentals/500-npf-rule.md` - 크롭보정 500룰 공식, 워크드 예제 2개, NPF 룰 안내, camera-lens.md 상호참조
- `src/02-fundamentals/focusing.md` - 초점 실패 경고, AF/무한대 마크 불신 이유, 6단계 수동 초점 절차

## Decisions Made
- 500룰 공식과 예제는 PITFALLS.md Pitfall #2를 그대로 인용 — 재도출하지 않음 (research 사실 재사용 원칙 준수)
- NPF 룰은 개념과 사용 도구(PhotoPills Spot Stars, 온라인 계산기)만 안내하고 픽셀피치 손계산은 가르치지 않음 (FEATURES.md 교수 순서)
- 초점 페이지는 실제 밤하늘에서 처음 시도하지 말라는 경고와 집 연습(발코니/가로등) 권장을 명시 — PITFALLS.md Pitfall 1/3의 "집 연습 1차 선행" 요구를 본문에 반영

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
None. `src/01-gear/camera-lens.md`가 병렬 실행 중인 01-02 plan에 의해 같은 세션 중 채워져(GEAR-06 크롭계수 표), 500-npf-rule.md의 상호참조 링크가 완성된 대상 페이지를 가리키는 것을 커밋 이후 확인함.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness
- 촬영 기초 파트의 "카메라 세팅" 절반(노출/셔터계산/초점)이 완료되어, 01-04 plan(RAW/화밸, 은하수 찾기, 현장 워크플로)이 이어서 나머지 절반을 채울 수 있음
- `mdbook build src` exit 0 확인 완료
- 특이 블로커 없음

---
*Phase: 01-mdbook-뼈대-장비-기초-촬영법*
*Completed: 2026-07-09*
