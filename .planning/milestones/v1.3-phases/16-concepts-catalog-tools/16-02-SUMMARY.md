---
phase: 16-concepts-catalog-tools
plan: 02
subsystem: content
tags: [lightroom-classic, lightroom-cc, capture-one, dxo-photolab, on1, darktable, rawtherapee, snapseed, cr3, 구독, 영구라이선스, mdbook]

# Dependency graph
requires:
  - phase: 16-concepts-catalog-tools
    provides: "16-01 개요·카탈로그 페이지가 software-comparison.md로 링크를 걸어 둠"
  - phase: 15-restructure-stubs
    provides: "src/13-editing/software-comparison.md 스텁"
  - phase: research
    provides: "STACK.md — 도구/가격/CR3 지원/미확인 목록 + 공식 URL 단일 진실 원천"
provides:
  - "구독 전용 경고 박스(LR Classic 영구판 없음·Photography 플랜 포함·단독 CC 미포함)"
  - "LR Classic vs Lightroom(CC) 구분 표"
  - "8개 앱 비교표(앱·라이선스·가격·플랫폼·R7 CR3·선택 이유)"
  - "무료(darktable 최신 4.x·RawTherapee)·영구판(DxO·ON1·Capture One) 대안 경로 서술"
affects: [17-develop-order, 17-travel-recipes, 18-masking, 19-panorama-hdr]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "정직성: 원화(KRW) 숫자 박제 금지 → Adobe KR compare-plans 공식 URL로 안내"
    - "검증 USD만 인용($14.99/$19.99 Photography, ON1 $99.99, DxO PL8 $229/$139), 미확인은 '재확인 필요' 하드코딩 금지"
    - "중복 회피·교차 링크: 앱 상세는 07-appendix/app-software·08-references/software-references로, darktable 은하수 연속성은 05-postprocessing/raw-develop로"
    - "URL은 STACK.md 검증본만 재사용(창작 URL 금지)"

key-files:
  created: []
  modified:
    - src/13-editing/software-comparison.md

key-decisions:
  - "darktable을 무료 최우선으로 프레이밍하되 '반드시 최신 4.x 이상 설치' 문구 필수화 — 구버전 R7 CR3 문제 이력 반영"
  - "Capture One/DxO PL9/단독 LR CC 정확가는 미확인 → '재확인 필요' 서술, STACK.md에 없는 숫자 창작 금지"
  - "Apple 사진·VSCO·Lightroom Mobile은 8개 필수 앱에서 제외(비교표는 8행 고정), 모바일은 Snapseed+LR Mobile 한 줄로만 언급"

patterns-established:
  - "결제 실수 경고: '단독 Lightroom 플랜 = Classic 못 씀' 명시적 경고 박스"
  - "가격 캡션: '결제 직전 각 공식 페이지에서 재확인' 취지 캡션을 표 하단에 부착"

# Metrics
duration: 3min
completed: 2026-07-14
---

# Phase 16 Plan 02: 편집 앱 비교표·도구 선택 Summary

**스텁 software-comparison.md를 실제 본문으로 교체 — 구독 전용 경고 박스(LR Classic 영구판 없음·Photography 플랜 포함·단독 CC 미포함)와 8개 앱 비교표(라이선스·가격·플랫폼·R7 CR3·선택 이유), 무료(darktable 최신 4.x·RawTherapee)·영구판(DxO·ON1·Capture One) 대안 경로를 원화 미확인 처리·검증 USD만 인용으로 정직하게 구축**

## Performance

- **Duration:** ~3 min
- **Completed:** 2026-07-14
- **Tasks:** 2
- **Files modified:** 1

## Accomplishments
- 구독 전용 경고 박스(blockquote): LR Classic 영구 라이선스 없음·Photography 플랜에만 포함·단독 "Lightroom"(CC) 플랜 사면 Classic 못 씀을 명확히 경고(대표 결제 실수 방지, TOOL-01).
- LR Classic vs Lightroom(CC) 구분 표(형태·파일 저장·포함 플랜·대상 사용자) + "카탈로그 데스크톱 워크플로 원하면 Photography 플랜" 결론.
- 8개 앱 비교표: Lightroom Classic·Lightroom CC·Capture One·DxO PhotoLab·ON1 Photo RAW·darktable·RawTherapee·Snapseed. 열: 앱·라이선스/구독·가격·플랫폼·R7 CR3 지원·선택 이유. 표 하단 재확인 캡션.
- 무료 대안 경로(TOOL-02): darktable(최우선, "반드시 최신 4.x 이상 설치" 필수 문구, raw-develop.md 은하수 연속성 링크)·RawTherapee(5.9+ 정밀 디테일). 두 앱 R7 CR3 처리 확인 안심 문구.
- 영구 라이선스 경로(TOOL-02): DxO PhotoLab(영구 전용)·ON1($99.99)·Capture One(영구 옵션), 정확가는 재확인 표기.
- 모바일 한 줄(Snapseed 무료 / Lightroom Mobile 동기화) + 교차 링크(app-software·software-references).

## Task Commits

1. **Task 1+2: 구독 경고 + 8개 앱 비교표 + 대안 경로 + 교차 링크** - `cfaf184` (feat)

두 태스크가 동일 파일(software-comparison.md)을 순차 편집하고 플랜이 커밋을 Task 2 말미에 지정하여, 완성본을 한 번의 원자 커밋으로 반영.

**Plan metadata:** (이 커밋)

## Files Created/Modified
- `src/13-editing/software-comparison.md` - 스텁 교체: 구독 전용 경고 박스 + LR Classic/CC 구분 표 + 8개 앱 비교표 + 무료/영구/모바일 대안 경로 + 교차 링크 3개

## Decisions Made
- darktable "반드시 최신 4.x 이상 설치" 문구를 표·본문 양쪽에 명기(구버전 R7 CR3 문제 이력, STACK.md 3절 근거).
- 원화 요금은 숫자 미기재 → Adobe KR compare-plans 공식 URL 3회 노출로 대체(정직성 원칙).
- 미확인가(단독 LR CC·DxO PL9·Capture One 인상 후)는 "재확인 필요"로만 서술, 하드 숫자 창작 금지. 검증 USD($14.99/$19.99/ON1 $99.99/DxO PL8 $229·$139)만 인용.

## Deviations from Plan

None - plan executed exactly as written.

Task 1·2가 같은 파일을 편집하고 플랜의 커밋 지시가 Task 2에 있어 완성본을 단일 커밋으로 반영. 이는 이탈이 아니라 단일 파일 순차 편집에 대한 커밋 지시를 그대로 따른 결과. 플랜 지시대로 mdbook build는 실행하지 않고(16-01이 빌드 게이트 소관, docs/ 경합 회피) grep 검증만 수행.

## Issues Encountered
None. 모든 verify grep 통과: "준비 중" 0회, 8개 앱 전부 존재, "최신 4" 2회, 교차 링크 3개, R7 CR3 열 존재, 원화 숫자 미검출, docs/ 미커밋.

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- TOOL-01 충족: 독자가 LR Classic 구독 전용·Photography 플랜 포함·단독 LR CC 미포함을 알고 비교표로 도구 선택 가능.
- TOOL-02 충족: 무료(darktable·RawTherapee — R7 CR3 확인)·영구판(DxO·ON1·Capture One) 대안 경로 확보.
- Phase 16 완료(2/2 플랜). 다음: Phase 17(현상 순서·여행 레시피) 계획.
- 잔여 우려(승계): 원화·미확인 USD는 트립 후/집필 확정 시 공식 재확인, Adobe 스크린샷은 저자 직접 캡처로 교체 필요.

---
*Phase: 16-concepts-catalog-tools*
*Completed: 2026-07-14*
