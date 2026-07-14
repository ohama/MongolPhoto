# Roadmap: MongolPhoto

## Milestones

- ✅ **v1.0 몽골 은하수 촬영기 초판** — Phases 1-6 (shipped 2026-07-13) — see `.planning/milestones/v1.0-ROADMAP.md`
- ✅ **v1.1 드론 사진** — Phases 7-10 (shipped 2026-07-14) — see `.planning/milestones/v1.1-ROADMAP.md`
- 🚧 **v1.2 몽골 여행 사진** — Phases 11-14 (in progress)

## Phases

<details>
<summary>✅ v1.0 몽골 은하수 촬영기 초판 (Phases 1-6) — SHIPPED 2026-07-13</summary>

37 requirements, 10 plans. mdBook 골격 + GitHub Pages 배포, 장비/기초 촬영법, 가기 전 연습, 후보정, 명소별 촬영 가이드, 부록 + 참고 자료. Full detail archived: `.planning/milestones/v1.0-ROADMAP.md`.

</details>

<details>
<summary>✅ v1.1 드론 사진 (Phases 7-10) — SHIPPED 2026-07-14</summary>

13 requirements, 10 plans. 책을 "몽골 사진 가이드"로 확장 — 드론 파트(개요·조작/설정·명소별 항공·참고 자료)를 은하수 파트 앞에 추가. Full detail archived: `.planning/milestones/v1.1-ROADMAP.md`.

</details>

### 🚧 v1.2 몽골 여행 사진 (In Progress)

**Milestone Goal:** 드론·은하수 파트 앞에 "몽골 여행 사진"을 새 최상단 1부로 추가한다. Canon R7 + 삼양 AF 12mm F2.0 + RF 50mm F1.8 STM(보유) 기준으로, RF-S 18-150mm 추천을 곁들여 카메라 설정·여행 사진 기법·코스 명소별 여행 사진 가이드·참고 자료를 담는다.

#### Phase 11: 구조·제목 재편 + 스텁
**Goal**: 여행 사진 파트가 책의 최상단 1부로 자리 잡고, 책 전체가 여행·드론·은하수 3-트랙 구조로 일관되게 소개되며, 이후 모든 단계에서 `mdbook build`가 깨지지 않는다.
**Depends on**: Nothing (v1.2 첫 단계; v1.0/v1.1 콘텐츠 위에 얹는다)
**Requirements**: STRUCT-01, STRUCT-02
**Success Criteria** (what must be TRUE):
  1. `SUMMARY.md` 최상단에 "1부 · 몽골 여행 사진"이 있고, 기존 드론 파트는 2부로, 은하수 관련 파트는 3부 이후로 재배치되어 있으며, 기존 4부(은하수 명소별 가이드) 제목이 "은하수 명소별 촬영 가이드"로 개칭되어 새 여행 파트와 충돌하지 않는다.
  2. `11-travel/`(4개)·`12-travel-sites/`(6개)·`08-references/travel-*`(2개) 스텁 파일이 모두 존재하고, `SUMMARY.md`의 모든 링크가 유효하다(기존 01-10 폴더는 renumbering 없음).
  3. `book.toml` 설명·`introduction.md`·`README.md`가 여행·드론·은하수 3-트랙 구조와 "이 책을 읽는 법"을 정확히 설명한다.
  4. `introduction.md`의 깨진 "사진 준비" 링크가 유효한 대상으로 수정되어 있다.
  5. `mdbook build src`가 에러 없이 성공한다.
**Plans**: 1 plan (1/1 complete)

Plans:
- [x] 11-01-PLAN.md — 여행 파트를 새 1부로 삽입: 스텁 12개 + SUMMARY 재편(4부→5부 은하수 명소별 개칭) + book.toml/introduction/README 3-트랙 확장 + 깨진 링크 수정 + mdbook build green

#### Phase 12: 여행 사진 기초 (11-travel/)
**Goal**: 독자가 Canon R7 + 삼양 AF 12mm F2.0 + RF 50mm F1.8(+RF-S 18-150mm 추천)로 몽골에서 주간·황혼 여행 사진을 카메라 설정·구도·빛·현지 예절까지 갖춰 촬영할 수 있다.
**Depends on**: Phase 11
**Requirements**: GEAR-01, GEAR-02, GEAR-03, SHOOT-01, SHOOT-02, SHOOT-03
**Success Criteria** (what must be TRUE):
  1. 개요 페이지가 여행 사진 파트의 매력과 범위(지상 중심, 주간/황혼, 야간·항공 제외 이유)를 명시한다.
  2. 카메라 설정 페이지가 R7+12mm+50mm 기준 노출·Av↔M 판단·CR3 RAW·화이트밸런스를 다루며, 기존 RAW 이론은 링크로 재사용하고 여행 델타만 새로 설명한다.
  3. 렌즈 활용 페이지가 12mm(초광각 ≈19mm) vs RF 50mm(준망원 ≈80mm)의 쓰임과 중간 화각 공백, RF-S 18-150mm 추천, 방진 차이(바디·12mm 방진 / 50mm·18-150 비방진)와 현장 관리를 설명하고, 초광각 왜곡·수평 유지·선스타 및 준망원 압축·인물·디테일 실전 기법까지 함께 다룬다.
  4. 구도·빛·타이밍 페이지가 지상 관점 델타(골든아워·날씨·전경/배경)를 담고, 드론/은하수 구도 이론은 링크로 재사용한다.
  5. 사람·현지 촬영 에티켓 페이지가 몽골 특화 동의/예절(동의·유목민·게르·오보·무보수 원칙, 2차 출처는 "일반적으로 통용" 정직 표기, 드론 파트 CAAM 동의 규정 링크)과 사막 먼지·렌즈 교체 현장 관리를 다룬다.
**Plans**: 2 plans

Plans:
- [ ] 12-01-PLAN.md — index.md(여행 개요·매력·범위) + camera-settings.md(R7 설정 Av↔M·노출보정·측광·CR3 RAW·주간 WB + 렌즈 12mm/50mm/18-150·방진·현장관리 + 초광각/준망원 실전)
- [ ] 12-02-PLAN.md — composition-and-light.md(지상 구도·빛 델타·스토리텔링) + landscape-and-street.md(몽골 사람·현지 에티켓 정직표기 + 인물/현장 기초 + 사막 먼지·렌즈 교체 현장관리)

#### Phase 13: 코스 명소별 여행 사진 (12-travel-sites/)
**Goal**: 독자가 몽골 코스 명소 5곳에서 지형에 맞는 여행 사진을 무엇을·어떻게·언제 찍을지 안다.
**Depends on**: Phase 12
**Requirements**: TSITE-01, TSITE-02
**Success Criteria** (what must be TRUE):
  1. 개요 허브 페이지가 `04-mongolia/overview.md`의 GPS 표를 링크로 재사용하고(좌표 재기입 없이) 5개 명소 여행 사진 가이드로 안내한다.
  2. 명소 5곳(차강소브라가·바양작·홍고린엘스·욜링암·바가가즈링 촐로) 각각에 지형별 피사체·구도·타이밍을 담은 개별 페이지가 존재한다.
  3. 차강소브라가 페이지는 층리·황혼 특화, 바양작 페이지는 붉은 절벽·화석지 촬영 예절 특화 팁을 담는다.
  4. 홍고린엘스 페이지는 사구·낙타 특화, 욜링암 페이지는 협곡·얼음·야크/아이벡스 특화 팁을 담는다.
  5. 바가가즈링 촐로 페이지는 화강암 기암 특화 팁을 담고, 야생/유목민 요소는 전부 "보이면/기회성"으로 정직 표기되어 있다.
**Plans**: TBD

Plans:
- [ ] 13-01: TBD

#### Phase 14: 여행 참고 자료 + 최종 검증 (08-references/travel-*)
**Goal**: 독자가 검증된 라이선스의 여행 사진 참고 자료·튜토리얼을 신뢰할 수 있고, 책 전체가 최종적으로 빌드·링크 정합성을 통과한다.
**Depends on**: Phase 13
**Requirements**: TREF-01, TREF-02
**Success Criteria** (what must be TRUE):
  1. 갤러리 페이지가 CC0/CC BY/CC BY-SA 사진만 임베드(출처 표기)하고, 라이선스 불가(All-Rights-Reserved·Instagram·500px·Google 이미지 등) 및 인물 포함 Unsplash는 링크만 제공한다.
  2. 튜토리얼 참고 페이지가 R7·삼양 12mm·RF 50mm 사양/촬영 기법 링크를 제공한다.
  3. 책 전체 `mdbook build`가 최종적으로 그린이다.
  4. 여행 파트를 포함한 모든 신규·기존 링크(내부/외부)가 전수 검증되어 있다.
**Plans**: TBD

Plans:
- [ ] 14-01: TBD

## Progress

**Execution Order:**
Phases execute in numeric order: 11 → 12 → 13 → 14

| Phase | Milestone | Plans Complete | Status | Completed |
|-------|-----------|----------------|--------|-----------|
| 1-6. (은하수 초판) | v1.0 | 10/10 | Complete | 2026-07-13 |
| 7-10. (드론 사진) | v1.1 | 10/10 | Complete | 2026-07-14 |
| 11. 구조·제목 재편 + 스텁 | v1.2 | 1/1 | ✓ Complete | 2026-07-14 |
| 12. 여행 사진 기초 | v1.2 | 0/2 | Planned | - |
| 13. 코스 명소별 여행 사진 | v1.2 | 0/TBD | Not started | - |
| 14. 여행 참고 자료 + 최종 검증 | v1.2 | 0/TBD | Not started | - |
</content>
