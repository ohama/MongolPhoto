# Project State

## Project Reference

See: .planning/PROJECT.md (updated 2026-07-09)

**Core value:** 트래킹 장비 없이도 은하수 사진이 "잘 나오게" 하는 전 과정(장비 선택 → 촬영 → 후보정)을, 초보자가 따라 하며 몽골에서 실제로 성공할 수 있도록 담아낸다.
**Current focus:** Phase 1 — mdBook 뼈대 + 장비(추천) + 기초 촬영법 (7/17 서해안 촬영 전 완료 목표)

## Current Position

Phase: 1 of 6 (mdBook 뼈대 + 장비 + 기초 촬영법)
Plan: 4 of 5 in current phase
Status: In progress
Last activity: 2026-07-09 — Completed 01-04-PLAN.md (RAW·화밸, 은하수 타이밍, 현장 워크플로, 연습 로그 템플릿) — Wave 2 전체 종료, 남은 것은 01-05(배포)뿐

Progress: [████████░░] 80%

## Performance Metrics

**Velocity:**
- Total plans completed: 4
- Average duration: ~12 min
- Total execution time: ~0.8 hours

**By Phase:**

| Phase | Plans | Total | Avg/Plan |
|-------|-------|-------|----------|
| 1 | 4/5 | ~48 min | ~12 min |

**Recent Trend:**
- Last plans: 01-01 (4 min), 01-03 (~20 min), 01-02 (9 min), 01-04 (~15 min)
- Trend: stable

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
- [01-04]: 달 위상·Bortle 수치는 FEATURES.md를 그대로 인용 (재도출 없음) — 7/17 ≈13% 초승달, 8/12 신월(몽골 8/13~17 전체 유리), 고비 Bortle 1-2 vs 국내 5-8.
- [01-04]: PhotoPills/Stellarium은 01-gear/accessories.md에서 이미 소개된 것으로 전제하고 finding-the-milkyway.md에서는 운영적 사용법만 서술 (재소개 없음).
- [01-04]: 연습 로그 템플릿(03-practice/template.md)은 fenced code block으로 감싸 복사-붙여넣기 가능한 리터럴 텍스트로 제공 — 실제 이미지 파일은 생성하지 않고 상대경로 예시만 표기.

### Known Facts (user-provided)

- 몽골 코스 1안 (바양작 제외):
  - Day 1 (8/13): 차강소브라가(Tsagaan Suvarga) 캠프 숙박
  - Day 2 (8/14): 오전 차강소브라가 → 홍고린엘스(Khongoryn Els)
  - Day 3 (8/15): 욜링암(Yolyn Am)
  - Day 4 (8/16): 바가가즈링 촐로(Baga Gazriin Chuluu)
  - Day 5 (8/17): 공항 (출국)
  → Phase 4(MONG-01/02) 날짜별 촬영 계획의 기준 코스. 모두 고비 다크스카이 명소.

### Pending Todos

None yet.

### Blockers/Concerns

- [Phase 1] 카메라 마운트 미확정 — 렌즈 추천을 마운트별(소니 E/후지 X/니콘 Z DX)로 다루면 회피 가능. 구매 압박은 없음(추천만).
- [Phase 3] 후보정 스태킹 툴은 편집 OS(Windows→Sequator, Mac→Starry Landscape Stacker)에 따라 갈림 — v1은 둘 다 안내하기로 함.
- [Phase 4] 울란바토르/고비 지역 월출·월몰·은하수 코어 방위각/고도는 리서치 중 조회 실패(403) — PhotoPills/Stellarium/timeanddate.com으로 각 날짜·촬영지별 재확인 필요.
- [Phase 4] 각 촬영지 GPS 좌표는 계획 시 확정 필요 (코스는 1안으로 확보됨).
- REQUIREMENTS.md 기존 Coverage 카운트("31 total")는 오기였음 — 실제 v1 요구사항은 34개 (BONUS 3개 포함). 로드맵 생성 시 정정함.
- [01-01] docs/ 빌드 산출물과 .claude/ 디렉토리가 현재 git에서 미추적 상태 (repo에 .gitignore 없음). 배포/CI 설정(01-05 plan, GitHub Pages)에서 한 줄 결정 필요 — 현재는 블로커 아님.

## Session Continuity

Last session: 2026-07-09
Stopped at: Completed 01-04-PLAN.md (RAW·화밸/은하수 타이밍/현장 워크플로/연습 로그 템플릿) — 01-01~04 모두 완료, 남은 것은 01-05-PLAN.md(GitHub Pages 배포)뿐
Resume file: None
