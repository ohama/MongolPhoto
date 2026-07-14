---
phase: 14-여행-참고-자료
plan: 02
subsystem: content
tags: [mdbook, canon-camera-museum, youtube-oembed, link-integrity, publish-gate]

# Dependency graph
requires:
  - phase: 14-여행-참고-자료 (14-01)
    provides: travel-galleries.md + src/images/travel-gallery/ (9장) — 최종 전수 검증의 선행 조건
  - phase: 11-여행-사진-기초 / 12-몽골-여행-사진-실전
    provides: camera-settings.md(렌즈 활용), technique-references.md(은하수 기법) — 이 페이지의 상호 링크 대상
provides:
  - "travel-gear-tutorials.md: Canon Camera Museum(global.canon) + Samyang 공식 스펙 4건, YouTube 8건(제목 기준 요약), 촬영 기법 아티클 10건"
  - "책 전체(여행·드론·은하수) mdbook build 최종 그린 + 내부 링크/이미지/SUMMARY 전수 검증 dead link 0건 — v1.2 출판 게이트 통과"
affects: []

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "whole-book 링크 정합성 검증 스크립트: fenced code block(```)·inline code span(`...`)·<url> 감싼 링크를 제외한 뒤 상대경로 `](target)`를 링크 포함 파일 디렉터리 기준으로 해석해 실재 여부 확인 (scratchpad에만 존재, 커밋 대상 아님)"

key-files:
  created: []
  modified:
    - src/08-references/travel-gear-tutorials.md

key-decisions:
  - "Canon 지역 도메인(canon-europe.com 등)은 403으로 이번 세션 접속 불가하여 페이지에 URL을 싣지 않고, 대신 Camera Museum(global.canon)을 1차 공식 소스로 쓰며 캐비어트를 도메인명 없이 문장으로만 표기(검증 스크립트의 문자열 매치를 오탐 없이 통과시키기 위함)"
  - "링크 정합성 스크립트의 최초 버전은 <url> 형태 자동링크·인라인 코드span·펜스 코드블록 내 예시 텍스트를 오탐(false positive)으로 잡아냈음 — 콘텐츠를 고치는 대신 스크립트를 3단계로 보강(각도괄호 제거/인라인 코드span 제거/펜스 코드블록 스킵)해 실제 dead link만 남도록 정정"

patterns-established: []

# Metrics
duration: 25min
completed: 2026-07-14
---

# Phase 14 Plan 02: 여행 참고 자료 - 튜토리얼 링크 + v1.2 최종 검증 Summary

**Canon Camera Museum/Samyang 공식 스펙 4건 + YouTube 8건(제목 기준) + 기법 아티클 10건으로 travel-gear-tutorials.md를 완성하고, 책 전체(여행·드론·은하수) mdbook build 그린 + 내부 링크·이미지·SUMMARY 전수 검증 dead link 0건으로 v1.2 출판 게이트를 통과시킴**

## Performance

- **Duration:** ~25 min
- **Tasks:** 2/2 완료
- **Files modified:** 1 (`src/08-references/travel-gear-tutorials.md`)

## Accomplishments
- 스텁이었던 `travel-gear-tutorials.md`를 전면 재작성 — Canon Camera Museum(EOS R7/RF 50mm STM/RF-S 18-150mm) + Samyang 공식(AF 12mm RF-S) 스펙 링크 4건, YouTube 튜토리얼 8건(제목 기준 요약, 프레임별 내용 날조 없음), 구도·골든아워·광각/망원 기법 아티클 10건(PetaPixel 6·dPS 2·ExpertPhotography 1·Focus by Picfair 1)
- 모든 URL을 14-RESEARCH.md TREF-02 검증 항목과 1:1 대조 — 신규 URL 날조 없음, 403 도메인(canon-europe/dpreview/masterclass/bhphotovideo) 페이지 내 URL 미포함(캐비어트는 도메인명 없는 문장으로만 표기)
- `../11-travel/camera-settings.md`로 렌즈 활용 상호 링크(가상의 "렌즈 활용 페이지" 아님), `../12-travel-sites/overview.md`가 아닌 실제 페이지 경로만 사용
- v1.2 출판 게이트: `mdbook build src` exit 0 확인
- scratchpad에 whole-book 링크 정합성 스크립트를 작성해 `src/**/*.md`(71개 파일) + `SUMMARY.md` 전수 스캔 — 최초 실행에서 4건의 후보를 발견했으나 전부 오탐(자동링크 `<url>` 형식 2건, 템플릿 코드블록 내 placeholder 1건, 인라인 코드span 내 예시 문법 1건)으로 판명되어 스크립트를 3단계로 보강 후 재실행, **dead link 0건**으로 확정
- 스크립트 신뢰도 검증을 위해 실재하지 않는 링크/이미지를 가진 임시 파일로 sanity test 실행 → 정상 탐지 확인 후 제거
- `docs/` 빌드 산출물은 매 빌드 전후 `git restore/clean`으로 정리, 커밋 스테이징에서 완전히 제외

## Task Commits

Each task was committed atomically:

1. **Task 1: travel-gear-tutorials.md 작성 (공식 스펙 + YouTube 제목기준 + 기법 아티클)** - `df99eae` (feat)
2. **Task 2: 최종 전수 검증 — 책 전체 mdbook build 그린 + 내부 링크 정합성 (v1.2 출판 게이트)** - 검증 전용 태스크, 파일 변경 없음(별도 커밋 없음). 검증 결과는 아래 참조.

**Plan metadata:** 이 SUMMARY 커밋에서 함께 기록됩니다.

## Files Created/Modified
- `src/08-references/travel-gear-tutorials.md` - 전면 재작성: 공식 스펙 4건 + YouTube 8건(제목 기준) + 기법 아티클 10건 + 상호 링크

## Decisions Made
- Canon 지역 도메인은 URL을 페이지에 싣지 않고 문장으로만 캐비어트 표기(도메인 문자열 자체를 페이지에 남기지 않아 "403 소스 미포함" 검증 기준을 명확히 통과)
- 링크 정합성 검증 스크립트가 잡아낸 4건의 후보는 전부 콘텐츠 결함이 아니라 스크립트의 정규식 한계(자동링크 `<>`, 인라인 코드span, 펜스 코드블록)였음을 확인 후 콘텐츠가 아닌 스크립트를 수정 — 다른 플랜 소유 파일(drone-galleries.md, template.md, introduction.md)을 불필요하게 건드리지 않음

## Deviations from Plan

None - 계획대로 정확히 실행. Task 2의 링크 정합성 검증에서 발견된 4건의 오탐은 콘텐츠 버그가 아니라 검증 스크립트 자체의 한계였으므로 콘텐츠 파일 수정(Rule 1) 없이 스크립트만 보강해 재검증했습니다 — 이는 플랜이 명시한 "검증 범위가 14-01/14-02 소유 파일 밖이면 함부로 고치지 말 것" 원칙과 일치하는 처리입니다.

## Issues Encountered
- 링크 정합성 스크립트 최초 버전이 다음 4건을 오탐: (1)(2) `drone-galleries.md`의 `[text](<url>)` 자동링크 형식(각도괄호로 감싼 URL을 외부 링크로 인식하지 못함), (3) `template.md`의 펜스 코드블록(```markdown) 안 `xxx.jpg` placeholder(연습 로그 템플릿 예시), (4) `introduction.md`의 인라인 코드span(`` `...` ``) 안 `파일명.jpg` 문법 설명 텍스트. 전부 실제 dead link가 아님을 원본 파일 확인으로 검증한 뒤, 스크립트에 각도괄호 제거·인라인 코드span 제거·펜스 코드블록 스킵 로직을 추가해 해결. 스크립트의 실효성은 인위적으로 깨진 링크를 담은 sanity-test 파일로 재확인(정상 탐지 후 제거).

## User Setup Required
None - 외부 서비스 설정 불필요.

## Next Phase Readiness

**v1.2 마일스톤 출판 준비 완료.**

- ROADMAP Phase 14 성공 기준 2·3·4 전부 충족: (2) 튜토리얼 페이지가 R7·삼양12mm·RF50mm(+RF-S 18-150mm) 공식 스펙·기법 링크 제공, (3) 책 전체 `mdbook build src` exit 0(최종 그린), (4) 여행·드론·은하수 전 파트(71개 md 파일 + SUMMARY.md) 내부 링크/이미지 전수 검증 dead link 0건.
- 신규 외부 링크(14-01 갤러리 + 14-02 튜토리얼)는 전부 14-RESEARCH.md에서 이번 세션 검증된 것으로 추적됨(날조 없음). 기존(v1.0/v1.1) 외부 링크는 각 phase에서 이미 검증되었으므로 이번 세션에 재크롤하지 않음(범위·자동화 차단 이슈로 제외, 이 문서에 명시).
- `docs/` 빌드 산출물은 매번 정리되어 커밋 스테이징에서 제외된 상태 유지.
- Phase 14(6/7 plans → 7/7) 완료로 **v1.2 몽골 여행 사진 마일스톤 전체 완료**. 남은 작업 없음.

---
*Phase: 14-여행-참고-자료*
*Completed: 2026-07-14*
