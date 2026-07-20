# Project State

## Project Reference

See: .planning/PROJECT.md (updated 2026-07-20)

**Core value:** 트래킹 장비 없이도 은하수 사진이 "잘 나오게" 하는 전 과정(장비 → 촬영 → 후보정)을 초보자가 따라 성공하도록 담는다. (여행·드론·은하수 3트랙 완성; v1.5는 세 트랙을 한 여행으로 잇는 현장 워크플로)
**Current focus:** v1.5 현장 워크플로 — 로드맵 완주. 다음: complete-milestone.

## Current Position

Phase: 28 of 28 (귀국 후 정리) — wave 1·wave 2(최종 게이트) 모두 완료. v1.5 로드맵 전체 완주.
Plan: 01, 02 모두 완료. v1.5에 남은 플랜 없음.
Status: Phase 28-02(최종 빌드·링크 게이트) PASS — mdbook build src 2회 교차 그린, 책 전체(1~4부) 내부 링크 957개 전수 스캔 REAL DEAD 0(known FP 2건 제외). v1.5 마일스톤(Phase 24~28) 콘텐츠·빌드·링크 무결성 전부 확정. 다음: complete-milestone(v1.5 종료 처리) 또는 사용자 지시 대기.
Last activity: 2026-07-21 — Phase 28-02 실행·완료(최종 빌드·링크 게이트 PASS, 리포트 커밋 ad49415)

Progress: v1.0~v1.4 ✅ SHIPPED · v1.5 ✅ 로드맵 완주 (24·25·26·27·28-01·28-02 모두 완료) — complete-milestone 대기

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
- (26-01) FIELD류 페이지 리듬 확장: 리드(+전 단계 preparation.md 연결) → 타임라인 예시 표(예시 템플릿+PhotoPills 재확인) → 오케스트레이션(핵심 인사이트+우선순위 규칙+전환 체크리스트+셔터 찬스) → "이 페이지에서 다루지 않는 것" 절(승계 링크 명시) → 🔰 박스 1개. min_lines 요구 충족은 재설명이 아닌 조직/승계 밀도로 해결.
- (27-01) DATA류 페이지 리듬: 리드(전 단계 preparation.md 연결) → 카드 전략(산정 예시 표+로테이션+백업 전 포맷 금지+분실 대비) → 현장 RAW 백업(방법 유형 3가지+"현장 백업 ≠ 귀국 후 3-2-1" 명시+after-return.md 전진 링크) → 멀티데이 전원(장비별 배터리 링크 승계+차량 시가잭/인버터 충전+저온 대응 링크 승계+충전 우선순위 표) → 🔰 박스 1개. 3-2-1 전체 백업 절차는 상술하지 않고 Phase 28로 전진 링크만.
- (28-01) POST류 페이지 리듬: 리드(전 단계 data-power.md 연결) → 귀국 후 백업 3-2-1(원칙+집 도착 첫 행동 오프로드→검증→재포맷 번호 순서+아카이브 예시 표+클라우드는 원칙·선택 기준만·미확인) → 선별(컬링, reject 먼저→플래그/레이팅→best만 예시 표) → 편집 순서 허브(4트랙 재설명 없는 라우팅 + 권장 순서 예시 표) → 🔰 박스 1개. v1.5 4부 5페이지 모두 완료.

### Open Blockers / Concerns (승계)

- 저자 실촬영본·UI 캡처·하루 실사례는 트립(8/13) 이후 교체 — v1.5도 텍스트/템플릿 위주 작성.
- 하루 타임라인 시각·장비 무게·용량·요금은 예시/검증/미확인으로 정직 표기(단정 금지).
- 각 트랙 촬영·편집법은 재설명 없이 기존 1·2·3부 링크로 승계(중복 금지).

### Phase 28 승계 메모 (Phase 27 완료 후)

- SUMMARY.md/introduction.md/README.md 배선은 24-01에서 완료됨 — Phase 28은 추가 배선 불필요, 담당 스텁 1개 파일(after-return.md)만 채우면 됨.
- Phase 25 → `src/4-workflow/preparation.md` **완료** (PREP-01 통합 패킹, PREP-02 촬영 계획·오프라인 앱, 커밋 0baf371). SUMMARY: `.planning/phases/25-pre-trip-preparation/25-01-SUMMARY.md`.
- Phase 26 → `src/4-workflow/field-day.md` **완료** (FIELD-01 하루 타임라인 예시 시간표, FIELD-02 세 카메라 오케스트레이션 — R7 낮/밤 커스텀 모드 겸용, 골든아워 우선순위, 전환 규칙, 셔터 찬스, 커밋 b11279c). SUMMARY: `.planning/phases/26-field-day-operation/26-01-SUMMARY.md`. 빌드 그린·링크 930개 스캔 REAL DEAD 0.
- Phase 27 → `src/4-workflow/data-power.md` **완료** (DATA-01 카드 전략+현장 RAW 백업 — 용량·개수 산정 예시·로테이션·백업 전 포맷 금지·손상 분실 대비, 방법 유형 3가지, 귀국 후 3-2-1은 after-return.md 전진 링크로 구분; DATA-02 멀티데이 전원 — 장비별 배터리 링크 승계·차량 시가잭/인버터 충전·저온 대응 링크 승계·밤 촬영용 최우선 충전 우선순위, 커밋 aaa47d2). SUMMARY: `.planning/phases/27-data-power-management/27-01-SUMMARY.md`. 빌드 그린·링크 943개 스캔 REAL DEAD 0.
- Phase 28-01 → `src/4-workflow/after-return.md` **완료** (POST-01 귀국 후 3-2-1 백업 — 사본 3·매체 2·오프사이트 1, 집 도착 첫 행동 오프로드→검증→재포맷, 아카이브 예시, 클라우드 원칙만·미확인; POST-02 선별(컬링) — reject 먼저·플래그/레이팅·best만; POST-02 편집 순서 허브 — 4트랙 라우팅+권장 순서, 커밋 6909565). SUMMARY: `.planning/phases/28-after-return-final-gate/28-01-SUMMARY.md`. 빌드 그린·링크 957개 스캔 REAL DEAD 0.
- Phase 28-02(wave 2, 최종 게이트) **완료** — mdbook build src 2회 교차 그린(create-missing=false, WARN/ERROR 없음) + src/**/*.md 전체(1~4부) 내부 링크 957개 전수 스캔 REAL DEAD 0(known FP 2건: about.md 파일명, template.md session-N 제외). 리포트 `.planning/phases/28-after-return-final-gate/28-02-LINK-CHECK.md`, 커밋 ad49415. SUMMARY: `.planning/phases/28-after-return-final-gate/28-02-SUMMARY.md`. **PASS** — v1.5 로드맵·마일스톤 완주.

## Session Continuity

Last session: 2026-07-21
Stopped at: 28-02-PLAN.md 실행 완료(최종 빌드·링크 게이트 PASS — mdbook build 2회 교차 그린, 링크 957개 전수 스캔 REAL DEAD 0, 리포트 커밋 ad49415). SUMMARY: `.planning/phases/28-after-return-final-gate/28-02-SUMMARY.md`. v1.5 "현장 워크플로" 마일스톤(Phase 24~28) 전체 완주. 다음: complete-milestone(v1.5 종료 처리) 또는 사용자 지시 대기.
Resume file: None
