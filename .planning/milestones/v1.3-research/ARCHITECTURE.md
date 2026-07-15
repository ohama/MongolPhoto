# ARCHITECTURE — v1.3 사진 보정(전/후) 파트: 이미지 소싱 · 스크린샷 정책 · 폴더 구조

**Domain:** Korean mdBook (몽골 사진 가이드) — 새 "여행 사진 보정" 파트 추가
**Researched:** 2026-07-14
**Milestone:** v1.3 (후속 마일스톤). 저자 몽골 촬영본은 아직 없음(2026-08-13+ 출발). 따라서 출판된 GitHub Pages 책에 **합법적으로 재호스팅(rehost)** 가능한 전/후 예시 이미지가 필요.
**Confidence:** HIGH (라이선스는 각 원문 페이지/Commons API로 직접 검증), 폴더 구조는 MEDIUM(저자 취향 반영 필요).

---

## 0. 핵심 구분: "다운로드/사용 가능" ≠ "책에 재호스팅 가능"

이 연구의 크럭스. 세 가지 서로 다른 권리를 구분해야 함:

| 권리 | 의미 |
|---|---|
| 다운로드/연습 | 내 PC로 받아 라이트룸에서 만져보는 것 |
| 편집(파생물 제작) | 원본을 보정해 새 결과물을 만드는 것 |
| **재호스팅(rehost)** | 원본 또는 편집본을 **공개된 책(GitHub Pages)에 다시 올려 배포**하는 것 ← 이 마일스톤이 요구하는 것 |

전/후 페이지는 **원본(before)과 편집본(after)을 둘 다** 책에 싣는다. 이는 명백한 **재배포**이므로, 단순 "무료 연습용" 조건으로는 부족하고 **재배포/파생물 허용** 라이선스여야 한다.

기존 리서치([practice-raw-samples.md](../../src/08-references/practice-raw-samples.md))는 "다운로드해서 연습"에 초점 → 이 문서는 그보다 **엄격한 재호스팅 기준**으로 각 소스를 재평가한다.

---

## 1. 이미지 소스별 검증 결과 (재호스팅 가능 여부)

### 1-A. Wikimedia Commons — ✅ 재호스팅 가능 (라이선스별 조건 상이)

Commons API(`action=query&prop=imageinfo&iiextmetadatafilter=LicenseShortName`)로 실제 파일의 라이선스를 직접 조회함. 고비/몽골 사막 카테고리에는 **CC0 · CC BY · CC BY-SA가 혼재**한다.

| 라이선스 | 재호스팅 | 편집본(after) 조건 | 비고 |
|---|---|---|---|
| **CC0 / Public Domain** | ✅ YES | 조건 없음 | **최선.** 저작자 표시 의무조차 없음. 편집·재배포 완전 자유 |
| **CC BY (2.0/4.0)** | ✅ YES | 저작자 표시 + "변경함" 명시 | 캡션에 저작자·라이선스·링크·"편집: 저자" 표기 필요 |
| **CC BY-SA (2.0/3.0/4.0)** | ⚠️ YES-단 조건 | **편집본을 동일 CC BY-SA로 배포**해야 함(ShareAlike) | 책 전체가 아니라 **그 이미지 파생물만** CC BY-SA. 관리 번거로움 → 후순위 |

> ShareAlike는 "책 전체가 감염"되는 게 아니라 해당 **이미지의 편집본**에만 적용된다(별도 저작물 판단 시). 그래도 각 이미지마다 라이선스 각주를 달아야 해서, **전/후 실습용으로는 CC0 > CC BY > CC BY-SA 순으로 선호.**

**검증된 CC0 후보(재호스팅 무조건 OK, 사막/고비 풍경):** 촬영자 Bernard Gagnon, Commons가 CC0로 표기.

| File 페이지 | 라이선스 | 해상도 | 장면 |
|---|---|---|---|
| [File:Bayanzag 02.jpg](https://commons.wikimedia.org/wiki/File:Bayanzag_02.jpg) | **CC0** | 4724×3149 | 바양작 붉은 절벽(플레이밍 클리프) — 색온도·대비 전/후에 이상적 |
| [File:Bayanzag 01.jpg](https://commons.wikimedia.org/wiki/File:Bayanzag_01.jpg) | **CC0** | 3483×2488 | 바양작 절벽 |
| [File:Camel at Khongoryn Els 01.jpg](https://commons.wikimedia.org/wiki/File:Camel_at_Khongoryn_Els_01.jpg) | **CC0** | 4838×2895 | 홍고린엘스 모래언덕 + 낙타 — 전경/하늘 노출 전/후에 적합 |
| [File:Camels at Khongoryn Els 02.jpg](https://commons.wikimedia.org/wiki/File:Camels_at_Khongoryn_Els_02.jpg) | **CC0** | 4400×2933 | 사구 능선 |

**검증된 CC BY 후보(저자표시만 하면 OK, 고해상도):**

| File 페이지 | 라이선스 | 해상도 | 장면 |
|---|---|---|---|
| [File:Bayanzag (Flaming Cliffs).jpg](https://commons.wikimedia.org/wiki/File:Bayanzag_(Flaming_Cliffs).jpg) | **CC BY 2.0** (Richard Mortel) | 6000×4000 | 플레이밍 클리프 정면 — 채도/그림자 전/후 |
| [File:A Landscape In Dornogobi.jpg](https://commons.wikimedia.org/wiki/File:A_Landscape_In_Dornogobi.jpg) | **CC BY 4.0** | 4032×3024 | 도르노고비 초원-사막 전이지대 |

> ⚠️ **정직성 주의:** 위 라이선스는 Commons `extmetadata`(API)에서 온 값이다. 책에 넣기 직전 각 **File 페이지에서 라이선스 배지를 육안 재확인**할 것(간혹 업로더 표기 오류·라이선스 변경 이력 존재). Bernard Gagnon은 다수 이미지를 GFDL/CC BY-SA로도 올리므로 **CC0인지 파일별 확인 필수**.

### 1-B. signatureedits.com Free Raw Photos — ✅ 재호스팅 가능 (조건부)

[라이선스 원문](https://www.signatureedits.com/free-raw-license-terms/) 직접 확인. 핵심 문구:

> "an irrevocable, nonexclusive, worldwide copyright license to download, copy, modify, distribute, perform, and use raw files ... **for free, including for commercial purposes**"

- **재호스팅:** ✅ 명시적으로 `distribute` 허용. 저작자 표시 **불필요**("appreciated but not required").
- **금지 조항:** (1) "Signature Edits와 유사·경쟁하는 서비스를 만들려고 사진을 모으는 것" 금지, (2) "의미 있는 편집·창작 요소 추가 없이 단순 리터치/리사이즈만 한 사본 판매" 금지.
- **우리 용도 판정:** 전/후 실습에서는 **실제 보정을 가하므로 "meaningful modification"에 해당**하고, 사진 갤러리를 복제·경쟁하는 것도 아니며, RAW 파일 자체를 되팔지도 않음 → **재호스팅 허용.**
- **RAW 형식:** 대부분 Canon CR2, 일부 DNG/Sony/Panasonic. **RAW 현상 메커니즘(현상 모듈 조작) 시연에 적합.**
- ⚠️ 사막/고비 특정 장면 보장 없음. 커뮤니티 기고본이라 개별 사진의 원저작권은 signatureedits가 라이선스로 커버. 신뢰도 MEDIUM-HIGH.

### 1-C. raw.pixls.us (PIXLS 테스트 세트) — ✅ CC0만 재호스팅 가능 (파일별 확인)

[사이트](https://raw.pixls.us/) 확인. 업로드 선언문:

> "I declare that I own full rights to this file and I hereby release it under the **cc0** license into the public domain."

- **재호스팅:** ✅ CC0 파일은 무조건 재배포·재호스팅 가능.
- ⚠️ **전부 CC0가 아님.** 사이트에 "View only the non-cc0 samples" 필터가 존재 → **일부는 비-CC0**. DB의 `License` 컬럼에서 **파일별로 CC0 여부 확인 필수.**
- **성격:** darktable/RawTherapee 회귀 테스트용 → 컬러차트·일상 피사체 위주, **사막/야간 장면 아님.** RAW 현상 "기계적 조작"만 시연할 때 유용(장면 매력도는 낮음).

### 1-D. Unsplash — ⚠️ 재호스팅 가능(풍경 한정), 단 RAW 아님 · 인물 주의

[Unsplash License](https://unsplash.com/license) 확인:

> "irrevocable, nonexclusive, worldwide copyright license to download, copy, modify, distribute, perform, and use images ... free, including for commercial purposes, without permission from or attributing the photographer or Unsplash."

- **재호스팅:** ✅ `distribute` 허용. **금지:** "유사·경쟁 서비스 복제 목적 수집", "유의미한 수정 없는 판매".
- ⚠️ **RAW 아님(JPEG만).** 전/후 "RAW 현상" 시연에는 부적합, "완성 톤 비교"엔 사용 가능.
- ⚠️ **모델/재산권 릴리스 미포함.** 라이선스는 저작권만 다루고 **식별 가능한 인물/상표에 대한 초상권·재산권 동의는 주지 않음.** → **인물 없는 사막 풍경**만 쓰면 안전. 인물이 있으면 "링크만" 권장.
- 신뢰도 MEDIUM(2021 Getty 인수 후 라이선스 일방 변경 가능성 존재).

### 1-E. Pexels — ⚠️ 재호스팅 가능(책은 스톡 플랫폼 아님), RAW 아님 · 인물 주의

[Pexels License](https://www.pexels.com/license/) 확인. 명시적 금지:

> "Redistribute or sell the photos and videos **on other stock photo or wallpaper platforms**."
> "Identifiable people may not appear in a bad light..." / 상표·트레이드마크 사용 금지 / "unaltered copies" 판매 금지.

- **재호스팅:** ✅ **책은 "다른 스톡/배경화면 플랫폼"이 아니므로** 책 내 게재는 금지 대상 아님. 편집본이면 "unaltered copy" 문제도 없음.
- ⚠️ RAW 아님(JPEG). 인물/상표 주의(사막 풍경만 쓰면 안전).
- 신뢰도 MEDIUM.

### 1-F. 순수 CC0 RAW 저장소 — 사실상 희소

- 검색 결과, **"사막/야간 장면 + CC0 + RAW"를 동시에 만족하는 저장소는 확인되지 않음.**
- raw.pixls.us의 CC0 서브셋이 현실적으로 가장 명확한 CC0 RAW 소스이나 장면이 테스트용.
- 결론: **RAW 현상 시연 = signatureedits(CC-유사 라이선스) / raw.pixls CC0**, **장면 매력 있는 전/후 = Wikimedia CC0 JPEG**로 역할 분담.

---

## 2. 최종 전/후 후보 이미지 shortlist (재호스팅 검증 완료)

우선순위: **CC0 우선(각주 부담 0) → CC BY → signatureedits RAW(현상 시연) → raw.pixls CC0 RAW**.

| # | 소스/파일 | 라이선스 | 재호스팅 | 형식 | 용도(전/후) |
|---|---|---|---|---|---|
| 1 | [Bayanzag 02.jpg](https://commons.wikimedia.org/wiki/File:Bayanzag_02.jpg) (Wikimedia, B.Gagnon) | **CC0** | ✅ 무조건 | JPEG 4724px | 화이트밸런스·대비(붉은 절벽) |
| 2 | [Camel at Khongoryn Els 01.jpg](https://commons.wikimedia.org/wiki/File:Camel_at_Khongoryn_Els_01.jpg) | **CC0** | ✅ 무조건 | JPEG 4838px | 노출·하이라이트/섀도(사구+하늘) |
| 3 | [Camels at Khongoryn Els 02.jpg](https://commons.wikimedia.org/wiki/File:Camels_at_Khongoryn_Els_02.jpg) | **CC0** | ✅ 무조건 | JPEG 4400px | 채도·색감(모래 능선) |
| 4 | [Bayanzag (Flaming Cliffs).jpg](https://commons.wikimedia.org/wiki/File:Bayanzag_(Flaming_Cliffs).jpg) (R.Mortel) | **CC BY 2.0** | ✅ 저자표시 | JPEG 6000px | 그림자 복원·디테일(고해상도) |
| 5 | [signatureedits Free Raw Photos](https://www.signatureedits.com/free-raw-photos/) (사막/풍경 카테고리 선별) | Sig Edits 라이선스(재배포 허용) | ✅ 편집 시 | **RAW(CR2/DNG)** | **RAW 현상 모듈** 기계 조작 시연 |
| 6 | [raw.pixls.us](https://raw.pixls.us/) **CC0 필터** 파일 | **CC0(파일별 확인)** | ✅ CC0만 | **RAW** | RAW 현상 기본기(장면 매력 낮음, 보조) |

**권장 조합:** 전/후 "장면" 3~4장은 **CC0 Wikimedia(#1~3)** 로 확정(각주 부담 0, 몽골 현지 사막이라 책 주제와 완벽 일치) + RAW 현상 절차 시연 1건은 **signatureedits RAW(#5)**. #4는 저자표시 각주만 감수하면 고해상도 보너스.

---

## 3. Lightroom Classic UI 스크린샷 정책

### 정직한 현실

- Adobe 소프트웨어의 **UI(패널·아이콘·레이아웃)는 Adobe 저작권 + 상표**로 보호된다. "무단 재호스팅 자유"가 **아니다.**
- 그러나 Adobe는 **튜토리얼 책/웹사이트/교육 자료에 한해 사전 서면허가 없이** 스크린샷 사용을 **조건부 허용**한다([Adobe Permissions — Images and user guides](https://www.adobe.com/legal/permissions/images-user-guides.html)).

### Adobe 조건(서면허가 없이 쓰려면 전부 충족)

1. 외설·비방·명예훼손 목적 아닐 것.
2. Adobe의 후원·제휴·보증을 **암시하지 말 것.**
3. 저작권 표기 문구 필수: **"Adobe product screenshot(s) reprinted with permission from Adobe."**
4. 스크린샷은 **전체(in their entirety)로** 복제(임의로 한 패널만 오려내 편집 지양).
5. **"box shot"(제품 박스 이미지)는 허가 불요, 그 외 Adobe 제품 이미지는 서면허가 필요** — 스크린샷은 위 조건 충족 시 허가 불요 범주.

### 권장 정책 (이 책)

**자가 출판 GitHub Pages 책에서는 Adobe UI 스크린샷 재호스팅을 기본적으로 지양하고, 다음을 택한다:**

1. **패널·슬라이더를 글/표로 설명** — "현상 모듈 → 기본 패널 → 색온도/노출/대비/하이라이트/섀도/채도" 를 표로 기술(스크린샷 없이도 학습 가능, 저작권 리스크 0).
2. 실제 스크린샷이 필요한 자리에는 **`<!-- 스크린샷: 저자 직접 캡처 예정 (라이트룸 현상 모듈) -->`** 플레이스홀더를 남긴다.
3. **저자가 자신의 PC에서 직접 캡처**하고, 캡처를 쓸 경우 위 Adobe 조건(전체 캡처 + "Adobe product screenshot(s) reprinted with permission from Adobe." 표기 + 무보증 암시)을 **준수**한다. 캡처 속 **사진 콘텐츠는 CC0/자작이어야** 함(Adobe UI 안에 제3자 저작 사진이 보이면 이중 문제).
4. **전/후 결과 이미지 자체(라이트룸 UI 없이 사진만)** 는 Adobe 저작권과 무관 → 위 CC0/CC BY 소스로 자유롭게 게재.

> 즉 "무엇을 어느 슬라이더로 바꾸는가"는 **글+표+전/후 사진**으로 가르치고, Adobe UI 캡처는 **저자 직접 캡처 + 조건 준수**로만 최소 삽입.

---

## 4. 책 구조: 폴더명 + SUMMARY.md 레이아웃

### 4-A. 현재 구조 파악

- 폴더는 **생성 순 번호**(01~12), 파트(부)는 **읽는 순서**로 별개 정렬됨.
  - 1부 여행 → `11-travel`, `12-travel-sites`
  - 2부 드론 → `09-drone`, `10-drone-sites`
  - 3~6부 준비/연습/은하수/후보정 → `01`~`06`
- **기존 "6부 · 후보정" = `05-postprocessing`** (은하수/천체 스태킹·강조). 여기 `before-after.md`가 이미 존재(은하수 전/후).

### 4-B. 폴더명 권장: **`src/13-editing/`**

- `11-travel`, `12-travel-sites`가 이미 사용 → **11 사용 불가.** 다음 미사용 번호 **13**.
- `13-editing` 채택(제안된 `11-travel-editing`은 11 충돌로 부적합).
- 이미지 폴더: **`src/images/travel-editing/`** (before/after 쌍 + `CREDITS.md`로 출처·라이선스·변경사항 기록).

### 4-C. 이름 충돌 회피(후보정 vs 보정)

- 기존 6부 제목 = **"후보정"**(은하수). 신규 파트도 "후보정"이면 혼동.
- **신규 파트 제목: "여행 사진 보정"** — "여행 사진"으로 도메인을 한정해 은하수 "후보정"과 명확히 구별. (대안: "라이트룸 보정 실습")
- 6부 제목은 손대지 않아도 되나, 완전 명료화를 원하면 "6부 · 후보정" → **"6부 · 은하수 후보정"** 으로 바꾸면 두 파트가 완벽히 분리됨(선택).

### 4-D. SUMMARY.md 삽입 위치 & 파트 번호

신규 파트는 **1부(여행) 다음, 2부(드론) 앞** → 새 **"2부"** 가 되고 이후 부 번호가 +1 시프트.

**권장 SUMMARY.md 편집(1부 여행 참고자료 블록 다음에 삽입):**

```markdown
# 2부 · 여행 사진 보정

- [여행 사진 보정 개요](13-editing/index.md)
- [라이트룸 클래식 워크플로 (가져오기·현상 모듈)](13-editing/lightroom-workflow.md)
- [기본 보정: 노출·화이트밸런스·대비 전/후](13-editing/before-after-basics.md)
- [사막 풍경 색감·디테일 전/후](13-editing/before-after-landscape.md)
- [무료 RAW로 현상 연습하기](13-editing/raw-develop-practice.md)
- [예시 이미지 출처·라이선스](13-editing/credits.md)
```

그리고 **이후 부 번호를 한 칸씩 밀어** 표기:

| 현재 | 변경 후 | 폴더(불변) |
|---|---|---|
| 2부 · 드론 사진 | **3부 · 드론 사진** | 09/10 |
| 3부 · 준비하기 | **4부 · 준비하기** | 01/02/03 |
| 4부 · 가기 전 연습 | **5부 · 가기 전 연습** | 03 |
| 5부 · 은하수 명소별 촬영 가이드 | **6부 · 은하수 명소별 촬영 가이드** | 04 |
| 6부 · 후보정 | **7부 · 은하수 후보정** | 05 |

> **저노력 대안:** 부 번호 재정렬이 부담되면, 신규 내용을 **1부의 하위 섹션("여행 사진 보정")** 으로 편입(번호 시프트 0). 단, 전/후 실습은 분량이 커서 **독립 파트(권장)** 가 구조상 더 깔끔.

### 4-E. 신규 파트 챕터 파일(권장 5+1)

| 파일 | 내용 | 이미지 소스 |
|---|---|---|
| `13-editing/index.md` | 왜 보정하나 · 라이트룸 클래식 개요 · 이 파트 사용법 | — |
| `13-editing/lightroom-workflow.md` | 카탈로그·가져오기·현상 모듈 **패널을 글/표로** 설명(스크린샷은 "저자 직접 캡처 예정") | Adobe UI 미재호스팅 |
| `13-editing/before-after-basics.md` | 노출·화이트밸런스·대비 전/후 | CC0 #1, #2 |
| `13-editing/before-after-landscape.md` | 사막 색감·채도·디테일/그림자 전/후 | CC0 #3, CC BY #4 |
| `13-editing/raw-develop-practice.md` | 무료 RAW 받아 따라하기(→ `08-references/practice-raw-samples.md` 링크) | signatureedits/#5, raw.pixls CC0/#6 |
| `13-editing/credits.md` | 전/후 이미지 **출처·저작자·라이선스·변경내용** 표 | 전체 |

---

## 5. 재호스팅 시 준수 사항(캡션/크레딧 규약)

각 전/후 이미지 아래 캡션 + `credits.md` 표에 다음을 남긴다:

- **CC0:** 출처 링크만(의무 아님, 예의상 권장). 예: *"원본: Bayanzag 02 (Wikimedia Commons, CC0) · 편집: 저자"*
- **CC BY:** 저작자 + 라이선스 + File 링크 + **"변경함"** 명시. 예: *"© Richard Mortel, CC BY 2.0, Wikimedia Commons — 노출·색온도 조정(편집: 저자)"*
- **CC BY-SA(가급적 회피):** 위 + **편집본을 CC BY-SA로 배포한다는 각주**.
- **Adobe 스크린샷(쓸 경우):** *"Adobe product screenshot(s) reprinted with permission from Adobe."*

---

## Sources (검증 방법)

- Wikimedia Commons — MediaWiki API `prop=imageinfo` + `extmetadata`(LicenseShortName) 직접 조회, 파일별 라이선스 확인(Gobi Desert / Khongoryn Els / Bayanzag / Landscapes of Mongolia 카테고리). HIGH.
- [signatureedits Free Raw License Terms](https://www.signatureedits.com/free-raw-license-terms/) — 원문 fetch, `distribute` 허용·경쟁서비스 금지·유의미 수정 조건 확인. HIGH.
- [raw.pixls.us](https://raw.pixls.us/) — CC0 선언문 확인, 비-CC0 필터 존재(파일별 확인 필요) 확인. HIGH.
- [Unsplash License](https://unsplash.com/license) — 원문 fetch, distribute 허용·경쟁서비스 금지 확인, 모델릴리스 미포함(인물 주의). MEDIUM(정책 변경 이력).
- [Pexels License](https://www.pexels.com/license/) — 원문 fetch, "다른 스톡/배경화면 플랫폼 재배포 금지"(책은 해당 없음)·인물/상표 주의 확인. MEDIUM.
- Adobe Permissions — [Images and user guides](https://www.adobe.com/legal/permissions/images-user-guides.html) (직접 fetch는 타임아웃, WebSearch 요약으로 조건 확보): 튜토리얼/교육용 서면허가 불요 조건 4항 + "Adobe product screenshot(s) reprinted with permission from Adobe." 표기 + 전체 캡처 + box shot 구분. MEDIUM-HIGH(공식 요약 기반, 최종 인용 전 원문 재확인 권장).
- 기존 프로젝트 리서치 [src/08-references/practice-raw-samples.md](../../src/08-references/practice-raw-samples.md) — "다운로드/연습" 기준의 선행 조사(본 문서는 "재호스팅" 기준으로 재평가).
