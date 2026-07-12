---
phase: 01-mdbook-뼈대-장비-기초-촬영법
plan: 05
subsystem: infra
tags: [mdbook, github-actions, github-pages, ci-cd, static-site]

# Dependency graph
requires:
  - phase: 01-mdbook-뼈대-장비-기초-촬영법 (01-01~04)
    provides: mdBook 뼈대 6부 구조, 장비 가이드, 촬영 기초, 연습 로그 템플릿 전체 콘텐츠 (docs/src)
provides:
  - GitHub Actions 워크플로 (.github/workflows/mdbook.yml)로 main push 시 mdbook build src → docs/ 자동 커밋·푸시
  - GitHub Pages를 "Deploy from a branch" (main, /docs)로 설정, 공개 URL https://ohama.github.io/MongolPhoto/
  - README.md에 Documentation 섹션 + 사이트 링크
  - 사람 검증 완료: 실제 배포 사이트에서 한국어 렌더링, 6부 사이드바, 1부 실콘텐츠(스텁 아님) 확인
affects: [Phase 2, Phase 3, Phase 4, Phase 5, Phase 6 — 이후 모든 phase는 동일 CI로 자동 배포됨. 새 chapter push만 하면 됨]

# Tech tracking
tech-stack:
  added: [peaceiris/actions-mdbook@v2 (GitHub Actions)]
  patterns:
    - "build-and-commit-to-branch 패턴: OIDC actions/deploy-pages 대신 워크플로가 docs/를 main에 직접 커밋 후 Pages가 그 브랜치를 서빙 (repo의 /pages 스킬 표준 패턴)"

key-files:
  created: [.github/workflows/mdbook.yml]
  modified: [README.md, docs/ (mdbook build 산출물 전체)]

key-decisions:
  - "Pages Source = Deploy from a branch (main, /docs) — OIDC 패턴과 혼용 금지 (01-RESEARCH.md Pitfall #1 결정 그대로 적용)"
  - "docs/.nojekyll 추가로 GitHub Pages의 Jekyll 처리 우회 (mdbook 산출물 그대로 서빙)"
  - "gh api로 Pages 설정 자동화 (사용자 수동 설정 불필요) — build_type=legacy, source[branch]=main, source[path]=/docs"

patterns-established:
  - "Pattern: CI push→build→commit — 이후 phase 콘텐츠 추가 시 src/**만 push하면 워크플로가 자동으로 docs/를 재빌드·재배포함, 추가 배포 작업 불필요"

# Metrics
duration: ~15min (Task 1 automation) + checkpoint wait
completed: 2026-07-09
---

# Phase 1 Plan 5: GitHub Pages 배포 Summary

**GitHub Actions(peaceiris/actions-mdbook)가 main push마다 mdBook을 빌드해 docs/를 커밋·푸시하고, GitHub Pages(Deploy from a branch: main//docs)가 https://ohama.github.io/MongolPhoto/ 에서 Phase 1 전체 콘텐츠를 공개 서빙 — 사람이 실사이트에서 한국어 렌더링과 6부 목차를 직접 확인하고 승인함**

## Performance

- **Duration:** ~15분 (Task 1 자동화) + checkpoint 대기 (사람 검증)
- **Started:** 2026-07-09T13:53:12+09:00 (커밋 2dc6a15 타임스탬프 기준)
- **Completed:** 2026-07-09 (checkpoint 승인)
- **Tasks:** 2 (1 auto + 1 checkpoint:human-verify)
- **Files modified:** 3개 카테고리 (.github/workflows/mdbook.yml 신규, README.md 수정, docs/ 48개 산출물 커밋)

## Accomplishments
- `.github/workflows/mdbook.yml` 생성: push(main/master, paths src/**) 또는 workflow_dispatch 트리거 시 `mdbook clean src && mdbook build src` 후 `docs/.nojekyll` 생성, 변경 있으면 github-actions[bot] 이름으로 "docs: rebuild mdBook site" 커밋·푸시
- README.md에 `## Documentation` 섹션 추가 — `[몽골 은하수 촬영기](https://ohama.github.io/MongolPhoto/)` 링크
- 로컬 `docs/` 산출물(48개 파일) 최초 커밋 및 push
- `gh api`로 GitHub Pages를 Deploy-from-branch(main, /docs)로 설정 (수동 UI 조작 없이 자동화)
- Actions 워크플로 첫 실행 성공 확인 — 봇 커밋 `f624b4b` "docs: rebuild mdBook site"가 원격에 반영됨
- 사람이 실제 배포 사이트(https://ohama.github.io/MongolPhoto/)를 브라우저로 열어 검증: 소개 페이지 제목("소개 - 몽골 은하수 촬영기"), 사이드바 6부 목차, 카메라·렌즈 페이지(마운트별 소니 E/후지 X/니콘 Z 실콘텐츠 + 크롭계수 표), 500/NPF 룰 페이지, 연습 로그 템플릿 렌더링 확인 후 "승인"으로 명시적 응답

## Task Commits

Each task was committed atomically:

1. **Task 1: CI 워크플로 + README 링크 + push + Pages 설정 (PUB-02)** - `2dc6a15` (feat)
   - 원격 반영 후 CI가 자동 생성한 후속 커밋: `f624b4b` "docs: rebuild mdBook site" (github-actions[bot])
2. **Task 2: checkpoint:human-verify** - 코드 커밋 없음 (사람 검증 전용 게이트); 사용자 응답 "승인"으로 통과

**Plan metadata:** (본 커밋에서 생성) `docs(01-05): complete GitHub Pages 배포 plan`

## Files Created/Modified
- `.github/workflows/mdbook.yml` - mdBook build-and-commit-to-branch CI 워크플로 (peaceiris/actions-mdbook@v2)
- `README.md` - Documentation 섹션 + GitHub Pages 링크 추가
- `docs/` - mdbook build 산출물 48개 파일 (index.html, 01-gear/*, 02-fundamentals/*, 03-practice/*, .nojekyll 등) — 로컬 초기 커밋(2dc6a15) + CI 재빌드 커밋(f624b4b)

## Decisions Made
- Deploy-from-branch(main, /docs) 패턴을 OIDC actions/deploy-pages 패턴과 혼용하지 않고 단독 채택 (01-RESEARCH.md Pitfall #1 결정 그대로 실행, 재검토 없음)
- Pages API 설정을 `gh api`로 완전 자동화 — build_type=legacy, source[branch]=main, source[path]=/docs. 사용자가 GitHub Settings UI를 직접 조작할 필요 없었음
- 최초 Pages 빌드가 API 설정 및 Actions 성공 직후에도 수분간 `status: building`으로 지연되는 것을 관찰 — 재시도 없이 대기 후 재확인하는 것으로 충분했음 (별도 조치 불필요)

## Deviations from Plan

None - plan executed exactly as written. Task 1의 5단계(워크플로 생성 → README → 로컬 build 커밋 → push+Pages 설정 → Actions 실행 확인) 모두 계획대로 자동 수행되었고, Task 2 checkpoint는 사람 승인으로 정상 통과됨.

## Issues Encountered
- GitHub Pages 최초 빌드가 API 설정 완료 및 Actions 성공 이후에도 몇 분간 `status: building` 상태로 유지되어 사이트가 일시적으로 404를 반환함 — 별도 수정 없이 전파 시간 대기 후 재확인으로 해결됨 (인프라 전파 지연, 코드/설정 문제 아님)

## User Setup Required

None - GitHub Pages 및 Actions 권한(permissions: contents:write)은 워크플로 내에서 자체 처리되며, 저장소 기본 GITHUB_TOKEN으로 충분함. 추가 시크릿/환경변수 설정 불필요.

## Next Phase Readiness
- Phase 1 5/5 plans 완료. Phase Success Criterion #1 전체 충족: mdBook 뼈대 + 장비 가이드 + 촬영 기초 + 연습 로그 템플릿 콘텐츠가 GitHub Actions로 자동 빌드·배포되어 https://ohama.github.io/MongolPhoto/ 에서 공개 열람 가능하며, 지인이 실제로 접근 가능함을 확인함
- 이후 phase(2~6)는 src/** 콘텐츠 추가 후 main에 push만 하면 동일 CI가 자동으로 docs/를 재빌드·재배포함 — 추가 배포 작업 불필요
- Phase 검증자(phase verifier)의 최종 확인 대기 중 (본 실행 agent 범위 밖)

---
*Phase: 01-mdbook-뼈대-장비-기초-촬영법*
*Completed: 2026-07-09*
