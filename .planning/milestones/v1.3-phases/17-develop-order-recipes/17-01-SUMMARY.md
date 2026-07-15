---
phase: 17-develop-order-recipes
plan: 01
subsystem: docs
tags: [lightroom-classic, develop-module, editing-workflow, korean-mdbook, panel-order]

# Dependency graph
requires:
  - phase: 16-개념·카탈로그·도구 선택
    provides: 비파괴 편집·카탈로그 개요(lightroom-workflow.md), 도구 선택(software-comparison.md)
provides:
  - 현상 모듈 표준 편집 순서 17단계 본문(develop-order.md) — 각 단계 = 섹션 + 한 줄 rationale
  - "널리 통용되는 관례" 정직 프레이밍(Adobe 법칙 아님)
  - Alt/Option 드래그 클리핑 미리보기 교육
  - 렌즈 프로파일 미확인 대응(LR 직접 검색 + 수동 교정, 프로파일명 조작 없음)
affects: [17-02 상황별 레시피(travel-recipes.md), Phase 18 마스킹·디테일(masking-and-detail.md)]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "단계별 소제목 + '왜 여기 오는가' 한 줄 rationale 구조"
    - "미확인 사실(렌즈 프로파일)은 in-app 검색 + 수동 대체로 정직 처리, 이름 조작 금지"

key-files:
  created: []
  modified:
    - src/13-editing/develop-order.md

key-decisions:
  - "17단계 순서를 Adobe 법칙이 아닌 '관례'로 명시 프레이밍(FEATURES.md 근거)"
  - "1~10+17 = 코어 / 11~16 = 필요할 때만 교육 팁으로 분리"
  - "마스킹(15단계)은 한 섹션 + Phase 18 링크로만 처리, 상세 이월"

patterns-established:
  - "단계별 rationale: 각 단계가 '다음 단계의 판단 기준을 바꾼다'는 원리로 순서 정당화"
  - "미확인 항목 정직 처리: 프로파일명 조작 금지, LR 실검색 + 수동(Manual) 대체 경로 제시"

# Metrics
duration: 12min
completed: 2026-07-15
---

# Phase 17 Plan 01: 현상 모듈 17단계 편집 순서 Summary

**현상 모듈 표준 편집 순서 17단계를 각 단계 = 소제목 + 한 줄 근거로 완성 — "널리 통용되는 관례" 정직 표기, Alt/Option 클리핑 미리보기, 렌즈 프로파일 미확인(LR 검색+수동) 대응, 마스킹은 Phase 18로 이월**

## Performance

- **Duration:** ~12 min
- **Started:** 2026-07-15
- **Completed:** 2026-07-15
- **Tasks:** 2
- **Files modified:** 1

## Accomplishments
- `src/13-editing/develop-order.md` 스텁을 147줄 본문으로 교체 — 프로파일→렌즈 보정→변환/크롭→WB→노출/톤→텍스처/명료도/디헤이즈→생동감/HSL/색보정→디테일→마스킹→내보내기 17단계를 위→아래 흐름의 단계별 섹션으로
- 각 단계마다 "왜 이 순서에 오는가" 한 줄 rationale 포함(전역→국소 원리로 정당화)
- 인트로에 "이건 법칙이 아니라 관례" 정직 프레이밍 명시(본문 '관례' 3회)
- 8단계 톤에서 Alt/Option 드래그 클리핑 미리보기로 화이트/블랙 포인트 잡는 법 교육
- 3단계 렌즈 보정에서 삼양12mm/RF50mm 프로파일 미확인을 명시하고 ① LR 직접 검색 ② 수동(Manual) 탭 교정 ③ Adobe 지원 렌즈 목록 URL ④ 순정 내장 보정 안내 — 프로파일명 조작 없음
- 15단계 마스킹은 한 섹션 + Phase 18(masking-and-detail.md) 링크로만 처리(상세 이월)
- "보정 순서 한눈에 보기" 표 + "1~10+17 코어 / 11~16 선택" 교육 팁

## Task Commits

1. **Task 1: 스텁을 17단계 편집 순서 본문으로 교체** - `4793bd9` (docs)
2. **Task 2: 정직성·Adobe 명칭 감사 + grep 검증 + 개별 커밋** - `4793bd9` (docs)

_참고: 계획대로 두 Task가 한 파일에 대한 작성+감사이므로 단일 커밋으로 통합(감사 결과 수정 불필요 → 재커밋 없음)._

## Files Created/Modified
- `src/13-editing/develop-order.md` - 현상 모듈 17단계 편집 순서 본문(스텁 교체). 관례 정직 프레이밍, 단계별 rationale, Alt-drag 클리핑, 렌즈 프로파일 미확인 대응, 마스킹 Phase 18 이월, 다음 장 링크.

## Decisions Made
- 17단계 순서를 Adobe 강제 법칙이 아니라 "널리 통용되는 관례"로 명시 프레이밍 — FEATURES.md의 "widely-taught convention, not Adobe-mandated rule" 근거를 그대로 정직 반영.
- 렌즈 프로파일은 프로파일명을 지어내지 않고 "있으면 자동, 없으면 수동"으로만 안내 + Adobe supported-lenses URL 제시(PITFALLS A5 원칙 준수).
- 마스킹·Denoise 상세는 Phase 18 소유로 이월, 이 장은 순서상 위치와 한 줄 rationale만.

## Deviations from Plan

None - plan executed exactly as written.

계획은 Task 1(작성)과 Task 2(감사+검증+커밋)로 나뉘나, Task 2의 정직성 감사 7항목이 모두 통과해 수정이 불필요했으므로 별도 재커밋 없이 단일 커밋으로 마무리했다. 이는 계획의 커밋 지침(개별 파일 스테이징, docs/ 미포함)을 그대로 따른 것이며 이탈이 아니다.

## Issues Encountered
- BSD grep `-Eo` + 한글 멀티바이트 조합에서 교대(alternation) 매칭이 일부 키워드를 누락 표시(유니크 9개로 집계). 개별 `grep -c`로 20개 키워드 전부 존재(각 ≥3회) 확인 — 콘텐츠는 완전. 검증 방식의 한계였을 뿐 본문 결함 아님.

## Verification Results
- `grep -c '관례'` → 3 (≥1 통과)
- 17단계 키워드 20종 전부 존재(개별 grep 확인, 각 ≥3회)
- `Alt|Option` → 2회(클리핑 미리보기)
- `supported-lenses` → 1(렌즈 프로파일 확인 URL)
- `수동|Manual` → 3(수동 교정 대체 경로)
- `masking-and-detail.md` → 3(Phase 18 링크)
- `travel-recipes.md` → 2(다음 장 링크)
- `lightroom-workflow.md` → 3(개요 되짚기, 중복 없음)
- 스텁 문구 `📝 이 장은 준비 중` → 0(제거됨)
- 가격/원화 숫자 → 0
- 커밋 후 working tree 깨끗, 커밋에 파일 포함, docs/ 미포함(0)
- 빌드 미실행(grep 검증만) — 빌드 게이트는 17-02 소유

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- 17-02(상황별 레시피)가 이 17단계 척추를 실제 촬영 상황에 적용할 준비 완료. develop-order.md가 travel-recipes.md로 링크 이미 연결됨.
- 마스킹·Denoise 상세는 Phase 18(masking-and-detail.md)로 이월됨 — 링크 연결 확인.
- 렌즈 프로파일 미확인 사항은 트립(8/13) 후 실제 LR에서 재검증 필요(STATE.md Blockers 유지). 프로파일명 조작 없이 정직 처리됨.

---
*Phase: 17-develop-order-recipes*
*Completed: 2026-07-15*
