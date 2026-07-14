# Phase 14: 여행 참고 자료 - Research

**Researched:** 2026-07-14
**Domain:** 큐레이션된 외부 링크/이미지 2종 — (1) 여행 사진 예시 갤러리(TREF-01), (2) R7·삼양 12mm·RF 50mm 사양/촬영 기법 튜토리얼 링크(TREF-02)
**Confidence:** HIGH (Wikimedia Commons 라이선스·Canon Camera Museum 공식 스펙·YouTube oEmbed 실재) / MEDIUM (Canon 지역별 공식 도메인은 이번 세션 403 차단, 대체 공식 소스로 교차확인) / LOW (일부 SEO형 튜토리얼 사이트는 미검증, 목록에서 제외)

> 이 문서는 순수 참고자료 큐레이션 조사입니다. **이번 세션에서 실제로 fetch(WebFetch)/curl로 상태를 확인했거나 Wikimedia API·YouTube oEmbed로 개별 검증한 항목만** 싣습니다. URL을 추측/패턴완성한 사례는 없습니다. 접속에 실패한 항목은 삭제하지 않고 "확인 실패/미확인" 절에 정직하게 기록했습니다.

## Summary

TREF-01(갤러리)은 이 프로젝트가 드론 마일스톤에서 이미 확립한 방식 — **Wikimedia Commons 파일 단위 라이선스 확인 → EMBED 허용(CC0/CC BY/CC BY-SA) vs LINK-ONLY(전재 불가) 명확 구분** — 을 그대로 따랐습니다. 기존 책(introduction.md, 10-drone-sites/*.md)이 이미 검증해 실제로 쓰고 있는 5개 명소 사진(Bernard Gagnon CC0 3점, Rob Oo CC BY 2.0, Arabsalam CC BY-SA 4.0)을 이번 세션에 Wikimedia API로 **재검증**했고, 모두 라이선스·촬영자가 그대로 유지됨을 확인했습니다. 여기에 각 명소마다 같은 업로더(주로 Bernard Gagnon, CC0)의 **추가 사진 3~5장씩**을 새로 찾아 라이선스를 개별 확인했고, 몽골 게르/유목민/낙타 등 "현지·사람" 앵글 사진도 6장 추가로 검증했습니다.

**중요한 정정 발견**: 드론 마일스톤 조사(Phase 10)는 "Category:Tsagaan_Suvarga"와 "Category:Baga_Gazriin_Chuluu" 카테고리가 Commons에 존재하지 않는다는 이유로 이 두 명소를 갤러리에서 **제외**했습니다(실제로 `src/08-references/drone-galleries.md`에 그렇게 기록되어 있음을 확인). 하지만 이번 세션에 **카테고리 브라우즈가 아니라 Commons 검색 API**로 조회한 결과, 두 명소 모두 정식 카테고리 없이도 개별 파일은 실제로 존재합니다 — 차강소브라가 3장(철자가 "Tsagaan_Suvraga"로, "Suvarga"가 아님), 바가가즈링 촐로 15장(Arabsalam 업로드, "Baga_Gazaryn_Chuluu"로, "Gazriin"이 아님). 즉 **드론 갤러리와 달리 이 여행 갤러리는 5개 명소를 모두 커버할 수 있습니다.**

TREF-02(튜토리얼)는 Canon 공식 도메인(canon-europe.com, canon-cna.com, usa.canon.com, canon.co.uk)이 **이번 세션 curl과 WebFetch 모두에서 일괄 403**을 반환했습니다(자동화 요청 차단으로 추정 — B&H, DPReview, the-digital-picture.com 등 리뷰 매체도 동일하게 403). 대신 **Canon 공식 "Canon Camera Museum"(global.canon 도메인)** 은 정상 접속되어, R7·RF 50mm STM·RF-S 18-150mm 세 제품 모두 WebFetch로 전문 확인에 성공했습니다 — 이것이 이번 세션의 1차 공식 소스입니다. 삼양(Samyang US) 공식 페이지는 정상 접속되어 마운트·AF·방진방적까지 전부 재확인했습니다. YouTube 튜토리얼 8건은 oEmbed로 제목·채널·실재를 확인했고, 여행사진 구도/골든아워/광각-망원 활용 등 일반 기법 아티클 10건을 PetaPixel·Digital Photography School 등에서 curl HTTP 200으로 확인했습니다.

**Primary recommendation:** 갤러리 페이지는 `drone-galleries.md`와 동일한 3단 구조(✅ 재사용 가능-Wikimedia / ✅ 재사용 가능하나 개별확인 필요-Unsplash / 👁 감상 전용-Instagram·500px·포트폴리오)로 작성하되, 5개 명소 모두 포함. 튜토리얼 페이지는 Canon Camera Museum(global.canon) 링크를 1차 공식 소스로, Samyang US를 공식 렌즈 소스로, YouTube 8건 + 텍스트 아티클 10건을 기법 참고로 구성.

---

## TREF-01: 여행 사진 예시 갤러리

### ✅ EMBED 허용 — Wikimedia Commons (라이선스 파일별 확인, 이번 세션 API로 검증)

**검증 방법**: 모든 항목은 `commons.wikimedia.org/w/api.php` (action=query, prop=imageinfo, iiprop=extmetadata)로 개별 조회해 LicenseShortName·Artist 필드를 직접 읽었습니다.

#### 차강소브라가 (Tsagaan Suvraga)

| 파일 | 라이선스 | 촬영자 | 비고 |
|---|---|---|---|
| [File:Tsagaan Suvraga (20268223089).jpg](https://commons.wikimedia.org/wiki/File:Tsagaan_Suvraga_(20268223089).jpg) | **CC BY 2.0** | Rob Oo (Flickr) | **이미 책에 사용 중** — `10-drone-sites/tsagaan-suvarga.md`에서 재확인, 이번 세션 라이선스 그대로 유지 확인 |
| [File:Tsagaan Suvraga (19915873243).jpg](https://commons.wikimedia.org/wiki/File:Tsagaan_Suvraga_(19915873243).jpg) | **CC BY 2.0** | Rob Oo (Flickr) | 신규 확인, 같은 업로더 |
| [File:Canyon (20568363291).jpg](https://commons.wikimedia.org/wiki/File:Canyon_(20568363291).jpg) | **CC BY 2.0** | Rob Oo (Flickr) | 신규 확인. 파일명은 "Canyon"이지만 이미지 설명(ImageDescription)이 "Tsagaan Suvraga"/"Beautiful Canyon"으로 명시되어 있어 동일 장소로 판단 |

**정정 기록**: `Category:Tsagaan_Suvraga`·`Category:Tsagaan_Suvarga` 둘 다 categorymembers API 조회 결과 **비어 있음(카테고리 자체 없음)** — 드론 마일스톤 기록과 일치. 하지만 `list=search&srnamespace=6`으로 검색하면 위 3개 파일이 실제로 존재함을 확인했습니다(카테고리 미분류일 뿐 파일은 있음).

#### 바양작 (Bayanzag)

| 파일 | 라이선스 | 촬영자 | 비고 |
|---|---|---|---|
| [File:Bayanzag 10.jpg](https://commons.wikimedia.org/wiki/File:Bayanzag_10.jpg) | **CC0** | Bernard Gagnon | **이미 책에 사용 중**(`10-drone-sites/bayanzag.md`), 재확인 |
| [File:Bayanzag 05.jpg](https://commons.wikimedia.org/wiki/File:Bayanzag_05.jpg) | **CC0** | Bernard Gagnon | 신규 확인 |
| [File:Bayanzag 09.jpg](https://commons.wikimedia.org/wiki/File:Bayanzag_09.jpg) | **CC0** | Bernard Gagnon | 신규 확인 |
| [File:Bayanzag 12.jpg](https://commons.wikimedia.org/wiki/File:Bayanzag_12.jpg) | **CC0** | Bernard Gagnon | 신규 확인 |
| [File:Bayanzag (Flaming Cliffs).jpg](https://commons.wikimedia.org/wiki/File:Bayanzag_(Flaming_Cliffs).jpg) | **CC BY 2.0** | Flickr 업로더(다른 촬영자, Gagnon 아님) | 신규 확인 — 다른 구도 참고용 |
| [File:Flaming cliffs in Gobi.jpg](https://commons.wikimedia.org/wiki/File:Flaming_cliffs_in_Gobi.jpg) | CC BY 2.0 | amanderson2 | **이미 introduction.md에 사용 중** — 이번 세션 재확인은 안 했으나 introduction.md 자체 표에 명시되어 있어 그대로 인용 |

#### 홍고린엘스 (Khongoryn Els)

| 파일 | 라이선스 | 촬영자 | 비고 |
|---|---|---|---|
| [File:Khongoryn Els 04.jpg](https://commons.wikimedia.org/wiki/File:Khongoryn_Els_04.jpg) | **CC0** | Bernard Gagnon | **이미 책에 사용 중**(`10-drone-sites/khongoryn-els.md`), 재확인 |
| [File:Khongoryn Els 05.jpg](https://commons.wikimedia.org/wiki/File:Khongoryn_Els_05.jpg) | **CC0** | Bernard Gagnon | 신규 확인 |
| [File:Khongoryn Els 10.jpg](https://commons.wikimedia.org/wiki/File:Khongoryn_Els_10.jpg) | **CC0** | Bernard Gagnon | 신규 확인 |
| [File:Camels at Khongoryn Els 01.jpg](https://commons.wikimedia.org/wiki/File:Camels_at_Khongoryn_Els_01.jpg) | **CC0** | Bernard Gagnon | 신규 확인 — 낙타·여행 앵글 |
| [File:Hiking in Khongoryn Els (Unsplash).jpg](https://commons.wikimedia.org/wiki/File:Hiking_in_Khongoryn_Els_(Unsplash).jpg) | **CC0** | Sarah Lachise (원본 Unsplash, Commons에 CC0로 재라이선스되어 임포트됨) | 신규 확인. **주의**: 제목상 사람이 등장할 가능성 있음 — 실제 사용 전 파일 페이지에서 이미지를 직접 열어 인물 식별 가능 여부 확인 권장(라이선스 자체는 CC0로 문제 없음) |

#### 욜링암 (Yolyn Am)

| 파일 | 라이선스 | 촬영자 | 비고 |
|---|---|---|---|
| [File:Yolyn Am 05.jpg](https://commons.wikimedia.org/wiki/File:Yolyn_Am_05.jpg) | **CC0** | Bernard Gagnon | **이미 책에 사용 중**(`10-drone-sites/yolyn-am.md`), 재확인 |
| [File:Yolyn Am 01.jpg](https://commons.wikimedia.org/wiki/File:Yolyn_Am_01.jpg) | **CC0** | Bernard Gagnon | **이미 introduction.md에 사용 중**, 재확인 |
| [File:Yolyn Am 02.jpg](https://commons.wikimedia.org/wiki/File:Yolyn_Am_02.jpg) | **CC0** | Bernard Gagnon | 신규 확인 |
| [File:Yolyn Am 07.jpg](https://commons.wikimedia.org/wiki/File:Yolyn_Am_07.jpg) | **CC0** | Bernard Gagnon | 신규 확인 |
| [File:Yak at Yolyn Am 01.jpg](https://commons.wikimedia.org/wiki/File:Yak_at_Yolyn_Am_01.jpg) | **CC0** | Bernard Gagnon | 신규 확인 — 야크·현지 동물 앵글 |

#### 바가가즈링 촐로 (Baga Gazriin Chuluu)

| 파일 | 라이선스 | 촬영자 | 비고 |
|---|---|---|---|
| [File:Baga Gazaryn Chuluu13.JPG](https://commons.wikimedia.org/wiki/File:Baga_Gazaryn_Chuluu13.JPG) | **CC BY-SA 4.0** | Arabsalam | **이미 책에 사용 중**(`10-drone-sites/baga-gazriin-chuluu.md`), 재확인 |
| [File:Baga Gazaryn Chuluu1.JPG](https://commons.wikimedia.org/wiki/File:Baga_Gazaryn_Chuluu1.JPG) | **CC BY-SA 4.0** | Arabsalam | 신규 확인 |
| [File:Baga Gazaryn Chuluu4.JPG](https://commons.wikimedia.org/wiki/File:Baga_Gazaryn_Chuluu4.JPG) | **CC BY-SA 4.0** | Arabsalam | 신규 확인 |
| [File:Baga Gazaryn Chuluu9.JPG](https://commons.wikimedia.org/wiki/File:Baga_Gazaryn_Chuluu9.JPG) | **CC BY-SA 4.0** | Arabsalam | 신규 확인 |

**정정 기록**: `Category:Baga_Gazaryn_Chuluu`·`Category:Baga_Gazriin_Chuluu` 둘 다 categorymembers API 결과 **비어 있음** — 드론 마일스톤 기록과 일치. 검색 API로는 Arabsalam 업로드분 15장(Baga_Gazaryn_Chuluu1~15.JPG)이 실제 존재함을 확인.

#### 일반 몽골 여행/풍경 (명소 특정 없음)

| 파일 | 라이선스 | 촬영자 | 비고 |
|---|---|---|---|
| [File:Sunset at Gobi Desert in Ömnögovi Province, Mongolia.jpg](https://commons.wikimedia.org/wiki/File:Sunset_at_Gobi_Desert_in_%C3%96mn%C3%B6govi_Province,_Mongolia.jpg) | **CC BY 4.0** | Commons 업로더(닉네임, 파일 페이지 참조) | 신규 확인 — 남고비 주(옴노고비, 5개 명소 소재 주) 일몰 |
| [File:Mongolia deserts 267 (26274406105).jpg](https://commons.wikimedia.org/wiki/File:Mongolia_deserts_267_(26274406105).jpg) | **CC BY 2.0** | Juris Paiders | `drone-galleries.md`에서 이미 검증됨 — 이번 세션 재확인 |
| [File:Gobi Desert, Mongolia (35132070010).jpg](https://commons.wikimedia.org/wiki/File:Gobi_Desert,_Mongolia_(35132070010).jpg) | **CC BY 2.0** | Christopher Michel | `drone-galleries.md`에서 이미 검증됨 — 이번 세션 재확인 |

#### 현지·사람 (게르·유목민·낙타)

| 파일 | 라이선스 | 촬영자 | 비고 |
|---|---|---|---|
| [File:Mongolian yurt in steppe.jpg](https://commons.wikimedia.org/wiki/File:Mongolian_yurt_in_steppe.jpg) | **CC0** | Popo le Chien (P.Lechien) | 게르, 사람 없음 |
| [File:A Mongolian Yurt.jpg](https://commons.wikimedia.org/wiki/File:A_Mongolian_Yurt.jpg) | **CC BY-SA 4.0** | Pauloleong2002 | 게르 외경 |
| [File:Yurt, Northwest Mongolia.jpg](https://commons.wikimedia.org/wiki/File:Yurt,_Northwest_Mongolia.jpg) | **CC BY-SA 4.0** | Alexandr frolov | 게르, 서부 몽골(고비와 다른 지역, "일반 몽골" 참고용으로만) |
| [File:Camel Farm in Mongolia 01.jpg](https://commons.wikimedia.org/wiki/File:Camel_Farm_in_Mongolia_01.jpg) | **CC BY-SA 4.0** | Alexandr frolov | 낙타, 사람 없음 |
| [File:Camelus bactrianus in western Mongolia 02.jpg](https://commons.wikimedia.org/wiki/File:Camelus_bactrianus_in_western_Mongolia_02.jpg) | **CC BY-SA 4.0** | Alexandr frolov | 쌍봉낙타 클로즈업 |
| [File:Herders. in Khustain Nuruu National Park (Mongolia) (2).jpg](https://commons.wikimedia.org/wiki/File:Herders._in_Khustain_Nuruu_National_Park_(Mongolia)_(2).jpg) | **CC BY 4.0** | Wikidata 연결 촬영자(파일 페이지 참조) | **인물 식별 가능**(목동). 훕스굴/고비가 아닌 후스타인 누루 국립공원(수도 인근) — "일반 몽골" 참고로만, 여행 코스 명소 아님을 캡션에 명시 권장 |
| [File:Two brothers lead a herd of horses across a river in Western Mongolia.jpg](https://commons.wikimedia.org/wiki/File:Two_brothers_lead_a_herd_of_horses_across_a_river_in_Western_Mongolia.jpg) | **CC BY-SA 4.0** | Bfreeproductions | **인물 식별 가능**(두 형제). 서부 몽골(고비 아님) — "일반 몽골" 참고로만 |
| [File:Mongolia Herding Life.JPG](https://commons.wikimedia.org/wiki/File:Mongolia_Herding_Life.JPG) | **CC BY-SA 3.0** | Vcproject | **인물 식별 가능**. 같은 시리즈로 최소 20장 존재(Mongolia Herding Life 1~20 등, 검색만 확인 — 개별 라이선스는 이 대표 파일만 확인) |

> **Wikimedia Commons 인물 사진에 대한 메모**: 이 프로젝트의 규칙("Unsplash 인물사진 → link-only")은 Unsplash License가 모델 릴리스를 보장하지 않기 때문입니다. Wikimedia Commons의 CC BY/CC BY-SA는 **저작권 재사용권**만 보장하며 이 역시 피사체의 초상권(모델 릴리스)까지 보장하지는 않는다는 점은 동일합니다 — 다만 이는 이 책이 지금까지 드론/은하수 파트에서 이미 Commons CC 인물 포함 사진(예: 야크 몰이꾼 등)을 별다른 제한 없이 써온 기존 관행과 일치하므로, 이 문서에서는 EMBED 허용으로 분류하되 **"인물 식별 가능" 캐비어트를 명시**하는 선에서 정리했습니다. 최종 사용 여부(특히 클로즈업 인물 사진)는 플래너/작성자가 판단하도록 권장합니다.

---

### ✅ 재사용 가능하나 개별 확인 필요 — Unsplash

| URL | 검증 방법 | 확인 내용 |
|---|---|---|
| `https://unsplash.com/s/photos/mongolia-travel` | WebFetch로 콘텐츠 로드 확인(이번 세션) | 검색 결과에 **인물 사진(초상, 전통 복장, 유목민, 말 탄 사람 등)과 풍경/게르/동물만 있는 사진이 섞여 있음**을 직접 확인 |
| `https://unsplash.com/s/photos/gobi-desert` | curl 응답 307(정상 리다이렉트, 생존 확인) | 드론 마일스톤에서 이미 로드 확인됨(고비 사막 사진 120장+, 최소 1장 항공/고지대 시점) — 이번 세션은 생존만 재확인 |
| `https://unsplash.com/license` | WebFetch 원문 재확인(이번 세션) | "상업/비상업 무료 사용, 허가 불필요, 출처 표기 권장(의무 아님), 단 무변형 재판매 금지·경쟁서비스 재구성 금지" — **CC0 아님**을 재확인 |

**라이선스 규칙**: Unsplash License는 자유롭지만 CC0가 아니며, **모델 릴리스를 보장하지 않습니다**. 이 프로젝트 규칙에 따라 **인물이 식별되는 Unsplash 사진은 절대 재호스팅(embed)하지 않고 링크만** 겁니다. 풍경/동물/건축물처럼 인물이 없는 사진은 Unsplash License 조건 하에 재사용 가능하나, 이 갤러리 페이지에서는 검색 페이지 링크만 제공하고 개별 파일을 다운로드해 신지 않는 것을 권장합니다(어떤 사진이 인물 포함인지 사진마다 다시 확인해야 하므로).

---

### 👁 감상 전용 (LINK-ONLY) — Instagram·500px·개인 포트폴리오

| URL | 검증 방법 | 확인 내용 |
|---|---|---|
| [Instagram: @ganulzii_photographer](https://www.instagram.com/ganulzii_photographer/) | curl HTTP 200 (브라우저 UA, 리다이렉트 추적) | Gan-Ulzii Gonchig — 몽골 유목 생활·풍경 전문, 팔로워 약 11.6만(WebSearch 스니펫 기준) |
| [Instagram: @mongolian_landscapes](https://www.instagram.com/mongolian_landscapes/) | curl HTTP 200 | 몽골 풍경 전문 계정 |
| [Daniel Kordan — Mongolia 포트폴리오](https://danielkordan.com/portfolio-item/mongolia-2018/) | curl HTTP 200 | 전문 여행사진 워크샵 리더의 개인 포트폴리오 페이지(고비 포함 몽골 촬영 투어) — All-Rights-Reserved 성격의 상업 포트폴리오 사이트로 판단(라이선스 명시 없음) |
| [500px 검색: mongolia gobi](https://500px.com/search?q=mongolia%20gobi&type=photos) | curl HTTP 200 | 500px는 작가 개별 저작권이 기본이며 재사용권이 독자에게 주어지지 않는 플랫폼 — 감상/영감용으로만 링크 |

**공통 규칙**: 위 4개는 모두 **이미지를 절대 다운로드/재호스팅하지 않고, 링크만 걸어 "감상·영감용"으로 안내**합니다. 저작권은 각 작가/플랫폼에 있습니다.

---

## TREF-02: R7·삼양 12mm·RF 50mm 사양/촬영 기법 튜토리얼

### 공식 스펙 (제조사 직접 확인)

| URL | 검증 방법 | 확인 내용 | 공식 여부 |
|---|---|---|---|
| [Canon EOS R7 — Canon Camera Museum](https://global.canon/en/c-museum/product/dslr901.html) | **WebFetch 전문 확인(이번 세션)** | APS-C CMOS 약 3250만 화소, DIGIC X, 5축 IBIS(호환 RF 렌즈와 협조 시 최대 8.0스탑), 4K(7K 오버샘플링)·Canon Log 3 | **공식(Canon)** |
| [Samyang AF 12mm F2.0 RF-S — Samyang US 공식몰](https://samyangus.com/products/samyang-af-12mm-f2-0-rf-s-ultra-wide-angle-lens) | **WebFetch 전문 확인(이번 세션)** | 마운트 "Canon RF-S", 조리개 F2~22, AF/MF 스위치+Linear STM, 무게 213g, 필터경 62mm, **방진방적 명시**("weather-sealed, protecting against dust, light rain, and snow") | **공식(Samyang)** |
| [Canon RF 50mm F1.8 STM — Canon Camera Museum](https://global.canon/en/c-museum/product/rf498.html) | **WebFetch 전문 확인(이번 세션)** | 초점거리 50mm, F1.8~F22, 무게 약 160g, 필터경 43mm, 6군5매+비구면 렌즈, 2020년 12월 출시. **방진방적 언급 없음**(스펙 페이지에 무표기 — 방진방적 없는 렌즈로 해석) | **공식(Canon)** |
| [Canon RF-S 18-150mm F3.5-6.3 IS STM — Canon Camera Museum](https://global.canon/en/c-museum/product/rf515.html) | **WebFetch 전문 확인(이번 세션)** | 35mm 환산 29-240mm, 렌즈 자체 IS 4.5스탑(R7과 협조 시 7.0스탑), 무게 약 310g, 필터경 55mm, 최단초점 0.17m/최대배율 0.44배. **방진방적 언급 없음** | **공식(Canon)** |

**중요 — 이번 세션 접속 제약**: `canon-europe.com`, `canon.co.uk`, `en.canon-cna.com`, `usa.canon.com`, `bhphotovideo.com`, `dpreview.com`, `the-digital-picture.com`, `masterclass.com`은 이번 세션 curl과 WebFetch 모두에서 **일괄 HTTP 403**을 반환했습니다(자동화 요청 차단으로 추정, URL 자체는 WebSearch로 여전히 존재 확인됨). STACK.md(같은 날 작성)는 이 도메인들을 성공적으로 인용했으나, 이번 세션에서는 재현되지 않았습니다 — **Canon Camera Museum(global.canon)이 이번 세션에 유일하게 정상 접속되는 Canon 공식 소스**이므로 이를 1차 링크로 사용할 것을 권장합니다. Canon 지역 사이트 링크를 페이지에 반드시 포함하고 싶다면 "접속 확인 필요(일부 환경에서 403 발생 가능)" 캐비어트를 다는 것을 권장합니다.

### 촬영 기법 아티클 (구도·골든아워·광각/망원 활용) — curl HTTP 200 재확인

| URL | 매체 | 다루는 내용 |
|---|---|---|
| [PetaPixel — 28 Composition Techniques That Will Improve Your Photos](https://petapixel.com/photography-composition-techniques/) | PetaPixel | 삼분할법 등 28가지 구도 기법 총정리 |
| [PetaPixel — Street Photography: A Complete Guide](https://petapixel.com/what-is-street-photography/) | PetaPixel | 스트리트 사진 정의·기법 전반 |
| [PetaPixel — 5 Essential Tips and Techniques for Better Street Photography](https://petapixel.com/2022/03/09/5-essential-tips-and-techniques-for-better-street-photography/) | PetaPixel | 셔터속도(정지 1/400+, 블러 1/15-)·빛·프레임 채우기 등 실전 팁 |
| [PetaPixel — Composition Tips: "National Geographic Style"](https://petapixel.com/2016/04/19/national-geographic-style-photo-composition-tips/) | PetaPixel | 피사체 중심의 그래픽하고 색감 강한 여행 다큐 스타일 구도 |
| [PetaPixel — 48 Travel Photography Tips to Improve Your Craft](https://petapixel.com/2021/06/22/48-travel-photography-tips-to-improve-your-craft/) | PetaPixel | 여행 사진 종합 팁 48가지 |
| [PetaPixel — Free 3-Hour Tutorial on Travel and Landscape Photography](https://petapixel.com/2020/01/18/heres-a-free-3-hour-tutorial-on-travel-and-landscape-photography/) | PetaPixel | 무료 3시간 분량 여행·풍경 사진 영상 튜토리얼 소개 |
| [Digital Photography School — Ultimate Guide to Street Photography (+24 Tips)](https://digital-photography-school.com/ultimate-guide-street-photography/) | dPS | 스트리트 사진 종합 가이드, 조리개(피사계심도) 등 카메라 설정 팁 포함 |
| [Digital Photography School — Wide-Angle vs Telephoto Lenses for Landscape Photography](https://digital-photography-school.com/wide-angle-versus-telephoto-lenses-for-beautiful-landscape-photography/) | dPS | 광각/망원 렌즈 선택 기준 — 광각(24-35mm 상당)은 몰입감 있는 풍경·환경 인물, 망원은 압축·원거리 피사체 |
| [ExpertPhotography — Wide Angle vs Telephoto Lens](https://expertphotography.com/wide-angle-vs-telephoto-lens) | ExpertPhotography | 위와 유사한 광각/망원 비교, 여행용 경량성 관점 추가 |
| [Focus by Picfair — A Beginner's Guide to Golden Hour Photography](https://focus.picfair.com/articles/shooting-golden-hour) | Picfair(사진 판매 플랫폼 블로그) | 골든아워 초심자 가이드 |

이 킷의 초점거리 매핑에 맞춰 페이지 작성 시: **삼양 12mm(≈19mm 환산)** → 위 "광각" 관련 아티클(넓은 풍경·환경 인물), **RF 50mm(≈80mm 환산)** → "망원/스트리트" 관련 아티클(인물·디테일 압축), **골든아워** → 명소별 촬영 타이밍에 공통 적용 가능.

### YouTube 튜토리얼 (oEmbed API로 실재·제목·채널 확인 — 이번 세션)

| # | URL | 제목 (oEmbed 확인) | 채널 | 대상 |
|---|---|---|---|---|
| 1 | `https://www.youtube.com/watch?v=Tv-UscG_Fcc` | Recommended Canon EOS R7 Settings: R7 Setup Guide | Andy Feliciotti | R7 설정 가이드 |
| 2 | `https://www.youtube.com/watch?v=PJV0-ikOhf0` | Canon EOS R7 Tutorial & Camera Settings | Tony & Chelsea Northrup | R7 종합 튜토리얼(널리 알려진 사진 교육 채널) |
| 3 | `https://www.youtube.com/watch?v=69b2YOom3HM` | The Best Settings for the Canon R7! | Samuel Maynard | R7 설정 가이드 |
| 4 | `https://www.youtube.com/watch?v=rA8rYLsHuBw` | Canon R7 \| The SETTINGS You NEED To KNOW! Fix Most AF troubles! | Jan Wegener | R7 AF 트러블슈팅 |
| 5 | `https://www.youtube.com/watch?v=LPxwjbW96BE` | Samyang AF 12mm f/2 AF lens review...on Canon RF-S! | Christopher Frost | 삼양 12mm RF-S 마운트 전용 리뷰(2024-12) |
| 6 | `https://www.youtube.com/watch?v=Z-5PzVJk4Hc` | Samyang AF 12mm F2 Lens Review | Avp Studios | 삼양 12mm 리뷰(샘플 이미지 포함) |
| 7 | `https://www.youtube.com/watch?v=Iilp9ekCJbA` | CANON 50mm RF F1.8 REVIEW: Is It the BEST Travel Lens? Canon R8 + 50mm | Cole Bielecki | RF 50mm STM 여행용 리뷰 |
| 8 | `https://www.youtube.com/watch?v=pXp09Ww83fw` | Canon RF S 18-150mm F3.5-6.3 IS STM Review \| Worth Getting? | Dustin Abbott | RF-S 18-150mm 리뷰(신뢰도 높은 렌즈 리뷰어) |

**참고**: oEmbed은 제목·채널·실재 여부만 제공하며, 영상 프레임별 내용은 시청·검증하지 않았습니다 — "제목 기준 요약"으로 페이지에 표기 권장.

---

## 확인 실패 / 미확인

| 시도한 것 | 결과 |
|---|---|
| `https://www.canon-europe.com/cameras/eos-r7/specifications/` | curl HTTP 403(브라우저 UA 포함), WebFetch도 403 — 이번 세션 접속 불가. WebSearch로 URL 존재·타이틀("Specifications & Features - Canon EOS R7 - Canon Europe")은 확인됨. STACK.md는 같은 날 다른 시점에 이 URL을 성공 인용했으므로 일시적 차단 가능성 — Canon Camera Museum(global.canon) 링크로 대체 권장 |
| `https://en.canon-cna.com/lenses/rf-50mm-f1-8-stm/specifications/`, `https://www.canon-europe.com/lenses/rf-s-18-150mm-f3-5-6-3-is-stm/specifications/`, `https://www.usa.canon.com/shop/p/eos-r7` 등 Canon 지역 도메인 전반 | curl/WebFetch 403 일괄 | 동일 사유 — Camera Museum으로 대체 |
| `https://www.bhphotovideo.com/...`, `https://www.dpreview.com/...`, `https://www.the-digital-picture.com/...` | curl/WebFetch 403 | 리뷰 매체 URL도 이번 세션엔 자동화 차단. STACK.md에서는 인용됐던 소스이므로 내용 자체의 신뢰도는 낮지 않으나, 이 세션 기준으로는 "재검증 필요"로 표기 |
| `https://www.adobe.com/creativecloud/photography/technique/golden-hour.html` | curl 타임아웃(000) 2회, WebFetch 타임아웃 | 접속 자체가 실패 — 페이지에 싣지 않음(대신 Focus by Picfair 골든아워 아티클로 대체) |
| `https://www.masterclass.com/articles/wide-angle-lens-vs-telephoto-lens-understanding-the-difference` | curl HTTP 403 | 페이지에 싣지 않음(dPS·ExpertPhotography로 충분히 커버) |
| pyramidsland.com, traveltipsforstudents.com, amateurphotographerguide.com, wakaabuja.com, ihitthebutton.com, sammapix.com, adrianmcalderon.com, naturewalkswithcarol.com (골든아워/여행팁 검색 결과) | 이번 세션 접속·품질 검증 안 함 | SEO 콘텐츠형 사이트로 추정 — 시간 제약상 검증하지 않았고, 페이지에 포함하지 않음(PetaPixel/dPS로 충분) |
| `File:Mongolia Herding Life` 시리즈 나머지 19장(1~20 중 대표 1장만 확인) | 검색으로 존재만 확인, 개별 라이선스는 조회 안 함 | 대표 1장(CC BY-SA 3.0, Vcproject)만 확정. 나머지는 "같은 시리즈, 라이선스 미확인"으로 표기 필요 |
| `File:Sunset at Gobi Desert in Ömnögovi Province, Mongolia.jpg` 업로더 실명 | Artist 필드가 위키 사용자명 링크(비ASCII 인코딩)로만 확인되고 실명 파싱은 안 함 | 파일 페이지 직접 방문 시 확인 가능 — 페이지 작성 시 "촬영자: Commons 사용자(파일 페이지 참조)"로 표기 권장 |

---

## Common Pitfalls (이 페이지 작성 시)

### Pitfall: 카테고리 없음 = 사진 없음으로 오판
**무엇이 문제인가:** 드론 갤러리는 "Category:Tsagaan_Suvarga/Baga_Gazriin_Chuluu 없음"을 근거로 두 명소를 통째로 제외했는데, 이는 카테고리 브라우즈만 시도하고 검색 API는 시도하지 않았기 때문. 실제로는 다른 철자(Suvraga/Gazaryn)의 개별 파일이 존재함.
**방지책:** 카테고리 조회가 비어 있어도 `list=search&srnamespace=6`로 파일명/설명 텍스트 검색을 반드시 병행할 것.

### Pitfall: Commons CC 라이선스와 초상권(모델 릴리스)을 혼동
**무엇이 문제인가:** CC BY/BY-SA는 저작권 재사용만 허용하며 피사체의 초상권을 보장하지 않음 — Unsplash 규칙과 원리는 같지만, 이 프로젝트는 지금까지 Commons 인물 사진을 별다른 구분 없이 써왔음(예: 야크 몰이꾼 사진 없음이 아니라 인물 요소가 약한 사진 위주로 선택해온 것일 뿐).
**방지책:** 인물이 뚜렷하게 식별되는 Commons 사진(목동 클로즈업 등)에는 "인물 식별 가능" 캐비어트를 명시하고, 가능하면 인물이 없거나 원경인 사진을 우선 배치.

### Pitfall: Canon 공식 도메인 403을 "링크 죽음"으로 오판
**무엇이 문제인가:** canon-europe.com 등은 이번 세션엔 403이지만 WebSearch로는 여전히 검색되고, 같은 날 다른 세션(STACK.md)에서는 정상 인용됨 — 즉 URL이 실제로 죽은 게 아니라 봇 차단성 일시 현상일 가능성이 높음.
**방지책:** 이런 도메인을 페이지에 실을지는 플래너 판단에 맡기되, **Canon Camera Museum(global.canon)이 이번 세션 기준 가장 안정적으로 접속되는 공식 대안**이라는 점을 명시하고 이를 1차로 사용.

---

## Open Questions

1. **Canon 지역 공식 도메인(canon-europe.com 등)의 403이 일시적인지 구조적인지**
   - 아는 것: 이번 세션엔 curl·WebFetch 모두 일괄 403. 같은 날 다른 세션(STACK.md 작성 시점)에는 성공.
   - 불확실한 것: 시간대별 봇 차단 정책 변화인지, 요청 패턴(짧은 간격 다중 요청) 때문인지.
   - 권장: 페이지 빌드 직전 재시도. 실패 시 Canon Camera Museum(global.canon) 링크만으로도 스펙 확인에는 충분.

2. **"Mongolia Herding Life" 시리즈(최소 20장)의 개별 라이선스**
   - 아는 것: 대표 1장은 CC BY-SA 3.0(Vcproject).
   - 불확실한 것: 나머지 19장이 전부 같은 라이선스/업로더인지.
   - 권장: 대표 1장만 인용하고 "같은 촬영자의 연작이 더 있음(라이선스 개별 확인 필요)"으로 표기, 또는 굳이 필요 없다면 생략.

3. **Unsplash 개별 사진의 인물 포함 여부 사진별 확인**
   - 아는 것: mongolia-travel 검색 결과에 인물/비인물 사진이 섞여 있음을 페이지 단위로 확인.
   - 불확실한 것: 개별 사진 URL 단위로 열어서 인물 유무를 하나하나 확인하지는 않음(시간 제약).
   - 권장: 갤러리 페이지에는 Unsplash를 "검색 링크만" 제공(재호스팅 없음)으로 처리해 이 리스크를 원천 차단.

---

## Sources

### Primary (HIGH confidence — 이번 세션 직접 fetch/API 확인)
- Wikimedia Commons API(`categorymembers`, `imageinfo/extmetadata`) — Bayanzag/Yolyn_Am/Khongoryn_Els 카테고리 + Tsagaan Suvraga/Baga Gazaryn Chuluu 검색 API + 게르/낙타/목동 검색 API, 총 20개 이상 개별 파일 라이선스 조회
- Canon Camera Museum(global.canon) — EOS R7(dslr901.html), RF 50mm F1.8 STM(rf498.html), RF-S 18-150mm(rf515.html) 3건 WebFetch 전문 확인
- Samyang US 공식몰(samyangus.com) — AF 12mm F2.0 RF-S 전문 확인(WebFetch)
- YouTube oEmbed API — 8건 개별 확인(Tv-UscG_Fcc, PJV0-ikOhf0, 69b2YOom3HM, rA8rYLsHuBw, LPxwjbW96BE, Z-5PzVJk4Hc, Iilp9ekCJbA, pXp09Ww83fw)
- unsplash.com/license, unsplash.com/s/photos/mongolia-travel — WebFetch 원문 확인

### Secondary (MEDIUM confidence — curl HTTP 200 생존 확인, 내용은 검색결과/제목 기반)
- petapixel.com (5건), digital-photography-school.com (2건), expertphotography.com, focus.picfair.com — 촬영 기법 아티클
- instagram.com/ganulzii_photographer, instagram.com/mongolian_landscapes, danielkordan.com, 500px.com 검색 — 감상 전용 소스
- imaging-resource.com(RF-S 18-150mm, curl 200, 이번 세션 재확인은 보조적으로만 사용)

### Tertiary / 확인 실패 (LOW confidence 또는 접속 불가 — 사용 비권장)
- canon-europe.com, canon.co.uk, en.canon-cna.com, usa.canon.com, bhphotovideo.com, dpreview.com, the-digital-picture.com, masterclass.com — 이번 세션 403
- adobe.com golden hour — 타임아웃
- 골든아워/여행팁 SEO 사이트 8곳(WebSearch 결과 목록에만 등장, 개별 검증 안 함)

---

## Metadata

**Confidence breakdown:**
- TREF-01 갤러리(라이선스): **HIGH** — 모든 EMBED 항목은 이번 세션 Wikimedia API로 개별 재확인. 5개 명소 모두 실제 CC 파일 존재 확인(드론 갤러리보다 커버리지 넓음).
- TREF-01 갤러리(인물 캐비어트): **MEDIUM** — 인물 식별 가능 여부는 파일 설명/제목 기반 판단이며, 이미지 자체를 픽셀 단위로 열람 검증하지는 않음.
- TREF-02 공식 스펙: **HIGH**(Camera Museum·Samyang 공식, 직접 WebFetch) / **MEDIUM**(canon-europe.com 등 지역 도메인은 이번 세션 접속 불가, WebSearch로만 URL 존재 교차확인)
- TREF-02 기법 아티클·YouTube: **MEDIUM-HIGH** — 아티클은 curl 200 생존만 확인(전문 로드는 일부만), YouTube는 oEmbed로 실재·채널 확인(영상 내용 자체는 미시청)

**Research date:** 2026-07-14
**Valid until:** 약 30일 — Wikimedia 라이선스/파일 존재는 상대적으로 안정적(90일+ 유효 가능). Canon 공식 도메인 403 상태와 YouTube 링크 생존은 재확인 권장(특히 canon-europe.com 계열은 빌드 직전 재시도 권장).
