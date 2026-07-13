# Stack Research — 드론 사진 파트 (v1.1)

**Domain:** 드론 항공사진 가이드 콘텐츠 (하드웨어: DJI Mini 5 Pro / 소프트웨어: 사진 후보정 · 파노라마 병합)
**Researched:** 2026-07-13
**Confidence:** HIGH (드론 사양) / MEDIUM (액세서리 서드파티 제품, 한국 가격) / LOW (파노라마 모드 세부 — DJI 공식 스펙 페이지에 명시 없음, 서드파티 리뷰 근거)

> 이 문서는 **하드웨어(드론)와 사진/영상 소프트웨어**만 다룹니다. mdBook 0.5.3 + GitHub Pages 퍼블리싱 툴체인은 v1.0에서 이미 구축·검증되었으므로 재조사하지 않습니다 — 드론 파트는 기존 SUMMARY.md/책 구조에 새 파트로 얹히기만 하면 됩니다.

---

## 0. 먼저: "DJI Mini 5 Pro"는 실존하는가?

**예 — 실존하는 정식 출시 제품입니다.** 2025년 9월 17일 DJI가 공식 발표했고, 2026년 7월 현재 정식 판매 중입니다. DJI 공식 스펙 페이지(`dji.com/mini-5-pro/specs`)를 직접 WebFetch로 열어 아래 사양을 확인했습니다. 다수의 리뷰 매체(Tom's Guide, Amateur Photographer, DIYPhotography, Oscar Liang, Space.com)와 국내 언론(ZDNet Korea, Daum)도 동일 제품을 다루고 있어 교차 검증됨. **PROJECT.md의 전제("사용자 보유 드론 = DJI Mini 5 Pro")는 그대로 유효합니다.** 조사 결과를 조작하거나 대체 기종(Mini 4 Pro 등)으로 바꿀 필요 없음.

---

## 1. DJI Mini 5 Pro — 검증된 사양

### 핵심 사양 (신뢰도: HIGH — DJI 공식 스펙 페이지 직접 확인)

| 항목 | 사양 | 비고 |
|---|---|---|
| 출시일 | 2025-09-17 (공식 발표), 이후 순차 판매 개시 | 한국 정식 출시·판매 확인됨 |
| 이륙 중량 | **249.9 g** (표준 배터리 기준) | "서브-250g" 등급 — 단, 아래 "배터리와 무게" 절 필독 |
| 접이 시 크기 | 157×95×68 mm | 휴대 시 기준 |
| 펼친 크기 | 304×380×91 mm | 비행 시 기준 |
| 센서 | 1형(1-inch) CMOS, 5000만 화소(50MP), 24mm 환산 f/1.8 | **미니급 최초로 1형 센서 탑재** — 전작 Mini 4 Pro(1/1.3형) 대비 센서 면적 약 2배, 최대 14스톱 다이내믹 레인지(리뷰 근거) |
| 최대 사진 해상도 | 8192×6144 | 50MP 모드 |
| RAW | **DNG(RAW) 지원** | 후보정 전제 조건 충족 |
| AEB(자동 노출 브라케팅) | 12MP: 3/5/7장, 50MP: 3/5장, 0.7EV 간격 | HDR 정지화면·노을 촬영에 유용 |
| 파노라마 모드 | 구체(Sphere, 33장) · 180도(21장) · 광각(Wide, 9장) · 세로(Vertical, 3장) · 자유(Free) — 드론이 자동 촬영 후 기내에서 JPEG로 자동 병합 | **신뢰도 MEDIUM** — DJI 공식 스펙 페이지에는 파노라마 모드 목록이 명시돼 있지 않았고, 리뷰/튜토리얼 사이트(vicvideopic.com 등) 정보 기반. 실기 조작 화면에서 최종 확인 권장 |
| 최대 비행시간 | 표준 배터리 36분 / **Plus 배터리 52분**(DJI 소비자 드론 중 최장) | 아래 배터리 절 참고 |
| 최대 풍속 저항 | 12 m/s (약 43km/h, 보퍼트 6급 수준) | **고비 사막 오후 돌풍 대비 한계치 — 여유 있게 낮은 풍속대에서 비행 권장** |
| 장애물 회피 | 전방위(옴니디렉셔널) 비전 + 전방 LiDAR + 하방 적외선, 야간 1럭스 저조도까지 감지 | 협곡(욜링암), 절벽(차강소브라가) 촬영 시 안전 마진 |
| 영상 전송 | O4+, 최대 다운링크 10MB/s, 최대 도달거리 FCC 20km / CE·SRRC·MIC 10km(장애물 없을 때) | 몽골처럼 개활지·전파 간섭 적은 환경에서 안정적 |
| 내장 저장공간 | 42GB | Mini 4 Pro(2GB) 대비 대폭 증가 — SD카드 분실/파손 시 백업 |
| 조종기 | DJI RC 2 (내장 화면) 또는 RC-N3(스마트폰 연결형) — 콤보 구성에 따라 다름 | |

### 배터리와 무게 — 반드시 알아야 할 함정 (신뢰도: HIGH, 복수 매체 교차확인)

- **표준 배터리(2788mAh) 장착 시에만 249.9g로 서브-250g 등급.** 최대 비행시간은 36분.
- **Plus 배터리(4680mAh, 52분 비행)를 장착하면 실측 297~299g로 뛰어올라 250g 기준을 명확히 초과합니다.** (Plus 배터리가 표준보다 약 46g 무거움)
- 캐나다·영국·호주·미국 규제 당국은 Plus 배터리 장착 Mini 5 Pro를 "서브-250g 드론"으로 인정하지 않겠다고 밝힘. EU는 제조 공차를 이유로 C0 등급을 유지(252~253g까지 허용).
- **몽골 현지 드론 규제·허가 요건 자체는 이 문서(STACK)의 범위 밖입니다** — PROJECT.md의 v1.1 요구사항에 "드론 참고 자료(몽골 드론 규제/허가 검증 포함)"가 별도 항목으로 있으므로, 그 조사에서 "무게 등급에 따라 규제가 갈릴 수 있다"는 이 사실을 반드시 반영해야 합니다. 이 문서는 사실관계만 제공합니다.
- **책에 반영할 실전 조언**: 장시간 비행이 필요한 여행(고비처럼 촬영 기회가 제한적)에서 Plus 배터리를 쓸지, 표준 배터리 여러 개(경량·등급 유지)를 쓸지는 트레이드오프입니다. 몽골 자체 규제가 무게 등급을 따지지 않는다면 Plus 배터리가 유리하지만, 신원 미확인 시 보수적으로 표준 배터리 다중 세트를 권장.

### 가격 (신뢰도: MEDIUM — 가격은 반드시 변동됨, 조사 시점 스냅샷)

| 구성 | 국내(원화, 조사 시점) | 미국(USD, 조사 시점) |
|---|---|---|
| 단품(드론만) | 약 93만원 | 약 $759 |
| Fly More Combo (RC-N3) | — | 약 $959 |
| Fly More Combo (DJI RC 2) | 약 129만원 | 약 $1,099 |

가격은 출처(다나와, ZDNet Korea, B&H Photo)마다 조금씩 다르고 프로모션에 따라 변동됩니다. **구매/구성 결정 전 DJI 공식 스토어(dji.com) 또는 국내 공식 판매처에서 최신 가격 재확인 필수.**

### Sources (드론 본체)
- [dji.com/mini-5-pro/specs](https://www.dji.com/mini-5-pro/specs) — 공식 스펙 페이지, WebFetch로 직접 확인 (무게·센서·RAW·AEB·비행시간·풍속·전송 등 핵심 수치 출처)
- [DJI 미니5 프로 출시…1인치 센서 탑재 (Daum/전자신문 계열)](https://v.daum.net/v/20250918205412710) — 한국 출시·가격
- [DJI, Mini 5 Pro로 세계 최초 기능 선보여 - ZDNet Korea](https://zdnet.co.kr/view/?no=20250917221016)
- [DJI Mini 5 Pro Weight: Is It Still Considered Sub-250g? - DroneXL](https://dronexl.co/2025/09/19/dji-mini-5-pro-weight-sub-250g/) — 배터리별 무게, 국가별 규제 반응
- [DJI's Mini 5 Pro's Biggest Problem: It's Not Legal - DC Rainmaker](https://www.dcrainmaker.com/2025/09/dji-mini5-pro-series-over-weight.html) — 무게 초과 규제 이슈 상세
- [DJI Mini 5 Pro Panorama Tutorial - vicvideopic.com](https://vicvideopic.com/dji-mini-5-pro-panorama-photography-tutorial/) — 파노라마 모드 세부 (MEDIUM 신뢰도, 공식 페이지 미기재)
- [DJI Mini 5 Pro review - Tom's Guide](https://www.tomsguide.com/cameras-photography/drones/dji-mini-5-pro-review), [Amateur Photographer](https://amateurphotographer.com/review/dji-mini-5-pro-review/), [Oscar Liang 비교](https://oscarliang.com/dji-mini-5-pro/) — 교차 검증용 리뷰

---

## 2. 액세서리 — 고비 사막·원격지 여행 기준 필수/권장 목록

**선정 기준**: 고비는 전력망이 거의 없는 오지(캠프 숙박, 8/13~8/17 4박), 낮 강한 직사광, 오후 돌풍, 모래바람 — 이 조건에서 "사진이 안 나오는" 상황을 막는 데 초점.

### 필수

| 액세서리 | 이유 (사막/원격지 근거) | 신뢰도 |
|---|---|---|
| 여분 배터리 2~3개 (표준 또는 Plus, 위 무게 트레이드오프 참고) | 충전 인프라가 없는 캠프 숙박 4박 — 1개로는 하루 촬영량도 부족(36~52분/개), 명소 5곳 × 여러 컷 고려 시 최소 2~3개 권장 | HIGH (비행시간 수치는 공식, 여행 일정 대입은 이 책의 판단) |
| DJI 투웨이 충전 허브(Two-Way Charging Hub) 또는 서드파티 충전 허브 | 배터리 여러 개를 순차/동시 충전, 일부 제품은 보조배터리(파워뱅크) 겸용 — 차량 시거잭·보조배터리로 캠프에서도 충전 가능 | MEDIUM — 서드파티 제품 다수 확인(LKTOP 등), DJI 공식 허브 존재 확인 |
| 대용량 보조배터리(파워뱅크) 또는 차량용 시거잭 충전기 | 캠프에 상용 전원이 없을 가능성 — 배터리 허브를 파워뱅크로 구동하거나 차량 배터리를 활용 | MEDIUM — 일반적인 여행 촬영 상식 + 제품 존재 확인, 몽골 캠프 전력 사정 자체는 미검증(현지 조건에 따라 다름) |
| microSDXC 카드 (UHS-I, U3/V30 이상, 가급적 A2, 256GB 권장 — 최대 1TB까지 공식 지원) | 4K 영상+50MP RAW 동시 촬영 시 쓰기 속도 부족하면 프레임 드랍/오류. 카드 손상 대비 여분 1장 이상 권장 | MEDIUM-HIGH — 여러 리뷰 사이트 수렴된 권장 스펙(1TB 지원은 Mini 5 Pro가 미니 시리즈 중 최초). DJI 공식 스펙 페이지도 "권장 카드 목록 있음"이라고만 확인, 구체 V등급은 서드파티 소스 |
| 예비 프로펠러 1~2쌍 | 모래바람·착륙 시 이물질에 의한 파손 위험 — 원격지에서는 여분 없이는 그 자리에서 촬영 불가 | HIGH — 일반적인 드론 여행 상식, DJI도 Fly More Combo에 기본 포함 |
| 하드/세미하드 캐링 케이스 | 이동 중 충격·모래 유입 방지, 배터리·필터·조종기·프로펠러를 한 곳에 정리 — 여행 캐리어에 넣고 다니기 적합 | MEDIUM — 서드파티 다수 제품 확인(STARTRC, Nanuk, FPVtosky) |
| 렌즈/센서 클리닝 키트(블로어 + 극세사 천) | 고비 모래바람 특성상 렌즈에 먼지 부착 가능성 높음 — 책 v1.0의 은하수 파트에서도 유사 항목 존재할 가능성, 재사용 검토 | MEDIUM — 일반 사진 장비 상식, 드론 전용 검증 소스는 못 찾음 |

### 권장 (상황별)

| 액세서리 | 이유 | 신뢰도 |
|---|---|---|
| ND 필터 세트 (ND8/16/32/64, CPL 겸용 다수) | 한낮 밝은 사막 광량에서 셔터속도를 늦춰 영상 모션블러를 살리거나, 정지화면에서도 조리개 f/1.8 고정형 카메라의 노출 과다를 제어 — 사진 중심 가이드에서는 우선순위는 낮지만 언급 가치 있음(황혼 컷에는 불필요, 한낮 컷에 유용) | MEDIUM — 다수 서드파티 제품 확인(K&F Concept, Freewell, STARTRC 등), Fly More Combo에 필터 키트 기본 포함되는 구성도 있음 |
| 여행용 파워스테이션(소형, 100~200Wh급) | 다수 배터리를 하루 만에 완충해야 할 때, 차량 시거잭보다 안정적 — 다만 항공 수하물 반입 제한(Wh 기준) 확인 필요 | LOW — 몽골 현지 전력·항공 규정은 이 조사 범위 밖, 일반적 여행 촬영 팁 수준 |
| 스마트폰 마운트/짐벌 캡 등 소형 액세서리 | 조종기(RC-N3 사용 시 스마트폰 필요)·짐벌 보호 | MEDIUM |

### Sources (액세서리)
- [DJI Mini 5 Pro Two-Way Charging Hub - DJI 공식/리셀러](https://kingshobby.com/store/dji-mini-5-pro-two-way-charging-hub-dji-cpma0000087901), [Which charging hubs support the power bank function? - DJI 공식 지원](https://support.dji.com/help/content?customId=01700009240&spaceId=17&re=US&lang=en&documentType=&paperDocType=ARTICLE)
- [Best SD Card for DJI Mini 5 Pro - dronesgator.com](https://dronesgator.com/best-sd-card-for-dji-mini-5-pro), [sdcardchecker.com](https://sdcardchecker.com/categories/drones/dji-mini-5-pro/) — microSD 스펙 권장치(U3/V30/A2, 1TB 지원)
- [K&F CONCEPT ND & CPL Filter Set - Amazon](https://www.amazon.com/CONCEPT-Compatible-Polarizing-Accessories-Multi-Coated/dp/B0FS1D57HG), [STARTRC CPL-ND Filters Set](https://www.startrc.com/startrc-cpl-nd-filters-set-for-dji-mini-5-pro-cpl-nd8-32-128.html)
- [STARTRC Hard Carrying Case](https://www.startrc.com/startrc-hard-carrying-case-for-dji-mini-5-pro-fly-more-combo.html), [NANUK 915 for DJI Mini 5 Pro](https://nanuk.com/products/nanuk-915-for-dji-mini-5-pro-fly-more)

---

## 3. 소프트웨어 — 드론 사진 처리

**전제**: 이 책(v1.0)은 이미 RAW 현상에 darktable(기본 추천)·Lightroom(구독 중이면 대안)을, 파노라마 병합에 Hugin/PTGui/Microsoft ICE(단종 주의)를 다루고 있음 (`src/08-references/software-references.md`, `src/07-appendix/app-software.md` 확인). **드론 정지화면 RAW 현상은 이 기존 스택을 그대로 재사용**하면 됩니다 — 별도 도구 조사 불필요.

### 드론 전용/특화 항목

| 도구 | 플랫폼 | 가격 | 용도 | 비고 | 신뢰도 |
|---|---|---|---|---|---|
| DJI Fly (앱) | iOS / Android (조종기 내장 or 스마트폰) | 무료 | 드론 조작, 촬영 모드(AEB·파노라마 등) 설정, 기내 자동 파노라마 병합(JPEG) | 드론 촬영의 필수 앱 — 별도 설치·회원가입 필요 | HIGH — DJI 공식 다운로드센터 존재 확인 |
| DJI LightCut | iOS / Android / 데스크톱 | 무료 | AI 자동 영상 편집(템플릿 기반) — **영상용**, 이 책은 영상을 간략히만 다루므로 "이런 게 있다" 수준 언급이면 충분 | 파노라마 스티칭 기능은 확인 안 됨(영상 편집 전용) | MEDIUM — DJI 공식 페이지 확인, Mini 5 Pro 정식 호환 목록에 명시적으로 나열되지는 않음(Mini 4 Pro 등은 명시됨 — 최신 기종 자동 지원 가능성 높으나 별도 확인 권장) |
| darktable / Lightroom (기존 재사용) | Win/Mac/Linux (+모바일) | 무료 / 구독 | 드론 DNG(RAW) 현상 — 노출·화이트밸런스·대비 조정 | **기존 항목 그대로 재사용.** Mini 5 Pro의 50MP DNG는 일반 카메라 RAW와 동일하게 처리 가능(드론 전용 프로파일 불필요) | HIGH (재사용 근거는 v1.0 문서 확인) |
| Hugin / PTGui (기존 재사용, 선택적) | Win/Mac(/Linux) | 무료 / 유료 | **수동 항공 파노라마 병합** — DJI Fly 앱의 자동 파노라마(JPEG)로 대부분 충분하지만, 최고 해상도로 직접 병합하고 싶을 때 DNG 낱장을 이 도구로 병합 가능 | 대다수 사용자는 DJI Fly 자동 파노라마로 충분 — "고급 옵션"으로만 언급 권장 | MEDIUM — 도구 자체는 v1.0에서 검증됨, 항공 DNG 병합에 실제로 쓰인다는 사례는 일반적인 파노라마 병합 원리에서 유추 |

### 이 책에 반영할 소프트웨어 방향 (프리스크립티브)

1. **기본 워크플로**: DJI Fly 앱으로 촬영(RAW+JPEG 동시 저장 권장) → darktable(또는 보유 Lightroom)로 RAW 현상 → 필요 시 자동 파노라마 JPEG는 그대로 사용, 수동 고해상도 파노라마가 필요할 때만 Hugin/PTGui.
2. **영상은 간략히만**: DJI LightCut을 "스마트폰에서 바로 자동 편집할 수 있는 옵션" 정도로 한 문단 언급. 심화 영상 편집 툴(Premiere 등) 조사는 이번 범위 밖(PROJECT.md가 "영상 간략"로 명시).
3. **새 도구 도입 최소화**: 이미 검증된 darktable/Lightroom/Hugin/PTGui 재사용이 "몇 안 되는 도구로 일관된 워크플로"라는 v1.0의 기존 원칙과도 맞음.

### Sources (소프트웨어)
- 기존 v1.0 검증 결과 재확인: `/Users/ohama/projs/MongolPhoto/src/08-references/software-references.md`, `/Users/ohama/projs/MongolPhoto/src/07-appendix/app-software.md` (darktable, Lightroom, Hugin, PTGui, Microsoft ICE 검증 상태 그대로 인용)
- [DJI LightCut - DJI 공식](https://www.dji.com/lightcut) — 앱 개요, 호환 기종 목록(Mini 5 Pro 명시적 나열은 미확인)
- [DJI Fly - DJI 다운로드센터](https://www.dji.com/downloads/djiapp/dji-fly) (일반적으로 알려진 URL 패턴 — 조사 중 직접 클릭 검증은 안 했으므로 책 집필 시 재확인 권장, LOW-MEDIUM)

---

## Alternatives Considered

| 추천 | 대안 | 대안을 쓸 상황 |
|---|---|---|
| DJI Mini 5 Pro (사용자 보유 기종) | DJI Mini 4 Pro | Mini 5 Pro 구매/대여 불가 시 — 센서가 1/1.3형으로 작아 저조도/다이내믹레인지에서 열세지만 사진 중심 여행용으로는 여전히 유효한 대안. 이 책은 사용자가 5 Pro를 보유하고 있다는 전제이므로 본문에서는 5 Pro 기준으로 서술하고, 부록에 "4 Pro도 가능" 정도로만 각주 처리 권장 |
| darktable(무료) 기본 | Lightroom(구독) | 이미 Lightroom 구독 중이면 그대로 사용 — v1.0과 동일 원칙 |
| DJI Fly 자동 파노라마(JPEG) | Hugin/PTGui 수동 병합 | 최고 해상도·수동 블렌딩이 필요한 상급자 옵션에서만 |
| 표준 배터리 다중 세트(무게 등급 유지) | Plus 배터리(52분, 무게 등급 이탈) | 몽골 현지 규제가 무게 등급을 따지지 않는 것으로 확인되면 Plus 배터리가 유리 — 이 판단은 드론 규제 조사(별도 문서) 결과를 기다려야 함 |

## What NOT to Use / 주의

| 피해야 할 것 | 이유 | 대신 |
|---|---|---|
| Microsoft ICE(파노라마 병합) | v1.0에서 이미 확인 — 공식 지원 종료(retired), 최신 Windows 동작 미보장 | Hugin(무료) 또는 PTGui(유료) |
| 최저가 무명 브랜드 배터리(비 DJI 정품) | 화재/과열 위험, 원격지에서 문제 발생 시 대안 없음 — 이 책 범위에서 별도 안전성 조사는 안 했으나 일반 드론 커뮤니티에서 공통적으로 경고하는 사항 (LOW 신뢰도, 상식 수준) | DJI 정품 배터리 또는 신뢰할 수 있는 서드파티(예: 위 액세서리 표에 언급된 브랜드) |
| Plus 배터리를 "당연히 서브-250g"로 오해하고 서술 | 실측 297~299g로 등급 이탈 — 잘못 서술하면 규제 관련 오정보 유포 위험 | 반드시 "표준 배터리만 249.9g, Plus는 250g 초과"로 명확히 구분 서술 |

## Version Compatibility

| 항목 | 참고 |
|---|---|
| DJI Fly 앱 ↔ DJI Mini 5 Pro | 앱은 지속 업데이트되므로 집필 시점 최신 버전 기준으로 UI 스크린샷/메뉴명 재확인 필요 |
| darktable/Lightroom ↔ 50MP DNG | 표준 DNG 포맷이므로 호환성 문제 없음 (일반 원칙, Mini 5 Pro 특이사항 없음) |

---

## Confidence Assessment 요약

| 항목 | 신뢰도 | 근거 |
|---|---|---|
| Mini 5 Pro 실존·핵심 사양(무게/센서/RAW/AEB/비행시간/풍속/전송) | HIGH | DJI 공식 스펙 페이지 직접 WebFetch |
| Plus 배터리 무게 초과·규제 반응 | HIGH | 복수 독립 매체(DroneXL, DC Rainmaker) 교차 확인 |
| 파노라마 모드 세부(구체/180/광각/세로/자유) | MEDIUM | 공식 페이지 미기재, 서드파티 튜토리얼 근거 |
| 한국/미국 가격 | MEDIUM | 조사 시점 스냅샷, 반드시 변동 — 재확인 필수 문구 명시 |
| microSD 권장 스펙(U3/V30/A2, 1TB) | MEDIUM-HIGH | 다수 리뷰 사이트 수렴, DJI 공식 페이지는 "권장 카드 목록 있음"만 확인 |
| 액세서리(충전허브/케이스/필터) 제품 존재 | MEDIUM | 서드파티 판매처 다수 확인, 실제 사용성 평가는 아님 |
| 몽골 캠프 현지 전력 사정 | LOW (범위 밖) | 이 문서에서 조사 안 함 — 여행 계획 시 별도 확인 필요 |
| 소프트웨어(darktable/Lightroom/Hugin/PTGui) 재사용 타당성 | HIGH | v1.0 문서에서 이미 검증된 내용 인용 |

---

*Stack research for: MongolPhoto v1.1 드론 사진 파트*
*Researched: 2026-07-13*
