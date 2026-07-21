---
phase: 29-storyboard-assets-scaffold
plan: 01
subsystem: docs
tags: [mdbook, storyboard, drone-video, image-assets, sips, korean-content]

# Dependency graph
requires: []
provides:
  - "src/images/storyboards/ 7개 JPEG 자산(어르헝 제외, 2000px 리사이즈)"
  - "src/2-drone/6-storyboards/ 그룹(랜딩 1 + 스텁 6) — 2부 신규 챕터"
  - "장비 대조표(ASSET-02, index.md#장비-대조표) — Mini 4 Pro→Mini 5 Pro 재확인/RS 3 Mini·iPhone 15 Pro 참고미확인/R7 일치"
  - "정직성 라벨 관례(콘셉트 이미지·트립 8/13 후 교체·촬영편집법 재설명 금지) — 이후 스토리보드 페이지 작성 규약"
  - "SUMMARY.md·introduction.md·README.md 배선 — create-missing=false 빌드 그린 유지"
affects: [30-storyboard-content, 31-timelapse-and-link-gate]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "스텁 페이지 관례: H1 + 다룰 내용 1~2문장 + 정직성 안내 + '작성 예정'(담당 Phase) + 승계 링크, 촬영·편집법 재설명 금지"
    - "장비 대조표를 그룹 랜딩에 1회만 두고 하위 페이지는 링크로 참조(중복 없이 재사용)"

key-files:
  created:
    - src/images/storyboards/tsagaan-suvarga.jpg
    - src/images/storyboards/khongoryn-els.jpg
    - src/images/storyboards/yolyn-am.jpg
    - src/images/storyboards/baga-gazriin-chuluu.jpg
    - src/images/storyboards/mongol-horses.jpg
    - src/images/storyboards/night-sky.jpg
    - src/images/storyboards/bayanzag.jpg
    - src/2-drone/6-storyboards/index.md
    - src/2-drone/6-storyboards/tsagaan-suvarga.md
    - src/2-drone/6-storyboards/mongol-horses.md
    - src/2-drone/6-storyboards/khongoryn-els.md
    - src/2-drone/6-storyboards/yolyn-am.md
    - src/2-drone/6-storyboards/baga-gazriin-chuluu.md
    - src/2-drone/6-storyboards/bayanzag.md
  modified:
    - src/SUMMARY.md
    - src/introduction.md
    - README.md

key-decisions:
  - "은하수(night-sky.jpg)는 자산만 준비하고 페이지는 만들지 않음 — 배치 안 A상 Phase 31이 3부 6-bonus/timelapse.md에 배치"
  - "6-storyboards 그룹을 2부 끝(5-references 뒤·3부 앞)에 번호 6으로 신설 — 기존 번호 재배치 없이 추가만"
  - "통합 4개 스텁은 짐벌/폰(RS 3 Mini·iPhone 15 Pro)이 책 미채택이라는 점을 각 스텁 정직성 안내에 반복 명시(대조표 링크 + 요약 1문장)"

patterns-established:
  - "정직성 라벨 관례: 콘셉트/기획 이미지 표기 + 트립(2026-08-13) 후 교체 예고 + 촬영·편집법 재설명 금지(승계 링크만) — Phase 30/31이 채울 콘텐츠도 이 관례를 따름"

# Metrics
duration: 3min (실행 세션 내 커밋 타임스탬프 기준, 실제 계획 검토·작성 포함 총 세션은 더 김)
completed: 2026-07-21
---

# Phase 29 Plan 01: 스토리보드 자산·2부 챕터 스캐폴드 Summary

**스토리보드 원본 7개(어르헝 제외)를 2000px JPEG로 리사이즈해 `src/images/storyboards/`에 배치하고, 2부 드론 파트 아래 `6-storyboards/` 챕터(랜딩 1 + 스텁 6)를 신설해 장비 대조표·정직성 라벨 관례를 문서화, SUMMARY/introduction/README 배선까지 마쳐 `mdbook build src`(create-missing=false) 그린 + 내부 링크 REAL DEAD 0을 통과시켰다.**

## Performance

- **Duration:** 커밋 타임스탬프 기준 약 3분(09:47~09:49, 실제 작업은 리서치·컨텍스트 로딩 포함 더 소요)
- **Started:** 2026-07-21T09:47:04+09:00 (Task 1 커밋)
- **Completed:** 2026-07-21T09:49:36+09:00 (Task 3 커밋)
- **Tasks:** 3/3
- **Files modified:** 17 (이미지 7 + md 7 + SUMMARY + introduction + README)

## Accomplishments

- (ASSET-01) 원본 PNG 7개(`~/share/mongol2/`, 어르헝 제외) → `sips --resampleWidth 2000` JPEG 변환, 각 파일 ~2.2MB → 600KB~1.28MB(가로 2000px 확인)로 축소해 `src/images/storyboards/`에 배치
- 2부 `6-drone/` 아래 신규 `6-storyboards/` 챕터 신설: 랜딩(index.md, 46줄, 실 산문) + 스텁 6개(드론 전용 2 + 통합 4)
- (ASSET-02) 장비 대조표를 랜딩에 1회 작성 — Mini 4 Pro→Mini 5 Pro 재확인 필요, RS 3 Mini·iPhone 15 Pro 참고만/미확인, Canon R7 일치. 6개 스텁이 이 표를 링크로 재사용
- 정직성 라벨 관례(콘셉트 이미지·트립 8/13 후 교체·촬영편집법 재설명 금지)를 랜딩 인용 블록 + 6개 스텁 "정직성 안내" 절에 일관 적용
- SUMMARY.md(2부 5-references 뒤·3부 앞) + introduction.md(2부 toc-grid 참고 자료 카드 뒤) + README.md(2부 목차 줄) 배선
- `mdbook build src` exit 0(경고 없음), 내부 링크 전수 스캔 TOTAL 1310 / RAW DEAD 2(기존 false-positive: `파일명`·`session-N`) / REAL DEAD 0
- docs/ 미커밋 확인(restore+clean 반복 적용)

## Task Commits

Each task was committed atomically:

1. **Task 1: 스토리보드 원본 7개 리사이즈·JPEG 변환 (ASSET-01)** - `a128918` (feat)
2. **Task 2: 2부 스토리보드 그룹 신설 — 랜딩+스텁 6개** - `d4c51bb` (feat)
3. **Task 3: 목차 배선 + 빌드 그린 + 링크 dead 0 게이트** - `55deedd` (docs)

_Plan metadata commit and STATE.md update follow this SUMMARY._

## Files Created/Modified

- `src/images/storyboards/tsagaan-suvarga.jpg` (804KB, 2000px) - 차강소브라 스토리보드 원본 리사이즈
- `src/images/storyboards/khongoryn-els.jpg` (1284KB, 2000px) - 홍고린엘스 스토리보드 원본 리사이즈
- `src/images/storyboards/yolyn-am.jpg` (744KB, 2000px) - 욜링암 스토리보드 원본 리사이즈
- `src/images/storyboards/baga-gazriin-chuluu.jpg` (828KB, 2000px) - 바가가즈링 촐로 스토리보드 원본 리사이즈
- `src/images/storyboards/mongol-horses.jpg` (765KB, 2000px) - 몽고 말떼 스토리보드 원본 리사이즈
- `src/images/storyboards/night-sky.jpg` (669KB, 2000px) - 몽골 밤하늘 스토리보드 원본 리사이즈(자산만, 페이지는 Phase 31)
- `src/images/storyboards/bayanzag.jpg` (712KB, 2000px) - 바양작 스토리보드 원본 리사이즈
- `src/2-drone/6-storyboards/index.md` - 그룹 랜딩: 흐름 안내 + 장비 대조표(ASSET-02) + 정직성 라벨 관례 + 촬영/편집법 승계 선언
- `src/2-drone/6-storyboards/tsagaan-suvarga.md` - 차강소브라가 드론 영상 스토리보드 스텁(Phase 30 SB-01)
- `src/2-drone/6-storyboards/mongol-horses.md` - 몽고 말떼 드론 영상 스토리보드 스텁(Phase 30 SB-01)
- `src/2-drone/6-storyboards/khongoryn-els.md` - 홍고린엘스 드론+지상 통합 스토리보드 스텁(Phase 30 SB-02)
- `src/2-drone/6-storyboards/yolyn-am.md` - 욜링암 드론+지상 통합 스토리보드 스텁(Phase 30 SB-02)
- `src/2-drone/6-storyboards/baga-gazriin-chuluu.md` - 바가가즈링 촐로 드론+지상 통합 스토리보드 스텁(Phase 30 SB-02)
- `src/2-drone/6-storyboards/bayanzag.md` - 바양작 드론+지상 통합 스토리보드 스텁(Phase 30 SB-02)
- `src/SUMMARY.md` - 2부 '명소별 영상 스토리보드' 그룹(그룹 1 + 하위 6링크) 삽입
- `src/introduction.md` - 2부 toc-grid에 스토리보드 카드(참고 자료 카드 뒤) 추가
- `README.md` - 2부 목차 줄에 스토리보드 그룹 언급 추가

## Decisions Made

- **은하수 페이지 미생성:** night-sky.jpg는 자산만 이번 플랜에서 준비하고, 페이지는 배치 안 A에 따라 Phase 31이 3부 `6-bonus/timelapse.md`에 배치한다(제약 7 준수).
- **그룹 번호/위치:** 기존 2부 마지막 그룹인 `5-references` 바로 뒤, `# 3부` 바로 앞에 `6-storyboards`를 번호 순서대로 추가 — 기존 파일 rename 없이 순수 추가만 수행해 회귀 위험 최소화.
- **장비 대조표 1곳 집중 배치:** 대조표를 랜딩(index.md)에 한 번만 작성하고 6개 스텁은 앵커 링크(`index.md#장비-대조표`)로 재사용 — 향후 Phase 30이 수치를 채울 때 표기 기준을 한 곳에서만 갱신하면 되도록 설계.

## Deviations from Plan

None - plan executed exactly as written. (link scan false-positive 필터의 `session-N` 패턴은 실제로는 literal "session-N" 문자열이며 정규식 `\d`가 아니라는 점만 스캔 스크립트 작성 중 확인 후 반영 — 계획 자체의 변경은 아님.)

## Issues Encountered

- 내부 링크 스캔 스크립트 초기 버전에서 `session-N` 필터를 `session-\d`(숫자) 정규식으로 잘못 작성해 `src/3-astro/3-practice/template.md`의 `session-N/xxx.jpg`(리터럴 대문자 N) placeholder가 REAL DEAD로 오탐지됐다. 필터를 리터럴 `"session-N"` 부분 문자열 매칭으로 수정해 해결 — REAL DEAD 0 확인. (스캔 스크립트는 계획대로 scratchpad에만 작성, 저장소에는 커밋하지 않음.)

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

**Phase 30 (SB-01/SB-02)이 이어받을 것:**
- 6개 스텁(`src/2-drone/6-storyboards/{tsagaan-suvarga,mongol-horses,khongoryn-els,yolyn-am,baga-gazriin-chuluu,bayanzag}.md`)을 실 콘텐츠(샷 리스트·촬영 설정·동선·편집 흐름·BGM)로 채운다.
  - **SB-01(드론 2):** tsagaan-suvarga.md, mongol-horses.md — 드론 전용, ~30컷/~4분 및 24컷/~2:30 목표치가 스텁에 이미 명시됨.
  - **SB-02(통합 4):** khongoryn-els.md(~36컷/~4:30) · yolyn-am.md(28컷/~3:25) · baga-gazriin-chuluu.md(28컷/~3:30) · bayanzag.md(~30컷/~3:30) — 세 카메라(드론·R7·짐벌/폰) 통합, 4부 field-day "세 카메라 오케스트레이션" 상향 링크가 필요.
  - 장비 수치(fps·ND·비행고도)는 반드시 `index.md#장비-대조표`의 "재확인 필요/미확인" 방침을 따르고 단정하지 말 것.
  - 이미지는 이번 플랜에서 준비된 `../../images/storyboards/<name>.jpg` 7개 중 6개(night-sky 제외)를 사용 가능.

**Phase 31 (SB-03, LINK-01)이 이어받을 것:**
- `night-sky.jpg`(669KB, 2000px, 이미 존재)를 3부 `3-astro/6-bonus/timelapse.md`에 배치 — 이 플랜은 자산만 준비했고 해당 페이지 편집은 손대지 않음.
- 6-storyboards 그룹과 3부·4부·명소 페이지 간 교차/역링크(4부 field-day 세 카메라 오케스트레이션, 2-sites 명소 페이지 역링크 등)를 최종 정리하고, 전체 게이트(빌드+링크 dead 0)를 마지막에 재확인.

**블로커/우려사항:** 없음. 이번 플랜은 create-missing=false 제약 하에서 7개 신규 md ↔ SUMMARY 7줄 1:1을 유지했고, 빌드·링크 게이트를 모두 통과했다.

---
*Phase: 29-storyboard-assets-scaffold*
*Completed: 2026-07-21*
