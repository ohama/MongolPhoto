---
phase: 24-part-scaffold-stubs
plan: 01
subsystem: docs
tags: [mdbook, information-architecture, korean, stub-content]

# Dependency graph
requires:
  - phase: 23 (v1.4 완성)
    provides: 안정적인 1·2·3부 + 부록 구조, create-missing=false 빌드 규칙, 링크 전수 스캔 검증 방식
provides:
  - "4부 · 현장 워크플로" 파트 신설(src/4-workflow/) — 개요 랜딩 1장(실 산문) + 4개 트랙 스텁
  - src/SUMMARY.md, src/introduction.md, README.md에 4부 배선(3부↔부록 사이)
  - mdbook build 그린 + 내부 링크 dead 0 상태에서 구조 확장 완료
affects: [25-preparation, 26-field-day, 27-data-power, 28-after-return]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "5개 평면 페이지(옵션 a): index(개요 랜딩) + preparation/field-day/data-power/after-return(스텁), 하위 디렉토리 없이 4-workflow/ 바로 아래 배치"
    - "정직한 스텁 컨벤션: H1 + 다룰 내용 1~2문장 + 트랙별 정직성 단서 + `> 📝 **작성 예정**` 인용 블록 + Phase 번호 명시"
    - "가로 연결(4부) vs 세로 깊이(1·2·3부) 승계 원칙 — 촬영·편집법은 재설명 없이 기존 파트로 링크"

key-files:
  created:
    - src/4-workflow/index.md
    - src/4-workflow/preparation.md
    - src/4-workflow/field-day.md
    - src/4-workflow/data-power.md
    - src/4-workflow/after-return.md
  modified:
    - src/SUMMARY.md
    - src/introduction.md
    - README.md

key-decisions:
  - "구조: 옵션 a(5개 평면 페이지, 하위 디렉토리 없음) — 각 트랙이 향후에도 1개 챕터로 충분한 분량(Phase 25~28이 각 1~2 요구사항씩만 채움), 다른 파트처럼 트랙마다 서브디렉토리를 만들 근거 부족"
  - "SUMMARY 삽입 위치: `3-astro/7-references/faq.md` 줄과 `# 부록` 사이(3부 마지막 항목 뒤)"
  - "introduction.md 삽입 위치: 3부 toc-part 그룹 뒤 · 부록 toc-part 그룹 앞, 개요 카드 제목은 다른 파트 컨벤션대로 evocative('여행을 완성하다')"
  - "README 삽입 위치: '3부 · 천체사진 (은하수)' 불릿과 '부록' 불릿 사이"

patterns-established:
  - "Phase 25~28은 각자 담당 스텁 1개 파일만 수정하며(preparation/field-day/data-power/after-return), SUMMARY·introduction.md는 이미 배선 완료 상태이므로 추가 배선 작업 불필요 — 콘텐츠만 채우면 됨"
  - "귀국 후 정리(after-return.md)는 트랙별 편집 허브 — Phase 28은 여기서 1·2·3부 편집 파트로의 라우팅을 유지하며 자체 편집법을 재설명하지 않는다"

# Metrics
duration: ~15min
completed: 2026-07-20
---

# Phase 24 Plan 01: 4부 · 현장 워크플로 파트 신설 Summary

**"4부 · 현장 워크플로" 파트를 3부·부록 사이에 신설 — 개요 랜딩(실 산문 30줄) + 4개 정직한 스텁(준비/하루/데이터전원/귀국후), SUMMARY·introduction·README 배선, mdbook build 그린 + 내부 링크 895개 스캔 REAL DEAD 0.**

## Performance

- **Duration:** ~15 min
- **Completed:** 2026-07-20T04:33:26Z
- **Tasks:** 3/3
- **Files modified:** 8 (5 created, 3 modified)

## Accomplishments

- `src/4-workflow/` 디렉토리 신설, 개요 랜딩(index.md, 30줄)과 4개 트랙 스텁(preparation/field-day/data-power/after-return) 생성
- 개요 랜딩이 "가로 연결 vs 세로 깊이" 구도로 4부 존재 이유를 설명하고, 준비→하루→데이터전원→귀국후 흐름을 안내하며, 1·2·3부로의 촬영·편집법 승계를 명시
- 4개 스텁 각각 정직한 "작성 예정" 노트 + 트랙별 정직성 단서(타임라인=예시 템플릿, 무게·용량·요금=검증/미확인, 특정 장비=추천만) 포함
- src/SUMMARY.md(3부↔부록 사이 5링크), src/introduction.md(부록 앞 4부 카드 그룹), README.md(3부↔부록 사이 4부 항목) 배선 완료
- `mdbook build src` 종료코드 0, 경고 없이 그린(create-missing=false 위반 없음)
- 파이썬 전수 링크 스캔: TOTAL 895 / RAW DEAD 2(알려진 false-positive) / **REAL DEAD 0**
- docs/ 미커밋 확인(restore+clean 전후 실행), 8개 src/README 파일만 담긴 단일 `docs(24)` 커밋 생성

## Task Commits

플랜의 Task 3 지시대로 3개 태스크(콘텐츠 생성 → 목차 배선 → 검증)를 하나의 커밋으로 묶어 커밋했습니다(plan에 명시된 단일 커밋 방식):

1. **Task 1: 4부 디렉토리 신설 — 개요 랜딩 + 4개 트랙 스텁** - 파일 생성만, 커밋은 Task 3에서 일괄
2. **Task 2: 목차 배선 — SUMMARY/introduction/README** - 파일 수정만, 커밋은 Task 3에서 일괄
3. **Task 3: 검증 게이트 + 커밋** - `557addd` (docs)

**Plan metadata:** (본 SUMMARY 커밋 시 함께 생성)

## Files Created/Modified

- `src/4-workflow/index.md` - 4부 개요 랜딩(실 산문 30줄): 왜 4부인가, 4개 트랙 안내, 1·2·3부 승계 선언, 정직성 노트
- `src/4-workflow/preparation.md` - 여행 전 준비 스텁(Phase 25 PREP-01/02 예정)
- `src/4-workflow/field-day.md` - 하루 현장 운용 스텁(Phase 26 FIELD-01/02 예정)
- `src/4-workflow/data-power.md` - 데이터·전원 운용 스텁(Phase 27 DATA-01/02 예정)
- `src/4-workflow/after-return.md` - 귀국 후 정리 스텁(Phase 28 POST-01/02 예정)
- `src/SUMMARY.md` - 3부 마지막 항목(`faq.md`)과 `# 부록` 사이에 `# 4부 · 현장 워크플로` 섹션(5개 링크) 삽입
- `src/introduction.md` - 3부 toc-part 뒤·부록 toc-part 앞에 4부 카드 그룹 삽입(개요 카드 "여행을 완성하다")
- `README.md` - 3부 불릿과 부록 불릿 사이에 4부 항목 1줄 삽입

## Decisions Made

- **구조 옵션 a 채택(5개 평면 페이지):** 각 트랙이 Phase당 1~2개 요구사항만 담당(PREP-01/02, FIELD-01/02, DATA-01/02, POST-01/02)하므로 1·2·3부처럼 서브디렉토리로 나눌 만한 분량이 아니라고 판단. `4-workflow/` 바로 아래 5개 파일로 평평하게 구성.
- **디렉토리명 `4-workflow/`:** 로드맵 결정대로 3부 내 기존 `field-workflow.md`(현장 촬영 워크플로)와 혼동을 피하기 위해 채택.
- **개요 랜딩 30줄 확보:** 초안이 24줄로 plan의 min_lines(30) 미달 → "왜 따로 다루나" 섹션과 흐름 목록의 각 항목 설명을 확장해 30줄 충족(내용 부풀리기가 아니라 3-astro/index.md 스타일 참조에 맞춘 자연스러운 확장).

## Deviations from Plan

None - plan executed exactly as written. 개요 랜딩 줄 수 미달을 발견해 즉시 확장했으나, 이는 plan의 `min_lines: 30` 요구사항 자체를 충족시키기 위한 조정으로 별도 deviation이 아님(Task 1 verify 단계 내 자연스러운 반복).

## Issues Encountered

- Task 1 검증에서 `src/4-workflow/index.md`가 24줄로 plan 요구사항(30줄 이상) 미달 확인 → "왜 따로 다루나" 섹션 추가 및 흐름 목록 설명 확장으로 30줄 충족. 내용은 계획된 논지(가로 연결 vs 세로 깊이)를 자연스럽게 풀어낸 것으로, 새로운 사실 주장 추가 없음.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness — Phase 25~28 승계 메모

구조 뼈대가 완성되어 Phase 25~28은 **콘텐츠만 채우면 됩니다**(SUMMARY/introduction.md/README 배선은 이미 완료, 추가 배선 불필요):

- **Phase 25 (여행 전 준비)** → `src/4-workflow/preparation.md` 채움. PREP-01(세 카메라 통합 패킹 리스트), PREP-02(명소별 촬영 계획 + 오프라인 지도·앱). 장비 무게·카드/배터리 용량은 검증/미확인 표기 유지.
- **Phase 26 (하루 현장 운용)** → `src/4-workflow/field-day.md` 채움. FIELD-01(하루 타임라인 — 예시 템플릿, 고정 시각 단정 금지), FIELD-02(세 카메라 오케스트레이션).
- **Phase 27 (데이터·전원 운용)** → `src/4-workflow/data-power.md` 채움. DATA-01(카드 운용·현장 백업), DATA-02(멀티데이 전원 — 특정 SSD/인버터/클라우드는 추천만, 정밀 스펙·요금 단정 금지).
- **Phase 28 (귀국 후 정리 + 최종 게이트)** → `src/4-workflow/after-return.md` 채움. POST-01(3-2-1 백업), POST-02(선별·편집 순서 허브 — 트랙별 편집은 기존 1·2·3부로 라우팅 유지). 이 페이즈는 wave 2로 **최종 빌드+링크 게이트를 직렬 재실행**(v1.4 23-02 방식) — Phase 25~27이 병행으로 만든 변경들이 누적된 뒤 마지막에 한 번 더 전수 검증.
- 각 페이즈는 자신의 스텁 파일 1개만 수정하면 되며, `> 📝 **작성 예정**` 블록을 실제 내용으로 교체하는 형태로 진행.
- 저자 실촬영본·하루 실사례·화면 캡처는 여전히 트립(8/13) 이후 채움 — Phase 25~28도 텍스트/템플릿 위주로 작성 후 트립 후 교체.

---

*Phase: 24-part-scaffold-stubs*
*Completed: 2026-07-20*
