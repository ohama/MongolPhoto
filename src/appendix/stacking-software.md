# 천체사진 이미지 스태킹 소프트웨어

밤하늘 사진은 **여러 장을 겹쳐(스태킹) 노이즈를 줄이고 미약한 신호를 살리는** 것이 화질의 핵심입니다. 무엇을 찍느냐(넓은 은하수·풍경 / 망원경 딥스카이 / 행성)에 따라 쓰는 도구가 갈립니다. 이 문서는 그 스태킹 소프트웨어를 한곳에 정리합니다.

## 스태킹이란 · 왜 하나

- 같은 구도로 찍은 **여러 장을 정렬해 평균**하면, 무작위인 노이즈는 상쇄되고 일정한 신호(별·은하수)는 남아 **화질이 크게 좋아집니다.**
- 밤하늘은 지구 자전으로 별이 조금씩 움직이므로, 그냥 겹치면 별이 뭉갭니다. 그래서 스태커가 **별을 정렬해**(레지스트레이션) 겹치고, 전경(지형)은 따로 고정합니다.
- 노출을 여러 장으로 나눠 쌓는 것이라, **총 노출 시간을 늘리는** 효과도 있습니다.

## 무엇을 찍느냐에 따라 (용도별)

- **넓은 은하수·풍경(nightscape) — 이 트립이 해당** → Sequator, Starry Landscape Stacker, Affinity Photo(데스크톱).
- **별궤적·유성 합성** → StarStaX(라이튼 합성).
- **망원경 딥스카이**(은하·성운) → DeepSkyStacker, Siril, PixInsight, Astro Pixel Processor. *(광각 은하수인 이 트립엔 불필요.)*
- **행성** → Autostakkert!. *(이 트립엔 불필요.)*
- **소수 장 수동 합성** → Photoshop, Affinity Photo(데스크톱).

## 이 트립에 맞는 것 (은하수·풍경·유성)

| 도구 | 비용 | 플랫폼 | 용도 |
|---|---|---|---|
| **Sequator** | 무료 | Windows | 은하수+풍경 별 정렬 스택. 초보자에게 쉬움 |
| **Starry Landscape Stacker** | 유료 | macOS | 은하수+풍경. Mac용 대표 |
| **StarStaX** | 무료 | Windows·macOS | 별궤적·유성 **라이튼 합성 + 갭필링** |
| **Affinity Photo (데스크톱)** | 무료 | Windows·macOS | 천체 스태킹 기능 내장 + 레이어 합성 |
| **Siril** | 무료(오픈소스) | Win·Mac·Linux | 고급·자동화(스크립트). 학습곡선 있음 |
| **Adobe Photoshop** | 유료(구독) | Windows·macOS | 소수 장 수동 스택·정밀 합성 |

> 요금·플랫폼은 자주 바뀝니다. **Sequator**는 공식 기준 Windows 전용이며(일부 자료는 Mac도 언급 — 재확인), 가격·구성은 각 공식 페이지에서 확인하세요.

## 참고 — 딥스카이·행성용 (이 트립엔 불필요)

망원경으로 은하·성운·행성을 찍을 때 쓰는 도구입니다. 이 여행의 **광각 은하수·풍경에는 쓰지 않습니다.**

- **DeepSkyStacker**(무료·Windows) — 딥스카이 스택의 고전.
- **Siril**(무료) — 딥스카이에도 씀(위 표에도 포함).
- **PixInsight**(유료) — 전문가용, 최대한의 제어와 복잡도.
- **Astro Pixel Processor**(유료) — 딥스카이·모자이크.
- **Autostakkert!**(무료·Windows) — 행성 영상 프레임 스택.

## iPad는 되나

**별을 정렬해 겹치는 천체 스태킹은 iPad에서 안 됩니다 — 데스크톱(PC/Mac) 전용입니다.** iPad의 스택(Affinity 등)은 노출 병합·노이즈 평균·개체 제거·장노출 효과 같은 **일반 스택**뿐이라 밤하늘의 별 움직임을 정렬하지 못합니다. 그래서 현지 iPad(Lightroom 모바일·Affinity Photo)는 RAW 현상·단일 컷 보정·가벼운 라이튼 합성까지만 하고, **별 정렬 스태킹은 귀가 후 PC/Mac에서** 합니다.

## 어떻게 스태킹하나 (기본 흐름)

1. 현장에서 **같은 구도로 10~20장 이상**을 연속 촬영합니다(삼각대 고정, 초점·화이트밸런스 수동 고정). 선택적으로 렌즈 캡을 씌운 **다크프레임** 몇 장.
2. 스태커에 전부 불러와 **하늘/전경을 분리** — 하늘은 별을 정렬하고, 전경(지형)은 고정합니다.
3. 정렬·평균해 노이즈가 줄어든 **한 장**(보통 TIFF/DNG)을 얻습니다.
4. Lightroom·darktable 등에서 **현상·은하수 강조**로 마무리합니다.

## 더 읽기

- **AstroBackyard, "Astrophotography Image Stacking Software"** — 도구별 비교·추천(딥스카이 포함): [astrobackyard.com](https://astrobackyard.com/astrophotography-image-stacking-software/)
- 이 책의 전체 소프트웨어 표(촬영계획·현상·파노라마·타임랩스 포함): [소프트웨어·앱 참고 자료 모음](../3-astro/7-references/software-references.md)
