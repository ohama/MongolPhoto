# Roadmap: MongolPhoto

## Overview

몽골 고비에서 여행 사진(Canon R7)·드론 사진(DJI Mini 5 Pro)·은하수 사진을 찍는 한국어 mdBook 가이드. v1.0~v1.4에서 세 트랙(여행·드론·은하수)의 "어떻게 찍고 편집하나"(수직 깊이)를 완성했다. v1.5는 세 트랙을 하나의 여행으로 잇는 "가로 연결 조직"(현장 워크플로)을 신설한다 — 여행 전 준비 → 하루 현장 운용(세 카메라 오케스트레이션) → 귀국 후 정리, 그리고 이를 떠받치는 데이터·전원 운용까지. 책을 "세 개의 매뉴얼"에서 "하나의 통합 촬영 여행 가이드"로 완성한다.

## Milestones

- ✅ **v1.0 몽골 은하수 촬영기 초판** — Phases 1-6 (shipped 2026-07-13)
- ✅ **v1.1 드론 사진** — Phases 7-10 (shipped 2026-07-14)
- ✅ **v1.2 몽골 여행 사진** — Phases 11-14 (shipped 2026-07-14)
- ✅ **v1.3 여행 사진 보정** — Phases 15-19 (shipped 2026-07-15)
- ✅ **v1.4 드론 영상 (촬영 + CapCut 편집)** — Phases 20-23 (shipped 2026-07-16)
- 🚧 **v1.5 현장 워크플로** — Phases 24-28 (in progress)

## Phases

**Phase Numbering:**
- Integer phases (24, 25, …): Planned milestone work
- Decimal phases (24.1, …): Urgent insertions (marked INSERTED)

<details>
<summary>✅ v1.0 몽골 은하수 촬영기 초판 (Phases 1-6, 10 plans) — SHIPPED 2026-07-13</summary>

트래킹 장비 없이 몽골 고비에서 은하수 사진을 장비→촬영→후보정까지 초보자가 따라 하도록 담은 한국어 mdBook 튜토리얼 초판 + GitHub Pages 자동 배포.

- [x] **Phase 1-6** — mdBook 골격·CI 배포, 장비(추천만)·기초 촬영 6장, 가기 전 연습(집 3·야외 3), 후보정 4장 + 보너스 3장, 고비 명소 5곳, 부록(치트시트·체크리스트·앱/SW·용어사전·카메라렌즈) + 소개·CC0 예시 9장. (43개 md, ~2,008줄)

_상세: `.planning/milestones/v1.0-ROADMAP.md`_

</details>

<details>
<summary>✅ v1.1 드론 사진 (Phases 7-10, 10 plans) — SHIPPED 2026-07-14</summary>

책을 "몽골 사진 가이드"로 확장 — 은하수 앞에 DJI Mini 5 Pro 드론 사진(주간·황혼) 파트 추가.

- [x] **Phase 7-10** — 드론 파트 재편(SUMMARY·book.toml·소개), 드론 기초 7장(09-drone), 명소별 항공 6장(10-drone-sites), 드론 참고 3장(규제 CAAM 확인/미확인·DJI 사양·튜토리얼), CC 예시 사진 9장.

_상세: `.planning/milestones/v1.1-ROADMAP.md`_

</details>

<details>
<summary>✅ v1.2 몽골 여행 사진 (Phases 11-14, 7 plans) — SHIPPED 2026-07-14</summary>

드론·은하수 앞에 "몽골 여행 사진"을 새 최상단 1부로 추가 — 책을 여행·드론·은하수 3-트랙 가이드로 완성.

- [x] **Phase 11-14** — 3-트랙 재편, 여행 기초 5장(11-travel), 코스 명소별 6장(12-travel-sites), 여행 참고(CC 사진 9장·튜토리얼), 책 전체 내부 링크 483개 전수 검증(dead 0).

_상세: `.planning/milestones/v1.2-ROADMAP.md`_

</details>

<details>
<summary>✅ v1.3 여행 사진 보정 (Phases 15-19, 9 plans) — SHIPPED 2026-07-15</summary>

여행 사진 파트 다음에 "여행 사진 보정" 파트(13-editing, 9장) 신설 + 목차 주제별 3부 다단계 재편 + 1부 R7 노트 보강.

- [x] **Phase 15-19** — 보정 9장(개념·카탈로그·LR vs 8앱·17단계 순서·상황별 레시피·마스킹·파노라마/HDR·촬영 연동·크레딧), CC0 before/after 4장, 목차 3부 다단계 재편 + 그룹 index 랜딩 7개, 1부 R7 보강(Av/Auto ISO/Tv·커스텀 모드·특수 장면), 링크 591개 dead 0.

_상세: `.planning/milestones/v1.3-ROADMAP.md`_

</details>

<details>
<summary>✅ v1.4 드론 영상 (촬영 + CapCut 편집) (Phases 20-23, 7 plans) — SHIPPED 2026-07-16</summary>

2부를 "드론 사진·영상"으로 넓혀 DJI Mini 5 Pro 영상 촬영 + CapCut 편집 워크플로 + 대표 고비 스토리보드 예시 편집을 추가.

- [x] **Phase 20** — 2부 재구성 + 스텁(사진/영상 분리·결합 그룹 retire·스텁 9개로 빌드 그린)
- [x] **Phase 21** — 드론 영상 촬영(설정 논리 + 시네마틱 움직임 7종)
- [x] **Phase 22** — CapCut 편집 워크플로 11단계(무료/Pro·색보정·음악 Content ID 콜아웃)
- [x] **Phase 23** — 예시 편집 스토리보드 + 크레딧 + 최종 게이트(빌드 그린 + 링크 715 dead 0, wave 2 직렬)

_상세: `.planning/milestones/v1.4-ROADMAP.md`_

</details>

### 🚧 v1.5 현장 워크플로 (In Progress)

**Milestone Goal:** 세 트랙(여행·드론·은하수)을 하나의 여행으로 잇는 새 "4부 · 현장 워크플로" 파트(3부 뒤·부록 앞)를 신설 — 준비 → 하루 현장 운용 → 데이터·전원 → 귀국 후 정리. 각 트랙 촬영·편집법은 재설명 없이 기존 1·2·3부 링크로 승계하고, 하루 타임라인 시각은 예시 템플릿, 무게·용량·요금은 검증/미확인, 실촬영본·화면 캡처는 트립(8/13) 후 교체로 정직 표기한다.

- [x] **Phase 24: 현장 워크플로 파트 신설 + 스텁** — 새 4부 + 개요 랜딩 + 전 챕터 스텁, create-missing=false 빌드 그린
- [ ] **Phase 25: 여행 전 준비 (PREP)** — 3장비 통합 패킹 + 촬영 계획·앱 오프라인
- [ ] **Phase 26: 하루 현장 운용 (FIELD)** — 하루 타임라인 + 세 카메라 오케스트레이션
- [ ] **Phase 27: 데이터·전원 운용 (DATA)** — 카드 전략·현장 백업 + 멀티데이 오프그리드 전원
- [ ] **Phase 28: 귀국 후 정리 (POST) + 최종 게이트** — 3-2-1 백업·선별·편집 순서 허브 + 책 전체 빌드·링크 검증

## Phase Details

### Phase 24: 현장 워크플로 파트 신설 + 스텁
**Goal**: 목차에 3부 뒤·부록 앞으로 새 "4부 · 현장 워크플로" 파트가 개요 랜딩과 함께 나타나고, 준비·하루·데이터전원·귀국후 모든 챕터가 스텁으로 존재해 `mdbook build src`(create-missing=false)가 그린이다.
**Depends on**: Phase 23 (v1.4 완료 상태의 SUMMARY/구조)
**Requirements**: (구조 기반 페이즈 — v1.5 요구사항 없음; PREP/FIELD/DATA/POST 페이즈를 가능케 함)
**Success Criteria** (what must be TRUE):
  1. 독자가 목차(SUMMARY)에서 3부와 부록 사이에 "4부 · 현장 워크플로" 파트와 개요 랜딩 페이지를 본다.
  2. 파트의 모든 예정 챕터(준비 2·하루 2·데이터전원 2·귀국후 2 + 개요 index)가 스텁으로 존재하고 SUMMARY 항목과 1:1로 일치한다(create-missing=false 위반 없음).
  3. `mdbook build src`가 에러 없이 그린이고 내부 링크 스캔 dead 0이다.
  4. 개요 랜딩이 파트의 흐름(준비 → 하루 → 데이터·전원 → 귀국 후)을 안내하고, 각 트랙 촬영·편집법은 기존 1·2·3부 링크로 승계함을 밝힌다.
**Plans**: 1 plan

Plans:
- [x] 24-01-PLAN.md — `4-workflow/` 신설(옵션 a · 평면 5페이지: 개요 랜딩 + 준비·하루·데이터전원·귀국후 스텁 4) + SUMMARY 4부 섹션 + introduction 카드 그룹 + README 항목 + 빌드 그린·링크 dead 0 게이트

### Phase 25: 여행 전 준비 (PREP)
**Goal**: 독자가 세 장비를 한 번에 챙기고, 달·일정 기반 촬영 계획과 앱·지도 오프라인 준비까지 출발 전 모든 준비를 빠짐없이 마친다.
**Depends on**: Phase 24
**Requirements**: PREP-01, PREP-02
**Success Criteria** (what must be TRUE):
  1. 독자가 세 장비(R7·드론·야간 R7) 통합 패킹·준비물 리스트로 빠짐없이 챙기며, 리스트는 부록 체크리스트를 허브로 링크한다(중복 신설 없이). ← PREP-01
  2. 독자가 신월·달 위상·일정별 낮/밤 배분을 반영한 출발 전 촬영 계획을 세운다. ← PREP-02
  3. 독자가 PhotoPills·Stellarium·오프라인 지도를 출발 전 다운로드해 오프라인에서 쓸 준비를 마친다. ← PREP-02
  4. 장비 무게·카드 용량·요금 등 수치는 검증 시만 단정하고 아니면 "미확인"으로 표기하며, 새 페이지 반영 후 `mdbook build src` 그린이다(정직성 + 빌드).
**Plans**: 1-2 plans (예상)

Plans:
- [ ] 25-01: 통합 패킹·준비물 리스트(3장비, 부록 checklists 허브 링크) — PREP-01
- [ ] 25-02: 촬영 계획(신월·달·일정 낮/밤 배분) + 앱·지도 오프라인 다운로드 — PREP-02

### Phase 26: 하루 현장 운용 (FIELD)
**Goal**: 독자가 도착부터 밤까지 하루를 한 타임라인으로 운용하고, 세 카메라를 우선순위에 따라 전환하며 셔터 찬스를 놓치지 않는다.
**Depends on**: Phase 24 (Phase 25와 독립적으로 진행 가능)
**Requirements**: FIELD-01, FIELD-02
**Success Criteria** (what must be TRUE):
  1. 독자가 낮 여행 → 오후 드론 → 골든/블루아워 → 천문박명 후 은하수·스타트레일 → 백업으로 이어지는 하루 타임라인을 예시 시간표와 함께 따라 한다. ← FIELD-01
  2. 독자가 세 카메라(R7·드론·야간 R7)를 언제 꺼내 쓸지, 우선순위와 전환 규칙, 셔터 찬스를 놓치지 않는 법을 이해하고 하루 안에서 전환한다. ← FIELD-02
  3. 예시 시각은 고정 단정이 아니라 "날짜·계절·일몰시각별 재확인" 예시 템플릿으로 명시한다(정직성).
  4. 각 트랙 촬영법은 재설명 없이 기존 1·2·3부로 링크 승계하고, 새 페이지 반영 후 `mdbook build src` 그린이다.
**Plans**: 1-2 plans (예상)

Plans:
- [ ] 26-01: 하루 타임라인(예시 시간표 템플릿, 낮→드론→황혼→밤→백업) — FIELD-01
- [ ] 26-02: 세 카메라 오케스트레이션(우선순위·전환·셔터 찬스) — FIELD-02

### Phase 27: 데이터·전원 운용 (DATA)
**Goal**: 독자가 멀티데이 오프그리드에서 카드·현장 백업·전원을 병목 없이 운용한다(정전=촬영 전체 손실 리스크 방지).
**Depends on**: Phase 24
**Requirements**: DATA-01, DATA-02
**Success Criteria** (what must be TRUE):
  1. 독자가 카드 전략(용량·개수·로테이션·현장 포맷 규칙)과 현장 RAW 백업(노트북/휴대 SSD/폰 오프로드) 방법을 안다. ← DATA-01
  2. 독자가 멀티데이 오프그리드 전원(장비별 배터리·파워뱅크·차량 인버터/시가잭·저온 배터리 대응·충전 우선순위)을 운용한다. ← DATA-02
  3. 특정 백업 장비·인버터·SSD·파워뱅크는 유형·기준만 추천하고 정밀 스펙·용량은 단정하지 않는다(추천만·미확인 표기).
  4. 새 페이지 반영 후 `mdbook build src` 그린 + 내부 링크 dead 0.
**Plans**: 1 plan

Plans:
- [ ] 27-01: 카드 전략·현장 RAW 백업(DATA-01) + 멀티데이 오프그리드 전원(DATA-02)

### Phase 28: 귀국 후 정리 (POST) + 최종 게이트
**Goal**: 독자가 귀국 후 백업·선별·트랙별 편집 순서·아카이브로 촬영본을 완성하고, 파트 전체가 책 빌드·링크 검증을 통과한다.
**Depends on**: Phase 24, 25, 26, 27 (파트 마감 + 편집 순서 허브가 앞 파트를 링크)
**Requirements**: POST-01, POST-02
**Success Criteria** (what must be TRUE):
  1. 독자가 귀국 후 촬영본을 3-2-1 원칙으로 오프로드·백업하고 안전하게 보관·아카이브한다. ← POST-01
  2. 독자가 대량 촬영본을 선별(컬링)하고 트랙별 편집 순서(여행=Lightroom / 드론영상=CapCut / 은하수=스태킹)로 완성하며, 이 장이 기존 편집 파트를 순서로 잇는 허브 역할을 한다. ← POST-02
  3. 클라우드 백업은 원칙(3-2-1)만 담고 상세 요금은 비교하지 않으며, 실제 백업 스크린샷·하루 실사례는 트립(8/13) 후 교체로 정직 표기한다.
  4. 최종 게이트(wave 2 직렬): 책 전체 `mdbook build src` 그린 + 내부 링크 전수 스캔 dead 0(false-PASS 방지 위해 콘텐츠 플랜 뒤 직렬 실행).
**Plans**: 2 plans (예상)

Plans:
- [ ] 28-01: 귀국 후 정리 — 3-2-1 백업·아카이브(POST-01) + 선별·트랙별 편집 순서 허브(POST-02)
- [ ] 28-02: 책 전체 최종 `mdbook build src` 그린 + 내부 링크 전수 스캔 dead 0 리포트 [wave 2, depends_on 28-01]

## Progress

**Execution Order:** 24 → (25 · 26 · 27 병행 가능) → 28

| Phase | Milestone | Plans Complete | Status | Completed |
|-------|-----------|----------------|--------|-----------|
| 1-6. 은하수 초판 | v1.0 | 10/10 | Complete | 2026-07-13 |
| 7-10. 드론 사진 | v1.1 | 10/10 | Complete | 2026-07-14 |
| 11-14. 여행 사진 | v1.2 | 7/7 | Complete | 2026-07-14 |
| 15-19. 여행 보정 | v1.3 | 9/9 | Complete | 2026-07-15 |
| 20-23. 드론 영상 | v1.4 | 7/7 | Complete | 2026-07-16 |
| 24. 파트 신설 + 스텁 | v1.5 | 1/1 | Complete | 2026-07-20 |
| 25. 여행 전 준비 | v1.5 | 0/2 | Not started | - |
| 26. 하루 현장 운용 | v1.5 | 0/2 | Not started | - |
| 27. 데이터·전원 운용 | v1.5 | 0/1 | Not started | - |
| 28. 귀국 후 정리 + 게이트 | v1.5 | 0/2 | Not started | - |
