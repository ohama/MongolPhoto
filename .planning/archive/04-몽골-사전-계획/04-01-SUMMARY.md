---
phase: 04-몽골-사전-계획
plan: 01
subsystem: content
tags: [mdbook, korean, astrophotography, gps, moon-phase, galactic-core, mongolia]

# Dependency graph
requires:
  - phase: 01-준비하기
    provides: PhotoPills/Stellarium 소개(01-gear/accessories.md), 500/NPF·초점·현장 워크플로 기법
  - phase: 02-fundamentals (via Phase 1)
    provides: 은하수 찾기와 타이밍(코어 방향·고도·달·Bortle 체크리스트)의 정성적 서술 — 이번 플랜이 이를 정량화
provides:
  - src/04-mongolia/overview.md — MONG-01: 4곳 GPS 표, 4박(8/13~16) 달/다크윈도우 요약표, 코어 최대고도 공식·저고도(15~18°) 경고, 권장 촬영 시간대, PhotoPills 현장 재확인 안내
  - src/04-mongolia/day-1-0813.md — MONG-02: 차강소브라가 사전 계획(GPS/달/코어/구도/타임라인), two-pass 템플릿
  - src/04-mongolia/day-2-0814.md — MONG-02: 홍고린엘스 사전 계획(GPS/달/코어/구도/방진 주의/타임라인), two-pass 템플릿
  - src/images/mongolia/{overview,day-1,day-2}/.gitkeep — Phase 5 실제 이미지용 폴더 선생성
affects: [04-몽골-사전-계획 (04-02: Day 3~5 + SUMMARY flip), 05 (Phase 5: 실제 촬영 결과로 촬영 결과 섹션 채움)]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "two-pass field-day 템플릿(사전 계획 / 촬영 결과) — 03-practice 연습 로그와 달리 사전 계획 섹션은 저작 시점에 100% 채움, 촬영 결과는 Phase 5 placeholder로 비워둠"

key-files:
  created:
    - src/04-mongolia/overview.md
    - src/04-mongolia/day-1-0813.md
    - src/04-mongolia/day-2-0814.md
    - src/images/mongolia/overview/.gitkeep
    - src/images/mongolia/day-1/.gitkeep
    - src/images/mongolia/day-2/.gitkeep
  modified: []

key-decisions:
  - "모든 GPS/달/코어 수치는 04-RESEARCH.md에서 그대로 인용 — 재계산·재검색 없음"
  - "차강소브라가는 44.577°N/105.717°E만 사용, 동명 광산 좌표(108.3xE)는 본문에서 언급조차 하지 않음(grep 오염 검증 통과)"
  - "코어 최대고도(15~18°)와 방향(orientation)을 명확히 구분해 서술 — Pitfall 2 대응, 남쪽 지평선이 트인 전경 우선"
  - "손계산 코어 방위각·고도·남중 시각은 모두 '추정'으로 헤지 + PhotoPills 현장 재확인 문구 각 페이지에 명시"
  - "PhotoPills/Stellarium은 accessories.md에서 이미 소개된 것으로 전제 — 재소개 없이 링크만"
  - "실제 촬영 사진 없음(Phase 5) — 이미지는 HTML 주석 스펙만, .jpg/.png 파일 생성 안 함"

patterns-established:
  - "Pattern: 몽골 Day 페이지 = two-pass 템플릿(사전 계획 채움 + 촬영 결과 placeholder), overview.md 공통 데이터를 각 Day가 인용하는 구조"

# Metrics
duration: 6min
completed: 2026-07-09
---

# Phase 4 Plan 1: 몽골 여행 개요 + Day 1~2 사전 계획 Summary

**04-RESEARCH.md의 GPS/달위상/은하수 코어 데이터를 overview.md 공통 참조 표와 Day 1(차강소브라가)·Day 2(홍고린엘스) two-pass 사전 촬영 계획 페이지로 저작**

## Performance

- **Duration:** 6 min
- **Started:** 2026-07-09T14:45:00+09:00 (approx)
- **Completed:** 2026-07-09T14:51:37+09:00
- **Tasks:** 2/2
- **Files modified:** 6 (3 created .md, 3 .gitkeep)

## Accomplishments

- `overview.md` — 4곳 GPS 표(차강소브라가/홍고린엘스/욜링암/바가가즈링 촐로/공항), 4박 달·천문박명 요약표(전부 완전암흑 이후 무월광), 코어 최대고도 공식(90°−위도−29°)과 결과값, "방향 vs 고도" 구분 경고, 권장 촬영대(박명 종료 직후~새벽 1~2시), PhotoPills/Stellarium 현장 재확인 안내
- `day-1-0813.md` — 차강소브라가: GPS 44.577°N/105.717°E, 신월 당일(조도 0%), 코어 최대고도 16.4°, 동향 절벽 실루엣 구도, 촬영 타임라인
- `day-2-0814.md` — 홍고린엘스: GPS 43.50°N/103.17°E(대표좌표), 조도 3%, 코어 최대고도 17.5°, 사구 능선 구도 + 방진 주의, 촬영 타임라인
- 이미지 폴더 3개(.gitkeep) 선생성, 실제 이미지 파일은 생성하지 않음(Phase 5 대상)

## Task Commits

Each task was committed atomically:

1. **Task 1: src/04-mongolia/ 생성 + overview.md (MONG-01 공통 데이터)** - `fb7e2f9` (feat)
2. **Task 2: Day 1 차강소브라가 + Day 2 홍고린엘스 (MONG-02)** - `cb7c927` (feat)

_Note: No TDD tasks in this plan (content authoring, not code)._

## Files Created/Modified

- `src/04-mongolia/overview.md` - MONG-01: GPS 표, 달/다크윈도우 요약표, 코어 공식·저고도 경고, 권장 촬영대, 현장 재확인 안내
- `src/04-mongolia/day-1-0813.md` - Day 1 차강소브라가 사전 계획(two-pass 템플릿)
- `src/04-mongolia/day-2-0814.md` - Day 2 홍고린엘스 사전 계획(two-pass 템플릿)
- `src/images/mongolia/overview/.gitkeep` - overview 이미지 폴더 선생성
- `src/images/mongolia/day-1/.gitkeep` - Day 1 이미지 폴더 선생성
- `src/images/mongolia/day-2/.gitkeep` - Day 2 이미지 폴더 선생성

## Decisions Made

- 모든 수치(GPS/달/천문박명/조도/코어 고도·방향·남중시각)는 04-RESEARCH.md를 그대로 인용 — 재계산·재검색 없음.
- 차강소브라가 좌표는 44.577°N/105.717°E만 사용하고, 동명 광산 좌표(108.3xE)는 본문 어디에도 등장시키지 않음 — grep으로 오염 없음 확인.
- 코어 "방향(orientation)"과 "고도(altitude)"를 명확히 구분해 서술(Pitfall 2 대응) — 15~18° 저고도 강조, 남쪽 지평선이 트인 전경 우선 권장.
- 손계산 코어 수치는 전부 "추정"으로 헤지하고 PhotoPills 현장 재확인 문구를 overview + 각 Day 페이지에 반복 명시.
- PhotoPills/Stellarium은 01-gear/accessories.md에서 이미 소개된 것으로 전제하고 재소개 없이 링크만 사용.
- 실제 촬영 사진은 아직 없으므로(Phase 5 예정) 이미지는 HTML 주석 스펙만 남기고 실제 .jpg/.png 파일은 생성하지 않음.

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- Phase Success Criterion #1(달 위상·코어 방향/고도·GPS 명시)의 overview 근거와 #2(날짜별 결정 가능)의 Day 1~2 부분이 충족됨.
- Day 3(욜링암, 협곡 리스크 명시 필요)·Day 4(바가가즈링 촐로)·Day 5(공항, 최소 분량) 및 `SUMMARY.md`의 "3부 · 몽골" 6개 draft 링크 flip, 최종 `mdbook build` 전체 검증은 04-02-PLAN에서 처리.
- 블로커 없음 — 04-RESEARCH.md에 필요한 데이터가 이미 전부 확보되어 있어 04-02는 체크포인트 없이 바로 진행 가능.

---
*Phase: 04-몽골-사전-계획*
*Completed: 2026-07-09*
