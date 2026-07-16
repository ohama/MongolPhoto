---
phase: 20-restructure-video-stubs
plan: 01
subsystem: docs-structure
tags: [mdbook, summary, drone-video, capcut, stubs, toc-restructure]

# Dependency graph
requires:
  - phase: 19 (v1.3 여행 사진 보정 완료)
    provides: 랜딩 그룹 인덱스 페이지 패턴(13-editing/index.md 등), 지침체 존댓말 문체
provides:
  - "2부 재편: '# 2부 · 드론 사진·영상' 제목, 결합 '보정' 그룹 retire, 사진 후보정 단독 리프 승격"
  - "2개 클릭 랜딩 그룹: 드론 영상 촬영(video-index)·CapCut 영상 편집(capcut-index)"
  - "정직한 작성-예정 스텁 9개(Phase 21~23이 채울 자리)"
  - "create-missing=false 그린 빌드 + retire 죽은 링크 0"
affects: [phase-21-video-shooting, phase-22-capcut-edit, phase-23-storyboard-final-gate]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "클릭 가능한 랜딩 인덱스 페이지(빈 () 드래프트 노드 아님) — v1.3 관례 승계"
    - "정직 스텁 = H1 + 소개 + '이 장에서 다룰 내용' 티저 + '작성 예정' 안내, 미확인 수치 단정 금지"

key-files:
  created:
    - src/09-drone/video-index.md
    - src/09-drone/video-shooting.md
    - src/09-drone/video-movements.md
    - src/09-drone/capcut-index.md
    - src/09-drone/capcut-basics.md
    - src/09-drone/capcut-cut.md
    - src/09-drone/capcut-grade-speed.md
    - src/09-drone/capcut-export.md
    - src/09-drone/capcut-storyboard.md
  modified:
    - src/SUMMARY.md
    - src/introduction.md
    - README.md
  deleted:
    - src/09-drone/postprocessing-index.md
    - src/09-drone/video-editing.md

key-decisions:
  - "음악 라이선스는 flat 사실 단정 대신 '확인 예정' 주제로 표기(Phase 22가 검증 안내로 채움)"
  - "CapCut 요금·DJI fps·LUT 위치 등 미확인 수치는 스텁에서 티저 주제로만 나열"
  - "per-task 원자 커밋 3개(GSD 프로토콜) — 플랜의 단일 결합 커밋 대신"

patterns-established:
  - "랜딩 그룹 인덱스는 같은 폴더 상대경로 파일명으로 하위 챕터 링크"

# Metrics
duration: 3 min
completed: 2026-07-15
---

# Phase 20 Plan 01: 2부 드론 사진·영상 재편 + 영상/CapCut 스텁 9개 Summary

**2부를 '드론 사진 후보정'(단독 리프)·'드론 영상 촬영'(랜딩)·'CapCut 영상 편집'(랜딩)으로 재편하고, 정직한 '작성 예정' 스텁 9개로 create-missing=false 빌드를 그린으로 유지.**

## Performance

- **Duration:** 3 min
- **Started:** 2026-07-15T04:42:43Z
- **Completed:** 2026-07-15T04:45:41Z
- **Tasks:** 4
- **Files modified:** 3 수정 + 9 생성 + 2 삭제

## Accomplishments
- SUMMARY 2부 재편: 제목 `# 2부 · 드론 사진·영상`, 결합 그룹 "드론 사진·영상 보정" retire, "드론 사진 후보정" 단독 최상위 리프 승격, 2개 클릭 랜딩 그룹 추가
- 정직 스텁 9개 생성 — 랜딩 2개(video-index·capcut-index) + 촬영 2개 + CapCut 5개, 각각 H1+소개+"이 장에서 다룰 내용" 티저+"작성 예정" 안내
- introduction·README 2부 소개를 영상 촬영·CapCut 편집 포함으로 갱신, stale "영상 보정 추후 보강" 제거
- `mdbook build src` 그린(종료코드 0, 경고 0), retire 파일 죽은 링크 0, docs/ 미커밋

## Task Commits

각 태스크 원자 커밋:

1. **Task 1: 신규 스텁 9개 생성** - `33fa62b` (feat)
2. **Task 2: SUMMARY 2부 재편 + retire 2개 삭제** - `6387fec` (feat, git rm 포함)
3. **Task 3: introduction·README 갱신 + 죽은 링크 스윕** - `ce106fa` (docs)
4. **Task 4: 빌드 게이트** - 별도 커밋 없음(검증 게이트; 코드는 Task 1~3에서 이미 커밋)

## Files Created/Modified
- `src/09-drone/video-index.md` (생성) - 드론 영상 촬영 랜딩(video-shooting·video-movements 링크)
- `src/09-drone/video-shooting.md` (생성) - 영상 촬영 기초 스텁
- `src/09-drone/video-movements.md` (생성) - 시네마틱 움직임 샷 스텁
- `src/09-drone/capcut-index.md` (생성) - CapCut 편집 랜딩(5개 하위 링크)
- `src/09-drone/capcut-basics.md` (생성) - 시작하기·무료/Pro 스텁
- `src/09-drone/capcut-cut.md` (생성) - 컷 편집·순서·속도 스텁
- `src/09-drone/capcut-grade-speed.md` (생성) - 색보정과 음악 스텁(라이선스 '확인 예정')
- `src/09-drone/capcut-export.md` (생성) - 내보내기 설정 스텁
- `src/09-drone/capcut-storyboard.md` (생성) - 고비 드론 스토리보드 예시 스텁
- `src/SUMMARY.md` (수정) - 2부 블록 재편
- `src/introduction.md` (수정) - 2부 소개 갱신(line 114)
- `README.md` (수정) - 2부 불릿 갱신(line 13)
- `src/09-drone/postprocessing-index.md` (삭제) - 결합 보정 랜딩 retire
- `src/09-drone/video-editing.md` (삭제) - 영상 보정 스텁 retire

## Decisions Made
- 음악 라이선스 토픽은 flat 사실 단정 대신 "확인이 필요한 주제"로 표기 — plan-checker 노트 준수, Phase 22가 검증된 안내로 채움
- CapCut 요금·DJI Mini 5 Pro fps·LUT 메뉴 위치 등 미확인 사양은 스텁에서 구체 수치 없이 티저 주제로만 나열
- GSD per-task 원자 커밋(3개)을 채택 — 플랜 Task 4의 단일 결합 커밋 지시 대신. 결과 동등(모든 변경 커밋, docs 미커밋, 빌드 그린)이며 태스크별 revert/bisect 가능

## Deviations from Plan

### 경미한 실행 방식 조정

**1. [실행 프로토콜] 단일 결합 커밋 → per-task 원자 커밋 3개**
- **Found during:** Task 4 (커밋 단계)
- **Issue:** 플랜 Task 4는 모든 변경을 단일 커밋으로 기록하라 지시했으나, GSD execute-plan 프로토콜은 태스크별 원자 커밋을 요구
- **Fix:** Task 1(스텁 9개)·Task 2(SUMMARY+retire)·Task 3(intro/README)을 각각 원자 커밋. Task 4는 순수 빌드 검증 게이트로 처리(추가 커밋 없음)
- **Files modified:** 커밋 구조만 변경, 파일 내용 동일
- **Verification:** `git log --oneline`에 33fa62b·6387fec·ce106fa 3개 커밋, docs/ 미스테이징 확인
- **Committed in:** 33fa62b, 6387fec, ce106fa

---

**Total deviations:** 1 (실행 방식 조정, 산출물 영향 없음)
**Impact on plan:** 커밋 세분화만 다름. 스텁·SUMMARY·문서·retire 산출물과 빌드 그린은 플랜과 동일. 스코프 크립 없음.

## Issues Encountered
None - 빌드 첫 시도에 그린(종료코드 0, 경고 0).

## User Setup Required
None - 외부 서비스 설정 불필요.

## Next Phase Readiness
- Phase 21(드론 영상 촬영)·Phase 22(CapCut 편집)가 채울 스텁 자리(video-shooting·video-movements / capcut-basics·cut·grade-speed·export·storyboard)가 모두 존재, 빌드 깨짐 없이 병렬 작성 가능
- 미확인 항목([verify@write] 격리)은 스텁에 티저/확인-예정으로만 남겨 둠 — Phase 21~22에서 공식 소스 검증 후 채워야 함
- 실촬영본·CapCut/DJI UI 캡처는 트립(8/13) 후 교체 대상으로 각 스텁에 정직 표기됨

---
*Phase: 20-restructure-video-stubs*
*Completed: 2026-07-15*
