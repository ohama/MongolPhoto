---
phase: 16-concepts-catalog-tools
plan: 01
subsystem: content
tags: [lightroom-classic, raw, cr3, 비파괴편집, 카탈로그, lrcat, 여행사진보정, mdbook]

# Dependency graph
requires:
  - phase: 15-restructure-stubs
    provides: "src/13-editing/ 스텁 9개 + SUMMARY 재편(2부 삽입·부 시프트·7부 개칭)"
  - phase: 02-fundamentals
    provides: "RAW와 화이트밸런스 기초(재설명 대신 링크 대상)"
  - phase: 05-postprocessing
    provides: "은하수 후보정(raw-develop.md) — 이 파트와 구분 대상"
provides:
  - "여행 사진 보정 파트 개요(왜 보정하나·RAW 관용도·비파괴 도입·은하수 파트와 구분)"
  - "비파괴 편집·카탈로그(.lrcat)·가져오기·현상 모듈 개요"
  - "카탈로그 2대 함정 경고 박스(P1 missing photo, P2 백업 혼동)"
  - "Adobe UI 스크린샷 플레이스홀더 관례(저자 직접 캡처 예정)"
affects: [16-02-software-comparison, 17-develop-order, 17-travel-recipes, 18-masking, 19-panorama-hdr]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "재설명 금지·교차 링크: RAW/WB 기초는 02-fundamentals로, 은하수 후보정은 05-postprocessing로 링크"
    - "Adobe UI 저작권 회피: 이미지 재호스팅 대신 HTML 주석 + '저자 직접 캡처 예정' 캡션 플레이스홀더"
    - "경고 박스: blockquote(>) + ⚠️ 헤더 + 예방/복구 구조"

key-files:
  created: []
  modified:
    - src/13-editing/index.md
    - src/13-editing/lightroom-workflow.md

key-decisions:
  - "가격·구독 세부는 16-01에서 다루지 않고 software-comparison.md(16-02)로 위임 — 중복·불일치 방지"
  - "현상 모듈 17단계 세부는 develop-order.md(Phase 17)로 예고만, 여기서는 전역→국소 흐름 표만 소개"

patterns-established:
  - "은하수 후보정(7부)과 여행 편집(2부) 명시적 구분 프레이밍: '같은 Lightroom, 다른 대상·목적'"
  - "정직 경고 한 줄: RAW 관용도의 한계(날아간 하이라이트·나간 초점은 못 되살림) 명시"

# Metrics
duration: 4min
completed: 2026-07-14
---

# Phase 16 Plan 01: 여행 사진 보정 개념·카탈로그 개요 Summary

**Lightroom Classic 기준 여행 사진 보정 파트의 개념 기반 — RAW 관용도(여행 주간·황혼 맥락)·비파괴 편집·.lrcat 카탈로그 구조와 카탈로그 2대 함정(missing photo, 백업 혼동) 경고 박스를 두 스텁을 실제 본문으로 교체하며 구축**

## Performance

- **Duration:** 4 min
- **Started:** 2026-07-14T07:22:51Z
- **Completed:** 2026-07-14T07:26:16Z
- **Tasks:** 3
- **Files modified:** 2

## Accomplishments
- index.md: "왜 보정하나"(RAW=미완성 원재료, 관용도를 여행 주간·황혼의 하이라이트/섀도/WB 복원 맥락으로 재프레이밍) + 비파괴 편집 도입 + 은하수 후보정(7부)과 명시적 구분 + 도구 페이지 안내. RAW 기초·은하수 파트·software-comparison 교차 링크 3개.
- lightroom-workflow.md: 비파괴 편집(원본 CR3 불변, 편집 지시서만 저장)·.lrcat 카탈로그(위치 참조 데이터베이스)·가져오기·현상 모듈(전역→국소 흐름 표) 개요.
- 카탈로그 2대 함정 경고 박스 2개: P1(밖에서 파일 이동 시 느낌표·missing photo, 예방은 LR 내부 이동, 복구는 Find Missing) + P2(카탈로그 백업 ≠ 원본 백업, 원본/카탈로그 따로 백업, 3-2-1 원칙).
- Adobe UI 스크린샷은 HTML 주석 플레이스홀더 + "저자 직접 캡처 예정" 캡션으로만 자리 확보(재호스팅 없음).
- 가격·구독 서술 0 — 16-02로 위임. mdbook build 그린, docs/ 미커밋.

## Task Commits

1. **Task 1: index.md 파트 개요** - `05e8f4c` (feat)
2. **Task 2: lightroom-workflow.md 비파괴·카탈로그 워크플로** - `f8b8cde` (feat)
3. **Task 3: 빌드 게이트 + 커밋** - Task 1·2 커밋에 포함(파일이 이미 개별 커밋됨), 빌드 검증만 수행

**Plan metadata:** (이 커밋)

## Files Created/Modified
- `src/13-editing/index.md` - 여행 사진 보정 파트 개요(왜 보정하나·비파괴 도입·은하수 구분·도구 안내)
- `src/13-editing/lightroom-workflow.md` - 비파괴·카탈로그·가져오기·현상 모듈 개요 + P1/P2 경고 박스 + 스크린샷 플레이스홀더

## Decisions Made
- 가격·구독 세부는 16-01에서 배제, software-comparison.md(16-02)로 위임 — 중복·불일치 방지(플랜 writing_rules 준수).
- 현상 모듈 17단계 세부는 develop-order.md(Phase 17)로 예고만 하고, 여기서는 전역→국소 4행 흐름 표로만 소개해 중복 회피.

## Deviations from Plan

None - plan executed exactly as written.

Task 3의 커밋 단계는 파일이 Task 1·2에서 이미 개별 커밋되어(GSD 태스크 단위 원자 커밋 프로토콜) 재커밋할 변경이 없었음. 빌드 게이트·docs/ 정리·스텁 잔존 확인은 계획대로 수행. 이는 이탈이 아니라 태스크별 커밋 관례를 따른 결과.

## Issues Encountered
None.

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- EDIT-01(왜 보정하나·여행 편집·은하수 구분)·EDIT-03(카탈로그↔원본·P1/P2 회피) 충족.
- 16-02(software-comparison.md) 준비 완료 — index.md·lightroom-workflow.md가 이미 해당 페이지로 링크를 걸어 둠. 도구/가격 서술은 16-02 소관.
- 잔여 우려(승계): Adobe 스크린샷은 트립 후 저자 직접 캡처로 교체 필요, 원화 요금은 16-02에서 숫자 박제 금지.

---
*Phase: 16-concepts-catalog-tools*
*Completed: 2026-07-14*
