---
phase: 11-구조-제목-재편
plan: 01
subsystem: docs
tags: [mdbook, information-architecture, summary-md, korean-content]

# Dependency graph
requires:
  - phase: 07-10 (v1.1 드론 삽입)
    provides: SUMMARY.md 파트 구조 패턴(드론 삽입 시 동일한 재레이블 조작 선례)
provides:
  - "3-트랙(여행·드론·은하수) SUMMARY.md 골격, 여행 파트가 최상단 1부"
  - "12개 여행 스텁 파일(11-travel 4, 12-travel-sites 6, 08-references travel-* 2)"
  - "book.toml/introduction.md/README.md 3-트랙 리프레이밍"
  - "mdbook build src 그린 상태 (create-missing=false 조건에서 dangling 링크 없음)"
affects: [12-여행-사진-기초, 13-코스-명소별-여행-사진, 14-여행-사진-참고-자료]

# Tech tracking
tech-stack:
  added: []
  patterns: ["mdbook SUMMARY 파트 헤더는 순수 divider(파일 바인딩 없음), 스텁 파일 = H1 + 작성 예정 blockquote"]

key-files:
  created:
    - src/11-travel/index.md
    - src/11-travel/camera-settings.md
    - src/11-travel/composition-and-light.md
    - src/11-travel/landscape-and-street.md
    - src/12-travel-sites/overview.md
    - src/12-travel-sites/tsagaan-suvarga.md
    - src/12-travel-sites/bayanzag.md
    - src/12-travel-sites/khongoryn-els.md
    - src/12-travel-sites/yolyn-am.md
    - src/12-travel-sites/baga-gazriin-chuluu.md
    - src/08-references/travel-gear-tutorials.md
    - src/08-references/travel-galleries.md
  modified:
    - src/SUMMARY.md
    - src/book.toml
    - src/introduction.md
    - README.md

key-decisions:
  - "여행 파트를 소개 바로 다음·모든 기존 콘텐츠 앞에 배치 (v1.1 드론 삽입과 동일한 조작을 한 단계 위에서 반복)"
  - "기존 4부 '몽골 여행지별 촬영 가이드'는 '5부 · 은하수 명소별 촬영 가이드'로 개칭 (여행 파트와 명칭 충돌 회피)"
  - "introduction.md의 깨진 '사진 준비'(07-appendix/checklists.md) 링크는 유효 대상이 없어 인라인 평문으로 대체(dead link 제거)"

patterns-established:
  - "새 파트 삽입 시: 파트 헤더 텍스트만 재레이블, 기존 콘텐츠 링크 라인은 절대 편집하지 않음"
  - "스텁 파일 형식: H1 + 빈 줄 + '> 📝 작성 예정 — 이 페이지는 {Phase}에서 채워집니다.' blockquote"

# Metrics
duration: 20min
completed: 2026-07-14
---

# Phase 11 Plan 01: 구조·제목 재편 Summary

**SUMMARY.md를 3-트랙(여행·드론·은하수) 구조로 재편 — 여행 사진 파트를 최상단 1부로 삽입하고 12개 스텁 파일 생성, book.toml/introduction.md/README.md를 3-트랙으로 확장, 깨진 링크 제거, mdbook build 그린 확보**

## Performance

- **Duration:** ~20 min
- **Completed:** 2026-07-14T01:33:24Z
- **Tasks:** 3 (Task 3은 검증 전용, 파일 수정 없음)
- **Files modified:** 16 (12 created, 4 modified)

## Accomplishments
- SUMMARY.md 재편: 여행 사진(1부)이 소개 바로 다음·모든 기존 콘텐츠 앞에 배치, 드론(2부)·준비하기(3부)·가기 전 연습(4부)·후보정(6부)으로 재레이블, 기존 "4부 · 몽골 여행지별 촬영 가이드"를 "5부 · 은하수 명소별 촬영 가이드"로 개칭
- 12개 여행 스텁 파일 생성(11-travel 4, 12-travel-sites 6, 08-references/travel-* 2) — Phase 12/13/14가 채울 자리를 잠금
- book.toml description·introduction.md·README.md를 "두 축"에서 "세 축(여행·드론·은하수)"으로 리프레이밍, introduction.md "이 책을 읽는 법"을 7항목으로 재구성
- introduction.md의 깨진 "사진 준비"(07-appendix/checklists.md, 대상 섹션 미존재) 링크를 제거하고 규칙을 인라인 평문으로 대체
- `mdbook build src` exit 0 확인 — 01~10 폴더 리넘버 없음, mongolia-travel-info.md 중복 없음

## Task Commits

Each task was committed atomically:

1. **Task 1: 여행 스텁 파일 12개 생성 + SUMMARY.md 재편(+4부 개칭)** - `7f52eb5` (feat)
2. **Task 2: book.toml/introduction.md/README.md를 3-트랙으로 확장 + 깨진 링크 수정** - `c60bee9` (feat)
3. **Task 3: 빌드 그린 + 구조 무결성 검증** - 검증 전용, 파일 수정 없음(커밋 없음)

**Plan metadata:** (아래 docs 커밋 참고)

## Files Created/Modified
- `src/11-travel/index.md`, `camera-settings.md`, `composition-and-light.md`, `landscape-and-street.md` - 여행 사진 기초 스텁(Phase 12)
- `src/12-travel-sites/overview.md`, `tsagaan-suvarga.md`, `bayanzag.md`, `khongoryn-els.md`, `yolyn-am.md`, `baga-gazriin-chuluu.md` - 코스 명소별 여행 사진 스텁(Phase 13)
- `src/08-references/travel-gear-tutorials.md`, `travel-galleries.md` - 여행 사진 참고 자료 스텁(Phase 14)
- `src/SUMMARY.md` - 3-트랙 목차 골격(여행 최상단, 드론/준비/연습/은하수명소/후보정 재레이블)
- `src/book.toml` - description 3-트랙화
- `src/introduction.md` - 세 축 리프레이밍, 여행 시작점, 4부→5부 링크 텍스트, 6부 재레이블, 7항목 읽는 법, 깨진 링크 제거
- `README.md` - 태그라인·목차 3-트랙화

## Decisions Made
- 여행 파트를 최상단 1부로 배치 (v1.1 Phase 7 드론 삽입 패턴을 한 단계 위에서 재사용)
- 기존 4부 제목을 "은하수 명소별 촬영 가이드"로 개칭해 신규 "여행 사진" 파트와의 명칭 충돌 회피
- 깨진 "사진 준비" 링크는 유효한 대상 페이지가 없어 dead link 유지 대신 인라인 평문화

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

Write 툴이 파일명 `SUMMARY.md`를 리포트 파일로 오인해 신규 작성을 차단했음 — 이미 존재하는 `src/SUMMARY.md`(mdbook 필수 목차 파일)이므로 Edit 툴로 동일한 결과를 달성해 우회함. 실제 콘텐츠나 검증 결과에는 영향 없음.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness
- `mdbook build src`가 그린 상태로 잠겨 있어 Phase 12(11-travel 콘텐츠)·13(12-travel-sites 콘텐츠)·14(08-references travel-* 콘텐츠)가 스텁을 실제 콘텐츠로 교체하는 동안 빌드가 깨지지 않음
- 블로커 없음

---
*Phase: 11-구조-제목-재편*
*Completed: 2026-07-14*
