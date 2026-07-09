---
phase: 03-야외에서-연습할-사항
plan: 01
subsystem: content
tags: [mdbook, korean-guide, astrophotography, field-practice]

# Dependency graph
requires:
  - phase: 02-집에서-연습할-사항
    provides: home-*.md 패턴(지침체·이론 링크·template.md 포워드링크), template.md 연습 로그 양식
  - phase: 01-mdbook·장비·기초
    provides: 02-fundamentals 이론 페이지(finding-the-milkyway, field-workflow, focusing, 500-npf-rule), 01-gear 페이지(accessories, checklist)
provides:
  - FIELD-01/02/03 야외 연습 페이지 3개(src/03-practice/field-practice.md, field-prep-and-hazards.md, field-review.md)
  - SUMMARY.md 2부 야외 placeholder를 3개 실제 링크로 교체
  - finding-the-milkyway.md·index.md의 개인/날짜 스테일 참조(7/17·서해안 연습·연습 N차) 정리
  - 끊어져 있던 이슬 링크를 field-prep-and-hazards.md로 리다이렉트
  - home-checklist.md의 잘못된 "3부" 포인터를 field-practice.md 링크로 정정
affects: [04-후보정-연습, 05-몽골-여행지별-촬영-가이드]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "field-*.md는 home-*.md와 동일한 미러 패턴: 오프닝에서 이론 링크 → 야외 리허설 델타만 서술 → template.md 포워드 링크"
    - "field-review.md는 증상→확인/원인→다음개선 3열 표로 세션 후 복기 루프를 구성(사전 능력체크와 구분)"

key-files:
  created:
    - src/03-practice/field-practice.md
    - src/03-practice/field-prep-and-hazards.md
    - src/03-practice/field-review.md
  modified:
    - src/SUMMARY.md
    - src/02-fundamentals/finding-the-milkyway.md
    - src/02-fundamentals/index.md
    - src/03-practice/home-checklist.md

key-decisions:
  - "field-practice.md는 셔터 상한 숫자를 하드코딩하지 않고 500-npf-rule.md/home-camera-controls.md에서 이미 계산한 독자 값 재사용 + LCD 100% 실측 관점으로 델타 추가"
  - "field-review.md는 HOME-03(집 연습 체크리스트)의 '할 수 있다/안다' 문구를 복붙하지 않고, 증상→원인확인→다음개선 표 형식의 세션 후 복기 루프로 별도 설계"
  - "이슬 링크는 field-workflow.md(이슬 언급 0회로 끊어진 링크였음)에서 새로 만든 field-prep-and-hazards.md(이슬 2회 언급)로 리다이렉트"

patterns-established:
  - "야외 연습 3페이지 모두 지명·날짜 하드코딩 없이 '근교 어두운 곳', '차로 30분~1시간' 같은 일반 서술 사용"

# Metrics
duration: 7min
completed: 2026-07-09
---

# Phase 3 Plan 01: 야외에서 연습할 사항 (FIELD-01/02/03) Summary

**신규 야외 연습 페이지 3개(field-practice/field-prep-and-hazards/field-review) 작성 + SUMMARY 2부 placeholder flip + fundamentals의 개인/날짜 스테일 참조 5곳과 끊어진 이슬 링크 정리 + home-checklist 3부 오표기 정정**

## Performance

- **Duration:** 7 min
- **Started:** 2026-07-09T16:10:00+09:00
- **Completed:** 2026-07-09T16:17:03+09:00
- **Tasks:** 2
- **Files modified:** 7 (3 created, 4 modified)

## Accomplishments

- Phase 2(집 연습)의 자매편인 야외 연습 가이드 3편 완성 — 실전 노출·초점·구도(FIELD-01), 야외 준비·현장 워크플로 리허설(FIELD-02), 세션 후 관찰·진단·개선 복기(FIELD-03)
- SUMMARY.md 2부의 미완성 `- [야외에서 연습하기]()` placeholder를 3개 실제 링크로 교체해 사이드바 탐색 가능하게 만듦
- Phase 2가 남긴 IOU 해소 — finding-the-milkyway.md의 5개 개인/날짜 참조(7/17, 서해안 연습, 연습 N차)를 일반 서술로 교체, index.md의 같은 계열 참조 1곳 수정
- field-workflow.md를 가리키던 끊어진 이슬 링크를 실제로 이슬을 다루는 field-prep-and-hazards.md로 리다이렉트
- home-checklist.md가 야외 연습을 "3부"(몽골)로 잘못 가리키던 오표기를 정정하고 같은 2부의 field-practice.md로 연결

## Task Commits

Each task was committed atomically:

1. **Task 1: 야외 연습 3개 페이지 작성 (FIELD-01/02/03)** - `24986d3` (feat)
2. **Task 2: SUMMARY flip + finding-the-milkyway/index 스테일 참조 정리 + 이슬 링크 리다이렉트 + home-checklist 오표기 정정** - `c55f9e8` (fix)

**Plan metadata:** (다음 커밋에서 기록)

## Files Created/Modified

- `src/03-practice/field-practice.md` - FIELD-01: 실전 노출/초점/구도 야외 리허설, LCD 100% 확대 별 흐름 실측이 핵심 델타
- `src/03-practice/field-prep-and-hazards.md` - FIELD-02: 7단계 워크플로를 통째로 링크 + 이슬/바람/배터리/안전/이동 리허설 레이어
- `src/03-practice/field-review.md` - FIELD-03: 증상→확인/원인→다음개선 표 기반 세션 후 복기 루프, template.md "다음 세션 개선 사항"으로 브리지
- `src/SUMMARY.md` - 2부 야외 placeholder 1줄 → 3줄 실제 링크 (타 섹션 무변경)
- `src/02-fundamentals/finding-the-milkyway.md` - 개인/날짜 참조 5곳 일반화 + 이슬 링크 리다이렉트
- `src/02-fundamentals/index.md` - "서해안 연습" → "야외 연습"
- `src/03-practice/home-checklist.md` - "야외 연습(3부)로" → "[야외 연습](field-practice.md)으로"

## Decisions Made

- field-practice.md의 크롭 셔터 상한은 숫자를 하드코딩하지 않고 독자가 이미 계산해 둔 값(500-npf-rule.md/home-camera-controls.md)을 재사용하는 방식 유지 — Phase 2와 동일 원칙.
- field-review.md는 home-checklist.md의 능력 체크 문구를 절대 재사용하지 않고, "증상 → 확인/원인 → 다음 개선" 3열 표를 새로 설계해 세션 **후** 복기 루프임을 구조적으로 구분.
- 이슬 링크는 field-workflow.md(이슬 언급 0회로 원래부터 끊어진 링크)가 아니라 새로 만든 field-prep-and-hazards.md(이슬 2회 언급)로 리다이렉트.

## Deviations from Plan

None - plan executed exactly as written. Task 2의 (E) home-checklist.md 3부 오표기 정정은 plan에 이미 명시된 항목으로, 별도 발견된 이슈가 아니라 계획된 작업이었다.

## Issues Encountered

None.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- Phase 3(야외에서 연습할 사항)의 FIELD-01/02/03이 모두 완료되어 2부(가기 전 연습)가 "집 연습 → 야외 연습"으로 완결됨.
- `mdbook build src`가 dangling link 경고 없이 exit 0으로 성공 — 새 링크(field-practice.md, field-prep-and-hazards.md, field-review.md)와 리다이렉트된 이슬 링크 모두 유효.
- Phase 4(후보정 연습)는 별도 준비 없이 착수 가능. Phase 5(몽골 여행지별 촬영 가이드)는 여전히 실제 여행(8/13~8/17) 이후에만 착수 가능(무변경).
- 남은 개인화 잔재: `src/04-mongolia/`(3부, 개인 Day 페이지)는 이번 plan 범위 밖으로 의도적으로 손대지 않음 — Phase 5에서 일반 "여행지별 가이드"로 재구성 예정(기존 계획대로).

---
*Phase: 03-야외에서-연습할-사항*
*Completed: 2026-07-09*
