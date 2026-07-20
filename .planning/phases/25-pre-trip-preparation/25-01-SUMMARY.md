---
phase: 25-pre-trip-preparation
plan: 01
subsystem: docs
tags: [mdbook, korean, packing, planning, offline-apps]

# Dependency graph
requires:
  - phase: 24 (4부 · 현장 워크플로 파트 신설)
    provides: src/4-workflow/preparation.md 스텁, SUMMARY/introduction/README 배선 완료 상태
provides:
  - "src/4-workflow/preparation.md 실 콘텐츠 — 통합 패킹(세 트랙 카테고리별 통합) + 촬영 계획(신월·낮/밤 배분) + 오프라인 앱·지도(고비 오프그리드 대비)"
  - "부록 체크리스트 허브 링크(항목 복제 없음) + finding-the-milkyway.md·4-sites/index.md·accessories.md 승계 패턴 실증"
affects: [26-field-day, 27-data-power, 28-after-return]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "허브 링크 원칙 실증: 카테고리 표는 개요만 담고 상세 체크리스트는 부록(checklists.md·1-gear/checklist.md)으로 링크, 항목 복제 없음"
    - "재확인 표기 패턴: 저자 코스를 배분 방법 예시 표로 쓰되 날짜·신월은 매 행마다 'PhotoPills로 재확인' 반복 표기"

key-files:
  created: []
  modified:
    - src/4-workflow/preparation.md

key-decisions:
  - "통합 패킹은 표(카테고리 × 트랙 × 메모)로 구성하고 ★공유 표시 대신 '메모' 칸에 (은하수 장노출 + 여행 장노출 겸용) 형태로 공유 관계를 명시 — 표가 이미 카테고리별이라 별도 기호보다 문장이 명확"
  - "저자 몽골 코스(8/13~8/17) 표는 낮/밤 배분 '방법'을 보여주는 예시로만 쓰고, 매 밤 행에 '신월 여부는 PhotoPills로 재확인'을 반복 삽입해 단정처럼 읽히지 않게 함"

patterns-established:
  - "PREP류 페이지(준비/계획) 콘텐츠 구조: 리드 문단 → 통합/개요 섹션(허브 링크) → 계획/방법 섹션(기존 파트 승계 + 예시 표) → 실행 섹션(왜/무엇/방법) → 페이지 끝 🔰 박스 1개. Phase 26~28도 동일 리듬 적용 가능"

# Metrics
duration: ~20min
completed: 2026-07-20
---

# Phase 25 Plan 01: 여행 전 준비 (PREP-01 통합 패킹 · PREP-02 촬영 계획·오프라인 앱) Summary

**`src/4-workflow/preparation.md` 스텁을 실 콘텐츠로 교체 — 세 트랙(R7·드론·은하수) 공유 품목 중심 통합 패킹 표, 신월·낮/밤 배분 촬영 계획(저자 코스는 재확인 표기 예시), 고비 오프그리드 대비 오프라인 앱·지도 준비, mdbook build 그린 + 내부 링크 902개 스캔 REAL DEAD 0.**

## Performance

- **Duration:** ~20 min
- **Completed:** 2026-07-20T05:10:29Z
- **Tasks:** 3/3
- **Files modified:** 1

## Accomplishments

- `## 통합 패킹` 섹션: 카테고리(카메라·렌즈/삼각대·릴리즈/배터리·카드·충전/방한·이슬/드론 전용/잡화) × 트랙 표로 세 트랙을 하나의 짐 관점으로 통합, 공유 품목(삼각대·카드·배터리) 강조, 상세는 `checklists.md`·`3-astro/1-gear/checklist.md` 허브로 링크(항목 복제 없음)
- `## 촬영 계획` 섹션: 신월 전후 다크윈도우로 밤 일정 잡기·명소별 낮/밤 배분·일출/일몰·달 위상 확인 "방법"을 `finding-the-milkyway.md`·`3-astro/4-sites/index.md` 승계로 가르치고, 저자 몽골 코스(8/13~8/17)를 낮/밤 배분 예시 표로 제시(매 밤 "PhotoPills로 재확인" 표기)
- `## 오프라인 앱·지도` 섹션: 고비 오프그리드(셀룰러 데이터 없음)를 이유로 출발 전 다운로드 필요성 설명, PhotoPills·Stellarium은 `accessories.md`·`app-software.md` 승계, 오프라인 지도·Stellarium 시뮬레이션·PhotoPills 플랜 저장 개요, 앱별 오프라인 지원 세부는 "각 앱에서 재확인" 정직 표기
- 페이지 맨 끝 `> 🔰 **초보자는 이렇게.**` 박스 정확히 1개로 마감(통합 패킹·촬영 계획·앱 준비를 압축한 실행 조언)
- `mdbook build src` 종료코드 0, 파이썬 전수 링크 스캔(902개, `session-N` 리터럴·`파일명` false-positive 필터 적용) **REAL DEAD 0**
- docs/ 미커밋 확인(restore+clean 전후 실행), `src/4-workflow/preparation.md` 단일 파일만 담긴 `docs(25)` 커밋 `0baf371` 생성

## Task Commits

Plan 지시대로 세 태스크(콘텐츠 작성 두 태스크 + 게이트/커밋 태스크)를 게이트 통과 후 하나의 커밋으로 묶었습니다:

1. **Task 1: PREP-01 통합 패킹 섹션 작성** - 파일 수정만, 커밋은 Task 3에서 일괄
2. **Task 2: PREP-02 촬영 계획 + 오프라인 앱·지도 섹션 작성 + 🔰 박스** - 파일 수정만, 커밋은 Task 3에서 일괄
3. **Task 3: 빌드·링크 게이트 + 단일 커밋** - `0baf371` (docs)

**Plan metadata:** (본 SUMMARY 커밋 시 함께 생성)

## Files Created/Modified

- `src/4-workflow/preparation.md` - 스텁(7줄) → 실 콘텐츠(72줄): 리드 문단 + 통합 패킹 표/허브링크 + 촬영 계획(신월/낮밤배분/예시표) + 오프라인 앱·지도(왜/무엇/방법) + 🔰 박스 1개

## Decisions Made

- 통합 패킹을 표(카테고리 × 트랙 × 메모) 형식으로 구성 — 공유 품목은 메모 칸에 "★공유" 표기로 시각적으로 강조하되 항목 자체는 부록 링크로 위임
- 저자 몽골 코스 표는 매 밤 행마다 "신월 여부는 PhotoPills로 재확인"을 반복 삽입해, 표 전체를 한 번만 훑어도 단정으로 오독되지 않게 함(constraint #3 준수)
- 무게·카드/파워뱅크 용량은 "촬영 일수 × 하루 소모량 기준으로 산정, 실제 용량은 각자 장비 사양에서 확인" 식으로 산정 방법만 안내하고 구체 수치는 단정하지 않음

## Deviations from Plan

None - plan executed exactly as written. Task 1/2 verify 단계의 grep 카운트(통합 패킹 1, checklists.md 2, 스텁 블록 0, 촬영 계획 1, 오프라인 앱·지도 1, finding-the-milkyway 2, 4-sites/index 1, accessories 1, 재확인 표기 6, 🔰 1)가 모두 plan 기대치를 충족했습니다.

## Issues Encountered

- 링크 스캔 스크립트 1차 실행에서 `3-astro/3-practice/template.md`의 `session-N/xxx.jpg` 플레이스홀더가 false-positive로 잡힘(정규식이 `session-\d`만 매칭해 리터럴 "session-N"을 놓침) → 필터를 리터럴 문자열 `'session-N' in target`으로 수정해 REAL DEAD 0 확인. preparation.md와는 무관한 기존 파일의 예외 처리 조정으로, plan에 명시된 필터 의도(session-N 플레이스홀더 제외)를 정확히 구현한 것.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- Phase 25 완료 — `src/4-workflow/preparation.md` 실 콘텐츠 채움 완료, mdbook build 그린 + 링크 dead 0 상태 유지
- Phase 26(하루 현장 운용) → `src/4-workflow/field-day.md`, Phase 27(데이터·전원 운용) → `src/4-workflow/data-power.md` — 서로 다른 파일이므로 25/26/27은 병행 가능했고, 25는 독립적으로 완료됨
- Phase 28(귀국 후 정리) → `src/4-workflow/after-return.md` + wave 2 최종 빌드·링크 게이트 직렬 재실행 시 이번 커밋(902개 링크, REAL DEAD 0)이 베이스라인이 됨
- 승계 패턴(허브 링크 원칙, 재확인 표기 반복, 표 기반 통합/배분 구성)은 Phase 26~28도 그대로 적용 가능

---

*Phase: 25-pre-trip-preparation*
*Completed: 2026-07-20*
