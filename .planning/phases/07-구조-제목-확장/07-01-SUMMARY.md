---
phase: 07-구조-제목-확장
plan: 01
subsystem: docs
tags: [mdbook, information-architecture, ko]

# Dependency graph
requires:
  - phase: none
    provides: "v1.0 shipped astro book (01-gear ~ 08-references) as baseline structure"
provides:
  - "SUMMARY.md 골격 재편 — 드론 파트(09-drone/, 10-drone-sites/, 08-references/drone-*)가 astro 파트 앞에 렌더"
  - "16개 드론 스텁 파일 (H1 + 작성 예정 마커), Phase 8/9/10이 채울 대상 확정"
  - "book.toml/introduction.md/README.md가 '몽골 사진 가이드'(드론+은하수)로 확장"
  - "mdbook build src 그린 상태 잠금 — Phase 8~10 내내 빌드 안 깨짐"
affects: [08-드론-기초, 09-명소별-항공, 10-드론-참고자료]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "SUMMARY.md 파트 헤더(#)는 순수 divider — 파일/폴더 바인딩 없음, 읽기 순서는 줄 순서로만 결정"
    - "book.toml create-missing=false 정책 유지 — 신규 챕터는 반드시 스텁 먼저 생성 후 SUMMARY에 링크"
    - "스텁 파일 형식: H1 한 줄 + blockquote 안내(어느 Phase가 채우는지 명시)"

key-files:
  created:
    - src/09-drone/index.md
    - src/09-drone/dji-mini5pro-basics.md
    - src/09-drone/dji-mini5pro-settings.md
    - src/09-drone/composition.md
    - src/09-drone/flight-and-battery.md
    - src/09-drone/gobi-environment.md
    - src/09-drone/drone-postprocessing.md
    - src/10-drone-sites/overview.md
    - src/10-drone-sites/tsagaan-suvarga.md
    - src/10-drone-sites/bayanzag.md
    - src/10-drone-sites/khongoryn-els.md
    - src/10-drone-sites/yolyn-am.md
    - src/10-drone-sites/baga-gazriin-chuluu.md
    - src/08-references/drone-mongolia-regulations.md
    - src/08-references/drone-gear-tutorials.md
    - src/08-references/drone-galleries.md
  modified:
    - src/SUMMARY.md
    - src/book.toml
    - src/introduction.md
    - README.md

key-decisions:
  - "폴더 01~08 리넘버 없이 SUMMARY 재편만으로 드론을 1부로 승격 — 신규 폴더는 09-drone/·10-drone-sites/ 둘뿐, 드론 참고자료는 기존 08-references/ 안에 신설"
  - "스텁을 먼저 확정해 book.toml create-missing=false 제약 하에서 Phase 8~10 내내 mdbook build가 절대 깨지지 않도록 잠금"
  - "introduction.md 리드/도입 문단은 드론+은하수 이중 프레이밍으로 전면 재작성했지만, 은하수 섹션 본문·예시 사진·이미지 출처 표는 전혀 손대지 않음"

patterns-established:
  - "구조 재편 phase는 콘텐츠 phase보다 먼저 실행 — 빌드 안전망을 먼저 깔고 콘텐츠는 뒤에 채운다"

# Metrics
duration: 3min
completed: 2026-07-13
---

# Phase 7 Plan 1: 구조·제목 확장 Summary

**SUMMARY.md를 재편해 드론 파트를 astro 파트 앞(1부)으로 승격하고, 16개 드론 스텁(09-drone 7 + 10-drone-sites 6 + 08-references/drone-* 3)으로 mdbook build를 그린 상태로 잠갔으며, book.toml/introduction.md/README.md를 "몽골 사진 가이드"(드론+은하수)로 확장**

## Performance

- **Duration:** 3 min
- **Started:** 2026-07-13T00:59:54Z
- **Completed:** 2026-07-13T01:02:33Z
- **Tasks:** 3 (2 file-modifying + 1 verification-only)
- **Files modified:** 20 (16 created, 4 modified)

## Accomplishments
- SUMMARY.md 골격 재편: `# 1부 · 드론 사진`(09-drone/ 7개 + 10-drone-sites/ 6개)과 `# 드론 참고 자료`(08-references/drone-* 3개)를 소개 바로 다음·기존 astro 콘텐츠 앞에 삽입. 기존 astro 파트는 콘텐츠 라인 불변, 레이블만 1부→2부·2부→3부·3부→4부·4부→5부로 조정.
- 16개 드론 스텁 파일 생성 — 각 H1 + "작성 예정" blockquote로 Phase 8(09-drone)/9(10-drone-sites)/10(08-references drone-*)의 채움 대상을 1:1로 확정.
- book.toml title/description, introduction.md H1·리드·도입부·"이 책을 읽는 법"·인라인 파트번호, README.md 태그라인·책 링크·목차를 드론+은하수 포괄로 확장. 은하수 예시 사진·캡션·이미지 출처 표는 전혀 손대지 않고 보존.
- `mdbook build src` exit 0 확인. 폴더는 01~08(불변) + 09-drone + 10-drone-sites만 존재.

## Task Commits

Each task was committed atomically:

1. **Task 1: 드론 스텁 파일 16개 생성 + SUMMARY.md 재편** - `995671e` (feat)
2. **Task 2: book.toml / introduction.md / README.md 를 "몽골 사진 가이드"로 확장** - `47ac8cf` (feat)
3. **Task 3: 빌드 그린 + 구조 무결성 검증** - 검증 전용, 파일 수정 없음 (커밋 없음)

**Plan metadata:** (다음 커밋에서 기록)

## Files Created/Modified
- `src/09-drone/index.md` ~ `drone-postprocessing.md` (7개) - Phase 8 드론 기초 스텁
- `src/10-drone-sites/overview.md` ~ `baga-gazriin-chuluu.md` (6개) - Phase 9 명소별 항공 스텁
- `src/08-references/drone-mongolia-regulations.md`, `drone-gear-tutorials.md`, `drone-galleries.md` - Phase 10 드론 참고 자료 스텁
- `src/SUMMARY.md` - 드론 파트 최상단 삽입, astro 파트 레이블 재조정
- `src/book.toml` - title/description 확장
- `src/introduction.md` - H1·리드·도입부·읽는 법·인라인 파트번호 갱신 (은하수 섹션/이미지/출처 표 보존)
- `README.md` - 태그라인·책 링크·목차 확장

## Decisions Made
- 폴더 01~08은 리넘버하지 않고 SUMMARY 재편만으로 드론을 1부로 승격 — 신규 폴더는 09-drone/·10-drone-sites/ 둘뿐, 드론 참고자료는 기존 08-references/ 안에 신설 (ROADMAP.md 결정 그대로 실행).
- 스텁을 콘텐츠보다 먼저 확정 — book.toml `create-missing = false` 제약 하에서 Phase 8~10 내내 `mdbook build`가 절대 깨지지 않도록 잠금.
- introduction.md 리드/도입 문단은 드론+은하수 이중 프레이밍으로 전면 재작성했으나, 기존 은하수 섹션 본문(천체 사진의 매력/몽골 은하수를 위한 땅/거창한 장비/한 장의 사진이 완성되기까지/몽골의 밤하늘)과 모든 이미지·캡션·이미지 출처 표는 한 글자도 건드리지 않음.

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
- `mdbook build src`가 로컬에서 `docs/`를 재생성해 48개 파일이 변경됨(CI가 실제 배포용으로 다시 빌드하므로 커밋 대상 아님). Task 3 검증 후 `git checkout -- docs/ && git clean -fd docs/`로 로컬 빌드 산출물을 원상 복구해 작업 트리를 깨끗하게 유지했다 — 계획 위반 아님(파일 수정 태스크가 아닌 검증 태스크의 부산물 정리).

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness
- `mdbook build src`가 그린 상태로 잠겨 있어, Phase 8(드론 기초)·9(명소별 항공)·10(드론 참고 자료)이 스텁 파일 본문만 채우면 됨 — 구조/링크 작업 불필요.
- 16개 스텁이 Phase 8/9/10의 정확한 채움 대상과 1:1 대응되어 있어 각 phase 계획 시 파일 목록을 그대로 재사용 가능.
- 블로커 없음. Phase 10(규제 검증)은 여전히 별도 리서치가 필요하다는 점은 STATE.md Blockers/Concerns에 이미 기록되어 있음.

---
*Phase: 07-구조-제목-확장*
*Completed: 2026-07-13*
