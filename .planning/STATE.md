# Project State

## Project Reference

See: .planning/PROJECT.md (updated 2026-07-21)

**Core value:** 트래킹 장비 없이도 은하수 사진이 "잘 나오게" 하는 전 과정(장비 → 촬영 → 후보정)을 초보자가 따라 성공하도록 담는다. (여행·드론·은하수 3트랙 + v1.5 현장 워크플로로 통합 완성; v1.6은 명소·주제별 영상 제작 스토리보드로 촬영·편집 계획을 구체화)
**Current focus:** v1.6 영상 스토리보드 — Phase 30 완료·검증 PASS(7/7). 다음 Phase 31(최종).

## Current Position

Phase: 31 of 31 진행 중 (은하수 타임랩스 3부 배치 + 전체 역링크 + 최종 게이트)
Plan: 31-01 완료. 31-02(wave 2, 전체 링크 게이트) 남음.
Status: 31-01 완료 — 은하수 타임랩스 스토리보드(23컷/~5분, Canon R7+RF16mm F2.8)를 `~/share/mongol2/6.몽골밤하늘.png`에서 직접 전사해 `src/3-astro/6-bonus/timelapse.md`에 배치(SB-03), night-sky.jpg 임베드+정직 캡션, 촬영·편집법은 기존 3부 파트로 링크 승계(재설명 0). 고비 5곳(차강소브라·바양작·홍고린엘스·욜링암·바가가즈링촐로) × 1·2·3부 = 15개 명소 페이지에 해당 2부 스토리보드 역링크 삽입, 전부 실 파일 해결 확인(LINK-01 역링크 부분). 빌드 그린(exit 0), 이 플랜 변경분 dead 링크 0. wave 1 단독 실행이라 Phase 30의 git 스테이징 경합 재발 없음. 다음: 31-02(wave 2) — 책 전체 전수 링크 게이트(dead 0) + Phase 31 최종 완료 처리.
Last activity: 2026-07-21 — 31-01-PLAN.md 실행 완료(SB-03 + LINK-01 역링크 15개)

Progress: v1.0~v1.5 ✅ SHIPPED (28 phases) · v1.6 영상 스토리보드 ▓▓▓▓▓ Phase 29·30 완료, Phase 31(31-01 완료·31-02 남음, 마지막 phase)

**Phase 30 경합 교훈(Phase 31 승계):** wave 1에 여러 플랜을 병렬로 돌릴 때 같은 repo에서 `git add`/`commit` 경합으로 남의 미완성 변경분이 섞일 수 있음 → Phase 31은 콘텐츠(31-01)와 최종 게이트(31-02, wave 2 직렬)로 분리돼 있어 경합 위험 낮음. 다수 병렬 플랜이 필요하면 파일 소유 배타성 + 커밋 직전 재확인 필수.

## Roadmap (v1.6 영상 스토리보드)

**배치 = 안 A** (`.planning/docs/스토리보드-활용-방안.md`): 2부 드론 영상 하위 "명소별 영상 스토리보드" 신규 챕터(드론 2: 차강소브라·말떼 + 통합 4: 홍고린·욜링암·바가·바양작) + 은하수 1은 3부 + 4부 field-day 상향 링크 + 명소 페이지 역링크. (2026-07-21: 어르헝 제외·바양작 추가로 고비 5곳 전부 커버.)

| Phase | Goal | Requirements |
|-------|------|---------------|
| 29 | 자산 리사이즈·정직 대조 + 2부 스캐폴드/스텁 + SUMMARY 배선 | ASSET-01, ASSET-02 |
| 30 | 드론 영상 2종 + 드론지상 통합 4종 콘텐츠(+4부 역링크) | SB-01, SB-02 |
| 31 | 은하수 타임랩스(3부) + 전체 교차/역링크 + 최종 게이트(wave 2) | SB-03, LINK-01 |

Coverage: 6/6 requirements mapped ✓. 상세: `.planning/ROADMAP.md`.

## Accumulated Context

### Decisions

전체 로그는 PROJECT.md Key Decisions 표, 마일스톤별 상세는 `.planning/milestones/`.

- (v1.6) 배치 안 A 채택 — 2부 신규 챕터(드론 전용 3 + 통합 3) + 3부 은하수 교차링크 + 4부 field-day 상향 링크 + 명소 페이지 역링크.
- (v1.6, 2026-07-21 갱신) 스토리보드 명소 구성: 어르헝(비고비) 제외, 바양작 추가(`8.바양작.png`) → 고비 명소 5곳(차강소브라·바양작·홍고린·욜링암·바가) 전부 커버. 드론 영상 2 + 통합 4 + 은하수 1.
- (v1.6) 구조/스텁 페이즈(29) 선행 + 최종 링크 게이트를 마지막 페이즈(31, wave 2) 직렬화(false-PASS 방지, v1.4/v1.5 방식 승계).
- (v1.6, Phase 29-01) `6-storyboards` 그룹을 2부 끝(5-references 뒤·3부 앞)에 추가, 은하수 페이지는 만들지 않고 자산(night-sky.jpg)만 준비 — Phase 31이 3부 6-bonus/timelapse.md에 배치.
- (v1.6, Phase 29-01) 장비 대조표(ASSET-02)는 index.md 한 곳에만 작성하고 6개 스텁은 앵커 링크로 재사용 — 향후 수치 갱신 지점을 단일화.
- (v1.5) 새 "4부 · 현장 워크플로"를 3부 뒤·부록 앞 `4-workflow/`에 신설 — 수직 깊이는 완성돼 있었고 빠진 건 트랙을 잇는 가로 연결 조직.
- (v1.5) 4부는 각 트랙 촬영·편집법 재설명 금지 — 기존 1·2·3부 링크로만 승계(중복 0).

### Open Blockers / Concerns (승계)

- 저자 실촬영본·UI 캡처·하루 실사례는 트립(8/13) 이후 교체 — v1.6 스토리보드 콘셉트 이미지도 동일 원칙(실촬영/완성 영상은 트립 후).
- 스토리보드 장비 표기가 Mini 4 Pro/RS 3 Mini/iPhone 15 Pro — 책 기준(Mini 5 Pro·R7)과 대조해 "재확인/미확인" 표기 필요(Phase 29에서 대조표 작성 완료, `src/2-drone/6-storyboards/index.md#장비-대조표`. Phase 30이 실제 수치를 채울 때 이 방침 준수).
- Phase 30 완료: SB-01(드론 2: tsagaan-suvarga·mongol-horses — 30-01) + SB-02(통합 4: khongoryn-els·yolyn-am — 30-02, baga-gazriin-chuluu·bayanzag — 30-03) 전부 실 콘텐츠(샷 리스트·설정·동선·편집·BGM)로 채워짐. 통합 4종 → 4부 field-day "세 카메라 오케스트레이션" 상향 링크 4개는 30-03이 field-day.md에 전부 삽입 완료.
- Phase 31이 채울 것: night-sky.jpg(자산 준비 완료, `src/images/storyboards/night-sky.jpg`)를 3부 `3-astro/6-bonus/timelapse.md`에 배치 + 전체 교차/역링크 + 최종 게이트(wave 2). 30-01/30-02/30-03이 wave 1에서 병행 실행되며 git 스테이징 경합이 있었음(30-01·30-02·30-03 SUMMARY에 각각 기록, 모두 자체 정정 완료 — 되돌림 커밋으로 해소, 콘텐츠 손실 없음) — Phase 31 오케스트레이션에서 plan별 커밋 타이밍 순차화 고려 권장.
- 31-01 완료(2026-07-21): SB-03(은하수 타임랩스 3부 배치) + LINK-01 역링크 부분(고비 5곳 × 1·2·3부 = 15개) 실 콘텐츠로 채움. wave 1 단독 실행이라 경합 없었음. 남은 것: 31-02(wave 2) 책 전체 전수 링크 게이트(dead 0 확인) — 이 플랜은 변경분(16파일) 한정 검증만 수행, 전수 게이트는 아직 미실행.

## Session Continuity

Last session: 2026-07-21
Stopped at: 31-01-PLAN.md 실행 완료 — 은하수 타임랩스 3부 배치(SB-03) + 고비 5곳 명소 페이지 15개 역링크(LINK-01 역링크 부분). 빌드 그린·이 플랜 변경분 링크 dead 0. SUMMARY: `.planning/phases/31-astro-storyboard-links-gate/31-01-SUMMARY.md`. 다음: 31-02-PLAN.md 실행(wave 2, 책 전체 전수 링크 게이트 + Phase 31 최종 완료 처리).
Resume file: None
