---
phase: 14-여행-참고-자료
plan: 01
subsystem: content
tags: [mdbook, wikimedia-commons, cc-license, image-optimization, imagemagick]

# Dependency graph
requires:
  - phase: 13-코스-명소별-여행-사진
    provides: 5개 명소 여행 가이드 페이지(12-travel-sites/*.md) — 이 페이지에서 상호링크
  - phase: 10-드론-참고-자료 (v1.1)
    provides: drone-galleries.md 3단 라이선스 구조 패턴, introduction.md 이미지 출처 표 패턴
provides:
  - "travel-galleries.md: 5개 명소 CC 사진 임베드 + 3단 라이선스 구분(EMBED/Unsplash 링크/감상전용 링크) 갤러리 페이지"
  - "src/images/travel-gallery/: 라이선스 확인된 CC 사진 9장(EXIF 제거·2000px 최적화)"
affects: [14-02 (최종 검증 플랜 — 이 페이지가 mdbook build에 포함됨)]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Wikimedia Commons Special:FilePath 엔드포인트로 원본 다운로드 → scripts/optimize-images.sh로 리사이즈+EXIF제거 → src/images/<dir>/ 재호스팅"
    - "3단 라이선스 구분(EMBED CC / 링크만-개별확인필요 / 감상전용 링크만) — drone-galleries.md와 동일 구조를 travel-galleries.md에도 적용"

key-files:
  created:
    - src/images/travel-gallery/tsagaan-suvraga.jpg
    - src/images/travel-gallery/bayanzag.jpg
    - src/images/travel-gallery/khongoryn-els.jpg
    - src/images/travel-gallery/khongoryn-els-camels.jpg
    - src/images/travel-gallery/yolyn-am.jpg
    - src/images/travel-gallery/baga-gazaryn-chuluu.jpg
    - src/images/travel-gallery/gobi-sunset.jpg
    - src/images/travel-gallery/ger.jpg
    - src/images/travel-gallery/camel-farm.jpg
  modified:
    - src/08-references/travel-galleries.md

key-decisions:
  - "5개 명소 전부 커버(드론 갤러리는 차강소브라가·바가가즈링촐로를 카테고리 부재로 제외했으나, 14-RESEARCH.md가 검색 API로 개별 파일 존재를 재발견해 이번 갤러리는 전 명소 커버)"
  - "Unsplash CC0 임포트 파일(Hiking in Khongoryn Els, 인물 등장 가능성 있음)은 14-RESEARCH.md의 주의 문구를 따라 임베드하지 않고 제외"
  - "일반 몽골/고비 참고 3장(일몰·게르·낙타농장)은 사람 없는 사진 우선 선택, 명소 아님을 캡션에 명시"

patterns-established:
  - "Pattern: 여행 갤러리류 페이지는 introduction.md의 '이미지 출처' 표 형식(파일/설명/저작자/라이선스/출처 5열)을 그대로 재사용"

# Metrics
duration: 20min
completed: 2026-07-14
---

# Phase 14 Plan 01: 여행 참고 자료 - 갤러리 Summary

**Wikimedia Commons CC 사진 9장(5개 명소 전부 커버)을 다운로드·최적화해 travel-galleries.md에 3단 라이선스 구분(EMBED CC / Unsplash 링크만 / 감상전용 링크만)으로 임베드**

## Performance

- **Duration:** ~20 min
- **Tasks:** 2/2 완료
- **Files modified:** 10 (이미지 9장 + travel-galleries.md 1개)

## Accomplishments
- Wikimedia Commons에서 14-RESEARCH.md 검증분 9개 파일을 Special:FilePath로 다운로드해 `file` 명령으로 JPEG 실재 확인
- `scripts/optimize-images.sh`로 전량 2000px 이하 리사이즈 + EXIF/GPS 제거 확인(`identify -verbose` 로 EXIF 미검출 확인)
- travel-galleries.md 스텁을 전면 재작성 — drone-galleries.md 3단 구조 + introduction.md 이미지 출처 표 패턴 미러링
- 5개 명소(차강소브라가·바양작·홍고린엘스x2·욜링암·바가가즈링촐로) + 일반 참고 3장(고비일몰·게르·낙타농장) 전부 캡션에 저작자·라이선스 명시
- Unsplash(인물 혼재 검색 링크만), Instagram/500px/포트폴리오(감상전용 링크만) — 이미지 임베드 없이 링크로만 처리
- `mdbook build src` exit 0 확인, 모든 임베드 이미지 경로가 실제 파일과 1:1 대응 확인

## Task Commits

Each task was committed atomically:

1. **Task 1: 검증된 CC 사진 다운로드 + 최적화 → src/images/travel-gallery/** - `4227997` (feat)
2. **Task 2: travel-galleries.md 작성 (3단 라이선스 구분 + 임베드 + 이미지 출처 표)** - `558360a` (feat)

_이 SUMMARY 커밋은 아래 완료 후 별도로 기록됩니다._

## Files Created/Modified
- `src/images/travel-gallery/tsagaan-suvraga.jpg` - 차강소브라가, Rob Oo, CC BY 2.0
- `src/images/travel-gallery/bayanzag.jpg` - 바양작, Bernard Gagnon, CC0
- `src/images/travel-gallery/khongoryn-els.jpg` - 홍고린엘스(사구), Bernard Gagnon, CC0
- `src/images/travel-gallery/khongoryn-els-camels.jpg` - 홍고린엘스(낙타), Bernard Gagnon, CC0
- `src/images/travel-gallery/yolyn-am.jpg` - 욜링암, Bernard Gagnon, CC0
- `src/images/travel-gallery/baga-gazaryn-chuluu.jpg` - 바가가즈링촐로, Arabsalam, CC BY-SA 4.0
- `src/images/travel-gallery/gobi-sunset.jpg` - 옴노고비 주 일몰(일반 참고), Commons 업로더, CC BY 4.0
- `src/images/travel-gallery/ger.jpg` - 게르(일반 참고, 사람 없음), Popo le Chien, CC0
- `src/images/travel-gallery/camel-farm.jpg` - 낙타농장(일반 참고, 사람 없음), Alexandr frolov, CC BY-SA 4.0
- `src/08-references/travel-galleries.md` - 전면 재작성: 3단 라이선스 구분 + 9장 임베드 + 이미지 출처 표 + 관련 링크

## Decisions Made
- 5개 명소 전부 커버(RESEARCH가 카테고리 부재를 검색 API로 우회 재발견한 정정 사항을 그대로 반영, 드론 갤러리와 달리 명소 제외 없음)
- Unsplash CC0 임포트 파일("Hiking in Khongoryn Els") — RESEARCH가 인물 식별 가능성 주의를 명시했으므로, 확신 없이 임베드하지 않고 제외(플랜 가이드의 "확신 없으면 링크만 또는 제외" 원칙 적용)
- 일반 참고 3장은 사람 없는 사진(ger.jpg, camel-farm.jpg는 RESEARCH에 "사람 없음"으로 명시됨)을 우선 선택

## Deviations from Plan

None - 계획대로 정확히 실행. 9개 파일 전부 1차 시도에서 다운로드 성공(파일명 재대조 불필요), Unsplash 인물 사진 제외는 플랜 자체에 명시된 가이드 라인을 따른 것으로 이탈이 아닌 계획 이행.

## Issues Encountered
None.

## User Setup Required
None - 외부 서비스 설정 불필요.

## Next Phase Readiness
- travel-galleries.md 완성으로 TREF-01(ROADMAP Phase 14 성공 기준 1) 충족.
- 14-02(TREF-02 튜토리얼 링크 + 최종 검증) 진행 가능 — 이 플랜은 travel-galleries.md/images/travel-gallery/만 소유했으므로 travel-gear-tutorials.md 등 다른 파일과 충돌 없음.
- mdbook build 그린 상태로 유지됨(docs/ 산출물은 커밋에서 제외).

---
*Phase: 14-여행-참고-자료*
*Completed: 2026-07-14*
