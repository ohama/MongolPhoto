# Project Research Summary

**Project:** MongolPhoto — v1.3 "여행 사진 보정" 파트 추가 (Korean mdBook)
**Domain:** 콘텐츠 집필 (초보자용 Lightroom Classic 여행 사진 보정 가이드) — 소프트웨어 빌드 아님
**Researched:** 2026-07-14
**Confidence:** HIGH (워크플로·기능명·라이선스 검증) / 개별 미확인 항목은 아래 명시

> 정직성 원칙: 이 요약은 4개 리서치의 모든 `미확인` 플래그를 그대로 승계한다. 추측으로 해소하지 않았다. 집필 단계에서 반드시 in-app / 공식 페이지 재확인이 필요한 항목은 "Gaps to Address"에 모아 두었다.

## Executive Summary

이 마일스톤은 기존 몽골 사진 가이드 책에 **"여행 사진 보정"** 이라는 새 파트(부)를 추가하는 **집필 작업**이다. 코드가 아니라 mdBook 콘텐츠를 쓰는 일이며, 산출물은 새 폴더 `src/13-editing/` 아래의 챕터 파일들과 재호스팅 가능한 전/후 예시 이미지, 그리고 SUMMARY.md(mdBook 목차) 편집이다. 이 파트는 대낮·황혼 **단일 프레임(+선택적 병합)** 여행 사진을 Lightroom Classic 현상 모듈에서 보정하는 법을 가르치며, 기존 darktable 은하수 스태킹 파트와는 **명확히 구분**된다(천체 스태킹은 anti-feature).

집필의 척추(spine)는 리서치가 확정한 **17단계 Lightroom Classic 패널 순서**다. "위에서 아래로, 전역/교정 작업을 창의/국소 작업보다 먼저" 라는 널리 가르쳐지는 관례이며(Adobe 자체 top-down 가이드 + Kloskowski/Kost 등 다수 권위 소스 일치), 여기에 고비 사막 상황별 **5가지 여행 레시피(a~e: 대낮 강광 / 황혼 골든아워 / 역광 / 인물 / 하늘 복원)** 를 얹는다. 도구는 **Lightroom Classic을 주력**으로 서술하되 "**구독 전용·영구판 없음**"을 초반에 명시하고, **무료 대안(darktable·RawTherapee, 둘 다 R7 CR3 지원 확인)** 을 반드시 병기해 구독 부담 없는 독자 경로를 제공한다. 이미지는 **Wikimedia CC0(각주 부담 0, 몽골 현지 사막)** 를 전/후 "장면"의 확정 소스로 쓰고, RAW 현상 시연은 signatureedits 라이선스 RAW로 보완한다.

핵심 리스크는 세 가지다. (1) **저작권/라이선스** — 전/후 이미지는 "다운로드해서 연습"이 아니라 공개 GitHub Pages에 **재호스팅(재배포)** 이므로 더 엄격한 라이선스가 필요하고, **Adobe UI 스크린샷은 저작권 대상**이라 원칙적으로 재호스팅을 지양하고 "저자 직접 캡처 예정" 플레이스홀더 + Adobe 조건 준수로만 최소 삽입한다. (2) **정직성** — 원화(KRW) 요금 미확인, 삼양 12mm/RF 50mm 렌즈 프로파일 존재 여부 미확인 등은 숫자·프로파일명을 지어내지 말고 "공식 페이지/앱에서 확인" 방식으로 서술한다. (3) **초보자 과보정·카탈로그 사고** — 과채도·과명료도(HDR grunge)와 카탈로그 밖 파일 이동으로 인한 missing photo가 대표 함정이며, 각 챕터에 경고 박스로 완화한다.

## Key Findings

### Recommended Stack

주력 도구는 **Lightroom Classic**(데스크톱·카탈로그 기반)으로 확정하되, 이 파트의 정직성 축은 "구독 전용, 영구 라이선스 없음"을 초반에 못 박고, **단독 Lightroom(CC/클라우드) 플랜을 사면 Classic을 못 쓴다**는 점을 명확히 경고하는 것이다(Classic은 Photography 플랜에만 포함). 가격은 본문에 원화 숫자를 박제하지 말고 "결제 직전 공식 페이지 재확인" 방식으로 쓴다. 모든 R7 CR3 편집은 무료 오픈소스로도 가능하므로 구독 부담 없는 경로를 병기한다.

**Core technologies (도구):**
- **Lightroom Classic (Photography 플랜)**: 주력 도구 — 카탈로그 기반 데스크톱 워크플로. 구독 전용(US$14.99/월 20GB, 2025-01 인상). 원화 요금 **미확인**.
- **darktable (무료·GPL)**: 최우선 무료 대안 — R7 CR3 지원 확인(WB 프리셋 4.4+, CR3 3.8+). 책 기존 은하수 추천과 연속성. "최신 4.x 설치" 문구 필수.
- **RawTherapee (무료·GPL)**: 두 번째 무료 대안 — 5.9에서 R3/R7/R10 지원 명시. 정밀 디모자이크·디테일용.
- **영구 라이선스 대안**: DxO PhotoLab(영구 전용, 노이즈·렌즈보정 강점) / ON1 Photo RAW($99.99 올인원). Capture One(영구+구독).
- **모바일 즉석 보정**: Snapseed(완전 무료) → Lightroom Mobile.
- **권장 사양(책용 한 줄)**: RAM 16GB + SSD면 R7 CR3 보정 무난. Apple Silicon 16GB 통합메모리 쾌적.

### Expected Features

이 파트의 "기능"은 곧 **가르칠 보정 단계**다. 17단계 패널 순서가 챕터 척추이며, 1~10 + 14(기본 샤픈) + 17(내보내기)이 "모든 사진 공통 코어", 11~16이 "필요 시" 단계다.

**Must have (table stakes — 모든 초보 보정에 필수):**
- 비파괴/카탈로그 개념(CR3 원본은 안 건드림) — 슬라이더를 누를 용기의 전제
- 프로파일 선택 → **렌즈 보정(프로파일+CA)** → 변환/수평 → 크롭
- 화이트밸런스(Temp/Tint) → 노출/대비 → 하이라이트/섀도/화이트/블랙(Alt-drag 클리핑 프리뷰)
- 텍스처/명료도/디헤이즈(절제 강조) → 생동감 vs 채도(왜 Vibrance 먼저인지)
- 디테일: 샤픈+노이즈, **Denoise(AI, RAW 전용, 새 DNG 생성)**
- 내보내기(웹 sRGB/JPEG가 90% 케이스, 인쇄 프리셋)

**Should have (차별화 — 여행에 고가치):**
- **마스킹 → Select Sky**(원클릭 극적인 사막 하늘, 노력 대비 wow 최고), Linear/Radial Gradient(ND grad 모사), Brush(닷지/번), Select People(인물 피부)
- **Photo Merge > Panorama / HDR / HDR Panorama** — 촬영부의 R7 AEB 브라케팅과 직접 연결
- 톤 곡선 / 색보정(Color Grading) — 시그니처 룩
- 프리셋(저장+임포트 적용, 여행 전체 배치 일관성) — 단계를 배운 뒤의 보상

**Defer / 명시적 제외 (anti-features):**
- 천체 스태킹/은하수 처리 — 별도 darktable 파트(교차 링크만)
- Generative Remove·AI 하늘 교체·Lens Blur·Point Color — 한 문장 언급 후 defer
- Print 모듈/soft-proof 심화, 테더링·키워딩, Photoshop 왕복, 영상 — 이 파트 범위 밖

### Architecture Approach (콘텐츠 구조·소싱·정책)

이 파트의 "아키텍처"는 폴더/파트 구조, 이미지 재호스팅 소싱, 스크린샷 정책이다. 크럭스는 **"다운로드/연습 가능 ≠ 책에 재호스팅 가능"** — 전/후 이미지를 공개 책에 싣는 것은 명백한 재배포이므로 재배포/파생물 허용 라이선스여야 한다(우선순위 CC0 > CC BY > CC BY-SA).

**Major components:**
1. **폴더/파트 구조** — 새 폴더 **`src/13-editing/`**(11·12 사용 중이라 11 불가 → 다음 미사용 13). 이미지: `src/images/travel-editing/`. 파트 제목 **"여행 사진 보정"**(기존 6부 은하수 "후보정"과 구분). SUMMARY.md에 1부(여행) 다음·2부(드론) 앞에 새 "2부"로 삽입, 이후 부 번호 +1 시프트(저노력 대안: 1부 하위 섹션 편입).
2. **재호스팅 OK 이미지 소스** — **Wikimedia CC0 확정**(Bayanzag 02/01, Camel at Khongoryn Els 01/02 — 각주 부담 0, 몽골 현지 사막). CC BY 보너스(Flaming Cliffs 6000px, 저자표시+"변경함"). RAW 현상 시연은 **signatureedits**(distribute 허용, "meaningful modification" 조건 충족) + raw.pixls.us **CC0 서브셋(파일별 확인)**. Unsplash/Pexels는 JPEG·인물 초상권 주의(사막 풍경만).
3. **Adobe UI 스크린샷 정책** — Adobe UI는 저작권+상표 보호. 튜토리얼 조건부 허용이나 자가출판 책에서는 **기본 지양**: 패널·슬라이더를 글/표로 설명하고, 스크린샷 자리엔 `<!-- 스크린샷: 저자 직접 캡처 예정 -->` 플레이스홀더. 저자 직접 캡처 시 Adobe 조건(전체 캡처 + "Adobe product screenshot(s) reprinted with permission from Adobe." 표기 + 무보증 + 캡처 속 사진은 CC0/자작) 준수.
4. **크레딧 규약** — 각 전/후 아래 캡션 + `credits.md` 표에 출처·저작자·라이선스·변경내용 기록.

### Critical Pitfalls

1. **카탈로그 밖 파일 이동 → missing photo (P1, Critical)** — Finder/탐색기로 파일·폴더를 옮기면 LR이 원본을 잃고 느낌표(!) 발생. 완화: 이동/이름변경은 **반드시 LR 내부**에서. "수입/카탈로그" 챕터 전용 경고 박스.
2. **카탈로그 백업 ≠ 원본 백업 (P2, Critical)** — .lrcat 백업은 편집내역만, 원본 RAW는 별도. 완화: 원본 RAW / 카탈로그 **이중 백업**, 3-2-1 짧게 언급.
3. **과보정 (P3, Moderate)** — 과채도·과명료도·과디헤이즈·크러시드 블랙·헤일로(HDR grunge). 완화: 값 넣고 절반으로, before/after 토글, 극단 나쁜 예 제시. 각 패널 챕터 + "과보정 피하기" 별도 절.
4. **렌즈 프로파일 미확인 (A5, 집필 함정)** — 삼양 12mm·RF 50mm Adobe 프로파일 존재 여부 **미확인**. 완화: **프로파일명 지어내지 말 것**, "LR에서 직접 검색해 확인" + 없을 때 수동 교정 경로 제시.
5. **프리셋 과의존 (P4)** — 원클릭 프리셋을 사진마다 강제 적용. 완화: 프리셋은 시작점, 적용 후 노출·WB 재조정.

**촬영 시 고려사항(shoot-for-edit) 이월:** A1 RAW로 찍기 · A2 하이라이트 보호("하늘을 지켜라") · A3 ETTR(R7에선 효과 제한적, 규칙 아닌 선택지) · A4 WB(리뷰용 상식값) · A5 렌즈 프로파일(인지만) · A6 HDR/파노라마 브라케팅(R7 AEB: 기본 3장, 2/5/7 선택, ±3EV 1/3스톱 — 검증됨) · A7 초점/선명도는 카메라에서 끝내라(LR은 나간 초점 못 살림). 각 항목의 촬영 vs 편집 배치는 PITFALLS.md 표 참조.

## Implications for Roadmap

리서치 종합 기반 권장 **챕터 구조(= 파트 내 phase)**. FEATURES.md 권장 챕터 분할과 ARCHITECTURE.md 파일 레이아웃을 통합했다.

### 챕터 1: 준비 & 개념 (index + 워크플로 개요)
**Rationale:** 초보자는 "원본이 안 망가진다"는 확신(비파괴/카탈로그)이 있어야 슬라이더를 누를 용기가 생김. 도구 선택(구독 전용 경고 + 무료 대안)도 여기서.
**Delivers:** `13-editing/index.md`(왜 보정하나·LR Classic 개요·구독/무료 대안·사양) + `13-editing/lightroom-workflow.md`(카탈로그·가져오기·현상 모듈 패널을 **글/표로**, 스크린샷 플레이스홀더).
**Addresses:** 비파괴/카탈로그 개념, 도구 매트릭스. **17단계 순서 다이어그램("보정 순서 한눈에 보기")을 여기서 도입**해 각 섹션 헤더에 재사용.
**Avoids:** P1(카탈로그 밖 이동), P2(백업 혼동) — 전용 경고 박스.

### 챕터 2: 필수 보정 순서 (17단계 척추)
**Rationale:** 책의 핵심. 프로파일 → 렌즈 → 변환/크롭 → WB → 톤 → presence → 생동감 → (기본)디테일 → 내보내기의 전역 코어. 각 단계가 다음 단계의 baseline을 바꾸므로 순서가 중요.
**Delivers:** `13-editing/before-after-basics.md`(노출·WB·대비 전/후) 중심. 17단계 각 라인 = 한 섹션 + 한 줄 rationale.
**Uses:** Lightroom Classic 기본/렌즈/변환/HSL 패널. 이미지 **CC0 #1(Bayanzag 02), #2(Camel 01)**.
**Avoids:** A5(렌즈 프로파일 — in-app 검색 + 수동 경로, 프로파일명 조작 금지), P6(순서 뒤죽박죽).

### 챕터 3: 여행 상황별 레시피 (a~e)
**Rationale:** 척추를 실제 고비 상황에 적용하는 "gold" 섹션. 값이 아니라 *이유*를 가르치고 before/after를 보임.
**Delivers:** 5개 레시피 — (a)대낮 강광 (b)황혼/골든아워 (c)역광/실루엣 (d)인물/피부 (e)하늘 복원. 각 레시피에 "촬영으로 예방" 콜백.
**Addresses:** 상황별 슬라이더 방향 + 마스킹 진입.
**Avoids:** P3(과보정) — 특히 (a)디헤이즈·(d)피부 명료도.

### 챕터 4: 국소 보정 — 마스킹 & 디테일/노이즈
**Rationale:** 전역 보정 완료 후 마스크가 교정된 이미지에 반응. 여행 사진에 입체감을 주는 최고 wow 단계.
**Delivers:** `13-editing/before-after-landscape.md`(사막 색감·채도·디테일/그림자 전/후). Select Sky/Gradient/Brush/Select People + 샤픈 + AI Denoise.
**Uses:** 마스킹 패널, Denoise(새 DNG). 이미지 **CC0 #3(Camel 02), CC BY #4(Flaming Cliffs 6000px)**.
**Avoids:** 샤픈 헤일로(Masking 슬라이더 Alt-drag), 섀도 리프트 노이즈(Denoise 먼저).

### 챕터 5: 합치기 — 파노라마 & HDR (촬영 연결)
**Rationale:** 편집을 촬영부와 잇는 다리. R7 AEB 브라케팅이 HDR을 가능케 함. 병합 결과 DNG를 다시 17단계로.
**Delivers:** Photo Merge > Panorama(30~50% 겹침, 노출 고정) / HDR(-2/0/+2) / HDR Panorama. Deghost 안내.
**Avoids:** A6(자동 노출로 이음매·고스트) — 노출·WB 수동 고정.

### 챕터 6: 프리셋 & 내보내기 + 무료 RAW 실습 + 크레딧
**Rationale:** 프리셋 = 저장된 2~14단계. 여행 전체 배치 일관성. 내보내기 = 최종 산출물.
**Delivers:** `13-editing/raw-develop-practice.md`(무료 RAW 받아 따라하기 → 08-references 링크, signatureedits/#5, raw.pixls CC0/#6) + `13-editing/credits.md`(출처·저작자·라이선스·변경 표) + 프리셋/내보내기(웹 vs 인쇄).
**Avoids:** P4(프리셋 과의존).

### Phase Ordering Rationale
- **의존성:** 비파괴 이해 → 슬라이더 용기 / 렌즈+변환 → 크롭 → 하류 전부 / WB → 톤 → HSL·색보정 / 전역(2~14) → 마스킹 / 단계 이해 → 프리셋 / 촬영 브라케팅 → HDR·파노라마. (FEATURES.md Feature Dependencies 그래프 준수.)
- **그룹핑:** ARCHITECTURE.md의 권장 5+1 파일 레이아웃과 FEATURES.md 7-챕터 분할을 6개 챕터로 통합(전/후 basics와 landscape를 소싱 이미지 기준으로 배치).
- **함정 회피:** 카탈로그 사고(P1/P2)를 맨 앞 개념 챕터에서, 과보정(P3)을 각 실전 챕터에서, 렌즈 프로파일 미확인(A5)을 척추 챕터에서 선제 완화.

### Research Flags

집필 중 추가 확인(in-app/공식 페이지)이 필요한 챕터:
- **챕터 1 (도구/가격):** 원화(KRW) Photography 플랜 요금 **미확인** → 숫자 박제 금지, "공식 페이지 확인" 서술. 단독 LR(CC) 정확 요금 미확인.
- **챕터 2 (렌즈 교정):** 삼양 AF 12mm F2 RF-S / Canon RF 50mm F1.8 STM Adobe 프로파일 존재 여부 **미확인** → 집필 시 supported-lenses 목록 및 LR 앱에서 실검색 필수. 프로파일명 조작 금지.
- **챕터 4/6 (이미지):** Wikimedia 파일별 라이선스 배지 **육안 재확인**(Bernard Gagnon은 CC0·GFDL·CC BY-SA 혼재 업로드). raw.pixls CC0 여부 파일별 확인.
- **챕터 1 (스크린샷):** Adobe Permissions 원문 최종 재확인 후 표기 문구 확정.

표준 패턴(추가 리서치 불필요):
- **챕터 3 (레시피), 챕터 5 (병합):** 슬라이더 방향·R7 AEB 사양이 HIGH 신뢰도로 검증됨. 기능명·메뉴 경로 Adobe 공식 확인 완료.

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack (도구/가격) | MEDIUM-HIGH | 구독 구조·무료 앱 R7 CR3 지원 HIGH. USD 요금은 helpx+2차 교차확인(공식 페이지 JS 렌더 타임아웃). **원화·단독 LR 요금 미확인.** |
| Features (보정 단계) | HIGH | 기능명·메뉴 경로 Adobe 공식(v14.x, 2025-06) 검증. 패널 순서는 HIGH *관례*(다수 권위 소스 일치, 법칙 아님으로 명시). 레시피 방향 HIGH, 값은 이미지별 판단. |
| Architecture (소싱/구조) | HIGH / 구조 MEDIUM | 라이선스는 각 원문·Commons API 직접 검증(HIGH). Adobe 스크린샷 정책 MEDIUM-HIGH(공식 요약, 원문 재확인 권장). 폴더/부 번호는 저자 취향(MEDIUM). |
| Pitfalls | MEDIUM-HIGH | 카메라 사양·RAW/ETTR 원리·R7 AEB HIGH. **렌즈 프로파일 존재 여부 LOW/미확인.** |

**Overall confidence:** HIGH (워크플로·기능·라이선스 골격), 개별 미확인 항목은 명시적으로 이월.

### Gaps to Address

모든 미확인은 추측으로 채우지 말고 아래 방식으로 처리한다:

- **원화(KRW) Photography 플랜 요금** [미확인]: 본문에 숫자 박제 금지. "2026년 기준, 변동 가능 — 공식 KR 페이지에서 확인" + URL.
- **단독 Lightroom(CC) 1TB 정확 요금(USD/KRW)** [미확인, ≈$9.99~11.99 추정]: "재확인 필요"로 표기.
- **삼양 12mm / RF 50mm Adobe 렌즈 프로파일** [미확인/LOW]: 프로파일명 조작 금지. "LR에서 직접 검색" + 없을 시 수동 교정 경로. Adobe 지원 렌즈 목록 & Lens Profile Downloader로 확인.
- **DxO PhotoLab 9 정확 가격 / Capture One 2026-06 인상 후 금액** [부분확인]: 대략값만, "결제 직전 재확인" 캡션.
- **Apple 사진 R7 CR3 완전 지원** [MEDIUM/추정]: 단정 금지, "지원 추정".
- **Wikimedia 파일별 라이선스 / raw.pixls CC0 여부** [파일별 확인]: 책에 넣기 직전 File 페이지 배지 육안 재확인.
- **Adobe 스크린샷 정책 원문** [MEDIUM-HIGH]: 인용 전 원문 재확인, 표기 문구 정확히.
- **darktable 버전 주의**: "반드시 최신 4.x 설치" 문구 삽입(구버전 R7 문제 이력).

## Sources

### Primary (HIGH confidence)
- Adobe helpx — Develop module tools / Enhance·Denoise / Masking / Panorama·HDR / What's new 2025-06(v14.4): 기능명·메뉴 경로 검증
- Wikimedia Commons MediaWiki API (`prop=imageinfo` + `extmetadata`) — 파일별 CC0/CC BY 라이선스 직접 조회
- signatureedits Free Raw License Terms — `distribute` 허용·조건 원문 확인
- raw.pixls.us — CC0 선언문·비-CC0 필터 확인
- Canon 공식 R7 매뉴얼 — AEB 3/2/5/7장, ±3EV 1/3스톱
- Photons-to-Photos / DPReview — R7 기본 ISO DR ≈10.5스톱
- Julieanne Kost (Adobe) — Develop/Masking 개요
- darktable / RawTherapee 공식 카메라 지원 페이지 — R7 CR3 지원

### Secondary (MEDIUM confidence)
- Adobe helpx 20GB 요금 FAQ + Imagen 2026 가격 요약 — USD 요금 교차확인
- mastering-lightroom.com / Matt Kloskowski / jholko.com — 패널 순서 관례 corroboration
- Unsplash / Pexels License 원문 — 재배포·인물 주의
- Adobe Permissions (Images and user guides) — 스크린샷 조건(공식 요약)
- Puget Systems — LR Classic 하드웨어 권장

### Tertiary (LOW confidence — 반드시 검증)
- Adobe 커뮤니티 스레드 (삼양/RF STM 프로파일) — 렌즈 프로파일 **미확인**, in-app 검색 필수
- Apple RAW 지원 목록 — R7 CR3 편집 지원 **추정**
- 원화 요금 관련 검색 언급 — **미확인**

---
*Research completed: 2026-07-14*
*Ready for roadmap: yes*
