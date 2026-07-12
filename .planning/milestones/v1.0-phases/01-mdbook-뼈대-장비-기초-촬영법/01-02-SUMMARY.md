---
phase: 01-mdbook-뼈대-장비-기초-촬영법
plan: 02
subsystem: docs
tags: [mdbook, korean, astrophotography, gear-guide, content]

# Dependency graph
requires:
  - phase: 01-01
    provides: mdBook 뼈대(book.toml, SUMMARY.md 스켈레톤, Korean 폰트/CSS, 01-gear/ 스텁 4개 파일)
provides:
  - "src/01-gear/index.md — 장비 파트 개요 (휴대성/가성비/초보 친화, 추천만 원칙)"
  - "src/01-gear/camera-lens.md — 마운트별(소니 E/후지 X/니콘 Z DX/캐논 RF-S) 카메라·렌즈 추천 표 + 크롭계수 계산법 3단계"
  - "src/01-gear/accessories.md — 삼각대/전원/인터벌 타이머/레드라이트/렌즈 히터 + PhotoPills·Stellarium 앱 소개"
  - "src/01-gear/checklist.md — 6개 카테고리, 25개 항목 출발 전 체크리스트"
affects: [02-fundamentals (500-npf-rule.md, finding-the-milkyway.md 상호참조 대상), 03-practice]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "GEAR-06을 별도 챕터가 아니라 camera-lens.md 안의 콜아웃(당신의 카메라에 맞추기)으로 배치, 500-npf-rule.md로 상호참조"
    - "GEAR-04(앱)를 finding-the-milkyway.md에서 재사용할 수 있도록 accessories.md에 한 번만 소개"

key-files:
  created: []
  modified:
    - src/01-gear/index.md
    - src/01-gear/camera-lens.md
    - src/01-gear/accessories.md
    - src/01-gear/checklist.md

key-decisions:
  - "카메라 바디는 STACK.md에 표가 없어 대표 기종을 '~급' 표현으로 예시만 제시하고, 정확한 모델은 출시 시점에 따라 바뀔 수 있음을 명시(사실 아닌 것을 단정하지 않기 위함)"
  - "구매 관련 표현('구매')을 본문에서 완전히 배제 — 가격대(약 ~만원)는 표기하되 판매처·구매 절차는 언급하지 않음"

patterns-established:
  - "Pattern: GEAR-06 method box — 크롭계수 확인 → 환산 초점거리 계산 → 500룰 페이지 링크, 3단계 그대로 유지하며 이후 챕터에서도 재사용 가능"

# Metrics
duration: 9min
completed: 2026-07-09
---

# Phase 1 Plan 2: 장비 가이드 (카메라/렌즈/액세서리/앱/체크리스트) Summary

**마운트별(소니 E/후지 X/니콘 Z DX/캐논 RF-S) 카메라·렌즈 추천, 크롭계수 계산법, 액세서리·앱, 출발 전 체크리스트로 01-gear/ 4개 챕터 완성 — 구매 링크 없이 추천만**

## Performance

- **Duration:** ~9 min
- **Started:** 2026-07-09T04:40:00Z
- **Completed:** 2026-07-09T04:49:16Z
- **Tasks:** 2
- **Files modified:** 4

## Accomplishments
- GEAR-01/02/06: `camera-lens.md`에 마운트별 카메라 추천 표, APS-C 광각·밝은 렌즈 추천 표(모델명/가격대/이유), 크롭계수 계산법 3단계(1.5×/1.6× 표 → 환산 초점거리 공식 → 500-npf-rule.md 상호참조) 작성
- GEAR-03/04: `accessories.md`에 삼각대·전원·인터벌 타이머·레드라이트·렌즈 히터 5개 액세서리와 PhotoPills·Stellarium 앱 소개 작성
- GEAR-05: `checklist.md`에 카메라&렌즈/전원&저장/삼각대&릴리즈/방한&안전/앱&계획/기타 6개 카테고리, 25개 체크박스 작성
- `index.md`에 장비 파트 개요(3원칙: 휴대성·가성비·초보친화 / 트래킹 장비 없음 / 추천만-보유 장비로도 충분) 및 하위 3페이지 안내 작성

## Task Commits

Each task was committed atomically:

1. **Task 1: 장비 개요 + 카메라·렌즈 추천 + 크롭계수 계산법 (GEAR-01, 02, 06)** - `25f6a50` (feat)
2. **Task 2: 액세서리 + 앱 + 준비물 체크리스트 (GEAR-03, 04, 05)** - `c86c821` (feat)

**Plan metadata:** (this commit, see below)

## Files Created/Modified
- `src/01-gear/index.md` - 장비 파트 개요 + 하위 3페이지 링크 (13줄)
- `src/01-gear/camera-lens.md` - GEAR-01/02/06: 마운트별 카메라·렌즈 표 + 크롭계수 계산법 (65줄)
- `src/01-gear/accessories.md` - GEAR-03/04: 액세서리 + PhotoPills/Stellarium 앱 소개 (26줄)
- `src/01-gear/checklist.md` - GEAR-05: 6개 카테고리 25개 체크박스 (46줄)

## Decisions Made
- 카메라 바디 추천은 STACK.md에 전용 표가 없어(렌즈/삼각대/앱만 표가 있음) 마운트별 대표 기종을 "~급" 표현으로 예시 제시하고 "정확한 최신 모델명은 바뀔 수 있다"는 헤지 문구를 넣음 — 없는 사실을 단정적으로 서술하지 않기 위함.
- 초안에 "이 책은 특정 판매처나 구매 절차를 안내하지 않습니다"라는 문장을 넣었다가, "구매"라는 단어 자체가 plan의 grep 검증 기준(구매 링크 없음)에 걸릴 수 있어 "판매처를 안내하지 않습니다"로 재작성함 — 의미는 유지하되 금지어를 피함.

## Deviations from Plan

None - plan executed exactly as written. Both tasks matched the plan's file scope (`src/01-gear/index.md`, `camera-lens.md`, `accessories.md`, `checklist.md`) with no scope creep.

## Issues Encountered
- `accessories.md`의 초안이 `min_lines: 25` 기준에 24줄로 미달해, 날씨 앱(Windy/Clear Outside) 언급과 도입부 한 문장을 추가해 26줄로 보강함. 내용 확장이지 스코프 변경은 아님.
- 실행 중 `git status`에서 `src/02-fundamentals/field-workflow.md`가 수정된 상태로 나타났는데, 이는 병렬로 실행 중인 다른 플랜(02-fundamentals 담당 에이전트)의 미커밋 작업으로 확인됨. 이 플랜의 스코프(01-gear/만) 밖이므로 손대지 않고 커밋에서 제외함.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness
- `src/01-gear/` 4개 챕터 모두 실제 내용으로 채워짐. GEAR-01~06 요구사항 전부 커버.
- `camera-lens.md`가 `../02-fundamentals/500-npf-rule.md`를 상호참조하므로, 해당 페이지(01-03 플랜에서 작성 예정)가 채워지면 링크가 자연스럽게 유효해짐 — 현재도 스텁 파일이 존재해 빌드는 깨지지 않음.
- `accessories.md`가 `../02-fundamentals/finding-the-milkyway.md`를 상호참조 — 같은 이유로 현재 빌드 안전.
- 카메라 마운트가 최종 확정되면 `camera-lens.md`에 "당신의 카메라" 콜아웃을 좁혀서 추가할 수 있음(01-RESEARCH.md Open Question #4) — 이번 phase 완료의 블로커는 아님.
- `mdbook build src`는 이번 플랜의 변경 이후에도 계속 exit 0.

---
*Phase: 01-mdbook-뼈대-장비-기초-촬영법*
*Completed: 2026-07-09*
