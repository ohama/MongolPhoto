---
phase: 09-명소별-항공-촬영
plan: 01
subsystem: docs
tags: [mdbook, drone-photography, aerial-composition, gobi-desert, dji-mini5pro]

# Dependency graph
requires:
  - phase: 08-드론-기초
    provides: composition.md·flight-and-battery.md·gobi-environment.md·dji-mini5pro-settings.md (공통 항공 이론, 링크 재사용 대상)
  - phase: 04-mongolia (v1.0)
    provides: overview.md GPS 표, tsagaan-suvarga.md 지상 촬영 페이지(지형·피사체 확인용)
provides:
  - 명소별 항공 파트 허브 페이지(src/10-drone-sites/overview.md) — GPS 표·공통 이론 링크 재사용 + 5개 명소 안내 + 국립공원 미확인 캐비어트
  - 차강소브라가 항공 촬영 페이지(src/10-drone-sites/tsagaan-suvarga.md) — 층리·낙차 특화 구도·위험
affects: [09-02 (홍고린엘스·욜링암), 09-03 (바양작·바가가즈링 촐로), 10-references (규제 파트)]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "명소별 항공 페이지는 공통 이론(구도/비행배터리/고비환경/카메라설정)을 재서술하지 않고 09-drone/ 링크로 재사용, '이 지형에 어떻게 적용하나'만 신규 서술"
    - "GPS 좌표는 04-mongolia/overview.md 표를 유일한 출처로 링크 재사용, 명소별 페이지에 재기입 금지"
    - "국립공원/보호구역 드론 규정은 항상 '미확인 — 현지 재확인' 인용구 블록으로만 표기, 허용/금지 단정 금지"

key-files:
  created: []
  modified:
    - src/10-drone-sites/overview.md
    - src/10-drone-sites/tsagaan-suvarga.md

key-decisions:
  - "overview.md GPS 절은 좌표 재기입 없이 04-mongolia/overview.md 표 링크 + 지형 성격 한 줄 요약(홍고린엘스=대표점, 욜링암=GPS 신호 주의)만 서술"
  - "국립공원 캐비어트는 욜링암·홍고린엘스(공원 영역)를 명시적으로 지목하고, 나머지 3곳도 관리·보호구역 가능성을 언급해 동일한 재확인 태도를 권장"
  - "tsagaan-suvarga.md는 04-mongolia/tsagaan-suvarga.md의 은하수 코어 방위·남중 시각을 전혀 재서술하지 않고, 지형(절벽 높이/길이/층리) 사실만 항공 델타로 전환"

patterns-established:
  - "명소별 항공 페이지 구조: 도입(한 문장 주제) → GPS/공통이론 링크 → 항공 구도·피사체(지형 특화) → 지형 특화 위험 → 고비 공통 환경 링크"

# Metrics
duration: ~10min
completed: 2026-07-13
---

# Phase 9 Plan 01: 명소별 항공 파트 허브 + 차강소브라가 Summary

**명소별 항공 파트 허브(overview.md)와 첫 명소(차강소브라가) 페이지를 작성 — GPS 표·공통 이론(구도/비행배터리/고비환경/카메라설정)은 링크로만 재사용하고 국립공원 드론 규정은 "미확인" 캐비어트로 정직하게 처리, 차강소브라가는 층리·절벽 낙차에 특화된 탑다운/45°/리딩라인 구도와 하이라이트 클리핑·RTH 고도 위험을 다룸**

## Performance

- **Duration:** ~10 min
- **Started:** 2026-07-13T04:00Z (approx)
- **Completed:** 2026-07-13T04:05:28Z
- **Tasks:** 2/2
- **Files modified:** 2

## Accomplishments
- overview.md가 GPS 좌표를 재작성하지 않고 `../04-mongolia/overview.md` 표를 링크로만 참조(재기입 0건 확인)
- 공통 항공 이론 4종(구도·비행/배터리/RTH·고비 환경·카메라 설정)을 `../09-drone/` 링크로 재사용, 명소 페이지는 지형 적용 델타만 서술
- 국립공원(고비 구르왕사이한) 드론 규정을 "미확인 — 현지/관리소·가이드 재확인" 인용구 블록으로 정직하게 처리, 허용/금지 단정 없음
- 차강소브라가 페이지에 층리·30~60m 낙차 특화 항공 구도(탑다운/나디르·45° 오블리크·리딩라인·스케일·골든아워 빛)와 지형 특화 위험(하이라이트 클리핑·절벽 낙차 고도 상실·RTH 고도) 완성

## Task Commits

Each task was committed atomically:

1. **Task 1: 명소별 항공 파트 허브 (overview.md)** - `295476d` (feat)
2. **Task 2: 차강소브라가 항공 촬영 (tsagaan-suvarga.md)** - `e86a7fc` (feat)

**Plan metadata:** (this commit, docs: complete plan)

## Files Created/Modified
- `src/10-drone-sites/overview.md` - 명소별 항공 파트 허브: GPS/이론 링크 재사용, 5개 명소 안내, 국립공원 미확인 캐비어트
- `src/10-drone-sites/tsagaan-suvarga.md` - 차강소브라가 항공 구도(탑다운·45°·리딩라인·스케일)·지형 특화 위험(하이라이트·낙차·RTH)

## Decisions Made
- GPS 좌표 재기입 완전 금지 — overview.md·tsagaan-suvarga.md 모두 `../04-mongolia/overview.md`로만 링크, `grep -nE "44\.577|43\.50|104\.0838|46\.383|44\.14"` 결과 0건으로 검증
- 국립공원 캐비어트는 욜링암·홍고린엘스를 명시 지목하되, 특정 허가비·절차는 지어내지 않고 "현지 재확인"으로만 안내
- 지상 은하수 콘텐츠(코어 방위각·남중 시각)는 항공 페이지에 전혀 가져오지 않음 — `grep -n "남중\|코어 최대 고도\|방위각"` 결과 0건으로 검증

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
None.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness
- src/10-drone-sites/ 골격(허브 + 1개 명소)이 확립되어, 09-02(홍고린엘스·욜링암)와 09-03(바양작·바가가즈링 촐로)이 같은 패턴(도입 → GPS/이론 링크 → 지형 특화 구도 → 지형 특화 위험)을 따르면 됨
- `mdbook build src` exit 0 확인, 두 파일 모두 "작성 예정" 없음, 실제 이미지 파일 0(`<!-- 이미지: -->` 주석만)
- 병렬 실행 중인 09-02/09-03이 bayanzag.md·khongoryn-els.md·yolyn-am.md·baga-gazriin-chuluu.md를 채우면 overview.md의 5개 명소 링크가 모두 유효해짐(현재도 스텁 파일이 존재하므로 링크 자체는 깨지지 않음)

---
*Phase: 09-명소별-항공-촬영*
*Completed: 2026-07-13*
