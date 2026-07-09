---
phase: 06-부록-보너스-배포검증
plan: 01
subsystem: docs
tags: [mdbook, markdown, content-authoring, github-pages, static-site]

# Dependency graph
requires:
  - phase: 01-mdbook-장비-기초
    provides: "src/01-gear, src/02-fundamentals 소스 챕터 + GitHub Pages 배포 파이프라인(mdbook.yml)"
  - phase: 02-집에서-연습할-사항
    provides: "src/03-practice/home-checklist.md"
  - phase: 03-야외에서-연습할-사항
    provides: "src/02-fundamentals/field-workflow.md, finding-the-milkyway.md, src/03-practice/field-review.md"
  - phase: 04-후보정-연습
    provides: "src/05-postprocessing/{raw-develop,stacking,enhance-milkyway}.md"
  - phase: 05-몽골-여행지별-촬영-가이드
    provides: "src/04-mongolia/overview.md"
provides:
  - "src/07-appendix/{cheat-sheet,checklists,app-software,glossary}.md (REF-01~04, 신규 4페이지)"
  - "src/07-appendix/camera-lens-picks.md (REF-05, 06-appendix에서 이동, 내용 불변)"
  - "src/06-bonus/{panorama,star-trails,timelapse}.md (BONUS-01~03, 신규 3페이지)"
  - "src/SUMMARY.md '# 보너스 기법' 섹션 + '# 부록' 5링크 flip 완료"
  - "GitHub Pages 배포 사람 확인 완료 — book 전체 목차 v1 content-complete"
affects: []

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "부록/보너스 페이지는 값·절차만 증류해 본편으로 링크(distill+link, 재서술 금지) — Phase 1~5에서 이미 확립된 '증류/링크' 원칙을 부록·보너스 챕터까지 일관 적용"
    - "폴더 rename 시 git mv + 전역 grep(06-appendix==0)으로 교차참조 무결성 검증 후 커밋하는 패턴"

key-files:
  created:
    - src/07-appendix/cheat-sheet.md
    - src/07-appendix/checklists.md
    - src/07-appendix/app-software.md
    - src/07-appendix/glossary.md
    - src/06-bonus/panorama.md
    - src/06-bonus/star-trails.md
    - src/06-bonus/timelapse.md
  modified:
    - src/07-appendix/camera-lens-picks.md
    - src/01-gear/camera-lens.md
    - src/02-fundamentals/500-npf-rule.md
    - src/SUMMARY.md

key-decisions:
  - "부록 폴더를 06-appendix→07-appendix로 rename(git mv)해 06-bonus(보너스 기법)를 6부, 07-appendix(부록)를 7부로 순서 확정 — camera-lens-picks 내용은 이동만, 재작성 없음"
  - "REF-01~04는 이미 작성된 본편 챕터의 값·절차만 복사하고 이유는 재서술하지 않고 링크 — 크롭계수는 공식(500 ÷ 초점거리×크롭계수)만 적고 숫자 하드코딩 금지(마운트 미확정 원칙 유지)"
  - "BONUS-02(스타트레일)는 페이지 상단 ⚠️ 경고 콜아웃으로 이 책의 기본 단일프레임 은하수 세팅과 촬영 전략이 다름을 명시하고, StarStaX(무료, Win+Mac)를 기존 Sequator/Starry Landscape Stacker와 목적이 다른 별도 도구로 구분"

patterns-established:
  - "Pattern: 부록/참고자료 페이지 = distill+link(값만 복사, 이유는 링크) — 향후 참고자료 추가 시 동일 원칙 적용"

# Metrics
duration: ~8min
completed: 2026-07-10
---

# Phase 6 Plan 01: 부록·보너스·배포검증 Summary

**src/06-appendix를 07-appendix로 rename하고 참고자료 4페이지(현장 치트시트·체크리스트 모음·앱/소프트웨어 가이드·용어 사전)와 보너스 기법 3페이지(파노라마·스타트레일·타임랩스)를 신설, SUMMARY.md를 재구조화해 GitHub Pages에 배포하고 사람이 최종 확인 — MongolPhoto v1 콘텐츠 완결**

## Performance

- **Duration:** ~8 min (실행) + 배포/사람 확인 대기(체크포인트, 2026-07-09→2026-07-10)
- **Started:** 2026-07-09T08:56:56Z
- **Completed:** 2026-07-10 (체크포인트 승인)
- **Tasks:** 3/3 (Task 1, 2: auto / Task 3: checkpoint:human-verify)
- **Files modified:** 11 (4 신규 REF + 3 신규 BONUS + 1 이동(REF-05) + 2 교차참조 수정 + SUMMARY.md)

## Accomplishments

- 부록 폴더를 `src/06-appendix` → `src/07-appendix`로 rename(git mv, camera-lens-picks.md 내용 불변)하고 prose 교차참조(camera-lens.md ×2, 500-npf-rule.md ×1) 전량 수정
- 참고자료 4페이지(REF-01~04) 신설 — 모두 본편 챕터의 값/절차를 증류(distill)해 링크(재서술 없음), 크롭계수 숫자 하드코딩 없이 공식만 명시
- 보너스 기법 3페이지(BONUS-01~03) 신설 — 개념+기본 절차만, M모드·RAW·화밸·인터벌·스태킹은 재설명 대신 기존 챕터로 링크; 스타트레일은 단일프레임 세팅과의 충돌을 ⚠️로 명시 경고
- `src/SUMMARY.md`에 '# 보너스 기법' 섹션(3링크) 삽입 + '# 부록' 4개 빈 placeholder를 07-appendix 5링크로 flip
- `mdbook build src` exit 0, `grep -rn "06-appendix" src/` 0건, `grep ']()' src/SUMMARY.md` 0건 확인 후 커밋·푸시 → CI(`mdbook.yml`)가 `docs/` 재빌드해 GitHub Pages 자동 배포
- **배포 사이트 사람 확인 완료(오케스트레이터 대행 검증, 사용자 위임)**: https://ohama.github.io/MongolPhoto/ 에서 CI 실행 성공·Pages status "built" 확인, 신규/이동 8페이지(06-bonus 3개 + 07-appendix 5개) 전부 HTTP 200, 구 URL `06-appendix/camera-lens-picks.html`은 정상적으로 404, 콘텐츠 스팟체크(치트시트 "500 ÷" 공식, 스타트레일 "섞어 쓰지"+StarStaX, 용어사전 크롭계수/Bortle/코마) 및 사이드바 TOC(보너스 기법·부록 섹션) 통과

## Task Commits

Each task was committed atomically:

1. **Task 1: 부록 폴더 rename(06→07) + 교차참조 수정 + REF-01~04 4페이지 작성** - `bf92204` (feat)
2. **Task 2: 보너스 기법 3페이지(BONUS-01~03) 작성** - `5da58a8` (feat)
3. **Task 3: SUMMARY 재구조화 + 빌드·링크 검증 + 최종 배포 사람 확인** - `963b7de` (docs, 자동화 부분: SUMMARY flip + build/링크 검증 + 커밋·푸시)
   - CI 자동 재빌드 커밋: `f7c2931` (docs: rebuild mdBook site, GitHub Actions bot)
   - 체크포인트(배포 사람 확인)는 2026-07-10 승인됨 — 신규 커밋 없음(검증만)

**Plan metadata:** (다음 커밋 예정) `docs(06-01): complete 부록·보너스·배포 검증 plan`

## Files Created/Modified

- `src/07-appendix/cheat-sheet.md` - REF-01 현장 치트시트: 시작 세팅값 표, 500/NPF 공식 리마인더, 초점 스텝, 워크플로 체크박스, 촬영 가능 5문항, 빠른 문제해결
- `src/07-appendix/checklists.md` - REF-02 체크리스트 모음: 출발전/집연습 링크 + field-workflow 7단계 신규 체크박스
- `src/07-appendix/app-software.md` - REF-03 앱·소프트웨어 가이드: 앱 표 + 소프트웨어 표(장비 제외), 각 행 본편 링크
- `src/07-appendix/glossary.md` - REF-04 용어 사전: 크롭계수·500/NPF·Bortle·코마 등 용어별 정의 + 첫 등장 챕터 링크
- `src/07-appendix/camera-lens-picks.md` - REF-05 (git mv로 06-appendix에서 이동, 내용 불변)
- `src/06-bonus/panorama.md` - BONUS-01 은하수 파노라마: 개념+절차, ICE/Hugin 무료·PTGui 유료
- `src/06-bonus/star-trails.md` - BONUS-02 스타트레일: ⚠️ 단일프레임 충돌 경고, StarStaX(무료 Win+Mac)
- `src/06-bonus/timelapse.md` - BONUS-03 타임랩스: 인터벌+M모드 일관성(플리커 방지), ffmpeg 무료
- `src/01-gear/camera-lens.md` - 교차참조 06-appendix → 07-appendix 수정(2곳)
- `src/02-fundamentals/500-npf-rule.md` - 교차참조 06-appendix → 07-appendix 수정(1곳)
- `src/SUMMARY.md` - '# 보너스 기법' 섹션 신설 + '# 부록' 4개 빈 placeholder를 실제 링크로 flip

## Decisions Made

- 부록 폴더 rename(06→07)으로 6부=보너스 기법, 7부=부록 순서 확정 — camera-lens-picks는 이미 완료된 내용이라 이동만 하고 재작성하지 않음(REF-05는 Phase 1(01-02)에서 선행 생성됨)
- REF-01~04는 전부 "증류+링크" 원칙 준수 — 크롭계수 등 마운트 의존 수치는 공식만 적고 숫자 하드코딩 금지(카메라 마운트 미확정 원칙, Phase 1부터 유지)
- 스타트레일 페이지는 이 책의 핵심 세팅(단일프레임 15~20초)과 촬영 전략이 근본적으로 다름을 페이지 최상단 ⚠️ 콜아웃으로 명시해 독자가 혼동하지 않도록 함
- 배포 사이트 최종 확인은 오케스트레이터가 사용자로부터 위임("대신 확인해줘")받아 CI 상태·8개 신규 페이지 HTTP 200·구 URL 404·콘텐츠 스팟체크·사이드바 TOC를 직접 검증하는 방식으로 진행

## Deviations from Plan

None - plan executed exactly as written. (Task 3의 checkpoint:human-verify는 계획대로 사람 확인 게이트로 동작했고, 검증 자체는 사용자 위임에 따라 오케스트레이터가 대행함 — 별도 auto-fix 없음.)

## Issues Encountered

None.

## User Setup Required

None - no external service configuration required. (GitHub Pages 배포 파이프라인은 Phase 1(01-05)에서 이미 구성 완료됨.)

## Next Phase Readiness

- MongolPhoto book v1 콘텐츠 완결(content-complete) — 전체 7부(gear/fundamentals/practice/mongolia/postprocessing/bonus/appendix) + 목차가 GitHub Pages에 배포·검증됨.
- 로드맵상 후속 phase 없음 — 이 plan 완료로 마일스톤 v1 종료.
- 남은 잠재 작업(계획 범위 외): 실제 몽골 여행(8/13~8/17) 후 사진으로 개인 사례 보강 여부는 향후 별도 결정 사항(현재 로드맵엔 없음).

---
*Phase: 06-부록-보너스-배포검증*
*Completed: 2026-07-10*
