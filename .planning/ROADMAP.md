# Roadmap: MongolPhoto

## Milestones

- ✅ **v1.0 몽골 은하수 촬영기 (초판)** - Phases 1-6 (shipped 2026-07-13)
- 🚧 **v1.1 드론 사진** - Phases 7-10 (in progress)

## Phases

<details>
<summary>✅ v1.0 몽골 은하수 촬영기 (Phases 1-6) - SHIPPED 2026-07-13</summary>

전체 상세는 `.planning/milestones/v1.0-ROADMAP.md` 참조.

- [x] **Phase 1: mdBook 뼈대 + 장비 + 기초 촬영법** - book 골격, 장비(추천), 기초 촬영법, 연습 로그 템플릿, GitHub Pages 배포
- [x] **Phase 2: 집에서 연습할 사항 (가이드)** - 가기 전 집에서 익힐 조작·세팅·초점·구도 연습
- [x] **Phase 3: 야외에서 연습할 사항 (가이드)** - 가기 전 근교 어두운 곳에서 할 실전 연습·현장 리허설
- [x] **Phase 4: 후보정(post-processing) 연습** - RAW 현상 → 스태킹 → 은하수 강조 → 전/후 비교
- [x] **Phase 5: 몽골 여행지별 촬영 가이드** - 고비 촬영 일반 원리 + 명소별 촬영 가이드
- [x] **Phase 6: 부록 + 보너스 기법 + 배포 검증** - 치트시트, 체크리스트, 용어사전, 보너스 기법, 최종 배포 확인

</details>

### 🚧 v1.1 드론 사진 (In Progress)

**Milestone Goal:** 몽골 고비에서 DJI Mini 5 Pro로 (주간·황혼) 드론 사진을 찍는 법을 은하수 파트 앞에 새 파트로 추가하고, 책을 "몽골 사진 가이드"로 확장한다.

**Overview:** v1.0의 은하수 콘텐츠는 그대로 유지한 채, 그 앞에 새 드론 파트(개요→규제 요약→조작/설정→구도/비행→환경/후보정, 이어서 명소별 항공 가이드, 마지막으로 검증이 필요한 참고 자료)를 추가한다. `book.toml`의 `create-missing=false` 제약 때문에 SUMMARY 골격과 스텁이 가장 먼저 필요하다(Phase 7). 그다음 드론 기초(Phase 8) → 명소별 항공 촬영(Phase 9) → 검증 시간이 가장 많이 필요한 규제/참고 자료(Phase 10) 순으로 진행한다. 몽골 드론 규제는 확인된 사실(CAAM Part 101: 주간·VLOS·고도·공항 이격)과 미확인 사실(250g 면제, 국립공원 규정)을 명확히 구분해 정직하게 표기한다.

- [x] **Phase 7: 구조·제목 확장** - SUMMARY 재편(드론 파트 최상단), book.toml/소개/README를 "몽골 사진 가이드"로 확장, 전체 스텁 파일로 빌드 그린 유지
- [x] **Phase 8: 드론 기초 (09-drone/)** - 개요·규제 요약·DJI Mini 5 Pro 조작/설정·항공 구도·비행 기초·고비 환경 주의·드론 후보정
- [x] **Phase 9: 명소별 항공 촬영 (10-drone-sites/)** - 고비 명소 5곳 항공 구도·피사체 가이드 + 명소별 주의사항(국립공원 미확인 캐비어트 포함)
- [ ] **Phase 10: 드론 참고 자료 (08-references/)** - 몽골 드론 규제/허가(검증·미확인 구분) + 장비/튜토리얼 링크 + 예시 갤러리, 최종 빌드/링크 검증

## Phase Details

### Phase 7: 구조·제목 확장
**Goal**: 책이 "몽골 사진 가이드"로 재구성되고, 드론 파트가 은하수 파트 앞에 배치된 SUMMARY 골격과 스텁 파일이 존재해 이후 모든 단계에서 `mdbook build`가 깨지지 않는다.
**Depends on**: Phase 6 (v1.0 완결된 은하수 콘텐츠 위에 재편)
**Requirements**: BOOK-01, BOOK-02
**Success Criteria** (what must be TRUE):
  1. `book.toml`의 제목·설명이 드론+은하수를 포괄하는 "몽골 사진 가이드"로 바뀌어 있다.
  2. `introduction.md`/`README.md`가 드론 파트와 은하수 파트를 함께 소개하고, "이 책을 읽는 법"이 새 구조(드론 → 은하수 → 참고 자료)를 반영한다.
  3. `SUMMARY.md`에서 드론 파트(09-drone, 10-drone-sites)가 기존 은하수 파트보다 앞에 있고, 기존 01-08 폴더는 그대로 두되 부 번호(2부~)만 재조정되어 있다.
  4. `SUMMARY.md`의 모든 항목(드론 신규 페이지 포함)에 대응하는 실제 파일(스텁 포함)이 존재해 `mdbook build`가 성공한다.
**Plans**: 1 plan (1/1 complete)

Plans:
- [x] 07-01-PLAN.md — 드론 스텁 16개 생성 + SUMMARY 재편(드론 먼저) + book.toml/introduction/README를 "몽골 사진 가이드"로 확장 + 빌드 그린 검증

### Phase 8: 드론 기초 (09-drone/)
**Goal**: 독자가 DJI Mini 5 Pro로 몽골에서 주간·황혼 항공 사진을 안전하고 정직한 규제 이해 위에서 촬영하는 기초를 익힌다.
**Depends on**: Phase 7 (SUMMARY 골격·스텁 필요)
**Requirements**: DRONE-01, DRONE-02, DRONE-03, DRONE-04, DRONE-05, DRONE-06
**Success Criteria** (what must be TRUE):
  1. 드론 파트 개요에 범위(사진 중심·주간/황혼)와 야간 제외 이유(법 + 하드웨어 한계) 두 가지가 모두 명시되어 있다.
  2. 개요/초반에 규제 핵심 요약(주간·VLOS·고도 상한·공항 이격)과 "출발 전 CAAM/현장 재확인" 안내, 250g 면제·국립공원 규정에 대한 "미확인" 표기가 있다.
  3. DJI Mini 5 Pro 기본 조작 + 카메라 설정(DNG RAW·노출·ND 필터·히스토그램) 페이지가 존재한다.
  4. 항공 구도(탑다운·45°·리딩라인·스케일) + 비행 기초(호버·오빗·리빌)·배터리/RTH 관리 페이지가 존재한다.
  5. 고비 환경 주의(바람·모래·저온·원격지 충전, 기존 야외 위험 챕터 링크)와 드론 후보정(기존 RAW 현상 챕터 링크 + 드론 델타) 페이지가 존재한다.
**Plans**: 3 plans (0/3 complete)

Plans:
- [x] 08-01-PLAN.md — 드론 개요·범위·야간 제외 + 규제 핵심/미확인 요약 + DJI 기본 조작 + 카메라 설정(DNG RAW·노출·ND·히스토그램) (DRONE-01·02·03)
- [x] 08-02-PLAN.md — 항공 구도(탑다운·45°·리딩라인·스케일) + 비행 기초(호버·오빗·리빌)·배터리/RTH (DRONE-04)
- [x] 08-03-PLAN.md — 고비 환경 주의(바람·모래·저온·원격 충전) + 드론 후보정(raw-develop 링크 + 델타) (DRONE-05·06)

### Phase 9: 명소별 항공 촬영 (10-drone-sites/)
**Goal**: 독자가 몽골 코스의 고비 명소 5곳에서 드론으로 무엇을 어떻게 찍을지, 그리고 명소별로 무엇을 조심해야 할지 안다.
**Depends on**: Phase 8 (구도·설정 개념이 명소 적용의 전제)
**Requirements**: DSITE-01, DSITE-02
**Success Criteria** (what must be TRUE):
  1. 개요 페이지가 `04-mongolia/overview.md`의 GPS 표를 중복 없이 링크한다.
  2. 5개 명소(차강소브라가·바양작·홍고린엘스·욜링암·바가가즈링 촐로) 각각에 항공 구도·피사체 가이드 페이지가 존재한다.
  3. 욜링암·홍고린엘스 페이지에 국립공원 드론 규정 "미확인 — 현장/관리소 재확인" 캐비어트가 명시되어 있다.
  4. 각 명소 페이지에 공통이 아닌 그 지형에 특화된 위험 주의(예: 홍고린엘스 바람/모래, 욜링암 협곡벽/GPS 저하)가 있다.
**Plans**: 3 plans (3/3 complete)

Plans:
- [x] 09-01-PLAN.md — 명소별 항공 파트 허브(overview: GPS 표·이론 링크 재사용 + 국립공원 미확인 캐비어트) + 차강소브라가(흰 절벽·층리)
- [x] 09-02-PLAN.md — 홍고린엘스(사구·바람·모래) + 욜링암(협곡벽·GPS·RTH), 두 국립공원 미확인 캐비어트 사이트
- [x] 09-03-PLAN.md — 바양작(붉은 사암·화석지) + 바가가즈링 촐로(화강암 기암·GPS 다중경로·최북단 저온)

### Phase 10: 드론 참고 자료 (08-references/)
**Goal**: 독자가 몽골 드론 규제·장비·튜토리얼·예시를 신뢰 가능한 형태로 참고할 수 있고, 확인된 사실과 미확인 사실이 명확히 구분되어 있다.
**Depends on**: Phase 9 (본문 안정화 이후, 검증 시간이 가장 많이 필요한 콘텐츠를 마지막에 작성)
**Requirements**: DREF-01, DREF-02, DREF-03
**Success Criteria** (what must be TRUE):
  1. 규제 참고 페이지에 CAAM Part 101 등 원출처로 확인된 사실과, 미확인 항목(등록비·처리기간·250g 면제·국립공원 규정)이 명확히 구분 표기되어 있다.
  2. DJI Mini 5 Pro 사양·장비·촬영 기법 튜토리얼 링크 페이지가 존재한다.
  3. 드론 항공사진 예시 갤러리가 라이선스 출처 표기와 함께 존재한다.
  4. `mdbook build`가 green이고, 드론 참고 자료 파트가 SUMMARY에서 은하수 파트보다 앞(또는 드론 파트 직후)에 렌더되며, 전체 링크(내부·외부 참고)가 깨지지 않는다.
**Plans**: TBD

Plans:
- [ ] 10-01: TBD

## Progress

**Execution Order:**
Phases execute in numeric order: 7 → 8 → 9 → 10

**날짜 게이트:** 없음 — 몽골 출발(8/13) 전 완결이 목표이나, 콘텐츠 자체는 순서대로 지금 작성 가능. Phase 10(규제 검증)은 가장 늦게 작성해 재확인 시간을 최대화한다.

| Phase | Milestone | Plans Complete | Status | Completed |
|-------|-----------|----------------|--------|-----------|
| 1. mdBook 뼈대 + 장비 + 기초 촬영법 | v1.0 | 5/5 | ✓ Complete | 2026-07-09 |
| 2. 집에서 연습할 사항 | v1.0 | 1/1 | ✓ Complete | 2026-07-09 |
| 3. 야외에서 연습할 사항 | v1.0 | 1/1 | ✓ Complete | 2026-07-09 |
| 4. 후보정 연습 | v1.0 | 1/1 | ✓ Complete | 2026-07-09 |
| 5. 몽골 여행지별 촬영 가이드 | v1.0 | 1/1 | ✓ Complete | 2026-07-09 |
| 6. 부록 + 보너스 + 배포 검증 | v1.0 | 1/1 | ✓ Complete | 2026-07-10 |
| 7. 구조·제목 확장 | v1.1 | 1/1 | ✓ Complete | 2026-07-13 |
| 8. 드론 기초 (09-drone/) | v1.1 | 3/3 | ✓ Complete | 2026-07-13 |
| 9. 명소별 항공 촬영 (10-drone-sites/) | v1.1 | 3/3 | ✓ Complete | 2026-07-13 |
| 10. 드론 참고 자료 (08-references/) | v1.1 | 0/TBD | Not started | - |
