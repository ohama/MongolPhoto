---
phase: 30-storyboard-content
plan: 01
subsystem: docs
tags: [mdbook, storyboard, drone-video, honesty-labeling, image-transcription]

# Dependency graph
requires:
  - phase: 29-storyboard-assets-scaffold
    provides: "2부 6-storyboards 그룹 스캐폴드(랜딩+장비 대조표+스텁 6), 리사이즈된 스토리보드 이미지 7종"
provides:
  - "차강소브라·몽고 말떼 드론 전용 스토리보드 실 콘텐츠(샷 리스트·촬영 설정·동선·편집 흐름·BGM, 원본 이미지 전사)"
  - "SB-01 완결: 드론 전용 2종 계획 페이지, 정직 라벨·장비 대조표 승계 유지"
affects: [30-storyboard-content-plan-02, 31-final-crosslinks-and-gate]

# Tech tracking
tech-stack:
  added: []
  patterns: ["명소별 스토리보드 페이지 구조: 도입(실측 컷 수·러닝타임) → 이미지 임베드+정직 캡션 → 샷 리스트(섹션별 표) → 촬영 설정(Mini 4 Pro 기재/5 Pro 재확인) → 동선/촬영 순서 → 편집 흐름(조작법은 CapCut 파트로 링크만) → BGM → 정직성 안내 → 관련 페이지"]

key-files:
  created: []
  modified:
    - src/2-drone/6-storyboards/tsagaan-suvarga.md
    - src/2-drone/6-storyboards/mongol-horses.md

key-decisions:
  - "원본 스토리보드의 컷 번호 결번(차강소브라: 31번 없음, 29·30·32만 존재)을 임의로 재번호하지 않고 있는 그대로 전사 — 전사 정직성 우선"
  - "저해상도로 판독이 어려운 일부 캡션 텍스트(예: 차강소브라 컷 33 '멀리 능선, 절벽, 하늘이 어우러진 장면')는 이미지를 최대 배율로 크롭·재확인해 문맥상 가장 근접한 표기로 전사 — 창작이 아닌 확대 판독"
  - "설정값은 전 구간에서 '스토리보드(Mini 4 Pro) 기재값 · Mini 5 Pro 재확인 필요' 문구로만 표기, 5 Pro 수치로 단정 변환하지 않음"

patterns-established:
  - "이미지 판독 시 python3/PIL로 특정 영역을 크롭·확대(2~4배, LANCZOS)해 Read 도구로 재확인하는 방식이 저해상도 표/타임스탬프 판독에 유효(과도한 배율(6배 이상)은 오히려 블러 유발, 원본 픽셀 밀도 한계 확인 필요)"

# Metrics
duration: ~25min
completed: 2026-07-21
---

# Phase 30 Plan 01: 차강소브라·몽고 말떼 드론 영상 스토리보드 Summary

**차강소브라(34컷/7구간)·몽고 말떼(24컷/5구간) 드론 전용 스토리보드 원본 이미지를 직접 판독·전사해 샷 리스트·촬영 설정·동선·편집 흐름·BGM을 채운 두 페이지, 설정값은 Mini 4 Pro 기재·5 Pro 재확인 표기로 일관되게 정직성 유지.**

## Performance

- **Duration:** ~25분
- **Tasks:** 3/3 완료
- **Files modified:** 2 (tsagaan-suvarga.md, mongol-horses.md)

## Accomplishments
- 차강소브라 페이지: `~/share/mongol2/1.차강소브라.png`를 직접 판독(필요 시 크롭·확대 재확인 포함)해 7개 구간·34컷 샷 리스트, 권장 촬영 설정(4K 60fps/D-Log M/ISO/셔터/ND), 동선 추천(A→1→2→3→4→5→B), 편집 포인트, BGM 방향(Epic Cinematic·Ambient·마두금)을 표로 전사
- 몽고 말떼 페이지: `~/share/mongol2/5.몽고말떼.png`를 직접 판독해 5개 구간·24컷 샷 리스트, ActiveTrack·안전거리(20~50m) 등 촬영 포인트, 촬영 설정, 촬영 장소 예시, 편집 톤&효과, BGM(Epic/Cinematic/자연의 웅장함)을 전사 — 주제형(고정 명소 아님) 특성을 도입부에 유지
- 두 페이지 모두 콘셉트 이미지 임베드(`../../images/storyboards/{tsagaan-suvarga,mongol-horses}.jpg`) + 정직 캡션, 기존 정직성 안내·관련 페이지(촬영/편집 링크 승계)·장비 대조표 앵커 보존
- mdbook 빌드 그린(exit 0, 경고 없음), 이 플랜 변경 2파일 기준 내부 링크 스캔 REAL DEAD 0, docs/ 미커밋

## Task Commits

Each task was committed atomically:

1. **Task 1: 차강소브라 드론 영상 스토리보드 콘텐츠 전사** - `cde4ad3` (docs)
2. **Task 2: 몽고 말떼 드론 영상 스토리보드 콘텐츠 전사** - `33b902e` (docs)
3. **Task 3: 빌드 그린 + 새 dead 링크 0 게이트** - 검증 전용(신규 파일 변경 없음, Task 1/2 커밋 결과가 그대로 게이트 통과)

**Fix commit (범위 밖 변경 되돌림):** `d7480d7` (fix) — 아래 Deviations 참고

**Plan metadata:** 이 SUMMARY 커밋(다음 커밋)

_Note: TDD 아님 — 콘텐츠 전사·문서 편집 플랜._

## Files Created/Modified
- `src/2-drone/6-storyboards/tsagaan-suvarga.md` - 스텁 → 34컷 샷 리스트(7구간)·촬영 설정·동선·편집 흐름·BGM 실 콘텐츠, 이미지 임베드+정직 캡션
- `src/2-drone/6-storyboards/mongol-horses.md` - 스텁 → 24컷 샷 리스트(5구간)·촬영 설정·동선/촬영 순서·편집 흐름·BGM 실 콘텐츠, 이미지 임베드+정직 캡션

## Decisions Made
- 차강소브라 원본 컷 번호에 31번이 존재하지 않고 29·30·32만 있음을 확인 — 페이지에 "원본 스토리보드에 표시된 컷 번호 그대로이며, 컷 31은 원본에 등장하지 않습니다"라고 명시해 임의 보정 없이 전사
- 저해상도 캡션(예: 26/27번 컷의 종료 시각, 33번 컷 캡션)은 python3/PIL로 해당 영역을 크롭·2~4배 확대해 Read로 재확인한 뒤 전사(구간 경계 시각과의 논리적 일관성으로 교차검증: 26번 종료 2:32 = 27번 시작 2:32, 27번 종료 2:38 = 28번 시작 2:38)
- 설정값은 두 페이지 전 구간에서 "스토리보드(Mini 4 Pro) 기재값 · Mini 5 Pro 재확인 필요"로만 표기, 상위 장비 대조표 앵커 링크를 유지해 단일 갱신 지점 원칙 준수

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 3 - Blocking] `git add` 개별 스테이징에도 불구하고 범위 밖 파일(field-day.md)이 첫 커밋에 병합됨**
- **Found during:** Task 1 커밋 직후
- **Issue:** `git add src/2-drone/6-storyboards/tsagaan-suvarga.md`만 실행한 뒤 커밋했으나, 병행 실행 중이던 다른 플랜(30-03)이 그 사이 `src/4-workflow/field-day.md`를 스테이징해 두었고, 이 플랜의 커밋이 그 스테이징된 변경까지 함께 커밋해버림(`git status --short`도 이 경합을 드러내지 못함). 이 플랜의 critical_rules는 field-day.md 편집을 명시적으로 금지.
- **Fix:** field-day.md의 커밋된 변경분을 `git checkout <이전 커밋> -- src/4-workflow/field-day.md`로 새 커밋(`d7480d7`)에서 되돌리고(히스토리 재작성 없이 append-only), 작업 트리는 되돌리기 전 상태(다른 플랜이 만들어 둔 미커밋 7줄 변경)로 복원해 그 변경을 파괴하지 않음
- **Files modified:** src/4-workflow/field-day.md (되돌림 커밋만, 이 플랜의 files_modified 범위 밖이므로 최종 산출물에는 포함되지 않음)
- **Verification:** `git diff src/4-workflow/field-day.md` 결과 없음(복원 확인), `git log -1 --stat -- src/2-drone/6-storyboards/tsagaan-suvarga.md`로 Task 1 커밋에 tsagaan-suvarga.md만 남았음을 확인, 이후 Task 2 커밋(`33b902e`)도 mongol-horses.md 단독 포함 확인
- **Committed in:** d7480d7 (되돌림), 이후 정상 커밋 유지

---

**Total deviations:** 1 auto-fixed (Rule 3 — 동시 실행 중인 다른 플랜과의 git 스테이징 경합, 콘텐츠 정확성에는 영향 없음)
**Impact on plan:** 이 플랜의 콘텐츠(두 페이지)는 계획대로 정확히 전사·반영됐고 커밋 범위도 최종적으로 파일별로 정확히 분리됨. 경합으로 인한 임시 오염은 즉시 발견·수정했으며 다른 플랜의 작업물도 손실 없이 보존.

## Issues Encountered
- Phase 30 내 여러 플랜(30-01, 30-02, 30-03)이 동일 wave(depends_on: [])에서 동시 실행되며 `git add`/`git commit` 타이밍이 겹쳐 커밋 경계가 흐려지는 경합이 재발(30-03 SUMMARY에도 유사 사례 기록됨). 이번에는 즉시 발견해 append-only 방식으로 바로잡음 — 향후 동시 실행 시 plan별 커밋 타이밍 순차화 필요성 재확인.
- 원본 이미지의 일부 타임스탬프/캡션 텍스트가 저해상도로 인해 육안 판독이 어려웠음 — python3/PIL 크롭·확대(2~4배)로 대부분 해결했으나, 6배 이상 확대는 오히려 블러가 심해져 원본 픽셀 밀도 한계에 부딪힘. 구간 경계 시각의 논리적 일관성(예: 컷 N 종료 = 컷 N+1 시작)으로 교차검증해 신뢰도를 높임.

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- SB-01 완결: 드론 전용 2종(차강소브라·몽고 말떼) 모두 실 콘텐츠로 전환, 정직 라벨·장비 대조표 승계 유지
- Phase 30의 나머지 플랜(30-02: 홍고린엘스·욜링암, 30-03: 완료됨 — 바가가즈링 촐로·바양작)이 SB-02를 마저 채움
- Phase 31(wave 2, 최종 게이트)에서 30-01·30-02·30-03 전체 산출물 대상 전체 링크 게이트·SB-03(은하수 3부 배치) 진행 필요
- 동시 실행(wave 병렬) 시 git add/commit 경합 가능성 — Phase 31 오케스트레이션에서 plan별 커밋 타이밍 순차화 또는 파일 잠금 고려 권장(30-01·30-03 두 플랜 모두에서 관측된 반복 이슈)

---
*Phase: 30-storyboard-content*
*Completed: 2026-07-21*
