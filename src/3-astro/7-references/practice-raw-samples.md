# 연습용 무료 RAW·샘플 이미지 모음

**목적**: 이 책의 천체사진 보정(은하수 후보정)·스태킹·강조 보정을 실제 사진 없이 미리 연습할 수 있도록, 무료로 받을 수 있는 RAW 파일·은하수 샘플 프레임 세트를 모았습니다. 대부분 "연습·학습용" 조건이니 재배포·상업적 사용 전 각 사이트의 이용약관을 확인하세요.

**수록 기준**: 이 목록의 링크는 WebSearch로 후보를 찾은 뒤 WebFetch로 직접 확인하고(일부는 curl로 다운로드 링크의 HTTP 상태까지 확인해), 실제로 열리고 다운로드가 가능한 것만 실었습니다. 403/402/타임아웃 등으로 확인하지 못한 후보는 싣지 않고 마지막 "참고 / 미검증" 절에 따로 정리했습니다.

---

## 단일 RAW 파일 (RAW 현상 연습)

| 사이트/세트명 | 제공처 · 이용조건 | 파일형식 |
|---|---|---|
| [RAWSAMPLES.CH](https://rawsamples.ch/index.php/en/) | 2007년부터 운영된 원조 RAW 샘플 사이트, 카메라 제조사별(Canon/Nikon/Hasselblad 등) 페이지에서 개별 다운로드. "저작권 없는 파일만 게시"라는 기준은 있으나 별도 라이선스 조항은 명시돼 있지 않음(소프트웨어 개발자용 테스트 파일 성격) · 무료, 회원가입 불필요 | CR2 등 (제조사별 상이) |
| [raw.pixls.us](https://raw.pixls.us/) | PIXLS.US(darktable/RawTherapee 회귀 테스트용 DB) · **CC0(퍼블릭 도메인)** 명시, 무료 | 제조사별 RAW, 카메라·모델별 표 형식 |
| [Signature Edits — Free Raw Photos](https://www.signatureedits.com/free-raw-photos/) | 커뮤니티 기고 2,000장 이상, [이용약관](https://www.signatureedits.com/free-raw-license-terms/)에 "개인·상업적 사용 모두 허용, 다운로드·복제·수정·배포 가능, 저작자 표시 의무 없음(단 원저작자를 자기 것처럼 사칭 금지, 동일 서비스 경쟁 목적 재판매 금지)"이라고 명시 · 무료, 다운로드 자체에 이메일 등록이 필수인지는 명확히 확인하지 못함(뉴스레터 가입 유도 배너만 확인) | 대부분 Canon CR2, 일부 Panasonic/Sony/Adobe DNG로 알려짐(개별 카테고리 목록까지는 확인 못함) |
| [Raw-Files.com](https://www.raw-files.com/download.html) | Tao Jiang 운영, 최신 카메라(Nikon Z, Sony A7C II, Fujifilm X 시리즈, Ricoh GR IV 등) 위주 무료 다운로드 링크 제공 · 사이트 자체는 "© 2024 Tao Jiang. All Rights Reserved" 표기가 있으나 샘플 파일에 대한 별도 이용약관 문구는 페이지에서 확인하지 못함(연습용으로 무난하나 재배포 전 문의 권장) | NEF / ARW / RAF / DNG |

**야간·고감도·아스트로 사진 여부**: 위 4곳 모두 확인한 범위에서는 **야간/은하수 RAW를 별도로 제공하지 않습니다.** raw.pixls.us는 "저조도 대신 노출이 잘 된 저ISO 샷"을 명시적으로 요청하는 사이트라 야간 샷과는 정반대 성격입니다. 그래도 형식·용량이 실제 카메라 RAW와 동일해서, 화이트밸런스·노출·대비 등 **RAW 현상의 기본기(라이트룸/darktable 조작법)를 익히는 연습**에 충분히 유용합니다.

---

## 은하수 스태킹 연습용 프레임 세트

정직하게 말하면, **"바로 다운로드되는 은하수 다중 프레임 세트"는 매우 드뭅니다.** 검색한 범위에서 실제로 다운로드가 확인된 세트는 아래 2건뿐입니다.

| 세트명 | 제공처 · 이용조건 | 프레임 수 · 형식 · 적합 도구 |
|---|---|---|
| [Homework: Download and Stack my Data!](https://www.photographingspace.com/homework-download-stack-data/) | PhotographingSpace.com(저자 개인 블로그) · 페이지에 별도 라이선스 문구는 없으나 "결과물을 댓글/SNS로 공유해달라"는 요청만 있음(연습용 공유 취지로 판단, 재배포 전 저자에게 확인 권장) · 다운로드 링크 2개 모두 HTTP 200으로 직접 확인: [전체 11장 zip(300MB+)](https://www.photographingspace.com/downloads/11x_ISO6400_f2.8_15s_5DMkIII_raw.zip), [단일 RAW 1장](https://www.photographingspace.com/downloads/CSM30803.CR2) | **11장, Canon CR2**. 남아프리카·나미비아 국경 칼라하리 사막에서 Canon 5D Mark III, 24mm f/2.8, ISO 6400, 15초로 촬영한 실제 은하수 프레임(고온 환경이라 열노이즈도 있음) — **Sequator나 Starry Landscape Stacker 스태킹 연습에 그대로 적합** |
| [Stacking Nightscapes with Starry Landscape Stacker](https://nightscapephotographer.com/stacking-nightscapes-with-starry-landscape-stacker/) | Nightscape Photographer(저자 Daniel Gangur) · 페이지에 "재판매·인쇄 등은 금지, 튜토리얼을 따라 후보정을 배우는 용도로만 무료 제공"이라고 명시. [Dropbox 폴더 링크](https://www.dropbox.com/sh/qfta1j767nyv9wi/AAD-XeQHuGchxs6MV2RfU08Ja?dl=0)는 실제 폴더로 리다이렉트되는 것을 확인(HTTP 302 → 정상 Dropbox 폴더) | **10장** — 파일 형식은 페이지·폴더 미리보기(JS 렌더링이라 자동 확인 불가)에 명시돼 있지 않아 직접 열어 확인 필요. **Starry Landscape Stacker 튜토리얼 전용 연습 세트**(Mac 사용자에게 적합) |

**직접 촬영해서 연습하는 것도 방법입니다**: 위 두 세트 외에는 신뢰할 만한 "다운로드 가능한 은하수 다중 프레임" 자료를 찾지 못했습니다. 대안으로, 맑은 밤 삼각대를 고정한 채 같은 구도로 은하수를 8~15장 연속 촬영해두면(책의 [스태킹으로 노이즈 줄이기](../5-postprocessing/stacking.md) 조건과 동일하게 노출·화이트밸런스 고정) 그 자체로 최고의 연습 세트가 됩니다.

> 참고로 [AstroBackyard의 DeepSkyStacker 연습 파일](https://astrobackyard.com/dss-practice-files/)도 검색에 걸렸지만, 이는 **북아메리카 성운(딥스카이 천체)을 적도의 추적 장비로 찍은 라이트/다크 프레임**이라 이 책이 다루는 삼각대 고정 은하수 촬영과는 장르가 다릅니다(딥스카이 스태킹을 별도로 공부하고 싶을 때만 참고).

---

## 은하수 샘플 이미지 (강조 보정 연습)

라이선스가 명확한 "몽골 현지 은하수 사진"은 이미 [몽골 천체사진 링크 모음](mongolia-astrophotography-links.md)의 ①에 정리되어 있습니다 — 중복 게재하지 않고 여기서는 링크만 다시 안내합니다.

- [File:Rho_Ophiuchi_from_UB,_Mongolia.jpg](https://commons.wikimedia.org/wiki/File:Rho_Ophiuchi_from_UB,_Mongolia.jpg) — CC BY-SA 4.0, 울란바토르에서 촬영된 은하수 코어·성운
- [Milky Way seen from Mongolia, Summer 2013 (Flickr)](https://www.flickr.com/photos/30342811@N04/9281336927) — CC BY 2.0, 궁갈루트 인근 촬영

**강조 보정(대비·채도·별 강조) 연습용 진입점** — 개별 사진은 클릭해서 File 페이지/라이선스를 반드시 재확인하세요:

| 진입점 | 확인 내용 | 라이선스 |
|---|---|---|
| [Wikimedia Commons — Category:Milky Way Galaxy and a place on Earth](https://commons.wikimedia.org/wiki/Category:Milky_Way_Galaxy_and_a_place_on_Earth) | 직접 열어 확인: 지구 풍경과 함께 찍힌 은하수 사진 **193장 + 하위 카테고리 86개**(칠레 731장, 호주 97장, 이탈리아 86장 등 국가별 세분화) | 파일별 개별 라이선스(CC0/CC BY/CC BY-SA 등 혼재) — 반드시 File 페이지에서 재확인 |
| [Unsplash — "milky way" 검색](https://unsplash.com/s/photos/milky-way) | 접속 확인, 사진 약 3,600장 이상 표시됨(Unsplash+ 유료 표시가 붙은 것 제외) | Unsplash 라이선스(대체로 무료 사용 허용, 상세 조건은 unsplash.com/license 확인) |
| [Pexels — "milky way" 검색](https://www.pexels.com/search/milky%20way/) | 접속 확인, 사진 약 12,000장 이상 표시됨 | Pexels 라이선스(대체로 무료 사용 허용, 상세 조건은 pexels.com/license 확인) |

---

**책 내 관련 챕터**: [RAW 현상 기본](../5-postprocessing/raw-develop.md), [스태킹으로 노이즈 줄이기](../5-postprocessing/stacking.md), [은하수 강조 보정](../5-postprocessing/enhance-milkyway.md)

---

## 참고 / 미검증

아래는 후보로 검색됐지만 접속·다운로드를 확인하지 못했습니다. 필요하면 직접 열어 재확인 후 사용하세요(책이나 다른 참고 자료 페이지에 옮겨 적기 전에도 마찬가지입니다).

- **DPReview Studio Scene 비교 도구**(`dpreview.com/reviews/image-comparison`) — **403 Forbidden**으로 접속 실패. 카메라별 스튜디오 촬영 RAW를 다운로드할 수 있다고 알려져 있으나 직접 확인하지 못했습니다.
- **Photography Life — Raw Image Database**(`photographylife.com/nikon-z8-sample-images-raws` 등) — WebFetch는 **402**, curl(User-Agent 지정)도 **403**으로 접속 실패. "개인 용도로만 다운로드 허용, 재게시·상업적 사용 금지"라는 조건이 알려져 있으나 직접 확인하지 못했습니다.
- **fileexamples.com (사진/RAW 카테고리)** — **HTTP 402(DEPLOYMENT_DISABLED)** 로 사이트 자체가 내려가 있는 것을 확인했습니다. 현재는 이용 불가로 보입니다.
- **PhotoPills / Lonely Speck의 "실습용 다운로드 프레임"** — Lonely Speck은 노출·보정 프리셋(Film Speck One 등)은 확인되지만, 은하수 촬영 연습용 RAW 프레임 세트를 별도로 제공한다는 근거는 검색으로 찾지 못했습니다. PhotoPills 공식 사이트는 [사용 소프트웨어](software-references.md)에서도 403으로 접속하지 못한 이력이 있어 다시 시도하지 않았습니다.
- **Reddit/포럼에 공유된 은하수 프레임 세트** — 검색은 시도했으나, "현재도 살아있는 다운로드 링크"를 명확히 특정하지 못해 목록에서 제외했습니다.

**다시 한 번 강조**: 이 문서에 실린 링크도 시간이 지나면 만료될 수 있습니다(특히 개인 블로그의 Dropbox/Google Drive 링크). 재배포하거나 책 부록에 QR코드로 박아 넣기 전에는 반드시 최신 상태로 재확인하세요.
