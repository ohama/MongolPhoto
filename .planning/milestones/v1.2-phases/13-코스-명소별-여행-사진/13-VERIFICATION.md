---
phase: 13-코스-명소별-여행-사진
verified: 2026-07-14T02:56:43Z
status: passed
score: 5/5 must-haves verified
---

# Phase 13: 코스 명소별 여행 사진 Verification Report

**Phase Goal:** 독자가 몽골 코스 명소 5곳에서 지형에 맞는 여행 사진을 무엇을·어떻게·언제 찍을지 안다.
**Verified:** 2026-07-14T02:56:43Z
**Status:** passed
**Re-verification:** No — initial verification

## Goal Achievement

### Observable Truths

| # | Truth | Status | Evidence |
|---|-------|--------|----------|
| 1 | overview.md가 04-mongolia/overview.md GPS 표를 링크로 재사용(좌표 재기입 없이)하고 5곳으로 안내한다 | ✓ VERIFIED | `src/12-travel-sites/overview.md:9,17-19,23-27`. GPS 좌표 숫자(44.577/105.717/43.50/103.17/43.49/104.08/46.383/105.667/44.14/103.73)가 6개 페이지 어디에도 없음(grep 결과 0건). 5곳 목록 링크 모두 존재. |
| 2 | 명소 5곳 각각 지형별 피사체·구도·타이밍 페이지(스텁 아님) | ✓ VERIFIED | 6개 파일 모두 "작성 예정" 문구 0건, H1 유지, 각 파일에 "핵심 피사체·구도"·"빛·타이밍"·"이 지형 특화 주의" 절 존재(23~30줄 분량, 실질 내용). |
| 3 | 차강소브라가=층리·황혼(아침 정면광/저녁 역광·클리핑), 바양작=붉은 절벽·화석 채취금지·탐방로 | ✓ VERIFIED | tsagaan-suvarga.md:17-21(동향→아침 정면광/저녁 역광 실루엣), 25(흰 절벽 클리핑 −0.3~−0.7EV). bayanzag.md:18(골든아워·일몰), 27(화석·암석 채취 금지·지정 탐방로 준수). |
| 4 | 홍고린엘스=사구·낙타(동물복지), 욜링암=협곡(12mm 필수)·얼음(계절성)·수염수리·야크·아이벡스(기회성) | ✓ VERIFIED | khongoryn-els.md:22(연출·강요 포즈 금지, 물러서기). yolyn-am.md:7("12mm는 선택이 아니라 필수"), 22(얼음 "8월엔 대부분 녹아 있을 가능성"), 23-24(수염수리·아이벡스·야크 모두 "보이면/기회성/방목 만나면", "반드시 있다"가 아님 명시). |
| 5 | 바가가즈링 촐로=화강암 기암·최북단 저온·게르 조우 예절, 야생/유목민은 전부 "보이면/기회성" 정직 표기 | ✓ VERIFIED | baga-gazriin-chuluu.md:21(최북단 저온), 22(게르 "조우 가능성(보장은 아닙니다)", 환경인물 예절 링크). 전체 6개 파일에 "반드시 본다/얼음이 있습니다" 류 단정 표현 0건. |

**Score:** 5/5 truths verified

### Required Artifacts

| Artifact | Expected | Status | Details |
|----------|----------|--------|---------|
| `src/12-travel-sites/overview.md` | GPS 표 링크 재사용 + 5곳 안내 허브 | ✓ VERIFIED | 30줄, H1 유지, 좌표 미재기입, 5개 링크 + 3개 이론 링크(camera-settings/composition-and-light/landscape-and-street) 모두 존재 |
| `src/12-travel-sites/tsagaan-suvarga.md` | 층리·황혼 특화 가이드 | ✓ VERIFIED | 30줄. "층리" 6회, 동향/정면광/역광/12mm/50mm/클리핑/−0.3~−0.7EV 모두 존재 |
| `src/12-travel-sites/bayanzag.md` | 붉은 절벽·화석지 예절 특화 가이드 | ✓ VERIFIED | 31줄. 붉은/불타는/삭사울/골든아워/화석/채취 금지/탐방로/12mm/50mm 모두 존재 |
| `src/12-travel-sites/khongoryn-els.md` | 사구·낙타 특화 가이드 | ✓ VERIFIED | 24줄. 사구/능선/낙타/캐러밴/실루엣/발자국/리딩라인/리플/골든아워/방진/동물복지/연출·강요 금지 모두 존재 |
| `src/12-travel-sites/yolyn-am.md` | 협곡·얼음(계절성)·야생(기회성) 특화 가이드 | ✓ VERIFIED | 27줄. 슬롯/협곡/200m/12mm 필수/얼음/계절성/8월/수염수리/아이벡스/야크/방목/보이면/기회성/크롭/국립공원 모두 존재. 단정 표현 0건 |
| `src/12-travel-sites/baga-gazriin-chuluu.md` | 화강암 기암 특화 가이드 | ✓ VERIFIED | 24줄. 화강암/기암/아치/프레임 속 프레임/사원터/질감/골든아워/저각/최북단/저온/게르/조우/가능성/환경인물/동의 모두 존재 |

### Key Link Verification

| From | To | Via | Status | Details |
|------|-----|-----|--------|---------|
| overview.md | 04-mongolia/overview.md | GPS 표 링크 재사용 | ✓ WIRED | 링크 존재(line 9), 대상 파일 존재, 좌표 재기입 없음 |
| tsagaan-suvarga.md | 11-travel/composition-and-light.md | 구도·빛 이론 전제 링크 | ✓ WIRED | 3회 링크(line 5,9,20), 대상 파일 존재 |
| bayanzag.md | 04-mongolia/overview.md | GPS 표 재사용 링크 | ✓ WIRED | 링크 존재(line 5), 대상 파일 존재 |
| khongoryn-els.md | 11-travel/landscape-and-street.md | 낙타 동물복지·먼지 관리 예절 링크 | ✓ WIRED | 2회 링크(line 21,22), 재서술 없이 "이미 다뤘으니 여기서 다시 설명하지 않습니다" 명시 |
| yolyn-am.md | 04-mongolia/overview.md | GPS 표 재사용 링크 | ✓ WIRED | 링크 존재(line 3), 좌표 재기입 없음 |
| baga-gazriin-chuluu.md | 11-travel/landscape-and-street.md | 유목민 게르 조우 환경인물 예절 링크 | ✓ WIRED | 링크 존재(line 22), "별개 규칙이 아니라 이미 다룬 동의 원칙" 명시(재서술 금지 준수) |
| baga-gazriin-chuluu.md | 03-practice/field-prep-and-hazards.md | 최북단 저온 대응 링크 | ✓ WIRED | 링크 존재(line 21), 재서술 없음("여기서 다시 설명하지 않습니다") |

모든 링크 대상 파일 존재 확인(04-mongolia/overview.md, 11-travel/{camera-settings,composition-and-light,landscape-and-street,index}.md, 10-drone-sites/{overview,tsagaan-suvarga,bayanzag,khongoryn-els,yolyn-am,baga-gazriin-chuluu}.md, 03-practice/field-prep-and-hazards.md — 전부 OK).

### Requirements Coverage

| Requirement | Status | Blocking Issue |
|-------------|--------|-----------------|
| TSITE-01 | ✓ SATISFIED | overview.md가 GPS 표 재사용 + 5곳 안내 완료 |
| TSITE-02 | ✓ SATISFIED | 5개 명소 페이지 모두 지형 특화 팁 + 정직성 하드 제약 준수 완료 |

### Anti-Patterns Found

| File | Line | Pattern | Severity | Impact |
|------|------|---------|----------|--------|
| — | — | — | — | 스캔 결과 blocker/warning 없음(TODO/FIXME/placeholder/coming soon/빈 return 패턴 0건, `![` 실사진 참조 0건) |

### Honesty / Hard-Constraint Checks (특별 검증)

- 좌표 재기입: `grep -nE "44\.577|105\.717|43\.50|103\.17|43\.49|104\.08|46\.383|105\.667|44\.14|103\.73" src/12-travel-sites/*.md` → 0건 (통과)
- `작성 예정` 스텁 문구: `grep -rl "작성 예정" src/12-travel-sites/*.md` → 0건 (통과)
- 실사진 마크다운(`![`): `grep -n '!\[' src/12-travel-sites/*.md` → 0건, 모든 이미지는 `<!-- 이미지: ... -->` 주석 (통과)
- 욜링암 단정 표현: `grep -nE "반드시 (본다|볼 수 있)|얼음이 있습니다" src/12-travel-sites/yolyn-am.md` → 0건 (통과)
- 욜링암 얼음: "8월엔 대부분 녹아 있을 가능성이 높습니다"로 계절성 표기 (통과)
- 야생동물(수염수리·아이벡스·야크)·낙타·유목민: 전부 "보이면/기회성/방목 만나면/가능성(보장 아님)" 표기, 야크도 "보장이 아닌 기회성"으로 명시 (통과)
- glossary.md 미수정: `src/07-appendix/glossary.md` mtime(Jul 10) < 12-travel-sites/*.md mtime(Jul 14), 본 플랜에서 수정되지 않음 확인 (통과)
- H1 보존: 6개 파일 모두 SUMMARY.md에 등록된 링크 텍스트에 대응하는 원래 스텁 H1 유지(제목 텍스트 변경 없음) — 단, SUMMARY.md의 링크 텍스트 자체는 H1과 약간 다른 축약형("차강소브라가 (Tsagaan Suvarga)" vs H1 "차강소브라가 여행 사진 (Tsagaan Suvarga)")이나, 이는 SUMMARY.md 구조(Phase 이전 단계에서 이미 확정)이며 본 플랜 범위 밖(참고 사항, 비차단)
- 상대경로: 12-travel-sites/ 기준 `../04-mongolia/`, `../11-travel/`, `../10-drone-sites/`, `../03-practice/` 경로 모두 실제 파일과 일치, mdbook build 성공으로 링크 유효성 간접 확인
- `mdbook build src` → exit 0 (실행 확인, 이후 `git restore docs/ && git clean -fdq docs/`로 docs/ 정리 완료)

### Human Verification Required

없음. 모든 성공 기준이 정적 텍스트 검증(grep/파일 존재/mdbook build)으로 충분히 확인 가능했다.

### Gaps Summary

갭 없음. Phase 13의 5개 성공 기준이 모두 실제 코드베이스에서 확인됨:
1. GPS 재사용(좌표 재기입 0건) + 5곳 안내
2. 6개 페이지 모두 스텁 아닌 실질 콘텐츠(피사체·구도·타이밍·주의 절 존재)
3. 차강소브라가 층리·황혼(방위 특화 정면광/역광), 바양작 붉은 절벽·화석 예절
4. 홍고린엘스 사구·낙타 동물복지, 욜링암 12mm 필수·얼음 계절성·야생 기회성
5. 바가가즈링 촐로 화강암·최북단 저온·게르 예절, 전체 정직 표기 준수

이론(구도·빛·렌즈·인물 예절)은 11-travel/*로, 지형/GPS는 04-mongolia/overview.md로 링크 재사용되며 재서술이 없었다. 실사진 파일 추가 없음(`<!-- 이미지: -->` 주석만). mdbook build green.

---

_Verified: 2026-07-14T02:56:43Z_
_Verifier: Claude (gsd-verifier)_
