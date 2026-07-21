# Roadmap: MongolPhoto

## Milestones

- ✅ **v1.0 몽골 은하수 촬영기 (초판)** - Phases 1-6 (shipped 2026-07-13)
- ✅ **v1.1 드론 사진** - Phases 7-10 (shipped 2026-07-14)
- ✅ **v1.2 몽골 여행 사진** - Phases 11-14 (shipped 2026-07-14)
- ✅ **v1.3 여행 사진 보정** - Phases 15-19 (shipped 2026-07-15)
- ✅ **v1.4 드론 영상 (촬영 + CapCut 편집)** - Phases 20-23 (shipped 2026-07-16)
- ✅ **v1.5 현장 워크플로** - Phases 24-28 (shipped 2026-07-21)
- 🚧 **v1.6 영상 스토리보드** - Phases 29-31 (in progress)

## Phases

<details>
<summary>✅ v1.0~v1.5 (Phases 1-28) — SHIPPED — 상세는 .planning/milestones/vX.Y-ROADMAP.md 아카이브, 요약은 .planning/MILESTONES.md</summary>

- **v1.0** (Phases 1-6): mdBook 뼈대·장비·기초 촬영법, 집/야외 연습 가이드, 후보정 4장, 몽골 명소 5곳 촬영 가이드, 부록+보너스 기법.
- **v1.1** (Phases 7-10): 드론 사진 파트 신설(DJI Mini 5 Pro 조작/설정·명소별 항공·참고 자료), 책을 "몽골 사진 가이드"로 확장.
- **v1.2** (Phases 11-14): 여행 사진을 새 1부로 신설(R7+삼양12mm+RF50mm), 코스 명소별 여행 가이드, 3-트랙(여행·드론·은하수) 구조 완성.
- **v1.3** (Phases 15-19): "여행 사진 보정" 파트 신설(LR Classic 기준 9장), 목차 주제별 3부 다단계 재편, 1부 R7 실전 노트 보강.
- **v1.4** (Phases 20-23): 2부를 "드론 사진·영상"으로 이원화, DJI Mini 5 Pro 영상 촬영법 + CapCut 편집 11단계 + 예시 스토리보드 편집.
- **v1.5** (Phases 24-28): 새 "4부·현장 워크플로" 신설(준비→하루→데이터전원→귀국후), 세 트랙을 하나의 여행 가이드로 통합.

</details>

### 🚧 v1.6 영상 스토리보드 (In Progress)

**Milestone Goal:** `~/share/mongol2`의 명소·주제별 영상 제작 스토리보드 7종(샷 리스트+촬영 설정+동선+편집 흐름+BGM)을 책에 반영해, 독자가 "이 명소/주제에서 이런 컷을 이 순서·설정으로 담아 한 편을 만든다"는 구체 촬영·편집 계획을 손에 쥐게 한다. 완성작 쇼케이스가 아니라 촬영 계획·편집 설계 도구로 정직하게 배치(배치 안 A).

**Execution Order:** 29 → 30 → 31 (31의 최종 링크 게이트는 wave 2로 직렬화). Coverage 6/6 ✓.

#### Phase 29: 스토리보드 자산 처리 + 2부 챕터 스캐폴드
**Goal**: `~/share/mongol2`의 스토리보드 원본 7종이 정직 라벨·리사이즈된 자산으로 준비되고, 2부 드론 영상 하위에 새 "명소별 영상 스토리보드" 챕터 그룹이 스텁으로 나타나 목차에서 발견 가능하며, 빌드가 그린이다.
**Depends on**: Phase 28 (v1.5 완료 구조)
**Requirements**: ASSET-01, ASSET-02
**Success Criteria** (what must be TRUE):
  1. `src/images/storyboards/`에 원본 7개(각 ~2.2MB PNG)가 `sips --resampleWidth 2000` + JPEG 변환으로 존재하고, 각 파일이 수백 KB대로 줄었다.
  2. 2부 목차에 "명소별 영상 스토리보드" 그룹(드론 2: 차강소브라·몽고말떼 + 통합 4: 홍고린엘스·욜링암·바가가즈링촐로·바양작)이 스텁 페이지로 나타나고, SUMMARY에 배선되어 `mdbook build src`(create-missing=false)가 exit 0이다.
  3. 장비 대조표(스토리보드 기재 Mini 4 Pro/RS 3 Mini/iPhone 15 Pro vs 책 기준 Mini 5 Pro/Canon R7)가 문서화되어 "재확인 필요/미확인" 표기 기준으로 이후 페이지 작성에 재사용 가능하다.
  4. 각 스텁 페이지에 정직성 라벨 관례(콘셉트/기획 이미지·실촬영·완성 영상은 트립 8/13 후 교체)가 명시돼 있어 이후 콘텐츠 채우기가 규약을 따른다.
**Plans**: 1 plan

Plans:
- [x] 29-01-PLAN.md — 스토리보드 자산 7종 리사이즈(ASSET-01) + 2부 '명소별 영상 스토리보드' 그룹 스캐폴드(랜딩+장비 대조표 ASSET-02+스텁 6, 드론 2·통합 4) + SUMMARY 배선 + 빌드/링크 게이트

#### Phase 30: 드론 영상 + 드론지상 통합 스토리보드 콘텐츠
**Goal**: 독자가 2부 "명소별 영상 스토리보드"에서 드론 전용 2종과 드론+지상 통합 4종을 실제 샷 리스트·촬영 설정·동선·편집 흐름·BGM으로 확인하고, 통합 4종은 4부 field-day 세 카메라 오케스트레이션의 실제 적용 사례로 연결된다.
**Depends on**: Phase 29
**Requirements**: SB-01, SB-02
**Success Criteria** (what must be TRUE):
  1. 차강소브라·몽고말떼 2페이지가 샷 리스트·촬영 설정·동선·편집 흐름·BGM으로 채워지고, 드론 촬영법·CapCut 편집법은 기존 2부 파트로 링크 승계(재설명 없음)한다.
  2. 홍고린엘스·욜링암·바가가즈링촐로·바양작 4페이지가 "드론+지상 통합" 라벨로 세 카메라(드론·R7·짐벌/폰) 계획을 담고, 4부 `field-day.md` "세 카메라 오케스트레이션"으로 상향 링크된다.
  3. 4부 `field-day.md`에 통합 스토리보드 4종으로 가는 역링크가 삽입되어 "실제 적용 사례"로 소개된다.
  4. 6페이지 모두 이미지에 정직 라벨 캡션(콘셉트/기획·트립 후 교체·장비 재확인/미확인)이 붙어 있고, 장비 표기는 Phase 29 대조표를 따른다.
**Plans**: 3 plans

Plans:
- [ ] 30-01-PLAN.md — 드론 영상 2종 콘텐츠(차강소브라·몽고말떼, SB-01) — 이미지 전사 샷 리스트·설정·동선·편집·BGM + 정직 캡션
- [ ] 30-02-PLAN.md — 통합 2종(홍고린엘스·욜링암, SB-02) — 세 카메라 계획 + 4부 field-day 상향 링크
- [ ] 30-03-PLAN.md — 통합 2종(바가가즈링촐로·바양작, SB-02) + 4부 field-day.md 통합 4종 역링크

#### Phase 31: 은하수 타임랩스 스토리보드 + 전체 교차링크·역링크 + 최종 게이트
**Goal**: 독자가 3부에서 은하수 타임랩스 스토리보드를 촬영·편집 계획으로 보고, 명소 페이지(1·2·3부)에서 해당 스토리보드로 이동할 수 있으며, 책 전체 빌드·내부 링크가 무결하다.
**Depends on**: Phase 29, Phase 30
**Requirements**: SB-03, LINK-01
**Success Criteria** (what must be TRUE):
  1. 3부(6-bonus/timelapse.md 배치 또는 교차링크)에서 몽골밤하늘 은하수 타임랩스 스토리보드(Canon R7+RF16mm F2.8, 샷 리스트·설정·편집 흐름·BGM)를 확인할 수 있고, 촬영·편집법은 기존 3부 파트로 링크 승계한다.
  2. 명소 페이지(1·2·3부의 차강소브라·바양작·홍고린엘스·욜링암·바가가즈링촐로 — 고비 5곳 전부)에서 각각 해당 스토리보드로 가는 역링크가 존재한다.
  3. 책 전체 `mdbook build src`가 exit 0(그린)이다.
  4. 책 전체 내부 링크 전수 스캔에서 dead 0이다(false-positive 필터: 경로에 `파일명`·`session-N` 포함 제외) — wave 2로 직렬 실행해 false-PASS를 방지한다.
**Plans**: TBD (예상 2 — 콘텐츠 + 최종 게이트 분리, v1.5 28-01/28-02 방식)

Plans:
- [ ] 31-01: TBD
- [ ] 31-02: TBD (최종 게이트, wave 2, depends_on 31-01)

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → ... → 28 → 29 → 30 → 31

| Phase | Milestone | Plans Complete | Status | Completed |
|-------|-----------|-----------------|--------|-----------|
| 1-6 | v1.0 | 10/10 | Complete | 2026-07-13 |
| 7-10 | v1.1 | 10/10 | Complete | 2026-07-14 |
| 11-14 | v1.2 | 7/7 | Complete | 2026-07-14 |
| 15-19 | v1.3 | 9/9 | Complete | 2026-07-15 |
| 20-23 | v1.4 | 7/7 | Complete | 2026-07-16 |
| 24-28 | v1.5 | 6/6 | Complete | 2026-07-21 |
| 29. 스토리보드 자산 처리 + 2부 스캐폴드 | v1.6 | 1/1 | Complete | 2026-07-21 |
| 30. 드론+통합 스토리보드 콘텐츠 | v1.6 | 0/? | Not started | - |
| 31. 은하수 스토리보드 + 링크 + 최종 게이트 | v1.6 | 0/? | Not started | - |
