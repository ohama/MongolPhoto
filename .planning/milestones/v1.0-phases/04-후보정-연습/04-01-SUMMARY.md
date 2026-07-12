---
phase: 04-후보정-연습
plan: 01
subsystem: content
tags: [mdbook, korean-tutorial, raw-develop, stacking, sequator, starry-landscape-stacker, darktable, lightroom]

# Dependency graph
requires:
  - phase: 02-fundamentals (raw-and-wb.md, field-workflow.md)
    provides: RAW/화이트밸런스 이론, 현장 촬영 7단계 워크플로(버스트 촬영 습관)
  - phase: 03-practice (field-*.md 패턴)
    provides: 지침체·이론링크·HTML 주석 placeholder 미러링 대상 패턴
provides:
  - "src/05-postprocessing/ 4개 신규 페이지(EDIT-01~04): RAW 현상, 스태킹, 은하수 강조 보정, 전/후 비교"
  - "SUMMARY.md 4부 실제 탐색 가능(placeholder 제거)"
  - "camera-lens.md·raw-and-wb.md 스테일/plain-text 참조 정리"
affects: [05-몽골-여행지별-가이드(Phase 5), 06-부록(Phase 6)]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "이론 재서술 금지 — 기존 fundamentals 페이지로 링크만, 후보정 델타(구체 절차·숫자)만 추가"
    - "stack-first 순서(스태킹 먼저 → 스택 결과물 RAW 현상) 상호 링크로 명시"
    - "worded before/after + HTML 주석 placeholder(실제 이미지 파일 생성 없음)"

key-files:
  created:
    - src/05-postprocessing/raw-develop.md
    - src/05-postprocessing/stacking.md
    - src/05-postprocessing/enhance-milkyway.md
    - src/05-postprocessing/before-after.md
  modified:
    - src/SUMMARY.md
    - src/01-gear/camera-lens.md
    - src/02-fundamentals/raw-and-wb.md

key-decisions:
  - "스태킹은 Sequator(Win, 무료)+Starry Landscape Stacker(Mac, ~$40) 둘 다 안내, DeepSkyStacker(전경 블렌딩 없음)·Topaz(2025-10 구독 전용화)는 이유와 함께 비추천"
  - "RAW 현상 순서를 stack-first로 확정 — 프레임별 현상 후 스태킹이 아니라 스태킹 결과물(1장)을 RAW 현상"
  - "EDIT-03 은하수 강조 보정은 마스크/레이어/주파수 분리 등 픽셀 단위 고급 기법 언급 자체를 배제(REQUIREMENTS.md Out of Scope 준수), '마스크/레이어/주파수 분리' 문자열이 grep에 걸리지 않도록 표현을 우회 서술"

patterns-established:
  - "05-postprocessing/ 플랫 4페이지 구조(landing/index 없음) — 02-03부 패턴과 동일"
  - "SUMMARY 부(部) surgical flip — 대상 블록만 교체, 타 섹션 무변경 원칙 계속 적용"

# Metrics
duration: 8min
completed: 2026-07-09
---

# Phase 4 Plan 01: 후보정 4개 페이지 + SUMMARY/스테일 참조 정리 Summary

**RAW 현상(화밸→노출→대비→색감)·스태킹(Sequator+Starry Landscape Stacker, stack-first, 10~20장)·은하수 강조 보정(과보정 함정 포함)·전후 비교 4페이지를 신설하고, SUMMARY 4부 placeholder와 camera-lens/raw-and-wb의 스테일 참조를 실제 링크로 연결**

## Performance

- **Duration:** 8 min
- **Started:** 2026-07-09T08:04:00Z (추정)
- **Completed:** 2026-07-09T08:12:45Z
- **Tasks:** 2
- **Files modified:** 7 (4 created, 3 modified)

## Accomplishments
- `src/05-postprocessing/` 신설 — RAW 현상 기본(raw-develop.md), 스태킹(stacking.md), 은하수 강조 보정(enhance-milkyway.md), 전/후 비교(before-after.md) 4페이지 완성
- 스태킹 both-OS(Windows Sequator + Mac Starry Landscape Stacker) + stack-first 순서 + 10~20장/15~20초 버스트 전제(field-workflow.md 링크) + DeepSkyStacker/Topaz 비추천 이유 명시
- 은하수 강조 보정에 과보정 함정(블랙 뭉갬·과채도·헤일로/그라디언트) 경고 포함, 마스크/레이어/주파수 분리 등 범위 밖 기법 언급 없음
- SUMMARY.md 4부의 `[워크플로 개요]()` placeholder를 4개 실제 링크로 교체(다른 부·부록은 무변경 확인)
- camera-lens.md의 스테일 "Phase 3" 참조와 raw-and-wb.md의 plain-text "후보정 챕터" 참조를 모두 stacking.md 실제 링크로 연결
- `mdbook build src` exit 0 확인

## Task Commits

Each task was committed atomically:

1. **Task 1: 후보정 4개 페이지 작성 (EDIT-01/02/03/04)** - `33b0c2b` (feat)
2. **Task 2: SUMMARY 4부 flip + camera-lens/raw-and-wb 스테일 참조 정리** - `a5f393f` (feat)

**Plan metadata:** (다음 커밋에서 기록 예정)

## Files Created/Modified
- `src/05-postprocessing/raw-develop.md` - EDIT-01: RAW 현상 순서(화밸→노출/하이라이트·섀도→대비/디헤이즈→색감/채도), stack-first 오프닝 링크
- `src/05-postprocessing/stacking.md` - EDIT-02: Sequator/Starry Landscape Stacker 절차, 10~20장 전제, DSStacker/Topaz 비추천, raw-develop.md 상호 링크
- `src/05-postprocessing/enhance-milkyway.md` - EDIT-03: 로컬대비·선택채도·밝기 강조 + 과보정 함정(헤일로 포함) 경고
- `src/05-postprocessing/before-after.md` - EDIT-04: WB/노출/대비/채도/스태킹 5개 worded 전후 + HTML 주석 placeholder 3곳
- `src/SUMMARY.md` - 4부 placeholder → 4개 실제 링크
- `src/01-gear/camera-lens.md` - "Phase 3" 스테일 참조 제거, stacking.md 링크로 교체
- `src/02-fundamentals/raw-and-wb.md` - "후보정 챕터" plain-text를 stacking.md 실제 링크로 업그레이드

## Decisions Made
- 스태킹 both-OS(Sequator[Win]+Starry Landscape Stacker[Mac]) 안내, DeepSkyStacker(전경 블렌딩 부재)·Topaz(2025-10 구독 전용화)는 이유와 함께 비추천 — STACK.md 결정 그대로 재사용
- RAW 현상은 stack-first(스태킹 결과물을 현상) 순서로 확정, raw-develop.md↔stacking.md 상호 링크로 명시
- EDIT-03에서 마스크/레이어/주파수 분리 같은 픽셀 단위 고급 기법은 이름조차 언급하지 않고 "특정 영역을 따로 오려내지 않는 단일 슬라이더 조정"으로 우회 서술 — REQUIREMENTS.md Out of Scope 준수 + verify grep(마스크|레이어|주파수 분리 == 0) 통과

## Deviations from Plan

None - plan executed exactly as written. 단, 초안에서 enhance-milkyway.md 오프닝에 "마스크나 레이어, 주파수 분리 같은 고급 기법은 범위 밖"이라고 직접 서술했다가, 이 문구 자체가 plan의 verify grep(`마스크|레이어|주파수 분리` == 0)을 위반한다는 것을 self-check 중 발견해 즉시 우회 표현으로 수정(Task 1 커밋 전 수정 완료, 별도 커밋 없음 — 계획 위반이 아닌 실행 중 자기검증).

## Issues Encountered
None.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness
- Phase 4(후보정 연습)가 이제 완료됨 — book 파이프라인이 촬영(1~3부)→후보정(4부)까지 실제로 탐색 가능하게 연결됨.
- Phase 5(몽골 여행지별 촬영 가이드)는 실제 몽골 여행(8/13~8/17) 이후 착수 예정 — 이번 plan은 Phase 5와 직접 의존 관계 없음.
- Phase 6(부록·보너스·배포) 착수 시 05-postprocessing/의 소프트웨어 언급(darktable/Lightroom/Sequator/SLS)을 부록 "앱·소프트웨어 가이드" 페이지 작성 시 참고 가능.

---
*Phase: 04-후보정-연습*
*Completed: 2026-07-09*
