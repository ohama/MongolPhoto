# Project State

## Project Reference

See: .planning/PROJECT.md (updated 2026-07-15)

**Core value:** 트래킹 장비 없이도 은하수 사진이 "잘 나오게" 하는 전 과정(장비 → 촬영 → 후보정)을 초보자가 따라 성공하도록 담는다. (v1.1 드론 / v1.2 여행 사진 / v1.3 여행 사진 보정으로 확장 완료)
**Current focus:** v1.4 드론 영상(촬영 + CapCut 편집) — Phase 21-01 실행 완료(영상 설정 논리 척추). 다음: 21-02(움직임 샷) 또는 Phase 22(CapCut, 병렬).

## Current Position

Phase: 21 (드론 영상 촬영) — In progress
Plan: 21-01 complete (VSHOOT-01 설정 인과 사슬)
Status: In progress — 21-02(VSHOOT-02 움직임 샷) 대기, Phase 22 병렬 가능
Last activity: 2026-07-15 — 21-01 실행 완료(video-index 랜딩 + video-shooting 인과 사슬·빌드 그린)

Progress: v1.0 ✅ SHIPPED (Phase 1-6) / v1.1 ✅ SHIPPED (Phase 7-10) / v1.2 ✅ SHIPPED (Phase 11-14) / v1.3 ✅ SHIPPED (Phase 15-19) / v1.4 🚧 진행 중 (Phase 20 ✅ / 21 진행 중 / 22-23 대기)

## Roadmap (v1.4)

| Phase | Goal | Requirements |
|-------|------|--------------|
| 20. 2부 재구성 + 스텁 | 사진/영상 분리 재편·스텁·랜딩·빌드 그린 | STRUCT-01, STRUCT-02 |
| 21. 드론 영상 촬영 | DJI Mini 5 Pro 영상 설정 + 시네마틱 움직임 샷 | VSHOOT-01, VSHOOT-02 |
| 22. CapCut 편집 워크플로 | 가져오기→내보내기 11단계 + 색보정·음악 라이선스 | VEDIT-01, VEDIT-02 |
| 23. 예시 스토리보드 + 최종 게이트 | 대표 고비 클립 스텝바이스텝 + 크레딧 + 전체 빌드/링크 검증 | VEXAMPLE-01, VREF-01 |

실행 순서: 20 → (21 · 22 병렬 가능) → 23. 23-02 최종 빌드/링크 게이트는 wave 2 직렬(false-PASS 레이스 방지).

## Accumulated Context

### Decisions

전체 로그는 PROJECT.md Key Decisions 표, 마일스톤별 상세는 `.planning/milestones/`.

v1.4 로드맵 확정 사항:
- 2부 제목 `# 2부 · 드론 사진·영상`으로 개칭, 결합 그룹 "드론 사진·영상 보정" retire(video-editing.md 스텁 + postprocessing-index.md 랜딩 제거), drone-postprocessing.md 단독 리프로 승격.
- 신규 2개 랜딩 그룹: 드론 영상 촬영(video-index → video-shooting·video-movements), CapCut 영상 편집(capcut-index → basics·cut·grade-speed·export·storyboard). create-missing=false → 스텁+SUMMARY 항목 동시 생성.
- Phase 21(촬영)·22(CapCut)는 촬영본 무관·디스조인트 파일이라 병렬 작성 가능. Phase 23 최종 게이트는 wave 2 직렬.

v1.4 Phase 20 실행 사항:
- 2부 재편 확정: `# 2부 · 드론 사진·영상`, 결합 그룹 retire(postprocessing-index·video-editing 삭제), drone-postprocessing 단독 리프 승격, 2개 클릭 랜딩(video-index·capcut-index) + 스텁 9개.
- 정직 스텁 원칙: 미확인 수치(CapCut 요금·DJI fps·LUT 위치) 단정 금지, 음악 라이선스는 flat 단정 아닌 '확인 예정' 주제로 표기(Phase 22가 검증 채움).

v1.4 Phase 21-01 실행 사항:
- VSHOOT-01 확정: video-shooting.md에 프레임레이트→180도 셔터(관례)→영상용 ND(사진 대비 왜 필수)→D-Log M vs Normal→WB·노출 고정 인과 사슬. 초보 기본값 Normal, D-Log M 고급 옵트인.
- [verify@write] 격리: 정확 fps 상한·true-vertical만 플래그(공식 URL), 검증 사실(10-bit H.265·ISO 3200/12800·f/1.8·180도 관례) 단정. Mini 4 Pro 수치 0.
- 전방 링크 계약: video-shooting → capcut-index에 "Log→Rec.709→노출·WB→룩" 그레이딩 순서 약속(Phase 22가 실제로 채워야 함).

### Pending Todos

- Phase 22 CapCut 파트: video-shooting.md가 약속한 D-Log M 그레이딩 순서(Log→Rec.709→노출·WB→룩) 실제 채우기.

### Blockers/Concerns

- **[verify@write] 격리:** DJI Mini 5 Pro 정확 fps 상한·true-vertical 모드(공식 spec 재확인 전 단정 금지, Mini 4 Pro 수치 혼입 금지); CapCut 요금 USD/KRW·free-vs-Pro 경계·LUT 메뉴 위치·region/ToS(공식 pricing 페이지 404 → 미확인).
- **음악 라이선스 지뢰:** CapCut 내장 음원 = TikTok/CapCut 한정 → 유튜브 Content ID 위험. 기본값 YouTube Studio Audio Library/로열티프리 안내.
- 초보자 기본값 = Normal 프로파일(D-Log M 아님); ND-for-video + 180도 규칙; 자체 영상 임베드 금지(GitHub Pages 한계) → 스토리보드 + CC0 정지프레임(khongoryn-els·bayanzag·yolyn-am, Bernard Gagnon CC0) + 텍스트.
- 실촬영본·CapCut/DJI UI 캡처는 트립(8/13) 후 교체 — 현재 "대표 시나리오"·"저자 직접 캡처 예정" 플레이스홀더.

## Session Continuity

Last session: 2026-07-15
Stopped at: Phase 21-01 실행 완료 — video-index 랜딩 + video-shooting 설정 인과 사슬(VSHOOT-01)·mdbook 그린·단일 커밋(c743b03). 다음: 21-02(움직임 샷) 또는 Phase 22(CapCut, 병렬).
Resume file: None
