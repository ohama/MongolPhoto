# Project State

## Project Reference

See: .planning/PROJECT.md (updated 2026-07-21)

**Core value:** 트래킹 장비 없이도 은하수 사진이 "잘 나오게" 하는 전 과정(장비 → 촬영 → 후보정)을 초보자가 따라 성공하도록 담는다. (여행·드론·은하수 3트랙 + v1.5 현장 워크플로로 통합 완성; v1.6은 명소·주제별 영상 제작 스토리보드로 촬영·편집 계획을 구체화)
**Current focus:** v1.6 영상 스토리보드 — Phase 29 완료·검증 PASS. Phase 30 완료(3/3 플랜). 다음 Phase 31.

## Current Position

Phase: 30 of 31 완료 (드론 영상 3종 + 드론지상 통합 4종 콘텐츠 + 4부 역링크) → 다음 Phase 31
Plan: 30-01·30-02·30-03 전부 완료. SB-01(드론 2종)·SB-02(통합 4종) 완결.
Status: 30-02 완료 — `~/share/mongol2/{2.홍고린엘스,3.욜링암}.png`를 직접 판독·전사해 통합 2페이지(36컷·28컷 샷 리스트, 카메라별 표기·촬영 설정·세 카메라 운용/동선·편집 흐름·BGM)를 실 콘텐츠로 채움, SB-02 잔여분 완결(30-03이 이미 채운 바가가즈링 촐로·바양작과 합쳐 통합 4종 전부). 두 페이지 모두 4부 field-day.md "세 카메라 오케스트레이션"으로 상향 링크(field-day.md 자체는 30-03이 이미 역링크 삽입 완료, 30-02는 수정하지 않음). 욜링암은 원본이 명시한 협곡 내부 드론 비행 제한을 반영해 해당 컷을 "드론(미확인)"으로 별도 표기. 빌드 그린·이 플랜 변경분 링크 dead 0. wave 1 병행 실행 중 30-03의 커밋이 30-02 작업 트리의 미완성 변경분을 일시적으로 함께 포함시키는 경합이 있었으나 30-03이 자체 되돌림 커밋(`aa003f0`)으로 정정했고, 30-02는 이후 정상적으로 자신의 두 파일만 개별 커밋(콘텐츠 손실 없음). Phase 30 3개 플랜(30-01·30-02·30-03) 전부 완료.
Last activity: 2026-07-21 — 30-02-PLAN.md 실행 완료(SUMMARY: `.planning/phases/30-storyboard-content/30-02-SUMMARY.md`)

Progress: v1.0~v1.5 ✅ SHIPPED (28 phases) · v1.6 영상 스토리보드 ▓▓▓▓░ Phase 29·30 완료(2/3 phases), 다음 Phase 31(wave 2)

## Roadmap (v1.6 영상 스토리보드)

**배치 = 안 A** (`.planning/docs/스토리보드-활용-방안.md`): 2부 드론 영상 하위 "명소별 영상 스토리보드" 신규 챕터(드론 2: 차강소브라·말떼 + 통합 4: 홍고린·욜링암·바가·바양작) + 은하수 1은 3부 + 4부 field-day 상향 링크 + 명소 페이지 역링크. (2026-07-21: 어르헝 제외·바양작 추가로 고비 5곳 전부 커버.)

| Phase | Goal | Requirements |
|-------|------|---------------|
| 29 | 자산 리사이즈·정직 대조 + 2부 스캐폴드/스텁 + SUMMARY 배선 | ASSET-01, ASSET-02 |
| 30 | 드론 영상 3종 + 드론지상 통합 3종 콘텐츠(+4부 역링크) | SB-01, SB-02 |
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

## Session Continuity

Last session: 2026-07-21
Stopped at: 30-02-PLAN.md 실행 완료 — 홍고린엘스·욜링암 드론+지상 통합 스토리보드 실 콘텐츠(원본 이미지 전사) 채움, SB-02 완결(30-03의 바가가즈링 촐로·바양작과 합쳐 통합 4종 전부). 빌드 그린·이 플랜 변경분 링크 dead 0. SUMMARY: `.planning/phases/30-storyboard-content/30-02-SUMMARY.md`. Phase 30(30-01·30-02·30-03) 전부 완료. 다음: Phase 30 완료 처리(ROADMAP/REQUIREMENTS/STATE 갱신) → Phase 31(wave 2, 은하수 3부 배치 + 전체 링크 게이트).
Resume file: None
