---
phase: 31-astro-storyboard-links-gate
plan: 01
subsystem: docs
tags: [mdbook, storyboard, timelapse, astro, honesty-labeling, image-transcription, backlinks]

# Dependency graph
requires:
  - phase: 29-storyboard-assets-scaffold
    provides: "night-sky.jpg 리사이즈 자산, 2부 6-storyboards 그룹·5곳 스텁"
  - phase: 30-storyboard-content
    provides: "드론 전용 2종 + 드론+지상 통합 4종(고비 5곳) 스토리보드 실 콘텐츠 — 이 플랜의 역링크 대상"
provides:
  - "SB-03: 은하수 타임랩스 영상 스토리보드(23컷/~5분, Canon R7+RF16mm F2.8) 3부 timelapse.md 배치"
  - "LINK-01(역링크 부분): 고비 5곳 명소 페이지(1·2·3부) → 해당 2부 스토리보드 역링크 15개"
affects: [31-02-final-link-gate]

# Tech tracking
tech-stack:
  added: []
  patterns: ["명소 페이지 역링크 삽입 위치: 기존 교차링크 문맥(항공 관점/타임라인 마지막 줄) 직후, 초보자 블록 직전 — 표·이미지 주석 비침범"]

key-files:
  created: []
  modified:
    - src/3-astro/6-bonus/timelapse.md
    - src/1-travel/2-sites/tsagaan-suvarga.md
    - src/1-travel/2-sites/bayanzag.md
    - src/1-travel/2-sites/khongoryn-els.md
    - src/1-travel/2-sites/yolyn-am.md
    - src/1-travel/2-sites/baga-gazriin-chuluu.md
    - src/2-drone/2-sites/tsagaan-suvarga.md
    - src/2-drone/2-sites/bayanzag.md
    - src/2-drone/2-sites/khongoryn-els.md
    - src/2-drone/2-sites/yolyn-am.md
    - src/2-drone/2-sites/baga-gazriin-chuluu.md
    - src/3-astro/4-sites/tsagaan-suvarga.md
    - src/3-astro/4-sites/bayanzag.md
    - src/3-astro/4-sites/khongoryn-els.md
    - src/3-astro/4-sites/baga-gazriin-chuluu.md

key-decisions:
  - "원본 이미지(6.몽골밤하늘.png)의 컷 제목·타임코드·촬영 설정 수치는 선명해 그대로 전사, 컷 08/15/19 등 일부 부연 설명 문구는 폰트 블러로 정확한 판독이 어려워 각주로 불확실성을 명시하고 문맥상 가장 근접한 표현으로 옮김(창작 금지 원칙 유지)"
  - "은하수 지상 카메라 Canon R7 + RF16mm F2.8은 책 기준과 이미 일치 — Mini 4/5 Pro 대조표 불필요 방침 그대로 적용"
  - "촬영·편집 조작법(밤 노출·초점·500/NPF·RAW 현상·스태킹·은하수 강조)은 timelapse.md 새 섹션에서 재설명하지 않고 기존 3부 파트로 링크만 승계"
  - "15개 역링크는 각 부(部)의 기존 문맥(1·2부: 항공 관점 안내 줄 뒤, 3부: 촬영 타임라인 마지막 줄 뒤)에 자연스럽게 이어 붙이고, 없는 곳(2부 5개 파일)은 초보자 블록 직전에 삽입 — 표·이미지 주석은 건드리지 않음"

patterns-established:
  - "명소 역링크 삽입은 파일당 정확히 한 줄만 추가하는 최소 침습 편집으로, 15개 파일을 순차 Edit해도 콘텐츠 손실 리스크 없음(Phase 30 wave 1 병렬 스테이징 경합과 달리 이 플랜은 wave 1 단독 실행)"

# Metrics
duration: ~35min
completed: 2026-07-21
---

# Phase 31 Plan 01: 은하수 타임랩스 3부 배치 + 명소 역링크 15개 Summary

**은하수 타임랩스 영상 스토리보드(Canon R7+RF16mm F2.8, 23컷/~5분)를 원본 이미지에서 전사해 3부 timelapse.md에 배치(SB-03)하고, 고비 5곳 명소 페이지 15곳(1·2·3부)에 해당 2부 스토리보드 역링크를 삽입(LINK-01 역링크 부분).**

## Performance

- **Duration:** ~35분
- **Tasks:** 2/2 완료
- **Files modified:** 16 (timelapse.md 1 + 명소 페이지 15)

## Accomplishments
- `~/share/mongol2/6.몽골밤하늘.png`를 직접 판독(필요 영역은 최대 500% 크롭·확대로 재확인)해 5개 구간·23컷 샷 리스트, 공통 촬영 설정(M/RF16mm F2.8/15초/ISO 3200~6400/3800~4200K/RAW), 구도 가이드 5종, 촬영 장소 5곳, 편집 흐름 5단계, 필름 톤 가이드, BGM을 `src/3-astro/6-bonus/timelapse.md`에 새 H2 섹션으로 자연스럽게 이어 붙임(기존 "기본 절차/배터리·저장공간/초보자는 이렇게" 섹션 유지)
- night-sky.jpg 임베드 + "콘셉트/기획 이미지·완성 영상 아님·트립(2026-08-13) 후 교체·스토리보드 원본 기재값" 정직 캡션 삽입
- 밤 노출·초점·500/NPF·은하수 찾기·RAW 현상·스태킹·은하수 강조 등 촬영·편집법은 재설명 없이 기존 3부 파트(`../2-fundamentals/*`, `../5-postprocessing/*`)로 전부 링크 승계, 인터벌·조립은 같은 페이지 상단 "기본 절차"로 연결(중복 서술 0)
- 고비 5곳(차강소브라·바양작·홍고린엘스·욜링암·바가가즈링촐로) × 1·2·3부 = 15개 파일에 해당 2부 스토리보드로 가는 역링크 한 줄씩 삽입(1·3부는 `../../2-drone/6-storyboards/{site}.md`, 2부는 `../6-storyboards/{site}.md`), 표·이미지 주석 비침범
- mdbook 빌드 그린(exit 0, WARN/ERROR 없음), 15개 역링크 전부 실 파일로 해결(파이썬 스크립트로 상대경로 정규화·`os.path.isfile` 검증), docs/ 미커밋

## Task Commits

Each task was committed atomically:

1. **Task 1: 은하수 타임랩스 영상 스토리보드 섹션을 timelapse.md에 배치(SB-03)** - `bf9fde8` (feat)
2. **Task 2: 고비 5곳 명소 페이지 → 2부 스토리보드 역링크 15개(LINK-01)** - `bc60001` (feat)

**Plan metadata:** 이 SUMMARY 커밋(다음 커밋)

_Note: TDD 아님 — 콘텐츠 전사·문서 편집 플랜._

## Files Created/Modified
- `src/3-astro/6-bonus/timelapse.md` - 기존 밤하늘 타임랩스 기본 절차 뒤에 은하수 타임랩스 영상 스토리보드 섹션(샷 리스트 5구간·촬영 설정·구도 가이드·촬영 장소·편집 흐름·필름 톤·BGM·관련 페이지) 추가
- `src/1-travel/2-sites/{tsagaan-suvarga,bayanzag,khongoryn-els,yolyn-am,baga-gazriin-chuluu}.md` - "항공 관점은…" 줄 뒤에 영상 스토리보드 역링크 1줄 추가(각 파일)
- `src/2-drone/2-sites/{tsagaan-suvarga,bayanzag,khongoryn-els,yolyn-am,baga-gazriin-chuluu}.md` - 초보자 블록 직전에 드론(전용/+지상 통합) 영상 스토리보드 역링크 1줄 추가(각 파일)
- `src/3-astro/4-sites/{tsagaan-suvarga,bayanzag,khongoryn-els,yolyn-am,baga-gazriin-chuluu}.md` - 촬영 타임라인 마지막 줄 뒤에 낮·드론 영상 스토리보드 역링크 1줄 추가(각 파일)

## Decisions Made
- 원본 이미지의 컷 08(욜링암 협곡) 설명 문구는 "협곡 사이로 쏟아지는 은하수" 이후 한 글자가 폰트 블러로 판독 불가 — 그 글자를 생략하고 각주로 명시(단정하지 않음)
- 컷 15(기도 깃발과 별)·컷 19(유성) 설명 문구도 후반부 판독이 어려워, 컷 제목과 이미지 내용(타르초/차 옆의 인물과 별똥별)에 근거해 옮기고 각주로 판독 한계를 공개
- "필름 스타일 & 톤 가이드"의 색보정 항목("은하수의 색감(?)")은 괄호 안 색상명이 불명확해 색상명을 생략하고 "은하수의 색감 살리기"로만 전사(지어내지 않음)
- 2부 명소 페이지 5곳은 기존 문맥에 자연스러운 삽입 지점이 없어(항공 관점 안내 줄이 없음) 계획대로 초보자 블록 직전에 새 줄로 삽입

## Deviations from Plan

None - 계획대로 정확히 실행됨. (2부 5개 파일은 자연스러운 기존 교차링크 문맥이 없어 플랜이 명시한 대체 규칙 — "없으면 마지막 초보자 블록 직전" — 을 그대로 적용했으며, 이는 플랜 지시사항 범위 내 정상 동작이라 편차로 집계하지 않음.)

## Issues Encountered
- 원본 스토리보드 이미지의 표 제목·타임코드·수치(카메라 설정, 컷 번호)는 선명했으나, 일부 부연 설명 캡션 텍스트는 AI 생성 이미지 특유의 폰트 블러로 육안 판독이 어려웠음. 500% 크롭·확대로 대부분 해결했으며, 여전히 불확실한 3곳(컷 08·15·19)은 본문에 각주로 판독 한계를 공개해 정직성을 유지함.

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- SB-03·LINK-01(역링크 부분) 완결: 은하수 타임랩스 3부 배치 + 고비 5곳 15개 역링크 전부 실 파일로 해결
- 이 플랜은 wave 1 단독 실행이라 Phase 30에서 관측된 git 스테이징 경합이 재발하지 않았음(각 태스크 개별 스테이징·순차 커밋 확인)
- 다음 31-02(wave 2)에서 책 전체 전수 링크 게이트(dead 0) 및 최종 검증 진행 필요 — 이 플랜은 변경분 한정 검증만 수행(전수 게이트는 31-02 책임)

---
*Phase: 31-astro-storyboard-links-gate*
*Completed: 2026-07-21*
