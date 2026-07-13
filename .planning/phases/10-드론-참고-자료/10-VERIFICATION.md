---
phase: 10-드론-참고-자료
verified: 2026-07-13T05:12:26Z
status: passed
score: 3/3 must-haves verified (all truths across 10-01/10-02/10-03 plans)
---

# Phase 10: 드론 참고 자료 Verification Report

**Phase Goal:** 독자가 몽골 드론 규제·장비·튜토리얼·예시를 신뢰 가능한 형태로 참고할 수 있고, 확인된 사실과 미확인 사실이 명확히 구분되어 있다.
**Verified:** 2026-07-13T05:12:26Z
**Status:** passed
**Re-verification:** No — initial verification

## Goal Achievement

### Observable Truths

| # | Truth | Status | Evidence |
|---|---|---|---|
| 1 | drone-mongolia-regulations.md의 확인/미확인 절이 시각적으로 분리되고 각 항목이 정확히 표기됨 | VERIFIED | `## ✅ 확인된 사실 (CAAM 원출처)` (L7) vs `## ⚠️ 미확인 — 출발 전 CAAM에 직접 확인` (L33), 확인 절엔 주간/VLOS/120m/4km/동의필요/25kg만 단정(표, L16-23), 미확인 절엔 등록비₮30,000/처리기간5일/250g면제/국립공원만 표기(표, L37-42) |
| 2 | 미확인 항목마다 CAAM 직접 확인 안내 + 날짜 디스클레이머 존재 | VERIFIED | L44 "위 네 항목 모두 **출발 전 CAAM(ops@mcaa.gov.mn, +976-11-285013)에 직접 확인**하세요", L5 날짜 디스클레이머(2026-07-13) |
| 3 | propelrc.com 미포함, drone-mongolia-regulations.md가 09-drone/index.md 규제요약 재서술 않고 역링크 | VERIFIED | `grep -c propelrc` = 0; 페이지는 요약 대신 원출처 링크+표 제공, L3·L54에서 `../09-drone/index.md`로 역링크 |
| 4 | drone-gear-tutorials.md에 DJI 공식 3건 + YouTube 6건(제목 기준) + 텍스트 튜토리얼이 존재, 사양 재덤프 없이 09-drone 역링크 | VERIFIED | DJI 공식 3건(dji.com/specs, dl.djicdn.com manual, support.dji.com) 확인; YouTube 6개 ID 전부 일치(Mg4MeDkRmZo, fNVIHFwhRGo, G1yBrN-iv58, WQ3rRvfBx9I, CQC07AmTrcs, mjp778LaHcM); "제목 기준 요약" 명시(L7); ../09-drone/dji-mini5pro-basics.md·settings.md 역링크 4곳 |
| 5 | medium.com/@hayekesteloo 미포함, 10-RESEARCH.md에 없는 URL 없음 | VERIFIED | `grep -c "medium.com/@hayekesteloo"` = 0; 두 페이지 전체 URL을 RESEARCH.md와 대조 — 불일치 없음 (아래 "URL 대조" 참고) |
| 6 | drone-galleries.md 상단 캐비어트 + 3단 라이선스 구분(Commons/Unsplash/SkyPixel) + 개별 파일 정확 라이선스+촬영자 | VERIFIED | L5 캐비어트 문구 정확 일치; `## ✅ 재사용 가능 — Wikimedia Commons`, `## ✅ 재사용 가능(단 CC0 아님) — Unsplash`, `## 👁 감상 전용 — SkyPixel` 3단 분리; 4개 파일 라이선스·촬영자가 RESEARCH.md와 정확히 일치(CC BY 2.0×2, CC BY-SA 2.0×1, CC BY-SA 3.0×1) |
| 7 | Tsagaan Suvarga·Baga Gazriin Chuluu는 Commons 카테고리 없어 조작 없이 텍스트로만 제외 언급 | VERIFIED | L54, URL 없이 텍스트로만 "전용 카테고리 자체가 존재하지 않아... 없는 카테고리를 지어내 링크하지 않았습니다" |
| 8 | 3페이지 모두 실제 이미지 파일 미임베드, "작성 예정" 없음, mdbook build green, 3 HTML 렌더 | VERIFIED | `grep -c '!\['` = 0 (3페이지 모두); "작성 예정" grep 결과 없음; `mdbook build src` exit 0; docs/08-references/{drone-mongolia-regulations,drone-gear-tutorials,drone-galleries}.html 생성 확인 |

**Score:** 8/8 truths verified

### Required Artifacts

| Artifact | Expected | Status | Details |
|---|---|---|---|
| `src/08-references/drone-mongolia-regulations.md` | 규제 원출처+확인/미확인 표+CAAM 안내+역링크 | VERIFIED | 54줄, exists/substantive(no stub patterns)/wired(SUMMARY.md L23, 09-drone/index.md L47 상호링크) |
| `src/08-references/drone-gear-tutorials.md` | DJI 공식3+YouTube6+텍스트튜토리얼+역링크 | VERIFIED | 41줄, exists/substantive/wired(SUMMARY.md L24) |
| `src/08-references/drone-galleries.md` | 3단 라이선스 갤러리+캐비어트 | VERIFIED | 54줄, exists/substantive/wired(SUMMARY.md L25) |

### Key Link Verification

| From | To | Via | Status | Details |
|---|---|---|---|---|
| drone-mongolia-regulations.md | src/09-drone/index.md | `../09-drone/index.md` 역링크 | WIRED | L3, L54 존재, 대상 파일 실존, 09-drone/index.md L47도 역으로 이 페이지를 링크(상호 연결) |
| drone-mongolia-regulations.md | backend-api.mcaa.gov.mn Part 101/102 PDF | 원출처 링크 | WIRED | `grep -c backend-api.mcaa.gov.mn` = 2 (요구사항 충족, >=2) |
| drone-gear-tutorials.md | src/09-drone/dji-mini5pro-settings.md | 역링크 | WIRED | L3, L15, L41 존재, 대상 파일 실존 |
| drone-gear-tutorials.md | dji.com/mini-5-pro/specs | DJI 공식 사양 링크 | WIRED | L15 존재 |
| drone-galleries.md | commons.wikimedia.org Aerial_photographs_of_Mongolia | 재사용 가능 소스 링크 | WIRED | L17 존재 |
| drone-galleries.md | unsplash.com/license | 라이선스 원문 링크 | WIRED | L40 존재 |

### URL 대조 (전체 링크 vs 10-RESEARCH.md 인벤토리 — 조작 여부 검증)

전 3페이지의 모든 외부 URL을 추출해 10-RESEARCH.md의 Sources 절과 대조했습니다. **불일치(RESEARCH에 없는 URL) 없음.**

- drone-mongolia-regulations.md: 6개 URL 전부 RESEARCH DREF-01 절과 일치 (backend-api.mcaa.gov.mn ×2, drone-laws.com, mcaa.gov.mn, mcaa.gov.mn/page/mayagt, uaipit.com)
- drone-gear-tutorials.md: 13개 URL 전부 RESEARCH DREF-02 절과 일치 (DJI 공식 3, YouTube 6, 텍스트 튜토리얼 4) — YouTube 6개 ID 요청 목록과 정확히 일치(Mg4MeDkRmZo/fNVIHFwhRGo/G1yBrN-iv58/WQ3rRvfBx9I/CQC07AmTrcs/mjp778LaHcM)
- drone-galleries.md: 11개 URL 전부 RESEARCH DREF-03 절과 일치 (Commons 카테고리 5, Commons 파일 4, Unsplash 2, SkyPixel 1) — 파일명의 괄호 Flickr ID까지 정확히 일치(추측 파일명 사용 없음)
- propelrc.com: 0건 (제외 확인)
- medium.com/@hayekesteloo: 0건 (제외 확인)

### Requirements Coverage

| Requirement | Status | Blocking Issue |
|---|---|---|
| DREF-01 (규제 참고, 검증/미검증 구분) | SATISFIED | 없음 |
| DREF-02 (DJI 사양·장비·튜토리얼 링크) | SATISFIED | 없음 |
| DREF-03 (갤러리, 라이선스 표기) | SATISFIED | 없음 |

(REQUIREMENTS.md 체크박스 자체는 아직 미체크 상태이나, 이는 오케스트레이터의 finalize 단계에서 처리할 사항이며 phase 콘텐츠 자체는 충족됨.)

### Anti-Patterns Found

| File | Line | Pattern | Severity | Impact |
|---|---|---|---|---|
| — | — | 없음 | — | TODO/FIXME/placeholder/빈 return/`![` 실이미지 패턴 스캔 결과 3페이지 모두 클린 |

### mdbook Build Verification

- `mdbook build src` → exit 0 (직접 실행 확인)
- `docs/08-references/drone-mongolia-regulations.html`, `drone-gear-tutorials.html`, `drone-galleries.html` 3개 모두 생성 확인
- 내부 상대링크(`../09-drone/index.md`, `../09-drone/dji-mini5pro-basics.md`, `../09-drone/dji-mini5pro-settings.md`, `technique-references.md`) 대상 파일 전부 실존 — 빌드가 이를 그린으로 통과시킴과 일치
- SUMMARY.md에 3페이지 모두 TOC 항목으로 등재(L23-25) — 렌더 경로 확인
- 검증 후 `git restore docs/ && git clean -fdq docs/` 로 빌드 산출물 원복 완료 (git status 클린 확인)

### Human Verification Required

없음 — 모든 must-have가 구조적으로(grep/파일존재/빌드) 검증 가능했고 전부 통과했습니다. (참고: 외부 URL의 "현재 시점 생존"은 이번 검증 세션에서 재-curl하지 않고 10-RESEARCH.md의 이번 조사 세션 curl/WebFetch 기록을 신뢰했습니다 — RESEARCH.md 자체가 같은 날짜(2026-07-13) 세션 산출물이므로 시차 문제 없음.)

### Gaps Summary

없음. 3개 플랜(10-01/10-02/10-03)의 모든 must_haves truths가 실제 파일 내용과 일치하며, 정직성 하드 제약(확인/미확인 구분, propelrc.com 제외, medium 제외, 라이선스 3단 구분, 미조작 Commons 카테고리, 실이미지 미임베드)이 3페이지 모두에서 지켜졌습니다. 전체 책 빌드가 그린이고 v1.1 마일스톤의 마지막 phase가 목표를 달성했습니다.

---

_Verified: 2026-07-13T05:12:26Z_
_Verifier: Claude (gsd-verifier)_
