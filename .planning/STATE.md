# Project State

## Project Reference

See: .planning/PROJECT.md (updated 2026-07-14)

**Core value:** 트래킹 장비 없이도 은하수 사진이 "잘 나오게" 하는 전 과정(장비 → 촬영 → 후보정)을 초보자가 따라 성공하도록 담는다. (v1.1: 드론 / v1.2: 여행 사진으로 확장 완료)
**Current focus:** v1.3 사진 보정(Lightroom Classic) — 로드맵 확정, Phase 15 계획 준비.

## Current Position

Phase: 19 of 19 (촬영 연동 + 크레딧 + 최종 검증) — In progress
Plan: 1 of 2 in Phase 19 (완료). 다음: 19-02 (책 전체 최종 빌드·링크 게이트)
Status: In progress
Last activity: 2026-07-15 — Completed 19-01-PLAN.md (shoot-for-edit.md·credits.md 스텁→완성본: A1~A7 편집 대비 촬영법 + 촬영/편집 배치표, R7 DR≈10.5스톱·AEB(3·2/5/7·±3EV·1/3) 검증·ETTR 규칙 아닌 선택·렌즈 프로파일 미확인 정직, recipe 4장 CC0(Bernard Gagnon) 크레딧 표 + 트립 후 교체 노트 + 참고 링크 재사용. camera-settings·av-mode·panorama-hdr·develop-order·travel-recipes 콜백. 자기 편집분 빌드 그린, 커밋 78a297e, docs/ 미커밋, 신규 이미지 없음)

Progress: v1.0 ✅ (Phase 1-6) / v1.1 ✅ (Phase 7-10) / v1.2 ✅ (Phase 11-14) / v1.3 🚧 [████████░░] 89% (8/9 plans)

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
Stopped at: Completed 19-01-PLAN.md. src/13-editing/shoot-for-edit.md·credits.md 스텁 교체(완성본). shoot-for-edit: editing-driven capture 앵글, A1 RAW·A2 하이라이트 보호·A3 ETTR(규칙 아닌 선택·R7 대낮 제한)·A4 WB(리뷰용)·A5 렌즈 프로파일(미확인·LR 직접 검색·develop-order 위임)·A6 AEB 브라케팅+파노라마 중첩(병합은 panorama-hdr 소유)·A7 인카메라 초점, 각 항목 ①촬영 시 무엇/②왜 편집에 도움/③촬영·편집 관심사 + 촬영/편집 배치표(A5만 편집), R7 DR≈10.5스톱·AEB(3·2/5/7·±3EV·1/3) 검증 표기, camera-settings·av-mode 조작 위임. credits: 정직 캡션 원칙 + recipe-midday/goldenhour before·after 4장 크레딧 표(Bernard Gagnon CC0, 원본 File URL은 travel-galleries.md 재사용 Khongoryn_Els_04/Bayanzag_10) + 변경 열 + 트립 후 교체(2026-08-13) 노트, CC0만 기재(CC BY 억지 미추가), 참고 자료는 practice-raw-samples·software-references·app-software·travel-gear-tutorials 링크 재사용·가격 미박제. 자기 편집분 mdbook build 그린(ERROR/WARN 0), 커밋 78a297e(개별 스테이징 2파일, docs/ restore·clean 미포함). grep 전수 통과. Phase 19 진행 중(1/2). 다음: 19-02 (책 전체 최종 mdbook build 그린 + 내부 링크 전수 스캔 dead 0 + LINK-CHECK 리포트).
Resume file: None
