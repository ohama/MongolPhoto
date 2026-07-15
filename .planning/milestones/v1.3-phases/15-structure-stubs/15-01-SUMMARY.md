---
phase: 15-structure-stubs
plan: 01
subsystem: docs-structure
tags: [mdbook, summary, toc, stubs, editing-part, part-numbering]
requires: [14]
provides:
  - "src/13-editing/ 스텁 9개 (2부 · 여행 사진 보정 파트 골격)"
  - "재편된 src/SUMMARY.md (2부 삽입·부 번호 +1 시프트·7부 은하수 후보정 개칭)"
  - "부 번호 시프트 반영된 introduction.md·README·내부 참조"
affects: [16, 17, 18, 19]
tech-stack:
  added: []
  patterns:
    - "mdBook create-missing=false — 모든 SUMMARY 링크는 실제 파일을 가리켜야 빌드 그린"
    - "스텁 정직성: H1 + 소개 + 티저 목록 + '준비 중' 안내만, 실제 내용은 후속 phase"
key-files:
  created:
    - src/13-editing/index.md
    - src/13-editing/lightroom-workflow.md
    - src/13-editing/software-comparison.md
    - src/13-editing/develop-order.md
    - src/13-editing/travel-recipes.md
    - src/13-editing/masking-and-detail.md
    - src/13-editing/panorama-hdr.md
    - src/13-editing/shoot-for-edit.md
    - src/13-editing/credits.md
  modified:
    - src/SUMMARY.md
    - src/introduction.md
    - README.md
    - src/08-references/mongolia-travel-info.md
    - src/08-references/practice-raw-samples.md
    - src/03-practice/template.md
    - src/11-travel/index.md
key-decisions:
  - "부 번호를 텍스트 라벨만 시프트하고 챕터 파일 경로는 전혀 이동하지 않음 — 링크 무결성 보존"
  - "13-editing/index.md에 '은하수 후보정(7부)과의 구분' 단락을 명시해 두 후보정 파트의 역할 혼동 방지"
duration: ~15 min
completed: 2026-07-14
---

# Phase 15 Plan 01: 여행 사진 보정 파트 구조 재편 + 스텁 Summary

1부 여행 사진과 드론 사이에 "2부 · 여행 사진 보정"(src/13-editing/) 파트를 신설하고, 이후 부 번호를 +1 시프트하며 기존 "6부 · 후보정"을 "7부 · 은하수 후보정"으로 개칭해 명칭 충돌을 해소한 구조 재편 + 정직한 스텁 작업. create-missing=false에서 mdbook 빌드 그린.

## 무엇을 만들었나

### 1. src/13-editing/ 스텁 챕터 9개 (신규)
정직한 스텁 골격 — 각 파일은 H1 제목 + 한두 줄 소개 + "이 장에서 다룰 내용" 티저 목록 + "준비 중" 안내로 구성. 실제 보정 절차·수치·단축키·레시피 값은 없음(그건 Phase 16-19).

| 파일 | 제목 | 후속 요구사항 |
|---|---|---|
| `index.md` | 여행 사진 보정 개요 (파트 소개 + 7부 은하수 후보정과의 구분) | — |
| `lightroom-workflow.md` | 왜 보정하나 · 비파괴 편집과 카탈로그 | EDIT-01, EDIT-03 |
| `software-comparison.md` | Lightroom Classic vs 다른 편집 앱 | TOOL-01, TOOL-02 |
| `develop-order.md` | 필수 보정 순서 (현상 모듈 17단계) | EDIT-02 |
| `travel-recipes.md` | 몽골 여행 상황별 보정 레시피 | RECIPE-01, RECIPE-02 |
| `masking-and-detail.md` | 국소 보정 — 마스킹 · 디테일 · 노이즈 | LOCAL-01 |
| `panorama-hdr.md` | 합치기 — 파노라마 · HDR 병합 | LOCAL-02 |
| `shoot-for-edit.md` | 촬영 시 고려사항 — SW를 염두에 둔 촬영 | SHOOT-01 |
| `credits.md` | 예시 사진 출처 · 라이선스 · 참고 자료 | REF-01 |

### 2. src/SUMMARY.md 재편
- "여행 사진 참고 자료" 다음·"드론 사진" 앞에 `# 2부 · 여행 사진 보정` 블록(9링크) 삽입
- 드론=3부·준비하기=4부·가기 전 연습=5부·은하수 명소별=6부로 헤딩 번호 +1 시프트 (하위 챕터 경로 불변)
- `# 6부 · 후보정` → `# 7부 · 은하수 후보정` 개칭
- 최종 헤딩 순서: 1부 여행 → 여행 참고 → 2부 보정 → 3부 드론 → 드론 참고 → 4부 준비 → 5부 연습 → 6부 은하수 명소 → 7부 은하수 후보정 → 보너스/부록/참고

### 3. 부 번호 참조 갱신
- `introduction.md`: 흐름 문장에 보정 파트 언급 추가, 명소별 5부→6부, 후보정 6부→7부, "이 책을 읽는 법" 목록에 2부 보정 삽입 후 재번호(1~7부 + 보너스)
- `README.md`: 목차에 "2부 · 여행 사진 보정" 불릿 삽입, 이후 불릿 3~7부로 시프트, 후보정→"7부 · 은하수 후보정"
- stale 참조 교정: `mongolia-travel-info.md`(04-mongolia 라벨 3부→6부 ×4), `practice-raw-samples.md`(4부 후보정→7부 은하수 후보정), `03-practice/template.md`(가기 전 연습 2부→5부), `11-travel/index.md`(산문 내 드론/은하수 부 번호 시프트 + 보정 파트 언급)
- 모든 링크 파일 경로는 불변. `software-references.md`의 `$199부터`(가격)는 false positive로 건드리지 않음.

## 빌드 그린 + docs 원복
- `mdbook build src` 종료코드 0, ERROR/broken link 없음 (create-missing=false).
- 빌드로 재생성된 `docs/`는 `git restore docs/; git clean -fdq docs/`로 원복 — 커밋에서 제외(`git status --porcelain docs/` 비어 있음 확인). CI가 docs/를 재빌드함.

## 커밋 (per-task, 개별 스테이징)
- `9d2693d` feat(15-01): 스텁 챕터 9개 생성
- `a660748` feat(15-01): SUMMARY 재편 (2부 삽입·시프트·7부 개칭)
- `3e8d375` docs(15-01): introduction·README·참조 파일 부 번호 갱신

## Deviations from Plan

None - 계획대로 실행. (Task 4는 per-task 커밋 프로토콜에 따라 단일 통합 커밋 대신 Task 1-3의 개별 커밋으로 나눠 완료했고, 빌드 게이트·docs 원복은 그대로 수행.)

## 정직성 노트
src/13-editing/의 9개 챕터는 **티저 골격 스텁**입니다 — 제목·소개·"다룰 내용" 목록·"준비 중" 안내만 있고 실제 Lightroom 단계·수치·레시피는 없습니다. 실제 보정 콘텐츠는 Phase 16-19에서 채웁니다.

## 후속 콘텐츠 phase 참고 (챕터 파일 ↔ 요구사항 매핑)
- Phase 16 (개념·카탈로그·도구): `13-editing/lightroom-workflow.md`(EDIT-01/03), `software-comparison.md`(TOOL-01/02)
- Phase 17 (순서 + 레시피): `13-editing/develop-order.md`(EDIT-02), `travel-recipes.md`(RECIPE-01/02)
- Phase 18 (국소 + 합치기): `13-editing/masking-and-detail.md`(LOCAL-01), `panorama-hdr.md`(LOCAL-02)
- Phase 19 (촬영 연동 + 크레딧): `13-editing/shoot-for-edit.md`(SHOOT-01), `credits.md`(REF-01)

## Next Step
Phase 15 완료(1/1 plan). 다음: `/gsd:plan-phase 16` (개념·카탈로그·도구 선택).
