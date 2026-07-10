# 소프트웨어 · 앱 참고 자료 모음

**목적**: 이 책(『몽골 은하수 촬영기』)이 촬영 계획부터 후보정까지 실제로 쓰거나 언급하는 앱·소프트웨어를 한곳에 정리한 참고표입니다. 다운로드·플랫폼·가격을 확인할 때 찾아가는 용도입니다.

**작성 방법**: 아래 표의 공식 링크는 이번 조사 세션에 WebFetch로 직접 접속해 실제로 열리고 해당 소프트웨어의 공식 페이지가 맞는지 확인한 것만 실었습니다(일부는 앞서 작성된 `technique-references.md` 조사에서 이미 검증된 링크를 재사용했습니다 — 표에 별도 표시). 접속에 실패했거나(403/타임아웃 등) 검증하지 못한 항목은 표에 URL을 싣지 않고 마지막 "참고 / 미검증" 절에 정직하게 남겨두었습니다. 링크나 가격을 지어내지 않았습니다.

**가격은 반드시 변동됩니다**: 아래 가격은 참고용 근사치이거나 "확인 필요"로 표기했습니다. 구매·구독 전에는 반드시 공식 페이지에서 최신 가격을 다시 확인하세요.

---

## 촬영 계획 · 앱

| 이름 | 플랫폼 | 가격 | 용도 | 공식 링크 |
|---|---|---|---|---|
| PhotoPills | iOS / Android | 유료(일회성 구매, 정확한 가격은 앱스토어에서 확인 필요) | 은하수 코어가 뜨는 시각·방위각·고도 계산, AR 프레이밍, Spot Stars(500/NPF 룰 자동 계산) | 미검증 — 아래 "참고/미검증" 절 참고 |
| Stellarium (데스크톱) | Windows 7+ / macOS 10.13+ / Linux | 무료·오픈소스 | 특정 날짜·위치의 밤하늘 시뮬레이션 | [stellarium.org](https://stellarium.org/) |
| Stellarium (모바일) | iOS / Android | 유료(정확한 가격은 앱스토어에서 확인 필요) | 위와 동일, 모바일용 | 미검증 — 아래 "참고/미검증" 절 참고 |
| Windy | 웹 (앱 여부 별도 확인 권장) | 무료 | 구름·바람 등 기상 레이어 지도 | [windy.com](https://www.windy.com/) |
| Clear Outside | 웹 + iOS 앱(무료) + Android 앱(무료) | 무료 | 천문 관측용 시간대별 구름량·달 위상·천문박명 예보 | [clearoutside.com](https://clearoutside.com/) |
| Light Pollution Map | 웹 | 무료 | VIIRS 위성 자료·SQM 실측값 기반 광해 지도, Bortle 등급 가늠 | [lightpollutionmap.info](https://www.lightpollutionmap.info/) |

**책에서의 쓰임**: [필수 액세서리 & 앱](../src/01-gear/accessories.md), [은하수 찾기와 타이밍](../src/02-fundamentals/finding-the-milkyway.md), [500 / NPF 룰](../src/02-fundamentals/500-npf-rule.md)

**비고**
- Clear Outside는 이번 세션에 공식 사이트를 직접 확인해 "웹 + 무료 iOS/Android 앱" 형태가 맞다는 것과 제작사(First Light Optics)를 확인했습니다.
- Windy는 공식 사이트(windy.com) 접속 자체는 확인했으나, 이번 세션에 가져온 페이지 내용이 헤더뿐이라 모바일 앱 유무·가격까지는 이 페이지만으로 재확인하지 못했습니다. 웹 서비스가 무료라는 점은 이전 조사(`technique-references.md`)에서 이미 확인된 내용을 재사용했습니다.
- Stellarium 데스크톱 버전은 이번 세션에 공식 사이트에서 무료·오픈소스임을 재확인했습니다. 다만 페이지에는 모바일(iOS/Android) 유료 버전에 대한 안내가 없어, 모바일 버전의 존재와 가격은 앱스토어에서 직접 확인하는 편이 정확합니다. (책 본문은 "데스크톱 무료, 모바일 유료 버전 있음"이라고 설명합니다.)
- PhotoPills는 이번 세션에도 photopills.com이 403 Forbidden을 반환해 공식 페이지를 열지 못했습니다 — 아래 미검증 절 참고.

---

## RAW 현상

| 이름 | 플랫폼 | 가격 | 용도 | 공식 링크 |
|---|---|---|---|---|
| darktable | Windows / macOS / Linux | 무료·오픈소스 | RAW 파일 현상(화이트밸런스·노출·대비·채도 등) | [darktable.org](https://www.darktable.org/) |
| Adobe Lightroom | Windows / macOS (+ 모바일) | 구독(가격은 변동 — 공식 페이지 확인 필요) | RAW 파일 현상, 이미 구독 중이면 대안 | 미검증 — 아래 "참고/미검증" 절 참고 |

**책에서의 쓰임**: [RAW 현상 기본](../src/05-postprocessing/raw-develop.md), [밤하늘 타임랩스](../src/06-bonus/timelapse.md)(배치 현상)

**비고**
- 이 책은 darktable을 기본으로 추천하고, Lightroom은 "이미 구독 중이면 그대로 사용"이라는 대안으로 언급합니다.
- Adobe의 공식 제품 페이지(`adobe.com/products/photoshop-lightroom.html`)는 이번 세션에도 60초 타임아웃으로 접속하지 못했습니다. 플랫폼(Windows/macOS/모바일)과 구독제라는 사실은 일반적으로 잘 알려져 있으나, 공식 페이지로 이번 세션에 직접 검증하지는 못했으므로 정확한 현재 가격은 표기하지 않았습니다.

---

## 스태킹 (노이즈 감소)

| 이름 | 플랫폼 | 가격 | 용도 | 공식 링크 |
|---|---|---|---|---|
| Sequator | Windows 전용 | 무료 | 같은 구도로 찍은 여러 프레임을 정렬·평균해 노이즈 감소(하늘/전경 분리 고정 지원) | [sites.google.com/view/sequator](https://sites.google.com/view/sequator/) |
| Starry Landscape Stacker | macOS 전용 | 유료(대략 $40 안팎 — 정확한 가격은 공식 페이지 확인) | 위와 동일, 하늘/땅을 브러시로 마스킹하는 수동 방식 | [sites.google.com/site/starrylandscapestacker](https://sites.google.com/site/starrylandscapestacker/home) |

**책에서의 쓰임**: [스태킹으로 노이즈 줄이기](../src/05-postprocessing/stacking.md)

**비고**
- 두 도구는 OS로 갈립니다 — Windows면 Sequator(무료), Mac이면 Starry Landscape Stacker(유료)가 사실상 선택지입니다.
- 공통 전제: 흔들리지 않는 삼각대, 프레임 간 구도·초점 불변, 수동 화이트밸런스 고정.
- 위 두 링크는 이전 세션(`technique-references.md`)에서 WebFetch로 이미 검증된 공식 페이지를 재사용했습니다.

---

## 파노라마 병합

| 이름 | 플랫폼 | 가격 | 용도 | 공식 링크 |
|---|---|---|---|---|
| Hugin | Windows / macOS / Linux | 무료·오픈소스 | 여러 장을 이어 붙여 넓은 파노라마로 병합 | [hugin.sourceforge.io](https://hugin.sourceforge.io/) |
| Microsoft ICE (Image Composite Editor) | Windows | 무료였음 — **단종(프로젝트 지원 종료, retired)** | 위와 동일 (신규 설치·최신 Windows 동작은 보장되지 않음) | [microsoft.com/.../image-composite-editor](https://www.microsoft.com/en-us/research/project/image-composite-editor/) |
| PTGui | Windows / macOS | 유료(트라이얼 무료, 정확한 가격은 공식 페이지 확인) | 위와 동일, 업계 표준으로 꼽히는 파노라마 병합 도구 | [ptgui.com](https://www.ptgui.com/) |

**책에서의 쓰임**: [은하수 파노라마 촬영·병합](../src/06-bonus/panorama.md)

**비고**
- Microsoft ICE는 공식 페이지에 "이 프로젝트는 지원이 종료되었습니다(retired)"라고 명시되어 있습니다. 책은 무료 대안으로 함께 언급하지만, 새로 설치할 도구로는 Hugin을 우선 고려하는 편이 안전합니다.
- 위 세 링크 모두 이전 세션(`technique-references.md`)에서 이미 검증된 공식 페이지를 재사용했습니다.
- 책 본문은 "Lightroom을 쓰고 있다면 Photomerge도 가능(옵션은 적은 편)"이라고 부가 언급하나, 별도 공식 링크는 두지 않았습니다(위 Lightroom 항목 참고).

---

## 스타트레일 합성

| 이름 | 플랫폼 | 가격 | 용도 | 공식 링크 |
|---|---|---|---|---|
| StarStaX | Windows / macOS | 무료(상업적 이용 포함) | 짧은 노출 수십~수백 장을 Lighten 블렌드로 합성해 별궤적 생성 | [markus-enzweiler.de/software/starstax](https://markus-enzweiler.de/software/starstax/) |

**책에서의 쓰임**: [스타트레일(별궤적) 촬영·합성](../src/06-bonus/star-trails.md)

**비고**
- 이번 세션에 공식 페이지를 재확인한 결과 **Windows·macOS만 지원하며 Linux는 지원하지 않습니다.** ("StarStaX runs on macOS and Windows... not available for Linux" — 공식 페이지 문구 기준)
- 은하수 코어 스태킹에 쓰는 Sequator/Starry Landscape Stacker와는 목적이 다른 별도 도구입니다(짧은 노출 다수를 겹쳐 궤적을 만드는 용도).

---

## 타임랩스

| 이름 | 플랫폼 | 가격 | 용도 | 공식 링크 |
|---|---|---|---|---|
| FFmpeg | Windows / macOS / Linux (크로스플랫폼) | 무료·오픈소스 | 이미지 시퀀스를 영상으로 조립하는 커맨드라인 도구 | [ffmpeg.org](https://ffmpeg.org/) |
| LRTimelapse | Windows / macOS | 유료(가격은 변동 — 공식 페이지 확인 필요) | 디플리커(Visual Deflicker) 및 Lightroom 연동 타임랩스 워크플로 | [lrtimelapse.com](https://lrtimelapse.com/) |

**책에서의 쓰임**: [밤하늘 타임랩스](../src/06-bonus/timelapse.md)

**비고**
- 이번 세션에 ffmpeg.org를 재확인해 크로스플랫폼(Windows/macOS/Linux/Android 등) 지원과 오픈소스 성격을 확인했습니다. 다만 페이지에 라이선스 문구가 명시적으로 보이지 않아 "free and open source"라는 서술은 페이지의 문맥(GSoC 참여 등)에서 간접 확인한 수준입니다.
- LRTimelapse 링크는 이전 세션(`technique-references.md`)에서 이미 검증된 공식 페이지를 재사용했습니다.
- 책은 정교한 디플리커가 필요할 때만 LRTimelapse를 "고려하라"는 선택지로 제시합니다 — 기본은 ffmpeg(무료)로 충분합니다.

---

## 책이 '비추천'한 소프트웨어

| 이름 | 플랫폼 | 가격 | 용도 | 공식 링크 | 비추천 이유 (책 본문) |
|---|---|---|---|---|---|
| DeepSkyStacker | Windows (일반적으로 알려진 사실, 이번 세션 공식 페이지에서 재확인 못함) | 무료로 알려짐 (공식 페이지 미검증) | 딥스카이(망원경) 촬영용 스태킹 도구 | 미검증 — 아래 "참고/미검증" 절 참고 | 전경 블렌딩 기능이 없어, 이 책이 다루는 "은하수 + 지평선" 구도에는 적합하지 않음 |
| Topaz Photo AI | Windows 10/11, macOS 12~15 | **구독 전용**(Personal 플랜 등, 정확한 가격은 공식 페이지 확인 필요 — 이번 세션 확인 시 연 $199부터 시작하는 구독형 플랜만 존재) | AI 기반 샤프닝·노이즈 제거·업스케일 | [topazlabs.com/topaz-photo-ai](https://www.topazlabs.com/topaz-photo-ai) | 2025년 10월부터 구독 전용으로 전환되어(이번 세션에 공식 페이지에서 구독형 플랜만 확인됨), 한 번 쓰고 마는 여행용·가성비 위주 워크플로에는 맞지 않음 |

**책에서의 쓰임**: [스태킹으로 노이즈 줄이기](../src/05-postprocessing/stacking.md) — "추천하지 않는 도구" 절

**비고**
- Topaz Photo AI는 이번 세션에 공식 페이지(topazlabs.com)를 직접 열어 확인한 결과, 일회성 구매 옵션 없이 구독제(Personal/Pro 플랜, 연 단위 결제 시 $199/년 안팎부터)만 제공하고 있어 책의 "구독 전용 전환" 서술과 일치했습니다. 다만 페이지에 "2025년 10월부터"라는 전환 시점 자체가 명시되어 있지는 않았습니다 — 그 시점은 책 본문의 서술을 그대로 옮긴 것이며, 이번 세션에 독립적으로 재확인하지는 못했습니다.
- DeepSkyStacker 공식 페이지(`deepskystacker.free.fr`)는 이번 세션에 세 차례 접속을 시도했으나 매번 도구 오류("Command failed with no output")로 내용을 가져오지 못했습니다. Windows 전용·무료라는 점은 일반적으로 널리 알려진 사실이지만, 공식 페이지로 이번 세션에 직접 검증하지 못했으므로 URL을 표에 신뢰도 있게 싣지 않았습니다.

---

## 참고 / 미검증

이번 세션에 접속·검증에 실패해 표에 공식 링크를 싣지 않은 항목입니다. 링크 자체를 지어내지 않았습니다.

- **PhotoPills** — `photopills.com` 전체가 이번 세션에도 403 Forbidden을 반환해 공식 페이지·앱스토어 링크를 확인하지 못했습니다. (`mongolia-astrophotography-links.md`, `technique-references.md`에서도 동일 현상이 이미 기록되어 있습니다.) 앱 자체의 존재와 기능(코어 방위·고도 계산, Spot Stars = NPF 계산기)은 다른 사이트를 통해 간접적으로만 확인됩니다. 가격은 앱스토어(App Store/Google Play)에서 직접 확인하세요.
- **Stellarium 모바일(유료) 버전** — 공식 사이트(stellarium.org) 자체는 열렸지만 모바일 유료 버전(iOS/Android)에 대한 안내가 그 페이지에 없어, 모바일 버전 존재와 가격은 앱스토어에서 직접 확인해야 합니다.
- **Adobe Lightroom 공식 제품 페이지** — `adobe.com/products/photoshop-lightroom.html`이 이번 세션에도 60초 타임아웃으로 접속 실패했습니다(2회 시도). 구독 가격은 Adobe 공식 사이트에서 직접 확인하세요.
- **DeepSkyStacker 공식 페이지** — `deepskystacker.free.fr`이 이번 세션에 3회 모두 도구 오류로 내용을 가져오지 못했습니다. 브라우저로 직접 열어 확인하는 편이 낫습니다.

**가격 재확인 권장**
- 이 문서의 모든 가격(PTGui, Starry Landscape Stacker, LRTimelapse, Topaz Photo AI, PhotoPills, Lightroom 등)은 조사 시점 기준이거나 정확한 숫자를 확인하지 못한 항목은 "확인 필요"로 남겼습니다. 실제 구매·구독 전에는 반드시 각 공식 페이지에서 최신 가격을 다시 확인하세요.
- 소프트웨어 공식 페이지(darktable, Sequator, Starry Landscape Stacker, Hugin, PTGui, StarStaX, ffmpeg, LRTimelapse, Topaz Photo AI)는 버전이 계속 올라가므로, 실제로 설치하기 전 다운로드 페이지의 최신 버전·시스템 요구사항을 다시 확인하세요.

카메라·렌즈 장비 추천은 [카메라 · 렌즈 추천 목록](../src/07-appendix/camera-lens-picks.md), 학습용 외부 자료는 [촬영 기법별 참고 자료 모음](technique-references.md) 참고.
