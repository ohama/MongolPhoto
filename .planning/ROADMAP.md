# Roadmap: MongolPhoto

## Overview

트래킹 장비 없이 몽골 은하수 촬영에 성공하기 위한 한국어 mdBook 튜토리얼을, 실제 캘린더(7/17 서해안 실전, 8/13~8/17 몽골 여행)에 맞춰 순서대로 완성한다. 먼저 급한 장비 구매와 기초 촬영법 + book 뼈대를 세운 뒤(Phase 1), 4회의 연습 세션을 실전 날짜에 맞춰 기록하고(Phase 2-3), 몽골 여행을 날짜별로 사전 계획하고(Phase 4) 사후 결과로 마무리하며(Phase 5), 마지막으로 부록과 보너스 기법을 더해 배포를 검증한다(Phase 6).

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

- [x] **Phase 1: mdBook 뼈대 + 장비 + 기초 촬영법** - 긴급(7/17 이전 완료 필수): book 골격, 장비 추천, 기초 촬영법, 연습 로그 템플릿 ✓ (2026-07-09)
- [ ] **Phase 2: 연습 1차(집) + 2차(7/17 서해안)** - 첫 실전 필드 테스트까지 기록 (하드 날짜 게이트: 7/17)
- [ ] **Phase 3: 연습 3-4차(집) + 후보정 워크플로 뼈대** - 몽골 직전 최종 점검, 후보정 워크플로 실전 검증
- [ ] **Phase 4: 몽골 사전 계획** - 날짜별(8/13~8/17) 촬영 계획, 여행 전 작성 가능한 콘텐츠
- [ ] **Phase 5: 몽골 결과 + 후보정 완성** - 여행 후 실제 사진/결과 반영 (하드 날짜 게이트: 8/17 이후)
- [ ] **Phase 6: 부록 + 보너스 기법 + 배포 검증** - 치트시트, 체크리스트, 용어사전, 보너스 기법, 최종 배포 확인

## Phase Details

### Phase 1: mdBook 뼈대 + 장비 + 기초 촬영법
**Goal**: 독자가 book 사이트에서 장비 추천과 기초 촬영법을 확인하고, 연습 1차를 준비/기록할 수 있는 상태가 된다. 이 프로젝트에서 가장 시간 압박이 큰 phase — 7/17 서해안 실전 전에 완료 목표. 장비는 추천만 다루며 구매 가이드는 범위 밖.
**Depends on**: Nothing (first phase)
**Requirements**: PUB-01, PUB-02, PUB-03, GEAR-01, GEAR-02, GEAR-03, GEAR-04, GEAR-05, GEAR-06, FUND-01, FUND-02, FUND-03, FUND-04, FUND-05, FUND-06, PRAC-01
**Success Criteria** (what must be TRUE):
  1. mdBook이 한국어로(Noto Sans KR, keep-all) 로컬에서 정상 빌드/미리보기 되고, GitHub Actions로 GitHub Pages에 자동 배포되어 지인이 링크로 볼 수 있다.
  2. 사진이 리사이즈·EXIF 제거된 상태로 챕터 구조에 맞는 폴더에 들어가는 파이프라인이 마련되어 있다.
  3. 독자가 장비 챕터(카메라·렌즈·액세서리·앱·준비물 체크리스트)를 보고 트래킹 없는 은하수 촬영에 적합한 장비를 이해하고, 보유/추천 장비로 촬영을 준비할 수 있다 (추천만, 구매 가이드 없음).
  4. 독자가 기초 촬영법 챕터를 보고 수동 모드 노출 3요소를 이해하고, 크롭센서 NPF/500룰로 셔터속도를 계산하며, 별에 수동 초점을 맞추고, RAW로 촬영하며, 은하수 타이밍(계절/시간/달/광해)을 확인하고, 현장 워크플로 순서를 따라 할 수 있다.
  5. 재사용 가능한 연습 로그 템플릿이 존재해 연습 1차 기록에 바로 쓸 수 있다.
**Plans**: 5 plans (5/5 complete)

Plans:
- [x] 01-01-PLAN.md — mdBook 뼈대: book.toml, 한국어 폰트(Noto Sans KR)+keep-all, 전체 SUMMARY 스켈레톤+스텁 트리, 이미지 최적화 스크립트 (PUB-01, PUB-03)
- [x] 01-02-PLAN.md — 장비 챕터: 마운트별 카메라·렌즈 추천, 크롭계수 계산법, 액세서리·앱, 준비물 체크리스트 (GEAR-01~06)
- [x] 01-03-PLAN.md — 기초 촬영법 A: M모드 노출 3요소, 크롭 500룰 계산, 별 수동 초점 (FUND-01, FUND-02, FUND-03)
- [x] 01-04-PLAN.md — 기초 촬영법 B + 템플릿: RAW·화밸, 은하수 찾기·타이밍, 현장 워크플로, 연습 로그 템플릿 (FUND-04, FUND-05, FUND-06, PRAC-01)
- [x] 01-05-PLAN.md — GitHub Pages 배포: CI 빌드→docs/ 커밋 패턴, Pages 설정, 라이브 사이트 검증 (PUB-02)

### Phase 2: 연습 1차(집) + 2차(7/17 서해안)
**Goal**: 실전 전 마지막 홈 리허설과 첫 필드 테스트 결과가 book에 기록된다.
**Depends on**: Phase 1 (장비·기초·템플릿 필요)
**Requirements**: PRAC-02, PRAC-03
**Success Criteria** (what must be TRUE):
  1. 연습 1차(집) 챕터에 템플릿 형식대로 목표/장비·세팅/환경/결과 사진/배운 점/다음 개선이 채워져 있다.
  2. 연습 2차(7/17 서해안) 챕터에 실제 촬영 사진과 현장에서 배운 점이 기록되어 있다 (7/17 이후 작성).
  3. 2차에서 발견된 문제(예: 노출/초점/장비 이슈)가 다음 단계 복기를 위해 명확히 남아 있다.
**Plans**: 2 plans

Plans:
- [ ] 02-01-PLAN.md — 연습 1차(집) 로그: 6개 섹션 스캐폴드 + 세션 전 홈 리허설 드릴(목표), checkpoint로 실제 데이터 수집, 사진 ingest + SUMMARY flip (PRAC-02)
- [ ] 02-02-PLAN.md — 연습 2차(7/17 서해안) 로그: 목표=1차 개선 carry-over + 서해안 코어 타게팅·이슬 net-new 콘텐츠, checkpoint(7/17 게이트)로 실제 데이터, 사진 ingest + SUMMARY flip (PRAC-03)

### Phase 3: 연습 3-4차(집) + 후보정 워크플로 뼈대
**Goal**: 몽골 출발 전 마지막 점검이 끝나고, 후보정 워크플로가 실전 검증된 상태로 존재한다.
**Depends on**: Phase 2 (서해안 결과 필요)
**Requirements**: PRAC-04, PRAC-05, POST-01, POST-02, POST-03
**Success Criteria** (what must be TRUE):
  1. 연습 3차(집) 챕터가 서해안 결과의 문제를 복기하고 구체적 개선 조치를 기록한다.
  2. 연습 4차(집) 챕터가 몽골 직전 최종 점검과 후보정 워크플로 리허설 결과를 기록한다.
  3. 후보정 챕터(RAW 현상 → 스태킹[Sequator/Starry Landscape Stacker] → 은하수 강조 보정)가 실제 연습 사진으로 처음부터 끝까지 검증된 절차를 설명한다.
**Plans**: TBD

Plans:
- [ ] 03-01: TBD

### Phase 4: 몽골 사전 계획
**Goal**: 몽골 출발(8/13) 전에 날짜별 촬영 계획이 book에 준비되어 있다.
**Depends on**: Phase 1 (기초 촬영법 필요, 세션 진행과는 독립적으로 병행 가능)
**Requirements**: MONG-01, MONG-02
**Success Criteria** (what must be TRUE):
  1. 몽골 사전 계획 챕터에 달 위상, 은하수 코어 방향/고도, 촬영지 GPS가 명시되어 있다.
  2. 독자가 8/13~8/17 날짜별 챕터를 보고 그날 밤 무엇을·어디서·언제 찍을지 결정할 수 있다.
**Plans**: 2 plans

Plans:
- [ ] 04-01-PLAN.md — 여행 개요(overview.md: 4곳 GPS·4박 달/다크윈도우·코어 방향/고도 공식·저고도 경고) + Day 1 차강소브라가 + Day 2 홍고린엘스 (MONG-01, MONG-02)
- [ ] 04-02-PLAN.md — Day 3 욜링암(협곡 코어 차폐 경고) + Day 4 바가가즈링 촐로 + Day 5 공항(최소) + SUMMARY 몽골 링크 6개 flip + 빌드 검증 (MONG-02)

### Phase 5: 몽골 결과 + 후보정 완성
**Goal**: 여행(8/13~8/17) 후 실제 촬영 결과와 최종 후보정 사진이 book에 반영된다.
**Depends on**: Phase 4 (사전 계획 필요), 여행 완료(8/17 이후)
**Requirements**: MONG-03, POST-04
**Success Criteria** (what must be TRUE):
  1. 날짜별 챕터에 5일 각각의 실제 촬영 결과와 사진이 기록되어 있다.
  2. 후보정 챕터에 실제 사진의 전/후 비교가 최소 1세트 이상 수록되어 있다.
**Plans**: TBD

Plans:
- [ ] 05-01: TBD

### Phase 6: 부록 + 보너스 기법 + 배포 검증
**Goal**: book이 완결된 참고자료로 마무리되고 최종 배포가 검증된다.
**Depends on**: Phase 5 (모든 본편 콘텐츠 완료 후 증류)
**Requirements**: REF-01, REF-02, REF-03, REF-04, BONUS-01, BONUS-02, BONUS-03
**Success Criteria** (what must be TRUE):
  1. 현장 치트시트, 체크리스트 모음, 앱·소프트웨어 가이드, 용어사전 챕터가 모두 존재하고 앞선 본편 내용과 일치한다.
  2. 보너스 기법(파노라마, 스타트레일, 타임랩스) 챕터가 최소한의 개념 설명과 기본 절차를 담고 있다.
  3. GitHub Pages에 배포된 사이트에서 SUMMARY.md 전체 목차가 깨짐 없이 탐색 가능하다.
**Plans**: TBD

Plans:
- [ ] 06-01: TBD

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3 → 4 → 5 → 6

**Hard date gates:**
- Phase 1 must complete before 2026-07-17 (서해안 실전)
- Phase 2's 연습 2차 content cannot be written before 2026-07-17
- Phase 5 cannot be written before 2026-08-17 (몽골 여행 종료)

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. mdBook 뼈대 + 장비 + 기초 촬영법 | 5/5 | ✓ Complete | 2026-07-09 |
| 2. 연습 1-2차 | 0/2 | Planned | - |
| 3. 연습 3-4차 + 후보정 뼈대 | 0/TBD | Not started | - |
| 4. 몽골 사전 계획 | 0/2 | Planned | - |
| 5. 몽골 결과 + 후보정 완성 | 0/TBD | Not started | - |
| 6. 부록 + 보너스 + 배포 검증 | 0/TBD | Not started | - |
