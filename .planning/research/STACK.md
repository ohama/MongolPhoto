# Technology Stack — 사진 보정(Post-Processing) Part

**Project:** MongolPhoto (v1.3 — 사진 보정 파트 추가)
**Focus:** Adobe Lightroom Classic + 비교 대상 편집 앱
**Researched:** 2026-07-14
**기준 장비:** Canon R7 (APS-C, CR3 RAW), 삼양 AF 12mm F2.0, RF 50mm F1.8

> 정직성 원칙: 아래 가격/버전은 검색 시점(2026-07)에 확인한 값입니다. 가격은 지역·시점·프로모션에 따라 수시로 바뀝니다. **결제 직전 공식 페이지에서 반드시 재확인**하세요. 확인 불가 항목은 `미확인`으로 표기하고 공식 URL을 남겼습니다.

---

## 1. Adobe Lightroom Classic 구독 요금

### 핵심 사실 (HIGH confidence)

- **Lightroom Classic은 구독 전용입니다. 영구 라이선스(perpetual license)는 존재하지 않습니다.** 과거 CS6/LR6 시절의 단품 구매는 단종되었고, 현재는 Creative Cloud 구독으로만 사용 가능합니다.
- Lightroom Classic은 **Photography 플랜(사진 플랜)** 에 포함됩니다. 단독 "Lightroom" 플랜(클라우드형)에는 **포함되지 않습니다** (아래 2번 주의).

### Lightroom Classic이 포함된 플랜 (USD, 2026-07 기준)

| 플랜 | 월 요금(USD) | 저장공간 | 포함 앱 | 비고 |
|------|-------------|---------|---------|------|
| Photography 플랜 (20GB) | **US$14.99/월** (연 약정, 월 청구) | 20GB 클라우드 | Lightroom + **Lightroom Classic** + Photoshop | 2025-01-15 부터 $9.99 → $14.99 인상. 기존 $9.99 요금제는 신규 가입 종료 |
| Photography 플랜 (20GB) 연 선결제 | US$119.88/년 | 20GB | 동일 | 연 선결제는 인상 없이 유지 (검색 확인, MEDIUM) |
| Photography 플랜 (1TB) | **US$19.99/월** | 1TB 클라우드 | Lightroom + **Lightroom Classic** + Photoshop | 저장공간 확장판 |

출처: [Adobe Photography 플랜 비교(공식)](https://www.adobe.com/creativecloud/photography/compare-plans.html) · [Adobe 20GB 요금 변경 FAQ(공식)](https://helpx.adobe.com/creative-cloud/faq/ccpp-20gb.html) · [Imagen: Photography Plan Pricing 2026](https://imagen-ai.com/valuable-tips/adobe-photography-plan-pricing/)

> ⚠️ **공식 compare-plans / plans 페이지는 자바스크립트 렌더링으로 자동 수집(WebFetch)이 반복 타임아웃**되어, 위 USD 수치는 Adobe helpx 및 2차 출처(검색)로 교차 확인한 값입니다. 결제 화면에서 최종 확인 권장.

### KRW(원화) 요금 — 미확인

- 한국 Photography 플랜(Lightroom Classic 포함)의 정확한 원화 월 요금은 **미확인**입니다. 공식 KR 페이지가 자동 수집되지 않았습니다.
- 참고(교차검증 안 됨): 검색상 단독 **Lightroom(클라우드) 1TB** 플랜이 약 **13,200원/월** 수준으로 언급되나 이는 Classic 미포함 플랜입니다. Photography 플랜 원화가는 **미확인**.
- 정확한 원화 요금은 여기서 확인: [Adobe KR 포토그래피 플랜 비교](https://www.adobe.com/kr/creativecloud/photography/compare-plans.html) · [Adobe KR Lightroom 요금](https://www.adobe.com/kr/products/photoshop-lightroom/plans.html)

### Lightroom Classic vs Lightroom(CC) — 반드시 구분

| 구분 | Lightroom **Classic** | Lightroom (CC / 클라우드) |
|------|----------------------|--------------------------|
| 형태 | 데스크톱 전용, **카탈로그 기반** | 클라우드 우선, 데스크톱+모바일+웹 동기화 |
| 파일 저장 | 로컬 디스크(원본은 내 PC) | 원본을 Adobe 클라우드에 업로드 |
| 대상 | 대량 라이브러리 관리, 폴더/카탈로그 워크플로 | 어디서나 접근·모바일 편집 중심 |
| 포함 플랜 | Photography 플랜(20GB/1TB) | Photography 플랜 **또는** 단독 Lightroom 플랜(1TB) |
| CR3 지원 | 예 (Adobe Camera Raw) | 예 |

> 책 집필 포인트: "단독 Lightroom 플랜을 사면 Lightroom **Classic**은 못 쓴다"는 점을 독자에게 명확히 경고할 것. 카탈로그 기반 데스크톱 워크플로(폴더 관리)를 원하면 **Photography 플랜**을 사야 함.

---

## 2. 비교 대상 앱 — 요약 매트릭스

> CR3(Canon R7) 지원 = R7의 CR3/cRAW 파일을 현행 버전에서 처리 가능한지.

| 앱 | 라이선스 | 가격(확인 시점 2026-07) | 플랫폼 | R7 CR3 지원 | 왜 Lightroom Classic 대신 고르나 (한 줄) | 출처 |
|----|---------|------------------------|--------|------------|------------------------------------------|------|
| **Adobe Lightroom (CC/클라우드)** | 구독 | 단독 1TB 약 US$9.99~11.99/월 (미확인, 재확인 필요) | Win/Mac/iOS/Android/Web | 예 | 여러 기기에서 클라우드 동기화 + 단순한 UI, 모바일 편집 중심 | [Adobe LR 요금](https://www.adobe.com/products/photoshop-lightroom/plans.html) |
| **Capture One Pro** | 영구 **또는** 구독 | 영구 ~US$299(2026-06-02 이후 +6% 인상), 구독 ~US$24/월 또는 US$179/년 | Win/Mac | 예 | 최고 수준 색 재현·피부톤, 강력한 레이어·테더 촬영 | [Capture One 가격](https://www.captureone.com/en/pricing/capture-one-pro) · [PetaPixel 인상 기사](https://petapixel.com/2026/05/27/capture-one-to-increase-all-product-prices-by-6/) |
| **DxO PhotoLab** (현행 9 Elite) | **영구 전용**(구독 없음) | PL8 기준 Elite US$229 / Essential US$139. PL9 정확가 미확인 | Win/Mac | 예 (R7 지원 확인) | 업계 최고 RAW 노이즈 제거(DeepPRIME) + 렌즈 광학 보정 | [DxO PhotoLab 9 상점](https://shop.dxo.com/en/dxo-photolab-9-elite.html) · [DxO 지원 카메라](https://www.dxo.com/en/supported-cameras/) |
| **ON1 Photo RAW 2026** | **영구**(구독 옵션도 있음) | 영구 US$99.99(신규) | Win/Mac | 예 | 한 번 구매로 Lightroom형 올인원, 구독 없음 | [ON1 구매](https://www.on1.com/products/photo-raw/buy/) |
| **darktable** | **무료·오픈소스**(GPL) | 무료 | Win/Mac/Linux | **예** (WB 프리셋 4.4부터, CR3는 3.8+) | 완전 무료·비파괴 편집, 책에서 은하수 보정에 이미 채택 | [darktable 카메라 지원](https://www.darktable.org/resources/camera-support/) |
| **RawTherapee** | **무료·오픈소스**(GPL) | 무료 | Win/Mac/Linux | **예** (5.9에서 R3/R7/R10 지원) | 무료 + 정밀한 디모자이크·디테일 제어 | [RawTherapee 5.9](https://rawtherapee.com/downloads/5.9/) |
| **Apple 사진(Photos)** | macOS 내장(무료) | 무료 | macOS/iOS | 예(추정, MEDIUM) — R7은 출시 오래됨 | 이미 설치됨·iCloud 동기화, 가벼운 보정에 충분 | [Apple RAW 지원](https://support.apple.com/en-us/122870) |
| **Snapseed** (모바일) | 무료 | 무료(광고·인앱결제 없음) | iOS/Android | RAW DNG 편집 지원(카메라 CR3 직접 아님) | 완전 무료 모바일 편집기, 부분보정·힐링 강력 | [Snapseed 리뷰 2026](https://theeditingstudio.co/blog/snapseed-review-2026) |
| **Lightroom Mobile** | 무료 티어 + 구독 | 무료 기본 / 전체기능은 Adobe 구독 | iOS/Android | 예 | Adobe 생태계 동기화 + 최고 수준 모바일 RAW 처리 | [Adobe LR 요금](https://www.adobe.com/products/photoshop-lightroom/plans.html) |
| **VSCO** (모바일) | 프리미엄(freemium) | Plus 약 US$29.99/년 | iOS/Android | RAW(멤버십 시) | 고품질 필름 에뮬레이션 프리셋 200종+ | [Lovable: 2026 앱 비교](https://lovable.dev/guides/best-photo-editing-apps-iphone-android-2026) |

### 영구 vs 구독 요약

- **영구 라이선스(한 번 구매)**: DxO PhotoLab(영구 전용), ON1 Photo RAW, Capture One(영구 옵션).
- **구독 전용**: Adobe Lightroom Classic / Lightroom(CC).
- **무료**: darktable, RawTherapee, Apple 사진, Snapseed(모바일), Lightroom/VSCO 무료 티어.

---

## 3. 무료·오픈소스의 Canon R7 CR3 지원 (핵심 확인)

> 책이 이미 **은하수 보정에 darktable을 추천**하고 있으므로 R7 실사용 가능 여부가 중요.

### darktable — R7 CR3 지원됨 (MEDIUM-HIGH)

- CR3 포맷 자체는 **darktable 3.8.0(2021)** 부터 지원 (LibRaw/rawspeed 기반).
- **Canon EOS R7 화이트밸런스 프리셋은 darktable 4.4에서 추가됨.** 즉 4.4 이상에서 R7의 CR3를 정상 처리 + WB 프리셋 사용 가능.
- 권장: **최신 정식 버전(4.x) 사용**. 구버전(3.x 초기)에서는 R7 파일 문제 보고가 있었음.
- 결론: **책의 darktable 은하수 워크플로는 R7에서 유효.** 다만 "반드시 최신 버전 설치" 문구를 넣을 것.
- 출처: [darktable 카메라 지원 페이지](https://www.darktable.org/resources/camera-support/) · [darktable 3.8.0 CR3 지원(DPReview)](https://www.dpreview.com/news/2500108780/darktable-3-8-0-released-open-source-photo-workflow-app-improvements) · [9to5Linux: darktable 4.4](https://9to5linux.com/darktable-4-4-open-source-raw-image-editor-released-heres-whats-new)

### RawTherapee — R7 CR3 지원됨 (HIGH)

- **RawTherapee 5.9에서 Canon EOS R3, R7, R10 지원 명시.** CR3 압축 파일 지원 포함.
- 주의: 초기 5.8에서는 CR3 이미지 디코딩은 되나 일부 **메타데이터는 못 읽는** 제약 보고. 5.9 이상 사용 권장.
- 출처: [RawTherapee 5.9 릴리스 노트](https://rawtherapee.com/downloads/5.9/) · [pixls.us: R7 CR3 in RawTherapee 5.9](https://discuss.pixls.us/t/problems-with-cr3-from-canon-eos-r7-in-rawtherapee-5-9/34431)

> 요약: **두 무료 앱 모두 R7 CR3를 처리 가능**. 초보 은하수 보정에는 darktable(책 기존 추천 유지), 정밀 디테일/디모자이크 실험에는 RawTherapee.

---

## 4. Lightroom Classic 2026 시스템 요구사항 — "보통 노트북에서 돌아가나?"

| 항목 | 최소 | 원활 사용 권장 | 비고 |
|------|------|---------------|------|
| RAM | 8GB | **16GB(사실상 최소), 32GB 이상 이상적** | R7 CR3 대량 처리 시 16GB 권장 |
| CPU | 64-bit | Intel Core i7 / AMD Ryzen 7 (7세대+) 또는 Apple M 시리즈 | — |
| OS | Windows 10/11 (64-bit), macOS Monterey 이상 | 최신 버전 | — |
| 저장 | — | OS+카탈로그용 512GB+ SSD | HDD보다 SSD 강력 권장 |
| GPU | — | VRAM 4GB+ 전용 GPU 권장 (Apple Silicon은 통합 메모리로 대체) | AI 마스킹·노이즈 감소 가속 |

**한 줄 결론(책용):** 최근 5년 내 산 보급형 노트북이라도 **RAM 16GB + SSD**면 R7의 CR3 보정이 무난. RAM 8GB·HDD 구형 기기는 느려서 답답할 수 있음. Apple Silicon(M1 이상) 맥은 16GB 통합 메모리로도 쾌적.

출처: [Adobe Lightroom Classic 공식 시스템 요구사항](https://helpx.adobe.com/lightroom-classic/system-requirements.html) · [Puget Systems 하드웨어 권장](https://www.pugetsystems.com/solutions/photo-editing-workstations/adobe-lightroom-classic/hardware-recommendations/)

---

## 5. 책 집필용 권고 (Opinionated)

1. **주력 도구 = Lightroom Classic**로 서술하되, "구독 전용·영구판 없음"을 초반에 명시. 원화 요금은 본문에 숫자 박제하지 말고 "공식 페이지에서 확인" 방식으로 쓸 것(가격 변동 잦음).
2. **무료 대안 2종을 반드시 병기**: darktable(책 기존 은하수 추천과 연속성), RawTherapee. 둘 다 R7 CR3 지원 확인됨 → 구독 부담 없는 독자용 경로 제공.
3. **영구 라이선스를 원하는 독자**: DxO PhotoLab(노이즈·렌즈보정 강점) 또는 ON1 Photo RAW(저렴한 올인원, $99.99) 안내.
4. **모바일 즉석 보정**: Snapseed(완전 무료) + Lightroom Mobile 순으로 소개.
5. 모든 가격/버전에 "2026년 기준, 변동 가능" 캡션을 달 것.

---

## 미확인(재확인 필요) 목록

| 항목 | 상태 | 재확인 URL |
|------|------|-----------|
| Photography 플랜 **원화(KRW)** 월 요금 | 미확인 | https://www.adobe.com/kr/creativecloud/photography/compare-plans.html |
| 단독 Lightroom(CC) 1TB 정확 요금(USD/KRW) | 미확인(≈$9.99~11.99 추정) | https://www.adobe.com/products/photoshop-lightroom/plans.html |
| DxO PhotoLab **9** 정확 가격(신규/업그레이드) | 미확인(PL8 Elite $229/Essential $139는 확인) | https://shop.dxo.com/en/dxo-photolab-9-elite.html |
| Capture One 2026-06 인상 후 정확 금액 | 부분확인(+6% 인상, 영구 ~$299 전후) | https://www.captureone.com/en/pricing/capture-one-pro |
| Apple 사진 R7 CR3 편집 완전 지원 여부 | MEDIUM(모델별 지원, R7은 구형이라 지원 추정) | https://support.apple.com/en-us/122870 |

## 전체 출처

- Adobe Photography 플랜 비교(공식): https://www.adobe.com/creativecloud/photography/compare-plans.html
- Adobe 20GB 요금 변경 FAQ(공식): https://helpx.adobe.com/creative-cloud/faq/ccpp-20gb.html
- Adobe Lightroom 요금(공식): https://www.adobe.com/products/photoshop-lightroom/plans.html
- Adobe KR 포토그래피 플랜: https://www.adobe.com/kr/creativecloud/photography/compare-plans.html
- Adobe Lightroom Classic 시스템 요구사항(공식): https://helpx.adobe.com/lightroom-classic/system-requirements.html
- Imagen — Photography Plan Pricing 2026: https://imagen-ai.com/valuable-tips/adobe-photography-plan-pricing/
- Capture One 가격(공식): https://www.captureone.com/en/pricing/capture-one-pro
- PetaPixel — Capture One 6% 인상: https://petapixel.com/2026/05/27/capture-one-to-increase-all-product-prices-by-6/
- DxO PhotoLab 9 상점: https://shop.dxo.com/en/dxo-photolab-9-elite.html
- DxO 지원 카메라: https://www.dxo.com/en/supported-cameras/
- ON1 Photo RAW 구매(공식): https://www.on1.com/products/photo-raw/buy/
- darktable 카메라 지원(공식): https://www.darktable.org/resources/camera-support/
- darktable 3.8.0 CR3(DPReview): https://www.dpreview.com/news/2500108780/darktable-3-8-0-released-open-source-photo-workflow-app-improvements
- 9to5Linux — darktable 4.4: https://9to5linux.com/darktable-4-4-open-source-raw-image-editor-released-heres-whats-new
- RawTherapee 5.9 릴리스: https://rawtherapee.com/downloads/5.9/
- pixls.us — R7 CR3 in RawTherapee: https://discuss.pixls.us/t/problems-with-cr3-from-canon-eos-r7-in-rawtherapee-5-9/34431
- Apple RAW 지원(공식): https://support.apple.com/en-us/122870
- Puget Systems — LR Classic 하드웨어: https://www.pugetsystems.com/solutions/photo-editing-workstations/adobe-lightroom-classic/hardware-recommendations/
- Snapseed 리뷰 2026: https://theeditingstudio.co/blog/snapseed-review-2026
- Lovable — 2026 모바일 앱 비교: https://lovable.dev/guides/best-photo-editing-apps-iphone-android-2026
