---
phase: 08-드론-기초
plan: 01
subsystem: content
tags: [mdbook, dji-mini5pro, drone-photography, caam-regulations, raw-dng]

# Dependency graph
requires:
  - phase: 07-구조·제목-확장
    provides: "09-drone/ 폴더 구조와 16개 드론 스텁 페이지(index.md, dji-mini5pro-basics.md, dji-mini5pro-settings.md 포함), SUMMARY.md 재편"
provides:
  - "드론 파트 진입 페이지(index.md) — 범위 고지, 야간(은하수) 제외 이유(법+하드웨어), CAAM 규제 핵심 요약(확인/미확인 구분), 250g 무게 함정"
  - "DJI Mini 5 Pro 기본 조작 페이지 — 조종기, 사전 점검 체크리스트(RTH·GPS·나침반), 이착륙, 에티켓"
  - "DJI Mini 5 Pro 카메라 설정 페이지 — DNG RAW, 고정 조리개(2요소 노출), 하이라이트 보호(히스토그램/제브라), AEB, ND 필터 선택 규칙"
affects: [08-02, 08-03, 09-드론-명소별-항공, 10-드론-참고자료]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "규제 정직성 프레이밍: 확인 사실(CAAM Part 101 — 주간/VLOS/120m/4km/동의)은 단정, 미확인 사실(250g 면제·등록비·국립공원 규정)은 '미확인 — 재확인 필요' 인용구 블록으로 명확히 구분"
    - "이론 재사용 링크 패턴: RAW/히스토그램 개념은 raw-and-wb.md로 링크만 하고 재서술하지 않음, 드론 델타(밝은 사막=하이라이트 기준 노출)만 신규 서술"

key-files:
  created: []
  modified:
    - src/09-drone/index.md
    - src/09-drone/dji-mini5pro-basics.md
    - src/09-drone/dji-mini5pro-settings.md

key-decisions:
  - "CAAM Part 101 1차 자료로 확인된 규칙(주간·VLOS·120m·4km·동의)만 단정하고, 250g 면제·등록비·국립공원 규정은 모두 '미확인' 인용구 블록으로 분리 — PITFALL 1·2 대응"
  - "야간 은하수 드론 촬영 제외를 법(주간만 비행)과 하드웨어(8초 노출 한계·짐벌 진동·정밀 포커싱 불가) 두 이유로 나란히 명시 — PITFALL 9 대응"
  - "노출 설정에서 f/1.8 고정 조리개로 인해 ISO·셔터 2요소만 제어한다는 점을 지상 카메라 3요소 조절과 명시적으로 대비"

patterns-established:
  - "새 용어는 첫 등장 시 괄호 뜻풀이(VLOS, RTH, GPS 락, AEB, ND 필터 등) — glossary.md 수정 없이 처리"
  - "이미지는 실제 파일 없이 `<!-- 이미지: 경로 — 설명 -->` HTML 주석만 사용"

# Metrics
duration: ~10min
completed: 2026-07-13
---

# Phase 8 Plan 1: 드론 개요·기본조작·카메라설정 Summary

**드론 파트 진입 페이지(범위·야간 제외 이유·CAAM 규제 확인/미확인 구분)와 DJI Mini 5 Pro 기본 조작·DNG RAW 촬영 설정 페이지 3개를 완성**

## Performance

- **Duration:** ~10분
- **Completed:** 2026-07-13
- **Tasks:** 3/3
- **Files modified:** 3

## Accomplishments
- index.md에 드론 파트의 스코프(사진 중심·주간/황혼)와 은하수 제외를 법(CAAM 주간 비행만 허용)·하드웨어(Mini급 최대 노출 ~8초, 짐벌 진동, 정밀 포커싱 불가) 두 이유로 명시
- CAAM Part 101 확인 사실(주간·VLOS·120m AGL·4km 이격·동의 없는 비행 금지)을 단정하고, 250g 면제·등록비·국립공원 규정은 별도 인용구 블록으로 "미확인 — CAAM/현장 재확인" 프레이밍
- Mini 5 Pro의 250g 등급 취약성(표준 배터리 249.9g±4g vs Plus 배터리 297~299g)을 STACK.md 수치 그대로 반영
- dji-mini5pro-basics.md에 사전 점검 체크리스트(펌웨어·배터리·프로펠러·SD카드·RTH 고도·홈포인트·GPS 락·나침반)와 사람/가축 동의 에티켓 작성
- dji-mini5pro-settings.md에 DNG RAW 기본 설정(raw-and-wb.md 링크, 재서술 없음), f/1.8 고정 조리개로 인한 2요소 노출 제어, 히스토그램/제브라 기반 하이라이트 보호, AEB, ND8/32/128 선택 규칙 작성

## Task Commits

1. **Task 1: 드론 사진 개요 + 규제 핵심 요약 (index.md)** - `d49b30c` (feat)
2. **Task 2: DJI Mini 5 Pro 기본 조작 (dji-mini5pro-basics.md)** - `316d667` (feat)
3. **Task 3: 카메라 설정 — DNG RAW·노출·ND·히스토그램 (dji-mini5pro-settings.md)** - `9c47b71` (feat)

**Plan metadata:** (다음 커밋에서 기록)

## Files Created/Modified
- `src/09-drone/index.md` - 드론 파트 개요, 스코프 고지, 야간 제외 이유(법+하드웨어), CAAM 규제 핵심 요약(확인/미확인), 무게 함정, 참고 링크, 읽는 순서
- `src/09-drone/dji-mini5pro-basics.md` - 조종기 소개, 사전 점검 체크리스트, 이착륙, 비행 중 습관, 에티켓
- `src/09-drone/dji-mini5pro-settings.md` - DNG RAW, 고정 조리개 노출, 하이라이트 보호, AEB, ND 필터

## Decisions Made
- 규제 요약을 "확인 사실 단정 + 미확인 인용구 블록" 두 파트로 명확히 분리해, 확정 법률 해석처럼 읽히지 않도록 함(PITFALL 1·2)
- 야간 제외 이유를 법과 하드웨어 두 가지로 나란히 서술해 "이 드론으로도 은하수를 찍을 수 있지 않을까"라는 독자의 자연스러운 의문에 직접 답함(PITFALL 9)
- RAW/히스토그램 이론은 재서술하지 않고 fundamentals 챕터로 링크만 하여 중복을 피함

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
None.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness
- src/09-drone/의 나머지 4개 페이지(composition.md, flight-and-battery.md, gobi-environment.md, drone-postprocessing.md)는 병렬 실행 중인 다른 플랜(08-02, 08-03)에서 채워질 예정 — 이 플랜에서 생성한 상호 링크(3곳 모두 존재)가 향후 해당 페이지 완성 시 유효한 목적지가 됨
- 08-references/drone-mongolia-regulations.md(Phase 10 소관)는 이 플랜에서 링크만 걸었고 콘텐츠는 아직 스텁 상태 — Phase 10에서 CAAM Part 102 재조사와 함께 채워야 함
- Blocker 없음. mdbook build src exit 0 확인됨.

---
*Phase: 08-드론-기초*
*Completed: 2026-07-13*
