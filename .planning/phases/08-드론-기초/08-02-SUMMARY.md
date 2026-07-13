---
phase: 08-드론-기초
plan: 02
subsystem: content
tags: [drone, dji-mini5pro, aerial-composition, flight-basics, battery-management, mdbook, korean]

# Dependency graph
requires:
  - phase: 07-구조-제목-확장
    provides: "src/09-drone/ 스텁 16개, book.toml/SUMMARY.md 구조"
  - phase: 08-드론-기초 (plan 01, 03 — 병렬)
    provides: "같은 09-drone/ 디렉터리의 형제 페이지(dji-mini5pro-basics.md, dji-mini5pro-settings.md, index.md, gobi-environment.md, drone-postprocessing.md)"
provides:
  - "composition.md — 항공 구도 4대 기법(탑다운/나디르, 45° 오블리크, 리딩라인, 스케일) + 항공 빛 읽기(정오/골든아워/블루아워)"
  - "flight-and-battery.md — 사진용 비행 기초(호버·낮고 천천히·오빗·리빌·시네 모드) + 배터리·RTH 관리(36분/52분, RTH 트리거·고도, 로스트드론 위험, 저온/고온 배터리)"
affects: [09-명소별-항공, 10-드론-참고자료]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "저온 배터리 물리는 03-practice/field-prep-and-hazards.md로 링크만 하고 재서술하지 않음(중복 방지 패턴 재사용)"
    - "고비 환경 종합(바람/모래/충전)은 gobi-environment.md로 위임하는 페이지 간 역할 분담"

key-files:
  created: []
  modified:
    - "src/09-drone/composition.md"
    - "src/09-drone/flight-and-battery.md"

key-decisions:
  - "composition.md와 flight-and-battery.md를 상호 링크(구도→안정비행 전제, 비행→구도 참조)로 연결해 두 페이지가 한 벌로 읽히게 함"
  - "AEB(자동 노출 브라케팅) 언급은 아직 스텁 상태인 dji-mini5pro-settings.md로 링크만 하고 세부 설정법은 그 페이지 소관으로 남김(병렬 실행 중인 다른 plan 소관 파일이므로 내용 침범 금지)"

patterns-established:
  - "새 용어는 괄호 안에 뜻 병기(나디르, 오블리크, 오빗, 리빌, RTH) — glossary.md 수정 없이 인라인 설명"

# Metrics
duration: ~15min
completed: 2026-07-13
---

# Phase 8 Plan 2: 항공 구도 + 비행 기초·배터리 관리 Summary

**항공 구도 4대 기법(탑다운/45°/리딩라인/스케일)과 항공 빛 읽기를 담은 composition.md, 비행 동작(호버/오빗/리빌)과 RTH·배터리 수치 관리를 담은 flight-and-battery.md 2개 페이지를 스텁에서 완성 콘텐츠로 채움**

## Performance

- **Duration:** ~15min
- **Completed:** 2026-07-13T03:37:02Z
- **Tasks:** 2
- **Files modified:** 2

## Accomplishments
- composition.md: 탑다운/나디르(90°), 45° 오블리크, 리딩라인, 스케일 4대 항공 구도 기법과 정오/골든아워/블루아워 빛 읽기를 초보자 대상으로 설명
- flight-and-battery.md: 안정 호버·낮고 천천히·오빗·리빌·시네 모드의 사진용 비행 기초와, DJI Mini 5 Pro 실측 수치(36분/52분, RTH 트리거 20~30%·지형보다 높은 RTH 고도, 로스트드론 위험, 저온 38°C 이상 고온 배터리 델타)를 스캔 가능한 목록으로 정리
- 두 페이지를 상호 링크(구도 → 안정 비행 전제, 비행 → 구도 참조)로 연결해 한 벌로 읽히게 구성
- 저온 배터리 물리 재서술 없이 field-prep-and-hazards.md로 링크, 고비 환경 종합은 gobi-environment.md로 위임 — 중복 없음

## Task Commits

Each task was committed atomically:

1. **Task 1: 항공 구도의 기초 (composition.md)** - `b9f5b6d` (feat)
2. **Task 2: 비행 기초 + 배터리·RTH 관리 (flight-and-battery.md)** - `20fac6c` (feat)

**Plan metadata:** (this commit, following SUMMARY creation)

## Files Created/Modified
- `src/09-drone/composition.md` - 항공 구도 4대 기법 + 빛 읽기 콘텐츠 (스텁 → 완성)
- `src/09-drone/flight-and-battery.md` - 비행 기초 + 배터리/RTH 관리 콘텐츠 (스텁 → 완성)

## Decisions Made
- STACK.md에 명시된 DJI Mini 5 Pro 수치(표준 36분/Plus 52분, 최대 풍속 저항 12m/s, 옴니비전+LiDAR)만 그대로 인용하고 새 수치를 지어내지 않음
- PITFALL 6(원격지 로스트드론)의 예방 조치(홈포인트 기억, GPS 락 확인, VLOS 준수)를 flight-and-battery.md의 배터리·RTH 절에 그대로 반영
- 영상 전용 기법(트래킹 등)은 사진 중심 책의 범위 밖이므로 시네 모드 한 줄 언급 외 확장하지 않음(명시적으로 범위 제한 문장 포함)

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
None.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness
- composition.md, flight-and-battery.md 모두 완성 콘텐츠로 채워졌고 mdbook build 통과 확인
- 09-drone/ 디렉터리의 나머지 스텁(dji-mini5pro-basics.md, dji-mini5pro-settings.md, index.md, gobi-environment.md, drone-postprocessing.md)은 병렬 실행 중인 08-01, 08-03 plan 소관 — 이 plan은 손대지 않음
- gobi-environment.md와 dji-mini5pro-settings.md로의 링크는 대상 파일이 아직 스텁이어도 실제 파일이 존재해 빌드가 깨지지 않음(다른 plan이 완성하면 링크가 유효한 콘텐츠로 자연히 이어짐)
- 블로커 없음

---
*Phase: 08-드론-기초*
*Completed: 2026-07-13*
