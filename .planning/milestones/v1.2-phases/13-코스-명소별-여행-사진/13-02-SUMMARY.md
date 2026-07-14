---
phase: 13-코스-명소별-여행-사진
plan: 02
subsystem: docs
tags: [mdbook, travel-photography, gobi, khongoryn-els, yolyn-am, baga-gazriin-chuluu]

# Dependency graph
requires:
  - phase: 04-mongolia
    provides: "GPS 표(촬영지 좌표) — 04-mongolia/overview.md"
  - phase: 10-drone-sites
    provides: "명소별 페이지 구조 패턴(도입→피사체·구도→타이밍→주의), GPS 링크 재사용 문장 패턴"
  - phase: 11-travel(12)
    provides: "카메라 설정·렌즈(camera-settings.md), 구도와 빛·타이밍(composition-and-light.md), 인물/현장 예절·야생동물 기회성 서술(landscape-and-street.md) 공통 이론"
  - phase: 13-코스-명소별-여행-사진(13-01)
    provides: "12-travel-sites/overview.md 개요 허브, 페이지 구조 패턴 선례(tsagaan-suvarga.md·bayanzag.md)"
provides:
  - "12-travel-sites/khongoryn-els.md: 사구·낙타 특화 여행 사진 가이드(능선 실루엣·캐러밴·발자국 리딩라인·리플, 골든아워 긴 그림자, 모래 방진·낙타 동물복지 예절)"
  - "12-travel-sites/yolyn-am.md: 슬롯 협곡·얼음(계절성)·야생(기회성) 특화 여행 사진 가이드(12mm 필수, 얼음 8월 정직 표기, 수염수리·아이벡스·야크 기회성)"
  - "12-travel-sites/baga-gazriin-chuluu.md: 화강암 기암 특화 여행 사진 가이드(아치 프레임 속 프레임·사원터·질감, 최북단 저온·유목민 게르 조우 예절)"
affects: [14]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "13-01과 동일 패턴 계속: 명소 페이지는 GPS/이론을 재서술하지 않고 04-mongolia/overview.md·11-travel/*로 링크만 하고, 지형 적용 델타만 자체 서술(10-drone-sites 패턴 미러)"
    - "정직성 하드 제약 표기 패턴: 계절적으로 있을 수도/없을 수도 있는 요소(얼음)는 '~할 가능성이 높다'로, 야생·유목민 조우는 '보이면/방목 만나면 기회성'으로, 절대 단정형('반드시 본다', '~이 있습니다')을 쓰지 않는다"

key-files:
  created: []
  modified:
    - src/12-travel-sites/khongoryn-els.md
    - src/12-travel-sites/yolyn-am.md
    - src/12-travel-sites/baga-gazriin-chuluu.md

key-decisions:
  - "욜링암 야생동물 문장에서 검증 grep(반드시 본다/얼음이 있습니다 부재 확인)을 통과시키기 위해 '~가 아닙니다' 형태의 부정 대조 표현 대신 '가기만 하면 늘 마주치는 것은 아닙니다'로 표현을 조정 — 의미는 동일하되 하드 제약 검증에 안전한 문구 사용"
  - "야크 조우도 수염수리·아이벡스와 동일한 '기회성' 등급으로 취급(보장 아님, 거리 두고 접근 금지)하여 세 야생/가축 요소의 정직성 표기 수준을 통일"

patterns-established:
  - "명소 페이지 도입부 패턴(13-01과 동일 유지): 핵심 주제 한 문장 → GPS/접근 링크(좌표 재기입 금지) → 공통 이론 링크(전제) → 이후 델타만"

# Metrics
duration: ~20min
completed: 2026-07-14
---

# Phase 13 Plan 02: 코스 명소별 여행 사진 — 홍고린엘스·욜링암·바가가즈링 촐로 Summary

**12-travel-sites/의 나머지 3개 명소 페이지(홍고린엘스·욜링암·바가가즈링 촐로)를 채움 — 사구·협곡·화강암 지형 델타만 자체 서술하고, 얼음 계절성·야생동물/낙타/유목민 조우는 전부 "보이면·방목 만나면·가능성" 기회성으로 정직 표기**

## Performance

- **Duration:** ~20 min
- **Started:** 2026-07-14T02:35:00Z (approx)
- **Completed:** 2026-07-14T02:53:17Z
- **Tasks:** 3
- **Files modified:** 3

## Accomplishments
- 홍고린엘스 페이지가 사구 능선 실루엣·낙타 캐러밴 실루엣·발자국 리딩라인·모래 리플 텍스처를 12mm/50mm로 나눠 안내하고, 골든아워 긴 그림자(정오 불리)·블루아워 마무리, 모래 방진·낙타 동물복지 예절(연출·강요 포즈 금지)을 담음
- 욜링암 페이지가 슬롯 협곡 속 인물 스케일에 12mm가 왜 필수인지 명시하고, 얼음벌판을 "8월엔 대부분 녹아 있을 가능성이 높다"는 계절성으로, 수염수리·아이벡스는 "보이면 기회성", 야크는 "접근 계곡 방목 만나면 기회성(거리 두기)"으로 정직 표기
- 바가가즈링 촐로 페이지가 아치 프레임 속 프레임·바위 인물 스케일·옛 사원터 스토리텔링·화강암 질감(F1.8 배경 흐림)을 담고, 골든아워 저각광·최북단 새벽 저온·유목민 게르 "조우 가능성" 환경인물 예절을 링크 재사용으로 안내
- 세 파일 모두 GPS 좌표 미재기입, 실사진 파일 미추가(`<!-- 이미지 -->` 주석만, `![` 없음), H1 스텁 유지, 정직성 하드 제약(단정 표현 부재) 검증 통과, `mdbook build src` exit 0 확인

## Task Commits

Each task was committed atomically:

1. **Task 1: 홍고린엘스 — 사구·낙타 특화 (khongoryn-els.md)** - `cd3a07d` (feat)
2. **Task 2: 욜링암 — 협곡·얼음·야생 특화 (yolyn-am.md)** - `1a94268` (feat)
3. **Task 3: 바가가즈링 촐로 — 화강암 기암 특화 (baga-gazriin-chuluu.md)** - `cd83dac` (feat)

**Plan metadata:** (recorded after this SUMMARY commit)

## Files Created/Modified
- `src/12-travel-sites/khongoryn-els.md` - 사구·낙타 특화(능선 실루엣·캐러밴 실루엣·발자국 리딩라인·리플, 골든아워 긴 그림자, 모래 방진·낙타 동물복지 예절)
- `src/12-travel-sites/yolyn-am.md` - 슬롯 협곡(12mm 필수)·트레킹 스냅·얼음 계절성·야생(수염수리·아이벡스 기회성, 야크 방목 기회성·거리 두기)
- `src/12-travel-sites/baga-gazriin-chuluu.md` - 화강암 기암(아치 프레임 속 프레임·바위 스케일·사원터·질감)·골든아워 저각광·최북단 저온·유목민 게르 조우 예절

## Decisions Made
- 욜링암 야생동물 문장은 verify grep(`반드시 (본다|볼 수 있)|얼음이 있습니다` 부재 확인)을 안전하게 통과하도록 "여기 가면 반드시 본다"가 아닙니다"류 부정 대조 표현을 피하고 "가기만 하면 늘 마주치는 것은 아닙니다"로 재작성 — 의미(기회성, 비보장)는 동일하게 유지.
- 야크 조우를 수염수리·아이벡스와 동일한 "기회성" 등급(방목 만나면, 거리 두기)으로 서술해 야생·가축 요소 세 가지의 정직성 표기 수준을 하나로 통일.

## Deviations from Plan

None - plan executed exactly as written. 3개 파일 모두 계획된 구조(도입→피사체·구도→타이밍→주의)와 must_haves를 그대로 충족. 단, verify 정규식 통과를 위해 욜링암의 한 문장 표현만 의미 변화 없이 재작성함(위 Decisions Made 참고).

## Issues Encountered
- 초안 작성 시 욜링암 야생동물 문단에 넣은 대조 표현("~가 아닙니다")이 plan의 정직성 하드 제약 검증 grep(`반드시 본다` 문자열 포함 여부)에 문자 그대로 걸려 재확인 후 즉시 표현을 수정함 — 의미는 처음부터 정직 표기 원칙(기회성, 비보장)을 따르고 있었고, 검증 패턴에 안전하도록 표현만 바꿈.

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- 12-travel-sites/의 명소 5곳(차강소브라가·바양작·홍고린엘스·욜링암·바가가즈링 촐로) 페이지가 13-01과 13-02로 모두 채워져 Phase 13(코스 명소별 여행 사진) 콘텐츠가 완료됨.
- 정직성 하드 제약(계절성·기회성 표기) 패턴이 세 지형 모두에서 일관되게 적용돼, 이후 Phase 14(참고 자료·이미지)에서 실제 사진을 채울 때도 같은 정직성 기준을 유지하면 됨.
- overview.md의 명소 5곳 링크가 모두 실제 완성된 페이지를 가리키므로 링크 깨짐 없음.

---
*Phase: 13-코스-명소별-여행-사진*
*Completed: 2026-07-14*
