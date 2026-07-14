---
phase: 12-여행-사진-기초
plan: 02
subsystem: docs
tags: [mdbook, composition, mongolia-etiquette, consent, travel-photography]

# Dependency graph
requires:
  - phase: 09-drone
    provides: "항공 구도 이론(리딩라인·스케일·골든/블루아워), CAAM 사람·재산 상공 동의 규정"
  - phase: 03-practice
    provides: "야외 준비 워크플로(이슬·바람·저온) — field-prep-and-hazards.md"
  - phase: 11-여행-구조-스텁
    provides: "11-travel/ 스텁 페이지 구조"
provides:
  - "src/11-travel/composition-and-light.md: 지상 여행 구도(삼분할·레이어링·프레임 속 프레임·리딩라인·스케일 지상 델타) + 빛/날씨 델타(골든아워·정오 하드라이트·역광 실루엣·흐림/황사 확산광·명소 방위별 빛) + 와이드/미디엄/디테일 스토리텔링 체크리스트"
  - "src/11-travel/landscape-and-street.md: 몽골 특화 사람·현지 촬영 에티켓(동의·게르 문지방·아이·유목민 우선·가축·라쏘폴·오보·무보수, 정직 표기) + 인물/현장 기초(캔디드·피부톤 측광·낮은 자세) + 고비 야생동물 정직 표기 + 사막 먼지·렌즈 교체 현장 관리"
affects: ["12-travel-sites (명소별 페이지가 이 페이지의 구도·에티켓 원칙을 전제로 함)"]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "이론 재사용 + 지상 델타 자체 서술 패턴(항공 구도 이론은 링크, 지상/인물 적용만 신규 서술)"
    - "2차 출처 정직 표기 패턴('일반적으로 통용되는 예절', '가이드에게 현장 확인', 출처 없는 금액·의식 미단정)"
    - "동의 원칙 일관성(드론 CAAM 동의 규정과 지상 인물 동의를 하나의 원칙으로 상호 링크)"

key-files:
  created: []
  modified:
    - src/11-travel/composition-and-light.md
    - src/11-travel/landscape-and-street.md

key-decisions:
  - "오보 공물 관습은 확정 서술 대신 '지역/가이드마다 다를 수 있음'으로 헤지, 시계방향 3바퀴·돌 더하기 패턴만 비교적 확정적으로 서술(다수 독립 출처 수렴)"
  - "인물 동의 원칙을 드론 CAAM '사람·재산 상공 동의' 규정과 별개 규칙이 아니라 하나의 원칙으로 명시적으로 연결"
  - "사막 먼지 야외 준비는 field-prep-and-hazards.md(이슬·바람·저온)를 재사용 링크하고 렌즈 교체 델타만 신규 서술 — 해당 페이지에 먼지 섹션이 없어 중복 없이 델타만 추가"

patterns-established:
  - "지상 여행 구도·에티켓 페이지가 09-drone/03-practice/12-travel-sites 세 방향으로 상호 링크되는 허브 역할"

# Metrics
duration: 25min
completed: 2026-07-14
---

# Phase 12 Plan 02: 구도·빛·타이밍 + 풍경·현장·사람 Summary

**지상 여행 구도(삼분할·레이어링·리딩라인 지상 델타)와 빛/날씨 델타(골든아워·역광·흐림/황사 확산광), 몽골 특화 사람·현지 촬영 에티켓(동의·게르·오보·무보수)을 2차 출처 정직 표기로 완성**

## Performance

- **Duration:** 25 min
- **Started:** 2026-07-14T00:00:00Z (approx.)
- **Completed:** 2026-07-14
- **Tasks:** 2/2
- **Files modified:** 2

## Accomplishments
- composition-and-light.md: 스텁을 대체해 지상 구도 4요소(삼분할·전경/중경/원경 레이어링·프레임 속 프레임·리딩라인/스케일 지상 델타), 빛 델타(골든/블루아워 링크·정오 하드라이트 인물 불리·역광 실루엣·흐림/황사 확산광·명소 방위별 빛), 와이드/미디엄/디테일 스토리텔링 체크리스트를 신규 작성
- landscape-and-street.md: 몽골 특화 에티켓(동의·게르 문지방·아이 무보수·유목민 일 우선·가축·라쏘폴·오보 시계방향 3바퀴·현금 지급 금지)을 2차 출처 정직 표기로, 드론 CAAM 동의 규정과 인물 동의를 하나의 원칙으로 상호 링크
- 항공 구도 이론(09-drone/composition.md)과 야외 준비(03-practice/field-prep-and-hazards.md)는 재서술 없이 링크 재사용하고 지상/여행 델타만 신규 서술(PITFALL 3 준수)

## Task Commits

Each task was committed atomically:

1. **Task 1: 구도와 빛 · 타이밍 — 지상 델타 + 스토리텔링 (composition-and-light.md)** - `b4bd47f` (feat)
2. **Task 2: 풍경과 현장 · 사람 — 몽골 에티켓 + 인물/현장 기초 + 현장 관리 (landscape-and-street.md)** - `4b74aea` (feat)

**Plan metadata:** (this commit) `docs(12-02): complete composition-light+landscape-street plan`

## Files Created/Modified
- `src/11-travel/composition-and-light.md` - 지상 여행 구도·빛·날씨 델타 + 스토리텔링 체크리스트 (스텁 → 완성)
- `src/11-travel/landscape-and-street.md` - 몽골 특화 사람·현지 에티켓 + 인물/현장 기초 + 사막 먼지·렌즈 교체 관리 (스텁 → 완성)

## Decisions Made
- 오보 공물 관습은 "지역/가이드마다 다를 수 있음"으로 헤지하되, 시계방향 3바퀴·돌 더하기는 다수 독립 출처 수렴으로 비교적 확정적으로 서술
- 드론 CAAM 동의 규정과 지상 인물 동의를 "두 개의 별개 규칙"이 아니라 하나의 원칙으로 명시 연결
- field-prep-and-hazards.md에 먼지 전용 섹션이 없어(이슬·바람·저온·안전·이동만 존재), 일반 야외 준비는 그대로 링크하고 사막 먼지·렌즈 교체는 완전히 신규 델타로 서술(재서술 아님, 순수 신규)

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
None.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness
- src/11-travel/ 의 composition-and-light.md, landscape-and-street.md 완성 — Phase 12의 나머지 여행 기초 콘텐츠(index.md, camera-settings.md)와 함께 Phase 13(코스 명소별 여행 사진)이 참조할 구도·에티켓 기반이 갖춰짐
- `mdbook build src` exit 0 확인(빌드 전 docs/ restore·clean 수행)
- 12-travel-sites/overview.md는 아직 스텁 상태(Phase 13 대상) — 이 플랜의 링크는 파일 존재만으로 빌드 통과, 내용은 Phase 13에서 채워짐
- 사람·현지 예절 콘텐츠는 2차 관광업계 출처 기반(MEDIUM confidence) 유지 — STATE.md Blockers/Concerns에 이미 반영된 사항과 일치

---
*Phase: 12-여행-사진-기초*
*Completed: 2026-07-14*
