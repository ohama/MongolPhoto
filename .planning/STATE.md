# Project State

## Project Reference

See: .planning/PROJECT.md (updated 2026-07-14)

**Core value:** 트래킹 장비 없이도 은하수 사진이 "잘 나오게" 하는 전 과정(장비 → 촬영 → 후보정)을 초보자가 따라 성공하도록 담는다. (v1.1: 드론 사진으로 확장 / v1.2: 여행 사진으로 확장 중)
**Current focus:** v1.2 몽골 여행 사진 — Phase 11 완료, Phase 12 (여행 사진 기초) 진행 중 (12-01 완료, 12-02 대기).

## Current Position

Phase: 12 of 14 (여행 사진 기초) — 진행 중
Plan: 1 of 2 (12-01)
Status: In progress
Last activity: 2026-07-14 — 12-01-PLAN.md 완료 (11-travel/index.md 개요·매력·범위, camera-settings.md Av↔M 언런·노출보정·측광·CR3 RAW·주간 WB + 삼양12mm(RF-S)/RF50mm/RF-S18-150mm 렌즈활용·방진차이·현장관리·초광각·준망원 실전, mdbook build 그린)

Progress: v1.0 ✅ SHIPPED (Phase 1-6, 10 plans) / v1.1 ✅ SHIPPED (Phase 7-10, 10 plans) / v1.2 🚧 [███░░░░░░░] Phase 11 완료 + Phase 12 plan 1/2 완료 (Phase 13-14 plans TBD)

## Performance Metrics

**Velocity:**
- Total plans completed: 22 (v1.0: 10, v1.1: 10, v1.2: 2)
- v1.2: Phase 11 — 1 plan, ~20 min (순수 구조 재편 + 스텁 — 콘텐츠 없음) / Phase 12 plan 01 — ~25 min (콘텐츠 2 파일: index.md + camera-settings.md, 병렬 실행)

**Recent Trend:**
- v1.0/v1.1 완주 실적 기준 — v1.2도 유사 4-phase 구조(v1.1 패턴 재사용), Phase 11이 v1.1 Phase 7과 동일 패턴으로 재검증됨
- Phase 12는 wave 1에서 12-01(개요+카메라설정)과 sibling plan이 병렬로 11-travel/ 파일을 나눠 작성 중 — 파일 단위로 충돌 없이 진행

*Updated after each plan completion*

## Accumulated Context

### Decisions

전체 로그는 PROJECT.md Key Decisions 표, 마일스톤별 상세는 `.planning/milestones/`.
v1.2 관련 최근 결정: 여행 파트를 최상단 1부로 배치, 기준 장비 = R7+삼양12mm+RF50mm(보유)+RF-S18-150mm(추천), 참고 사진은 라이선스 확인 시만 임베드.
- (11-01) 기존 4부 "몽골 여행지별 촬영 가이드"를 "5부 · 은하수 명소별 촬영 가이드"로 개칭(신규 여행 파트와 명칭 충돌 회피), 04-mongolia/* 링크 라인은 불변.
- (11-01) introduction.md의 깨진 "사진 준비"(07-appendix/checklists.md, 대상 섹션 미존재) 링크는 유효 대상이 없어 dead link 유지 대신 인라인 평문으로 대체.
- (12-01) M모드(은하수)→Av모드(여행) 전환을 "언런"으로 명시적으로 대비시켜 서술(암시 금지, PITFALL 대응).
- (12-01) 삼양 12mm는 "Canon RF-S 마운트 전용·AF(Linear STM)·방진 O"로 정확 표기, 범용 RF 및 Sony E/Fuji X 동명 렌즈와 구분.
- (12-01) IBIS 스탑 수: R7 일반 "최대 8단"(마케팅, 협응 최적조건)과 RF-S 18-150mm 실측 "최대 7단"(특정 조합)을 서로 다른 조건의 주장으로 한 줄 정리해 자기모순 방지.
- (12-01) 방진 split(바디+12mm만 방진) 반영 — 렌즈 교체 시 센서 먼지 위험 현장관리 callout 추가.

### Pending Todos

None.

### Blockers/Concerns

- 여행 사진 참고 자료(Phase 14)의 이미지 라이선스 검증은 건별 확인이 필요 — 시간 배분 필요.
- 몽골 사람·현지 예절 콘텐츠는 2차 관광업계 출처 기반(MEDIUM confidence) — "일반적으로 통용" 정직 표기 유지.
- 실제 몽골 여행/드론/은하수 촬영본으로 명소 갤러리·전후 비교를 채우려면 저자 촬영이 필요(현재는 CC 예시 사진).
- 몽골 출발일 2026-08-13 — 그 전에 v1.2 콘텐츠 완결 필요.

## Session Continuity

Last session: 2026-07-14
Stopped at: 12-01-PLAN.md 완료 — 11-travel/index.md(개요·매력·범위), 11-travel/camera-settings.md(Av↔M 언런·노출보정·측광·CR3 RAW·주간 WB + 삼양12mm/RF50mm/RF-S18-150mm 렌즈활용·방진차이·현장관리·실전기법) 작성, `mdbook build src` exit 0 확인. 12-02(sibling plan, composition-and-light.md/landscape-and-street.md)는 병렬 실행 중이거나 대기.
Resume file: None
</content>
