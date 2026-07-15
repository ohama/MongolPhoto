# Project State

## Project Reference

See: .planning/PROJECT.md (updated 2026-07-14)

**Core value:** 트래킹 장비 없이도 은하수 사진이 "잘 나오게" 하는 전 과정(장비 → 촬영 → 후보정)을 초보자가 따라 성공하도록 담는다. (v1.1: 드론 / v1.2: 여행 사진으로 확장 완료)
**Current focus:** v1.3 사진 보정(Lightroom Classic) — 로드맵 확정, Phase 15 계획 준비.

## Current Position

Phase: 18 of 19 (국소 보정 + 합치기) — Complete
Plan: 2 of 2 in Phase 18 (완료). 다음: Phase 19 (촬영 연동 + 크레딧 + 최종 검증)
Status: Phase complete
Last activity: 2026-07-15 — Completed 18-02-PLAN.md (panorama-hdr.md 스텁→합치기 완성본: Photo Merge Panorama/HDR/HDR Panorama 경로·용도 + Deghost + 병합 DNG 재현상 콜백 + R7 AEB 검증사양(3·2/5/7·±3EV·1/3) + 파노라마 중첩 30~50%·노출/WB/초점 수동 고정, 촬영 연동 링크(shoot-for-edit/camera-settings/av-mode), grep 검증만·빌드 미실행, 신규 이미지 없음)

Progress: v1.0 ✅ (Phase 1-6) / v1.1 ✅ (Phase 7-10) / v1.2 ✅ (Phase 11-14) / v1.3 🚧 [███████░░░] 78% (7/9 plans)

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
Stopped at: Completed 18-02-PLAN.md. src/13-editing/panorama-hdr.md 스텁 교체(합치기 완성본). 인트로=넓이 문제(→파노라마)/명암 문제(→HDR) 두 장면 + "나눠 찍어야 합친다" 다리. 섹션1 Photo Merge 3갈래=Panorama(Ctrl/Cmd+M·편집가능 DNG), HDR(브라케팅 세트), HDR Panorama(고급 소개만), FEATURES 검증 명칭만. 섹션2 Deghost(없음/낮음/보통/높음, 삼각대·정지=낮게·움직임=높게). 섹션3 병합 DNG=편집가능 RAW → develop-order 2~17단계 재현상 콜백("합치면 끝 아님"). 섹션4 촬영연동=R7 AEB 검증사양(기본3·2/5/7·±3EV·1/3스톱·표준→감소→증가, -2/0/+2 예) + RAW·셔터속도만 조절, "9장·±5EV" 과장설 명시 반박, 파노라마 30~50% 겹침·노출/WB/초점 수동고정, 촬영법 상세는 shoot-for-edit/camera-settings/av-mode-auto-iso 링크 위임. 닫는=masking-and-detail 되짚기 + shoot-for-edit 연결. 신규 이미지·가짜 URL/가격 없음. 빌드 미실행(게이트 18-01 소유), 커밋 00a7575(개별 스테이징 1파일, docs/ 미포함). grep 전부 통과. Phase 18 완료(2/2). 다음: Phase 19 (shoot-for-edit·credits + 최종 빌드/링크 게이트).
Resume file: None
