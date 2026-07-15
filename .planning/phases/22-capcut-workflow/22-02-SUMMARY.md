---
phase: 22-capcut-workflow
plan: 02
subsystem: content
tags: [capcut, color-grading, d-log-m, music-licensing, content-id, export, jitter, korean-docs, mdbook]

# Dependency graph
requires:
  - phase: 21-drone-video-shooting
    provides: "video-shooting.md D-Log M 그레이딩 순서 계약(Log→Rec.709→노출·WB→룩) + 데스크톱 LUT 예고"
  - phase: 22-capcut-workflow (22-01)
    provides: "capcut-index 랜딩 + capcut-basics(데스크톱 LUT·무료/Pro) + capcut-cut(11단계 척추 1~6단계)"
provides:
  - "capcut-grade-speed.md 실본문 — D-Log M 순서 그레이딩(변환 먼저→노출·WB→룩, 생 Log 룩 LUT 금지, 데스크톱 LUT) + Normal 가벼운 보정 + 음악·비트싱크 + 음악 라이선스 콜아웃(Content ID)"
  - "capcut-export.md 실본문 — 자막·전환 절제 + 내보내기(해상도/fps/비트레이트 매칭·촬영보다 높은 fps 금지 저더 방지·1080p 무료 무워터마크·4K=Pro)"
affects: [23-example-storyboard, 최종 빌드·링크 게이트]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "음악 라이선스 blockquote 경고 콜아웃 패턴(> ⚠️): TikTok≠YouTube·Content ID·오디오 보관함 기본값·Unlisted 선확인"
    - "[verify@write] 격리 유지: 비트레이트 수치·유료음원 요금·CapCut 메뉴 위치 단정 금지"

key-files:
  created: []
  modified:
    - src/09-drone/capcut-grade-speed.md
    - src/09-drone/capcut-export.md

key-decisions:
  - "음악 라이선스를 이 밀스톤 최대 지뢰로 취급 — blockquote ⚠️ 콜아웃 2개로 시각적 강조, 안전 기본값 순서(오디오 보관함→로열티프리→무음) + Unlisted 선확인 명시"
  - "D-Log 그레이딩 순서를 video-shooting.md 계약 이행으로 백링크 처리(순서 재정의 아님)"
  - "빌드 게이트 미소유(22-01 소유) — grep-verify만 수행, mdbook build 미실행(docs 경합 방지)"

patterns-established:
  - "스코프 격리: 음악 라이선스 본문은 grade-speed 전용, export는 링크로만 참조(Content ID grep=0 검증)"

# Metrics
duration: 8min
completed: 2026-07-15
---

# Phase 22 Plan 02: CapCut 색보정·음악·내보내기 Summary

**D-Log M 순서 그레이딩(변환 먼저→노출·WB→룩)과 이 밀스톤 최대 지뢰인 음악 라이선스(Content ID·TikTok≠YouTube·Unlisted 선확인) blockquote 콜아웃, 그리고 저더 방지 내보내기(촬영보다 높은 fps 금지)를 담아 CapCut 편집 그룹 뒤 절반 스텁 2개를 실본문으로 교체**

## Performance

- **Duration:** ~8 min
- **Started:** 2026-07-15
- **Completed:** 2026-07-15
- **Tasks:** 3
- **Files modified:** 2

## Accomplishments
- **capcut-grade-speed.md**: 색보정 두 갈래(Normal 가벼운 1패스 + 클립 색 매칭 / D-Log M 고정 순서 ①Log→Rec.709 변환 먼저 ②노출·WB ③룩), 생 raw Log 룩 LUT 금지 ⚠️ 경고, 외부 LUT=데스크톱 전용, video-shooting.md 그레이딩 계약 이행 백링크, 음악·비트싱크(다운비트 컷 스냅·볼륨·페이드), 그리고 음악 라이선스 blockquote 콜아웃(Content ID·"TikTok 허용≠YouTube 허용"·YouTube Studio 오디오 보관함 기본값·로열티프리 이름만·Unlisted 선확인).
- **capcut-export.md**: 자막 절제·전환 절제(하드컷/매치컷 기본, 특수 전환 1~2회) + 내보내기 4대 설정(해상도 소스 매칭·업스케일 금지, 저더 방지 = 촬영보다 높은 fps 금지·보간 스터터 설명, 비트레이트 범위 8–12/35–60 Mbps `[verify@write]`, 1080p 무료 무워터마크·4K=Pro).
- 정직성 격리 전량 유지: 요금 USD/원 숫자 0건, 지어낸 URL 0건, 스크린샷=저자 직접 캡처 플레이스홀더 각 파일 배치.

## Task Commits

1. **Task 1+2: 두 챕터 본문 작성** - `c3f75fd` (docs)
2. **Task 3: grep-verify + 개별 스테이징 커밋** - `c3f75fd` (동일 커밋, 계획대로 단일 커밋)

**Plan metadata:** (this SUMMARY + STATE + ROADMAP commit)

## Files Created/Modified
- `src/09-drone/capcut-grade-speed.md` - 색보정(D-Log M 순서 + Normal 가벼운 보정) + 음악·비트싱크 + 음악 라이선스 콜아웃 (70줄)
- `src/09-drone/capcut-export.md` - 자막·전환 절제 + 내보내기(해상도/fps/비트레이트·저더 방지) (58줄)

## Decisions Made
- 음악 라이선스를 blockquote ⚠️ 2개로 시각 강조(콜아웃 헤더 + 안전 기본값·Unlisted 세부), 순서형 안전 기본값 제시.
- D-Log 순서는 재정의가 아니라 video-shooting.md 계약 이행 백링크로 처리.
- 빌드 게이트 미소유 원칙 준수 — grep-verify만, mdbook build 미실행.
- min_lines 70 충족 위해 비트싱크 절에 볼륨·페이드 실용 문단 1개 추가(68→70줄).

## Deviations from Plan
None - plan executed exactly as written. (min_lines 70 충족을 위한 볼륨·페이드 문단 추가는 계획된 must_haves 임계 충족이며 스코프 확장 아님.)

## Issues Encountered
None.

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- CapCut 편집 그룹 5챕터 중 4개 실본문 완료(basics·cut·grade-speed·export). storyboard.md는 Phase 23이 소유.
- Phase 23 최종 빌드/링크 게이트에서 grade-speed·export 신규 링크(capcut-basics.md, video-shooting.md, capcut-cut.md, capcut-export.md, capcut-grade-speed.md, capcut-storyboard.md) 죽은 링크 검증 필요.
- [verify@write] 잔여 격리: 비트레이트 정확 수치, 유료음원 요금, CapCut 색·LUT·내보내기 메뉴 위치, 스크린샷(트립 후 저자 캡처).

---
*Phase: 22-capcut-workflow*
*Completed: 2026-07-15*
