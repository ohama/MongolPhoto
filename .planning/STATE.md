# Project State

## Project Reference

See: .planning/PROJECT.md (updated 2026-07-09)

**Core value:** 트래킹 장비 없이도 은하수 사진이 "잘 나오게" 하는 전 과정(장비 선택 → 촬영 → 후보정)을, 초보자가 따라 하며 몽골에서 실제로 성공할 수 있도록 담아낸다.
**Current focus:** Phase 1 완료·검증(5/5). **2026-07-09 방향 전환** — 2~5부를 개인 일지·여행 결과에서 **일반 가이드**로 재구성(HOME/FIELD/EDIT/SITE). 로드맵·요구사항 재작성 완료. 구 Phase 2/4 산출물은 `.planning/archive/`로 이동. Phase 2(집에서 연습할 사항) 계획·실행 완료(02-01, HOME-01~03). Phase 3(야외에서 연습할 사항) 계획·실행 완료(03-01, FIELD-01~03). Phase 4(후보정 연습) 계획·실행 완료(04-01, EDIT-01~04). Phase 5(몽골 여행지별 촬영 가이드) 계획·실행 완료(05-01, SITE-01~03) — 개인 일정 프레이밍을 검증된 데이터를 재사용하는 일반 가이드로 재구성. 다음: Phase 6(부록·보너스·배포).

## Current Position

**방향 전환 후 — 재구성된 로드맵 (6 phase):**
- Phase 1 (mdBook·장비·기초): ✓ 완료
- Phase 2 (집에서 연습할 사항, 일반 가이드): ✓ 완료 (02-01, HOME-01~03)
- Phase 3 (야외에서 연습할 사항, 일반 가이드): ✓ 완료 (03-01, FIELD-01~03)
- Phase 4 (후보정 연습, 일반 가이드): ✓ 완료 (04-01, EDIT-01~04)
- Phase 5 (몽골 여행지별 촬영 가이드, 일반): ✓ 완료 (05-01, SITE-01~03) — `src/04-mongolia/`를 개인 일정에서 일반 명소별 가이드로 재구성
- Phase 6 (부록·보너스·배포): 계획 대기 (REF/BONUS; REF-05 카메라·렌즈 추천 목록은 이미 완료)

날짜 게이트 없음 — 일반 가이드라 전부 지금 작성 가능.

**아카이브(superseded):** `.planning/archive/02-연습-1차-집-2차-서해안/`(개인 연습 로그 plan·research), `.planning/archive/04-몽골-사전-계획/`(개인 몽골 계획 plan·research·verification). Phase 5(05-01)에서 04 리서치의 검증 데이터(GPS·달·코어)를 재활용해 완료됨.

**전환 시 남은 book 콘텐츠(다음 phase 실행에서 정리):**
- `src/03-practice/session-1-home.md` — [해결됨, 02-01] 삭제 완료 (일반 HOME-01~03 페이지로 대체).
- [해결됨, 05-01] `src/04-mongolia/{overview,day-1~5}.md` — 구 개인 여행 Day 페이지를 `overview.md`(SITE-01) + `tsagaan-suvarga/khongoryn-els/yolyn-am/baga-gazriin-chuluu.md`(SITE-02/03)로 재구성 완료, day-5(공항) 삭제.
- `src/03-practice/template.md`(PRAC-01) — 유지(독자용 연습 로그 템플릿), 02-01에서 인트로 1문단만 스테일 참조 수정.
- [해결됨, 03-01] `finding-the-milkyway.md`의 "7/17 서해안 연습" 등 스테일 참조·끊어진 이슬 링크, `index.md`의 "서해안 연습" 참조 정리 완료.
- [해결됨, 05-01] `finding-the-milkyway.md` §2·§3의 8/13~8/17·5박 dated framing, `introduction.md`의 개인 여행 프레이밍 정리 완료.

Progress: [████████░░] Phase 1~5 100%, Phase 6 계획 대기 (부록·보너스·배포)

## Performance Metrics

**Velocity:**
- Total plans completed: 11
- Average duration: ~10.0 min
- Total execution time: ~1.84 hours

**By Phase:**

| Phase | Plans | Total | Avg/Plan |
|-------|-------|-------|----------|
| 1 | 5/5 | ~63 min | ~13 min |
| 2 | 1/1 | ~12 min | 12 min |
| 3 | 1/1 | ~7 min | 7 min |
| 4 (후보정 연습, 신 로드맵) | 1/1 | 8 min | 8 min |
| 4 (구, 몽골 사전 계획, 아카이브) | 2/2 | 13 min | 6.5 min |
| 5 (몽골 여행지별 촬영 가이드) | 1/1 | ~8 min | 8 min |

**Recent Trend:**
- Last plans: 03-01 (7 min), 04-01(신, 후보정 연습, 8 min), 05-01(몽골 여행지별 촬영 가이드, ~8 min)
- Trend: stable (content-only plans run faster — no code/build complexity)

*Updated after each plan completion*

## Accumulated Context

### Decisions

Decisions are logged in PROJECT.md Key Decisions table.
Recent decisions affecting current work:

- [Roadmap]: 6 phases, date-driven ordering (not just dependency-driven) — Phase 1 is urgent (before 7/17), Phase 2's 연습 2차 gated at 7/17, Phase 5 gated after 8/17.
- [Roadmap]: Post-processing split — POST-01/02/03 (workflow/stacking) land in Phase 3 using practice photos; POST-04 (before/after gallery) lands in Phase 5 using real trip photos.
- [Roadmap]: BONUS-01/02/03 (파노라마/스타트레일/타임랩스) placed in Phase 6 as a bonus chapter, written last alongside appendices.
- [Scope 2026-07-09]: 장비는 **추천만** — 구매 가이드/리드타임/구매 결정 프로세스 제외. 보유 장비로도 촬영 가능하게 안내. (사용자 요청)
- [01-01]: mdbook v0.5.3 유지 (다운그레이드 안 함) — 커스텀 전처리기 미사용, 안정적인 [output.html] 키만 사용.
- [01-01]: Noto Sans KR 폰트는 google-webfonts-helper API(subsets=korean)로 받음 — CSS2 API는 한글을 ~120개 파일로 쪼개 제공해 "block 하나만 grep" 방식이 불가능함이 확인됨.
- [01-01]: edit-url-template은 main 브랜치 기준 (skill 기본값 master 아님).
- [01-01]: 연습 로그 템플릿은 03-practice/template.md로 독자에게 공개된 실제 페이지로 발행 (숨김 _template.md 아님).
- [01-03]: 500룰 공식·워크드 예제는 PITFALLS.md Pitfall #2를 그대로 인용 (재도출 안 함); NPF 룰은 손계산 대신 PhotoPills Spot Stars/온라인 계산기 안내로 대체 (FEATURES.md 교수 순서).
- [01-02]: 카메라 바디 추천은 STACK.md에 전용 표가 없어 "~급" 예시 + "정확한 최신 모델은 바뀔 수 있음" 헤지 문구로 서술 (없는 사실을 단정하지 않기 위함).
- [01-02]: 본문에서 "구매"라는 단어 자체를 배제 — 가격대는 표기하되 판매처·구매 절차는 언급하지 않는 방식으로 추천만 원칙을 지킴.
- [2026-07-09 사용자 요청]: 장비 챕터 재구성 — 앞쪽 01-gear/camera-lens.md는 **일반론(카메라·렌즈 필수/있으면 좋은 기능)**만, **구체 모델·마운트별 표·가격·크롭계수 계산법**은 부록 `src/06-appendix/camera-lens-picks.md`로 이동. SUMMARY 부록에 링크 추가, 500-npf-rule 백링크도 부록으로 갱신. (Phase 6 부록 페이지 하나가 앞당겨 생성됨 — Phase 6 계획 시 중복 생성 금지.)
- [01-04]: 달 위상·Bortle 수치는 FEATURES.md를 그대로 인용 (재도출 없음) — 7/17 ≈13% 초승달, 8/12 신월(몽골 8/13~17 전체 유리), 고비 Bortle 1-2 vs 국내 5-8.
- [01-04]: PhotoPills/Stellarium은 01-gear/accessories.md에서 이미 소개된 것으로 전제하고 finding-the-milkyway.md에서는 운영적 사용법만 서술 (재소개 없음).
- [01-04]: 연습 로그 템플릿(03-practice/template.md)은 fenced code block으로 감싸 복사-붙여넣기 가능한 리터럴 텍스트로 제공 — 실제 이미지 파일은 생성하지 않고 상대경로 예시만 표기.
- [04-01]: 몽골 GPS/달위상/코어 수치는 04-RESEARCH.md를 그대로 인용(재계산·재검색 없음) — 차강소브라가는 44.577°N/105.717°E만 사용, 동명 광산 좌표(108.3xE)는 본문에 아예 등장시키지 않음.
- [04-01]: 코어 "방향(orientation)"과 "고도(altitude)"를 명확히 구분 서술 — 이 위도대(43~46°N)는 코어 최대고도가 15~18°로 낮으므로 남쪽 지평선이 트인 전경을 우선 권장.
- [04-01]: 손계산 코어 방위각·고도·남중시각은 전부 "추정"으로 헤지 + "PhotoPills로 현장 재확인" 문구를 overview·Day 페이지마다 반복 명시. PhotoPills/Stellarium은 accessories.md에서 이미 소개된 것으로 전제해 재소개 없음.
- [04-01]: 몽골 Day 페이지는 two-pass 템플릿(사전 계획 완전히 채움 + 촬영 결과는 Phase 5 placeholder) 적용 — 03-practice 연습 로그와 달리 사전 계획은 저작 시점에 확정.
- [04-02]: 욜링암(Day 3)은 협곡 벽 최대 200m·코어 최대고도 17.5°의 트레이드오프를 명시 경고하고 협곡 입구/트인 곳 촬영을 권장, 협곡 깊은 안쪽은 낮 트레킹 소재로 재배치 — 협곡 축 방향 불명확이라 "현장에서 남쪽 지평선 확인" 보수적 서술 유지.
- [04-02]: 바가가즈링 촐로(Day 4)는 코어 최대고도가 4곳 중 최저(14.6°)임을 강조, 남쪽 트인 바위군락 우선 스카우팅 권장.
- [04-02]: Day 5(공항)는 확정 일정과 안 맞는 상세 콘텐츠를 억지로 채우지 않고 이동 로지스틱스 + 여정 마무리 회고로 최소 분량 유지(달/코어 상세표 생략).
- [04-02]: SUMMARY.md 3부 · 몽골 6개 링크만 surgical flip — 2부 연습·4부 후보정·부록 draft는 무변화 확인 완료. Phase 4는 이제 실질적으로 완료(04-01+04-02), Phase 5는 실제 여행(8/13~8/17) 이후에만 착수 가능.
- [02-01]: 크롭 셔터 상한 숫자를 하드코딩하지 않고 500-npf-rule.md 공식 링크로 독자가 직접 계산하도록 안내(마운트 미확정 원칙 유지). SUMMARY 2부만 surgical 교체(개인 연습 1~4차 draft → HOME-01~03 실링크 + 야외 placeholder), 1부/3부/4부/부록·template.md(PRAC-01) 구조는 무변화. orphan `session-1-home.md` 삭제, 스테일 참조 2곳(template.md 인트로, fundamentals/index.md) 수정 완료.
- [03-01]: field-*.md도 크롭 셔터 상한 숫자 하드코딩 없이 독자 계산값 재사용 원칙 유지 + LCD 100% 실측(별이 점인지 궤적인지)을 야외 델타로 추가. field-review.md는 home-checklist.md의 "할 수 있다/안다" 능력체크 문구를 복붙하지 않고 증상→확인/원인→다음개선 표로 세션 후 복기 루프를 별도 설계(HOME-03 복제 금지 원칙 준수). 이슬 링크는 field-workflow.md(이슬 언급 0회, 원래 끊어진 링크)에서 신규 field-prep-and-hazards.md로 리다이렉트. SUMMARY 2부만 surgical 교체(야외 placeholder → 3 실링크), 3부(몽골)·4부·부록 구조는 무변화.
- [04-01, 신 로드맵 후보정 연습]: `src/05-postprocessing/` 4페이지 신설(EDIT-01~04) — RAW 현상은 stack-first(스태킹 결과물을 현상) 순서로 확정, 스태킹은 Sequator(Win)+Starry Landscape Stacker(Mac) 둘 다 안내하고 DeepSkyStacker(전경 블렌딩 부재)·Topaz(2025-10 구독 전용화)는 이유와 함께 비추천. 은하수 강조 보정에서 마스크/레이어/주파수 분리는 단어 자체를 배제(범위 이탈 방지 verify grep 통과). SUMMARY 4부 placeholder → 4 실링크, camera-lens.md "Phase 3" 스테일 참조·raw-and-wb.md plain-text 참조를 stacking.md 실제 링크로 정리. Phase 4 완료.
- [05-01]: `src/04-mongolia/` 개인 5박 일정(Day 1~5·8/13~8/17·"촬영 결과" two-pass)을 일반 "여행지별 촬영 가이드"(SITE-01~03)로 재구성 — 새 데이터 수집 없이 archive/04-RESEARCH.md 검증 데이터(GPS·달 0/3/8/14%·코어 고도 공식/16.4·17.5·17.5·14.6°)만 그대로 재사용. overview.md 달 표는 "신월 후 D+0~D+3" 경과로 일반화. 4개 Day 페이지는 `git mv`로 명소명 파일(tsagaan-suvarga/khongoryn-els/yolyn-am/baga-gazriin-chuluu.md)로 rename + 단일 패스(위치/GPS·SITE-02 구도·코어 상황(overview 링크)·SITE-03 주의사항·타임라인)로 재작성, 두 번째 패스("촬영 결과") 제거. day-5(공항)는 대체 없이 삭제, 방진 한 줄만 overview.md "이동 시 주의"로 흡수. 명소 페이지는 코어 공식/타이밍 이론을 재서술하지 않고 overview.md → finding-the-milkyway.md 단방향 링크 체인 유지. 차강소브라가 광산 혼동 좌표(108.3x)는 문서 전체에서 완전 배제(grep 게이트). SUMMARY 3부 재제목("몽골 여행지별 촬영 가이드")+5링크(공항 drop), finding-the-milkyway.md §2·§3와 introduction.md의 개인 여행 프레이밍 일반화. `mdbook build src` green. Phase 5 완료.

### Known Facts (user-provided)

- 몽골 코스 1안 (바양작 제외):
  - Day 1 (8/13): 차강소브라가(Tsagaan Suvarga) 캠프 숙박
  - Day 2 (8/14): 오전 차강소브라가 → 홍고린엘스(Khongoryn Els)
  - Day 3 (8/15): 욜링암(Yolyn Am)
  - Day 4 (8/16): 바가가즈링 촐로(Baga Gazriin Chuluu)
  - Day 5 (8/17): 공항 (출국)
  → Phase 4(MONG-01/02) 날짜별 촬영 계획의 기준 코스. 모두 고비 다크스카이 명소.

### Pending Todos

- [2026-07-09 방향 전환] 2~5부를 일반 가이드로 재구성함. 구 개인화 todo(연습 1차 촬영 후 재개, 7/17 서해안 게이트, 몽골 여행 후 결과 채우기)는 모두 폐기 — 이제 날짜 게이트 없이 지금 전부 작성 가능.
- [해결됨, 03-01] `src/02-fundamentals/finding-the-milkyway.md`의 "7/17 서해안 연습" 등 스테일 참조는 Phase 2(02-01)에서 의도적으로 손대지 않았다가 Phase 3(03-01)에서 일반 서술로 수정 완료.
- [해결됨, 03-01] SUMMARY.md의 `- [야외에서 연습하기]()` placeholder(2부 마지막 항목)가 field-practice/field-prep-and-hazards/field-review 3개 실제 링크로 채워짐.
- [해결됨, 04-01 신 로드맵] SUMMARY.md의 `- [워크플로 개요]()` placeholder(4부)가 raw-develop/stacking/enhance-milkyway/before-after 4개 실제 링크로 채워짐. camera-lens.md "Phase 3" 스테일 참조·raw-and-wb.md plain-text 참조도 정리 완료.
- [해결됨, 05-01] 일반 "몽골 여행지별 촬영 가이드" 작성 완료 — `.planning/archive/04-몽골-사전-계획/04-RESEARCH.md`의 검증 데이터(GPS·달·코어)를 재활용해 `src/04-mongolia/` 전체를 SITE-01~03 가이드로 재구성.
- [Phase 6] 다음 착수 대상 — 부록(REF)·보너스(BONUS)·배포. `/gsd:plan-phase 6`로 계획 시작 가능.

### Blockers/Concerns

- [Phase 1] 카메라 마운트 미확정 — 렌즈 추천을 마운트별(소니 E/후지 X/니콘 Z DX)로 다루면 회피 가능. 구매 압박은 없음(추천만).
- [Phase 3] 후보정 스태킹 툴은 편집 OS(Windows→Sequator, Mac→Starry Landscape Stacker)에 따라 갈림 — v1은 둘 다 안내하기로 함.
- [Phase 4 부분 해결] 울란바토르/고비 지역 월출·월몰·은하수 코어 방위각/고도는 04-RESEARCH.md에서 공식 API(USNO/sunrise-sunset.org)로 달·박명 데이터는 HIGH 신뢰도 확보, 코어 방위각·고도·남중시각은 앱 접근 불가(403)로 표준 공식 손계산(MEDIUM) — 04-01에서 "추정 + PhotoPills 현장 재확인" 헤지 문구로 반영 완료. 실제 여행 중 PhotoPills로 재확인은 여전히 필요(Phase 5).
- [Phase 4 해결] 각 촬영지 GPS 좌표 확정됨 — 04-RESEARCH.md 교차검증 후 04-01(overview.md)에 반영. 단 홍고린엘스는 100km 사구지대 "대표 좌표"라 실제 캠프는 현지 GPS 재확인 필요(문서화됨).
- [Phase 5 해결] `src/04-mongolia/`의 개인 5박 프레이밍(Day N·8/13~8/17·촬영 결과 two-pass)을 05-01에서 일반 SITE-01~03 가이드로 전환 완료 — 실제 여행 이후에만 착수 가능하다는 이전 날짜 게이트는 방향 전환(2026-07-09)에 따라 폐기되고, 검증된 archive 데이터 재사용으로 즉시 완료됨.
- REQUIREMENTS.md 기존 Coverage 카운트("31 total")는 오기였음 — 실제 v1 요구사항은 34개 (BONUS 3개 포함). 로드맵 생성 시 정정함.
- [01-01→01-05 해결] docs/ 빌드 산출물은 01-05에서 커밋됨(Deploy-from-branch 패턴). .claude/는 개별 git add로 커밋 대상에서 계속 제외(.gitignore 없이도 안전 — git add -A 미사용 원칙).
- [01-05 해결] GitHub Pages 최초 빌드 지연(수분간 `status: building`, 일시 404)은 전파 대기 후 자연 해소됨. https://ohama.github.io/MongolPhoto/ 는 현재 status=built, HTTP 200. 사람이 브라우저에서 한국어 렌더링·6부 목차·1부 실콘텐츠를 직접 확인 후 "승인" 응답 — Phase 1 배포 완료.

## Session Continuity

Last session: 2026-07-09
Stopped at: [Phase 2] 02-01-PLAN.md 전체 완료(955075f, 00f27d0) — HOME-01~03 드릴 페이지 신설 + SUMMARY 2부 교체 + 스테일 참조 수정 + orphan 삭제. Phase 2 완료. [Phase 3] 03-01-PLAN.md 전체 완료(24986d3, c55f9e8) — FIELD-01~03 신규 페이지 3개 + SUMMARY 2부 flip + finding-the-milkyway/index 스테일 참조 정리 + 이슬 링크 리다이렉트 + home-checklist 3부 오표기 정정. Phase 3 완료. [Phase 4(구, 몽골 사전 계획)] 04-02-PLAN.md 전체 완료(da2add0, 6d7ec71) — 04-01+04-02 완료. [Phase 4(신 로드맵, 후보정 연습)] 04-01-PLAN.md 전체 완료(33b0c2b, a5f393f) — 05-postprocessing/ 4페이지(EDIT-01~04) 신설 + SUMMARY 4부 flip + camera-lens/raw-and-wb 스테일 참조 정리. Phase 4(신) 완료. [Phase 5] 05-01-PLAN.md 전체 완료(1e7042c, 9dd25a6, cce24af) — overview.md SITE-01 재작성, Day 1~4 페이지 git mv+단일 패스 SITE-02/03 재작성, day-5 삭제, SUMMARY 3부 재제목+5링크, finding-the-milkyway/introduction fold-in, mdbook build green. Phase 5 완료.
Resume file (Phase 2): 없음 — Phase 2 완료.
Resume file (Phase 3): 없음 — Phase 3 완료.
Resume file (구 Phase 4, 몽골 사전 계획): 없음 — 완료.
Resume file (신 로드맵 Phase 4, 후보정 연습): 없음 — 완료.
Resume file (Phase 5, 몽골 여행지별 촬영 가이드): 없음 — 완료. 다음은 Phase 6 `/gsd:plan-phase 6`(부록·보너스·배포)로 착수.
