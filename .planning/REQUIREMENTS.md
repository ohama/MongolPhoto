# Requirements: MongolPhoto

**Defined:** 2026-07-09
**Core Value:** 트래킹 장비 없이도 은하수 사진이 잘 나오게 하는 전 과정(장비 → 촬영 → 후보정)을, 초보자가 따라 하며 몽골에서 실제로 성공하도록 담는다.

## v1 Requirements

### 출판·배포 (PUB)

- [ ] **PUB-01**: mdBook 프로젝트가 한국어로 빌드되고 로컬에서 미리보기된다 (Noto Sans KR, `word-break: keep-all`)
- [ ] **PUB-02**: GitHub Pages(Actions)로 자동 배포되어 지인이 링크로 볼 수 있다
- [ ] **PUB-03**: 사진이 웹 최적화(리사이즈·EXIF 제거)되어 챕터 트리에 맞는 폴더 구조로 수록된다

### 장비 (GEAR)

> 장비는 **추천만** 제공한다 — 구매 링크·리드타임·구매 결정 프로세스는 다루지 않으며, 보유 장비로도 촬영 가능하게 안내한다.

- [ ] **GEAR-01**: 트래킹 없는 은하수 촬영용 카메라 추천 (소니 E·후지 X·니콘 Z DX 등 마운트별, 가벼움·가성비·초보 친화 기준)
- [ ] **GEAR-02**: APS-C 광각·밝은 렌즈 추천 (모델명·대략 가격·선택 이유 포함)
- [ ] **GEAR-03**: 삼각대·전원·인터벌 타이머·레드 라이트 등 액세서리 추천
- [ ] **GEAR-04**: 촬영 계획·별 찾기 앱 안내 (PhotoPills, Stellarium 등)
- [ ] **GEAR-05**: 출발 전 준비물 체크리스트
- [ ] **GEAR-06**: 사용자의 실제 카메라 기종을 확인해 세팅·화각 계산을 그 기종에 맞춘다

### 기초 촬영법 (FUND)

- [ ] **FUND-01**: 수동(M)모드 노출 3요소(ISO·조리개·셔터) 설명
- [ ] **FUND-02**: 크롭 센서 보정 NPF/500 룰로 최대 셔터속도 계산법
- [ ] **FUND-03**: 별에 수동 초점 맞추는 방법 (초보 실패 1순위 대비)
- [ ] **FUND-04**: RAW 촬영과 화이트밸런스 기본
- [ ] **FUND-05**: 은하수 찾기·타이밍 (계절/시간/방향, 달 위상, 광해/Bortle, 날씨)
- [ ] **FUND-06**: 현장 촬영 워크플로 (도착 → 구도 → 세팅 → 촬영 순서)

### 연습 세션 (PRAC)

- [ ] **PRAC-01**: 재사용 가능한 연습 로그 템플릿 (목표/장비·세팅/환경/결과 사진/배운 점/다음 개선)
- [ ] **PRAC-02**: 1차 집 연습 기록 (기본 장비·수동 설정 익히기)
- [ ] **PRAC-03**: 2차 7/17 밤 서해안 연습 기록 (첫 실전 필드 테스트)
- [ ] **PRAC-04**: 3차 집 연습 기록 (서해안 결과 복기·보완)
- [ ] **PRAC-05**: 4차 집 연습 기록 (몽골 직전 최종 점검·후보정 워크플로 리허설)

### 몽골 현지 (MONG)

- [ ] **MONG-01**: 몽골 사전 촬영 계획 (달·방향·은하수 코어 위치, 촬영지 GPS)
- [ ] **MONG-02**: 날짜별(8/13~8/17) 촬영 대상 추천 및 촬영 계획
- [ ] **MONG-03**: 날짜별 촬영 결과·사진 수록 (여행 후 작성)

### 후보정 (POST)

- [ ] **POST-01**: RAW 현상 워크플로 (노출·화밸·대비·색감)
- [ ] **POST-02**: 스태킹으로 노이즈 감소 (Sequator[Windows] + Starry Landscape Stacker[Mac] 둘 다 안내)
- [ ] **POST-03**: 은하수 강조 보정 (대비·디테일·색)
- [ ] **POST-04**: 전/후 비교 사진 수록

### 보너스 기법 (BONUS)

- [ ] **BONUS-01**: 은하수 파노라마 촬영·병합
- [ ] **BONUS-02**: 스타트레일(은적사진) 촬영·합성
- [ ] **BONUS-03**: 밤하늘 타임랩스

### 부록 (REF)

- [ ] **REF-01**: 현장 치트시트 (인쇄용)
- [ ] **REF-02**: 체크리스트 모음
- [ ] **REF-03**: 앱·소프트웨어 가이드
- [ ] **REF-04**: 용어 사전

## v2 Requirements

### 확장 (EXT)

- **EXT-01**: 영어 번역판
- **EXT-02**: 인쇄용 PDF 내보내기
- **EXT-03**: 딥스카이(망원경) 입문 섹션

## Out of Scope

| Feature | Reason |
|---------|--------|
| 적도의/스타트래커 기반 촬영 | 이번 여행 컨셉이 "트래킹 장비 없이" |
| 딥스카이(장초점 망원경) 촬영 | 휴대성·무트래킹 여행 촬영과 맞지 않음 (v2 입문 섹션으로만 검토) |
| 인쇄 실물책 제작 | 우선 웹(mdBook/Pages)로 시작 |
| 고급 픽셀 단위 포토샵 마스킹 | 초보 대상 범위 초과 |
| 장비 구입/구매 가이드 (구매 링크·리드타임) | 추천만 제공, 구매 강제 아님 |

## Traceability

Which phases cover which requirements. Updated during roadmap creation.

| Requirement | Phase | Status |
|-------------|-------|--------|
| PUB-01 | Phase 1 | Pending |
| PUB-02 | Phase 1 | Pending |
| PUB-03 | Phase 1 | Pending |
| GEAR-01 | Phase 1 | Pending |
| GEAR-02 | Phase 1 | Pending |
| GEAR-03 | Phase 1 | Pending |
| GEAR-04 | Phase 1 | Pending |
| GEAR-05 | Phase 1 | Pending |
| GEAR-06 | Phase 1 | Pending |
| FUND-01 | Phase 1 | Pending |
| FUND-02 | Phase 1 | Pending |
| FUND-03 | Phase 1 | Pending |
| FUND-04 | Phase 1 | Pending |
| FUND-05 | Phase 1 | Pending |
| FUND-06 | Phase 1 | Pending |
| PRAC-01 | Phase 1 | Pending |
| PRAC-02 | Phase 2 | Pending |
| PRAC-03 | Phase 2 | Pending |
| PRAC-04 | Phase 3 | Pending |
| PRAC-05 | Phase 3 | Pending |
| POST-01 | Phase 3 | Pending |
| POST-02 | Phase 3 | Pending |
| POST-03 | Phase 3 | Pending |
| MONG-01 | Phase 4 | Pending |
| MONG-02 | Phase 4 | Pending |
| MONG-03 | Phase 5 | Pending |
| POST-04 | Phase 5 | Pending |
| REF-01 | Phase 6 | Pending |
| REF-02 | Phase 6 | Pending |
| REF-03 | Phase 6 | Pending |
| REF-04 | Phase 6 | Pending |
| BONUS-01 | Phase 6 | Pending |
| BONUS-02 | Phase 6 | Pending |
| BONUS-03 | Phase 6 | Pending |

**Coverage:**
- v1 requirements: 34 total (corrected from earlier stale count of 31 — recounted during roadmap creation: PUB 3 + GEAR 6 + FUND 6 + PRAC 5 + MONG 3 + POST 4 + BONUS 3 + REF 4 = 34)
- Mapped to phases: 34 (100%)
- Unmapped: 0 ✓

---
*Requirements defined: 2026-07-09*
*Last updated: 2026-07-09 after roadmap creation (traceability filled, coverage count corrected)*
