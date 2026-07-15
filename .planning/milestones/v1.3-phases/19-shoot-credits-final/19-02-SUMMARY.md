---
phase: 19-shoot-credits-final
plan: 02
subsystem: testing
tags: [mdbook, link-integrity, build-gate, quality]

# Dependency graph
requires:
  - phase: 19-01
    provides: "shoot-for-edit.md·credits.md 완성본(2부 마지막 콘텐츠) — 게이트가 검사할 최종 대상"
  - phase: 14
    provides: "v1.2 '전수·dead 0' 링크 게이트 선례(483 links) — v1.3로 이행"
provides:
  - "책 전체 mdbook build 그린 확인(create-missing=false, SUMMARY dead 1차 방어)"
  - "src/**/*.md 내부 링크 전수 스캔 dead=0(591 links, 본문 prose 2차 방어)"
  - "19-LINK-CHECK.md 리포트(빌드 결과·총 링크 수·dead 분류·PASS 판정)"
affects: [complete-milestone, v1.3-release]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "이중 방어 링크 게이트: mdbook build(SUMMARY dead) + 파이썬 regex 전수 스캔(prose dead)"
    - "게이트 wave 2 직렬화(depends_on 콘텐츠 wave) — false-PASS 방지"

key-files:
  created:
    - ".planning/phases/19-shoot-credits-final/19-LINK-CHECK.md"
  modified: []

key-decisions:
  - "regex 원시 히트 4건 전수 공개·분류 후 판정: 실질 dead 내부 링크 0 → PASS"
  - "각괄호 래핑 외부 링크(<url>)는 플랜의 외부 제외 규칙 대상 — 스크립트에 <> 스트립 반영(TOTAL 593→591)"
  - "introduction.md 인라인코드 예시·template.md 스캐폴드 자리표시자는 의도된 문서(v1.0/v1.1부터 존재, v1.3 무관) — 콘텐츠 미편집"

patterns-established:
  - "링크 스캔은 판정 전 히트를 파일·링크·해석경로로 분류해 false-positive(코드블록·외부·의도된 자리표시자)를 걸러낸다"

# Metrics
duration: 8 min
completed: 2026-07-15
---

# Phase 19 Plan 02: 책 전체 최종 빌드·링크 게이트 Summary

**책 전체 mdbook build 그린 + src/**/*.md 내부 링크 591개 전수 스캔 dead=0 — v1.3 콘텐츠(Phase 15~19-01) 이후 빌드·링크 정합성 최종 게이트 PASS**

## Performance

- **Duration:** ~8 min
- **Started:** 2026-07-15
- **Completed:** 2026-07-15
- **Tasks:** 2
- **Files modified:** 1 (리포트만 — 콘텐츠 미편집)

## Accomplishments
- 책 전체 `/opt/homebrew/bin/mdbook build src` 그린(exit 0, ERROR/WARN 0줄). create-missing=false라 SUMMARY의 모든 챕터 링크가 디스크 실재함이 1차 방어로 확인됨.
- `src/**/*.md` 82개 파일 내부 링크 전수 스캔: TOTAL_INTERNAL_LINKS=591(>0, 빈 스캔 아님), 실질 dead=0. v1.2 Phase 14의 "483 links, dead 0" 게이트를 591 links로 이행.
- regex 원시 히트 4건을 전수 공개·분류(외부 각괄호 래핑 2 + 의도된 자리표시자 2) — silent-pass 없이 투명하게 기록.
- `docs/`는 빌드 후 `git restore`·`git clean`으로 복원(미커밋 확인), 콘텐츠 파일 미편집(files_modified=[]), 리포트만 개별 스테이징 커밋.

## Task Commits

1. **Task 1: 책 전체 mdbook build 그린 + docs/ 복원·정리** — 코드/콘텐츠 커밋 없음(빌드 검증만; docs/ 복원)
2. **Task 2: 내부 링크 전수 스캔 + LINK-CHECK 리포트 작성·커밋** — `d1170c3` (docs)

**Plan metadata:** 본 SUMMARY와 함께 별도 docs 커밋으로 캡처.

## Files Created/Modified
- `.planning/phases/19-shoot-credits-final/19-LINK-CHECK.md` - 책 전체 빌드 결과 + 내부 링크 전수 스캔 리포트(TOTAL=591, dead=0, 원시 히트 4건 분류, PASS 판정)

## Decisions Made
- **판정 방식:** regex 원시 히트 4건을 각각 파일·링크·해석경로로 분류. 어느 것도 실질 dead 내부 콘텐츠/내비게이션 링크가 아니어서 PASS. (강제 script-only 판정은 false-FAIL을 낳으므로, 플랜의 "외부 제외" 의도에 맞춰 각괄호 외부 링크를 정확히 제외.)
- **각괄호 래핑 외부 링크:** `[text](<https://…>)` 형태 2건(drone-galleries.md)은 플랜의 외부 제외 규칙 대상. 스크립트에 `<>` 스트립을 반영해 TOTAL 593→591로 정정.
- **의도된 자리표시자 2건:** introduction.md는 인라인코드 백틱 내부 예시(`파일명`=filename, mdbook이 리터럴 코드로 렌더 — 링크 아님), template.md는 "연습 로그 템플릿"의 채워넣기 스캐폴드(`session-N/xxx.jpg`). 둘 다 v1.0/v1.1부터 존재, v1.3 Phase 19와 무관, 직전 모든 마일스톤 게이트 통과 패턴. 콘텐츠 미편집 원칙에 따라 미수정.

## Deviations from Plan

### 스캔 스크립트 정정 (콘텐츠 미편집 — 판정 정확도 향상)

**1. [Rule 1 - 스캔 정확도] 각괄호 래핑 외부 링크 제외 반영**
- **Found during:** Task 2 (전수 스캔)
- **Issue:** 플랜 제공 스크립트가 외부 제외를 `startswith(http://,https://)`로만 판단 → `[text](<https://…>)` 각괄호 래핑 외부 링크 2건을 dead로 오탐(원시 히트 4).
- **Fix:** 스크립트에 `target`이 `<…>`면 각괄호 스트립 후 외부 판정하도록 보강(플랜의 "외부 제외" 명시 규칙에 부합). TOTAL 593→591, 오탐 2건 제거.
- **Files modified:** (scratchpad 스크립트만 — 콘텐츠·리포트 판정에 반영. src/ 콘텐츠 미편집)
- **Verification:** 재실행 시 두 Wikimedia URL이 제외됨.
- **Committed in:** (스크립트는 scratchpad, 결과는 d1170c3 리포트에 기록)

---

**Total deviations:** 1 (스캔 스크립트 외부-제외 정확도 보강 — 플랜의 명시 규칙 이행). 콘텐츠·docs 미편집, scope creep 없음.

## Issues Encountered
없음(빌드 실패·실질 dead 링크 없음). 원시 regex 히트 4건은 전부 분류·설명됨(외부 2, 의도된 자리표시자 2) — 실질 결함 아님.

## User Setup Required
없음 — 외부 서비스 설정 불필요.

## Next Phase Readiness
- **최종 게이트 PASS.** v1.3 "2부 · 여행 사진 보정" 전체 콘텐츠(Phase 15~19) 작성 후 책 전체 빌드·링크 정합성 확인 완료. 성공 기준 3 충족.
- Phase 19 완료(2/2 plans), 즉 v1.3 마일스톤 마지막 phase 완료 → `/gsd:complete-milestone` 준비됨.
- 잔여 과제(비블로킹): 트립(8/13) 후 실제 몽골 촬영본으로 CC0/무료 이미지 교체, in-app 스크린샷·원화 요금·렌즈 프로파일 재확인(STATE Blockers 유지).
- 참고: introduction.md·template.md의 의도된 이미지 자리표시자 2건은 문서 설계 패턴(수정 불필요)이나, 향후 실제 이미지 채움 시 자연 해소됨.

---
*Phase: 19-shoot-credits-final*
*Completed: 2026-07-15*
