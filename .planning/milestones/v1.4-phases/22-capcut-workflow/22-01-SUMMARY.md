---
phase: 22-capcut-workflow
plan: 01
subsystem: content
tags: [capcut, drone-video, editing, mdbook, honesty-isolation, d-log-m, davinci]

# Dependency graph
requires:
  - phase: 20-restructure
    provides: capcut-index/basics/cut/grade-speed/export/storyboard 스텁 + create-missing=false 랜딩 구조
  - phase: 21-drone-video-shooting
    provides: video-shooting.md 인과 사슬 + D-Log M 데스크톱 LUT 그레이딩 순서 전방 계약
provides:
  - "capcut-index.md 그룹 랜딩(읽는 순서 + 5링크, 스텁 티저 제거)"
  - "capcut-basics.md 설치·모바일vs데스크톱·인터페이스·무료/Pro·워터마크·DaVinci·ByteDance 캐비어트"
  - "capcut-cut.md 11단계 척추 1~6단계(가져오기·배치·컷/트림·스토리 순서·속도·안정화)"
  - "빌드 게이트: mdbook build 그린(죽은 링크 0), docs/ 미커밋"
affects: [22-02-capcut-grade-export, 23-storyboard-final-gate]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "정직성 격리: 요금 USD/KRW·메뉴 위치 미확인은 [verify@write]/미확인 플레이스홀더, 검증 사실만 단정"
    - "전방/백링크 계약: cut→video-shooting(슬로모 헤드룸)·cut/basics→grade-speed(그레이딩·라이선스)"
    - "스크린샷=저자 직접 캡처 예정 HTML 주석 플레이스홀더(신규 이미지 에셋 0)"

key-files:
  created: []
  modified:
    - src/09-drone/capcut-basics.md
    - src/09-drone/capcut-cut.md
    - src/09-drone/capcut-index.md

key-decisions:
  - "무료 1080p 자체 편집=워터마크 없음, 4K·HDR·Pro 딱지 템플릿=Pro/워터마크로 경계 단정"
  - "외부 LUT 임포트 데스크톱 전용 → D-Log M 그레이딩은 데스크톱 필수(모바일은 Normal 촬영용)"
  - "요금 숫자 본문 미기재(변동성 큼) — 공식/앱 내 결제 화면 확인 유도 + [verify@write]"
  - "과안정화 크롭·왜곡 경고, 흔들림은 촬영에서 우선 해결(안정화는 예외 처리)"

patterns-established:
  - "지침체 존댓말 + 괄호 뜻풀이(video-shooting.md 톤 승계)"
  - "빌드 게이트 소유 플랜: 세 파일 작성 후 mdbook build 그린 검증 → docs/ restore·clean → docs/ 미커밋"

# Metrics
duration: 18min
completed: 2026-07-15
---

# Phase 22 Plan 01: CapCut 입문·컷/속도 챕터 Summary

**CapCut 편집 그룹 앞 절반(그룹 랜딩 + 설치·무료/Pro + 11단계 워크플로 1~6단계)을 정직성 격리·전방 링크 계약을 지켜 실본문으로 채우고 빌드 게이트 그린으로 확정**

## Performance

- **Duration:** ~18 min
- **Started:** 2026-07-15
- **Completed:** 2026-07-15
- **Tasks:** 3
- **Files modified:** 3

## Accomplishments
- capcut-basics.md: 모바일vs데스크톱(외부 LUT 임포트=데스크톱 전용 → D-Log M 그레이딩 데스크톱 필수), 무료 1080p 무워터마크 / 4K·HDR·Pro 딱지 템플릿=Pro·워터마크 경계, DaVinci 무료 대안, ByteDance 캐비어트, 요금 미확인 격리
- capcut-cut.md: 11단계 척추 1~6단계(가져오기 기준 fps → 배치 → 컷/트림 여유 프레임 → establishing/build/climax/resolve 순서 → 슬로모 vs 스피드 램프 → 아껴 쓰는 안정화·과크롭 경고), video-shooting 백링크·grade-speed 전방 링크
- capcut-index.md: 실 랜딩(읽는 순서 + 5개 하위 챕터 링크), 스텁 그룹 티저 제거, 스토리보드=적용편 명시
- 빌드 게이트(이 플랜 소유): mdbook build 그린(죽은 링크 0), docs/ restore·clean 후 미커밋

## Task Commits

각 태스크는 개별 스테이징으로 원자 커밋(`git add .` 미사용, docs/ 미포함):

1. **Task 1: capcut-basics.md** - `4437250` (docs)
2. **Task 2: capcut-cut.md** - `86a7728` (docs, min_lines 충족 위해 amend)
3. **Task 3: capcut-index.md 랜딩 + 빌드 게이트** - (index 커밋 HEAD) (docs)

_참고: 워크플로의 태스크별 원자 커밋 프로토콜에 따라 3개 커밋으로 분리(플랜 Task 3 문구의 단일 통합 커밋 대신). 세 파일 모두 개별 스테이징·docs/ 미포함은 동일하게 준수._

## Files Created/Modified
- `src/09-drone/capcut-basics.md` - 설치·데스크톱 권장 이유·인터페이스·무료/Pro·워터마크·DaVinci·ByteDance 캐비어트 (60줄)
- `src/09-drone/capcut-cut.md` - 11단계 척추 1~6단계(가져오기·배치·컷/트림·순서·속도·안정화) (61줄)
- `src/09-drone/capcut-index.md` - 그룹 랜딩(읽는 순서 + 5링크, 스텁 티저 제거)

## Decisions Made
- 무료 1080p 자체 편집=워터마크 없음 / 4K·HDR·Pro 딱지 템플릿=Pro·워터마크로 경계를 검증 사실만 단정
- 외부 LUT 임포트 데스크톱 전용 → D-Log M 그레이딩 데스크톱 필수(video-shooting.md D-Log 옵트인과 연결)
- 요금 USD/KRW·정확 메뉴 위치는 미확인/[verify@write]로 격리(본문에 숫자 미기재)
- 안정화는 예외 처리(짐벌 촬영본 대부분 불필요, 과하면 크롭·왜곡, 4K 유리, 흔들림은 촬영에서 우선 해결)

## Deviations from Plan

### 경미 편차

**1. [Rule 3 - 워크플로 커밋 프로토콜] Task 3 단일 통합 커밋 → 태스크별 원자 커밋 3개로 분리**
- **Found during:** Task 1~3 (실행 프로토콜 정합)
- **Issue:** 플랜 Task 3 action은 세 파일을 한 커밋으로 묶는 문구였으나, 실행 워크플로의 표준은 태스크 완료 즉시 개별 커밋(원자성·bisect 이점)
- **Fix:** 각 파일을 개별 스테이징으로 태스크별 커밋. 플랜의 핵심 제약(개별 스테이징·`git add .` 금지·docs/ 미포함·빌드 그린)은 모두 준수
- **Files modified:** 없음(커밋 방식만)
- **Verification:** `git status --porcelain docs/` 비어 있음, 각 커밋에 docs/ 0건, 세 파일 모두 tracked·수정 반영
- **Committed in:** 4437250 / 86a7728 / index HEAD

**2. capcut-cut.md 라인 수 보강(amend)**
- **Found during:** Task 2 검증(artifact min_lines 60)
- **Issue:** 초안 57줄 → 이후 59줄, 아티팩트 최소 60줄 미달
- **Fix:** 스코프 침범 없이(음악/내보내기 미언급) 스토리 순서 고비 예시 1문단 + 안정화 판단 기준 1문단 추가 → 61줄, 커밋 amend
- **Verification:** `wc -l` 61, 스코프 침범 grep(Content ID|로열티프리|비트레이트) 0건 유지

---

**Total deviations:** 2 (커밋 방식 정합 1, 라인 수 보강 1) — 스코프·정직성 제약 무침범
**Impact on plan:** 본문 내용·정직성·링크 계약·빌드 게이트 요구는 그대로 충족. 커밋 세분화만 표준화.

## Issues Encountered
None - 모든 태스크 검증 통과, 빌드 게이트 그린.

## User Setup Required
None - 외부 서비스 설정 불필요.

## Next Phase Readiness
- CapCut 그룹 앞 절반 완료. 다음(22-02)은 뒷 절반: capcut-grade-speed.md(D-Log M 그레이딩 순서 Log→Rec.709→노출·WB→룩 + 음악 라이선스 Content ID 경고) + capcut-export.md(자막·전환·해상도/fps/비트레이트).
- 전방 계약 이행 대상 명시: basics/cut → grade-speed로 D-Log M 그레이딩·음악 라이선스를 넘김(22-02가 채워야 함).
- 검증 필요 잔여: CapCut 요금(공식 pricing)·정확 UI 메뉴 위치는 [verify@write]로 여전히 격리 상태 — 트립 후 저자 확인·캡처 교체 예정.

---
*Phase: 22-capcut-workflow*
*Completed: 2026-07-15*
