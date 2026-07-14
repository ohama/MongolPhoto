---
phase: 13-코스-명소별-여행-사진
plan: 01
subsystem: docs
tags: [mdbook, travel-photography, gobi, tsagaan-suvarga, bayanzag]

# Dependency graph
requires:
  - phase: 04-mongolia
    provides: "GPS 표(촬영지 좌표) — 04-mongolia/overview.md"
  - phase: 10-drone-sites
    provides: "명소별 페이지 구조 패턴(도입→피사체·구도→타이밍→주의), GPS 링크 재사용 문장 패턴"
  - phase: 11-travel(12)
    provides: "카메라 설정·렌즈(camera-settings.md), 구도와 빛·타이밍(composition-and-light.md), 인물/현장 예절(landscape-and-street.md) 공통 이론"
provides:
  - "12-travel-sites/overview.md: 개요 허브 — GPS 표 링크 재사용, 공통 이론 링크, 명소 5곳 안내"
  - "12-travel-sites/tsagaan-suvarga.md: 층리·황혼(동향 정면광/역광 실루엣) 특화 여행 사진 가이드"
  - "12-travel-sites/bayanzag.md: 붉은 절벽·삭사울·골든아워 특화 + 화석지 채취 금지·탐방로 예절"
affects: [13-02, 14]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "명소 페이지는 GPS/이론을 재서술하지 않고 04-mongolia/overview.md·11-travel/*로 링크만 하고, 지형 적용 델타만 자체 서술(10-drone-sites 패턴 미러)"

key-files:
  created: []
  modified:
    - src/12-travel-sites/overview.md
    - src/12-travel-sites/tsagaan-suvarga.md
    - src/12-travel-sites/bayanzag.md

key-decisions:
  - "overview.md는 09-drone/index.md 대신 11-travel/index.md를 스코프 경계(주간·황혼만, 은하수/드론 제외) 링크로 사용 — 명소 페이지가 여행 파트 소속임을 명확히 함"
  - "차강소브라가 동향 절벽의 아침 정면광/저녁 역광 인사이트는 composition-and-light.md가 이미 예시로 든 문장을 근거 삼아 재확인 링크, 중복 서술 없이 지형 페이지에서 실전 적용(노출보정 수치 등)만 추가"

patterns-established:
  - "명소 페이지 도입부: 핵심 주제 한 문장 → GPS/접근 링크(좌표 재기입 금지) → 공통 이론 링크(전제) → 이후 델타만"

# Metrics
duration: 20min
completed: 2026-07-14
---

# Phase 13 Plan 01: 코스 명소별 여행 사진 — 개요 허브 + 차강소브라가·바양작 Summary

**12-travel-sites/의 개요 허브와 차강소브라가·바양작 2개 명소 페이지를 채움 — GPS/이론은 04-mongolia·11-travel 링크로 재사용하고, 동향 절벽 정면광/역광 및 화석지 채취 금지 예절 등 지형 델타만 자체 서술**

## Performance

- **Duration:** 20 min
- **Started:** 2026-07-14T02:32:00Z (approx)
- **Completed:** 2026-07-14T02:52:03Z
- **Tasks:** 3
- **Files modified:** 3

## Accomplishments
- 개요 허브(overview.md)가 04-mongolia/overview.md GPS 표를 좌표 재기입 없이 링크로 재사용하고, 11-travel/ 공통 이론(카메라 설정·구도와 빛·현장 예절) 3개를 링크하며 명소 5곳으로 안내
- 차강소브라가 페이지가 동향 절벽의 "아침=정면광(층리)/저녁=역광(실루엣)" 방위 특화 인사이트와 흰 절벽 하이라이트 클리핑 노출보정(−0.3~−0.7EV)을 담음
- 바양작 페이지가 붉은 사암 절벽·삭사울 실루엣·골든아워/일몰 핵심 시간대와, 화석·암석 채취 금지·지정 탐방로 준수 보호구역 예절을 담음
- 세 파일 모두 GPS 좌표 미재기입, 실사진 파일 미추가(`<!-- 이미지 -->` 주석만), H1 스텁 유지, `mdbook build src` exit 0 확인

## Task Commits

Each task was committed atomically:

1. **Task 1: 개요 허브 — GPS 표 링크 재사용 + 5곳 안내 (overview.md)** - `e39610e` (feat)
2. **Task 2: 차강소브라가 — 층리·황혼 특화 (tsagaan-suvarga.md)** - `9927de9` (feat)
3. **Task 3: 바양작 — 붉은 절벽·화석지 예절 특화 (bayanzag.md)** - `f8db60c` (feat)

**Plan metadata:** (recorded after this SUMMARY commit)

## Files Created/Modified
- `src/12-travel-sites/overview.md` - 개요 허브: 도입(스코프 경계)·GPS 표 링크·공통 이론 링크·명소 5곳 목록
- `src/12-travel-sites/tsagaan-suvarga.md` - 층리·황혼 특화(동향 정면광/역광, 절벽+인물 실루엣 12mm, 층리 클로즈업 50mm, 클리핑 노출보정)
- `src/12-travel-sites/bayanzag.md` - 붉은 절벽·삭사울 특화(트레킹 스냅, 삭사울 실루엣, 노을 절벽, 화석지 예절)

## Decisions Made
- overview.md 스코프 경계 문장에서 09-drone/index.md 대신 11-travel/index.md를 "여행 사진 개요"로 링크(이 파트가 여행 파트 소속임을 명확히 하고, 은하수/드론은 별도 파트 링크로 분리).
- 방위 특화 빛 인사이트(차강소브라가 동향)는 composition-and-light.md가 이미 예시로 언급한 것을 재확인 링크만 하고, 명소 페이지에서는 실전 노출값·컷 활용만 추가해 중복 서술을 피함.

## Deviations from Plan

None - plan executed exactly as written. 3개 파일 모두 계획된 구조(도입→피사체·구도→타이밍→주의)와 must_haves를 그대로 충족.

## Issues Encountered
None.

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- 13-02(홍고린엘스·욜링암·바가가즈링 촐로)가 동일한 패턴(GPS/이론 링크 재사용 + 지형 델타)을 이어갈 수 있는 기반이 마련됨.
- overview.md의 명소 5곳 링크 중 3곳(khongoryn-els.md, yolyn-am.md, baga-gazriin-chuluu.md)은 13-02가 채울 스텁 상태로 남아 있음 — 링크는 이미 유효한 파일을 가리키므로 빌드는 깨지지 않음.

---
*Phase: 13-코스-명소별-여행-사진*
*Completed: 2026-07-14*
