---
phase: 30-storyboard-content
plan: 03
subsystem: docs
tags: [mdbook, storyboard, drone-video, honesty-labeling, cross-linking]

# Dependency graph
requires:
  - phase: 29-storyboard-assets-scaffold
    provides: "2부 6-storyboards 그룹 스캐폴드(랜딩+장비 대조표+스텁 6), 리사이즈된 스토리보드 이미지 7종"
provides:
  - "바가가즈링 촐로·바양작 통합 스토리보드 실 콘텐츠(샷 리스트·설정·동선·편집·BGM, 원본 이미지 전사)"
  - "4부 field-day.md 세 카메라 오케스트레이션 절에 통합 4종 역링크('실제 적용 사례')"
  - "SB-02 완결: 통합 4종(홍고린·욜링암·바가·바양작) 계획↔4부 실전 운용 양방향 연결"
affects: [31-final-crosslinks-and-gate]

# Tech tracking
tech-stack:
  added: []
  patterns: ["Task 1/2와 동일한 통합 페이지 구조(30-01/30-02 승계): 도입 → 이미지 임베드+정직캡션 → 샷 리스트(섹션별 표, 컷별 카메라 표기) → 촬영 설정(Mini 4 Pro 기재/5 Pro 재확인) → 세 카메라 운용/동선(4부 상향 링크) → 편집 흐름 → BGM → 정직성 안내 → 관련 페이지"]

key-files:
  created: []
  modified:
    - src/2-drone/6-storyboards/baga-gazriin-chuluu.md
    - src/2-drone/6-storyboards/bayanzag.md
    - src/4-workflow/field-day.md

key-decisions:
  - "바양작 원본 스토리보드 컷 번호 06 결번을 임의로 재번호 매기지 않고 있는 그대로(05→07) 전사 — 전사 정직성 우선"
  - "바가·바양작 밤 파트(별/은하수) 촬영법은 재설명 없이 3부 field-workflow.md·finding-the-milkyway.md로 승계, 스토리보드 참고 설정값만 촬영 설정 절에 병기"
  - "field-day.md 역링크를 인라인 문장 대신 불릿 리스트로 삽입 — 4개 링크를 개별 그렙 매치 라인으로 명확히 분리해 검증 가능성 확보"

patterns-established:
  - "명소 참고 페이지 경로는 ../2-sites/<name>.md(2-drone/2-sites, 1-travel/2-sites와 별개)로 확인·유지"

# Metrics
duration: ~15min
completed: 2026-07-21
---

# Phase 30 Plan 03: 바가가즈링 촐로·바양작 통합 스토리보드 + field-day 역링크 Summary

**바가가즈링 촐로(28컷)·바양작(약 30컷, 원본 컷 06 결번 전사) 통합 스토리보드를 원본 이미지에서 그대로 전사해 채우고, 4부 field-day.md "세 카메라 오케스트레이션" 절에 통합 4종("실제 적용 사례") 역링크를 삽입해 SB-02를 완결했다.**

## Performance

- **Duration:** ~15분
- **Tasks:** 3/3 완료
- **Files modified:** 3 (baga-gazriin-chuluu.md, bayanzag.md, field-day.md)

## Accomplishments
- 바가가즈링 촐로 통합 페이지: `~/share/mongol2/4.바가가즐링촐로.png`에서 28컷 샷 리스트(6개 섹션)·촬영 설정·주요 포인트 동선·편집 흐름·BGM을 전사, 컷별 카메라(드론/지상 R7) 표기, 콘셉트 이미지 임베드 + 정직 캡션
- 바양작 통합 페이지: `~/share/mongol2/8.바양작.png`에서 샷 리스트(6개 섹션, 원본 컷 06 결번 있는 그대로 전사)·촬영 설정·동선·편집 흐름·BGM 전사, 밤 은하수/별 궤적 파트는 3부 링크로 승계(재설명 없음)
- 4부 field-day.md "세 카메라 오케스트레이션" 절(우선순위 규칙 예시 문단 뒤·전환 규칙 앞)에 "실제 적용 사례" 역링크 4개(홍고린엘스·욜링암·바가가즈링 촐로·바양작) 삽입 — SB-02의 계획↔4부 실전 운용 양방향 연결 완결
- mdbook 빌드 그린(exit 0), 이 플랜 변경 3파일 기준 내부 링크 스캔 dead 0

## Task Commits

Each task was committed atomically:

1. **Task 1: 바가가즈링 촐로 통합 스토리보드 콘텐츠 전사 + field-day 상향 링크** - `e58e308` (feat)
2. **Task 2: 바양작 통합 스토리보드 콘텐츠 전사 + field-day 상향 링크** - `9d1bfa1` (feat)
3. **Task 3: 4부 field-day.md에 통합 스토리보드 4종 역링크 삽입 + 빌드/링크 게이트** - `edc10d4` (docs, 최초 시도 cde4ad3은 병행 실행 중이던 30-01 커밋에 잘못 병합됐다가 d7480d7에서 30-01 쪽이 되돌려 정상 귀속됨 — "Deviations" 참고)

**Plan metadata:** 이 SUMMARY 커밋(다음 커밋)

_Note: TDD 아님 — 콘텐츠 전사·문서 편집 플랜._

## Files Created/Modified
- `src/2-drone/6-storyboards/baga-gazriin-chuluu.md` - 스텁 → 28컷 샷 리스트·촬영 설정·세 카메라 운용/동선(4부 상향 링크)·편집 흐름·BGM 실 콘텐츠
- `src/2-drone/6-storyboards/bayanzag.md` - 스텁 → 샷 리스트·촬영 설정·세 카메라 운용/동선(4부 상향 링크)·편집 흐름·BGM 실 콘텐츠, 밤 파트 3부 승계
- `src/4-workflow/field-day.md` - "세 카메라 오케스트레이션" 절에 통합 스토리보드 4종 역링크("실제 적용 사례") 삽입

## Decisions Made
- 바양작 원본의 컷 번호 결번(06)을 임의 보정하지 않고 그대로 전사 — 페이지 도입부에 이 사실을 명시해 독자 혼란 방지
- field-day.md 역링크는 인라인 문장이 아니라 불릿 리스트로 삽입 — 플랜의 grep -c 검증(4개 링크 = 4)이 라인 단위로 정확히 매치되도록 함
- 지상 촬영 컷은 원본이 카메라 아이콘만 표기(짐벌/폰 구분 없음)하므로 전부 "지상(R7)"로 통일 표기하고, 짐벌·폰은 각 페이지 촬영 설정/정직성 안내에서 참고만/미확인으로 별도 명시

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 3 - Blocking] field-day.md 역링크를 불릿 리스트로 재구성**
- **Found during:** Task 3
- **Issue:** 플랜 예시 문구대로 4개 링크를 한 문장에 인라인으로 넣으면 검증 커맨드 `grep -c "...패턴..." field-day.md`가 매치 라인 수(1)를 반환해 성공 기준 "= 4"를 충족하지 못함
- **Fix:** 동일한 "실제 적용 사례" 문단은 유지하되 4개 링크를 불릿 리스트로 분리해 라인당 하나씩 배치, grep -c가 정확히 4를 반환하도록 함(가독성도 개선)
- **Files modified:** src/4-workflow/field-day.md
- **Verification:** `grep -c "6-storyboards/khongoryn-els.md\|6-storyboards/yolyn-am.md\|6-storyboards/baga-gazriin-chuluu.md\|6-storyboards/bayanzag.md" src/4-workflow/field-day.md` → 4
- **Committed in:** edc10d4

**2. [Rule 3 - Blocking] 병행 실행 중이던 30-01 플랜과의 git 스테이징 경합 — field-day.md가 일시적으로 30-01 커밋에 잘못 편입**
- **Found during:** Task 3 커밋 단계
- **Issue:** 이 플랜(30-03)과 30-01이 같은 wave(depends_on: [])에서 동시 실행 중이었다. `git add src/4-workflow/field-day.md`로 스테이징한 직후, 병행 실행 중이던 30-01 에이전트가 `tsagaan-suvarga.md` 커밋을 만들면서 이미 스테이징돼 있던 field-day.md까지 함께 커밋해버렸다(최초 커밋 cde4ad3, 메시지는 "docs(30-01): 차강소브라 드론 영상 스토리보드 콘텐츠 전사"). 이후 이 플랜에서 `git commit`을 실행했을 때는 이미 스테이징된 변경이 없어 "no changes added to commit"으로 실패했다.
- **해소:** 30-01 쪽 에이전트가 스스로 범위 밖 커밋임을 인지하고 `fix(30-01): field-day.md 범위 밖 변경 커밋 되돌림`(d7480d7)으로 되돌리면서 작업 트리의 미커밋 변경(내 field-day.md 수정 내용)은 그대로 보존했다. 이후 이 플랜에서 재확인 후 정상적으로 30-03 소유 커밋(`edc10d4`)으로 커밋을 완료했다 — 최종적으로 커밋 귀속 문제 없이 해소됨.
- **Files modified:** src/4-workflow/field-day.md
- **Verification:** `git show --stat edc10d4`로 field-day.md만 포함된 단일 커밋 확인, `git diff src/4-workflow/field-day.md` 결과 없음(정상 커밋 완료), mdbook build exit 0, 링크 스캔 dead 0
- **Committed in:** edc10d4

---

**Total deviations:** 2 auto-fixed (Rule 3 — 둘 다 검증/커밋 절차상 블로킹 이슈, 콘텐츠 정확성에는 영향 없었고 최종적으로 커밋 귀속도 정상 해소됨)
**Impact on plan:** 콘텐츠·커밋 모두 계획대로 정확히 반영됨. Wave 1 병행 실행 중 일시적 git 경합이 있었으나 30-01 에이전트의 자체 정정으로 완전히 해소됐다.

## Issues Encountered
- 병행 실행 중인 30-01 플랜과의 git 스테이징 경합(위 Deviation 2) — 최종적으로 정상 해소됨, 콘텐츠 손실이나 충돌 없음.

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- SB-02 완결: 통합 스토리보드 4종(홍고린엘스·욜링암·바가가즈링 촐로·바양작) 모두 세 카메라 통합 계획 + 4부 상향 링크를 갖추고, field-day.md에 통합 4종 역링크가 존재 — 단, 홍고린엘스·욜링암 자체 콘텐츠는 30-02가 채울 예정(이 플랜은 그 두 페이지의 스텁 경로만 참조, 아직 스텁 상태일 수 있음)
- Phase 31(wave 2, 최종 게이트)에서 30-01·30-02·30-03 전체 산출물을 대상으로 전체 링크 게이트·SB-03(은하수 3부 배치)를 마저 진행해야 함
- 동시 실행(wave 병렬) 시 git add/commit 경합 가능성 확인됨(위 Deviation 2, 최종 해소됨) — Phase 31 오케스트레이션에서 plan별 커밋 타이밍을 순차화하거나 파일 잠금을 고려하면 이런 경합을 예방할 수 있음

---
*Phase: 30-storyboard-content*
*Completed: 2026-07-21*
