# Roadmap: MongolPhoto — v1.3 여행 사진 보정 (Lightroom Classic)

**Status:** 🚧 In progress
**Milestone phases:** 15-19 (continues from v1.2 Phase 14)
**Depth:** standard
**Coverage:** 13/13 requirements mapped ✓

## Shipped Milestones

- ✅ **v1.0** 은하수 초판 — Phases 1-6 (2026-07-13)
- ✅ **v1.1** 드론 사진 — Phases 7-10 (2026-07-14)
- ✅ **v1.2** 몽골 여행 사진 — Phases 11-14 (2026-07-14)

상세는 `.planning/MILESTONES.md` / 아카이브 `.planning/milestones/`.

## Overview

여행 사진 파트(1부) 바로 다음·드론 파트 앞에 **"2부 · 여행 사진 보정"**(신규 `src/13-editing/`)을 넣어, 찍은 여행 사진을 **Lightroom Classic 기준**으로 실제로 더 낫게 만드는 전 과정을 초보자가 따라 하게 담는다. 흐름은 개념·카탈로그·도구 선택 → 표준 편집 순서(17단계 척추)와 상황별 레시피 → 마스킹·병합 → 촬영 연동·크레딧이며, 기존 darktable 은하수 스태킹 파트와는 명확히 구분한다(천체 스태킹은 anti-feature, 기존 "6부 · 후보정"은 "은하수 후보정"으로 개칭). 정직성 원칙을 승계한다 — 검증된 CC0/무료 라이선스 이미지만 재호스팅, Adobe UI는 "저자 직접 캡처 예정" 플레이스홀더, 원화 요금·렌즈 프로파일 등 미확인은 지어내지 않고 "미확인/공식 페이지 확인" 표기.

## Phases

**Phase Numbering:**
- Integer phases (15-19): 이번 마일스톤 계획 작업
- Decimal phases (15.1 등): 계획 후 긴급 삽입 시에만 (INSERTED 표기)

- [x] **Phase 15: 구조 재편 + 스텁** — SUMMARY 재편·부 번호 시프트·챕터 스텁·빌드 그린 (완료 2026-07-14)
- [ ] **Phase 16: 개념·카탈로그·도구 선택** — 왜 보정하나·비파괴/카탈로그·앱 비교표
- [ ] **Phase 17: 필수 보정 순서 + 상황별 레시피** — 17단계 척추 + 고비 레시피 a~e + before/after
- [ ] **Phase 18: 국소 보정 + 합치기** — 마스킹·디테일/노이즈 + 파노라마·HDR 병합
- [ ] **Phase 19: 촬영 연동 + 참고·크레딧 + 최종 검증** — SW 염두 촬영법·크레딧·전체 빌드/링크 게이트

## Phase Details

### Phase 15: 구조 재편 + 스텁
**Goal**: 독자가 목차에서 1부 여행 사진 다음·3부 드론 앞에 "2부 · 여행 사진 보정" 파트를 보고, 새 파트의 모든 챕터 스텁이 존재해 `mdbook build`가 깨지지 않는다.
**Depends on**: Phase 14 (v1.2 완료 — 여행·드론·은하수 3-트랙 구조 위에 삽입)
**Requirements**: STRUCT-01, STRUCT-02
**Success Criteria** (what must be TRUE):
  1. 목차(SUMMARY)에서 "여행 사진 참고 자료" 다음·"드론 사진" 앞에 "2부 · 여행 사진 보정"이 보이고, 이후 부 번호가 +1로 시프트(드론→3부, 준비하기→4부, 가기 전 연습→5부, 은하수 명소별→6부)되며 기존 "6부 · 후보정"이 "7부 · 은하수 후보정"으로 개칭되어 명칭 충돌이 없다.
  2. `src/13-editing/`의 모든 챕터가 스텁으로 존재해 `create-missing = false`에서도 `mdbook build`가 에러 없이 통과한다.
  3. introduction.md·README의 파트 소개가 보정 파트 포함으로 갱신되고, 신규/기존 내부 링크가 깨지지 않는다.
**Plans**: 1 plan

Plans:
- [x] 15-01 — `src/13-editing/` 스텁 9개(index·lightroom-workflow·software-comparison·develop-order·travel-recipes·masking-and-detail·panorama-hdr·shoot-for-edit·credits) + SUMMARY 재편(2부 삽입·부 번호 시프트·6부→"7부 · 은하수 후보정" 개칭) + introduction/README 갱신 + 빌드 그린

### Phase 16: 개념·카탈로그·도구 선택
**Goal**: 독자가 왜/무엇을 편집하는지(비파괴·카탈로그)를 이해하고, 자신에게 맞는 편집 도구(LR Classic 구독 또는 무료/영구 대안)를 고른 뒤 편집을 시작할 준비를 한다.
**Depends on**: Phase 15
**Requirements**: EDIT-01, EDIT-03, TOOL-01, TOOL-02
**Success Criteria** (what must be TRUE):
  1. 독자가 후보정이 사진을 더 낫게 만드는 이유(RAW 관용도·비파괴 편집)를 이해하고, 이 파트가 여행 사진(주간·황혼) 편집으로 "은하수 후보정" 파트와 다름을 안다. (EDIT-01)
  2. 독자가 카탈로그와 원본 파일의 관계(LR 밖에서 옮기면 "사진 없음", 카탈로그 백업 ≠ 원본 백업)를 이해하고 대표 실수를 피한다. (EDIT-03)
  3. 독자가 LR Classic이 구독 전용(Photography 플랜 포함·단독 LR CC 플랜엔 미포함)임을 알고, 라이선스·가격·플랫폼·CR3 지원·선택 이유 비교표로 도구를 고른다. (TOOL-01)
  4. 독자가 구독을 원치 않을 때 무료(darktable·RawTherapee — R7 CR3 지원 확인)·영구판(DxO/ON1/Capture One) 대안 경로를 안다. (TOOL-02)
**정직성**: 원화 Photography 플랜·단독 LR 요금은 미확인 → 숫자 박제 금지, "공식 페이지에서 확인" + URL. darktable는 "최신 4.x 설치" 문구 필수.
**Plans**: 2 plans (병렬 — 파일 분리)

Plans:
- [ ] 16-01 — index.md(왜 보정하나·비파괴·이 파트 범위·은하수 파트와 구분) + lightroom-workflow.md(카탈로그·가져오기·현상 모듈 개요, P1/P2 경고 박스, 스크린샷 플레이스홀더)
- [ ] 16-02 — software-comparison.md(구독 전용 경고 + LR CC/Capture One/DxO/ON1/darktable/RawTherapee/Snapseed 비교표 + 무료/영구 대안 경로)

### Phase 17: 필수 보정 순서 + 상황별 레시피
**Goal**: 독자가 Lightroom Classic 표준 편집 순서를 왜 그 순서인지와 함께 따라 하고, 몽골 여행 대표 상황별 레시피를 실제 before/after 예시와 함께 적용한다.
**Depends on**: Phase 16
**Requirements**: EDIT-02, RECIPE-01, RECIPE-02
**Success Criteria** (what must be TRUE):
  1. 독자가 현상 모듈 표준 편집 순서(프로파일 → 렌즈 보정 → 변환/크롭 → WB → 노출/톤 → 텍스처/명료도/디헤이즈 → 생동감/HSL/컬러그레이딩 → 디테일(샤픈·노이즈) → 마스킹 → 내보내기)를 왜 그 순서인지와 함께 단계별로 따라 한다("널리 통용되는 관례"로 정직 표기). (EDIT-02)
  2. 독자가 대표 상황별 레시피(대낮 강광·황혼/골든아워·역광/고대비·인물/피부톤·날린 하늘 복원)에서 어떤 슬라이더를 어느 방향으로 왜 조정하는지 안다. (RECIPE-01)
  3. 최소 2개 상황에서 재호스팅 검증된 CC0/무료 라이선스 사진으로 실제 before/after 예시가 출처·라이선스 표기와 함께 보이고, 실촬영본 교체는 트립 후 과제로 정직 표기된다. (RECIPE-02)
**정직성**: 삼양 12mm·RF 50mm Adobe 렌즈 프로파일 존재 여부 미확인 → "LR에서 직접 검색" + 없을 시 수동 교정, 프로파일명 조작 금지. 과보정(P3) 경고 박스.
**Plans**: 2 plans (병렬 — 파일 분리; 이미지 라이선스 육안 재확인 필요)

Plans:
- [ ] 17-01 — develop-order.md: 17단계 척추 각 단계 = 한 섹션 + 한 줄 rationale, CC0 이미지 전/후, Alt-drag 클리핑·렌즈 프로파일 in-app 검색
- [ ] 17-02 — travel-recipes.md: 레시피 a~e(대낮·황혼·역광·인물·하늘 복원) + "촬영으로 예방" 콜백 + 검증 CC0/무료 before/after ≥2

### Phase 18: 국소 보정 + 합치기
**Goal**: 독자가 마스킹·디테일로 국소 보정을 하고, 파노라마·HDR 병합을 촬영 브라케팅과 연결해 이해한다.
**Depends on**: Phase 17 (전역 보정 완료 후 마스크가 교정된 이미지에 반응)
**Requirements**: LOCAL-01, LOCAL-02
**Success Criteria** (what must be TRUE):
  1. 독자가 마스킹(하늘/피사체 선택·그라디언트·브러시)과 디테일(샤픈·AI Denoise, RAW 전용·새 DNG)로 국소 보정을 한다. (LOCAL-01)
  2. 독자가 과보정 함정(명료도 헤일로·과채도·검정 뭉갬·디헤이즈 과다)을 인지하고 피한다(샤픈 Masking Alt-drag, Denoise 먼저). (LOCAL-01)
  3. 독자가 파노라마·HDR 병합(Photo Merge)을 이해하고, 촬영 시 AEB 브라케팅·중첩 촬영(30~50% 겹침·노출/WB 수동 고정)과 어떻게 연결되는지 안다. (LOCAL-02)
**Plans**: 2 plans (병렬 — 파일 분리)

Plans:
- [ ] 18-01 — masking-and-detail.md: Select Sky/Gradient/Brush/Select People + 샤픈 + AI Denoise + 과보정 회피, CC0/CC BY 이미지 전/후
- [ ] 18-02 — panorama-hdr.md: Photo Merge Panorama / HDR / HDR Panorama, Deghost, R7 AEB(3/2/5/7장·±3EV) → 병합 DNG 재현상 콜백

### Phase 19: 촬영 연동 + 참고·크레딧 + 최종 검증
**Goal**: 독자가 편집을 대비한 촬영법을 이해하고, 검증된 크레딧·연습 자료로 파트를 마무리하며, 책 전체 빌드·내부 링크 정합성이 통과한다.
**Depends on**: Phase 18 (최종 전체-책 게이트는 모든 콘텐츠 후 직렬)
**Requirements**: SHOOT-01, REF-01
**Success Criteria** (what must be TRUE):
  1. 독자가 "SW를 염두에 둔 촬영법"(RAW로 찍기·하이라이트 보호·ETTR는 규칙 아닌 선택·WB·렌즈 프로파일 확인·HDR/파노라마 브라케팅·인카메라 초점/선명도)을 이해하고 촬영 단계에서 편집을 대비한다. (SHOOT-01)
  2. 새 파트 예시 사진의 출처·저작자·라이선스·변경 크레딧과, 연습용 무료 RAW/샘플·LR 학습 참고 링크가 검증된 것만 정리된다(08-references·07-appendix 중복 최소화, 필요 시 링크 재사용). (REF-01)
  3. 책 전체 `mdbook build`가 그린이고, 내부 링크 정합성 전수 검증이 통과한다(dead 0).
**정직성**: R7 기본 ISO DR≈10.5스톱·AEB 사양은 검증 사실 기반, 렌즈 프로파일은 미확인 정직 표기. ETTR는 "R7에선 효과 제한적, 규칙 아닌 선택".
**Plans**: 2 plans (wave 1 → wave 2 최종 게이트 직렬)

Plans:
- [ ] 19-01 — shoot-for-edit.md: A1~A7(RAW·하이라이트·ETTR·WB·렌즈 프로파일·브라케팅·초점) 촬영 vs 편집 배치 + credits.md(출처·라이선스·변경 표) + raw-develop 무료 실습 링크
- [ ] 19-02 — 책 전체 최종 `mdbook build` 그린 + 내부 링크 전수 검증(dead 0)

## Progress

**Execution Order:** 15 → 16 → 17 → 18 → 19 (정수 순서)

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 15. 구조 재편 + 스텁 | 0/1 | Not started | - |
| 16. 개념·카탈로그·도구 선택 | 0/2 | Not started | - |
| 17. 필수 보정 순서 + 레시피 | 0/2 | Not started | - |
| 18. 국소 보정 + 합치기 | 0/2 | Not started | - |
| 19. 촬영 연동 + 크레딧 + 최종 검증 | 0/2 | Not started | - |

---

_For current project status, see .planning/PROJECT.md and .planning/STATE.md_
