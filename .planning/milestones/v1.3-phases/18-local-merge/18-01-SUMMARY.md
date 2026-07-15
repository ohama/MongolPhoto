---
phase: 18-local-merge
plan: 01
subsystem: content
tags: [lightroom-classic, masking, denoise, sharpening, local-adjustment, mdbook, korean]

# Dependency graph
requires:
  - phase: 17-필수-보정-순서-상황별-레시피
    provides: "develop-order.md(15단계 마스킹·14단계 디테일)와 travel-recipes.md(Select Subject/People/Sky 도구명만 언급, 상세는 Phase 18 이월)의 forward 링크"
provides:
  - "src/13-editing/masking-and-detail.md 완성본 — 마스킹 자동/수동 도구 언제-무엇, 샤픈 Masking Alt-drag, AI Denoise(RAW 전용·새 DNG·샤픈보다 먼저), 국소 과보정 회피 박스"
  - "Phase 17 forward 링크 이행(Select Subject=역광, Select People=인물, Select Sky=날린 하늘)"
affects: [18-02-panorama-hdr, 프리셋-내보내기, 크레딧]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "지침체 존댓말 + 새 용어 괄호 뜻풀이 문체(index.md/develop-order.md 일관)"
    - "중복 최소화 — '국소가 전역 다음인 이유'는 develop-order.md 링크, 상황별 과보정 전체 표는 travel-recipes.md 링크로 위임"
    - "정직성 우선 — Adobe 현재 명칭만 사용, 옛 이름은 '옛 …' 괄호로만, Denoise RAW전용·새 DNG 사실 명시, 가짜 URL/가격 없음, 인위적 마스킹 시연 없음"

key-files:
  created: []
  modified:
    - "src/13-editing/masking-and-detail.md — 스텁을 마스킹+디테일+과보정 회피 본문으로 교체"

key-decisions:
  - "새 이미지 자산 생성 안 함 — LOCAL-01은 before/after 불요, 인위적 마스킹 시연은 정직성상 회피(기존 이미지도 순수 삽화 필요 없어 참조 안 함)"
  - "샤픈 정직성 콜아웃 추가 — 샤픈은 있는 디테일 강조일 뿐 소프트 포커스 복구 불가(PITFALLS A7 근거)"

patterns-established:
  - "국소 과보정 회피 박스는 blockquote로, 상황별 전체 표는 travel-recipes.md로 위임해 중복 최소화"

# Metrics
duration: 2 min
completed: 2026-07-15
---

# Phase 18 Plan 01: 국소 보정 — 마스킹 · 디테일 Summary

**masking-and-detail.md 스텁을 국소 보정 완성본으로 교체 — Masking 자동(Select Sky/Subject/People/Background/Objects)·수동(Brush/Linear·Radial Gradient/Range Mask) 언제-무엇, 샤픈 Masking 슬라이더 Alt/Option 드래그, AI Denoise(RAW 전용·새 DNG·샤픈보다 먼저), 국소 과보정 회피 박스, Phase 17 forward 링크 이행**

## Performance

- **Duration:** 2 min
- **Started:** 2026-07-15T00:32:12Z
- **Completed:** 2026-07-15T00:34:26Z
- **Tasks:** 2
- **Files modified:** 1

## Accomplishments

- **마스킹 패널을 완전히 가르침** — 자동 마스크 5종(Select Sky/Subject/People/Background/Objects)과 수동 마스크 4종(Brush/Linear Gradient/Radial Gradient/Range Mask)을 "언제-무엇" 관점으로 설명, 마스크 Add/Subtract 조합 예시(Select Sky 후 브러시로 지평선 빼기) 포함.
- **Phase 17 forward 링크 이행** — travel-recipes.md가 도구명만 언급하고 넘긴 Select Subject(역광 (c))·Select People(인물 (d))·Select Sky(날린 하늘 (e))의 실제 조작을 이 장에서 전달. 빈 약속이 아님을 확인.
- **디테일 순서 규칙 명확화** — 샤픈 Masking 슬라이더 Alt/Option 드래그로 매끈한 면은 빼고 윤곽선에만 샤픈(100% 배율), AI Denoise = Enhance 기능군·2025년 6월(v14.4) Detail 패널 직접 접근·RAW/CR3 전용·보정된 새 DNG 생성(원본 CR3 불변), **Denoise를 샤픈보다 먼저**(노이즈 선제거 후 샤픈).
- **국소 과보정 회피 박스** — 헤일로·과채도·크러시드 블랙·과디헤이즈 + 샤픈 과다(Masking Alt-drag) + 섀도우 과리프트(Denoise 먼저) 대처, 예방 원칙(절반값·100%↔축소·` 토글·"덜 한 것이 낫다"), 상황별 전체 표는 travel-recipes.md로 위임.
- **빌드 게이트 그린** — mdbook build 에러/경고 없이 통과, docs/ 복원·미커밋.

## Task Commits

1. **Task 1: 스텁을 마스킹+디테일+과보정 회피 본문으로 교체** + **Task 2: 정직성 감사 + 빌드 게이트 + 개별 커밋** — `92d7fbf` (docs)

_두 태스크를 하나의 파일 편집으로 완성해 단일 커밋으로 처리(Task 1이 본문 작성, Task 2가 감사·빌드·커밋)._

## Files Created/Modified

- `src/13-editing/masking-and-detail.md` — 스텁(준비 중 문구)을 국소 보정 본문으로 교체. 인트로(현상 순서 15/14단계 되짚기·Phase 17 약속 이행 명시), 섹션1 마스킹(자동 5종/수동 4종/조합), 섹션2 디테일(샤픈 Alt-drag·AI Denoise·순서 규칙), 섹션3 과보정 회피 박스, 닫는 문단(panorama-hdr 다음 장 링크).

## Decisions Made

- **새 이미지 자산 생성 안 함** — LOCAL-01은 before/after를 요구하지 않고 인위적 마스킹 시연은 정직성상 회피. 기존 이미지도 순수 삽화 필요가 없어 참조하지 않음(본문만으로 충분).
- **샤픈 정직성 콜아웃 추가** — "샤픈은 있는 디테일 강조일 뿐 소프트 포커스는 못 살린다"(PITFALLS A7)를 blockquote로 명시해 과신 방지.

## Deviations from Plan

None - plan executed exactly as written. 계획의 두 태스크(본문 작성 + 감사·빌드·커밋)를 순서대로 수행했으며, 두 태스크가 동일 파일을 대상으로 하므로 단일 커밋으로 마무리했습니다(계획의 커밋 지침과 일치).

## Issues Encountered

None.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- **18-02(panorama-hdr.md) 준비 완료** — 이 장 닫는 문단이 "여러 장을 하나로 합치는 파노라마·HDR은 다음 장"이라며 panorama-hdr.md로 링크를 걸어 두었으므로, 18-02가 그 약속을 이어받으면 됩니다.
- **빌드 게이트 단독 소유 확인** — 18-01이 Phase 18 빌드를 소유(mdbook build 그린). 18-02는 grep 검증만 하므로 docs/ 빌드 경합 없음.
- **트립 후 과제(이월)** — 실제 몽골 마스킹 before/after 시연은 트립(2026-08-13) 후 선택적으로 추가 가능하나, LOCAL-01 충족에는 불필요.

---
*Phase: 18-local-merge*
*Completed: 2026-07-15*
