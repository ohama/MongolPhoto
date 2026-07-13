# Phase 10: 드론 참고 자료 (08-references/) - Research

**Researched:** 2026-07-13
**Domain:** 큐레이션된 외부 링크 3종 (몽골 드론 규제, DJI Mini 5 Pro 사양·튜토리얼, 드론 항공사진 갤러리)
**Confidence:** MEDIUM 전체 — HIGH(규제 원출처 URL 생존 확인, DJI 공식 자료, YouTube 튜토리얼 실재 확인) / LOW(갤러리의 "드론 촬영 여부" 개별 확인, 몽골 현지 드론 전용 페이지 콘텐츠)

> 이 문서는 순수 참고자료 큐레이션 조사입니다. **이 세션에서 실제로 열거나(WebFetch) HTTP 상태를 확인한(curl) 링크만** 신든다는 원칙을 지켰습니다. URL을 추측/패턴완성한 사례는 없으며, 딱 한 번 파일명을 추측해 시도했다가 404가 나서 API로 정정한 사례가 있고 이는 아래 "확인 실패" 절에 정직하게 기록했습니다.

## Summary

세 개의 참고 페이지(몽골 드론 규제·DJI 사양/튜토리얼·항공사진 갤러리)에 실을 링크를 이번 세션에서 개별 검증했습니다. 규제 부분은 마일스톤 PITFALLS.md/STACK.md에서 이미 검증된 CAAM Part 101/102 PDF와 mcaa.gov.mn을 **재검증**(오늘 curl로 HTTP 200 재확인)했고, Part 102는 이번 세션 WebFetch로 새로 텍스트 추출에 성공해 "등록비·처리기간·250g 면제 조항 없음"을 재확인했습니다. mcaa.gov.mn은 Next.js SPA 포털이라 WebFetch로 텍스트를 못 읽지만(마일스톤과 동일한 한계) HTTP 200으로 살아있음은 확인했습니다. 2차 블로그 소스 중 **propelrc.com은 이번 세션에서 접속 실패**(재시도 포함 2회 000/타임아웃)로, 마일스톤 때는 살아있었으나 지금은 재확인이 필요합니다 — 이 사실을 그대로 기록했습니다.

DJI Mini 5 Pro 튜토리얼은 DJI 공식 지원 문서 1건(fetch 성공, 전체 요약 확보)과 공식 사용자 매뉴얼 PDF(HTTP 200, DJI 자체 CDN이나 텍스트 추출은 실패), 그리고 YouTube 튜토리얼 6건을 **oEmbed API로 제목·채널명·실재 여부를 개별 확인**했습니다(WebFetch로는 YouTube 페이지 본문을 못 읽어서 oEmbed가 더 신뢰도 높은 검증 수단이었습니다). 몽골/고비 현지 촬영을 다루는 드론 튜토리얼은 찾지 못했습니다 — 전부 일반 Mini 5 Pro 기법(설정·파노라마·ND필터) 영상입니다.

갤러리는 Wikimedia Commons가 가장 안전한 CC 라이선스 소스입니다 — Category:Aerial_photographs_of_Mongolia(22파일)와 여행 5개 명소 중 실제로 Commons 카테고리가 존재하는 곳(Khongoryn Els/홍고린엘스, Yolyn Am/욜링암, Bayanzag/바양작)을 API로 확인했으나, **개별 파일이 "드론으로" 찍혔는지는 파일 설명·메타데이터만으로 확정할 수 없는 경우가 많았습니다**(항공기 창문 촬영, 위성사진과 섞여 있음) — 이 불확실성을 정직하게 표기했습니다. Unsplash는 검색 페이지 로드 확인 + 라이선스 페이지(unsplash.com/license) 직접 확인 결과 상업/비상업 재사용이 자유로운 라이선스임을 확인했습니다. SkyPixel(DJI 공식 드론 커뮤니티)은 갤러리 페이지가 살아있지만(HTTP 200) 콘텐츠는 SPA라 못 읽었고, ToS 검색으로 "제3자 재사용 불가(감상 전용)"임을 별도로 확인했습니다. 차강소브라가·바가가즈링 촐로는 Wikimedia Commons에 전용 카테고리 자체가 없어 갤러리 후보에서 제외했습니다.

**Primary recommendation:** 규제 페이지는 마일스톤 PITFALLS.md의 검증/미확인 구분을 **그대로 보존**하되 Part 102 신규 확인 내용(등록비 등 미기재)을 추가하고, propelrc.com 접속 실패를 명시. 튜토리얼 페이지는 DJI 공식 2건 + YouTube 6건(oEmbed 검증) + 텍스트 튜토리얼 3~4건을 싣고 "몽골 현지 튜토리얼 없음"을 명시. 갤러리 페이지는 Wikimedia Commons를 1순위(재사용 가능, 라이선스 명시)로, Unsplash를 보조(재사용 가능하나 CC0 아님)로, SkyPixel을 감상 전용(재사용 불가)으로 3단 구분해서 신되, "드론 촬영 여부 미확인" 캐비어트를 각 Commons 파일에 붙일 것.

---

## DREF-01: 몽골 드론 규제·허가

### 검증됨 (원출처, HTTP 200 재확인 — 2026-07-13 이 세션)

| URL | 검증 방법 | 확인 내용 |
|---|---|---|
| `https://backend-api.mcaa.gov.mn/storage/filemanager/9f4e7437-9085-44fc-821e-4dd87898c872.pdf` (Part 101 — Gyrogliders and Parasails, Unmanned Aircraft, Kites, and Rockets, Operating Rules) | curl HTTP 200 확인(응답 크기 170,835 bytes, `application/pdf`). 이번 세션 WebFetch는 압축 PDF 스트림 파싱에 실패해 텍스트 추출은 못 했음. **단, 같은 문서를 마일스톤 조사(PITFALLS.md, 같은 날 2026-07-13)에서 이미 전문 추출·확인**했으므로 내용(400ft/120m 고도 제한, VLOS 의무, 공항 4km 이내 비행 제한, 야간 비행 금지, 사람/재산 상공 비행 시 동의 필요, 최대 이륙중량 25kg, 15~25kg 특별 승인 필요)은 그대로 신뢰할 수 있음. **250g 면제 조항은 이 문서에 없음**(마일스톤 확인 그대로 유지). | HIGH (링크 생존) / 내용은 마일스톤 근거 인용 |
| `https://backend-api.mcaa.gov.mn/storage/filemanager/d9f072d6-ecea-4d40-89cb-5f0f9b979805.pdf` (Part 102 — Unmanned Aircraft Operator Certification) | curl HTTP 200 확인(242,924 bytes). **이번 세션 WebFetch로 신규 텍스트 추출 성공** — 문서 제목 "Part-102", 무인항공기 운용자 인증(operator certification) 관련 조항(목적·신청·정의·인증서 발급·운용 조건 섹션)을 확인. **등록비, 처리기간, 250g 면제 조항은 이 문서 발췌 범위에서도 확인되지 않음** — 마일스톤에서 "미확인"으로 남겨둔 상태가 이번 조사로도 재확인됨(더 깊이 읽었지만 여전히 못 찾음). | HIGH (링크 생존 + 텍스트 확인, 등록비/면제 관련은 여전히 미확인) |
| `https://mcaa.gov.mn` / `https://mcaa.gov.mn/` | curl HTTP 200 확인. 페이지 title: "Welcome to MCAA Portal", description: "Portal page for the Civil Aviation Authority of Mongolia. Choose your destination." — Next.js 기반 SPA 포털 셸(정적 HTML에는 실제 콘텐츠 없음, JS 렌더링 필요). WebFetch 시도했으나 "Welcome to MCAA Portal" 외 구체 콘텐츠(드론/UAS 전용 페이지, 신청서 등) 추출 실패 — **마일스톤과 동일한 한계**. | MEDIUM (사이트 생존은 확인, 드론 전용 콘텐츠 존재 여부는 미확인) |
| `https://mcaa.gov.mn/page/mayagt` | curl HTTP 200 확인(12,508 bytes). "маягт"(몽골어: 서식/양식)이라는 이름에서 신청서·서식 페이지로 추정되나 WebFetch로 콘텐츠 추출 실패(빈 응답) — **이 페이지가 실제로 드론 관련 서식을 포함하는지는 미확인**. | 미확인 — 존재만 확인, 내용 확인 못 함. 참고 자료 페이지에 "드론 등록/신청 서식이 있을 수 있음(미확인)" 정도로만 언급 권장, 확정적 서술 금지 |
| `ops@mcaa.gov.mn` / `+976-11-285013` | 이번 세션에서 별도로 이메일 발송/전화 검증은 하지 않음(불가능한 검증 유형) — 마일스톤 조사에서 CAAM 공식 연락처로 확인된 내용을 그대로 인용 | 마일스톤 근거 인용 |
| `https://www.uaipit.com/uploads/legislacion/files/1413197290_20._Ley_mongolia_zona_especial_proteccion_EN.pdf` (Law of Mongolia on Special Protected Area, 1994) | curl HTTP 200 확인. 이번 세션에서도 텍스트 추출은 시도하지 않음(마일스톤에서도 추출 실패로 기록됨) — **국립공원 관련 드론 특칙은 여전히 미확인** | 링크 생존만 재확인, 내용은 그대로 미확인 |

### 미확인 / 참고용 2차 소스

**중요: 이 목록의 수치(등록비 ₮30,000, 처리기간 5일, 250g 면제 등)는 여러 사이트가 거의 동일한 문구로 반복하고 있어 상호 검증이 아니라 콘텐츠 복제/재인용일 가능성이 높습니다 — 원출처(CAAM Part 101/102, 위 표)에서 확인되지 않았으므로 절대 확정 사실로 서술하지 마세요.** (마일스톤 PITFALLS.md Pitfall 1과 동일한 판단, 그대로 유지)

| URL | 이번 세션 상태 | 비고 |
|---|---|---|
| `https://drone-laws.com/drone-laws-in-mongolia/` | curl HTTP 200 — 생존 확인 | 마일스톤과 동일 |
| `https://www.propelrc.com/drone-laws-in-mongolia/` | **확인 실패 — curl 재시도 2회 모두 000(연결 실패/타임아웃, 최대 20~25초 대기)** | 마일스톤 때는 접속됐던 것으로 기록되어 있음 — 사이트가 일시 다운이거나 URL이 바뀌었을 가능성. 참고 자료 페이지에 링크를 싣는다면 "접속 확인 필요"로 표기하거나 아예 제외 권장 |
| `https://skywardwings.com/latest-drone-laws-in-mongolia/`, `https://danistanomads.com/mongolian-culture/drone-regulations-in-mongolia/`, `https://www.vacationsmongolia.com/post/are-drones-allowed-in-western-mongolia-what-travelers-need-to-know`, `https://canifly.in/mongolia`, `https://droneller.com/blog/mongolia-drone-laws/` | 이번 세션에서 재검증 안 함(시간 제약) | 마일스톤 조사에서 이미 "동일 수치 반복하는 SEO 콘텐츠 성격"으로 판단됨 — 재사용 시 별도 재확인 권장, 최소 1~2개는 다시 curl해서 생존 확인 후 신는 것이 안전 |

---

## DREF-02: DJI Mini 5 Pro 사양·튜토리얼

### DJI 공식

| URL | 검증 방법 | 확인 내용 |
|---|---|---|
| `https://www.dji.com/mini-5-pro/specs` | curl HTTP 200 재확인. 전체 사양(무게·센서·RAW·AEB·비행시간·풍속·전송)은 마일스톤 STACK.md에서 이미 WebFetch로 전문 확인됨 | HIGH — 규제/사양은 이 문서 참고, DREF-02 페이지에서도 인용 가치 있음 |
| `https://dl.djicdn.com/downloads/DJI_Mini_5_Pro/UM/DJI_Mini_5_Pro_User_Manual_en.pdf` (DJI 공식 사용자 매뉴얼) | curl HTTP 200 확인(8,211,329 bytes, `application/pdf`, DJI 자체 CDN 도메인 `djicdn.com`). WebFetch 텍스트 추출은 압축 PDF 스트림 때문에 실패했으나, **URL 도메인이 DJI 소유 CDN이고 WebSearch 결과 제목이 "User Manual - DJI"로 일치**하여 공식 매뉴얼임을 교차 확인 | HIGH (링크·출처 진위) / 세부 내용은 미추출 |
| `https://support.dji.com/help/content?customId=01700043582&spaceId=17&re=AU&lang=en&paperDocType=ARTICLE` ("A Beginner's Guide to DJI Mini 5 Pro") | **WebFetch로 전체 로드·요약 성공** — 언박싱, 배터리 활성화/충전, 프로펠러 장착, 조종기 설정, 펌웨어 업데이트, 장애물 회피 설정, "비행 전 최신 비행구역/제한 정보 확인" 안내, 이착륙 기본기, 카메라 기능(항공촬영 기초, 짐벌 롤 회전, 추적모드), 비행 모드(퀵샷·하이퍼랩스·웨이포인트·크루즈컨트롤·**파노라마**·RTH), 촬영 후 파일 내보내기(QuickTransfer/USB-C), 보관, 워런티/DJI Care Refresh | HIGH — 공식·완전 확인, 초심자용 개요로 가장 적합 |

### YouTube 튜토리얼 (oEmbed API로 실재·제목·채널 확인 — 2026-07-13)

WebFetch로는 YouTube 페이지 본문이 로드되지 않아(JS 렌더링), 대신 `https://www.youtube.com/oembed?url=...&format=json`을 통해 각 영상이 실재하고 살아있음을 개별 확인했습니다. 몽골/고비 현지 촬영을 다루는 드론 영상은 검색에서 찾지 못했습니다 — 아래는 모두 **일반 Mini 5 Pro 기법** 영상입니다.

| # | URL | 제목 (oEmbed 확인) | 채널 | 다루는 내용(검색 결과 기반 추정 — 영상 자체를 시청하지는 않음) |
|---|---|---|---|---|
| 1 | `https://www.youtube.com/watch?v=Mg4MeDkRmZo` | DJI Mini 5 Pro: Ultimate Settings Guide – How To Get The Best Quality! (Beginners & Pros) | Niclas Nilsson | 카메라 설정 전반, 초심자~숙련자용 |
| 2 | `https://www.youtube.com/watch?v=fNVIHFwhRGo` | DJI Mini 5 Pro Beginner's Guide & Best Settings | MountMedia | 초심자 가이드·기본 설정 |
| 3 | `https://www.youtube.com/watch?v=G1yBrN-iv58` | DJI Mini 5 Pro PANORAMA Photography Tutorial | VIC VideopIC | 파노라마 촬영법 (Sphere/180/Wide/Vertical/Free 모드로 추정) |
| 4 | `https://www.youtube.com/watch?v=WQ3rRvfBx9I` | The Ultimate ND Filter Tutorial - Mini 5 Pro | Justin Bainbridge | ND 필터 선택·사용법 |
| 5 | `https://www.youtube.com/watch?v=CQC07AmTrcs` | DJI Mini 5 Pro FILTERS EXPLAINED: ND - NDPL - CPL - LPR - MIST - Freewell | Tim Rundle-Spiers | 필터 종류별 설명(ND/NDPL/CPL/LPR/Mist) |
| 6 | `https://www.youtube.com/watch?v=mjp778LaHcM` | How to Shoot & Edit 360 Panoramas with DJI Mini 5 \| PTGui Pro & Pano2VR Tutorial | Virtual Nerds | 수동 360 파노라마 촬영·PTGui 후반 편집 (심화) |

**참고**: 영상 자체의 프레임별 내용까지 시청·검증하지는 않았습니다(oEmbed은 메타데이터만 제공) — "제목·채널·영상 실재"만 확인된 것으로, 페이지 작성 시 "제목 기준 요약"임을 유지하고 과도한 세부 서술은 피하는 것을 권장합니다.

### 텍스트 튜토리얼 / 커뮤니티

| URL | 검증 방법 | 확인 내용 |
|---|---|---|
| `https://vicvideopic.com/dji-mini-5-pro-panorama-photography-tutorial/` | curl HTTP 200 | 파노라마 모드(구체·180·광각·세로·자유) 세부 설명 — 마일스톤 STACK.md에서 이미 인용됨(MEDIUM 신뢰도, DJI 공식 페이지에 파노라마 모드 목록 자체가 없어서) |
| `https://vicvideopic.com/dji-mini-5-pro-photo-camera-settings-for-epic-photography/` | curl HTTP 200 (신규 확인) | 사진 촬영 설정 가이드 — 같은 사이트, 신규 발견 |
| `https://support.freewellgear.com/portal/en/kb/articles/dji-mini-5-pro-filters-achieving-cinematic-quality-with-nd-nd-pl-filters` | curl HTTP 200 | Freewell(서드파티 필터 제조사) 공식 지원 문서, ND/ND-PL/미스트/GND 필터 가이드 |
| `https://dronexl.co/2026/01/26/dji-mini-5-pro-best-settings-guide/` | curl HTTP 200 (신규, 2026-01-26 게재로 최근) | DroneXL(드론 전문 매체) 최신 설정 가이드 — 마일스톤 STACK.md의 dronexl.co 무게 기사와 같은 매체, 다른 글 |
| `https://mavicpilots.com/threads/dji-mini-5-pro-sample-180-degree-panorama-raw-files.156141/` | curl HTTP 200 | 커뮤니티 포럼 — Mini 5 Pro 180도 파노라마 RAW 샘플 파일 공유 스레드, 실제 결과물 참고용 |
| `https://medium.com/@hayekesteloo/dji-mini-5-pro-best-settings-guide-camera-safety-and-control-settings-i-use-be64da5bc36e` | **curl HTTP 403 — 확인 실패(봇 차단)** | Medium의 봇 차단으로 접속 불가. 같은 저자(Haye Kesteloo)의 동일 내용이 위 dronexl.co 글로 사실상 대체 가능하므로, 이 Medium 링크는 참고 자료 페이지에 싣지 않는 것을 권장 |

---

## DREF-03: 드론 항공사진 예시 갤러리

### 재사용 가능 (CC 라이선스, Wikimedia Commons — 라이선스 명시적 확인)

**중요 캐비어트**: 아래 카테고리/파일은 "항공사진(aerial photograph)"으로 분류되어 있으나, Wikimedia Commons의 분류는 드론·경비행기·상업 항공기 창문 촬영·위성사진을 모두 포함할 수 있습니다. **개별 파일이 "드론으로" 촬영되었다는 것까지 확정 검증하지는 못했습니다** — 파일 설명에 촬영 기기가 명시되지 않은 경우가 대부분입니다. 페이지에 실을 때 "드론 촬영이 확인된 것은 아니며, 항공/고지대 시점의 참고 이미지"로 정직하게 표기할 것을 권장합니다.

| 카테고리/파일 | 검증 방법 | 확인 내용 | 라이선스 |
|---|---|---|---|
| `https://commons.wikimedia.org/wiki/Category:Aerial_photographs_of_Mongolia` | WebFetch + Wikimedia API(categorymembers) | 파일 22개, 하위카테고리 1개("Aerial photographs of airports in Mongolia", 파일 2개). 목록에 사막·호수 항공사진 다수 포함 | 개별 파일별 라이선스(Commons는 파일 단위 라이선스, 대부분 CC BY 계열) |
| `File:Mongolia deserts 267 (26274406105).jpg` | Wikimedia API `imageinfo/extmetadata` 직접 조회 | Flickr 임포트, 촬영자 Juris Paiders | **CC BY 2.0** |
| `https://commons.wikimedia.org/wiki/Category:Gobi_Desert` | WebFetch + API | 파일 270개(표시 200개), 하위카테고리 21개. **드론/항공 전용 하위카테고리는 없음** — 가장 가까운 것은 "Satellite pictures of the Gobi desert"(위성사진, 드론 아님) | 파일별 상이 |
| `https://commons.wikimedia.org/wiki/Category:Khongoryn_Els` (여행 코스 중 홍고린엘스) | API categorymembers | 파일 49개 이상 + 하위카테고리 "Satellite pictures of Khongoryn Els". 대부분 지상 촬영(낙타·야크·모래언덕 지상 시점)으로 보이며 명백한 드론 항공 앵글 파일은 API 메타데이터만으로 식별 못 함 | 파일별 상이 |
| `File:Dunes in Gobi Gurvansaikhan National Park.jpg` (Khongoryn Els 카테고리 소속) | API `imageinfo/extmetadata` | Flickr 임포트, 촬영자 Thomas Vandenberghe, 국립공원 내 모래언덕 촬영 | **CC BY-SA 2.0** |
| `File:Khongoryn Els, Gurvansaikhan NP, Gobi desert, Mongolia.jpg` | API `imageinfo/extmetadata` | 촬영자 Severin.stalder(Commons 자체 업로드), 설명: "낙타와 모래언덕" — **지상 촬영으로 판단**(항공사진 아님, 참고용으로만 가치) | **CC BY-SA 3.0** |
| `File:Gobi Desert, Mongolia (35132070010).jpg` | API `imageinfo/extmetadata` | Flickr 임포트, 촬영자 Christopher Michel | **CC BY 2.0** — 항공 앵글 여부 미확인 |
| `https://commons.wikimedia.org/wiki/Category:Yolyn_Am` (욜링암) | API categorymembers | 파일 19개 이상 존재 확인(개별 라이선스는 미조회 — 시간 제약) | 카테고리 존재만 확인 |
| `https://commons.wikimedia.org/wiki/Category:Bayanzag` (바양작) | API categorymembers | 파일 19개 이상 존재 확인(개별 라이선스는 미조회) | 카테고리 존재만 확인 |
| `Category:Tsagaan_Suvarga` (차강소브라가) | API 조회 | **결과 없음 — Commons에 이 카테고리 자체가 존재하지 않음** | 해당 없음 — 갤러리 후보에서 제외 |
| `Category:Baga_Gazriin_Chuluu` (바가가즈링 촐로) | API 조회 | **결과 없음 — Commons에 이 카테고리 자체가 존재하지 않음** | 해당 없음 — 갤러리 후보에서 제외 |

### 재사용 가능 (Unsplash — CC0는 아니지만 자유 라이선스)

| URL | 검증 방법 | 확인 내용 | 라이선스 |
|---|---|---|---|
| `https://unsplash.com/s/photos/gobi-desert` | WebFetch 로드 확인 | 고비 사막 사진 120장 + 일러스트 1점. 최소 1장은 "bird's eye view"(항공/고지대 시점, 촬영자 Patrick Schneider)로 확인됨 — 단 드론 촬영 여부는 개별 사진 페이지를 열어 확인하지 않아 미확인 | **Unsplash License** — `https://unsplash.com/license`를 직접 fetch해 원문 확인: "모든 이미지는 무료로 다운로드·사용 가능, 상업적·비상업적 용도 모두 가능, 허가 불필요(출처 표기는 권장이나 의무 아님)". 단 "변형 없이 재판매 금지", "Unsplash와 유사/경쟁 서비스를 만들기 위해 이미지를 모아 재구성하는 것 금지"라는 제한이 있어 **CC0는 아님** — 페이지에 정확히 "Unsplash License, 출처 표기 권장(의무 아님)"으로 표기할 것 |

### 감상 전용 (재사용 불가 — 출처만 링크, 이미지 재사용 안 됨을 명시)

| URL | 검증 방법 | 확인 내용 | 라이선스 |
|---|---|---|---|
| `https://www.skypixel.com/photos/gobi-desert-mongolia` (DJI 공식 드론 사진 커뮤니티 SkyPixel, "Gobi Desert Mongolia" 태그) | curl HTTP 200(사이트 생존 확인) — WebFetch로는 SPA라 갤러리 콘텐츠 자체는 못 읽음 | SkyPixel은 "세계 최대 드론 사진/영상 공유 플랫폼"(자체 소개, DJI 운영). **드론 촬영 사진이 확실히 많은 곳이지만, 개별 사진의 콘텐츠는 이번 세션에서 열람 확인하지 못함(SPA 렌더링 한계)** | WebSearch로 ToS 확인: 업로더가 DJI에 광범위한 사용권을 부여하는 구조이며, **제3자(독자)에게는 재사용권이 없음** — 사진작가 개별 저작권 소유, 감상/영감용으로만 링크하고 "이미지 재사용 불가(각 작가 저작권 보유)"를 명시할 것 |

### 확인 실패 / 미확인

| 시도한 것 | 결과 |
|---|---|
| `File:Mongolia_deserts_267.jpg` (파일명 추측) | **404 Not Found** — WebFetch가 앞서 요약하며 언급한 파일명을 그대로 시도했다가 실패. 정확한 파일명은 Wikimedia API로 재조회해 `File:Mongolia deserts 267 (26274406105).jpg`(괄호에 Flickr ID 포함)임을 확인·정정함 — 위 표에 반영됨 |
| DJI 공식 "Mini 5 Pro 샘플/작품 갤러리" 페이지 | 이번 세션에서 별도 URL을 찾아 검증하지 않음 — dji.com/mini-5-pro/specs 페이지 내 샘플 이미지 섹션 존재 가능성은 있으나 전용 갤러리 URL은 미확인. 참고 자료 페이지 작성 시 굳이 필요하면 추가 검증 권장 |
| `medium.com/@hayekesteloo/...` | HTTP 403(봇 차단) — DREF-02에도 동일 기록. 갤러리와는 무관하나 링크 셋에서 제외 권장 |

---

## Common Pitfalls (이 페이지 작성 시)

### Pitfall: 2차 규제 블로그 수치를 원출처처럼 서술
**무엇이 문제인가:** drone-laws.com 등의 등록비·처리기간·250g 면제 수치를 CAAM 공식 사실처럼 쓰면, Part 101/102 원문에 없는 내용을 사실로 포장하게 됨.
**방지책:** 마일스톤 PITFALLS.md Pitfall 1의 표기 원칙("검증됨" vs "미확인 — 출발 전 CAAM 직접 확인 필요")을 참고 페이지에도 그대로 적용.

### Pitfall: Commons 이미지가 "드론 촬영"이라고 단정
**무엇이 문제인가:** Wikimedia Commons "항공사진" 카테고리는 비행기 창문 촬영·위성사진도 섞여 있어, 무심코 "드론으로 찍은 몽골 사진"이라 표기하면 부정확할 수 있음.
**방지책:** 갤러리 페이지 소개문에 "아래 이미지는 항공/고지대 시점 참고 이미지이며, 드론 촬영이 개별적으로 확인된 것은 아닙니다"라는 캐비어트 문장을 상단에 한 번 명시.

### Pitfall: SkyPixel/Unsplash 라이선스 혼동
**무엇이 문제인가:** SkyPixel은 감상 전용(재사용 불가)인데 Unsplash처럼 "자유롭게 써도 된다"로 오인하면 저작권 문제가 될 수 있음.
**방지책:** 갤러리 페이지에서 "재사용 가능(Wikimedia/Unsplash, 라이선스 표기)"과 "감상 전용(SkyPixel, 재사용 불가)"을 시각적으로 명확히 구분된 절로 나눌 것.

---

## Open Questions

1. **mcaa.gov.mn의 실제 드론/UAS 전용 하위 페이지 존재 여부**
   - 아는 것: 포털 셸은 살아있고(HTTP 200), `/page/mayagt`(서식) 경로가 존재함
   - 불확실한 것: 이 SPA 안에 드론 등록·허가 신청 폼이 실제로 있는지, 있다면 그 URL이 무엇인지 — WebFetch가 JS 렌더링을 못 해서 확인 불가
   - 권장: 참고 페이지에는 "mcaa.gov.mn (포털, 드론 전용 페이지는 직접 탐색 필요)"로 표기하고 확정적 서술 금지

2. **propelrc.com의 현재 접속 가능 여부**
   - 아는 것: 마일스톤 조사 시점엔 접속됐음, 이번 세션엔 2회 연속 접속 실패
   - 불확실한 것: 일시적 장애인지 사이트가 실제로 사라졌는지
   - 권장: 페이지 작성/빌드 직전에 한 번 더 재시도해보고, 계속 실패하면 목록에서 제외

3. **Wikimedia Commons 개별 파일의 정확한 촬영 기기(드론 vs 항공기 vs 위성)**
   - 아는 것: 카테고리 분류상 "항공사진"이지만 파일 설명에 촬영 기기가 거의 명시 안 됨
   - 불확실한 것: 어떤 파일이 실제 드론으로 찍혔는지
   - 권장: "항공/고지대 시점 참고 이미지"로 뭉뚱그려 표기(드론이라 단정하지 않음)

4. **DJI 공식 Mini 5 Pro 샘플/작품 갤러리 전용 URL**
   - 아는 것: dji.com 제품 페이지는 존재·확인됨
   - 불확실한 것: 별도의 "갤러리" 서브페이지가 있는지
   - 권장: 없어도 무방 — Wikimedia/Unsplash/SkyPixel 3종으로 갤러리 페이지 구성 충분

---

## Sources

### Primary (HIGH confidence — 이번 세션 직접 fetch/curl 확인)
- CAAM Part 101 PDF (backend-api.mcaa.gov.mn/...9f4e7437...pdf) — curl HTTP 200 재확인, 내용은 마일스톤 인용
- CAAM Part 102 PDF (backend-api.mcaa.gov.mn/...d9f072d6...pdf) — curl HTTP 200 + WebFetch 신규 텍스트 확인
- mcaa.gov.mn / mcaa.gov.mn/page/mayagt — curl HTTP 200 (콘텐츠 미확인)
- dji.com/mini-5-pro/specs — curl HTTP 200 재확인
- dl.djicdn.com Mini 5 Pro User Manual PDF — curl HTTP 200, DJI 자체 CDN
- support.dji.com "A Beginner's Guide to DJI Mini 5 Pro" — WebFetch 전문 확인
- YouTube oEmbed API (6건 개별 확인) — Mg4MeDkRmZo, fNVIHFwhRGo, G1yBrN-iv58, WQ3rRvfBx9I, CQC07AmTrcs, mjp778LaHcM
- Wikimedia Commons API(categorymembers, imageinfo/extmetadata) — Category:Aerial_photographs_of_Mongolia, Category:Gobi_Desert, Category:Khongoryn_Els, Category:Yolyn_Am, Category:Bayanzag + 4개 개별 파일 라이선스 조회
- unsplash.com/license — WebFetch 원문 확인

### Secondary (MEDIUM confidence — HTTP 200 생존만 curl로 확인, 내용은 검색결과/제목 기반)
- vicvideopic.com (파노라마 튜토리얼, 사진 설정 튜토리얼)
- support.freewellgear.com ND 필터 가이드
- dronexl.co 2026-01-26 설정 가이드
- mavicpilots.com 파노라마 RAW 샘플 스레드
- drone-laws.com (몽골 규제 2차 소스)
- unsplash.com/s/photos/gobi-desert (WebFetch로 로드 확인)
- skypixel.com/photos/gobi-desert-mongolia (curl 생존만 확인, 콘텐츠 미확인) + SkyPixel ToS(WebSearch로 라이선스 성격 확인)

### Tertiary / 확인 실패 (LOW confidence 또는 접속 불가 — 사용 비권장)
- propelrc.com — 접속 실패(000, 2회)
- medium.com/@hayekesteloo/... — HTTP 403
- `File:Mongolia_deserts_267.jpg`(추측 파일명) — 404, API로 정정됨
- skywardwings.com, danistanomads.com, vacationsmongolia.com, canifly.in, droneller.com — 마일스톤 인용만, 이번 세션 재검증 안 함

---

## Metadata

**Confidence breakdown:**
- DREF-01 (규제): HIGH on 원출처 링크 생존 + Part 101/102 확정 내용 / MEDIUM-LOW on mcaa.gov.mn 드론 전용 콘텐츠, 2차 블로그 접속성(propelrc.com 실패)
- DREF-02 (튜토리얼): HIGH on DJI 공식 자료·YouTube 실재 확인 / LOW on 몽골 현지 특화 튜토리얼(존재하지 않음 — 없다는 결론 자체는 확인된 사실)
- DREF-03 (갤러리): HIGH on 라이선스 확인(Wikimedia 개별 파일, Unsplash License 원문) / LOW on "드론 촬영 여부" 개별 확인, SkyPixel 콘텐츠 상세

**Research date:** 2026-07-13
**Valid until:** 약 30일 — 링크 생존성은 시간이 지나면 재확인 필요(특히 propelrc.com은 다음 조사/빌드 직전 재시도 권장). DJI 공식 자료·CAAM 원문 PDF는 상대적으로 안정적(90일 이상 유효 가능성 높음).
