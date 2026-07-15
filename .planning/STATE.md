# Project State

## Project Reference

See: .planning/PROJECT.md (updated 2026-07-14)

**Core value:** 트래킹 장비 없이도 은하수 사진이 "잘 나오게" 하는 전 과정(장비 → 촬영 → 후보정)을 초보자가 따라 성공하도록 담는다. (v1.1: 드론 / v1.2: 여행 사진으로 확장 완료)
**Current focus:** v1.3 사진 보정(Lightroom Classic) — 로드맵 확정, Phase 15 계획 준비.

## Current Position

Phase: 18 of 19 (국소 보정 + 합치기) — In progress
Plan: 1 of 2 in Phase 18 (완료). 다음: 18-02 (panorama-hdr.md)
Status: In progress
Last activity: 2026-07-15 — Completed 18-01-PLAN.md (masking-and-detail.md 스텁→국소 보정 완성본: 마스킹 자동 5종/수동 4종 언제-무엇 + 샤픈 Masking Alt-drag + AI Denoise RAW전용·새 DNG·샤픈보다 먼저 + 국소 과보정 회피 박스, Phase 17 forward 링크 이행, 빌드 게이트 단독 소유 그린, 신규 이미지 없음)

Progress: v1.0 ✅ (Phase 1-6) / v1.1 ✅ (Phase 7-10) / v1.2 ✅ (Phase 11-14) / v1.3 🚧 [██████░░░░] 67% (6/9 plans)

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
Stopped at: Completed 18-01-PLAN.md. src/13-editing/masking-and-detail.md 스텁 교체(국소 보정 완성본). 인트로=현상 순서 15단계 마스킹·14단계 디테일 되짚기(develop-order 링크)+Phase 17 forward 약속 이행 명시. 섹션1 마스킹=자동 5종(Select Sky/Subject/People/Background/Objects) 언제-무엇 + travel-recipes 레시피 (c)역광/(d)인물/(e)날린하늘 실제 조작 이행, 수동 4종(Brush/Linear·Radial Gradient/Range Mask), Add/Subtract 조합. 섹션2 디테일=샤픈 Masking 슬라이더 Alt/Option 드래그(매끈면 제외·윤곽만·100%)+정직 콜아웃(소프트포커스 복구불가), AI Denoise=Enhance군·v14.4 Detail 직접·RAW/CR3 전용·새 DNG 생성(원본 불변), 순서규칙 Denoise를 샤픈보다 먼저. 섹션3 국소 과보정 회피 박스(헤일로·과채도·크러시드 블랙·과디헤이즈·샤픈과다→Alt-drag·섀도우과리프트→Denoise먼저)+예방원칙+상황별 전체표는 travel-recipes 위임. 닫는=panorama-hdr 다음장 링크. 신규 이미지 없음. 빌드 게이트 단독 소유 그린, docs/ 복원·미커밋, 커밋 92d7fbf(개별 스테이징 1파일). grep 검증 전부 통과. 다음: 18-02 panorama-hdr.md(grep 검증만·빌드 미실행).
Resume file: None
