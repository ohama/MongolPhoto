---
phase: 08-드론-기초
verified: 2026-07-13T00:00:00Z
status: passed
score: 5/5 must-haves verified
---

# Phase 8: 드론 기초 (09-drone/) Verification Report

**Phase Goal:** 독자가 DJI Mini 5 Pro로 몽골에서 주간·황혼 항공 사진을 안전하고 정직한 규제 이해 위에서 촬영하는 기초를 익힌다.
**Verified:** 2026-07-13
**Status:** passed
**Re-verification:** No — initial verification

## Goal Achievement

### Observable Truths

| # | Truth | Status | Evidence |
|---|-------|--------|----------|
| 1 | index.md에 범위(사진 중심·주간/황혼)와 야간 제외 이유(법+하드웨어) 명시 | ✓ VERIFIED | `src/09-drone/index.md` "이 파트의 범위" (사진 중심, 주간·황혼) + "왜 은하수는 다루지 않을까요" 절에서 법(CAAM 주간만) + 하드웨어(Mini급 최대 노출 ~8초·짐벌 진동·정밀 포커싱 불가) 두 이유 명시 |
| 2 | index.md 초반에 규제 핵심 요약 + CAAM/현장 재확인 안내 + 250g·국립공원 "미확인" 표기 | ✓ VERIFIED | "몽골 드론 규제 — 핵심만 간략히" 절: 주간(일출~일몰)·VLOS·120m(400ft) AGL·공항 4km·사람/가축 동의 없이 금지 5개 항목을 "CAAM 1차 규정 문서로 확인된 사실"로 명시. 이어지는 블록쿼트에 "미확인 항목 — 반드시 재확인하세요" 프레이밍으로 250g 면제·등록비·처리기간·국립공원(욜링암·홍고린엘스 포함) 규정을 CAAM(ops@mcaa.gov.mn, +976-11-285013) 재확인 안내와 함께 명시. 확정 법률 해석·"허가 불필요" 단정 없음 |
| 3 | dji-mini5pro-basics.md(기본 조작) + dji-mini5pro-settings.md(DNG RAW·노출·ND·히스토그램) 존재·충실 | ✓ VERIFIED | basics.md(41줄): 조종기·사전점검 체크리스트(RTH 고도·GPS락·나침반)·이착륙·에티켓. settings.md(43줄): DNG(RAW), f/1.8 고정 조리개(ISO·셔터 2요소), 히스토그램/제브라 하이라이트 보호, AEB, ND8/32/128 선택 규칙. 둘 다 스텁 문구 없음 |
| 4 | composition.md(탑다운·45°·리딩라인·스케일) + flight-and-battery.md(호버·오빗·리빌·배터리/RTH) 존재·충실 | ✓ VERIFIED | composition.md(37줄): 4대 기법 + 정오/골든아워/블루아워 빛 읽기. flight-and-battery.md(33줄): 안정 호버·낮고 천천히·오빗·리빌·시네 모드 + RTH 트리거 20~30%·지형보다 높은 RTH 고도·로스트드론 위험·저온/고온 배터리(수치: 36분/52분, 38°C↑ 15~25%) |
| 5 | gobi-environment.md(바람·모래·저온·원격 충전, field-prep 링크) + drone-postprocessing.md(raw-develop 링크 + 드론 델타) 존재 | ✓ VERIFIED | gobi-environment.md(42줄): 바람(12m/s 생존한계·개인 절반 이하·체감 판단·아침 비행)·모래(단단한 지면·블로어 청소)·저온/고온(field-prep 링크)·원격지 충전(배터리 개수 계획). drone-postprocessing.md(23줄): raw-develop.md 링크 + 델타 3(렌즈 왜곡·먼지 얼룩·낮은 노이즈) |

**Score:** 5/5 truths verified

### Required Artifacts

| Artifact | Expected | Status | Details |
|----------|----------|--------|---------|
| `src/09-drone/index.md` | 범위·야간 제외·규제 요약·미확인 표기 | ✓ VERIFIED | 61줄, SUMMARY.md에 링크됨, 스텁 없음 |
| `src/09-drone/dji-mini5pro-basics.md` | 기본 조작·사전 점검·에티켓 | ✓ VERIFIED | 41줄, SUMMARY.md에 링크됨 |
| `src/09-drone/dji-mini5pro-settings.md` | DNG RAW·노출·ND·히스토그램 | ✓ VERIFIED | 43줄, SUMMARY.md에 링크됨 |
| `src/09-drone/composition.md` | 탑다운·45°·리딩라인·스케일 | ✓ VERIFIED | 37줄, SUMMARY.md에 링크됨 |
| `src/09-drone/flight-and-battery.md` | 호버·오빗·리빌·배터리/RTH | ✓ VERIFIED | 33줄, SUMMARY.md에 링크됨 |
| `src/09-drone/gobi-environment.md` | 바람·모래·저온·원격 충전 | ✓ VERIFIED | 42줄, SUMMARY.md에 링크됨 |
| `src/09-drone/drone-postprocessing.md` | raw-develop 링크 + 드론 델타 | ✓ VERIFIED | 23줄, SUMMARY.md에 링크됨 |

### Key Link Verification

| From | To | Via | Status | Details |
|------|----|----|--------|---------|
| index.md | 08-references/drone-mongolia-regulations.md | 규제 상세 참고 링크 | ✓ WIRED | 링크 존재, 대상 파일 존재(Phase 10 스텁), 빌드 성공 |
| dji-mini5pro-settings.md | 02-fundamentals/raw-and-wb.md | RAW 이론 재사용 링크 | ✓ WIRED | 링크 존재, 이론 재서술 없음("여기서 다시 설명하지 않습니다") |
| flight-and-battery.md | 03-practice/field-prep-and-hazards.md | 저온 배터리 물리 재사용 | ✓ WIRED | 링크 존재, 재서술 없음, 드론 델타만 추가 |
| composition.md | flight-and-battery.md | 안정 비행 전제 링크 | ✓ WIRED | 상호 링크(도입부·마무리) 확인 |
| gobi-environment.md | field-prep-and-hazards.md | 저온 배터리 물리 재사용 | ✓ WIRED | 링크 존재, 재서술 없음 |
| gobi-environment.md | flight-and-battery.md | RTH 재사용 링크 | ✓ WIRED | "이 페이지에서 다루지 않는 것" 절에서 명시적으로 위임 |
| drone-postprocessing.md | 05-postprocessing/raw-develop.md | RAW 현상 워크플로 재사용 | ✓ WIRED | 링크 존재, 슬라이더 레시피 재서술 없음, 델타만 추가 |

### Requirements Coverage

| Requirement | Status | Evidence |
|-------------|--------|----------|
| DRONE-01 | ✓ SATISFIED | index.md 범위·야간 제외(법+하드웨어) |
| DRONE-02 | ✓ SATISFIED | index.md 규제 핵심 요약(확인)·미확인 표기·재확인 안내 |
| DRONE-03 | ✓ SATISFIED | basics.md + settings.md |
| DRONE-04 | ✓ SATISFIED | composition.md + flight-and-battery.md |
| DRONE-05 | ✓ SATISFIED | gobi-environment.md |
| DRONE-06 | ✓ SATISFIED | drone-postprocessing.md |

### Honesty / Regulation Accuracy Check (핵심 검증)

- CAAM Part 101 확인 사실(주간·VLOS·120m/400ft·공항 4km·동의 없이 비행 금지)이 `.planning/research/PITFALLS.md`(line 20-29)의 1차 자료 확인 내용과 정확히 일치. 확신도 있는 사실로 서술됨.
- 250g 면제·등록비·처리기간·국립공원(욜링암·홍고린엘스) 규정 — index.md에서 "미확인 — 출발 전 CAAM/현장 재확인" 프레이밍으로 명확히 태그됨. 확정 법률 해석이나 "허가 불필요" 단정 문구 없음(전체 페이지 재검토 확인).
- DJI 수치 STACK.md 대조: 249.9g(표준, ±4g 공차, 252~253g 보고) ✓ / Plus ~297~299g(250g 초과) ✓ / f/1.8 고정 ✓ / DNG 8192×6144 ✓ / ND8/32/128(PITFALLS.md line 179) ✓ / 풍속 저항 12m/s ✓ / 배터리 36분·52분 ✓ / AEB 12MP 3/5/7장·50MP 3/5장·0.7EV(STACK.md line 30) ✓ / 38°C↑ 15~25% 감소 ✓. 조작된(지어낸) 수치 없음.
- 야간 제외 이유가 법(주간만 비행 허용)과 하드웨어(Mini급 최대 노출 ~8초·짐벌 진동·정밀 포커싱 곤란) 두 가지 모두 index.md에 명시됨.

### Theory Reuse (재서술 금지) Check

- settings.md → raw-and-wb.md: RAW 원리 재서술 없음, "여기서 다시 설명하지 않습니다" 명시 후 링크만.
- flight-and-battery.md, gobi-environment.md → field-prep-and-hazards.md: 저온 배터리 물리 재서술 없음, 드론 델타(보온·38°C 방치)만 추가.
- drone-postprocessing.md → raw-develop.md: 슬라이더 레시피(WB→노출→대비→채도) 재서술 없음, 델타 3가지(왜곡·먼지·노이즈)만.

### Anti-Patterns Found

없음. TODO/FIXME/placeholder/"작성 예정" 문구, 빈 반환, 실제 이미지 마크다운(`![`) 모두 미검출.

### Image Policy Check

- `git status --short src/images` → 변경 없음(실제 사진 파일 미추가).
- `grep -rn '!\[' src/09-drone/*.md` → 매치 없음(실파일 이미지 마크다운 없음). 모든 이미지는 `<!-- 이미지: ... -->` 주석으로만 표기됨.

### Build Verification

- `mdbook build src` → exit 0.
- 빌드 후 `docs/`에 생성된 산출물은 `git checkout -- docs/ && git clean -fd docs/`로 원상 복구하여 클린 상태로 남김.

### Human Verification Required

없음. 모든 must-have가 정적 검사(파일 존재·내용·링크·수치 대조·빌드)로 자동 검증 가능했다.

### Gaps Summary

없음. 3개 플랜(08-01/02/03) 모두 SUMMARY 주장과 실제 코드가 일치하며, 규제 정직성(확인/미확인 구분)·DJI 수치 정확성·이론 재사용(링크만, 재서술 없음)·이미지 정책·mdbook 빌드가 모두 통과했다.

---

*Verified: 2026-07-13*
*Verifier: Claude (gsd-verifier)*
