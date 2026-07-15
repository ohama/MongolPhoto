---
phase: 17-develop-order-recipes
plan: 02
subsystem: content
tags: [lightroom, travel-recipes, before-after, imagemagick, cc0, mdbook, masking-callback]

# Dependency graph
requires:
  - phase: 17-develop-order-recipes (17-01)
    provides: "17단계 현상 순서 척추(develop-order.md) — 이 장이 실제 장면에 적용하는 뼈대"
  - phase: research/FEATURES.md
    provides: "Travel-Specific Recipes (a)~(e) 슬라이더 방향 근거"
  - phase: research/PITFALLS.md
    provides: "Pitfall 3 과보정 증상 목록"
provides:
  - "travel-recipes.md 완성: 레시피 a~e(대낮·골든아워·역광·인물·날린 하늘) 슬라이더 방향/이유"
  - "과보정(P3) 경고 박스(헤일로·과채도·크러시드 블랙·과디헤이즈 + 예방법)"
  - "CC0 before/after 2쌍(midday·goldenhour) 정직 캡션 임베드"
  - "촬영 예방 콜백(camera-settings/av-mode-auto-iso/shoot-for-edit) 링크"
  - "마스킹 도구명(Select Subject/People/Sky) + Phase 18 이월 링크"
  - "src/images/editing/ 신규 디렉터리 + CC0 파생 이미지 4개"
affects: [18-masking-detail, 19-shoot-credits, 실촬영본-교체-8월13일후]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "before/after = ImageMagick로 CC0 원본에서 파생(after=재최적화, before=인위적 플랫), 정직 캡션 4항목 필수(시연용·플랫 파생·트립 후 교체·CC0 크레딧)"
    - "빌드 게이트 단독 소유: mdbook build 후 docs/ 복원·정리·미커밋, 개별 파일 스테이징"

key-files:
  created:
    - src/images/editing/recipe-midday-before.jpg
    - src/images/editing/recipe-midday-after.jpg
    - src/images/editing/recipe-goldenhour-before.jpg
    - src/images/editing/recipe-goldenhour-after.jpg
  modified:
    - src/13-editing/travel-recipes.md

key-decisions:
  - "before/after 2쌍(최소 충족)만 생성 — 과하게 늘리지 않음. midday=khongoryn-els, goldenhour=bayanzag(둘 다 Bernard Gagnon CC0)"
  - "정직 캡션을 blockquote로 각 쌍 아래 4항목(시연·인위적 플랫 파생·트립 후 교체·CC0 크레딧) 명시 — 진짜 RAW 현상 결과 암시 금지"
  - "마스킹은 도구명만 + Phase 18 링크로 이월, 과보정 박스는 이 장 전용(develop-order.md는 한 줄 주의만)"

# Metrics
duration: 12min
completed: 2026-07-15
---

# Phase 17 Plan 02: 몽골 여행 상황별 보정 레시피 Summary

**레시피 a~e(대낮 강광·골든아워·역광·인물/피부톤·날린 하늘) 슬라이더 방향/이유 + P3 과보정 박스 + CC0 before/after 2쌍(정직 캡션) + 촬영 예방 콜백을 담아 travel-recipes.md 스텁을 완성하고, ImageMagick로 CC0 파생 이미지 4개 생성 후 빌드 게이트 통과**

## Performance

- **Duration:** ~12 min
- **Completed:** 2026-07-15
- **Tasks:** 3
- **Files modified/created:** 5 (md 1 + jpg 4)

## Accomplishments
- travel-recipes.md 스텁을 레시피 a~e 본문으로 완전 교체 — 각 레시피가 "어떤 슬라이더/어느 방향/왜"를 목록으로 제시(RECIPE-01). 방향 표시는 고정값이 아닌 상대 안내임을 인트로에 명시.
- CC0 before/after 2쌍(대낮·골든아워)을 해당 레시피 섹션에 임베드하고, 각 쌍 아래 4항목 정직 캡션(시연용 CC0·인위적 플랫 파생·트립 2026-08-13 후 교체·Bernard Gagnon/CC0/Wikimedia 크레딧) 부착(RECIPE-02).
- 과보정(P3) 경고 박스: 헤일로·형광 채도·크러시드 블랙·과디헤이즈 증상 + 예방법(값 절반·100%↔축소 토글·before/after `\` 토글·"덜 한 것이 낫다").
- 촬영 예방 콜백: (a)/(c)에 camera-settings·av-mode-auto-iso, (a)/(e)에 shoot-for-edit 링크.
- 마스킹 도구명(Select Subject=c, Select People=d, Select Sky=e)만 짧게 + Phase 18 masking-and-detail.md 링크로 이월.
- src/images/editing/ 신규 디렉터리 + ImageMagick로 CC0 파생 이미지 4개(모두 ≤2000px·-strip·품질 82).

## Task Commits

1. **Task 1: CC0 before/after 이미지 쌍 생성** — `ba25f2a` (이미지 4개, Task 3 커밋에 포함)
2. **Task 2: travel-recipes.md 본문 교체** — `ba25f2a` (docs)
3. **Task 3: 빌드 게이트 + docs 복원 + 개별 커밋** — `ba25f2a` (docs)

**Plan metadata:** 이 SUMMARY 커밋

_Note: 이미지 생성과 본문·빌드가 단일 커밋(ba25f2a)에 통합됨 — 계획 Task 3 지침(개별 파일 스테이징으로 한 커밋)에 따름._

## Files Created/Modified
- `src/13-editing/travel-recipes.md` - 레시피 a~e + P3 과보정 박스 + before/after 임베드 + 촬영 예방 콜백 + 마스킹 이월 링크 (107줄)
- `src/images/editing/recipe-midday-before.jpg` - 대낮 강광 레시피용 인위적 플랫(before), 2000x1269
- `src/images/editing/recipe-midday-after.jpg` - 대낮 강광 CC0 재최적화(after), 2000x1269
- `src/images/editing/recipe-goldenhour-before.jpg` - 골든아워 레시피용 인위적 플랫(before), 2000x1333
- `src/images/editing/recipe-goldenhour-after.jpg` - 골든아워 CC0 재최적화(after), 2000x1333

## Decisions Made
- before/after는 최소 충족인 2쌍만 생성(과확장 회피). 원본은 재다운로드 없이 기존 travel-gallery CC0(Bernard Gagnon) 사용.
- 정직 캡션을 blockquote 4항목으로 각 쌍 아래 명시해 시연이 비기만적임을 보장 — 진짜 RAW 현상 결과 암시 금지.
- 과보정 박스는 이 장 전용으로 상세화(develop-order.md는 한 줄 주의만 유지, 중복 회피).

## Deviations from Plan

None - plan executed exactly as written. 모든 grep 검증 및 빌드 게이트 통과.

## Issues Encountered
- Task 2 검증에서 `grep -c 'images/editing/recipe-'`가 2를 반환(기대 ≥4). 원인은 before/after 이미지가 마크다운 표 한 행에 함께 놓여 grep -c가 라인 수를 세기 때문. `grep -o`로 재확인 결과 4개 고유 이미지(2쌍) 모두 임베드됨을 확인 — 실질 요건(≥2쌍) 충족. 콘텐츠 문제 아님.

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- Phase 17 완료(2/2 plans). 17단계 척추(17-01) + 상황별 레시피(17-02)로 "필수 보정 순서 + 레시피" phase 종결.
- Phase 18(마스킹·디테일·노이즈)로 진행 준비 완료 — travel-recipes.md가 Select Subject/People/Sky 도구명과 masking-and-detail.md 링크를 이월해 둠.
- 블로커/개념 이월: 실제 몽골 RAW before/after로 현재 CC0 파생 예시(midday·goldenhour) 교체는 촬영 트립(2026-08-13) 이후 과제. 캡션에 교체 예정 명시됨.

---
*Phase: 17-develop-order-recipes*
*Completed: 2026-07-15*
