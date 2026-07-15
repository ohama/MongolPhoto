# Roadmap: MongolPhoto — 몽골 사진/영상 가이드

## Overview

한국어 mdBook 사진 가이드가 여행 사진·여행 사진 보정·드론 사진·은하수 사진까지 완성된 상태에서(v1.0~v1.3 SHIPPED), v1.4는 **2부 · 드론 사진**을 **드론 사진·영상**으로 넓혀 실제 영상 콘텐츠를 넣는다. 인과 사슬(촬영 → 편집 → 예시)을 따라 4개 페이즈로: 먼저 2부 구조를 재편해 사진/영상을 명확히 분리하고 스텁으로 빌드를 지키고(20), DJI Mini 5 Pro 영상 촬영법을 가르치고(21), CapCut 편집 워크플로를 단계별로 담고(22), 마지막에 대표 고비 클립 스토리보드 예시 편집 + 크레딧을 넣고 책 전체 빌드·링크를 직렬로 검증한다(23). CapCut 파트는 촬영본과 무관해 트립(8/13) 전에 지금 작성 가능하며, 실촬영본·UI 캡처는 트립 후 교체를 정직 표기한다.

## Milestones

- ✅ **v1.0 은하수 초판** — Phases 1-6 (shipped 2026-07-13)
- ✅ **v1.1 드론 사진** — Phases 7-10 (shipped 2026-07-14)
- ✅ **v1.2 여행 사진** — Phases 11-14 (shipped 2026-07-14)
- ✅ **v1.3 여행 사진 보정** — Phases 15-19 (shipped 2026-07-15)
- 🚧 **v1.4 드론 영상 (촬영 + CapCut 편집)** — Phases 20-23 (in progress)

## Phases

<details>
<summary>✅ v1.0–v1.3 (Phases 1-19) — SHIPPED. 상세는 .planning/MILESTONES.md · .planning/milestones/</summary>

- v1.0 은하수 초판 (Phases 1-6, 10 plans) — shipped 2026-07-13
- v1.1 드론 사진 (Phases 7-10, 10 plans) — shipped 2026-07-14
- v1.2 여행 사진 (Phases 11-14, 7 plans) — shipped 2026-07-14
- v1.3 여행 사진 보정 (Phases 15-19, 9 plans) — shipped 2026-07-15

각 마일스톤 로드맵 아카이브: `.planning/milestones/v1.{0,1,2,3}-ROADMAP.md`

</details>

### 🚧 v1.4 드론 영상 (촬영 + CapCut 편집) (In Progress)

**Milestone Goal:** 2부 · 드론 사진을 "드론 사진·영상"으로 재편하고 "드론 영상 촬영" + "CapCut 영상 편집" 두 파트를 신설, 상세 예제 편집과 함께 담아 초보자가 드론 영상을 찍고 CapCut으로 완성할 수 있게 한다.

**정직성 원칙(승계):** DJI/CapCut 사양·요금은 공식 링크로 검증, 미확인은 "미확인"·`[verify@write]` 표기(숫자 조작 금지) / CapCut·DJI UI = "저자 직접 캡처 예정" 플레이스홀더(재호스팅 금지) / 예제는 실촬영본 부재 → 대표 시나리오·정지 프레임, 트립(8/13) 후 교체 정직 표기 / 음악·소재는 공개 게시 라이선스 안전한 것만 안내 / 기존 드론 규제(주간 한정 등)는 재도출 없이 승계·링크.

- [x] **Phase 20: 2부 재구성 + 스텁** — 사진/영상 분리 재편, 새 파트 스텁·랜딩, 빌드 그린
- [ ] **Phase 21: 드론 영상 촬영** — DJI Mini 5 Pro 영상 설정 + 시네마틱 움직임 샷
- [ ] **Phase 22: CapCut 편집 워크플로** — 가져오기→내보내기 단계별 + 색보정·음악 라이선스
- [ ] **Phase 23: 예시 편집 스토리보드 + 크레딧 + 최종 게이트** — 대표 고비 클립 스텝바이스텝 + 참고·크레딧 + 전체 빌드/링크 검증

## Phase Details

### Phase 20: 2부 재구성 + 스텁
**Goal**: 독자가 목차 2부에서 "드론 사진"과 "드론 영상 촬영"·"CapCut 영상 편집"을 명확히 구분해 보고, 새 파트의 모든 챕터가 스텁으로 존재해 `mdbook build`(create-missing=false)가 깨지지 않는다.
**Depends on**: Nothing (마일스톤 첫 페이즈)
**Requirements**: STRUCT-01, STRUCT-02
**Success Criteria** (what must be TRUE):
  1. 독자가 목차에서 파트 제목 `# 2부 · 드론 사진·영상`을 보고, 결합 그룹 "드론 사진·영상 보정"이 사라진 대신 "드론 영상 촬영"·"CapCut 영상 편집" 두 클릭 가능 랜딩 그룹과 승격된 단독 리프 "드론 사진 후보정"을 본다.
  2. `mdbook build src`가 그린 — 신규 스텁 8개(video-index·video-shooting·video-movements·capcut-index·capcut-basics·capcut-cut·capcut-grade-speed·capcut-export·capcut-storyboard) + SUMMARY 항목이 함께 존재하고, retire된 `video-editing.md`·`postprocessing-index.md`로의 죽은 링크가 0이다.
  3. 독자가 introduction(~line 114 "영상 보정은 추후 보강")·README의 드론 파트 소개에서 영상 촬영·편집 포함으로 갱신된 문구를 본다.
  4. (정직성) 각 스텁이 실촬영본·UI 캡처 트립 후 교체 방침과 어떤 본문이 들어올지 한 줄 안내를 담아, 빈 페이지가 아니라 "작성 예정" 상태임이 정직하게 드러난다.
**Plans**: 1 plan

Plans:
- [x] 20-01-PLAN.md — SUMMARY 2부 재편(제목 개칭·결합 그룹 retire·drone-postprocessing 승격·2개 신규 랜딩 그룹) + 스텁 9개 생성 + introduction/README 갱신 + 빌드 그린 게이트

### Phase 21: 드론 영상 촬영
**Goal**: 독자가 DJI Mini 5 Pro로 편집을 염두에 둔 시네마틱 드론 영상을 왜 그렇게 설정·촬영하는지 이해하며 안전·규제 안에서 찍는다.
**Depends on**: Phase 20
**Requirements**: VSHOOT-01, VSHOOT-02
**Success Criteria** (what must be TRUE):
  1. 독자가 `video-shooting.md`에서 프레임레이트(24/30 시네마틱·50/60 부드러움·120 슬로모 소스) → 180도 셔터 규칙(≈1/(2×fps)) → 영상용 ND(사진과 달리 왜 필요한지·대낮 ~ND32–64) → D-Log M vs Normal → WB·노출 고정 순서를 이유와 함께 이해하고 설정한다.
  2. 독자가 `video-movements.md`에서 대표 시네마틱 움직임 샷(리빌·오빗·플라이오버·탑다운·드로니·크레인·사이드트랙)을 부드럽게(느린 스틱·Cine/Tripod 모드·샷당 한 움직임·앞뒤 여유 10초) 찍는 법과, 편집용 커버리지(설정+움직임+디테일, 다양한 길이·앵글) 확보를 이해한다.
  3. 독자가 초보자 기본값으로 Normal 프로파일을 권장받고(D-Log M은 고급 옵트인), 고비 환경·주간 VLOS 규제를 기존 [드론 규제](../08-references/drone-mongolia-regulations.md) 링크로 승계해(재도출 없이) 지킨다.
  4. (정직성) DJI Mini 5 Pro 정확 fps 상한·true-vertical 모드가 `[verify@write]`/미확인으로 표기되고(공식 spec 재확인 전 단정 금지, Mini 4 Pro 수치 혼입 금지), 실제 촬영 프레임은 트립 후 교체 문구가 붙는다.
**Plans**: 2 plans

Plans:
- [x] 21-01-PLAN.md — video-index.md 랜딩 + video-shooting.md 설정 논리(프레임레이트→180도 셔터→ND→D-Log M vs Normal→WB 고정, [verify@write] 격리). 빌드 게이트 소유 [wave 1]
- [ ] 21-02-PLAN.md — video-movements.md 7종 움직임 샷 + 부드러운 비행 크래프트 + 편집용 커버리지 [wave 1]

### Phase 22: CapCut 편집 워크플로
**Goal**: 독자가 CapCut으로 드론 클립을 가져와 완성 영상까지 만드는 11단계 워크플로를 단계별로 따라 하고, 무료/Pro 경계와 색보정·음악 라이선스를 정직하게 안다.
**Depends on**: Phase 20 (촬영본과 무관 — Phase 21과 병렬 작성 가능)
**Requirements**: VEDIT-01, VEDIT-02
**Success Criteria** (what must be TRUE):
  1. 독자가 CapCut 11단계 척추(가져오기 → 정렬 → 컷/트림 → 스토리 순서 → 속도(슬로모/램프) → 안정화 → 색보정 → 음악·비트싱크 → 자막 → 전환 → 내보내기)를 `capcut-basics/cut/grade-speed/export` 4개 챕터에서 단계별로 따라 한다.
  2. 독자가 CapCut 무료 티어(자체 편집 1080p 워터마크 없음)와 Pro 필요 지점(4K·HDR·프리미엄 템플릿·템플릿 워터마크)을 구분하고, 내보내기 설정(해상도·fps·비트레이트 매칭, 촬영보다 높은 fps 금지)과 과안정화·과전환 함정을 안다(대안 DaVinci Resolve 간단 언급).
  3. 독자가 D-Log M 색보정을 순서 있는 워크플로(Log→Rec709 변환 먼저 → 노출·WB → 룩)로 이해하고(생 Log에 룩 LUT 금지, LUT 임포트는 데스크톱 전용), Normal 소스는 가벼운 보정만 필요함을 안다.
  4. (정직성·최대 지뢰) 독자가 CapCut 내장 음원은 TikTok/CapCut 생태계 한정 라이선스라 유튜브 업로드 시 Content ID 위험(뮤트·수익화 제한)이 있음을 눈에 띄는 콜아웃으로 이해하고, 기본값으로 YouTube Studio Audio Library/로열티프리를 안내받는다(유료 소스는 요금 `[verify@write]`). CapCut 요금 USD/KRW·free-vs-Pro 경계·LUT 메뉴 위치는 미확인/저자 직접 캡처 예정, "ByteDance 소유·정책 변동 가능" 캐비어트 포함.
**Plans**: 2 plans (wave 1)

Plans:
- [ ] 22-01-PLAN.md — capcut-index.md 랜딩 + capcut-basics.md(설치·무료/Pro·데스크톱·DaVinci) + capcut-cut.md(워크플로 1~6단계). 빌드 게이트 소유
- [ ] 22-02-PLAN.md — capcut-grade-speed.md(D-Log M 순서 워크플로 + 음악 라이선스 콜아웃) + capcut-export.md(자막·전환·내보내기 저더 방지). grep-verify

### Phase 23: 예시 편집 스토리보드 + 크레딧 + 최종 게이트
**Goal**: 독자가 대표 고비 드론 클립 시나리오로 45~60초 영상을 스토리보드부터 CapCut 스텝바이스텝까지 따라 하며 "완성 감각"을 얻고, 파트가 검증된 참고·크레딧으로 마무리되며, 책 전체 빌드·내부 링크가 통과한다.
**Depends on**: Phase 21, Phase 22 (워크플로·촬영 이론의 적용판; 최종 게이트는 wave 2 직렬)
**Requirements**: VEXAMPLE-01, VREF-01
**Success Criteria** (what must be TRUE):
  1. 독자가 `capcut-storyboard.md`에서 6클립 ~50초 스토리보드 표(샷#·움직임·초·CC0 정지프레임·편집 노트)를 보고, 속도 램프 1회·비트싱크 컷 2회를 11단계에 매핑한 스텝바이스텝 편집을 따라 한다.
  2. 독자가 예제가 실촬영본 부재로 "대표 시나리오"임을 명확히 인지한다 — 3장 Bernard Gagnon CC0 정지프레임(khongoryn-els·bayanzag·yolyn-am, "지상 촬영 예시 — 실제 드론 영상 프레임은 트립 후 교체" 캡션), 자체 영상 임베드 없음(GitHub Pages 한계), 스톡을 CC0로 오표기하지 않음.
  3. 독자가 새 파트의 크레딧에서 DJI/CapCut 검증 링크, 라이선스 안전 음원 소스, 정지프레임 출처·라이선스를 검증된 것만(미확인 표기, 기존 08-references 드론 자료 재사용) 정리된 형태로 본다.
  4. (게이트) `mdbook build src`가 그린이고 책 전체 내부 링크 전수 스캔에서 dead 0 — 이 최종 검증은 wave 2로 직렬화되어 콘텐츠 플랜 완료 후 실행된다(v1.2/v1.3 false-PASS 레이스 방지).
**Plans**: TBD

Plans:
- [ ] 23-01: capcut-storyboard.md (6클립 스토리보드 + 스텝바이스텝, CC0 스틸·대표 시나리오 정직 라벨) + credits/참고 정리 (VREF) [wave 1]
- [ ] 23-02: 책 전체 최종 `mdbook build src` 그린 + 내부 링크 전수 스캔(dead 0) + LINK-CHECK 리포트 [wave 2, depends_on 23-01]

## Progress

**Execution Order:** 20 → 21 → 22 → 23 (21·22는 촬영본 무관·디스조인트 파일이라 병렬 가능; 23-02 최종 게이트는 wave 2 직렬)

| Phase | Milestone | Plans Complete | Status | Completed |
|-------|-----------|----------------|--------|-----------|
| 20. 2부 재구성 + 스텁 | v1.4 | 1/1 | Complete | 2026-07-15 |
| 21. 드론 영상 촬영 | v1.4 | 1/2 | In progress | - |
| 22. CapCut 편집 워크플로 | v1.4 | 0/2 | Not started | - |
| 23. 예시 스토리보드 + 최종 게이트 | v1.4 | 0/2 | Not started | - |
