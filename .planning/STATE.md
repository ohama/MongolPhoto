# Project State

## Project Reference

See: .planning/PROJECT.md (updated 2026-07-14)

**Core value:** 트래킹 장비 없이도 은하수 사진이 "잘 나오게" 하는 전 과정(장비 → 촬영 → 후보정)을 초보자가 따라 성공하도록 담는다. (v1.1: 드론 / v1.2: 여행 사진으로 확장 완료)
**Current focus:** v1.3 사진 보정(Lightroom Classic) — 로드맵 확정, Phase 15 계획 준비.

## Current Position

Phase: 17 of 19 (필수 보정 순서 + 상황별 레시피) — Complete
Plan: 2 of 2 in Phase 17 (완료). Phase 17 종결. 다음: Phase 18 (국소 보정 + 합치기)
Status: Phase complete
Last activity: 2026-07-15 — Completed 17-02-PLAN.md (travel-recipes.md 레시피 a~e 슬라이더 방향/이유 + P3 과보정 박스 + CC0 before/after 2쌍 정직 캡션 + 촬영 예방 콜백 + 마스킹 Phase 18 이월, ImageMagick 파생 이미지 4개, 빌드 게이트 그린)

Progress: v1.0 ✅ (Phase 1-6) / v1.1 ✅ (Phase 7-10) / v1.2 ✅ (Phase 11-14) / v1.3 🚧 [█████░░░░░] 56% (5/9 plans)

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
Stopped at: Completed 17-02-PLAN.md. src/13-editing/travel-recipes.md 스텁 교체(레시피 a~e 대낮·골든아워·역광·인물·날린 하늘 = 슬라이더 방향/이유, 방향은 상대 안내 명시, P3 과보정 박스 헤일로·과채도·크러시드 블랙·과디헤이즈+예방법, CC0 before/after 2쌍 midday·goldenhour 정직 캡션 4항목[시연·인위적 플랫 파생·트립 2026-08-13 후 교체·Bernard Gagnon/CC0/Wikimedia], 촬영 예방 콜백 camera-settings/av-mode/shoot-for-edit, 마스킹 Select Subject/People/Sky 도구명+Phase 18 이월). ImageMagick로 src/images/editing/ 신규 파생 이미지 4개(≤2000px·-strip·q82, before=인위적 플랫·after=재최적화 원본). 빌드 게이트 그린, docs/ 복원·미커밋, 커밋 ba25f2a(개별 스테이징 5파일). grep 검증 전부 통과. Phase 17 완료(2/2). 다음: `/gsd:plan-phase 18` → 국소 보정 + 합치기.
Resume file: None
