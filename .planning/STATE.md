# Project State

## Project Reference

See: .planning/PROJECT.md (updated 2026-07-20)

**Core value:** 트래킹 장비 없이도 은하수 사진이 "잘 나오게" 하는 전 과정(장비 → 촬영 → 후보정)을 초보자가 따라 성공하도록 담는다. (여행·드론·은하수 3트랙 완성; v1.5는 세 트랙을 한 여행으로 잇는 현장 워크플로)
**Current focus:** v1.5 현장 워크플로 — 로드맵 완성, Phase 24부터 계획 대기.

## Current Position

Phase: 26 of 28 (하루 현장 운용) — Ready to plan (26·27 병행 가능)
Plan: —
Status: Phase 25 완료(단일 플랜). 다음: Phase 26(하루 현장 운용) 또는 27(데이터·전원) — 병행 가능. 28은 마지막(wave 2 직렬).
Last activity: 2026-07-20 — Phase 25 실행·검증 완료(여행 전 준비 preparation.md, 빌드 그린·링크 902 dead 0)

Progress: v1.0~v1.4 ✅ SHIPPED · v1.5 🚧 (24 ✅ / 25 ✅ / 26·27·28 대기)

## Roadmap (v1.5 현장 워크플로)

새 "4부 · 현장 워크플로" 파트(3부 뒤·부록 앞) 신설. 5 phases:

- **Phase 24** — 파트 신설 + 개요 랜딩 + 전 챕터 스텁 (create-missing=false 빌드 그린). 구조 기반, 요구사항 없음.
- **Phase 25** — 여행 전 준비 (PREP-01 통합 패킹, PREP-02 촬영 계획·앱 오프라인)
- **Phase 26** — 하루 현장 운용 (FIELD-01 타임라인, FIELD-02 세 카메라 오케스트레이션)
- **Phase 27** — 데이터·전원 운용 (DATA-01 카드·현장 백업, DATA-02 멀티데이 전원)
- **Phase 28** — 귀국 후 정리 (POST-01 3-2-1 백업, POST-02 선별·편집 순서 허브) + 최종 빌드·링크 게이트(wave 2 직렬)

실행 순서: 24 → (25·26·27 병행 가능) → 28. Coverage 8/8 ✓.

## Accumulated Context

### Decisions

전체 로그는 PROJECT.md Key Decisions 표, 마일스톤별 상세는 `.planning/milestones/`.

- v1.5 근거: `.planning/docs/보강-추천-전체목차-분석.md` Tier 1 — 각 트랙 수직 깊이는 탄탄하나 "가로 연결 조직"(준비→하루→귀국후, 데이터·전원)이 완전 공백.
- (v1.5 로드맵) 구조/스텁 페이즈(24)를 앞세워 create-missing=false 빌드를 지키고, 최종 링크 게이트를 마지막 페이즈(28-02) wave 2로 직렬화(v1.4 23-02 방식, false-PASS 방지).
- (v1.5 로드맵) 4부 배치 = 3부 뒤·부록 앞, 디렉토리 `4-workflow/`(3부 astro `field-workflow.md`와 혼동 회피).
- (24-01) 구조 옵션 a 채택: `4-workflow/` 바로 아래 5개 평면 페이지(index+4스텁), 서브디렉토리 없음 — 각 트랙이 Phase당 1~2 요구사항만 담당해 서브디렉토리 분량 근거 부족.
- (24-01) 정직한 스텁 컨벤션 확립: H1 + 다룰 내용 1~2문장 + 트랙별 정직성 단서 + `> 📝 **작성 예정**` 블록 + 담당 Phase 번호 명시. Phase 25~28은 이 컨벤션을 유지하며 내용만 교체.
- (25-01) PREP류 페이지 콘텐츠 리듬 확립: 리드 문단 → 통합/개요 섹션(허브 링크, 항목 복제 없음) → 계획/방법 섹션(기존 파트 승계 + 예시 표, 재확인 표기 반복) → 실행 섹션(왜/무엇/방법) → 🔰 박스 1개. Phase 26~28도 이 리듬 적용 가능.

### Open Blockers / Concerns (승계)

- 저자 실촬영본·UI 캡처·하루 실사례는 트립(8/13) 이후 교체 — v1.5도 텍스트/템플릿 위주 작성.
- 하루 타임라인 시각·장비 무게·용량·요금은 예시/검증/미확인으로 정직 표기(단정 금지).
- 각 트랙 촬영·편집법은 재설명 없이 기존 1·2·3부 링크로 승계(중복 금지).

### Phase 26~28 승계 메모 (Phase 25 완료 후)

- SUMMARY.md/introduction.md/README.md 배선은 24-01에서 완료됨 — Phase 26~28은 추가 배선 불필요, 각자 담당 스텁 1개 파일만 채우면 됨.
- Phase 25 → `src/4-workflow/preparation.md` **완료** (PREP-01 통합 패킹, PREP-02 촬영 계획·오프라인 앱, 커밋 0baf371). SUMMARY: `.planning/phases/25-pre-trip-preparation/25-01-SUMMARY.md`.
- Phase 26 → `src/4-workflow/field-day.md` (FIELD-01 타임라인, FIELD-02 세 카메라 오케스트레이션)
- Phase 27 → `src/4-workflow/data-power.md` (DATA-01 카드·현장 백업, DATA-02 멀티데이 전원)
- Phase 28 → `src/4-workflow/after-return.md` (POST-01 3-2-1 백업, POST-02 선별·편집 순서 허브) + wave 2에서 최종 빌드·링크 게이트 직렬 재실행(v1.4 23-02 방식) — Phase 25 시점 베이스라인: 링크 902개 스캔 REAL DEAD 0.
- 26/27은 서로 다른 파일을 건드리므로 병행 가능. 28은 마지막(wave 2 직렬)에 실행.

## Session Continuity

Last session: 2026-07-20
Stopped at: 25-01-PLAN.md 실행 완료(preparation.md 실 콘텐츠+mdbook build 그린+링크 스캔 REAL DEAD 0+커밋 0baf371). SUMMARY: `.planning/phases/25-pre-trip-preparation/25-01-SUMMARY.md`. 다음: `/gsd:plan-phase 26` (또는 26/27 병행 계획).
Resume file: None
