# Technology Stack — 드론 영상 촬영 + CapCut 편집 (v1.4 파트)

**Project:** MongolPhoto (몽골 사진/영상 가이드 mdBook)
**Milestone:** v1.4 — 드론 영상(VIDEO) 촬영 + CapCut 편집 파트 추가
**Researched:** 2026-07-15
**Scope note:** 드론 PHOTO 파트(2부, DJI Mini 5 Pro, 몽골 주간 비행 규정)는 기존 원고에 이미 있음. 본 문서는 **영상 촬영 스펙 + CapCut 편집 도구**만 다룸.

> 정직성 원칙: 모든 스펙/가격은 공식 페이지 기준. 검증 불가 항목은 **미확인** + URL 표기. 가격/지역 정책은 변동성이 크므로 출처 URL과 확인 날짜를 남김.

---

## 1. DJI Mini 5 Pro — 영상(VIDEO) 스펙

**출처(공식):** https://www.dji.com/mini-5-pro/specs (확인일 2026-07-15)
**교차 검증:** CineD 출시 기사, Heliguy, DIYPhotography 스펙 가이드 (아래 Sources)
**신뢰도:** HIGH (해상도/fps/코덱/비트레이트/컬러모드는 공식 스펙 페이지에서 직접 확인)

### 1-1. 해상도 · 프레임레이트

| 영상 모드 | 해상도 | 프레임레이트(fps) | 슬로모션 | 비고 |
|-----------|--------|-------------------|----------|------|
| 4K | 3840×2160 | 24/25/30/48/50/60/**120** | 4K/120 = 슬로모션 | 120fps는 H.265 전용 |
| FHD | 1920×1080 | 24/25/30/48/50/60/120/**240** | 1080/240 = 초고속 슬로모션 | 240fps는 H.265 전용 |

- **최대 4K fps:** 120fps (4K 슬로모션 가능) — 이전 세대(Mini 4 Pro는 4K/100) 대비 향상. **공식 확인**
- **4K/60 HDR** 지원 (교차 검증 다수, HDR은 60fps 이하) — 공식 스펙 페이지 문구는 아래 컬러모드 표 참조
- **1080/240fps** = 가장 느린 슬로모션(초당 240장 → 8배 슬로) **공식 확인**

### 1-2. 컬러 프로파일 · 비트뎁스 · 코덱

| 프로파일 | 비트뎁스 / 크로마 | 코덱 | 용도 |
|----------|-------------------|------|------|
| 표준(Normal) FHD | 8-bit 4:2:0 | H.264 | 즉시 사용, 편집 부담 적음 |
| 표준(Normal) FHD/4K | 10-bit 4:2:0 | H.265 | 일반 촬영 고화질 |
| **HLG** | 10-bit 4:2:0 | H.265 | HDR 워크플로 |
| **D-Log M** | 10-bit 4:2:0 | H.265 | 색보정(그레이딩)용 Log — **LUT 필요** |

- **코덱:** H.264 / H.265(HEVC), 파일 포맷 MP4. **공식 확인**
- **최대 비트레이트:** **130 Mbps**. **공식 확인**
- **10-bit:** D-Log M / HLG / 표준(H.265) 모두 10-bit 4:2:0 지원. **공식 확인**
- **주의:** D-Log M·HLG·10-bit·120/240fps 슬로모션은 **모두 H.265 전용**. H.264는 8-bit 표준 FHD만.

### 1-3. 디지털 줌(영상) · 세로 촬영

| 항목 | 값 | 신뢰도 |
|------|-----|--------|
| 디지털 줌 (4K 영상) | 1~3배 | HIGH (공식) |
| 디지털 줌 (FHD 영상) | 1~4배 | HIGH (공식) |
| 짐벌 틸트 범위 | -90° ~ +55° | HIGH (공식) |
| **True Vertical(진짜 세로) 영상 모드** | **미확인** — 공식 스펙 페이지에서 "true vertical video" 전용 문구를 직접 확인하지 못함. Mini 5 Pro는 **회전형 짐벌(rotatable gimbal)** 탑재로 세로 촬영이 물리적으로 가능하다고 다수 매체 보도(CineD). 원고 반영 전 공식 페이지 재확인 권장. | LOW |

- **줌 한계 정직 포인트:** 영상 디지털 줌은 화질 저하를 동반(광학 아님). 4K에서 3배, FHD에서 4배가 상한. 몽골 야생동물/원경 촬영 시 "줌으로 당기기"보다 기체 접근이 화질상 유리 — 단, 기존 몽골 규정(주간·시야 내 비행) 준수 전제.

> ⚠️ **Mini 4 Pro 숫자 혼용 금지:** 본 표의 수치는 Mini 5 Pro 공식 스펙 기준. Mini 4 Pro(4K/100fps, 150Mbps 등)와 다르므로 혼용하지 말 것.

---

## 2. CapCut (2026) — 영상 편집 도구

**출처(공식):** https://www.capcut.com , https://www.capcut.com/help/update-capcut-app
**신뢰도:** 기능=HIGH(공식/다수 검증), **가격=MEDIUM**(공식 pricing 페이지 직접 취득 실패로 2차 출처 기반 → 미확인 처리), 지역정책=MEDIUM(변동성 큼)

### 2-1. 플랫폼

| 플랫폼 | 지원 | 비고 |
|--------|------|------|
| 모바일 iOS | O | App Store |
| 모바일 Android | O | Google Play |
| 데스크톱 Windows | O | **LUT(.cube/.3dl) 임포트 = 데스크톱 전용** |
| 데스크톱 Mac | O | LUT 임포트 지원 |
| 웹(브라우저) | O | capcut.com 온라인 에디터 |

- **핵심:** D-Log M 편집에 필요한 **외부 LUT 임포트는 데스크톱(Win/Mac)에서만** 가능. 모바일은 현재 외부 LUT 직접 임포트 미지원(내장 필터/프리셋만). → 본 가이드 편집 워크플로는 **데스크톱 권장**.

### 2-2. 무료 vs 유료(요금제)

| 항목 | Free(무료) | Standard | Pro |
|------|-----------|----------|-----|
| 가격(USD) | 무료 | 약 **$9.99/월** *(미확인, 2차 출처)* | 약 **$19.99/월 / $179.99/년** *(미확인, 2차 출처)* |
| 가격(KRW) | — | **미확인** | **미확인** |
| 기본 편집(컷/트림/멀티트랙/키프레임/스피드램프) | O | O | O |
| 1080p 내보내기 | O | O | O |
| **4K 내보내기** | ✕ | ✕(대체로) | O |
| HDR 내보내기 | ✕ | ✕ | O |
| 워터마크 제거(프리미엄 템플릿/에셋) | 부분 | O | O |
| 전체 AI 툴킷 | ✕ | 부분 | O |
| 클라우드/협업 | ✕ | 부분 | O(100GB+) |

- **가격 정직 포인트:** 위 USD 수치는 **2차 출처(BIGVU/gamsgo 등) 기반이며 공식 pricing 페이지 직접 확인 실패(404)** → **미확인**으로 표기. 원고 반영 전 https://www.capcut.com 요금제 페이지에서 재확인 필요. **KRW 가격은 미확인** — 앱 내 결제 화면 확인 권장. 가격은 2025년 개편 이력(요금 인상·Standard/Pro 분리)이 있어 **변동성 큼**.

### 2-3. 워터마크 정책 (핵심)

- **일반 수동 편집물의 1080p 내보내기: 워터마크 없음(무료).** — 직접 컷/트림/자막/색보정한 영상은 무료로 워터마크 없이 내보내기 가능. **신뢰도 MEDIUM-HIGH**
- **"Pro" 표시 템플릿·효과·에셋을 사용하면** 무료 계정에서 내보내기 시 **워터마크가 붙음**. → 유료(Standard/Pro)로 제거.
- 정리: **"내가 직접 편집한 것 = 워터마크 없음 / 유료 딱지 붙은 템플릿 사용 = 워터마크"**. 4K/HDR 내보내기는 Pro 필요.

### 2-4. 지역 가용성 (정직 caveat)

- **미국 삭제/복원 사가:** 2025-01-19 PAFACA(틱톡 관련법)로 미 앱스토어에서 CapCut 일시 삭제 → 2025-01-21 복원. 이후 2026-01-22/23 TikTok USDS 합작법인 딜 종결(CapCut·Lemon8 포함)로 미국 내 정식 복귀. **2026년 현재 미 앱스토어/Google Play 정상 제공.** (출처: Async/Clixie/NodeMaven 등)
- **한국 사용 가능 여부:** 한국은 CapCut 공식 지원 지역으로 보고됨(사용 가능). **신뢰도 MEDIUM** — 앱스토어에서 직접 확인 권장. **미확인 요소 없음은 아님**: 소유사가 ByteDance(중국계)라 정책·ToS·가용성이 **변동될 수 있음** → 원고에 "정책 변동 가능" 명시 필요.
- ⚠️ **정직 caveat 문장(원고용):** "CapCut은 ByteDance 소유로, 지역별 가용성·약관·가격이 바뀔 수 있습니다. 집필 시점(2026-07) 기준 한국·미국에서 사용 가능하나, 이용 전 최신 상태를 확인하세요."

### 2-5. 드론 영상 편집 관련 기능

| 기능 | 무료 여부 | 비고 |
|------|-----------|------|
| 멀티클립 타임라인(멀티트랙) | 무료 | 여러 드론 클립 배열 |
| 컷 / 트림 / 스플릿 | 무료 | 기본 |
| 스피드(슬로모/속도곡선 Curve) | 무료 | 4K/120·1080/240 슬로모 활용 |
| 스태빌라이제이션(흔들림 보정) | 무료 | 드론 진동/바람 보정 |
| 색보정(밝기/대비/채도/커브) | 무료 | 기본 컬러 조정 |
| **LUT 임포트(.cube/.3dl)** | 무료(단 **데스크톱 전용**) | **D-Log M 그레이딩 필수 경로** |
| 키프레임 | 무료 | 줌/이동/불투명도 애니 |
| 내장 음악 라이브러리 | 무료 | **라이선스 주의(2-6 참조)** |
| 자동 자막(auto-captions) | 무료/부분 | 언어별 정확도 상이 |
| 내보내기 해상도/fps/비트레이트 | 1080p 무료 / **4K는 Pro** | fps·비트레이트 옵션 조절 가능 |

- **D-Log M 편집 경로(정직):** CapCut 데스크톱에서 클립 선택 → Color(색상) 탭 → LUTs → 외부 LUT(.cube) 임포트. DJI D-Log M → Rec.709 변환 LUT를 넣거나 수동 Log 보정. **모바일에서는 외부 LUT 임포트 불가** → 데스크톱 필수.

### 2-6. 음악/에셋 라이선스 (⚠️ 최대 정직 포인트)

**신뢰도 MEDIUM-HIGH (다수 2차 출처 일치, 공식 material license 약관 확인 권장)**

- CapCut 내장 음악의 **"commercial(상업용)" 표시는 대체로 TikTok·CapCut 플랫폼 한정** 의미. **YouTube·기타 플랫폼 자동 커버 아님.**
- 이유: 내장 트랙 다수가 **원권리자에 의해 YouTube Content ID에 등록**되어 있어, YouTube 업로드 시 **저작권 클레임/수익화 차단/삭제** 발생 가능.
- CapCut 내장 저작권 체크 도구는 **TikTok 기준**이라 YouTube 안전을 보장하지 않음.
- **원고 필수 경고 문장:** "CapCut 내장 음악은 TikTok/CapCut 내 사용 기준으로 라이선스된 경우가 많습니다. YouTube 등 외부 플랫폼에 올리면 저작권 클레임·수익화 차단이 날 수 있으니, **외부 공개용 영상은 별도의 로열티프리 음원(YouTube 오디오 보관함, Epidemic Sound, 직접 확보한 음원)을 사용**하세요."
- 안전 대안: YouTube Audio Library, Epidemic Sound/Artlist(유료), 또는 무음+현장음.

---

## 3. 대안 도구 (간단 비교, 심층 X)

| 도구 | 가격 | 강점 | Log/LUT | 한 줄 |
|------|------|------|---------|-------|
| **CapCut(데스크톱)** | 무료~$19.99/월 | 쉬움, 템플릿, 자동자막, LUT 임포트(데스크톱) | .cube/.3dl 임포트(데스크톱) | 초보~중급, 빠른 SNS 편집. 본 가이드 기본 도구 |
| **DaVinci Resolve** | **무료**(유료 Studio 별도) | 강력한 색보정/노드, Log 처리 우수, 워터마크·기능제한 사실상 없음 | Log 변환·LUT 매우 강력 | D-Log M 진지한 그레이딩엔 최고. 학습곡선 높음 |
| DJI 자체(LightCut/DJI 앱) | 무료 | 드론 연동 자동편집 | 제한적 | 참고용 |

- **D-Log M 처리:** CapCut로도 가능하나(데스크톱+LUT), **정통 그레이딩은 DaVinci Resolve 무료판이 더 강력**. 가이드는 "쉬운 경로=CapCut, 진지한 색보정=DaVinci" 이원 안내 권장.

---

## Sources

**DJI Mini 5 Pro (영상 스펙):**
- 공식: https://www.dji.com/mini-5-pro/specs (확인일 2026-07-15, 신뢰도 HIGH)
- CineD 출시: https://www.cined.com/dji-mini-5-pro-released-250g-drone-with-1-inch-type-50mp-sensor-4k-up-to-120fps-and-rotatable-gimbal/
- Heliguy: https://www.heliguy.com/blogs/posts/top-10-features-dji-mini-5-pro/
- DIYPhotography 스펙: https://www.diyphotography.net/dji-mini-5-pro-specs-guide/

**CapCut (가격/기능):**
- 공식: https://www.capcut.com , https://www.capcut.com/help/update-capcut-app
- 요금제(2차, 미확인): https://bigvu.tv/blog/capcut-pricing-2026-free-vs-pro-whats-included-alternatives/ , https://www.gamsgo.com/blog/capcut-pricing
- LUT/데스크톱: https://www.capcut.com/resource/luts-for-color-grading , https://cinem8.co/blogs/blog/how-to-use-luts-in-capcut-for-color-grading

**CapCut 지역/US 사가:**
- https://async.com/blog/capcut-getting-banned/ , https://www.clixie.ai/blog/capcut-ban-explained , https://nodemaven.com/blog/capcut-ban/
- 가용 국가: https://availablecountry.com/capcut-available-countries

**음악 라이선스(정직 포인트):**
- https://audiodrome.net/for-creators/capcut-music/ , https://www.trademarkia.com/news/business/capcut-music-copyright-guide , https://www.foximusic.com/royalty-free-music-licensing-for-capcut-videos/

**대안(DaVinci):**
- https://www.blackmagicdesign.com/products/davinciresolve
