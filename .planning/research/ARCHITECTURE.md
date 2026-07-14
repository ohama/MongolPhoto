# Architecture: Inserting "몽골 여행 사진" as the New First Part

**Project:** MongolPhoto (몽골 사진 가이드), v1.2 milestone
**Researched:** 2026-07-14
**Grounded in:** direct read of `src/SUMMARY.md`, `src/book.toml`, `src/introduction.md`, `README.md`, `src/04-mongolia/overview.md`, `src/07-appendix/glossary.md`, `src/05-postprocessing/raw-develop.md`, `src/09-drone/index.md`, `src/09-drone/drone-postprocessing.md`, `src/10-drone-sites/overview.md`, `.planning/PROJECT.md`, `.planning/milestones/v1.1-ROADMAP.md`, `.planning/milestones/v1.1-phases/07-구조-제목-확장/07-01-PLAN.md`.

## Executive Summary

The repo already has a **direct, one-milestone-old precedent** for exactly this operation: v1.1 inserted a whole new "드론 사진" part ahead of the existing 은하수 content, without renumbering any of the pre-existing `01-`–`08-` folders, by (1) creating new numerically-next folders (`09-drone/`, `10-drone-sites/`), (2) writing all stub files + the reordered `SUMMARY.md` + broadened `book.toml`/`introduction.md`/`README.md` in a single "structure first" phase, verifying `mdbook build src` exits 0, and only then (3) filling in real content in later phases, ending with a references/link-verification phase last. v1.2 should replay this pattern exactly, one level up: 여행 사진 becomes the new first part, 드론 becomes 2부, and everything below (준비하기 → 후보정) shifts down by one.

One new risk not present in v1.1: **naming collision**. The existing 4부 title is literally "몽골 여행지별 촬영 가이드" (은하수 site-by-site guide). Once a *travel photography* ("여행 사진") part exists, the bare word "여행" becomes ambiguous — it now means both "the travel-photography track" and "Mongolia travel destinations" generically. This must be resolved by relabeling the 은하수 site part, not by avoiding the word "여행" in the new part (PROJECT.md itself already calls the new part's site-guide chapter "코스 명소별 여행 사진 가이드", so the new part should keep "여행 사진" in its titles — the *old* part needs the rename).

## Current Structure (verified, before state)

`src/SUMMARY.md` order:

```
[소개](introduction.md)

# 1부 · 드론 사진                    ← 09-drone/ (7 files) + 10-drone-sites/ (6 files)
# 드론 참고 자료                      ← 08-references/drone-*.md (3 files)
# 2부 · 준비하기                      ← 01-gear/ + 02-fundamentals/ + 03-practice/template.md
# 3부 · 가기 전 연습                  ← 03-practice/*.md (rest)
# 4부 · 몽골 여행지별 촬영 가이드      ← 04-mongolia/ (overview + 5 sites, 은하수 site guide)
# 5부 · 후보정                        ← 05-postprocessing/
# 보너스 기법                         ← 06-bonus/
# 부록                                ← 07-appendix/
# 참고 자료                           ← 08-references/ (non-drone entries)
```

Folder-number vs. book-order mismatch already exists and is **intentional precedent**: `09-drone/` and `10-drone-sites/` are the highest-numbered folders on disk but render *first* in the book. `book.toml` has `create-missing = false`, so every link in `SUMMARY.md` must resolve to a real file before `mdbook build` succeeds — this drove the "stubs + SUMMARY first" phase ordering in v1.1 and must drive it again.

`book.toml` (`src/book.toml`) key line: `description = "몽골 고비에서 드론 사진과 은하수 사진을 찍는 법 — 장비부터 촬영, 후보정까지"` — two-track framing, needs to become three-track.

`introduction.md` two-track framing appears in: the italic caption (line 3, "두 개의 풍경"), the opening paragraph (line 7, "이 두 축을 함께 다룹니다... 드론 파트는 [1부 · 드론 사진]... 은하수 파트는 그 뒤를 잇습니다"), and the closing "이 책을 읽는 법" ordered list (lines 107–118), which is the authoritative reading-order map and must be rewritten to 6 items → 7 items.

## Proposed Folder Names

Mirror the v1.1 anti-renumbering precedent exactly: **do not touch `01-`–`10-`**. Add new folders at the next free numbers, sorted for human browsability but irrelevant to book order (SUMMARY.md alone controls order):

| Folder | Purpose | Mirrors |
|--------|---------|---------|
| `src/11-travel/` | Core travel-photography content (개요, 카메라 설정, 구도/빛/타이밍, 풍경/현장·사람) | `09-drone/` |
| `src/12-travel-sites/` | Per-site travel-photo guide (허브 + 5 site pages) | `10-drone-sites/` |
| `src/08-references/travel-*.md` (new files inside existing folder) | Travel-specific reference pages | `08-references/drone-*.md` |

Rationale for `11`/`12` specifically: `09-drone`/`10-drone-sites` are the last-used numbers; `11`/`12` are the next free ones. This keeps the on-disk numbering purely chronological ("when was this folder added"), matching the v1.1 precedent where 09/10 were added *after* 01–08 existed even though they render first. Do not renumber existing folders to make `01-travel` "look first" — that was explicitly avoided in v1.1 ("기존 01-08 폴더는 renumbering 없이 SUMMARY만 재편") and doing it now would touch every existing internal relative link (`../04-mongolia/...`, `../02-fundamentals/...`, etc.) across dozens of files for zero functional benefit.

Proposed files inside the new folders (sized to the v1.2 target-features list in PROJECT.md, lighter than drone's 16 stubs since scope is smaller — no separate regulations chapter, no dedicated postprocessing chapter):

- `11-travel/index.md` — 여행 사진 개요·매력 (mirrors `09-drone/index.md`'s "왜 이 파트가 다른가" framing)
- `11-travel/camera-settings.md` — Canon R7 바디 설정 + 삼양 AF 12mm F2.0 / RF 50mm F1.8 STM 조합 + RF-S 18-150mm 추천 (mirrors `09-drone/dji-mini5pro-settings.md`)
- `11-travel/composition-and-light.md` — 구도·빛·타이밍 (mirrors `09-drone/composition.md`)
- `11-travel/landscape-and-street.md` — 풍경·현장/사람 (net-new topic area, no direct drone mirror — closest analog is `09-drone/gobi-environment.md`'s "환경 대응" slot)
- `12-travel-sites/overview.md` — 허브 (mirrors `10-drone-sites/overview.md` — see Reuse Points below)
- `12-travel-sites/{tsagaan-suvarga,bayanzag,khongoryn-els,yolyn-am,baga-gazriin-chuluu}.md` — 5 site pages (mirrors `10-drone-sites/*.md`)
- `08-references/travel-gear-tutorials.md` — Canon R7 사용법·촬영 팁 튜토리얼 (mirrors `08-references/drone-gear-tutorials.md`)
- `08-references/travel-galleries.md` — 여행 사진 예시 갤러리, CC 라이선스만 (mirrors `08-references/drone-galleries.md`)

Total new stub files: 4 + 6 + 2 = **12** (vs. drone's 16 — appropriately smaller scope; no travel-specific regulations page needed since travel photography has no equivalent to CAAM drone rules).

Note: `08-references/mongolia-travel-info.md` **already exists** and already covers Mongolia travel logistics generically — do not create a duplicate "travel info" reference page. The new travel part should link to it, not replace it.

## SUMMARY.md Reorg (before → after)

Full proposed after-state (unchanged content blocks compressed to their existing line ranges for brevity; only headings/labels and the new block are spelled out):

```markdown
# Summary

[소개](introduction.md)

# 1부 · 여행 사진                              ← NEW
- [여행 사진 개요](11-travel/index.md)
- [Canon R7 카메라 설정 & 렌즈 선택](11-travel/camera-settings.md)
- [구도와 빛 · 타이밍](11-travel/composition-and-light.md)
- [풍경과 현장 · 사람](11-travel/landscape-and-street.md)
- [코스 명소별 여행 사진 가이드](12-travel-sites/overview.md)
- [차강소브라가 (Tsagaan Suvarga)](12-travel-sites/tsagaan-suvarga.md)
- [바양작 (Bayanzag)](12-travel-sites/bayanzag.md)
- [홍고린엘스 (Khongoryn Els)](12-travel-sites/khongoryn-els.md)
- [욜링암 (Yolyn Am)](12-travel-sites/yolyn-am.md)
- [바가가즈링 촐로 (Baga Gazriin Chuluu)](12-travel-sites/baga-gazriin-chuluu.md)

# 여행 사진 참고 자료                            ← NEW (same pattern/position as "드론 참고 자료")
- [카메라 사용법·촬영 팁 튜토리얼](08-references/travel-gear-tutorials.md)
- [여행 사진 예시 갤러리](08-references/travel-galleries.md)

# 2부 · 드론 사진                               ← was "1부" (relabel only, content unchanged)
...(09-drone/* + 10-drone-sites/* — identical lines 7–19 of current file)

# 드론 참고 자료                                 ← UNCHANGED (heading + content + relative position after its part)
...(identical lines 23–25)

# 3부 · 준비하기                                 ← was "2부"
...(identical lines 29–40)

# 4부 · 가기 전 연습                             ← was "3부"
...(identical lines 44–49)

# 5부 · 은하수 명소별 촬영 가이드                ← was "4부 · 몽골 여행지별 촬영 가이드" — RENAMED, not just relabeled
...(identical lines 53–58, only the heading text changes)

# 6부 · 후보정                                   ← was "5부"
...(identical lines 62–65)

# 보너스 기법                                    ← UNCHANGED
# 부록                                           ← UNCHANGED
# 참고 자료                                      ← UNCHANGED
```

**Critical rename, not just relabel:** current `# 4부 · 몽골 여행지별 촬영 가이드` (line 51, the 04-mongolia/은하수 site guide) must become `# 5부 · 은하수 명소별 촬영 가이드`. Reason: once "여행 사진" exists as a part name, the old title's use of "여행지별" (generic "by destination") collides semantically with the new part's own "여행 사진" branding. A reader skimming the TOC would see two different parts both implying "travel," one about day photography and one about Milky Way photography at night. Disambiguating the astro part's title to explicitly say "은하수" removes the ambiguity and matches the three-track vocabulary (여행·드론·은하수) that PROJECT.md already uses to describe the book. This is a content-line-preserving rename — only the `# 4부 · ...` heading line changes, the five bullet lines under it (`04-mongolia/*.md` paths) are untouched, matching the "content unchanged, only part labels renumber" precedent from v1.1.

**"드론 참고 자료" placement needs no structural adjustment** — it already sits immediately after its part's site pages and before the next 부, which is exactly the position the new "여행 사진 참고 자료" block should also occupy relative to *its* part. Both reference blocks end up back-to-back (여행 refs → 드론 refs → 3부 준비하기), which is a natural reading flow and requires no special-casing beyond correctly ordering the two new/existing blocks.

## introduction.md Rewrite Points (3-track framing)

All line numbers reference the current `src/introduction.md`:

1. **Line 3 (italic hero caption):** "드론으로 내려다본 고비의 지형과... 몽골이 보여 주는 두 개의 풍경." → needs a third clause for travel/여행 (e.g., 차를 타고 이동하며 만나는 순간들 / 지상에서 두 눈으로 보는 풍경) and "두 개의 풍경" → "세 개의 풍경" (or equivalent three-part phrasing).
2. **Line 7 (opening paragraph):** "이 책은... 이 두 축을 함께 다룹니다. 드론 파트는 [1부 · 드론 사진](09-drone/index.md)에서 시작하고, 은하수 파트는 그 뒤를 잇습니다." → rewrite to name three axes (여행·드론·은하수), and correct the "시작" claim: 여행 파트now starts the book, not 드론. Update the link target from `09-drone/index.md` to `11-travel/index.md`.
3. **"몽골, 은하수를 위한 땅" section (lines 22–33):** stays 은하수-specific, no rewrite needed except the internal link at line 28 (`[4부 · 몽골 여행지별 촬영 가이드](04-mongolia/overview.md)`) — link target path is unchanged (still `04-mongolia/overview.md`) but the **link text** must follow the SUMMARY rename to `[5부 · 은하수 명소별 촬영 가이드]`.
4. **"거창한 장비는 필요 없습니다" section (lines 35–51):** this is explicitly 은하수 minimal-gear framing (references `01-gear/index.md` and `07-appendix/camera-lens-picks.md`, both 은하수-scoped). Flag for the roadmap: a first-time reader arriving via the new travel-first structure could mistake this for whole-book gear guidance. Recommend adding a one-line scope disclaimer here (e.g., "이 절은 은하수 촬영 기준입니다 — 여행 사진 장비는 [1부 · 여행 사진]에서 별도로 다룹니다") rather than a full rewrite.
5. **"이 책을 읽는 법" ordered list (lines 107–118) — full rewrite required.** Current list has 6 items (드론→준비→연습→몽골명소→후보정→보너스/부록/참고). New list needs 7 items: insert 여행 사진 as item 1, renumber the rest, and rename item 5 (was 몽골 여행지별) to match the SUMMARY rename (은하수 명소별). Also update the closing call-to-action sentence (line 118: "준비되셨다면, [드론 사진 개요](09-drone/index.md)부터 시작하세요.") to point at `11-travel/index.md` instead.

## book.toml Rewrite Points

`src/book.toml` line 5: `description = "몽골 고비에서 드론 사진과 은하수 사진을 찍는 법 — 장비부터 촬영, 후보정까지"` → extend to three tracks, e.g. `"몽골 고비에서 여행 사진·드론 사진·은하수 사진을 찍는 법 — 장비부터 촬영, 후보정까지"`. No other `book.toml` fields need changes (title "몽골 사진 가이드" is already generic from the v1.1 broadening and needs no further change; `[build]`/`[output.html]` sections are structural, untouched).

## README.md Rewrite Points

`README.md` 목차 list (lines 11–20) needs:
- A new bullet for "**1부 · 여행 사진**" (mirroring the drone bullet's style: content summary + note about real vs. example photos) placed first, before the current drone bullet.
- A new "**여행 사진 참고 자료**" bullet after it (mirroring the "**드론 참고 자료**" bullet's style).
- Relabel "1부 · 드론 사진" → "2부 · 드론 사진", "2부 · 준비하기" → "3부", "3부 · 가기 전 연습" → "4부", "4부 · 몽골 여행지별 촬영 가이드" → "5부 · 은하수 명소별 촬영 가이드" (matches SUMMARY rename), "5부 · 후보정" → "6부".
- Line 3 top description ("몽골 고비에서 드론 사진과 은하수 사진 찍기...") → extend to three tracks, same phrasing change as `book.toml`.

## Reuse Points (explicit)

1. **GPS table — reuse via link, do not duplicate.** `src/04-mongolia/overview.md` (lines 5–13) owns the single source-of-truth GPS coordinate table for the 5 sites. `10-drone-sites/overview.md` (lines 7–11) already demonstrates the correct reuse pattern: it does *not* repeat the table, it says "명소 5곳의 GPS 좌표는 이미 [고비 촬영 일반 원리](../04-mongolia/overview.md)의 GPS 표에 정리돼 있습니다... 좌표를 이 페이지에 다시 옮겨 적지 않고 그 표를 참고하세요," then adds only a one-paragraph terrain-character summary specific to its own track. `12-travel-sites/overview.md` must follow this exact pattern: link to `../04-mongolia/overview.md`'s table, add only travel-specific framing (e.g., daytime light/crowd/access notes), never re-list coordinates.

2. **Glossary — extend in place, don't fork.** `src/07-appendix/glossary.md` is a single alphabetized (가나다순) term list shared across all tracks already (e.g., 크롭계수, RAW, 히스토그램 are all reused as-is). If the travel part introduces new terms not yet defined (e.g., 골든아워/블루아워 — currently only used parenthetically in `09-drone/index.md` without a formal glossary entry, and NPF/500-rule-adjacent framing/exposure terms specific to daytime), add them into this same file at their alphabetical position, each linking to its first-use travel chapter — do not create a separate `travel-glossary.md`.

3. **RAW workflow — link + delta pattern, not full rewrite.** `src/09-drone/drone-postprocessing.md` is the exact template to mirror if a travel-specific postprocessing note is needed: it opens with "드론 후보정은 완전히 새로운 워크플로가 아닙니다... 기존에 익힌 워크플로 위에 드론이라서 생기는 차이(델타) 세 가지만 얹으면 됩니다," links to `../05-postprocessing/raw-develop.md` for the shared 화이트밸런스→노출→대비→채도 sequence, and then adds only 2-4 short delta sections unique to its track (드론: 렌즈왜곡, 먼지얼룩, 저노이즈). Note that PROJECT.md's v1.2 target-features list does **not** list a dedicated travel-postprocessing chapter — if the roadmap decides one is warranted (e.g., daytime dynamic-range recovery, no-stacking-needed note), this link+delta pattern is the reuse mechanism; otherwise a single line inside `11-travel/camera-settings.md` or `landscape-and-street.md` pointing to `05-postprocessing/raw-develop.md` may suffice without a new file.

4. **Image pipeline / licensing discipline — reuse conventions, not files.** All three tracks (은하수, 드론, and now 여행) follow the same house style established in `introduction.md`'s "이미지 출처" table and `09-drone/index.md`'s per-image captions: CC0/CC BY/CC BY-SA only, explicit photographer + license + source-link attribution, and honest "예시 이미지 — 실제 몽골 촬영지는 아닙니다" captioning when a photo is not the real location. `08-references/travel-galleries.md` and any embedded example images in `11-travel/*.md`/`12-travel-sites/*.md` must follow this identical convention (this is process reuse, not a file to link).

5. **Gear pattern — parallel, not shared.** `01-gear/index.md` is explicitly scoped to 은하수 ("트래킹 장비 없이... 은하수를 찍기 위한 장비 가이드," "은하수 촬영에 필요한 카메라·렌즈"). The new `11-travel/camera-settings.md` is a *parallel* gear/settings page for the travel track (Canon R7 body + Samyang 12mm + RF 50mm + RF-S 18-150mm recommendation), not a fork or extension of `01-gear/`. Cross-link shared accessories (tripod, spare batteries — already covered generically in `01-gear/accessories.md`) rather than re-describing them, but keep the camera-lens *choice* content separate since the framing differs (여행: versatility/reach for day shooting vs. 은하수: max-aperture/wide-angle for night).

## Recommended Write Order (mirrors v1.1 exactly)

v1.1 used a 4-phase order — **structure/stubs first, content phases after, references/verification last** — driven entirely by `create-missing = false`. Reuse the identical shape for v1.2:

**Phase A — 구조·제목 확장 (structure only, no real content):**
1. Create all 12 stub files (`11-travel/*` × 4, `12-travel-sites/*` × 6, `08-references/travel-*.md` × 2) using the same stub format as v1.1 Phase 7: H1 title line + blank line + one "작성 예정 — Phase [N]에서 채움" blockquote line. No images, no real body text.
2. Rewrite `src/SUMMARY.md` per the before/after above: insert the new 1부 + 여행 참고자료 blocks, relabel 드론(1부→2부)/준비하기(2부→3부)/연습(3부→4부)/후보정(5부→6부), and **rename** (not just relabel) the old 4부 to "5부 · 은하수 명소별 촬영 가이드." Existing content-line paths (`09-drone/...`, `04-mongolia/...`, etc.) stay byte-identical except for that one heading text change.
3. Rewrite `src/book.toml` description, `src/introduction.md` (hero caption, opening paragraph + link, "이 책을 읽는 법" list + closing CTA, and the 4부 link-text update), and `README.md` 목차.
4. Run `mdbook build src` and confirm exit 0 — this is the hard gate `create-missing = false` imposes; every stub must exist and every SUMMARY link must resolve before this phase can be considered done. This mirrors v1.1 Phase 7's explicit verification step ("`mdbook build src` 가 exit 0... 16개 스텁이 모두 SUMMARY 링크와 일치해야 통과").

**Phase B — 여행 사진 기초 (`11-travel/`) content**, likely parallelizable across the 4 files similar to how v1.1 Phase 8 split 7 drone files across 3 parallel plans.

**Phase C — 코스 명소별 여행 사진 가이드 (`12-travel-sites/`) content**, mirroring v1.1 Phase 9: hub page first (reusing the GPS table per Reuse Point 1), then the 5 site pages, plannable in parallel groups.

**Phase D — 여행 사진 참고 자료 (`08-references/travel-*.md`) + final link/license verification**, mirroring v1.1 Phase 10's role as the last phase (maximizes time available for link/license verification before shipping) and its "final full build check" step.

This ordering exists specifically **because** `create-missing = false` — any phase that tries to add SUMMARY links without their target files existing first breaks `mdbook build` for every phase after it. Locking structure in Phase A the same way v1.1 did is not optional stylistic preference, it is what let v1.1's phases 8–10 run without ever breaking the build, and the same guarantee is needed here.

## Anti-Patterns (confirmed unnecessary / to avoid)

1. **Renumbering `01-`–`10-` folders to make travel "look first" on disk.** Confirmed unnecessary — v1.1 already established that SUMMARY.md alone controls reading order, and folder numbers are purely chronological/cosmetic. Renumbering would force touching every relative link (`../0X-...`) across the whole existing content tree for zero reader-facing benefit, and risks silently breaking links `create-missing=false` would only catch at build time in the worst case (or, if the old and new paths happen to both exist momentarily, might not catch at all).
2. **Reusing "몽골 여행지별 촬영 가이드" as a title for two different parts.** Confirmed a real risk given the new part's own branding — resolved via the explicit rename described above, not by avoiding "여행 사진" wording in the new part (which is the correct, PROJECT.md-aligned name for the new track).
3. **Duplicating the GPS table, glossary, or RAW workflow into the new travel folders.** Confirmed unnecessary and against established convention — `10-drone-sites/overview.md` and `09-drone/drone-postprocessing.md` are direct, working precedents for link+delta reuse instead of duplication; the travel part should follow the same pattern.
4. **Duplicating `08-references/mongolia-travel-info.md`.** This file already exists and already generically covers Mongolia travel logistics — a new "travel-info" reference page for the 여행 사진 track would be redundant; link to the existing one instead.
5. **Writing travel content before stubs+SUMMARY exist.** Would break `mdbook build` immediately per `create-missing = false`, exactly as flagged in v1.1's Phase 7 rationale ("SUMMARY에 링크된 새 [...] 페이지가 실제 파일로 존재해야 빌드가 성공한다"). Phase A must complete and pass a green build before Phase B/C/D content work starts.

## Confidence

All findings are grounded in direct reads of the current repo state (not generic mdBook conventions) and in the one-milestone-prior precedent (v1.1) which solved structurally the same problem (insert a new part ahead of existing content, without renumbering, under `create-missing=false`). Confidence: **HIGH** on folder naming, SUMMARY reorg, write order, and reuse points (all directly observed in existing files). **MEDIUM** on the exact travel-content file split (`11-travel/` 4 files, `12-travel-sites/` 6 files) — this is a reasonable proposal sized to PROJECT.md's v1.2 target-features list, but the roadmap phase should feel free to adjust file count/boundaries within the same folder structure.
