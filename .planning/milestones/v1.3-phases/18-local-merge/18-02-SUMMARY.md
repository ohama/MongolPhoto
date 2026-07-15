---
phase: 18-local-merge
plan: 02
subsystem: content
tags: [lightroom-classic, photo-merge, panorama, hdr, bracketing, aeb, canon-r7, deghost, dng]
requires:
  - "18-01 (masking-and-detail.md — 국소 보정 완성, forward 링크 대상)"
  - "17 (develop-order.md 17단계 척추 — 병합 DNG 재현상 콜백 대상)"
provides:
  - "panorama-hdr.md 완성본: Photo Merge Panorama/HDR/HDR Panorama 경로·용도 + Deghost + 병합 DNG 재현상 콜백 + R7 AEB·중첩 촬영 촬영 연동"
affects:
  - "19 (shoot-for-edit.md — 촬영 연동 상호 링크의 편집측 앵커 완성)"
tech-stack:
  added: []
  patterns:
    - "촬영↔편집 상호 링크(브라케팅·중첩 상세는 촬영 파트로 위임, 중복 최소화)"
    - "병합 결과 DNG를 표준 현상 순서로 재현상하라는 콜백 패턴"
key-files:
  created: []
  modified:
    - "src/13-editing/panorama-hdr.md"
key-decisions:
  - "R7 AEB 사양을 검증값(기본 3장·2/5/7 설정·±3 EV·1/3스톱)만 인쇄하고, '9장·±5 EV' 과장설은 명시적으로 반박하는 정직 콜아웃으로 처리"
  - "촬영법 상세(왜/측광/노출 판단)는 재작성하지 않고 shoot-for-edit/camera-settings/av-mode-auto-iso 링크로 위임"
  - "빌드 미실행(grep 검증만) — Phase 18 빌드 게이트는 18-01 단독 소유, docs/ 경합 회피"
duration: 12 min
completed: 2026-07-15
---

# Phase 18 Plan 02: 합치기 — 파노라마 · HDR 병합 Summary

panorama-hdr.md 스텁을 Photo Merge 세 경로(Panorama/HDR/HDR Panorama)·용도 + Deghost + 병합 DNG 재현상 콜백 + R7 AEB 검증 사양·파노라마 중첩 촬영 연동을 담은 완성본으로 교체하고, 개별 파일만 커밋(빌드 미실행).

## Accomplishments

- **인트로**: 한 컷에 안 담기는 두 장면 — 넓은 지평선(→파노라마), 거대한 명암 차(→HDR) — 을 정의하고 "카메라에서 나눠 찍어야 편집에서 합친다"는 이 장의 핵심 다리를 제시.
- **섹션 1 — Photo Merge 세 갈래**: FEATURES.md "Merge features" 표 근거로 각 메뉴 경로와 용도. Panorama(Ctrl/Cmd+M, 편집 가능 DNG 출력), HDR(브라케팅 세트 병합), HDR Panorama(고급 — 소개만). Adobe 검증 명칭만 사용.
- **섹션 2 — Deghost**: PITFALLS A6 근거. 사람·구름·풀의 움직임이 남기는 고스트를 HDR 병합 대화상자 Deghost 옵션(없음/낮음/보통/높음)으로 완화, 삼각대/정지=낮게·움직임=높게 요령.
- **섹션 3 — 병합 결과는 DNG → 재현상**: 병합 DNG는 원본과 똑같은 편집 가능 RAW이므로 develop-order.md 2~17단계를 그 위에서 재적용하라는 콜백. "합치면 끝"이 아니라 "합친 DNG를 다시 현상"이 핵심임을 강조.
- **섹션 4 — 촬영 연동(하이라이트)**: R7 AEB 검증 사양(기본 3장·2/5/7 설정·±3 EV·1/3스톱·표준→감소→증가) + -2/0/+2 예시. RAW·셔터속도만 조절 원칙 추가(FEATURES 근거). 파노라마 중첩(30~50% 겹침·노출/WB/초점 수동 고정). 공통 주의(고스트→Deghost, 초점은 촬영에서 끝). 상세는 shoot-for-edit/camera-settings/av-mode-auto-iso 링크로 위임.
- **닫는 문단**: masking-and-detail 국소 보정에 이어 합치기까지 편집 무기를 갖췄다고 정리, shoot-for-edit로 촬영 연동.

## Deviations from Plan

None — plan executed exactly as written. (min_lines 80 목표에 맞춰 검증된 실전 내용 두 문장을 추가했으나 — RAW·셔터속도만 브라케팅[FEATURES 근거], 넓이/명암 문제 판단 안내 — 계획 범위 내 보강이며 새 주장·조작 없음.)

## Honesty Audit (계획 Task 2)

- **R7 AEB 사양**: 검증값(기본 3장·2/5/7·±3 EV·1/3스톱)만 인쇄. "9장·±5 EV"는 인터넷 과장설로 명시 반박(부풀림 없음).
- **Adobe 명칭**: Photo Merge / Panorama / HDR / HDR Panorama / Deghost — FEATURES.md 표기와 일치, 가짜 메뉴명 없음.
- **병합 DNG 사실**: 편집 가능 DNG → 표준 현상 순서 재적용 서술 정확.
- **중첩·수동 고정**: 30~50% 겹침 + 노출/WB/초점 수동 고정(자동이면 이음매 티남) 명시.
- **중복 최소화**: 촬영법 상세를 재작성하지 않고 3개 촬영 링크로 위임.
- **가짜 URL/가격 없음**: 본문에 http 링크·요금 숫자 0건.
- **인위적 병합 예시 없음**: 새 이미지·조작 before/after 0건.

## Verification

grep 검증 전부 통과(빌드 미실행 — 게이트는 18-01 단독 소유):
- 스텁 문구 `📝 이 장은 준비 중` → 0
- Photo Merge 3종(`HDR Panorama|Panorama|HDR` sort -u) → 3
- Deghost/고스트 매치, DNG 매치, develop-order.md 링크 존재
- AEB / 3장 / 2·5·7 / ±3·1/3 매치
- 파노라마 30~50%·겹침·수동 고정 매치
- shoot-for-edit.md / camera-settings.md / av-mode-auto-iso.md 링크 존재
- 커밋 00a7575에 panorama-hdr.md만 포함, docs/ 미포함, `git status --porcelain docs/` 빈 출력, 커밋 후 워킹트리 깨끗

## Files Created/Modified

- Modified: `src/13-editing/panorama-hdr.md` (스텁 12줄 → 완성본 ~90줄, 80줄 insertions)

## Commits

- `00a7575` docs(18-02): write photo merge panorama/HDR + bracketing connection

## Decisions Made

- R7 AEB 과장설('9장·±5 EV')을 침묵 대신 명시 반박하는 정직 콜아웃으로 다뤄, 검증값 신뢰를 강화.
- 촬영법 상세는 위임 링크로만 처리(중복 회피) — 편집 장은 "무엇을·언제·합친 뒤 어떻게"에 집중.

## Issues Encountered

None.

## Next Phase Readiness

- Phase 18(국소 보정 + 합치기) 두 계획(18-01 masking-and-detail, 18-02 panorama-hdr) 모두 완료 → Phase 18 완료. v1.3 남은 것은 Phase 19(촬영 시 고려사항·shoot-for-edit).
- shoot-for-edit.md는 아직 스텁이지만 이 장의 촬영 연동 링크(브라케팅·중첩 상세 수신처)가 이미 걸려 있어 Phase 19 집필 시 앵커가 준비됨.
- Blocker 없음. 몽골 트립(8/13) 후 실촬영본으로 병합 예시 이미지 보강은 선택 과제(현재 이미지 없이도 무방 — LOCAL-02는 병합 이미지 미요구).

## Next Step

Phase 18 complete (2/2 plans). Ready for Phase 19 (촬영 시 고려사항 — shoot-for-edit.md).
