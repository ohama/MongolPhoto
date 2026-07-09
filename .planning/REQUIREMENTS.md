# Requirements: MongolPhoto

**Defined:** 2026-07-09
**Core Value:** 트래킹 장비 없이도 은하수 사진이 잘 나오게 하는 전 과정(장비 → 촬영 → 후보정)을, 초보자가 따라 하며 몽골에서 실제로 성공하도록 담는다.

> **2026-07-09 방향 전환:** 2~5부를 저자 개인의 연습 일지·여행 결과 기록이 아니라, **누구나 따라 할 수 있는 일반 가이드**로 재구성. 개인화 요구사항(PRAC-02~05, MONG-01~03, POST-01~04)은 아래 *Superseded*로 이동하고, 일반 가이드 요구사항(HOME/FIELD/EDIT/SITE)으로 대체.

## v1 Requirements

### 출판·배포 (PUB)

- [x] **PUB-01**: mdBook 프로젝트가 한국어로 빌드되고 로컬에서 미리보기된다 (Noto Sans KR, `word-break: keep-all`)
- [x] **PUB-02**: GitHub Pages(Actions)로 자동 배포되어 지인이 링크로 볼 수 있다
- [x] **PUB-03**: 사진이 웹 최적화(리사이즈·EXIF 제거)되어 챕터 트리에 맞는 폴더 구조로 수록된다

### 장비 (GEAR)

> 장비는 **추천만** 제공한다. 앞쪽 장비 챕터는 일반 기능(필수/있으면 좋은), 구체 모델·가격은 부록.

- [x] **GEAR-01**: 트래킹 없는 은하수 촬영용 카메라 추천 (마운트별, 가벼움·가성비·초보 친화 기준 — 부록)
- [x] **GEAR-02**: APS-C 광각·밝은 렌즈 추천 (모델명·대략 가격·선택 이유 — 부록)
- [x] **GEAR-03**: 삼각대·전원·인터벌 타이머·레드 라이트 등 액세서리 추천
- [x] **GEAR-04**: 촬영 계획·별 찾기 앱 안내 (PhotoPills, Stellarium 등)
- [x] **GEAR-05**: 출발 전 준비물 체크리스트
- [x] **GEAR-06**: 내 카메라 크롭계수로 화각·셔터속도를 계산하는 법 (부록)

### 기초 촬영법 (FUND)

- [x] **FUND-01**: 수동(M)모드 노출 3요소(ISO·조리개·셔터) 설명
- [x] **FUND-02**: 크롭 센서 보정 NPF/500 룰로 최대 셔터속도 계산법
- [x] **FUND-03**: 별에 수동 초점 맞추는 방법 (초보 실패 1순위 대비)
- [x] **FUND-04**: RAW 촬영과 화이트밸런스 기본
- [x] **FUND-05**: 은하수 찾기·타이밍 (계절/시간/방향, 달 위상, 광해/Bortle, 날씨)
- [x] **FUND-06**: 현장 촬영 워크플로 (도착 → 구도 → 세팅 → 촬영 순서)

### 연습 로그 템플릿 (PRAC)

- [x] **PRAC-01**: 재사용 가능한 연습 로그 템플릿 (독자가 자기 연습을 기록할 수 있는 양식)

### 집에서 연습 (HOME) — 일반 가이드

- [x] **HOME-01**: 가기 전 집에서 익혀 둘 카메라 조작·세팅 연습 항목 (수동모드, ISO/조리개/셔터, RAW, 크롭 셔터 계산)
- [x] **HOME-02**: 집(실내/베란다)에서 할 수 있는 초점·구도·인터벌/릴리즈 연습 방법
- [x] **HOME-03**: 집 연습 자가점검 체크리스트

### 야외에서 연습 (FIELD) — 일반 가이드

- [ ] **FIELD-01**: 가기 전 야외(근교 어두운 곳)에서 실전 연습할 항목 (실제 밤하늘에서 노출·초점·구도)
- [ ] **FIELD-02**: 야외 촬영 준비와 현장 워크플로 리허설 (이슬·바람·배터리·안전·이동)
- [ ] **FIELD-03**: 야외 연습에서 확인·복기할 포인트 (결과 점검 → 개선)

### 후보정 연습 (EDIT) — 일반 가이드

- [ ] **EDIT-01**: RAW 현상 기본 워크플로 (노출·화밸·대비·색감)
- [ ] **EDIT-02**: 스태킹으로 노이즈 감소 (Sequator[Windows] + Starry Landscape Stacker[Mac] 둘 다 안내)
- [ ] **EDIT-03**: 은하수 강조 보정 (대비·디테일·색)
- [ ] **EDIT-04**: 전/후 비교로 배우는 후보정 (예시 기반 설명)

### 몽골 여행지별 촬영 가이드 (SITE) — 일반 가이드

- [ ] **SITE-01**: 몽골(고비) 촬영 일반 원리 — 달·은하수 코어·타이밍·다크스카이 조건
- [ ] **SITE-02**: 명소별 "이렇게 찍으면 좋다" 가이드 (차강소브라가·홍고린엘스·욜링암·바가가즈링 촐로 — 피사체·구도)
- [ ] **SITE-03**: 여행지별 주의사항 (저고도 코어, 협곡 코어 차폐, 바람·모래, 이동)

### 보너스 기법 (BONUS)

- [ ] **BONUS-01**: 은하수 파노라마 촬영·병합
- [ ] **BONUS-02**: 스타트레일(은적사진) 촬영·합성
- [ ] **BONUS-03**: 밤하늘 타임랩스

### 부록 (REF)

- [ ] **REF-01**: 현장 치트시트 (인쇄용)
- [ ] **REF-02**: 체크리스트 모음
- [ ] **REF-03**: 앱·소프트웨어 가이드
- [ ] **REF-04**: 용어 사전
- [x] **REF-05**: 카메라·렌즈 추천 목록 (마운트별 모델·가격·크롭계수 계산법 — GEAR 상세 이동)

## Superseded (2026-07-09 방향 전환으로 대체됨)

개인 연습 일지·개인 여행 결과 기록 접근. 위 HOME/FIELD/EDIT/SITE 일반 가이드로 대체.

| 구 요구사항 | 대체 |
|---|---|
| PRAC-02~05 (내 연습 1~4차 일지) | HOME-*, FIELD-* |
| MONG-01~03 (내 몽골 날짜별 계획·결과) | SITE-* |
| POST-01~04 (내 사진 후보정·전후) | EDIT-* |

> 참고: MONG-01/02용으로 만든 `src/04-mongolia/` 페이지와 검증된 데이터(GPS·달·코어)는 SITE-* 일반 가이드로 재활용한다. 아카이브: `.planning/archive/`.

## v2 Requirements

### 확장 (EXT)

- **EXT-01**: 영어 번역판
- **EXT-02**: 인쇄용 PDF 내보내기
- **EXT-03**: 딥스카이(망원경) 입문 섹션

## Out of Scope

| Feature | Reason |
|---------|--------|
| 적도의/스타트래커 기반 촬영 | 컨셉이 "트래킹 장비 없이" |
| 딥스카이(장초점 망원경) 촬영 | 휴대성·무트래킹 여행 촬영과 맞지 않음 (v2 입문 섹션으로만 검토) |
| 인쇄 실물책 제작 | 우선 웹(mdBook/Pages)로 시작 |
| 고급 픽셀 단위 포토샵 마스킹 | 초보 대상 범위 초과 |
| 장비 구입/구매 가이드 (구매 링크·리드타임) | 추천만 제공, 구매 강제 아님 |
| 저자 개인 연습 일지·여행 결과 기록 | 일반 가이드로 전환 (누구나 따라 할 수 있게) |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| PUB-01 | Phase 1 | Complete |
| PUB-02 | Phase 1 | Complete |
| PUB-03 | Phase 1 | Complete |
| GEAR-01 | Phase 1 | Complete |
| GEAR-02 | Phase 1 | Complete |
| GEAR-03 | Phase 1 | Complete |
| GEAR-04 | Phase 1 | Complete |
| GEAR-05 | Phase 1 | Complete |
| GEAR-06 | Phase 1 | Complete |
| FUND-01 | Phase 1 | Complete |
| FUND-02 | Phase 1 | Complete |
| FUND-03 | Phase 1 | Complete |
| FUND-04 | Phase 1 | Complete |
| FUND-05 | Phase 1 | Complete |
| FUND-06 | Phase 1 | Complete |
| PRAC-01 | Phase 1 | Complete |
| REF-05 | Phase 1 | Complete |
| HOME-01 | Phase 2 | Complete |
| HOME-02 | Phase 2 | Complete |
| HOME-03 | Phase 2 | Complete |
| FIELD-01 | Phase 3 | Pending |
| FIELD-02 | Phase 3 | Pending |
| FIELD-03 | Phase 3 | Pending |
| EDIT-01 | Phase 4 | Pending |
| EDIT-02 | Phase 4 | Pending |
| EDIT-03 | Phase 4 | Pending |
| EDIT-04 | Phase 4 | Pending |
| SITE-01 | Phase 5 | Pending |
| SITE-02 | Phase 5 | Pending |
| SITE-03 | Phase 5 | Pending |
| REF-01 | Phase 6 | Pending |
| REF-02 | Phase 6 | Pending |
| REF-03 | Phase 6 | Pending |
| REF-04 | Phase 6 | Pending |
| BONUS-01 | Phase 6 | Pending |
| BONUS-02 | Phase 6 | Pending |
| BONUS-03 | Phase 6 | Pending |

**Coverage:**
- v1 requirements: 37 total (PUB 3 + GEAR 6 + FUND 6 + PRAC 1 + HOME 3 + FIELD 3 + EDIT 4 + SITE 3 + BONUS 3 + REF 5)
- Phase 1 Complete: 17 (PUB/GEAR/FUND/PRAC-01/REF-05)
- Mapped to phases: 전부 ✓

---
*Requirements defined: 2026-07-09*
*Last updated: 2026-07-09 — 2~5부 일반 가이드로 재구성 (HOME/FIELD/EDIT/SITE 대체)*
