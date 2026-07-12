---
phase: 05-몽골-여행지별-촬영-가이드
plan: 01
subsystem: content
tags: [mdbook, korean, astrophotography, gobi, reframe, git-mv]

# Dependency graph
requires:
  - phase: 04-몽골-사전-계획 (archived)
    provides: "검증된 몽골 GPS·달 위상·코어 고도 데이터 (04-RESEARCH.md)"
  - phase: 01-mdbook-장비-기초
    provides: "mdBook 빌드 구조, finding-the-milkyway.md 코어 타이밍/다크스카이 이론"
provides:
  - "src/04-mongolia/overview.md를 개인 5박 일정에서 SITE-01 일반 원리(고비 촬영)로 재작성"
  - "4개 명소 페이지(차강소브라가·홍고린엘스·욜링암·바가가즈링 촐로) 신규 파일명 + 단일 패스 SITE-02/03 재작성"
  - "day-5(공항) 페이지·이미지 폴더 삭제, 이동/방진 주의사항은 overview로 흡수"
  - "SUMMARY.md 3부 재제목 + 5개 site 링크"
  - "finding-the-milkyway.md·introduction.md의 개인 여행 프레이밍 일반화"
affects: [06-부록·보너스·배포]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "git mv 기반 파일 rename으로 히스토리 보존 (day-N-MMDD.md → 명소명.md)"
    - "단일 패스 명소 페이지 템플릿: 위치/GPS → 이렇게 찍으면 좋다(SITE-02) → 은하수 코어 상황(overview 링크) → 주의사항(SITE-03) → 촬영 타임라인"
    - "명소 페이지는 코어 타이밍/공식을 재서술하지 않고 overview.md·finding-the-milkyway.md로 링크"

key-files:
  created:
    - src/04-mongolia/tsagaan-suvarga.md
    - src/04-mongolia/khongoryn-els.md
    - src/04-mongolia/yolyn-am.md
    - src/04-mongolia/baga-gazriin-chuluu.md
  modified:
    - src/04-mongolia/overview.md
    - src/SUMMARY.md
    - src/02-fundamentals/finding-the-milkyway.md
    - src/introduction.md

key-decisions:
  - "overview.md 달 표는 8/13~8/16 날짜 대신 '신월 후 D+0~D+3' 경과로 일반화하되 검증된 0/3/8/14% 조도·시각 데이터는 그대로 유지"
  - "day-5-0817.md(공항)는 대체 파일 없이 삭제 — 유일하게 일반화 가능했던 방진 한 줄만 overview.md '이동 시 주의' 섹션으로 흡수"
  - "명소 페이지는 코어 공식/위도 표를 중복 서술하지 않고 overview.md로, 코어 타이밍/다크스카이 이론은 overview.md에서 finding-the-milkyway.md로 링크하는 단방향 참조 체인 유지"
  - "차강소브라가 44.577°N만 본문에 사용, 동명 광산 좌표(108.3x)는 문서 전체에서 완전히 배제 — grep 검증으로 강제"
  - "docs/ 빌드 산출물은 이번 실행에서 커밋하지 않음(명시적 지시) — 01-05의 과거 Deploy-from-branch 커밋 관행과 다르게, 이번 plan 컨텍스트의 constraint를 우선 적용"

patterns-established:
  - "여행지별 가이드 페이지는 이 단일 패스 5-섹션 템플릿(위치/GPS · SITE-02 구도 · 코어 상황(링크) · SITE-03 주의사항 · 타임라인)을 향후 추가 명소에도 재사용 가능"

# Metrics
duration: ~8min
completed: 2026-07-09
---

# Phase 5 Plan 01: 몽골 여행지별 촬영 가이드 재구성 Summary

**개인 5박 몽골 일정(Day 1~5·8/13~8/17·촬영 결과 two-pass) 문서를 검증된 GPS·달·코어 수치를 그대로 재사용하는 일반 "여행지별 촬영 가이드"(SITE-01/02/03)로 재구성 — git mv로 히스토리 보존하며 4개 명소 파일 rename, day-5(공항) 삭제, SUMMARY/finding-the-milkyway/introduction fold-in, `mdbook build src` green.**

## Performance

- **Duration:** ~8 min (첫 커밋 17:34:16 ~ 마지막 커밋 17:37:06 KST, 사전 읽기 포함)
- **Started:** 2026-07-09T08:29:00Z (approx, 파일 읽기 시작)
- **Completed:** 2026-07-09T08:37:23Z
- **Tasks:** 3/3
- **Files modified:** 14 (overview.md, 4개 신규 명소 파일 + 4개 구 Day 파일 삭제, 4개 이미지 폴더 rename, SUMMARY.md, finding-the-milkyway.md, introduction.md, day-5 페이지·이미지 삭제)

## Accomplishments
- `overview.md`를 SITE-01 "고비 촬영 일반 원리"로 재작성 — GPS 표에서 Day 열·공항 행 제거, 신월 후 D+0~D+3 예시 달 표로 일반화(0/3/8/14% 검증 데이터 유지), 코어 고도 공식(90°−위도−29°)·표 유지, day-5 방진 한 줄을 "이동 시 주의"로 흡수
- 4개 Day 페이지를 `git mv`로 명소명 파일(tsagaan-suvarga/khongoryn-els/yolyn-am/baga-gazriin-chuluu.md) + 이미지 폴더로 rename, 두 번째 패스("촬영 결과") 제거하고 단일 패스(위치/GPS · SITE-02 구도 · 코어 상황(overview 링크) · SITE-03 주의사항 · 타임라인) 템플릿으로 재작성
- 욜링암 협곡 코어 차폐 경고(벽 200m vs 코어 17.5°)와 차강소브라가 44.577°N/광산 좌표 혼동 경고를 verbatim 유지
- day-5-0817.md(공항)와 이미지 폴더를 `git rm`으로 삭제
- SUMMARY.md 3부를 "몽골 여행지별 촬영 가이드"로 재제목하고 5개 링크(overview + 4 site, 공항 drop)로 교체 — 다른 부는 무변화
- `finding-the-milkyway.md`(§2·§3의 8/13~8/17·5박 dated framing 제거, 신월 전후 원리 일반화)와 `introduction.md`(개인 여행 프레이밍 제거)를 fold-in
- `mdbook build src` exit 0, broken-link 경고 없음

## Task Commits

Each task was committed atomically:

1. **Task 1: overview.md → SITE-01 재작성** - `1e7042c` (feat)
2. **Task 2: Day 페이지 4개 → 명소명 파일 rename + 단일 패스 재작성** - `9dd25a6` (feat)
3. **Task 3: SUMMARY 3부 재제목+5링크 + day-5 삭제 + fold-in + build** - `cce24af` (feat)

**Plan metadata:** (다음 커밋에서 기록)

## Files Created/Modified
- `src/04-mongolia/overview.md` - SITE-01 고비 촬영 일반 원리 (GPS 표·신월 후 달 표·코어 공식/표·이동 주의)
- `src/04-mongolia/tsagaan-suvarga.md` (from day-1-0813.md) - SITE-02/03 차강소브라가
- `src/04-mongolia/khongoryn-els.md` (from day-2-0814.md) - SITE-02/03 홍고린엘스
- `src/04-mongolia/yolyn-am.md` (from day-3-0815.md) - SITE-02/03 욜링암 (협곡 차폐 경고 유지)
- `src/04-mongolia/baga-gazriin-chuluu.md` (from day-4-0816.md) - SITE-02/03 바가가즈링 촐로 (최저 코어 14.6°)
- `src/images/mongolia/{tsagaan-suvarga,khongoryn-els,yolyn-am,baga-gazriin-chuluu}/` (from day-1~4/) - 이미지 폴더 rename
- `src/SUMMARY.md` - 3부 재제목 + 5개 site 링크
- `src/02-fundamentals/finding-the-milkyway.md` - §2·§3 개인 일정 프레이밍 제거
- `src/introduction.md` - 개인 여행 프레이밍 제거
- `src/04-mongolia/day-5-0817.md`, `src/images/mongolia/day-5/` - 삭제(git rm)

## Decisions Made
- 달 표는 "신월 후 D+0~D+3" 경과로 일반화하되 검증된 0/3/8/14% 조도·시각은 archive/04-RESEARCH.md 그대로 재사용 (재도출 없음)
- day-5(공항)는 일반화 가능한 콘텐츠가 방진 한 줄뿐이라 대체 파일 없이 삭제, 해당 문장만 overview.md로 흡수
- 명소 페이지는 코어 공식/타이밍 이론을 재서술하지 않고 overview.md → finding-the-milkyway.md로 이어지는 단방향 링크 체인 유지 (중복 서술 방지)
- 차강소브라가 광산 혼동 좌표(108.3x)는 문서 전체에서 완전 배제, grep 게이트로 강제 검증
- docs/ 빌드 산출물은 이번 실행 지침(명시적 "do NOT commit docs/")에 따라 커밋하지 않음 — working tree에는 최신 빌드 반영됨

## Deviations from Plan

None - plan executed exactly as written. 3개 태스크 모두 계획대로 진행, verify grep 전부 통과, `mdbook build src` exit 0.

## Issues Encountered

파일 rename 시 `git status`가 `.gitkeep`(내용 동일한 빈 파일들) 간 rename 쌍을 실제 `git mv` 소스/대상과 다르게 표시(예: day-1 → baga-gazriin-chuluu로 표시)했으나, 이는 git의 유사도 기반 rename-detection이 빈 파일들을 임의로 짝지은 표시상의 문제일 뿐 — 실제 작업 디렉터리 상태(`ls`)로 재확인한 결과 폴더는 의도한 대로 정확히 매핑되어 있었다(tsagaan-suvarga/, khongoryn-els/, yolyn-am/, baga-gazriin-chuluu/ 모두 정상). 실질적 영향 없음.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- Phase 5는 이 plan(05-01) 하나로 완료 — 몽골 여행지별 촬영 가이드가 개인 일정과 무관하게 읽을 수 있는 일반 가이드로 전환됨.
- Phase 6(부록·보너스·배포)로 진행 가능. 부록(REF/BONUS)과 배포 단계 착수에 블로커 없음.
- 실제 몽골 사진은 여전히 placeholder(HTML 주석)만 존재 — 향후 실사진 확보 시 이미지 삽입은 별도 작업으로 남아있음(이번 phase 범위 아님).

---
*Phase: 05-몽골-여행지별-촬영-가이드*
*Completed: 2026-07-09*
