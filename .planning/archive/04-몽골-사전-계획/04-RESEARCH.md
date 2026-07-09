# Phase 4: 몽골 사전 계획 - Research

**Researched:** 2026-07-09
**Domain:** Site-specific astronomical/geographic data lookup (moon, galactic core, GPS) + mdBook content authoring (Korean, per-day field-plan chapters)
**Confidence:** HIGH (moon/twilight data — official USNO API + NOAA-algorithm API, cross-validated) / MEDIUM (GPS coordinates — cross-validated against 2+ independent sources per site, but none are survey-grade) / MEDIUM (galactic-core azimuth/altitude/transit-time — hand-derived from standard formulas, not pulled from PhotoPills/Stellarium directly since both were unreachable in this research environment) / HIGH (chapter structure — directly extends existing, already-executed project patterns)

## Summary

This phase's content is almost entirely **data**, not technique — the shooting technique (M-mode, focusing, 500/NPF rule, RAW, field workflow) is already fully written in `02-fundamentals/` and should be referenced, not repeated. What Phase 4 adds is the **specific facts** a reader needs to plan each of the 5 Mongolia nights: where each site is (GPS), what the moon is doing, where/how high the galactic core sits, and what's worth photographing at each location.

The single most important finding: **all 4 shooting nights (8/13–8/16) are moon-free during the entire astronomically-dark window.** This isn't just "new moon nearby" — live ephemeris data confirms the young crescent moon (0%→3%→8%→14% illumination across the 4 nights) sets **before astronomical twilight ends** every single night, with margins ranging from 19 minutes (8/13, trivial since it's new-moon day) up to ~46 minutes (8/15). By the time the sky is fully dark (~21:58–22:05 local each night), there is zero moon interference on any of the 4 nights. This upgrades the qualitative claim already in `FEATURES.md`/`finding-the-milkyway.md` ("신월 직후라 유리") into per-night, per-site quantified numbers the day chapters can state directly.

The second major finding, which the existing project research did **not** surface: at this latitude band (43.49°–46.38°N), the **galactic core's maximum altitude at transit is only ~15–18°** — it never climbs high in the sky, no matter how "vertical" its orientation becomes late in the night. This has a direct, actionable consequence for one specific site: **욜링암(Yolyn Am)'s gorge is deep and extremely narrow** (walls up to 200m high, "only two people can pass" in places) — a core that peaks at ~17.5° altitude will very likely be blocked by the canyon walls unless shot from the open entrance/approach area rather than deep inside the slot. This should be flagged prominently in Day 3's plan, with a concrete recommendation (shoot from the wider approach/camp area, not the inner gorge).

Third, this phase's write order is **fully unblocked**: none of it needs a checkpoint or user-supplied field data (unlike Phase 2/3's practice logs) — it is 100% derivable now from public astronomical/geographic data plus the already-confirmed 1안 itinerary. The planner should treat this as straight-through authoring work, not a checkpoint-gated plan.

**Primary recommendation:** One phase, content built as `src/04-mongolia/overview.md` (moon/core/GPS reference table + general timing method) + `day-1-0813.md` through `day-5-0817.md` (per-night target/timing/composition plan using the two-pass field-day template already designed in `ARCHITECTURE.md` — 사전 계획 section filled now, 촬영 결과 section left as a placeholder for Phase 5). Flip the 5 draft links in `SUMMARY.md`'s "3부 · 몽골" section to point at these real files. Day 5 (8/17, 공항 출국) gets a minimal page — it's a travel/departure day with no night-shoot plan in the confirmed itinerary.

## Content Data (the core deliverable — planner should transcribe these directly into chapters)

### 1. Site GPS coordinates + elevation

| # | 장소 | 좌표 (decimal) | 위도대 | 확인 방법 / 신뢰도 | 비고 |
|---|------|-----------------|--------|---------------------|------|
| Day 1 | 차강소브라가 (Tsagaan Suvarga, White Stupa) | **44.577°N, 105.717°E** | 44.6°N | MEDIUM-HIGH — cross-checked against a nearby petroglyph site 17km south (44.453°N, 105.791°E) and textual description ("Ulziit 읍 남동쪽, UB–Umnugovi 간선도로에서 동쪽 30km, UB에서 남쪽 420km") — all mutually consistent | **⚠️ 함정:** 검색 시 가장 자주 나오는 좌표(44.03°N, 108.35°E)는 **다른 곳**이다 — 그건 도르노고비(Dornogovi)에 있는 동명의 "Tsagaan Suvarga 구리광산"이며, Wikidata가 그 광산 좌표를 43.855°N/108.330°E로 별도 확정해 이 혼동을 확인해줌. 관광지(하얀 스투파 절벽)는 Dundgovi주 Ulziit 솜에 있다. |
| Day 2 | 홍고린엘스 (Khongoryn Els) | **43.50°N, 103.17°E** (대표점, Wikidata 반올림 좌표) | 43.5°N | MEDIUM — 사구지대 자체가 동서로 약 100km 뻗어있어 이 좌표는 "지역 대표점"이지 정확한 캠프 위치가 아님. Dalanzadgad에서 서쪽으로 약 180km. | 실제 캠프/전망 지점은 현지 도착 후 GPS로 재확인 필요 |
| Day 3 | 욜링암 (Yolyn Am) | **43.4931°N, 104.0838°E** | 43.5°N | HIGH — 두 개의 독립 소스(latlong.net, Wikipedia 인포박스)가 소수점 4자리까지 일치 | Gobi Gurvansaikhan 국립공원 내, Zuun Saikhanii Nuruu(동쪽 미인) 산맥 협곡 |
| Day 4 | 바가가즈링 촐로 (Baga Gazriin Chuluu) | **46.383°N, 105.667°E** | 46.4°N | HIGH — Wikidata(46°23'N 105°40'E)와 getamap.net이 동일 값으로 교차 확인됨 | Delgertsogt 솜 북서쪽 37km, UB에서 남쪽 230km |

**위도대:** 43.49°N ~ 46.38°N — 약 3° 차이. 이 차이가 은하수 코어 최대 고도에 직접 영향을 준다(아래 3번 참고) — 바가가즈링 촐로가 가장 북쪽이라 코어가 가장 낮게 뜬다.

**고도(해발):**
| 장소 | 해발고도 | 신뢰도 |
|------|----------|--------|
| 차강소브라가 | 절벽 자체 비고(比高) 30~60m, 길이 400m, 동향 거의 수직 절벽 — 대지 자체의 해발고도는 소스에서 확인 못함 | 절벽 규모는 HIGH, 해발고도는 미확인(LOW) — 책에는 "고비 중부 고원" 정도로만 서술 권장 |
| 홍고린엘스 | 약 1,448m (maplogs.com 단일 소스) | MEDIUM — 사구 자체 높이는 80~300m(정상까지), 사구지대 길이 약 100km, 폭 6~12km |
| 욜링암 | 약 2,200~2,800m (소스마다 2,250/2,400/2,500/2,800m로 편차) | MEDIUM — 정확한 지점(협곡 입구 vs 안쪽)에 따라 갈리는 것으로 보임. 협곡 벽 최대 높이 200m, 길이 8km, 가장 좁은 곳은 "두 사람이 겨우 지나갈" 정도 — 이 폭 정보는 HIGH confidence(다수 소스 일치) |
| 바가가즈링 촐로 | 주변 평지 대비 화강암 지대 최고봉(Takhilgat) 1,768m, 지역 평균 약 1,602m(maplogs) | MEDIUM-HIGH |

### 2. 달 데이터 (8/13~8/16, 각 밤의 실제 촬영 장소 좌표 기준)

**신월(New Moon): 2026-08-13 01:37 현지시각(UTC+8)** — 8/12 개기일식(최대식 UTC 17:45:53 = 현지 8/13 01:45)과 사실상 동시. 소스: US Naval Observatory 공식 API (`aa.usno.navy.mil/api/rstt/oneday`), FEATURES.md의 기존 서술과 일치.

전 항목 현지시각(UTC+8), 각 밤의 실제 야영/촬영 장소 좌표로 계산 (출처: USNO API + sunrise-sunset.org 표준 NOAA 공식 API, 교차검증):

| 날짜 | 장소 | 일몰 | 천문박명 종료(완전 암흑 시작) | 월출 | 월몰 | 조도(%) | 달 상황 |
|------|------|------|-------------------------------|------|------|---------|---------|
| 8/13 | 차강소브라가 | 20:06 | **~22:02** | 06:15 | 20:25 | **0%** (신월 당일) | 사실상 달 없음. 일몰 19분 후 월몰 — 무의미한 수준 |
| 8/14 | 홍고린엘스 | 20:13 | **~22:04** | 07:45 | 20:56 | 3% | 초승달이 일몰 후 43분간만 서쪽 저고도에 잠깐 보이다 짐. 완전 암흑(22:04) 전에 이미 하늘에서 사라짐 |
| 8/15 | 욜링암 | 20:08 | **~21:58** | 08:55 | 21:12 | 8% | 일몰 64분 후 월몰, 완전 암흑보다 46분 먼저 짐 |
| 8/16 | 바가가즈링 촐로 | 20:06 | **~22:05** | 10:02 | 21:23 | 14% | 일몰 77분 후 월몰, 완전 암흑보다 42분 먼저 짐 |

**핵심 결론 — 4박 전부, 천문박명 종료 이후(=완전히 어두워진 이후) 시간대는 100% 달빛 없음.** 얇은 초승달이 매일 조금씩 두꺼워지지만(0→3→8→14%), 매번 일몰 직후 서쪽 저고도에서 금방 져버려서 실질적인 촬영 시간대(22시 이후)에는 영향이 없다. 이는 `finding-the-milkyway.md`에 이미 쓰인 정성적 서술("신월 직후 얇은 초승달이 일찍 짐")을 밤·장소별로 정량화한 것 — 재도출 아님, 그대로 강화만.

**천문박명(sunset→완전암흑) 소요시간이 약 1시간 49분~1시간 57분**으로 꽤 긴 편인데, 이는 이 위도대(43~46°N)가 8월에 아직 "백야에 가까운 긴 여름 박명"의 영향권에 있기 때문 — 위도가 높을수록(바가가즈링 촐로 46.4°N) 박명이 더 길다(1h57m vs 차강소브라가/욜링암의 1h49~53m). 일반적인 "박명은 1시간" 통설보다 길다는 점을 유의.

Day 5(8/17)는 확정 일정상 "공항(출국)" — 이동/출국일이라 별도 야간 촬영 계획 대상이 아님. 상세 달/코어 데이터 생략, 페이지는 최소 분량(이동 로지스틱스 + 4박 여정 마무리 소감 자리)으로 충분.

### 3. 은하수 코어 위치/고도 — 위도대 공통 계산 (⚠️ 손계산, MEDIUM 신뢰도)

PhotoPills/Stellarium 앱에 직접 접근할 수 없었던 이전 리서치의 403 문제는 이번에도 재현됨(timeanddate.com도 이번 조사에서 403). 대신 **은하수 코어(궁수자리 A*, 적경≈17h45m40s, 적위≈-29°00')의 표준 좌표로 직접 계산**했다. 계산 방법과 결과 모두 문서화하니, 계획서에는 이 숫자를 "추정치"로 쓰고 "PhotoPills로 현장 재확인" 문구를 반드시 붙일 것 — 이는 이미 `02-fundamentals/finding-the-milkyway.md`가 쓰는 것과 같은 패턴(앱으로 정확한 시각·방위각·고도 확인)이라 톤도 일치한다.

**코어 최대 고도(자오선 통과 시, 정남쪽) = 90° − 위도 − 29°** (적위가 남쪽인 천체의 남중고도 공식):

| 장소 | 위도 | 코어 최대 고도(계산치) |
|------|------|------------------------|
| 차강소브라가 | 44.58°N | 약 **16.4°** |
| 홍고린엘스 / 욜링암 | 43.50°N | 약 **17.5°** |
| 바가가즈링 촐로 | 46.38°N | 약 **14.6°** |

→ **이 위도대에서는 코어가 아무리 밤이 깊어도 지평선에서 약 15~18° 이상 올라가지 않는다.** `finding-the-milkyway.md`에 이미 있는 "코어가 점점 수직에 가깝게 선다"는 서술은 **방향(기울기)**에 대한 것이고 **고도(높이)** 자체는 낮게 유지된다는 점을 헷갈리지 않게 명시해야 한다 — 안 그러면 독자가 "코어가 하늘 높이 뜬다"고 오해해 전경(능선·구조물)이 시야를 가리는 구도를 짜게 될 위험이 있다.

**코어 자오선 통과(남중, 최고점) 시각 — 손계산 (태양 적경 + 시간각 차이 방식):**

| 날짜 | 장소 | 코어 남중(추정) | 천문박명 종료 | 관계 |
|------|------|-------------------|----------------|------|
| 8/13 | 차강소브라가 | 약 21:12 | 22:02 | 완전 암흑 **전에** 남중 통과 |
| 8/14 | 홍고린엘스 | 약 21:08 | 22:04 | 완전 암흑 **전에** 남중 통과 |
| 8/15 | 욜링암 | 약 21:04 | 21:58 | 완전 암흑 **전에** 남중 통과 |
| 8/16 | 바가가즈링 촐로 | 약 21:00 | 22:05 | 완전 암흑 **전에** 남중 통과 |

(매일 약 4분씩 당겨지는 항성일 효과 반영 — 손계산이라 ±10~15분 오차 감안)

**실전 함의:** 코어가 남중(최고 고도 도달)하는 시각이 하늘이 완전히 어두워지기(천문박명 종료) 전이다. 즉 완전 암흑이 시작될 무렵(22시경)엔 이미 코어가 정점을 살짝 지나 SSW로 기울기 시작한 상태 — 하지만 남중 근처는 고도 변화가 완만하므로(포물선 정상 부근) 22:00~23:30 정도까지는 여전히 코어가 상당히 높은 상태를 유지한다고 볼 수 있다. **권장 촬영 시간대: 천문박명 종료(약 22:00) 직후 ~ 새벽 1~2시** — 이후엔 코어가 점점 서쪽·저고도로 가라앉는다. **방향은 완전 암흑 시점 기준 정남~남남서(SSW), 밤이 깊어질수록 남서(SW)로 이동.**

### 4. 장소별 구도 추천 (수집한 지형 특징 기반)

| 장소 | 지형 특징 | 촬영 시사점 |
|------|-----------|-------------|
| **차강소브라가** | 동향(東向) 거의 수직 절벽, 높이 30~60m, 길이 400m — 퇴적층이 겹겹이 드러난 실루엣 | 절벽이 동쪽을 향하므로 절벽 자체를 정면으로 채우면서 코어(남~남서쪽)를 같은 프레임에 넣으려면 절벽의 남쪽 끝단이나 절벽선을 비스듬히 걸치는 위치 선정이 필요 — 정확한 각도는 현장에서 PhotoPills AR로 재확인. 절벽 능선을 전경 실루엣/리딩라인으로 활용 |
| **홍고린엘스** | 사구 자체 높이 80~300m, 사구지대 100km 길이의 열린 사막 지형, "노래하는 모래"로 유명(바람 강함 시사) | 시야를 가리는 지형이 거의 없어 저고도(15~18°) 코어를 담기에 가장 유리한 장소. 사구 능선을 리딩라인으로 코어까지 이어지는 구도, 능선 위 사람 실루엣도 좋은 소재. **바람·모래 먼지에 렌즈/센서 노출 주의**(가방·렌즈 커버 권장 — 이미 accessories.md의 방한/방진 팁과 연결) |
| **욜링암** | 좁고 깊은 협곡, 벽 최대 높이 200m, 가장 좁은 구간은 "두 사람이 겨우 지나갈" 정도, 길이 8km | **⚠️ 핵심 리스크:** 코어 최대 고도가 약 17.5°인데 협곡 벽이 최대 200m 높이라면, 협곡 안쪽 깊은 곳에서는 코어가 벽에 가려 아예 안 보일 가능성이 높다. **협곡 입구/진입로 쪽 트인 구간에서 촬영을 권장**하고, 협곡 깊숙한 곳은 은하수 코어 촬영 대상이 아니라 낮 시간 트레킹·얼음벌판 촬영 소재로 안내하는 것이 안전. Day 3 페이지에 이 트레이드오프를 명시적으로 적어야 함 |
| **바가가즈링 촐로** | 화강암 바위 지대 300km², 최고봉 1,768m, 평지 대비 약 200m 융기, 아치·동굴 등 다양한 바위 지형 | 코어 최대 고도가 4곳 중 가장 낮음(14.6°) — 남쪽 시야가 트인 바위 군락을 골라야 함(낮은 바위 사이에 끼면 코어가 가려짐). 화강암 바위 실루엣을 전경으로 활용하는 구도가 풍부(아치·기암) |

## Architecture Patterns

### Chapter file plan (confirms `ARCHITECTURE.md`'s prior recommendation — no change needed)

```
src/04-mongolia/
├── overview.md          # 여행 개요: 위 1~3번 데이터를 표로 정리 — 신월/전체 일정 달 상황, 코어 방향·고도 공식 설명, 4개 장소 GPS 표
├── day-1-0813.md        # 차강소브라가 — 사전 계획만 (결과는 Phase 5)
├── day-2-0814.md        # 홍고린엘스
├── day-3-0815.md        # 욜링암 (협곡 리스크 명시)
├── day-4-0816.md        # 바가가즈링 촐로
└── day-5-0817.md        # 공항/출국 — 최소 분량, 야간 촬영 계획 없음
```

이 폴더는 아직 존재하지 않음(현재 `src/`는 `03-practice/`까지만 생성됨) — Phase 4가 처음 만든다. 번호 체계(`04-`)는 `ARCHITECTURE.md`가 이미 설계했고 `01-gear/02-fundamentals/03-practice`와 일관됨.

`src/images/mongolia/{overview,day-1,day-2,day-3,day-4,day-5}/` 폴더도 `.gitkeep`으로 미리 만들어 두되(01-04 practice 템플릿 패턴과 동일), **실제 이미지 파일은 이 phase에서 생성하지 않음** — 사전 계획 단계라 사진이 없다.

### SUMMARY.md flip

현재:
```markdown
# 3부 · 몽골 (8/13 ~ 8/17)

- [여행 개요]()
- [Day 1 · 8/13]()
- [Day 2 · 8/14]()
- [Day 3 · 8/15]()
- [Day 4 · 8/16]()
- [Day 5 · 8/17]()
```
6개 모두 빈 draft 링크(파일 없음 → mdBook에서 회색 비활성 처리). Phase 4 완료 시 아래로 flip:
```markdown
# 3부 · 몽골 (8/13 ~ 8/17)

- [여행 개요](04-mongolia/overview.md)
- [Day 1 · 8/13](04-mongolia/day-1-0813.md)
- [Day 2 · 8/14](04-mongolia/day-2-0814.md)
- [Day 3 · 8/15](04-mongolia/day-3-0815.md)
- [Day 4 · 8/16](04-mongolia/day-4-0816.md)
- [Day 5 · 8/17](04-mongolia/day-5-0817.md)
```

### Two-pass field-day template (already designed in `ARCHITECTURE.md` Pattern 2 — reuse verbatim, don't redesign)

```markdown
# Day N — [날짜] · [지역/장소]

> 🔵 촬영 전 — 사전 계획만 작성됨 (실제 결과는 여행 후 Phase 5에서 추가 예정)

## 사전 계획

### 위치 / GPS
[좌표 + 참고 소스]

### 그날 밤 하늘 상황
- 일몰 / 천문박명 종료(완전 암흑 시작)
- 월출·월몰 / 조도(%) — 달 영향 여부
- 은하수 코어 방향(방위각)·고도, 남중 예상 시각
- **PhotoPills로 현장 재확인 권장** (계산치이므로)

### 이날의 추천 피사체 · 구도
[장소별 지형 특징 → 전경 아이디어]

### 촬영 타임라인 (예시)
- 도착~일몰: 구도 스카우팅(밝을 때 리허설)
- 일몰~천문박명 종료: 세팅 준비, 초점 확인
- 천문박명 종료 이후: 본 촬영 시작
- (권장 종료 시각): 철수/휴식

## 촬영 결과 (여행 후 작성 — Phase 5)
*(비워둠)*
```

이 템플릿은 `03-practice/template.md`가 이미 확립한 "복사해서 채우는" 관행과 같은 톤을 유지하되, 연습 로그와 달리 **사전 계획 섹션은 여행 전에 이미 다 채워져야 한다**는 점이 다르다(핵심 차별점).

## Don't Hand-Roll

| 문제 | 하지 말 것 | 대신 할 것 | 이유 |
|------|-----------|-----------|------|
| 정확한 코어 방위각·고도·뜨는 시각 | 이 문서의 손계산 수치를 "확정값"처럼 book에 못박기 | 손계산치를 "추정"으로 제시하고 "PhotoPills Night AR/Planner로 촬영 전 재확인" 문구를 각 Day 페이지에 명시 | 손계산은 ±10~15분, 각도 1~2° 오차 가능성 있음; 이미 `finding-the-milkyway.md`가 확립한 "앱으로 확인" 패턴과 일관되게 가는 것이 안전 |
| 촬영지 정확한 캠프 GPS | 이 리서치의 "대표 좌표"(특히 홍고린엘스)를 정밀 좌표인 것처럼 서술 | "대략적인 위치"로 명시하고, 정확한 캠프 지점은 현지 도착 시 GPS로 재확인하라고 안내 | 홍고린엘스는 100km 뻗은 사구지대라 대표점과 실제 캠프 위치가 수 km~수십 km 차이날 수 있음 |
| 코어 남중 시각 | 매일 정확히 몇 시 몇 분인지 초 단위로 쓰기 | "약 21:00~21:20" 식의 범위로 쓰고 "이후에도 상당 시간 고도가 높게 유지된다"는 정성적 설명 병행 | 남중 부근은 고도 변화가 완만해 정확한 분 단위 숫자보다 "이 구간 전체가 좋다"는 창(window) 개념이 독자에게 더 실용적 |

## Common Pitfalls

### Pitfall 1: 차강소브라가 좌표 오염 (Tsagaan Suvarga 광산 vs 절벽)
**무엇이 잘못되는가:** 웹 검색 1순위 결과 다수(evendo.com 포함)가 "44.0285681, 108.3451668"을 Tsagaan Suvarga 좌표로 제시하지만, 이는 도르노고비(Dornogovi)주에 있는 동명의 **구리광산**이다.
**왜 발생하는가:** 몽골에 "Tsagaan Suvarga"(하얀 스투파)라는 이름이 두 곳에 붙어있고, SEO가 강한 광산 관련 페이지가 검색 상위를 차지함.
**방지법:** 이 문서의 44.577°N, 105.717°E(Dundgovi주 Ulziit 솜, 관광지)를 사용. 계획서 작성자가 추가로 좌표를 검색할 경우 "Dundgovi" 또는 "Ulziit" 키워드가 함께 나오는지 반드시 확인.

### Pitfall 2: "코어가 높이 뜬다"는 오해
**무엇이 잘못되는가:** 8월엔 코어가 "수직으로 선다"는 기존 서술(`finding-the-milkyway.md`)만 읽고, 코어가 하늘 높이(예: 40~50°) 뜬다고 착각해 협곡·바위 같은 높은 전경을 자유롭게 배치하는 구도를 짤 위험.
**왜 발생하는가:** "수직 orientation"과 "고도(altitude)"는 다른 개념인데 구분 없이 서술되면 혼동됨.
**방지법:** Day별 페이지에 "코어 최대 고도 약 15~18°"라는 구체적 숫자를 항상 명시하고, 전경이 그보다 낮게(트인 남쪽 지평선) 배치되어야 함을 강조.

### Pitfall 3: 욜링암을 무비판적으로 "코어 촬영지"로 소개
**무엇이 잘못되는가:** 욜링암을 단순히 "협곡이 멋지다"는 이유로 은하수 코어 촬영 명소처럼 소개하면, 실제 협곡 안에서는 낮은 코어가 가려질 가능성이 높아 독자가 현장에서 낭패를 볼 수 있음.
**방지법:** Day 3 페이지에 "협곡 입구/트인 구간에서 촬영 권장" 문구와 대안(협곡은 낮 트레킹용, 코어 촬영은 캠프 인근 트인 곳)을 명시.

### Pitfall 4: Day 5를 다른 Day와 같은 분량으로 채우려는 시도
**무엇이 잘못되는가:** 템플릿 일관성을 위해 Day 5에도 억지로 달/코어 상세 데이터를 채우면, 확정된 일정("공항 출국")과 맞지 않는 내용이 됨.
**방지법:** Day 5는 템플릿을 축소 적용 — 이동 로지스틱스 + 4박 촬영 여정 마무리 정도로 짧게.

## Plan Structure Recommendation

이 phase는 **체크포인트가 필요 없다** — GPS, 달, 코어 데이터가 모두 이번 리서치로 확보되었고, 사용자 현장 데이터를 기다릴 필요가 없는 "지금 바로 다 쓸 수 있는" 콘텐츠다(로드맵의 "여행 전 작성 가능한 콘텐츠" 설명과 일치). 따라서 gsd-planner는 이 phase를 **checkpoint 없는 순수 저작 작업**으로 설계하면 된다.

**권장: 플랜 1개, Task 3~4개로 구성**
- Task 1: `overview.md` — 위 1~3번 데이터를 표/설명으로 정리(달 위상 전체 요약, 코어 공식·고도 설명, 4곳 GPS 표), `SUMMARY.md`의 "여행 개요" 링크 flip
- Task 2: Day 1(차강소브라가) + Day 2(홍고린엘스) 페이지, 각각 이 문서의 해당 데이터 표를 그대로 옮겨 채움, SUMMARY 링크 flip
- Task 3: Day 3(욜링암, 협곡 리스크 명시) + Day 4(바가가즈링 촐로) 페이지, SUMMARY 링크 flip
- Task 4: Day 5(공항, 최소 분량) + `mdbook build` 검증 + SUMMARY 전체 sync 확인

(Phase 1이 5개 plan으로 쪼갠 것보다 스코프가 작으므로 1개 plan으로 충분해 보이나, 만약 gsd-planner가 리뷰/검증 지점을 더 촘촘히 원하면 "overview+Day1-2" / "Day3-5+SUMMARY" 2-plan 분할도 무리 없음 — 데이터가 이미 다 확보되어 있어 어느 쪽으로 쪼개도 블로킹 이슈는 없음.)

## Open Questions

1. **홍고린엘스 정확한 캠프/전망 지점 GPS**
   - 확보한 것: 사구지대 대표 좌표(43.50°N, 103.17°E), 사구지대가 동서 100km 뻗어있다는 규모 정보
   - 불명확한 것: 실제 여행사가 잡은 캠프 위치가 이 100km 구간 중 정확히 어디인지
   - 권장: overview.md에 "대표 좌표"로 명시하고, 실제 캠프 도착 후 GPS 앱으로 정확한 좌표를 재확인하라는 문구 추가 (Phase 5에서 실좌표로 업데이트 가능)

2. **은하수 코어 방위각·고도·남중시각 — 앱 미검증**
   - 확보한 것: 표준 천구좌표 공식으로 계산한 추정치(위 3번), 천문박명 종료 시각과의 상대적 위치 관계
   - 불명확한 것: PhotoPills/Stellarium이 주는 정밀 수치(대기굴절 보정 등 미반영) — 손계산이라 ±오차 있음
   - 권장: 계획서에는 "추정"으로 명시하고 각 Day 페이지에 "PhotoPills로 현장 재확인" 문구 유지(이미 이 톤을 project가 채택 중)

3. **차강소브라가·홍고린엘스 정확한 해발고도**
   - 확보한 것: 절벽/사구 자체의 비고(比高)는 확실, 욜링암·바가가즈링 촐로의 대략적 해발
   - 불명확한 것: 차강소브라가 대지 자체의 정확한 해발고도, 홍고린엘스는 단일 소스(1,448m)만 확보
   - 권장: 굳이 book에 정밀 숫자로 못박을 필요는 낮음(고도 자체가 MONG-01/02 요구사항의 핵심은 아님) — "고비 고원 약 1,300~1,600m대"처럼 뭉뚱그려도 충분

4. **욜링암 협곡의 정확한 방향(협곡이 어느 방위로 뻗어있는지)**
   - 확보한 것: "좁고 깊다"는 정성적 정보, 벽 높이(최대 200m), 길이(8km)
   - 불명확한 것: 협곡 축이 남북/동서 중 어느 쪽인지 — 이게 코어(남~남서쪽)와 정렬되는지 여부를 좌우함
   - 권장: 정확한 방향 불명이므로 "협곡 안쪽은 방향에 따라 코어가 가려질 수 있다"는 보수적 서술 유지, 입구 쪽 트인 구간을 1차 대안으로 제시

## Sources

### Primary (HIGH confidence)
- [US Naval Observatory — Complete Sun and Moon Data for One Day API](https://aa.usno.navy.mil/api/rstt/oneday) — 신월 시각, 일몰, 월출몰, 조도(%) — 4개 밤 전체 좌표별로 개별 조회
- [sunrise-sunset.org API](https://api.sunrise-sunset.org/json) — 천문박명(astronomical twilight) 시작/종료 — USNO 기본 API가 시민박명까지만 주어서 보완 사용, NOAA 표준 공식 기반
- [Wikidata: Khongoryn Els (Q25047802)](https://www.wikidata.org/wiki/Q25047802) — 좌표 43°30'N 103°10'E
- [Wikidata: Baga Gadzrin Chuluu (Q27704935)](https://www.wikidata.org/wiki/Q27704935) — 좌표 46°23'N 105°40'E
- [Wikidata: Tsagaan Suvarga mine (Q16966164)](https://www.wikidata.org/wiki/Q16966164) — 좌표 43°51'19"N 108°19'49"E (⚠️ 관광지 아닌 광산 — Pitfall 1 참고)
- [Yolyn Am — latlong.net](https://www.latlong.net/place/yolyn-am-mongolia-27453.html) — 43.495899°N, 104.082542°E
- [Yolyn Am — Wikipedia](https://en.wikipedia.org/wiki/Yolyn_Am) — 43°29′35″N 104°05′02″E (교차 검증 일치)
- [Solar eclipse of August 12, 2026 — Wikipedia](https://en.wikipedia.org/wiki/Solar_eclipse_of_August_12,_2026) — 신월/일식 시각 교차검증

### Secondary (MEDIUM confidence)
- Tsagaan Suvarga(White Stupa) 좌표 44.577°N/105.717°E — aroundus.com, 인근 Del Uul 암각화 유적(44.4534°N/105.7907°E, "17km 남쪽")과의 상대 거리로 자체 정합성 확인
- [Elevation of Khongoryn Els — Maplogs](https://elevation.maplogs.com/poi/khongoryn_els_mongolia.448791.html) — 1,448m
- [Elevation of Baga Gadzrin Chuluu — Maplogs](https://elevation.maplogs.com/poi/baga_gadzrin_chuluu_mongolia.85613.html) — 1,602m
- [Tsagaan Suvarga — Koryo Tours 여행 가이드](https://koryogroup.com/blog/tsagaan-suvarga-national-park-white-stupa-mongolia-travel-guide) — 절벽 규모(30-60m×400m), 동향 거의 수직
- [legendtour.mn Tsagaan Suvarga](https://legendtour.mn/mongolia/regions/tsagaan_suvarga.shtml) — Ulziit 읍 남동쪽, 간선도로 동쪽 30km
- [Yolyn Am — Beyond the Bucket List](https://beyondthebucketlist.co/yolyn-am-valley/), [Amicus Mongolia](https://www.amicusmongolia.com/gobi-desert/eagle-valley-yol-yoliin-am-vulture-yolyn) — 협곡 폭·벽 높이·길이 정보
- 은하수 코어(Sgr A*) 표준 좌표(RA 17h45m40s, Dec -29°00') 및 남중고도 공식 — 표준 천문학 공식(교과서 수준), 이 문서에서 위도별로 직접 계산 (⚠️ 앱 미검증, Open Questions #2 참고)

### Tertiary (LOW confidence — 미확인·추가 검증 권장)
- Tsagaan Suvarga 대지 해발고도 — 소스 못 찾음, book에는 뭉뚱그려 서술 권장
- 코어 남중 시각(분 단위) — 손계산, PhotoPills 재확인 전제
- 욜링암 협곡 정확한 방위(축 방향) — 못 찾음, 보수적 서술 권장

## Metadata

**Confidence breakdown:**
- 달/천문박명 데이터: HIGH — 공식 API(USNO) + 표준 알고리즘 API(sunrise-sunset.org) 이중 교차검증, 4개 밤 전부 개별 좌표로 조회
- GPS 좌표: MEDIUM (차강소브라가는 두 개의 서로 다른 동명 장소를 구분해내야 했음 — Pitfall 1), HIGH (욜링암, 바가가즈링 촐로 — 2개 이상 독립 소스 일치)
- 은하수 코어 방위각·고도·시각: MEDIUM — 계산 방법은 표준적이나 앱(PhotoPills/Stellarium) 직접 검증 불가(403), 손계산 오차 감안 필요
- 장소별 구도 추천: MEDIUM-HIGH — 지형 특징(절벽 방향, 협곡 폭, 사구 규모)은 다수 소스로 확인됐으나, 정확한 촬영 포인트 선정은 현장 판단 필요
- 챕터 구조: HIGH — 이미 확정된 `ARCHITECTURE.md` 설계를 그대로 따름, 새로 설계할 부분 없음

**Research date:** 2026-07-09
**Valid until:** 여행일(8/13) 전까지 유효 — 날짜가 고정된 천문 데이터라 만료되지 않음. 단, 코어 방위각·고도는 현장에서 PhotoPills로 반드시 재확인.

---
*Research for: Phase 4 (몽골 사전 계획), MongolPhoto*
*Researched: 2026-07-09*
