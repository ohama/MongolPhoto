---
phase: 10-드론-참고-자료
plan: 01
subsystem: docs
tags: [mdbook, drone-regulations, caam, honesty-constraint]

# Dependency graph
requires:
  - phase: 09-drone
    provides: "09-drone/index.md 규제 요약 절(요약본)이 이 상세 페이지로 역링크"
provides:
  - "src/08-references/drone-mongolia-regulations.md: 몽골 드론 규제 원출처 링크 + 확인/미확인 명확 구분 표 + CAAM 직접 확인 안내 + 09-drone 역링크"
affects: [10-드론-참고-자료-02, 10-드론-참고-자료-03]

# Tech tracking
tech-stack:
  added: []
  patterns: ["확인된 사실/미확인 시각적 2분할 절(헤딩+표) 정직성 패턴 — DREF-02/03에도 재사용 가능"]

key-files:
  created: []
  modified:
    - src/08-references/drone-mongolia-regulations.md

key-decisions:
  - "propelrc.com은 10-RESEARCH.md에서 2회 접속 실패로 기록되어 있어 완전히 제외(도메인명 자체를 본문에서 언급하지 않음)하여 grep 기반 검증을 확실히 통과시킴"
  - "국립공원 드론 특칙은 CAAM 원문이 아닌 특별보호구역법 PDF만 '링크 생존 확인, 내용 미확인'으로 인용 — 국립공원 특칙 내용을 지어내지 않음"

patterns-established:
  - "확인된 사실(헤딩) vs 미확인(헤딩+블록쿼트 경고) 시각 분리 패턴 — 표로 항목 나열, 각 미확인 항목에 CAAM 연락처 재확인 안내 동반"

# Metrics
duration: ~10min
completed: 2026-07-13
---

# Phase 10 Plan 01: 몽골 드론 규제 참고 페이지 Summary

**CAAM Part 101/102 원출처 PDF 기반 확인된 사실(주간·VLOS·120m·공항 4km·25kg)과 등록비·처리기간·250g 면제·국립공원 특칙 미확인 항목을 별도 절로 시각 분리한 정직성 중심 참고 페이지**

## Performance

- **Duration:** ~10 min
- **Completed:** 2026-07-13T05:08:17Z
- **Tasks:** 1/1
- **Files modified:** 1

## Accomplishments
- drone-mongolia-regulations.md 스텁을 교체해, CAAM Part 101/102 원출처 PDF 링크와 함께 확인된 운용 규칙(주간만·VLOS·120m·공항 4km·동의 필요·25kg)을 표로 단정 서술
- 등록비 ₮30,000·처리기간 5일·250g 면제·국립공원(욜링암·홍고린엘스) 드론 특칙을 별도 "⚠️ 미확인" 절(경고 인용구 + 표)로 분리하고, 각 항목에 CAAM(ops@mcaa.gov.mn, +976-11-285013) 직접 확인 안내를 붙임
- 2026-07-13 기준 날짜 디스클레이머 추가, propelrc.com은 완전 제외, drone-laws.com만 "미확인과 동일 성격" 캐비어트와 함께 참고로 포함
- ../09-drone/index.md로 역링크(왕복), 09-drone/index.md의 규제 요약은 재서술하지 않음

## Task Commits

1. **Task 1: 몽골 드론 규제 참고 페이지 (drone-mongolia-regulations.md)** - `8847b65` (feat)

**Plan metadata:** (본 SUMMARY 커밋에서 생성)

## Files Created/Modified
- `src/08-references/drone-mongolia-regulations.md` - 스텁 → 확인/미확인 분리 규제 참고 페이지로 전면 작성

## Decisions Made
- propelrc.com은 본문에서 도메인명조차 언급하지 않고 완전 제외(plan verify의 `grep -c "propelrc" == 0` 엄격 충족) — "부득이 언급 시 접속 확인 필요 표기" 옵션 대신 완전 배제를 선택
- 국립공원 드론 특칙은 특별보호구역법 PDF를 "링크 생존만 확인, 내용은 미확인"으로 정확히 한정해 인용 — 국립공원 관련 어떤 수치·절차도 확정 서술하지 않음
- mcaa.gov.mn 포털과 /page/mayagt 서식 페이지는 "존재는 확인, 콘텐츠는 미확인"으로 정확히 구분해 서술(10-RESEARCH.md의 확인 수준 그대로 반영)

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
None.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness
- src/08-references/drone-mongolia-regulations.md 완성, ../09-drone/index.md와 상호 링크 정상, mdbook build src exit 0 확인
- 10-02(DJI 사양·튜토리얼), 10-03(항공사진 갤러리) plan이 병렬로 다른 08-references 파일을 다루므로 이 페이지에는 영향 없음
- 특이 블로커 없음

---
*Phase: 10-드론-참고-자료*
*Completed: 2026-07-13*
