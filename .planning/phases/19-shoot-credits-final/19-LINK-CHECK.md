# 19-LINK-CHECK — 책 전체 빌드 + 내부 링크 전수 스캔 (v1.3 최종 게이트)

- **실행 일자:** 2026-07-15
- **스캔 범위:** `src/**/*.md` 전부 (SUMMARY.md 포함), **82개 파일**
- **제외 규칙(한 줄):** 외부 링크(`http://`·`https://`·`mailto:` — `<url>` 각괄호 래핑 포함) + 순수 앵커(`#…`) 제외, `path#anchor`는 앵커 분리 후 파일 경로만 검사, 각 링크는 그 파일 dir 기준 상대경로로 정규화(normpath) 후 디스크 존재 검사.
- **판정 기준:** 빌드 그린(1차 방어) AND 내부 링크 dead=0(2차 방어).

## 1) 책 전체 mdbook build (1차 방어 — SUMMARY dead)

```
/opt/homebrew/bin/mdbook build src
 INFO Book building has started
 INFO Running the html backend
 INFO HTML book written to `/Users/ohama/projs/MongolPhoto/src/../docs`
EXIT=0
```

- **결과: GREEN** — exit 0, ERROR/WARN 출력 0줄.
- `create-missing=false`(book.toml 확인)이므로 SUMMARY.md가 가리키는 챕터 파일이 하나라도 없으면 빌드가 실패한다. 실패 없이 그린 → SUMMARY의 모든 챕터 링크가 디스크에 실재함(1차 방어 통과).
- 빌드 산출물 `docs/`는 커밋하지 않음: `git restore docs/; git clean -fdq docs/` 실행 후 `git status --porcelain docs/` 빈 출력 확인.

## 2) 내부 링크 전수 스캔 (2차 방어 — 본문 prose dead)

파이썬 regex(`\]\(([^)]+)\)`) + 경로 정규화 스크립트로 전수 추출·존재 검사.

- **FILES_SCANNED = 82**
- **TOTAL_INTERNAL_LINKS = 591** (>0 — 빈 스캔 아님)
- **genuine dead internal links = 0**

### 게이트 판정: **PASS** (빌드 GREEN AND 실질 dead internal = 0)

TOTAL 591개 내부 링크(SUMMARY 부/챕터 링크 + 본문 상호 참조 + 로컬 이미지) 중 실제로 깨진 콘텐츠/내비게이션 링크는 0. v1.2 Phase 14의 "483 links, dead 0" 게이트를 v1.3(591 links)로 이행함.

## 3) regex 원시 히트 전수 공개 및 분류 (silent-pass 금지)

초기 원시 스캔은 4건을 히트했다. 각각을 파일·링크·해석경로와 함께 분류한다. 어느 것도 실질 dead 내부 링크가 아니며, **콘텐츠 파일은 이 계획에서 편집하지 않음(files_modified=[])**.

| # | 파일 | 링크 | 해석 경로 | 분류 |
|---|------|------|-----------|------|
| 1 | `src/08-references/drone-galleries.md:31` | `](<https://commons.wikimedia.org/wiki/File:Khongoryn_Els…>)` | (외부) | **외부 링크** — 각괄호 `<url>` 래핑. 플랜의 "외부 제외" 규칙 대상. 각괄호 스트립 후 제외. dead 아님 |
| 2 | `src/08-references/drone-galleries.md:32` | `](<https://commons.wikimedia.org/wiki/File:Gobi_Desert…>)` | (외부) | **외부 링크** — 동일(각괄호 래핑, regex가 `(35132070010`에서 잘림). 제외. dead 아님 |
| 3 | `src/introduction.md:107` | `images/intro/파일명.jpg` | `src/images/intro/파일명.jpg` | **인라인 코드 예시** — `` `![캡션](images/intro/파일명.jpg)` `` 백틱 내부. "파일명"=filename 안내용 플레이스홀더. mdbook은 리터럴 코드로 렌더(링크·이미지 아님). regex의 코드 컨텍스트 오탐. 렌더된 dead 링크 아님 |
| 4 | `src/03-practice/template.md:27` | `../images/practice/session-N/xxx.jpg` | `src/images/practice/session-N/xxx.jpg` | **의도된 템플릿 스캐폴드** — "연습 로그 템플릿"의 "결과 사진" 자리표시자(`session-N`/`xxx.jpg` 채워넣기용). 설계상 자리표시자 |

**분류 요약:**
- #1·#2: 각괄호 래핑 외부 링크 → 플랜의 외부 제외 규칙에 따라 제외(스크립트에 `<>` 스트립 반영). 판정용 TOTAL에서 빠짐(593→591).
- #3·#4: v1.0/v1.1부터 존재한 **의도된 문서 자리표시자**(v1.3 Phase 19 콘텐츠와 무관, 직전 모든 마일스톤 게이트를 통과해 온 패턴). #3은 인라인 코드라 실제 링크가 아니며, #4는 사용자가 채워 넣는 스캐폴드. 둘 다 콘텐츠/내비게이션 결함 아님.

**실질 dead 내부 링크(콘텐츠/내비게이션): 0.** 위 4건 중 수정이 필요한 진짜 깨진 링크 없음. (이 계획은 콘텐츠 미편집 — 유일 산출물은 본 리포트.)

## 4) 게이트 요약

| 방어선 | 항목 | 결과 |
|--------|------|------|
| 1차 | `mdbook build src` (create-missing=false, SUMMARY dead) | GREEN (exit 0, WARN 0) |
| 2차 | src/**/*.md 내부 링크 전수 스캔(본문 prose dead) | TOTAL=591, dead=0 |
| — | docs/ 미커밋 | `git status --porcelain docs/` 빈 출력 |
| — | 콘텐츠 미편집 | files_modified=[] |

**최종: PASS** — 책 전체 빌드 그린 + 내부 링크 전수 dead 0. 성공 기준 3 충족.
