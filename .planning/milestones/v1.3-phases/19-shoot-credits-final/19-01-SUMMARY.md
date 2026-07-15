---
phase: 19-shoot-credits-final
plan: 01
subsystem: content
tags: [mdbook, shoot-for-edit, credits, lightroom, canon-r7, cc0, honesty]
requires: [17-editing-recipes, 18-masking-merge]
provides:
  - "src/13-editing/shoot-for-edit.md 완성본 (A1~A7 편집 대비 촬영법 + 촬영/편집 배치표)"
  - "src/13-editing/credits.md 완성본 (recipe 4장 CC0 크레딧 표 + 참고 자료 링크)"
affects: [19-02-final-gate]
tech-stack:
  added: []
  patterns:
    - "editing-driven capture (편집을 알기에 촬영을 바꾼다) 앵글"
    - "크레딧 표 포맷 travel-galleries.md 재사용 + 변경 열 추가"
    - "참고 자료는 기존 페이지 링크 재사용(중복 게재 금지)"
key-files:
  created: []
  modified:
    - src/13-editing/shoot-for-edit.md
    - src/13-editing/credits.md
key-decisions:
  - "shoot-for-edit는 촬영 파트를 재작성하지 않고 콜백 링크로 위임, '왜 그렇게 찍는가'만 다룸"
  - "예시 이미지는 전부 CC0(Bernard Gagnon)만 기재 — CC BY/BY-SA 억지 추가 없음"
  - "무료 RAW/SW/튜토리얼은 08-references·07-appendix 링크 재사용, 신규 조사·나열 없음"
metrics:
  duration: "4 min"
  completed: 2026-07-15
  tasks: 3
  files-modified: 2
  commits: 1
---

# Phase 19 Plan 01: 촬영 연동(shoot-for-edit) + 크레딧(credits) Summary

스텁이던 shoot-for-edit.md·credits.md를 완성해 "2부 · 여행 사진 보정"의 촬영 연동·크레딧 마무리 장을 채웠다. "편집을 알기에 촬영을 바꾼다"(editing-driven capture) 앵글로 A1~A7 촬영 습관과 촬영/편집 배치표를 전달하고, recipe before/after 4장의 CC0 크레딧 표 + 검증된 참고 링크를 정리했다. 자기 편집분 mdbook 빌드 그린.

## What Was Built

### Task 1 — shoot-for-edit.md (SHOOT-01)
- 인트로: 좋은 원본에서 좋은 편집이 시작됨 + editing-driven capture 앵글 + travel-recipes "촬영으로 예방하기" 콜아웃의 상세판임을 명시.
- A1~A7 각 항목을 **① 촬영 시 무엇을 / ② 왜 편집에 도움 / ③ 촬영·편집 관심사**로 서술:
  - A1 RAW(CR3, 14비트 관용도), A2 하이라이트 보호(blinkies·히스토그램·EVF, 클리핑은 복구 불가), A3 ETTR(규칙 아닌 선택지·R7 대낮 효과 제한), A4 WB(리뷰용 상식값), A5 렌즈 프로파일(미확인·LR 직접 검색·develop-order 위임), A6 AEB 브라케팅·파노라마 중첩(병합 절차는 panorama-hdr 소유), A7 인카메라 초점/선명도.
- **촬영 시간 vs 편집 시간 배치표**(# / 항목 / 언제 / 한 줄 요지) — A5만 "편집(촬영 땐 인지만)".
- 콜백/상호 링크: camera-settings·av-mode-auto-iso(노출·측광 조작 위임), panorama-hdr(병합 상호 링크), develop-order(렌즈 교정), travel-recipes·credits(닫는 문단).

### Task 2 — credits.md (REF-01)
- 섹션 1 정직 캡션 원칙(before=인위적 플랫 파생, 저자 미촬영, 트립 후 교체).
- 섹션 2 크레딧 표(파일·설명·저작자·라이선스·출처·변경) — recipe-midday/goldenhour before·after 4행, 모두 Bernard Gagnon CC0. 원본 File URL은 travel-galleries.md의 검증값 재사용(Khongoryn_Els_04.jpg, Bayanzag_10.jpg).
- 섹션 3 라이선스 설명(CC0만, 억지 CC BY 미추가), 섹션 4 참고 자료(practice-raw-samples·software-references·app-software·travel-gear-tutorials 링크 재사용 + 가격 미박제 정직 안내), 섹션 5 관련 링크.

### Task 3 — 감사 + 빌드 + 커밋
- 정직성 체크리스트 7항 통과, Task 1·2 grep 전수 통과.
- `/opt/homebrew/bin/mdbook build src` 그린(ERROR/WARN 없음), docs/ restore·clean으로 미커밋.
- 두 콘텐츠 파일 개별 스테이징 단일 커밋 `78a297e`, docs/ 0건.

## Verification Evidence
- 스텁 문구 제거: 양쪽 파일 `📝 이 장은 준비 중` → 0.
- A1~A7 키워드 7/7, R7 DR "약 10.5스톱"·AEB(3·2/5/7·±3EV·1/3) 검증 표기, ETTR 규칙 아닌 선택 표기, 렌즈 프로파일 미확인 표기.
- credits: recipe 4파일 매치, Bernard Gagnon·CC0·Wikimedia(Khongoryn_Els/Bayanzag) 출처, 트립 후 교체(2026-08-13) 노트, 참고 재사용 링크.
- 빌드 그린, `git status --porcelain docs/` 빈 출력, 커밋에 docs/ 0건, src/13-editing 워킹트리 깨끗.

## Deviations from Plan
None — plan executed exactly as written. 링크 대상 파일·recipe 이미지 4장 모두 사전 존재 확인, 신규 이미지·조작 URL/가격 없음.

## Decisions Made
- shoot-for-edit는 촬영 조작 상세를 재작성하지 않고 camera-settings·av-mode로 위임 — "왜 그렇게 찍는가"만 소유.
- 크레딧은 검증된 CC0(Bernard Gagnon)만 기재, File URL은 travel-galleries.md 재사용으로 조작 방지.
- 참고 자료는 신규 조사 없이 08-references·07-appendix 링크 재사용으로 중복 최소화.

## Issues Encountered
None.

## Next Phase Readiness
- 19-02(wave 2)가 책 전체 최종 `mdbook build src` 그린 + 내부 링크 전수 스캔(dead 0) 게이트를 소유. 이 계획은 자기 편집분 2파일 빌드만 게이트했으므로, 전체 게이트는 19-02에서 수행 필요.
- 미해결 블로커 없음. 실제 몽골 RAW before/after 교체는 트립(2026-08-13) 후 과제로 credits.md에 정직 표기됨.

## Next Step
Ready for 19-02-PLAN.md (책 전체 최종 빌드·링크 게이트).
