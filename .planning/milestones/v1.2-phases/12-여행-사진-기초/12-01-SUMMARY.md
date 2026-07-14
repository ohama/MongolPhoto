---
phase: 12-여행-사진-기초
plan: 01
subsystem: content
tags: [mdbook, travel-photography, canon-r7, samyang-12mm, rf-50mm, ibis, cr3-raw]

# Dependency graph
requires:
  - phase: 11-구조·제목-재편
    provides: "11-travel/index.md, 11-travel/camera-settings.md 스텁 및 SUMMARY.md 3-트랙 구조(1부 여행 최상단)"
provides:
  - "여행 사진 파트 진입 페이지(index.md): 매력·1부 배치 이유·범위(지상·주간/황혼)·야간/항공/영상 제외 안내"
  - "카메라 설정 & 렌즈 페이지(camera-settings.md): Av↔M 언런·노출보정·측광·CR3 RAW·주간 WB + 12mm/50mm/18-150mm 렌즈 활용·방진 차이·현장관리·초광각/준망원 실전 기법"
affects: [12-02, 12-travel-sites, composition-and-light.md, landscape-and-street.md]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "여행 파트는 이론 재서술 없이 기존 은하수/드론 파트로 링크 후 '주간 델타'만 추가하는 재사용 패턴 확립"
    - "장비 스펙 정확성: 마운트·AF 여부·방진 여부를 STACK.md 수치 그대로만 인용, 협응 조건이 다른 IBIS 스탑 수는 조건을 명시해 병기"

key-files:
  created: []
  modified:
    - src/11-travel/index.md
    - src/11-travel/camera-settings.md

key-decisions:
  - "M모드(은하수)→Av모드(여행)를 '언런'으로 명시적으로 대비시켜 독자가 규칙 충돌로 헷갈리지 않게 함"
  - "삼양 12mm를 'Canon RF-S 마운트 전용·AF(Linear STM)·방진 O'로 정확히 표기, 범용 RF나 Sony E/Fuji X 동명 렌즈와 구분"
  - "IBIS 스탑 수 자기모순 방지: R7 일반 '최대 8단'(마케팅, 협응 조건 최적)과 RF-S 18-150mm 실측 '최대 7단'(특정 렌즈 조합)을 서로 다른 조건의 주장으로 한 줄 정리"
  - "방진 split(바디+12mm만 방진, 50mm·18-150 비방진)에 따라 렌즈 교체 시 센서 먼지 위험을 현장관리 callout으로 추가(드론엔 없는 교환렌즈 특유 위험)"
  - "camera-settings.md는 Task 2(설정)/Task 3(렌즈) 두 파트를 같은 파일에 이어 쓰되, 원자적 커밋을 위해 파일을 '---' 구분선 기준으로 분리 커밋"

patterns-established:
  - "이론 재사용 링크 패턴: [노출의 기본](../02-fundamentals/exposure-basics.md), [RAW와 화이트밸런스](../02-fundamentals/raw-and-wb.md), [야외 준비와 현장 워크플로](../03-practice/field-prep-and-hazards.md)를 재서술 없이 링크하고 '주간 델타'만 추가"

# Metrics
duration: ~25min
completed: 2026-07-14
---

# Phase 12 Plan 01: 여행 사진 개요 & 카메라 설정·렌즈 선택 Summary

**여행 파트 진입 페이지(index.md)와 Canon R7 Av모드·노출보정·측광·CR3 RAW·주간 WB + 삼양 12mm(RF-S)/RF 50mm/RF-S 18-150mm 렌즈 활용·방진 차이·초광각/준망원 실전 기법(camera-settings.md)을 작성**

## Performance

- **Duration:** ~25 min
- **Completed:** 2026-07-14T02:10:00Z
- **Tasks:** 3 (index.md 1개 + camera-settings.md 2개 파트)
- **Files modified:** 2

## Accomplishments
- index.md: 은하수·드론과 구분되는 여행 사진의 매력(하루 종일 찍는 지상 사진), 1부 배치 이유, 범위(지상·주간~황혼), 야간(은하수)/항공(드론)/영상 제외 이유와 링크, 읽는 순서를 편집체·초보자 톤으로 작성
- camera-settings.md 설정 파트: M모드(은하수)→Av모드(여행) '언런'을 명시적으로 대비, 노출보정(±EV)·측광(평가/스팟)·CR3 RAW(신규 도구 불필요)·주간 WB(AWB/프리셋)·IBIS 단렌즈 caveat를 이론 재서술 없이 링크로 처리
- camera-settings.md 렌즈 파트: 킷 요약표 + IBIS 8단(일반)/7단(18-150 실측) 자기모순 없는 한 줄 정리, 삼양 12mm 정확 표기(RF-S·AF·방진 O), ≈24-70mm 화각 공백과 18-150mm 추천(구매 강제 아님), 방진 차이·렌즈 교체 먼지 관리, 초광각/준망원 실전 기법

## Task Commits

Each task was committed atomically:

1. **Task 1: 여행 사진 개요·매력·범위 (index.md)** - `6af787d` (feat)
2. **Task 2: 카메라 설정 — Av↔M·노출보정·측광·CR3 RAW·주간 WB (camera-settings.md 앞부분)** - `19ae911` (feat)
3. **Task 3: 렌즈 활용 — 12mm/50mm/18-150·화각 공백·방진·현장관리·실전 (camera-settings.md 뒷부분)** - `36bba71` (feat)

**Plan metadata:** (다음 커밋에서 기록)

## Files Created/Modified
- `src/11-travel/index.md` — 여행 사진 파트 진입 페이지(개요·매력·범위·제외 이유·읽는 순서)
- `src/11-travel/camera-settings.md` — Canon R7 설정(Av·노출보정·측광·CR3 RAW·주간 WB) + 렌즈 활용(삼양 12mm/RF 50mm/RF-S 18-150mm·방진·현장관리·초광각/준망원 실전)

## Decisions Made
- M→Av "언런"을 은하수 파트와 명시적으로 대비시켜 규칙 충돌처럼 보이지 않게 서술
- 삼양 12mm는 "Canon RF-S 마운트 전용"으로 표기해 범용 RF 및 Sony E/Fuji X 동명 렌즈와 혼동 방지
- IBIS 스탑 수(일반 8단 vs RF-S 18-150mm 실측 7단)를 서로 다른 조건의 주장으로 한 줄 정리해 자기모순처럼 보이지 않게 처리하고, 보유 단렌즈(12mm·50mm)는 IS가 없어 바디 IBIS 단독임을 유지
- camera-settings.md 파일 하나를 Task 2/3 두 커밋으로 쪼개기 위해, 작성 완료 후 파일을 "---" 구분선 기준으로 잘라 앞부분만 먼저 커밋한 뒤 뒷부분을 이어 붙여 두 번째 커밋(원자적 커밋 요건 충족을 위한 실행 순서 조정, 콘텐츠 자체는 계획대로)

## Deviations from Plan

None - plan executed exactly as written. (콘텐츠는 계획된 두 태스크 그대로이며, camera-settings.md의 커밋 분할은 작업 순서상의 조정일 뿐 내용 변경이 아님.)

## Issues Encountered

STACK.md 본문(45행)에는 R7 바디 IBIS 자체를 "최대 7스탑"으로만 기재하고 있어, 계획서 constraints가 요구한 "일반 최대 8단(마케팅)" 수치와 직접 대응하는 문구가 STACK.md에는 없었다. 다만 `.planning/research/PITFALLS.md`(189행)가 "up to 8 stops of compensation when paired with a compatible IS lens"를 Canon 공식 마케팅 수치로 별도 확인하고 있어, 이를 근거로 계획서가 지정한 대로 "일반 8단(마케팅) vs RF-S 18-150mm 실측 7단(특정 조합)"을 서로 다른 조건의 주장으로 정리했다. 두 리서치 문서가 서로 다른 조건을 가리키는 것으로 해석 가능해 계획서의 명시적 지침을 그대로 따랐다.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness
- 여행 파트 1부의 골격(개요 + 카메라/렌즈)이 갖춰져, 이어지는 [구도와 빛 · 타이밍](../../../src/11-travel/composition-and-light.md)·[풍경과 현장 · 사람](../../../src/11-travel/landscape-and-street.md) 페이지(병렬 실행 중)가 카메라·렌즈 전제를 참조할 수 있음
- `mdbook build src` exit 0 확인, 두 파일 모두 "작성 예정" 스텁 없음, 실제 사진 파일 미추가(`<!-- 이미지: -->` 주석만)
- 병렬로 실행 중인 sibling executor가 `composition-and-light.md`, `landscape-and-street.md`를 수정 중이므로 두 파일은 이 플랜에서 건드리지 않음 — 병합 시 SUMMARY 재작성 불필요, 각자 파일 범위만 커밋됨

---
*Phase: 12-여행-사진-기초*
*Completed: 2026-07-14*
