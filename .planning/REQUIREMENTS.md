# Requirements: v1.3 사진 보정 (Lightroom Classic)

**Milestone goal:** 여행 사진 파트 바로 다음에 "여행 사진 보정" 파트를 새로 넣어, 찍은 여행 사진을 Lightroom Classic 기준으로 실제로 더 낫게 만드는 전 과정(개념 → 워크플로 → 상황별 레시피 → 국소 보정/합치기 → 앱 비교 → 촬영 연동)을 초보자가 따라 할 수 있게 담는다.

**핵심 정직성 원칙(승계):** 검증된 사실만 단정, 미확인은 "미확인" 표기 / 검증된 CC0·무료 라이선스 이미지만 임베드(출처·라이선스 표기), Adobe UI 등 저작권 이미지는 재호스팅 금지("저자 직접 캡처 예정") / 요금·버전은 공식 페이지 안내(원화·정확가 미확인은 지어내지 않음).

---

## v1.3 Requirements (이번 마일스톤)

### 구조 (STRUCT)

- [ ] **STRUCT-01**: 독자가 목차에서 여행 사진 다음, 드론 앞에 "여행 사진 보정" 파트(신규 `src/13-editing/`)를 본다 — SUMMARY 재편, 이후 파트 번호 +1, 기존 "6부 · 후보정"은 "은하수 후보정"으로 개칭해 명칭 충돌을 피한다.
- [ ] **STRUCT-02**: 새 파트의 모든 챕터가 스텁으로 존재해 `mdbook build`가 깨지지 않고(create-missing=false), introduction/README의 파트 소개가 보정 파트 포함으로 갱신된다.

### 개념·워크플로 (EDIT)

- [ ] **EDIT-01**: 독자가 "왜 후보정이 사진을 더 낫게 만드는가"(RAW의 관용도·비파괴 편집의 의미)를 이해하고, 이 파트가 여행 사진(주간·황혼) 편집이며 은하수 후보정 파트와 다름을 안다.
- [ ] **EDIT-02**: 독자가 Lightroom Classic 현상(Develop) 모듈의 표준 편집 순서(프로파일 → 렌즈 보정 → 변환/크롭 → 화이트밸런스 → 노출/톤 → 텍스처/명료도/디헤이즈 → 생동감/HSL/컬러그레이딩 → 디테일(샤픈·노이즈) → 마스킹 → 내보내기)를 단계별로 왜 그 순서인지와 함께 따라 할 수 있다("널리 통용되는 관례"로 정직 표기).
- [ ] **EDIT-03**: 독자가 Lightroom Classic의 카탈로그 개념(원본 파일과 카탈로그의 관계, LR 밖에서 파일을 옮기면 "사진 없음"이 되는 함정, 카탈로그 백업 ≠ 원본 백업)을 이해하고 실수를 피한다.

### 상황별 실전 보정 (RECIPE)

- [ ] **RECIPE-01**: 독자가 몽골 여행 대표 상황별 보정 레시피(대낮 강광, 황혼/골든아워, 역광/고대비, 인물·피부톤, 날린 하늘 복원)를 어떤 슬라이더를 어느 방향으로 왜 조정하는지와 함께 따라 할 수 있다.
- [ ] **RECIPE-02**: 최소 2개 이상의 상황에서 재호스팅 검증된 CC0/무료 라이선스 사진으로 실제 before/after 예시를 보여준다(출처·라이선스 표기; 실촬영본 교체는 트립 후 과제로 정직 표기).

### 국소 보정·합치기 (LOCAL)

- [ ] **LOCAL-01**: 독자가 마스킹(하늘/피사체 선택, 그라디언트, 브러시)과 디테일(샤픈·AI Denoise)로 국소 보정을 하고, 과보정(명료도 헤일로·과채도·검정 뭉갬·디헤이즈 과다) 함정을 피한다.
- [ ] **LOCAL-02**: 독자가 파노라마·HDR 병합(Photo Merge)을 이해하고, 이것이 촬영 시 AEB 브라케팅·중첩 촬영과 어떻게 연결되는지 안다.

### 앱 비교 (TOOL)

- [ ] **TOOL-01**: 독자가 Lightroom Classic이 구독 전용(Photography 플랜 포함, 단독 Lightroom CC 플랜엔 미포함)임을 알고, 유사 앱(Lightroom CC, Capture One, DxO PhotoLab, ON1, darktable, RawTherapee, 모바일 Snapseed 등)과 라이선스·가격·플랫폼·CR3 지원·선택 이유를 표로 비교해 자신에게 맞는 도구를 고른다(정확 요금 미확인은 공식 링크 안내).
- [ ] **TOOL-02**: 독자가 구독을 원치 않을 때의 무료/영구 대안 경로(darktable가 R7 CR3 지원·기존 은하수 파트와 일관, 또는 영구판 DxO/ON1/Capture One)를 안다.

### 촬영 연동 (SHOOT)

- [ ] **SHOOT-01**: 독자가 "SW를 염두에 둔 촬영법"(RAW로 찍기, 하이라이트 보호, ETTR는 규칙 아닌 선택, 화이트밸런스, 렌즈 프로파일 존재 여부 확인, HDR/파노라마용 브라케팅, 인카메라 초점·선명도)을 이해하고 촬영 단계에서 편집을 대비한다(R7 DR·AEB 검증 사실 기반, 렌즈 프로파일은 미확인 정직 표기).

### 참고·크레딧 (REF)

- [ ] **REF-01**: 새 파트에 사용한 예시 사진의 출처·라이선스 크레딧과, 연습용 무료 RAW/샘플·Lightroom Classic 학습 참고 링크를 검증된 것만 정리한다(기존 08-references·07-appendix와 중복 최소화, 필요 시 링크 재사용).

---

## Future Requirements (이후 마일스톤)

- 저자 실제 몽골 촬영본으로 before/after·명소 갤러리 교체 및 실제 Lightroom Classic 화면 캡처 삽입 (트립 8/13 이후)
- 초보자 눈높이 보강(M모드·크롭센서·히스토그램 등) — 전체 책 공통
- 영어판 / 인쇄용 PDF

## Out of Scope (이번 마일스톤 제외)

- 은하수/딥스카이 스태킹 편집 — 기존 "은하수 후보정" 파트(darktable)에서 이미 다룸, 중복 배제
- Photoshop 왕복·생성형 채우기(Generative Remove)·AI 하늘 교체·Lens Blur 등 고급/파괴적 기능 — 초보자 범위 밖
- 모니터 캘리브레이션 심화, 인쇄 소프트프루핑 내부 — 짧은 정직 언급만
- Adobe UI 스크린샷 재호스팅 — 저작권, "저자 직접 캡처 예정"으로 대체
- 정확 원화 요금·미검증 렌즈 프로파일 단정 — 공식 링크·미확인 표기로 대체

---

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| STRUCT-01 | Phase 15 | Complete |
| STRUCT-02 | Phase 15 | Complete |
| EDIT-01 | Phase 16 | Complete |
| EDIT-03 | Phase 16 | Complete |
| TOOL-01 | Phase 16 | Complete |
| TOOL-02 | Phase 16 | Complete |
| EDIT-02 | Phase 17 | Pending |
| RECIPE-01 | Phase 17 | Pending |
| RECIPE-02 | Phase 17 | Pending |
| LOCAL-01 | Phase 18 | Pending |
| LOCAL-02 | Phase 18 | Pending |
| SHOOT-01 | Phase 19 | Pending |
| REF-01 | Phase 19 | Pending |

**Coverage:** 13/13 requirements mapped ✓ (no orphans, no duplicates)
