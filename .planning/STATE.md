# Project State

## Project Reference

See: .planning/PROJECT.md (updated 2026-07-14)

**Core value:** 트래킹 장비 없이도 은하수 사진이 "잘 나오게" 하는 전 과정(장비 → 촬영 → 후보정)을 초보자가 따라 성공하도록 담는다. (v1.1: 드론 / v1.2: 여행 사진으로 확장 완료)
**Current focus:** v1.3 사진 보정(Lightroom Classic) — 로드맵 확정, Phase 15 계획 준비.

## Current Position

Phase: 17 of 19 (필수 보정 순서 + 상황별 레시피) — In progress
Plan: 1 of 2 in Phase 17 (완료). 다음: 17-02 (travel-recipes.md + before/after + 빌드 게이트)
Status: In progress
Last activity: 2026-07-15 — Completed 17-01-PLAN.md (현상 모듈 17단계 편집 순서, 관례 정직 표기·Alt-drag 클리핑·렌즈 프로파일 미확인 대응·마스킹 Phase 18 이월)

Progress: v1.0 ✅ (Phase 1-6) / v1.1 ✅ (Phase 7-10) / v1.2 ✅ (Phase 11-14) / v1.3 🚧 [████░░░░░░] 44% (4/9 plans)

## Accumulated Context

### Decisions

전체 로그는 PROJECT.md Key Decisions 표, 마일스톤별 상세는 `.planning/milestones/`.

v1.3 로드맵 결정:
- 신규 파트를 "2부 · 여행 사진 보정"(`src/13-editing/`)으로 여행 다음·드론 앞에 삽입, 이후 부 번호 +1 시프트, 기존 "6부 · 후보정" → "7부 · 은하수 후보정" 개칭(명칭 충돌·중복 회피).
- 도구 선택(구독 전용 경고 + 무료/영구 대안)을 개념 단계(Phase 16, ch1)에 전진 배치 — 리서치 SUMMARY 권장 따름.
- 17단계 척추(EDIT-02)와 상황별 레시피(RECIPE)를 한 phase(17)로 묶음 — 레시피가 척추의 적용이라 결합.

### Pending Todos

None.

### Blockers/Concerns

- 집필 중 in-app/공식 재확인 필요(리서치 Gaps): 원화 요금 미확인(숫자 박제 금지) / 삼양 12mm·RF 50mm Adobe 렌즈 프로파일 존재 여부 미확인(프로파일명 조작 금지·LR 실검색) / Wikimedia·raw.pixls 파일별 라이선스 육안 재확인 / Adobe 스크린샷은 "저자 직접 캡처 예정" 플레이스홀더.
- 실제 몽골 촬영본으로 before/after·명소 갤러리 교체는 트립(8/13) 후 과제 — 현재는 검증 CC0/무료 이미지.

## Session Continuity

Last session: 2026-07-15
Stopped at: Completed 17-01-PLAN.md. src/13-editing/develop-order.md 스텁 교체(현상 모듈 17단계 = 단계별 소제목+한 줄 rationale, "관례" 정직 프레이밍 3회, 전역→국소 원리, "한눈에 보기" 표 + 1~10/17 코어·11~16 선택 팁, Alt/Option 드래그 클리핑 미리보기, 렌즈 프로파일 미확인→LR 검색+수동 교정+supported-lenses URL·프로파일명 무조작, 마스킹은 Phase 18 masking-and-detail.md로 이월, 다음 장 travel-recipes.md 링크). grep 검증 전부 통과, 가격 숫자 0, 빌드 미실행(17-02 소유), 커밋 4793bd9(docs/ 미커밋·개별 스테이징). Phase 17 진행 중(1/2). 다음: `/gsd:execute-phase 17` → 17-02.
Resume file: None
