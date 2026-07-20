---
phase: 28-after-return-final-gate
plan: 01
subsystem: docs
tags: [mdbook, field-workflow, backup-3-2-1, culling, editing-hub, korean]

# Dependency graph
requires:
  - phase: 24-part-scaffold-stubs
    provides: "4-workflow/ 파트 구조·스텁·SUMMARY/introduction/README 배선"
  - phase: 25-pre-trip-preparation
    provides: "4부 콘텐츠 리듬(리드→통합/개요→방법+예시표→실행→🔰 1개)"
  - phase: 27-data-power-management
    provides: "data-power.md 현장 RAW 백업 절이 '현장 백업 ≠ 귀국 후 3-2-1'을 명시하고 after-return.md로 전진 링크를 걸어둠 — 이 플랜이 그 뒤를 받음"
provides:
  - "after-return.md 실제 콘텐츠: POST-01 귀국 후 백업 3-2-1(사본 3·매체 2·오프사이트 1, 집 도착 첫 행동 오프로드→검증→재포맷, 아카이브/폴더 조직 예시, 클라우드 원칙만·미확인)"
  - "POST-02 선별(컬링): reject 먼저 걸러내기 → 플래그/레이팅 → best만 남기기, 대량 촬영본 관리 예시 표"
  - "POST-02 편집 순서 허브: 여행(1-travel/3-editing)·드론 사진(drone-postprocessing)·드론 영상(4-capcut)·은하수(3-astro/5-postprocessing) 재설명 없는 라우팅 + 트랙 간 권장 순서/우선순위(근거 포함) 예시 표"
affects: []

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "POST류 페이지 리듬: 리드(전 단계 data-power.md 연결) → 3-2-1 백업(원칙+집 도착 첫 행동 순서+아카이브 예시 표+클라우드 원칙만) → 선별(컬링, reject→플래그→best 예시 표) → 편집 순서 허브(트랙별 라우팅 + 권장 순서 예시 표) → 🔰 1개"

key-files:
  created: []
  modified:
    - src/4-workflow/after-return.md

key-decisions:
  - "3-2-1 백업의 '집 도착 첫 행동'을 오프로드→검증→재포맷 3단계로 번호를 매겨 순서를 시각적으로 강제하고, data-power.md의 '백업 전 포맷 금지' 규칙과 명시적으로 연결했다."
  - "클라우드/오프사이트는 선택 기준(오프사이트 여부·복원 편의·용량 여유)만 제시하고 특정 서비스·요금 비교를 완전히 배제, '미확인·추천'으로 라벨링해 정직성 규칙을 지켰다."
  - "편집 순서 허브의 권장 순서(은하수 스태킹 먼저 → 드론 영상 → 사진 보정)는 '예시' 표로 명시해 강제 규칙이 아님을 표기, 개인 우선순위에 따른 조정 가능함을 병기했다."

patterns-established:
  - "마지막 4부 페이지에서 세 파트(1·2·3부)의 편집 방법을 재설명 없이 단일 허브로 라우팅 + 권장 순서를 얹는 방식 — 26·27에서 확립한 링크 승계 밀도 패턴을 트랙 라우팅 허브 형태로 확장."

# Metrics
duration: 20min
completed: 2026-07-21
---

# Phase 28 Plan 01: 귀국 후 정리 Summary

**귀국 후 3-2-1 완전 백업(집 도착 첫 행동 오프로드→검증→재포맷)과 선별(컬링, reject→플래그→best)을 거쳐 네 트랙 편집을 재설명 없이 기존 파트로 라우팅하는 편집 순서 허브를 담은 after-return.md 작성 — v1.5 4부의 마지막 페이지**

## Performance

- **Duration:** 20 min
- **Started:** 2026-07-21T07:15:00Z (approx)
- **Completed:** 2026-07-21T07:35:00Z
- **Tasks:** 3/3
- **Files modified:** 1

## Accomplishments
- `## 귀국 후 백업 — 3-2-1` — 사본 3·매체 2·오프사이트 1 원칙, 집 도착 첫 행동(① 오프로드 → ② 검증 → ③ 재포맷) 순서 번호 매겨 명시, 아카이브/폴더 조직 예시 표, 클라우드/오프사이트는 원칙·선택 기준만(요금 비교 없음, 미확인·추천 라벨), 현장 백업은 data-power.md로 명확히 구분(뒤로 링크, 중복 없음)
- `## 선별(컬링)` — 왜 선별하나(수백~수천 장 → best만), reject 먼저 걸러내기 → 플래그/레이팅 등급 → best만 남기기 3단계 순서, 패스별 예시 표
- `## 편집 순서 허브` — 네 트랙(여행/드론 사진/드론 영상/은하수)을 재설명 없이 기존 파트로 라우팅, 트랙 간 권장 순서(은하수 스태킹 먼저 → 드론 영상 → 사진 보정, 근거 포함) 예시 표, 4부 개요·준비·현장 운용 크로스링크로 준비→현장→귀국 후 전체 흐름 마무리
- `> 🔰` 박스 정확히 1개(페이지 끝)
- mdbook build 그린(exit 0) + 내부 링크 전수 스캔(957개, false-positive 필터 `파일명`·`session-N` 적용) REAL DEAD 0

## Task Commits

플랜이 단일 `docs(28-01)` 커밋을 명시적으로 요구해 Task 1(3-2-1+선별)·2(편집 순서 허브+🔰)·3(빌드·링크 게이트) 모두 하나의 커밋으로 완료:

1. **Tasks 1-3: 귀국 후 정리 콘텐츠 + 빌드/링크 게이트** - `6909565` (docs)

**Plan metadata:** (본 SUMMARY 및 STATE.md 갱신은 별도 커밋 없이 이 실행 세션에서 함께 처리)

## Files Created/Modified
- `src/4-workflow/after-return.md` - 스텁 → 실제 콘텐츠(귀국 후 백업 3-2-1 + 선별(컬링) + 편집 순서 허브 + 🔰 1개), 81줄

## Decisions Made
- 3-2-1 백업의 "집 도착 첫 행동"을 오프로드→검증→재포맷 3단계로 번호를 매겨 순서를 시각적으로 강제하고, data-power.md의 "백업 전 포맷 금지" 규칙과 명시적으로 연결했다.
- 클라우드/오프사이트는 선택 기준만 제시하고 요금 비교를 완전히 배제, "미확인·추천"으로 라벨링했다.
- 편집 순서 허브의 권장 순서는 "예시" 표로 명시해 강제 규칙이 아님을 표기했다.

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

링크 스캔 스크립트의 false-positive 필터에서 `session-N`을 정규식(`session-\d`, 숫자 요구)으로 처음 작성해 리터럴 `session-N`(N은 문자)을 놓쳤다 — 필터를 리터럴 문자열 매칭으로 수정해 재실행, REAL DEAD 0 확인. 콘텐츠 파일에는 영향 없음(스캔 스크립트만 수정).

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness
- `src/4-workflow/after-return.md` 완료. v1.5 4부(현장 워크플로) 5개 페이지(index+preparation+field-day+data-power+after-return) 모두 실제 콘텐츠로 완료.
- 이번 실행 시점 베이스라인: mdbook build 그린, 내부 링크 957개 스캔 REAL DEAD 0.
- Phase 28은 wave 2(28-02, 최종 빌드·링크 게이트 직렬 재실행, v1.4 23-02 방식)가 남아 있음 — 이 플랜(28-01)은 wave 1 콘텐츠 작성만 담당.
- SUMMARY/introduction/README 미수정 확인됨(Phase 24 배선 유지).

---
*Phase: 28-after-return-final-gate*
*Completed: 2026-07-21*
