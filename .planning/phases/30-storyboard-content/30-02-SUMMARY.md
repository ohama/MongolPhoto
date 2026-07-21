---
phase: 30-storyboard-content
plan: 02
subsystem: docs
tags: [mdbook, storyboard, drone-video, honesty-labeling, cross-linking]

# Dependency graph
requires:
  - phase: 29-storyboard-assets-scaffold
    provides: 리사이즈된 스토리보드 자산(khongoryn-els.jpg, yolyn-am.jpg) + 6-storyboards 그룹 스텁 + index.md 장비 대조표
provides:
  - 홍고린엘스 통합 스토리보드 실 콘텐츠(36컷 샷 리스트·촬영 설정·세 카메라 운용/동선·편집 흐름·BGM)
  - 욜링암 통합 스토리보드 실 콘텐츠(28컷 샷 리스트·촬영 설정·세 카메라 운용/동선·편집 흐름·BGM, 협곡 내부 드론 제한 명시)
  - 두 페이지 → 4부 field-day.md "세 카메라 오케스트레이션" 상향 링크
affects: [31-storyboard-wave2, phase-30-completion]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "스토리보드 원본 PNG를 Read로 직접 판독·전사(샷 리스트 표: 컷/시간/카메라/내용)"
    - "카메라 표기는 원본 아이콘 + 캡션 텍스트 + 섹션 안내(예: '협곡 내부는 드론 비행 금지 또는 매우 제한적')를 함께 근거로 판정"

key-files:
  created: []
  modified:
    - src/2-drone/6-storyboards/khongoryn-els.md
    - src/2-drone/6-storyboards/yolyn-am.md

key-decisions:
  - "짐벌/폰은 원본 상단 장비란에 있어도 개별 컷 아이콘 근거가 약하면 '카메라(R7)/짐벌(참고)' 처럼 병기해 단정을 피함"
  - "욜링암 19·20·24번(협곡 내부 드론 컷)은 원본 자체의 '드론 비행 금지 또는 매우 제한적일 수 있음' 안내와 충돌하므로 '드론(미확인)'으로 별도 표기"
  - "욜링암 원본의 25~28번 컷 번호 중복·시간 오탈자는 내용·타임스탬프 순서를 기준으로 정리(콘텐츠 창작 아님, 표기 오류 정리)"

patterns-established:
  - "통합 스토리보드 페이지 구조: 도입 → 이미지+정직 캡션 → 샷 리스트(섹션별 표, 카메라 표기) → 촬영 설정(Mini 4 Pro 기재·5 Pro 재확인 + R7 일치 + 짐벌/폰 참고만) → 세 카메라 운용/동선(4부 field-day 상향 링크 포함) → 편집 흐름(CapCut 승계 링크) → BGM → 정직성 안내 → 관련 페이지"

# Metrics
duration: 55min
completed: 2026-07-21
---

# Phase 30 Plan 02: 홍고린엘스·욜링암 통합 스토리보드 콘텐츠 Summary

**원본 스토리보드 PNG 2종(홍고린엘스 36컷, 욜링암 28컷)을 직접 판독해 드론+지상(Canon R7) 통합 샷 리스트·설정·동선·편집·BGM으로 전사하고, 두 페이지 모두 4부 field-day.md "세 카메라 오케스트레이션"으로 상향 링크했다.**

## Performance

- **Duration:** 약 55분
- **Started:** 2026-07-21T10:05:00Z (추정)
- **Completed:** 2026-07-21T11:00:00Z (추정)
- **Tasks:** 3/3 완료
- **Files modified:** 2

## Accomplishments

- `~/share/mongol2/2.홍고린엘스.png`(총 36컷, 6개 구간)와 `~/share/mongol2/3.욜링암.png`(총 28컷, 5개 구간)를 이미지 크롭·확대까지 동원해 컷별 아이콘(드론/카메라)·캡션·설정값·동선·편집 가이드·BGM을 빠짐없이 전사했다.
- 각 컷마다 카메라(드론/카메라 R7/짐벌 참고)를 표기해 통합형 페이지의 핵심 요구를 충족했다.
- 욜링암은 원본이 명시한 "드론은 입구와 넓은 구간에서만, 협곡 내부는 짐벌/핸드헬드" 원칙을 그대로 반영해, 협곡 내부의 드론 아이콘 컷(독수리 비행 등)은 "드론(미확인)"으로 별도 표기하며 정직성을 유지했다.
- 두 페이지 모두 "세 카메라 운용 / 동선" 절에서 4부 [하루 현장 운용 — 세 카메라 오케스트레이션](../../4-workflow/field-day.md#세-카메라-오케스트레이션)으로 상향 링크했다(계획→실전 운용 연결, field-day.md 자체는 수정하지 않음 — 30-03이 이미 역링크 완료).

## Task Commits

Each task was committed atomically:

1. **Task 1: 홍고린엘스 통합 스토리보드 콘텐츠 전사 + field-day 상향 링크** - `8a37211` (docs)
2. **Task 2: 욜링암 통합 스토리보드 콘텐츠 전사 + field-day 상향 링크** - `a6b7ac6` (docs)
3. **Task 3: 빌드 그린 + 새 dead 링크 0 게이트** - 별도 커밋 없음(빌드·링크 스캔만 수행, 변경 파일 없음). `git restore docs/`로 mdbook 산출물 미커밋 확인.

**Plan metadata:** (이 커밋, docs(30-02): complete 홍고린엘스·욜링암 통합 스토리보드 plan)

## Files Created/Modified

- `src/2-drone/6-storyboards/khongoryn-els.md` - 스텁 → 36컷 통합 샷 리스트(6개 구간 표)·촬영 설정·세 카메라 운용/동선(4부 상향 링크)·편집 흐름(6단계 표)·BGM 채움
- `src/2-drone/6-storyboards/yolyn-am.md` - 스텁 → 28컷 통합 샷 리스트(5개 구간 표, 협곡 내부 드론 제한 명시)·촬영 설정·세 카메라 운용/동선(4부 상향 링크)·편집 흐름(5단계 표)·BGM 채움

## Decisions Made

- 컷별 카메라 판정은 원본 아이콘 확대 판독 + 캡션 텍스트 + 우측 안내박스(예: "협곡 내부는 짐벌/핸드헬드")를 함께 근거로 삼았다. 아이콘만으로 단정하기 애매한 컷(예: 욜링암 09·25번)은 "카메라(R7)/짐벌(참고)"처럼 병기해 과단정을 피했다.
- 욜링암 협곡 내부 드론 컷(19·20·24번)은 원본 자체의 비행 제한 안내와 상충하므로 "드론(미확인)"으로 표기하고, "정직성 안내" 절에 별도로 명시했다 — 지어내지 않고 원본의 모순을 있는 그대로 드러내는 방식을 택했다.
- 욜링암 원본의 25~28번 구간 컷 번호가 중복 표기(28번이 두 번)되고 시간 오탈자(00:55 등)가 있어, 내용·타임스탬프 순서를 기준으로 25~27번으로 정리했다. 본문에 이 정리 사실을 한 문장으로 밝혔다(콘텐츠 창작이 아니라 표기 오류 정리임을 명확히 함).

## Deviations from Plan

None - 계획대로 실행. 이미지 전사·honesty_rules·page_structure를 그대로 따랐다.

## Issues Encountered

- **Git 작업 트리 경합(레이스 컨디션):** wave 1에서 30-01·30-02·30-03 플랜이 같은 저장소에 병행 실행되고 있어, `khongoryn-els.md` 작성 중 30-03의 커밋(`e294487`)이 내 미작업 변경분을 함께 스테이징해 포함시키는 경합이 발생했다. 이후 30-03 쪽에서 자체적으로 감지해 범위 밖 변경을 되돌리는 커밋(`aa003f0`)을 남겼고, 내 작업 트리의 파일 내용 자체는 그대로 유지되어 있어 내가 다시 `git add` + 커밋해 정상적으로 반영했다(콘텐츠 손실 없음). Task 1·2 커밋(`8a37211`, `a6b7ac6`) 각각 1개 파일만 포함된 것을 확인했다.

## User Setup Required

None - 외부 서비스 설정 불필요.

## Next Phase Readiness

- SB-02(통합 4종) 전부 완결: 30-03이 채운 바가가즈링 촐로·바양작 + 이번 30-02가 채운 홍고린엘스·욜링암. 4부 field-day.md 역링크도 30-03이 4종 전부 삽입 완료.
- SB-01(드론 2종, 30-01)도 이미 완료 — Phase 30 세 플랜(30-01·30-02·30-03) 전부 완료.
- 다음: Phase 30 완료 처리(ROADMAP/REQUIREMENTS/STATE 갱신) → Phase 31(wave 2: 은하수 3부 배치 + 전체 교차/역링크 + 최종 링크 게이트). Phase 31 오케스트레이션 시 plan별 커밋 타이밍을 순차화하면 이번에 겪은 것과 같은 git 스테이징 경합을 예방할 수 있다.

---
*Phase: 30-storyboard-content*
*Completed: 2026-07-21*
