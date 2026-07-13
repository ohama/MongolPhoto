# Project State

## Project Reference

See: .planning/PROJECT.md (updated 2026-07-13)

**Core value:** 트래킹 장비 없이도 은하수 사진이 "잘 나오게" 하는 전 과정(장비 → 촬영 → 후보정)을 초보자가 따라 성공하도록 담는다. (v1.1: 몽골 드론 사진으로 범위 확장)
**Current focus:** v1.1 드론 사진 마일스톤 — Phase 8 (드론 기초) 진행 중 (3개 plan 중 08-02·08-03 완료, 08-01 병렬 진행).

## Current Position

Phase: 8 of 10 (드론 기초) — 진행 중
Plan: 3 of 3 (08-03)
Status: In progress
Last activity: 2026-07-13 — 08-03-PLAN.md 완료 (gobi-environment.md 고비 환경 대응 + drone-postprocessing.md 드론 후보정, raw-develop.md/field-prep-and-hazards.md 링크 재사용, mdbook build 그린)

Progress: v1.0 ✅ SHIPPED (Phase 1-6, 10 plans) / v1.1 🚧 [███░░░░░░░] Phase 7 완료 + Phase 8 plan 2/3 완료(08-02, 08-03) + 08-01 진행중 (Phase 9-10 plans TBD)

## Performance Metrics

**Velocity (v1.0):**
- Total plans completed: 10
- By phase: Phase 1 (5 plans), Phase 2-6 (1 plan each)

**v1.1:**
- Total plans completed: 3 (07-01, 08-02, 08-03)
- Phase 7: 1 plan, ~3 min (순수 구조 재편 + 스텁 — 콘텐츠 없음, 이후 phase 소요시간 참고치로는 부적합)
- Phase 8: 08-02 ~15min (composition.md + flight-and-battery.md 콘텐츠 작성, 08-01/08-03과 병렬 실행), 08-03 ~15min (gobi-environment.md + drone-postprocessing.md, 08-01/08-02와 병렬 실행)

*Updated after each plan completion*

## Accumulated Context

### Decisions

전체 로그는 PROJECT.md Key Decisions 표. v1.1 로드맵 관련 결정:
- 책을 "몽골 사진 가이드"로 확장 — 1부=드론(DJI Mini 5 Pro), 그 뒤가 기존 은하수 파트. 기존 01-08 폴더는 renumbering 없이 SUMMARY만 재편(09-drone/, 10-drone-sites/ 신설, 드론 참고 자료는 기존 08-references/ 안에 배치).
- Phase 순서: 7(구조/제목, 스텁 먼저 — book.toml create-missing=false 때문) → 8(드론 기초) → 9(명소별 항공) → 10(참고 자료/규제, 검증 시간 최대화 위해 마지막).
- 규제는 "가볍게"(핵심만 간략) — CAAM Part 101 확인 사실만 단정, 250g 면제·국립공원 규정은 전부 "미확인 — 재확인 필요"로 표기.
- 드론 야간 촬영 제외 — 법(주간만) + 하드웨어(Mini 한계) 이중 이유, Phase 8 개요에서 명시.
- (07-01) 책 제목·설명·소개·README를 "몽골 사진 가이드"로 확장하되, 은하수 섹션 본문·예시 사진·이미지 출처 표는 전혀 수정하지 않고 리드/도입 문단·읽는 법·인라인 파트번호만 갱신 — 콘텐츠 재작성은 각 phase(8/9/10)에서.
- (08-03) 저온 배터리 물리·RAW 현상 슬라이더 레시피는 field-prep-and-hazards.md/raw-develop.md로 링크만 걸고 재서술하지 않음 — 드론 델타(보온 습관·38도 방치 금지 / 렌즈 왜곡·먼지 얼룩·낮은 노이즈)만 신규 서술. 바람 개인 한계는 정격 풍속(12m/s)의 절반 이하로 명시.

### Pending Todos

[From .planning/todos/pending/ — ideas captured during sessions]

None yet.

### Blockers/Concerns

- **Phase 10 (규제) 검증 필요**: CAAM Part 102 미독해, 국립공원(욜링암·홍고린엘스) 드론 정책 출처 없음 — planning 단계에서 재시도, 안 되면 "미확인" 프레이밍으로 출간.
- 몽골 출발일(8/13) 전 완결 목표 — 날짜 게이트는 아니지만 타임라인 인지 필요.

## Session Continuity

Last session: 2026-07-13
Stopped at: 08-03-PLAN.md 완료 — gobi-environment.md(바람·모래/먼지·저온고온·원격지 충전), drone-postprocessing.md(raw-develop.md 재사용+드론 델타 3가지) 작성, `mdbook build src` exit 0 확인. 08-01은 병렬 실행 중(다른 세션) — 완료 여부 확인 후 Phase 8 종합 필요.
Resume file: None
