---
phase: 04-몽골-사전-계획
plan: 02
subsystem: content
tags: [mdbook, korean, astrophotography, gps, moon-phase, galactic-core, mongolia, canyon-risk]

# Dependency graph
requires:
  - phase: 04-몽골-사전-계획 (04-01)
    provides: src/04-mongolia/overview.md(GPS 표·달/다크윈도우 요약표·코어 공식·저고도 경고), day-1-0813.md·day-2-0814.md two-pass 템플릿 및 톤
  - phase: 01-준비하기
    provides: PhotoPills/Stellarium 소개(01-gear/accessories.md) — 재소개 없이 참조만
provides:
  - src/04-mongolia/day-3-0815.md — MONG-02: 욜링암 사전 계획(GPS/달/코어) + 협곡 코어 차폐 경고(Pitfall 3) + 입구/트인 곳 촬영 권장
  - src/04-mongolia/day-4-0816.md — MONG-02: 바가가즈링 촐로 사전 계획(GPS/달/코어 최저 14.6°) + 남쪽 트인 바위군락 권장
  - src/04-mongolia/day-5-0817.md — MONG-02: 공항/출국 최소 분량(야간 촬영 계획 없음, 이동 로지스틱스 + 여정 마무리 회고 자리)
  - src/SUMMARY.md — 3부 · 몽골 6개 draft 링크(여행 개요 + Day 1~5) 전부 실제 파일로 flip
  - src/images/mongolia/{day-3,day-4,day-5}/.gitkeep — Phase 5 실제 이미지용 폴더 선생성
affects: [05 (Phase 5: 실제 촬영 결과로 각 Day의 촬영 결과 섹션 채움, 여행 후 회고로 day-5 보강)]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "two-pass field-day 템플릿을 Day 3~4에도 동일 적용(04-01과 일관), Day 5는 이동일 특성상 템플릿 축소 적용(달/코어 표 생략, 🔵 안내 배너만 유지)"

key-files:
  created:
    - src/04-mongolia/day-3-0815.md
    - src/04-mongolia/day-4-0816.md
    - src/04-mongolia/day-5-0817.md
    - src/images/mongolia/day-3/.gitkeep
    - src/images/mongolia/day-4/.gitkeep
    - src/images/mongolia/day-5/.gitkeep
  modified:
    - src/SUMMARY.md

key-decisions:
  - "모든 GPS/달/코어 수치는 04-RESEARCH.md에서 그대로 인용 — 재계산·재검색 없음"
  - "욜링암은 협곡 벽 최대 200m·코어 최대고도 17.5°의 트레이드오프를 명시하고, 협곡 입구/트인 곳 촬영을 1차 권장, 협곡 깊은 안쪽은 낮 트레킹 소재로 재배치(Pitfall 3 대응)"
  - "협곡 축 방향이 불명확하므로 '방향에 따라 가릴 수 있다'는 보수적 서술 유지 — 현장에서 남쪽 지평선 트임 여부를 직접 확인하라고 안내"
  - "바가가즈링 촐로는 코어 최대고도가 4곳 중 최저(14.6°)임을 강조하고 남쪽 트인 바위군락 우선 스카우팅을 권장"
  - "Day 5는 Pitfall 4 대응 — 억지로 달/코어 상세표를 채우지 않고 이동 로지스틱스 + 여정 마무리 회고로 최소 분량 유지"
  - "SUMMARY.md flip은 3부 · 몽골 6개 링크만 surgical하게 수정 — 2부 연습·4부 후보정·부록의 빈 draft 링크는 그대로 유지"
  - "손계산 코어 방위각·고도·남중 시각은 모두 '추정'으로 헤지 + PhotoPills 현장 재확인 문구를 Day 3·4에도 반복 명시"
  - "실제 촬영 사진 없음(Phase 5) — 이미지는 HTML 주석 스펙만, .jpg/.png 파일 생성 안 함"

patterns-established:
  - "Pattern: 이동/논촬영일(Day 5류)은 two-pass 템플릿을 축소 적용 — 🔵 안내 배너는 유지하되 달/코어 상세 데이터 섹션은 생략하고 로지스틱스+회고 위주로 짧게 작성"

# Metrics
duration: 7min
completed: 2026-07-09
---

# Phase 4 Plan 2: 몽골 Day 3~5 사전 계획 + SUMMARY 링크 flip Summary

**욜링암 협곡 코어 차폐 경고(Pitfall 3)를 포함한 Day 3~4 사전 촬영 계획과 Day 5 최소 분량 페이지를 저작하고, 3부 · 몽골 SUMMARY 6개 링크를 flip해 book 사이드바에서 몽골 챕터 전체를 탐색 가능하게 만듦**

## Performance

- **Duration:** 7 min
- **Started:** 2026-07-09T05:49:00Z (approx)
- **Completed:** 2026-07-09T05:56:03Z
- **Tasks:** 2/2
- **Files modified:** 7 (3 created .md, 3 .gitkeep created, 1 modified — SUMMARY.md)

## Accomplishments

- `day-3-0815.md` — 욜링암: GPS 43.4931°N/104.0838°E, 조도 8%, 코어 최대고도 17.5°. **협곡 벽 최대 200m가 저고도 코어를 가릴 수 있다는 경고**를 별도 섹션(`### ⚠️ 협곡이 코어를 가릴 수 있다`)으로 명시하고, 협곡 입구/트인 곳 촬영을 권장, 협곡 깊은 안쪽은 낮 트레킹·얼음벌판 소재로 재배치
- `day-4-0816.md` — 바가가즈링 촐로: GPS 46.383°N/105.667°E, 조도 14%, 코어 최대고도 14.6°(4곳 중 최저)를 강조하고 남쪽 트인 바위군락 우선 스카우팅 권장
- `day-5-0817.md` — 공항/출국: 야간 촬영 계획 없음을 첫 문단에 명시, 달/코어 상세표 없이 이동 로지스틱스 + 4박 여정 마무리 회고 자리로 최소 분량(21줄) 구성
- `SUMMARY.md` — 3부 · 몽골 6개 draft 링크(여행 개요 + Day 1~5) 전부 실제 파일 경로로 flip, 2부/4부/부록의 draft 링크는 무변화
- 이미지 폴더 3개(.gitkeep) 선생성, 실제 이미지 파일은 생성하지 않음(Phase 5 대상)
- `mdbook build src` exit 0 확인 (Task 1·2 각각, 최종 재확인 포함 총 3회)

## Task Commits

Each task was committed atomically:

1. **Task 1: Day 3 욜링암(협곡 경고) + Day 4 바가가즈링 촐로 (MONG-02)** - `da2add0` (feat)
2. **Task 2: Day 5 공항(최소) + SUMMARY 링크 flip + 전체 빌드 검증** - `6d7ec71` (feat)

**Plan metadata:** (pending — committed after this file)

_Note: No TDD tasks in this plan (content authoring, not code)._

## Files Created/Modified

- `src/04-mongolia/day-3-0815.md` - Day 3 욜링암 사전 계획(two-pass 템플릿) + 협곡 코어 차폐 경고
- `src/04-mongolia/day-4-0816.md` - Day 4 바가가즈링 촐로 사전 계획(two-pass 템플릿), 코어 최저 고도 강조
- `src/04-mongolia/day-5-0817.md` - Day 5 공항/출국, 최소 분량(야간 촬영 없음, 로지스틱스+회고)
- `src/SUMMARY.md` - 3부 · 몽골 6개 링크 flip(overview + day-1~5 실제 파일 경로 연결)
- `src/images/mongolia/day-3/.gitkeep` - Day 3 이미지 폴더 선생성
- `src/images/mongolia/day-4/.gitkeep` - Day 4 이미지 폴더 선생성
- `src/images/mongolia/day-5/.gitkeep` - Day 5 이미지 폴더 선생성

## Decisions Made

- 모든 수치(GPS/달/천문박명/조도/코어 고도·방향·남중시각)는 04-RESEARCH.md를 그대로 인용 — 재계산·재검색 없음.
- 욜링암은 협곡(벽 최대 200m)과 저고도 코어(17.5°)의 트레이드오프를 명시적으로 서술하고, 입구/트인 곳 촬영을 1차 권장 — 협곡 축 방향이 불명확하므로 "방향에 따라 가릴 수 있다"는 보수적 톤 유지, 현장 확인을 반복 강조(Pitfall 3 대응).
- 바가가즈링 촐로는 코어 최대고도가 4곳 중 최저(14.6°)임을 강조 — 남쪽이 트인 바위군락 우선 스카우팅 권장.
- Day 5는 확정 일정("공항 출국")과 맞지 않는 상세 콘텐츠를 억지로 채우지 않고, 이동 로지스틱스 + 여정 마무리 회고로 최소 분량 유지(Pitfall 4 대응).
- SUMMARY.md flip은 3부 · 몽골 6개 링크만 surgical하게 수정 — 2부 연습·4부 후보정·부록의 빈 draft 링크는 grep으로 무변화 확인.
- 손계산 코어 수치는 전부 "추정"으로 헤지하고 PhotoPills 현장 재확인 문구를 Day 3·4에도 반복 명시.
- 실제 촬영 사진은 아직 없으므로(Phase 5 예정) 이미지는 HTML 주석 스펙만 남기고 실제 .jpg/.png 파일은 생성하지 않음.

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- Phase Success Criterion #2(독자가 8/13~8/17 날짜별 챕터로 무엇을·어디서·언제 찍을지 결정 가능)가 5일 전체로 완성됨.
- 3부 · 몽골 목차 6개가 실제 페이지로 연결되어 book 사이드바에서 탐색 가능, `mdbook build src` exit 0 확인.
- Phase 4(몽골 사전 계획)는 04-01·04-02 모두 완료 — 다음은 Phase 5(실제 여행 후 각 Day의 "촬영 결과" 섹션 채우기, day-5 실제 회고 보강)로, 8/13~8/17 실제 여행 이후에만 착수 가능(하드 날짜 게이트).
- 블로커 없음.

---
*Phase: 04-몽골-사전-계획*
*Completed: 2026-07-09*
