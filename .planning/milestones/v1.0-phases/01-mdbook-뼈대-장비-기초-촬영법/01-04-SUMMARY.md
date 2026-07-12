---
phase: 01-mdbook-뼈대-장비-기초-촬영법
plan: 04
subsystem: docs
tags: [mdbook, korean-content, astrophotography, raw, white-balance, milky-way, bortle, moon-phase, field-workflow, practice-log]

# Dependency graph
requires:
  - phase: 01-01
    provides: mdBook 뼈대, SUMMARY.md 구조, 02-fundamentals/·03-practice/ 스텁 파일
provides:
  - src/02-fundamentals/raw-and-wb.md (FUND-04: RAW 촬영 이유 + 야간 화이트밸런스 시작값)
  - src/02-fundamentals/finding-the-milkyway.md (FUND-05: 계절/시간/방향/달/Bortle/날씨 6요소 타이밍 체크리스트)
  - src/02-fundamentals/field-workflow.md (FUND-06: 도착→구도→세팅→초점→촬영 7단계 현장 워크플로)
  - src/03-practice/template.md (PRAC-01: 독자에게 공개된 복사용 연습 로그 템플릿)
affects: [02-practice-logs, 04-mongolia]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "연습 로그 템플릿을 fenced code block(```markdown)으로 감싸 복사-붙여넣기 가능한 리터럴 텍스트로 제공 — 실제 이미지 파일은 생성하지 않고 상대경로 예시만 표기"
    - "타이밍/환경 판단이 필요한 챕터(은하수 찾기)는 체크박스 목록으로 마무리해 독자가 자가 진단하도록 구성"

key-files:
  created: []
  modified:
    - src/02-fundamentals/raw-and-wb.md
    - src/02-fundamentals/finding-the-milkyway.md
    - src/02-fundamentals/field-workflow.md
    - src/03-practice/template.md

key-decisions:
  - "달 위상·Bortle 수치는 FEATURES.md를 그대로 인용 (재도출 없음): 7/17 ≈13% 초승달, 8/12 신월→몽골 8/13~17 전체가 신월 직후 구간; 국내 Bortle 5-8 vs 고비 Bortle 1-2"
  - "PhotoPills/Stellarium은 01-gear/accessories.md에서 소개된 것을 전제로 finding-the-milkyway.md에서 '운영적으로'만 재사용 — 앱 자체 설명 재작성 없음"
  - "field-workflow.md는 새 개념을 만들지 않고 exposure-basics/500-npf-rule/focusing/raw-and-wb/finding-the-milkyway 5개 페이지를 순서대로 상호참조하는 절차 허브로 설계"
  - "04-postprocessing은 아직 실제 파일이 없는 draft SUMMARY 항목이므로 raw-and-wb.md에서 하이퍼링크로 걸지 않고 텍스트로만 언급 (깨진 링크 방지)"

patterns-established:
  - "체크리스트형 페이지(finding-the-milkyway.md)와 번호 절차형 페이지(field-workflow.md)를 구분해 사용 — 판단이 필요한 내용은 체크박스, 순서가 중요한 내용은 번호 목록"

# Metrics
duration: ~15min
completed: 2026-07-09
---

# Phase 01 Plan 04: RAW·화밸 + 은하수 타이밍 + 현장 워크플로 + 연습 로그 템플릿 Summary

**RAW/야간 화밸 기초, 계절·시간·방향·달·Bortle·날씨 6요소 은하수 타이밍 체크리스트(7/17·8/12 달 위상, 고비 Bortle 1-2 인용), 7단계 현장 워크플로, 복사해 쓰는 연습 로그 템플릿을 담은 촬영 기초 파트 나머지 절반 + 1부 마지막 페이지 작성**

## Performance

- **Duration:** ~15 min
- **Started:** 2026-07-09T04:35:00Z (approx.)
- **Completed:** 2026-07-09T04:49:52Z
- **Tasks:** 2
- **Files modified:** 4

## Accomplishments
- FUND-04: RAW가 JPEG 대비 화밸/노출/노이즈에서 갖는 후보정 관용도를 표로 비교, 야간 수동 화이트밸런스 시작값(3800~4200K) 제시, AWB가 야간에 프레임마다 색감이 튀는 이유 설명, 편집 소프트웨어 Win/Mac 병기
- FUND-05: 은하수 코어를 "오늘 찍을 수 있나?" 판단 체크리스트 6요소(계절·시간/방향·고도/달 위상/Bortle/날씨/종합)로 구성, FEATURES.md의 7/17 ≈13% 초승달·8/12 신월(몽골 8/13~17 전체 유리)·고비 Bortle 1-2 vs 국내 5-8을 그대로 인용, PhotoPills·Stellarium을 이미 소개된 앱으로 전제하고 운영적으로만 재사용
- FUND-06: 도착·암순응→삼각대→구도→세팅→초점→시험촬영→본촬영 7단계 번호 워크플로를 작성하고 앞선 5개 기초 페이지를 순서대로 상호참조하는 허브 역할로 설계
- PRAC-01: `03-practice/template.md`를 독자에게 공개된 실제 페이지로 발행 — 짧은 사용법 안내 + fenced code block 안에 목표/장비·세팅/촬영환경/결과사진/배운점·문제점/다음 세션 개선 6개 섹션을 복사-붙여넣기 가능한 리터럴 템플릿으로 제공, "다음 세션 개선"이 다음 세션 "목표"로 이어지는 구조를 명시

## Task Commits

Each task was committed atomically:

1. **Task 1: RAW·화이트밸런스 (FUND-04) + 은하수 찾기·타이밍 (FUND-05)** - `7e0f458` (feat)
2. **Task 2: 현장 워크플로 (FUND-06) + 연습 로그 템플릿 (PRAC-01)** - `dcfa3ea` (feat)

**Plan metadata:** (this commit)

## Files Created/Modified
- `src/02-fundamentals/raw-and-wb.md` - RAW 촬영 이유(JPEG 비교 표), 야간 WB 시작값, AWB 한계, 편집SW Win/Mac 메모 (33 lines)
- `src/02-fundamentals/finding-the-milkyway.md` - 계절/시간/방향/달/Bortle/날씨 6요소 체크리스트 + 종합 자가진단 체크박스 (51 lines)
- `src/02-fundamentals/field-workflow.md` - 도착→구도→세팅→초점→촬영 7단계 번호 워크플로, 5개 기초 페이지 상호참조 (52 lines)
- `src/03-practice/template.md` - 사용법 안내 + 복사용 6섹션 템플릿(fenced code block), 이미지는 상대경로 예시만 (44 lines)

## Decisions Made
- 달 위상·Bortle 수치는 FEATURES.md를 그대로 인용해 재도출하지 않음 (7/17 ≈13% 초승달, 8/12 신월, 고비 Bortle 1-2 vs 국내 5-8)
- PhotoPills/Stellarium은 01-gear/accessories.md에서 이미 소개된 것으로 전제하고 finding-the-milkyway.md에서는 사용법만 서술(재소개 없음) — 01-RESEARCH.md Pattern 2 준수
- 04-postprocessing/index.md는 아직 실제 파일 없이 SUMMARY.md에 draft 링크(빈 괄호)로만 존재하므로, raw-and-wb.md에서 이 챕터를 언급할 때 마크다운 링크를 걸지 않고 일반 텍스트로만 표기해 깨진 링크를 방지함
- 연습 로그 템플릿은 fenced code block으로 감싸 "실제 렌더링되는 이미지"가 아닌 "복사할 리터럴 텍스트"로 제공 — house rule(실제 이미지 파일 생성 금지)을 지키면서도 원본 스켈레톤(01-RESEARCH.md)의 형태를 그대로 보존

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
None. 01-gear/accessories.md, 02-fundamentals/{exposure-basics,500-npf-rule,focusing,index}.md는 병렬 실행 중인 01-02/01-03 plan 소관이라 편집하지 않았고, 필요한 상호참조는 파일 경로만으로 링크(앵커 없이)해 두어 해당 페이지들이 어떤 내용으로 채워지든 링크가 깨지지 않도록 함.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness
- Phase Success Criterion #4(RAW·화밸, 은하수 타이밍, 현장 워크플로)와 #5(재사용 연습 로그 템플릿) 충족
- `mdbook build src` exit 0 확인 완료 (두 태스크 각각 빌드 검증)
- 03-practice/template.md가 1부 마지막 페이지로 SUMMARY.md에서 사이드바 도달 가능함을 확인
- Phase 2(연습 1~4차)가 이 템플릿을 그대로 복제해 쓸 준비 완료
- 특이 블로커 없음

---
*Phase: 01-mdbook-뼈대-장비-기초-촬영법*
*Completed: 2026-07-09*
