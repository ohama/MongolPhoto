---
phase: 21-drone-video-shooting
plan: 01
subsystem: content
tags: [drone, video, dji-mini-5-pro, nd-filter, 180-shutter, d-log-m, mdbook]

# Dependency graph
requires:
  - phase: 20-2부-재구성-스텁
    provides: video-index.md / video-shooting.md 스텁 + SUMMARY 등록 + create-missing=false 빌드 게이트
  - phase: (기존 v1.1 드론)
    provides: dji-mini5pro-settings.md(ND 선택·f/1.8 고정 조리개), gobi-environment.md, flight-and-battery.md, drone-mongolia-regulations.md
provides:
  - video-index.md 실제 랜딩(왜 영상인지 + 두 하위 페이지 링크 + 트립 후 교체 고지)
  - video-shooting.md VSHOOT-01 설정 인과 사슬(프레임레이트→180도 셔터→영상용 ND→D-Log M vs Normal→WB·노출 고정)
  - 초보 기본값 Normal 확정, D-Log M 고급 옵트인 + CapCut 데스크톱 그레이딩 전방 링크
affects: [22-capcut-편집(Log→Rec.709 그레이딩 경로 승계), 23-예시-스토리보드-최종-게이트, video-movements(VSHOOT-02)]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "인과 사슬 서술: 각 설정을 앞 설정의 결과로 왜 필요한지 연결(프레임레이트→셔터→ND)"
    - "[verify@write] 격리: 미확인 스펙만 플래그+공식 URL, 검증 사실은 단정"
    - "승계 링크: 규제·ND 선택·환경·비행은 재도출 없이 기존 페이지로 링크"

key-files:
  created: []
  modified:
    - src/09-drone/video-index.md
    - src/09-drone/video-shooting.md

key-decisions:
  - "초보 기본값 = Normal 프로파일 확정, D-Log M은 후보정 필수 고급 옵트인으로 서술"
  - "영상용 ND '필수' 이유를 사진과 대비(셔터 자유도 유무)로 설명 — 선택 규칙 자체는 dji-mini5pro-settings.md 승계"
  - "180도 셔터 규칙은 절대 법칙 아닌 관례(convention)로 서술"
  - "Task별 커밋 대신 빌드 게이트 후 두 파일 단일 커밋(plan Task 3 지시)"

patterns-established:
  - "트립(8/13) 후 실촬영본·UI 캡처 교체 정직 고지 blockquote"
  - "새 용어 괄호 뜻풀이 + 지침체 존댓말(기존 09-drone 톤)"

# Metrics
duration: 3min
completed: 2026-07-15
---

# Phase 21 Plan 01: 드론 영상 촬영 랜딩 + 촬영 설정 논리 Summary

**프레임레이트→180도 셔터→영상용 ND→D-Log M vs Normal→WB 고정 인과 사슬로 VSHOOT-01을 채운 video-shooting.md와 두 하위 페이지로 안내하는 video-index.md 랜딩 (mdbook 그린)**

## Performance

- **Duration:** 3 min
- **Started:** 2026-07-15T05:01:40Z
- **Completed:** 2026-07-15T05:04:31Z
- **Tasks:** 3
- **Files modified:** 2

## Accomplishments

- **video-shooting.md (VSHOOT-01 척추):** 프레임레이트(룩·슬로모 헤드룸) → 180도 셔터 규칙(관례, "영상다움") → 영상용 ND(사진과 달리 왜 필수인가) → D-Log M vs Normal(초보 Normal 기본값) → 화이트밸런스·노출 고정을 각 단계 "왜"와 함께 순서대로 서술. 촬영 시점에 되돌릴 수 없는 함정을 앞에 배치.
- **video-index.md 랜딩:** "왜 영상인가 + 편집 염두 촬영" 도입, 두 하위 페이지(video-shooting·video-movements) 링크, 읽는 순서 안내, 스텁 "작성 예정" 티저 제거, 트립 후 교체 정직 고지.
- **초보 기본값 Normal 확정** — D-Log M은 후보정 필수 고급 옵트인으로 격리하고, 실제 그레이딩 경로(Log→Rec.709→노출·WB→룩)는 capcut-index.md로 전방 링크.
- **영상용 ND의 "왜"** 차별화 — 사진은 셔터 자유도가 있지만 영상은 셔터가 fps에 고정되어 자유도가 없다는 인과로 명확히.
- **승계 링크** — 규제·ND 선택·고비 환경·비행은 재도출 없이 기존 페이지로 링크.
- **mdbook build src 그린**(create-missing=false, 죽은 링크 0), docs/ 미커밋.

## Task Commits

빌드 게이트가 있는 문서 플랜이라, plan Task 3 지시에 따라 Task 1·2 작성 후 단일 커밋으로 기록:

1. **Task 1: video-index.md 랜딩** — `c743b03`에 포함
2. **Task 2: video-shooting.md 인과 사슬** — `c743b03`에 포함
3. **Task 3: 빌드 게이트 + docs 복원 + 개별 스테이징 커밋** — `c743b03` (docs)

## Files Created/Modified

- `src/09-drone/video-index.md` - 드론 영상 촬영 그룹 랜딩(왜 영상 + 두 하위 페이지 링크 + 트립 후 교체 고지)
- `src/09-drone/video-shooting.md` - VSHOOT-01 설정 인과 사슬 본문(82줄)

## 확정 사실 vs [verify@write] 격리

**단정한 검증 사실(STACK.md 근거):**
- D-Log M·HLG = 10-bit 4:2:0 H.265
- D-Log M/HLG 최대 ISO 3200 / 일반(Normal) 모드 최대 ISO 12800
- f/1.8 고정 조리개(dji-mini5pro-settings.md v1.1 기확립 — 승계·참조, 신규 아님)
- 180도 셔터 규칙 = 관례(convention), ND-for-video 논리 = 촬영 관례

**[verify@write]/미확인으로 격리(공식 URL https://www.dji.com/mini-5-pro/specs 부기):**
- 정확한 프레임레이트 상한(예: 4K 120fps / FHD 240fps는 재확인 대상으로 표기)
- "진짜 세로(true vertical)" 전용 영상 모드 — 회전형 짐벌로 물리적 세로 촬영은 가능하나 전용 모드 공식 표기는 미확인

**혼입 방지:** Mini 4 Pro 수치(4K/100, 150Mbps 등) 0건(grep 확인).

## 승계·전방 링크 목록

- **승계(재도출 없이 링크):**
  - `../08-references/drone-mongolia-regulations.md` — 주간·VLOS·고도 규제
  - `dji-mini5pro-settings.md` — ND 선택 규칙(약한=황혼/강한=한낮, ND8/32/128) + f/1.8 고정 조리개
  - `flight-and-battery.md` — 부드러운 비행·Cine/Tripod·배터리·RTH
  - `gobi-environment.md` — 바람·열·모래(하루 초반 비행)
- **전방 링크:**
  - `capcut-index.md` — D-Log M 그레이딩(LUT 임포트는 CapCut 데스크톱 전용, Log→Rec.709 순서)
  - `video-movements.md` — 다음 페이지(시네마틱 움직임 샷, VSHOOT-02)

## Decisions Made

- **Task별 커밋 대신 빌드 게이트 후 단일 커밋:** plan Task 3이 mdbook 그린 검증 후 두 파일을 개별 스테이징해 단일 커밋하도록 명시 — 문서 플랜 특성상 이 지시를 따름(task_commit_protocol의 per-task 커밋보다 플랜의 명시 지시 우선).
- 나머지는 플랜대로 실행.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] "Mini 4 Pro" 문자열이 verify 스크립트를 오탐지시켜 제거**
- **Found during:** Task 2 (video-shooting.md 작성 후 검증)
- **Issue:** 독자에게 "다른 기종 숫자 섞지 말라"고 경고하는 문장에서 "Mini 4 Pro"를 명시했더니, plan Task 2 verify(`grep -c "Mini 4 Pro..." = 0`)가 혼입으로 오탐지(1건).
- **Fix:** 경고 문장을 "이전 세대 기종의 값과 다르므로 다른 기종 숫자를 섞지 마세요"로 재서술 — 의미(혼입 금지 경고)는 유지하고 문자열만 제거.
- **Files modified:** src/09-drone/video-shooting.md
- **Verification:** `grep -c "Mini 4 Pro\|150Mbps\|4K/100"` = 0 재확인.
- **Committed in:** c743b03

---

**Total deviations:** 1 auto-fixed (1 bug/검증 정합)
**Impact on plan:** 검증 통과를 위한 문구 정합만, 내용·논리 변화 없음. 스코프 크립 없음.

## Issues Encountered

None - 3개 태스크 모두 계획대로 완료, mdbook build 그린.

## User Setup Required

None - 외부 서비스 설정 불필요.

## Next Phase Readiness

- **VSHOOT-01 완료** — 설정 논리 척추가 실제 본문으로 채워짐. 다음: `21-02`(시네마틱 움직임 샷, VSHOOT-02) 또는 Phase 22(CapCut, 병렬 가능).
- **전방 링크 계약:** video-shooting.md가 capcut-index.md에 "Log→Rec.709→노출·WB→룩" 그레이딩 순서를 약속 — Phase 22 CapCut 파트가 이 순서를 실제로 채워야 함.
- **트립 후 교체 대기:** 실촬영본·DJI Fly UI 캡처는 8/13 트립 이후 저자 직접 교체(플레이스홀더 고지 존재).
- **[verify@write] 미해소 항목:** 정확 fps 상한·true-vertical 모드는 여전히 공식 스펙 재확인 대상(격리 표기됨).

---
*Phase: 21-drone-video-shooting*
*Completed: 2026-07-15*
