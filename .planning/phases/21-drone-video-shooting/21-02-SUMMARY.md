---
phase: 21-drone-video-shooting
plan: 02
subsystem: content-drone-video
tags: [drone, video, movement-shots, cinematic, coverage, mdbook, korean-guide]

# Dependency graph
requires:
  - phase: 21-drone-video-shooting (21-01)
    provides: 드론 영상 파트 스캐폴딩·mdbook 빌드 게이트
  - phase: 09-drone (flight-and-battery, gobi-environment, composition)
    provides: 비행 조작·Cine/Tripod·배터리·RTH·바람/열·항공 구도
  - phase: 08-references (drone-mongolia-regulations)
    provides: 주간·VLOS·고도 규제
provides:
  - "video-movements.md 실제 본문 — 7종 시네마틱 움직임 샷(리빌·오빗·플라이오버/스루·탑다운·드로니·크레인·사이드트랙)"
  - "부드러운 비행 크래프트(느린 스틱·EXP·Cine/Tripod·샷당 한 동작·앞뒤 10초+ 여유)"
  - "편집용 커버리지(설정샷+움직임+디테일, 다양한 길이·앵글·속도) 사고"
  - "초보 우선순위(수동 샷 먼저 → 오빗 → 플라이스루 마지막)"
affects: [capcut-editing, phase-23-final-build-gate]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "링크 승계(재도출 금지): 비행·규제·환경은 기존 페이지 링크로만"
    - "샷 4항목 정형(무엇/어떻게 부드럽게/왜·언제/고비 예)"
    - "불확실 스펙 일반화(포커스트랙/POI류) + 트립-후-교체 정직 고지"

key-files:
  created: []
  modified:
    - src/09-drone/video-movements.md

key-decisions:
  - "인텔리전트 비행 기능은 정확한 Mini 5 Pro 명칭을 단정하지 않고 '포커스트랙/POI류'로 일반화"
  - "빌드 게이트 미실행 — 21-01/Phase 23 전용(false-PASS 레이스 방지), grep-verify로만 검증"

patterns-established:
  - "샷별 4항목 정형: 무엇 / 어떻게 부드럽게 / 왜·언제 / 고비 예"
  - "docs/ 미커밋 + 파일 개별 스테이징 커밋"

# Metrics
duration: 5 min
completed: 2026-07-15
---

# Phase 21 Plan 02: 시네마틱 움직임 샷 Summary

**video-movements.md 스텁을 7종 무빙 샷(리빌·오빗·플라이오버/스루·탑다운·드로니·크레인·사이드트랙) + 부드러운 비행 크래프트 + 편집용 커버리지 사고로 채운 실제 본문으로 교체**

## Performance

- **Duration:** ~5 min
- **Started:** 2026-07-15T14:04Z
- **Completed:** 2026-07-15T14:09Z
- **Tasks:** 2
- **Files modified:** 1

## Accomplishments
- 7종 대표 움직임 샷을 각각 "무엇 / 어떻게 부드럽게 나는가 / 왜·언제 / 고비 예" 4항목으로 서술
- 모든 샷 공통 크래프트 절 작성: 느린·미세 스틱, EXP 낮춤, Cine/Tripod 모드, 샷당 한 동작, 앞뒤 10초+ 여유, 긴 무빙은 배터리·하루 초반
- 편집용 커버리지(설정샷 establishing + 움직임 + 디테일, 다양한 길이·앵글·속도) 습관 절 작성
- 초보 우선순위 명시: 수동 샷(리빌·탑다운·드로니·사이드트랙) 먼저 → 오빗(인텔리전트 비행) → 플라이스루 마지막·주의
- 비행·규제·환경은 재도출 없이 링크 승계, video-shooting.md로 되돌아가기 링크 배치

## Task Commits

1. **Task 1 + Task 2: 7종 움직임 샷 + 커버리지 작성 및 개별 커밋** - `799a7eb` (docs)

_단일 파일 본문 교체라 두 태스크가 하나의 원자적 커밋으로 기록됨(빌드 게이트 미실행)._

## Files Created/Modified
- `src/09-drone/video-movements.md` - 스텁 → 7종 무빙 샷 + 부드러운 비행 크래프트 + 편집용 커버리지 + 초보 우선순위 본문

## 승계 링크 목록 (재도출 없음)
- `flight-and-battery.md` — 부드러운 비행·EXP·Cine/Tripod·배터리·RTH (2회 참조)
- `gobi-environment.md` — 바람·열, 긴 무빙은 하루 초반
- `../08-references/drone-mongolia-regulations.md` — 주간·VLOS·거리 규제 (2회 참조, 드로니 주의)
- `video-shooting.md` — 설정(fps·ND·WB)으로 되돌아가기 (2회 참조)
- `capcut-index.md` — 커버리지가 편집 재료가 된다는 전방 링크

## grep-verify 결과
- 7종 샷 소제목 모두 존재 (리빌·오빗·플라이오버/스루·탑다운·드로니·크레인·사이드트랙)
- 링크 승계 count = 5 (기준 ≥3 통과)
- 커버리지/설정샷/establishing/디테일 count = 4 (통과)
- Cine/Tripod/EXP/천천히 count = 8 (통과)
- "작성 예정" count = 0 (스텁 문구 제거 확인)
- 트립(8/13)-후-교체 정직 고지 존재
- 내부 링크 상대경로 정합 확인(09-drone 동일폴더 파일명, 08-references는 `../08-references/`), 참조 파일 5종 모두 실존

## Decisions Made
- 인텔리전트 비행 기능명은 단정하지 않고 "포커스트랙/POI류"로 일반화, 촬영 전 앱 재확인 고지 추가 (Mini 5 Pro 정확 명칭 불확실)
- mdbook 빌드 게이트 미실행 — 21-01/Phase 23 전용, grep-verify로만 검증(false-PASS 레이스 방지)

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
None.

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- video-movements.md 본문 완성 — 드론 영상 파트 척추 확보
- 실제 예시 클립·앱 캡처는 트립(8/13) 후 저자 촬영 교체 대기(정직 고지 기재됨)
- 커버리지 재료 개념이 다음 CapCut 편집 파트의 스토리·속도·비트싱크 입력으로 연결됨
- 빌드 검증은 Phase 23 최종 게이트에서 일괄 확인 예정

---
*Phase: 21-drone-video-shooting*
*Completed: 2026-07-15*
