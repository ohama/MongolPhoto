# Project State

## Project Reference

See: .planning/PROJECT.md (updated 2026-07-09)

**Core value:** 트래킹 장비 없이도 은하수 사진이 "잘 나오게" 하는 전 과정(장비 선택 → 촬영 → 후보정)을, 초보자가 따라 하며 몽골에서 실제로 성공할 수 있도록 담아낸다.
**Current focus:** Phase 1 완료·검증(5/5). **2026-07-09 방향 전환** — 2~5부를 개인 일지·여행 결과에서 **일반 가이드**로 재구성(HOME/FIELD/EDIT/SITE). 로드맵·요구사항 재작성 완료. 구 Phase 2/4 산출물은 `.planning/archive/`로 이동. 다음: Phase 2(집에서 연습할 사항)부터 재계획 — `/gsd:plan-phase 2`.

## Current Position

**방향 전환 후 — 재구성된 로드맵 (6 phase):**
- Phase 1 (mdBook·장비·기초): ✓ 완료
- Phase 2 (집에서 연습할 사항, 일반 가이드): 계획 대기 (HOME-01~03)
- Phase 3 (야외에서 연습할 사항, 일반 가이드): 계획 대기 (FIELD-01~03)
- Phase 4 (후보정 연습, 일반 가이드): 계획 대기 (EDIT-01~04)
- Phase 5 (몽골 여행지별 촬영 가이드, 일반): 계획 대기 (SITE-01~03) — 아카이브된 몽골 리서치·`src/04-mongolia/` 재활용
- Phase 6 (부록·보너스·배포): 계획 대기 (REF/BONUS; REF-05 카메라·렌즈 추천 목록은 이미 완료)

날짜 게이트 없음 — 일반 가이드라 전부 지금 작성 가능.

**아카이브(superseded):** `.planning/archive/02-연습-1차-집-2차-서해안/`(개인 연습 로그 plan·research), `.planning/archive/04-몽골-사전-계획/`(개인 몽골 계획 plan·research·verification). Phase 5는 04 리서치의 검증 데이터(GPS·달·코어) 재활용.

**전환 시 남은 book 콘텐츠(다음 phase 실행에서 정리):**
- `src/03-practice/session-1-home.md` — 구 개인 연습 1차 스캐폴드(오펀, SUMMARY 미연결). Phase 2에서 일반 가이드로 대체.
- `src/04-mongolia/{overview,day-1~5}.md` — 구 개인 여행 Day 페이지(SUMMARY 3부 연결됨). Phase 5에서 일반 "여행지별 가이드"로 재구성.
- `src/03-practice/template.md`(PRAC-01) — 유지(독자용 연습 로그 템플릿).

Progress: [██░░░░░░░░] Phase 1 100%, Phase 2~6 재계획 대기 (일반 가이드)

## Performance Metrics

**Velocity:**
- Total plans completed: 7
- Average duration: ~11 min
- Total execution time: ~1.27 hours

**By Phase:**

| Phase | Plans | Total | Avg/Plan |
|-------|-------|-------|----------|
| 1 | 5/5 | ~63 min | ~13 min |
| 4 | 2/2 | 13 min | 6.5 min |

**Recent Trend:**
- Last plans: 01-02 (9 min), 01-04 (~15 min), 01-05 (~15 min), 04-01 (6 min), 04-02 (7 min)
- Trend: stable (content-only plans like 04-01/04-02 run faster — no code/build complexity)

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
- [Phase 5] 일반 "몽골 여행지별 촬영 가이드" 작성 시 `.planning/archive/04-몽골-사전-계획/04-RESEARCH.md`의 검증 데이터(GPS·달·코어)와 기존 `src/04-mongolia/` 페이지를 재활용 — 개인 "Day N / 촬영 결과" 프레이밍만 일반 "명소별 가이드"로 바꾸면 됨.

### Blockers/Concerns

- [Phase 1] 카메라 마운트 미확정 — 렌즈 추천을 마운트별(소니 E/후지 X/니콘 Z DX)로 다루면 회피 가능. 구매 압박은 없음(추천만).
- [Phase 3] 후보정 스태킹 툴은 편집 OS(Windows→Sequator, Mac→Starry Landscape Stacker)에 따라 갈림 — v1은 둘 다 안내하기로 함.
- [Phase 4 부분 해결] 울란바토르/고비 지역 월출·월몰·은하수 코어 방위각/고도는 04-RESEARCH.md에서 공식 API(USNO/sunrise-sunset.org)로 달·박명 데이터는 HIGH 신뢰도 확보, 코어 방위각·고도·남중시각은 앱 접근 불가(403)로 표준 공식 손계산(MEDIUM) — 04-01에서 "추정 + PhotoPills 현장 재확인" 헤지 문구로 반영 완료. 실제 여행 중 PhotoPills로 재확인은 여전히 필요(Phase 5).
- [Phase 4 해결] 각 촬영지 GPS 좌표 확정됨 — 04-RESEARCH.md 교차검증 후 04-01(overview.md)에 반영. 단 홍고린엘스는 100km 사구지대 "대표 좌표"라 실제 캠프는 현지 GPS 재확인 필요(문서화됨).
- REQUIREMENTS.md 기존 Coverage 카운트("31 total")는 오기였음 — 실제 v1 요구사항은 34개 (BONUS 3개 포함). 로드맵 생성 시 정정함.
- [01-01→01-05 해결] docs/ 빌드 산출물은 01-05에서 커밋됨(Deploy-from-branch 패턴). .claude/는 개별 git add로 커밋 대상에서 계속 제외(.gitignore 없이도 안전 — git add -A 미사용 원칙).
- [01-05 해결] GitHub Pages 최초 빌드 지연(수분간 `status: building`, 일시 404)은 전파 대기 후 자연 해소됨. https://ohama.github.io/MongolPhoto/ 는 현재 status=built, HTTP 200. 사람이 브라우저에서 한국어 렌더링·6부 목차·1부 실콘텐츠를 직접 확인 후 "승인" 응답 — Phase 1 배포 완료.

## Session Continuity

Last session: 2026-07-09
Stopped at: [Phase 2] 02-01-PLAN.md Task 1 완료·커밋(a786f12), Task 2 checkpoint:human-action에서 대기 — 연습 1차(집) 실제 세션 진행 후 사진 폴더 경로(또는 "사진 없음") + 장비·세팅/촬영 환경/배운 점/다음 세션 개선 사항을 텍스트로 보고 필요. [Phase 4] 04-02-PLAN.md 전체 완료(da2add0, 6d7ec71) — Phase 4 전체(04-01+04-02) 완료. 다음은 Phase 5(여행 후)이며 8/13~8/17 이후 착수 가능.
Resume file (Phase 2): .planning/phases/02-연습-1차-집-2차-서해안/02-01-PLAN.md (Task 3부터 재개)
Resume file (Phase 4): 없음 — Phase 4 완료. Phase 5는 실제 몽골 여행(8/13~8/17) 이후 `/gsd:plan-phase 5`로 착수.
