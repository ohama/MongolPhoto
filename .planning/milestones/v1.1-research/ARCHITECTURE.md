# Architecture Research: 드론 파트 추가 (v1.1)

**Domain:** Korean mdBook (0.5.3) photography guide — adding a new "drone photography" part ahead of the existing astrophotography content
**Researched:** 2026-07-13
**Confidence:** HIGH (based on direct read of existing `src/SUMMARY.md`, `src/book.toml`, `src/introduction.md`, `src/04-mongolia/*`, `src/07-appendix/*`, `src/08-references/*`, and `.planning/PROJECT.md`)

## Standard Architecture

### System Overview (current book, before v1.1)

```
src/SUMMARY.md  ──controls reading order, independent of folder names──▶  rendered TOC
   │
   ├─ [소개](introduction.md)                     "몽골 은하수 촬영기" framing, all-astro
   │
   ├─ # 1부 · 준비하기        → 01-gear/, 02-fundamentals/, 03-practice/template.md
   ├─ # 2부 · 가기 전 연습     → 03-practice/*.md (rest)
   ├─ # 3부 · 몽골 여행지별 촬영 가이드 → 04-mongolia/*.md (overview + 5 sites)
   ├─ # 4부 · 후보정          → 05-postprocessing/*.md
   ├─ # 보너스 기법           → 06-bonus/*.md
   ├─ # 부록                 → 07-appendix/*.md (shared glossary, cheat-sheet, checklists)
   └─ # 참고 자료             → 08-references/*.md (astro-only refs today)
```

Key fact confirmed by reading the files: **mdBook part headers (`# 텍스트`) are pure visual dividers in `SUMMARY.md` — they carry no folder/number binding.** Reading order is 100% determined by the linear order of lines in `SUMMARY.md`, not by folder numbers. This is explicitly acknowledged in `.planning/PROJECT.md`'s framing and is verified true in mdBook 0.5.3's SUMMARY parser. This is the single fact that makes "drone-before-astro without renaming 01-08" trivially achievable.

Also confirmed: `book.toml` has `create-missing = false` under `[build]` — mdBook will **fail the build** if `SUMMARY.md` links to a file that doesn't exist yet. This matters for write/build ordering (see Data Flow section).

### Component Responsibilities (existing)

| Component | Responsibility | Notes |
|-----------|----------------|-------|
| `src/SUMMARY.md` | Sole source of reading order and part grouping | Edited independently of folder layout |
| `src/introduction.md` | Book framing/pitch, currently 100% astro (title "몽골 은하수 촬영기", "천체 사진의 매력", "몽골, 은하수를 위한 땅") | Must broaden for v1.1 |
| `src/book.toml` | Book metadata (`title`, `description`) rendered in HTML `<title>`, sidebar header | `title = "몽골 은하수 촬영기"` today |
| `README.md` | GitHub-facing summary + TOC mirror of SUMMARY.md | Must be kept in sync manually (no automation found) |
| `01-08` numbered folders | Content-type buckets (gear, fundamentals, practice, mongolia sites, postprocessing, bonus, appendix, references) | Numbers happen to match current reading order today, but this is coincidental — not enforced |
| `07-appendix/glossary.md` | **Single shared glossary** for the whole book, gana-dara order, links back to first-use chapter | Reuse target for drone terms |
| `08-references/*.md` | 5 reference files, all astro-specific today (technique, software, RAW samples, astro links, travel info) | `mongolia-travel-info.md` is the one non-astro-specific file (visa/ger/currency) — already dual-purpose |
| `04-mongolia/overview.md` | Canonical GPS table + astro-specific timing math (core altitude, dark windows) for the 5 Gobi sites | Reuse target: GPS table is shared infrastructure, timing math is astro-only |
| `04-mongolia/{site}.md` × 5 | Per-site template: 위치/GPS → 이렇게 찍으면 좋다 → 은하수 코어 상황 → 주의사항 → 촬영 타임라인 | Direct template to mirror for drone sites |

## Recommended Project Structure (v1.1)

### (B) Folder scheme — recommendation: add new folders, do NOT renumber 01-08

```
src/
├── 09-drone/                    # NEW — drone concept + DJI Mini 5 Pro operation (parallels 01-gear + 02-fundamentals)
│   ├── index.md                 # 드론 사진 개요 (매력, 몽골에서 드론이 여는 시야, 사진중심·주간/황혼 방향성)
│   ├── dji-mini5pro-basics.md   # 기체 소개, 펼치기/이착륙, 컨트롤러·앱 기본 조작, 안전수칙
│   ├── dji-mini5pro-settings.md # 사진모드(단일/AEB/파노라마), 노출·화이트밸런스, 파일형식(JPEG/RAW)
│   └── composition.md           # 드론 구도: 탑다운, 로우앵글, 라인/패턴/스케일, 골든아워·블루아워 활용 (+영상 간략 절)
├── 10-drone-sites/              # NEW — parallels 04-mongolia/ structure exactly
│   ├── overview.md               # 드론 촬영 일반 원리 (규제 개요, 배터리/바람 판단, GPS는 04-mongolia/overview.md 링크로 재사용)
│   ├── tsagaan-suvarga.md
│   ├── bayanzag.md
│   ├── khongoryn-els.md
│   ├── yolyn-am.md
│   └── baga-gazriin-chuluu.md
├── 01-gear/  … 08-references/   # UNCHANGED — no renames, no renumbering
│   └── 08-references/
│       ├── drone-mongolia-regulations.md   # NEW — 몽골 드론 비행 규제/허가 (own file — needs heavy verification, mirrors travel-info.md's careful "미검증" pattern)
│       └── drone-gear-and-tutorials.md     # NEW — DJI Mini 5 Pro 사양, 튜토리얼, 예시 갤러리 링크 (consolidated — smaller corpus than astro refs)
└── introduction.md, SUMMARY.md, book.toml  # EDITED, not moved
```

### Structure Rationale

- **`09-drone/` and `10-drone-sites/` (new numbers, not renamed 01/02/04):** The PROJECT.md context itself states folder numbers map to content, not reading order — 01-08 already violate strict numeric-order-equals-reading-order the moment drone is inserted first. Continuing the existing counting convention (09, 10 — next available integers) keeps the scheme legible without touching 8 existing folders (and every internal relative link inside them, e.g. `../02-fundamentals/finding-the-milkyway.md`, `camera-lens-picks.md`). Renaming `01-08` would touch every cross-reference in the book (dozens of relative links found in `04-mongolia/*.md`, `07-appendix/*.md`, `08-references/*.md`) for zero functional gain, since `SUMMARY.md` — not folder numbers — decides what the reader sees first.
- **`10-drone-sites/` mirrors `04-mongolia/` 1:1** (an `overview.md` + 5 site files with matching filenames `tsagaan-suvarga.md`, `bayanzag.md`, etc.) so the two "명소별" parts are structurally identical and easy to cross-link (`../10-drone-sites/tsagaan-suvarga.md` ↔ `../04-mongolia/tsagaan-suvarga.md`).
- **Drone reference files land inside the existing `08-references/` folder, not a new `09-drone-references/` folder.** `08-references/` is already a content-type bucket ("무언가를 찾아보는 참고 자료"), and `mongolia-travel-info.md` already lives there despite being non-astro-specific — precedent exists for mixed-topic files in this folder. This keeps the folder count minimal (2 new folders total: `09-drone/`, `10-drone-sites/`) while `SUMMARY.md` alone controls where those two new files render in the TOC (see below — they render early, right after the drone content part, not at the end with the astro refs).
- **Trade-off acknowledged:** a future contributor browsing `08-references/` will see drone files mixed with astro files even though the TOC keeps them physically apart. This is a deliberate, documented divergence between folder grouping and reading order — consistent with the project's own stated philosophy that folders ≠ order. If this bothers future maintainers, the fallback is a dedicated `11-drone-references/` folder — flagged as an alternative below, not the primary recommendation, to keep churn minimal for a small (2-file) reference set.

## (A) SUMMARY.md Reorganization — concrete proposal

Drone part is a full new numbered part inserted first, astro's four numbered parts shift by one (display label only — folder paths inside each line stay untouched):

```markdown
# Summary

[소개](introduction.md)

# 1부 · 드론 사진

- [드론 사진 개요](09-drone/index.md)
- [DJI Mini 5 Pro 기본 조작](09-drone/dji-mini5pro-basics.md)
- [DJI Mini 5 Pro 설정](09-drone/dji-mini5pro-settings.md)
- [드론 구도의 기초](09-drone/composition.md)
- [명소별 드론 촬영 원리](10-drone-sites/overview.md)
- [차강소브라가 (Tsagaan Suvarga)](10-drone-sites/tsagaan-suvarga.md)
- [바양작 (Bayanzag)](10-drone-sites/bayanzag.md)
- [홍고린엘스 (Khongoryn Els)](10-drone-sites/khongoryn-els.md)
- [욜링암 (Yolyn Am)](10-drone-sites/yolyn-am.md)
- [바가가즈링 촐로 (Baga Gazriin Chuluu)](10-drone-sites/baga-gazriin-chuluu.md)

# 드론 참고 자료

- [DJI Mini 5 Pro 사양·튜토리얼·갤러리](08-references/drone-gear-and-tutorials.md)
- [몽골 드론 비행 규제·허가](08-references/drone-mongolia-regulations.md)

# 2부 · 준비하기

- [장비 가이드](01-gear/index.md)
  - [카메라와 렌즈 고르기](01-gear/camera-lens.md)
  - [필수 액세서리 & 앱](01-gear/accessories.md)
  - [출발 전 체크리스트](01-gear/checklist.md)
- [촬영 기초](02-fundamentals/index.md)
  … (unchanged content, only the "2부" label changed from "1부")
- [연습 로그 템플릿](03-practice/template.md)

# 3부 · 가기 전 연습
  … (was "2부", content lines unchanged)

# 4부 · 몽골 여행지별 촬영 가이드
  … (was "3부", content lines unchanged)

# 5부 · 후보정
  … (was "4부", content lines unchanged)

# 보너스 기법
# 부록
# 참고 자료
  … (all three unchanged — still trailing, unlabeled parts, unchanged filenames)
```

**Why a separate `# 드론 참고 자료` part instead of folding into `# 참고 자료`:** it mirrors the astro book's own pattern (content part → trailing references part) and gives readers who just finished the drone part immediate access to drone-specific lookups (specs/regs/tutorials) without walking past all of astro's material first. It also avoids polluting the existing `# 참고 자료` part — which stays 100% astro and untouched — with unrelated entries a search/Ctrl+F reader wouldn't expect. This is the only genuinely new top-level (unnumbered) part added to the book; everything else is either renumbered labels or new numbered-part content.

**Only files touched by the renumbering itself:** `src/SUMMARY.md` (labels + new lines). No `.md` content file needs to change because of the label shift — "2부 · 준비하기" is a `SUMMARY.md`-only string; it is not repeated as an H1 inside `01-gear/index.md` etc. (verified: those files start directly with their own `# 장비 가이드` heading, no part-number self-reference). One caveat found: `introduction.md`'s "이 책을 읽는 법" section explicitly numbers `1. **[1부 · 준비하기]**  2. **[2부 · 가기 전 연습]** …` — this numbered list must be rewritten anyway as part of the intro broadening (see part E), so the renumbering work is absorbed into that edit, not extra work.

## Architectural Patterns

### Pattern 1: Part-header-as-pure-divider

**What:** mdBook `# 텍스트` lines in `SUMMARY.md` are unlinked headers that only produce a visual section break in the sidebar; they don't need to correspond to any file or folder.
**When to use:** Whenever reordering or relabeling "부" (parts) — always prefer editing `SUMMARY.md` over touching folders.
**Trade-offs:** None — this is mdBook's designed behavior, confirmed by the existing book already using unlabeled `# 보너스 기법` / `# 부록` / `# 참고 자료` headers that don't map to a "5부/6부/7부" numbering scheme.

### Pattern 2: Content-parallel folder pairs (`0X-topic` / `0X-topic-sites`)

**What:** `04-mongolia/` already follows `overview.md` + 5 site files. `10-drone-sites/` should copy this exactly, file-for-file, so both "명소별" parts are structurally interchangeable and diffable.
**When to use:** Any new part that repeats "one overview + N per-location deep-dives" shape.
**Example (per-site template, drone version, mirroring `04-mongolia/tsagaan-suvarga.md`):**
```markdown
# [명소명] ([영문명])

## 위치 / GPS
(→ 링크: [고비 촬영 일반 원리](../04-mongolia/overview.md)의 GPS 표 — 좌표는 astro 쪽을 단일 출처로 재사용, 중복 기재하지 않음)

## 이곳에서는 이렇게 찍으면 좋다
드론 특화 구도: 탑다운(수직) 뷰로 잡을 패턴, 저고도 사선 뷰, 스케일감을 살리는 피사체 배치

## 비행 시 주의사항
고도 제한, 바람(사막 돌풍), 배터리 여유(왕복 비행시간), No-fly zone/현지 규제 재확인 링크 → [몽골 드론 비행 규제·허가](../08-references/drone-mongolia-regulations.md)

## 촬영 타임라인
골든아워/블루아워 스케줄(도착~이륙~착륙), 주간 위주 + 황혼 짧은 윈도우
```
**Trade-offs:** Duplicating the GPS coordinate table into `10-drone-sites` was considered and rejected — the astro `overview.md` GPS table is the single source of truth; drone site pages link forward to it. mdBook sidebar navigation makes forward-references (linking to content that appears later in the book) completely normal — this isn't a broken "user must have already read that page" assumption, just a hyperlink.

### Pattern 3: Shared, incrementally-extended appendix files (not per-topic duplicates)

**What:** `07-appendix/glossary.md` is one file for the whole book. New drone terms (짐벌, 리턴투홈, 탑다운 뷰, ND필터 등) get **added as new entries to the same file**, gana-dara sorted, not split into a separate `drone-glossary.md`.
**When to use:** Any shared reference structure (glossary, cheat-sheet) that's naturally single-instance regardless of topic count.
**Trade-offs:** Keeps one alphabetized lookup for the reader; requires editing an existing file rather than just adding new ones (slightly more merge-conscious, but low risk — it's a flat bullet list).

## Data Flow (write/build order)

### (D) Recommended write/build order

```
1. SUMMARY.md skeleton + stub files
   ↓ (book.toml has create-missing=false — build FAILS on dangling links,
   ↓  so every new SUMMARY line needs a real, even if minimal, file to exist first)
   Create 09-drone/*.md and 10-drone-sites/*.md as one-line stub headers,
   create 08-references/drone-*.md stubs, edit SUMMARY.md fully (final shape),
   renumber astro part labels. Run `mdbook build src` once — should succeed
   with stub content. This locks the structure before any prose is written.
   ↓
2. Title/intro broadening (introduction.md, book.toml title, README.md)
   Do this early — it reframes reader expectations for the whole book and
   should not be bolted on after all content exists. Also absorbs the
   "이 책을 읽는 법" renumbered list rewrite (see Pattern 1 caveat above).
   ↓
3. 09-drone/ content: index.md → dji-mini5pro-basics.md →
   dji-mini5pro-settings.md → composition.md
   (concept before hardware before settings before composition — same
   progression logic as 01-gear → 02-fundamentals in the astro part)
   ↓
4. 10-drone-sites/ content: overview.md → 5 site files
   (parallels 04-mongolia build order used in v1.0 phase 05)
   ↓
5. 08-references/drone-*.md — LAST
   Mirrors v1.0's own phase order (appendix+references bundled into the
   final phase, "06-부록-보너스-배포검증") — reference material needs the
   most external verification (WebSearch/WebFetch for DJI specs and,
   critically, Mongolia drone flight regulations/permits) and benefits
   from content chapters being stable first so refs can link back to them.
```

**Reuse-vs-net-new summary (per question C):**

| Drone content area | Reuse from existing book | Net-new |
|---|---|---|
| 드론 사진 개요 | Links to `introduction.md` framing, `01-gear/index.md`'s "추천만, 구매 강제 아님" principle (same posture for drone gear) | New `09-drone/index.md` prose |
| DJI Mini 5 Pro 조작·설정·구도 | RAW 후보정 (`05-postprocessing/raw-develop.md`) linked from `dji-mini5pro-settings.md` if Mini 5 Pro shoots DNG — do not duplicate RAW workflow, just cross-link | New `09-drone/dji-mini5pro-*.md`, `composition.md` |
| 명소별 드론 촬영 (5 sites) | GPS table in `04-mongolia/overview.md` (linked, not duplicated); per-site template shape copied from `04-mongolia/{site}.md` | New `10-drone-sites/*.md` (6 files) |
| 드론 참고 자료 | `08-references/mongolia-travel-info.md` (visa/ger/currency/safety — fully reusable, no drone-specific edits needed) | New `08-references/drone-mongolia-regulations.md`, `drone-gear-and-tutorials.md` |
| 용어사전 | `07-appendix/glossary.md` — extend in place with drone terms | (no new file) |
| 체크리스트/치트시트 | Not required by the milestone scope (question C names only 4 areas) — no drone-specific `07-appendix` additions planned; flag as a backlog item only if scope grows | — |

## Anti-Patterns

### Anti-Pattern 1: Renumbering `01-gear` … `08-references` to make folder order match new reading order

**What people do:** Rename folders to `02-drone`, `03-gear`, `04-fundamentals`… to keep "number = position in book."
**Why it's wrong:** `SUMMARY.md` already fully decouples reading order from folder names (proven by `06-bonus`/`07-appendix`/`08-references` already being unlabeled trailing parts with no "5부/6부/7부" match). Renaming would touch every relative link inside `04-mongolia/*.md`, `07-appendix/*.md`, `08-references/*.md`, `introduction.md` for a purely cosmetic gain, and risks silently breaking links `create-missing = false` will only catch at build time if the *target* changes, not if the referencing path is wrong in a subtler way (e.g. partial sed rename).
**Do this instead:** Add `09-drone/` and `10-drone-sites/` as new folders; edit only `SUMMARY.md` for ordering.

### Anti-Pattern 2: Duplicating the Gobi site GPS table into `10-drone-sites/overview.md`

**What people do:** Copy-paste the 5-site GPS coordinate table from `04-mongolia/overview.md` into the new drone overview so the drone part is "self-contained."
**Why it's wrong:** Two sources of truth for the same coordinates will drift (e.g. if a coordinate is corrected later, one copy gets missed) — the astro overview itself contains a hand-computed-and-flagged-uncertain dataset (⚠️ notes about wrong coordinates for Tsagaan Suvarga already exist in the source), showing this data already needs single-point maintenance.
**Do this instead:** Link forward from `10-drone-sites/overview.md` to `04-mongolia/overview.md`'s GPS table. mdBook readers routinely navigate non-linearly via the sidebar; a forward link is not a UX problem.

### Anti-Pattern 3: Treating "드론 참고 자료" as requiring its own numbered folder

**What people do:** Create `11-drone-references/` to keep every part 1:1 with a folder.
**Why it's wrong:** Only 2 files are needed for drone references (regulations + specs/tutorials/gallery), well below the ~4-5 file threshold where the existing `07-appendix`/`08-references` folders were justified. A 2-file folder adds directory-browsing overhead for no organizational benefit.
**Do this instead:** Place the 2 files inside the existing `08-references/` folder with a `drone-` filename prefix; let `SUMMARY.md` render them early in the TOC regardless of folder location. (Documented fallback: if the drone reference set later grows past ~4 files, promote to a dedicated folder at that point — cheap to do later, not worth doing preemptively.)

## Integration Points (reuse/link map)

### Cross-part links required

| From | To | Purpose |
|------|----|----|
| `09-drone/dji-mini5pro-settings.md` | `05-postprocessing/raw-develop.md` | If Mini 5 Pro shoots RAW/DNG, reuse the existing RAW workflow chapter instead of writing a parallel one |
| `10-drone-sites/{site}.md` | `04-mongolia/overview.md` GPS table | Single source of truth for coordinates |
| `10-drone-sites/{site}.md` | `08-references/drone-mongolia-regulations.md` | Per-site flight-legality reminder should link to the one verified regulations page, not restate rules 5 times |
| `08-references/drone-mongolia-regulations.md` | `08-references/mongolia-travel-info.md` | Cross-link travel logistics (visa/customs — drone import/export rules may intersect with existing visa section) rather than duplicating |
| `07-appendix/glossary.md` | `09-drone/*.md` | New drone terms link back to their first-use chapter, following the existing pattern exactly |
| `introduction.md` "이 책을 읽는 법" | All renumbered parts | Must be rewritten in the same edit pass as the title broadening (Pattern 1 caveat) |

### (E) Title/intro broadening — where "몽골 사진 가이드" must land

| Location | Current | Required change |
|---|---|---|
| `src/book.toml` `[book] title` | `"몽골 은하수 촬영기"` | → `"몽골 사진 가이드"` (drives HTML `<title>`, sidebar header, browser tab) |
| `src/book.toml` `[book] description` | `"트래킹 장비 없이 몽골에서 은하수 사진 찍기 — 장비부터 촬영, 후보정까지"` | → broaden to cover both drone + astro, e.g. "몽골 고비에서 드론 사진과 은하수 사진을 찍는 법 — 장비부터 촬영, 후보정까지" |
| `src/introduction.md` H1 | `# 몽골 은하수 촬영기` | → `# 몽골 사진 가이드` (or similar), then the entire page needs a structural rewrite: currently 100% astro-only (매력 / 몽골 땅 / 장비 / 후보정 / 갤러리 / 읽는 법 sections all astro-framed) — needs a new opening framing both tracks, a drone-parallel "매력" subsection, and the numbered "읽는 법" list updated for the new 6-part structure (드론 → 준비하기 → 가기 전 연습 → 몽골 여행지별 → 후보정 → 보너스/부록/참고자료) |
| `README.md` | `# MongolPhoto` tagline "트래킹 장비 없이 몽골 고비에서 은하수 사진 찍기…", link text `[몽골 은하수 촬영기]`, and the 목차 bullet list | → tagline + link text + 목차 list all need the drone part(s) prepended and rewording to "드론 사진과 은하수 사진" |
| `docs/book.toml` | Auto-generated by CI on push (build output, not source) | No manual edit needed — confirm CI regenerates it from `src/book.toml` on next build |
| `.planning/PROJECT.md` | Already updated ahead of this research (`## What This Is` already says "드론 사진(DJI Mini 5 Pro)과 은하수 사진") | Already correct — no action needed, useful as the target framing to match in `introduction.md` |

**Not found / not applicable:** No separate SEO/meta title file, no `package.json`-style name field, no other place the old title string appears (checked `src/07-appendix/*`, `src/08-references/*` — no title self-references found outside `introduction.md`/`README.md`/`book.toml`).

## Sources

- Direct read of `src/SUMMARY.md`, `src/introduction.md`, `src/book.toml`, `README.md` (this repository)
- Direct read of `src/04-mongolia/overview.md`, `src/04-mongolia/tsagaan-suvarga.md` (per-site template source)
- Direct read of `src/07-appendix/glossary.md`, `src/07-appendix/cheat-sheet.md`, `src/07-appendix/checklists.md`, `src/08-references/mongolia-travel-info.md`, `src/08-references/software-references.md`
- Direct read of `.planning/PROJECT.md` (v1.1 milestone scope, key decisions log)
- mdBook 0.5.3 SUMMARY.md parsing behavior confirmed empirically against this book's existing unlabeled trailing parts (`# 보너스 기법`, `# 부록`, `# 참고 자료`) which already prove headers ≠ folder/order binding
- `src/book.toml` `[build] create-missing = false` confirmed by direct read — governs the write/build ordering recommendation in Data Flow section

---
*Architecture research for: MongolPhoto v1.1 드론 사진 milestone*
*Researched: 2026-07-13*
