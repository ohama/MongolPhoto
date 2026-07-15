# Architecture & Sourcing: 드론 영상 (v1.4)

**Domain:** Korean mdBook (0.5.x) — adding 드론 영상 촬영 + CapCut 편집 to 2부
**Researched:** 2026-07-15
**Scope:** (a) 2부 folder/SUMMARY layout for new video pages, (b) video-presentation policy (embed vs still+storyboard), (c) confirmed reusable CC0 stills, (d) CapCut screenshot policy
**Confidence:** HIGH (repo structure + licenses read directly; GitHub/mdBook limits web-verified)

---

## 1. Current 2부 structure (as read)

From `src/SUMMARY.md` lines 33–53. 2부 today is **photo-only** with a video *stub*:

```
# 2부 · 드론 사진
- [드론 사진 개요](09-drone/index.md)          → 5 photo-shoot leaves
- [명소별 드론 촬영 원리](10-drone-sites/overview.md) → 5 site leaves
- [드론 사진·영상 보정](09-drone/postprocessing-index.md)   ← combined group landing
  - [드론 사진 후보정](09-drone/drone-postprocessing.md)
  - [드론 영상 보정](09-drone/video-editing.md)   ← STUB "추후 보강 예정"
- [드론 참고 자료](08-references/drone-index.md) → regulations, gear-tutorials, galleries
```

**ToC convention (confirmed):** every group parent is a *clickable landing page* — `index.md` (prose intro + read-order), `overview.md` (명소), or a short `*-index.md` link-hub (`postprocessing-index.md`, 357 bytes). `[output.html.fold] enable = true` — groups collapse. `create-missing = false` — **every new `.md` must be created before build or the build breaks.** So new SUMMARY entries and files must land together.

**Key structural fact:** the current group `드론 사진·영상 보정` mixes a real photo-post page with a video *stub*. Now that video gets real, substantial content (shooting + a multi-step CapCut workflow), that combined group is the wrong container — re-split it.

---

## 2. RECOMMENDED 2부 layout (decisive)

Rename the part heading to **`# 2부 · 드론 사진·영상`** (honest: video now has real content), retire the combined `드론 사진·영상 보정` group, and add two new clickable-landing groups — one for **shooting**, one for **CapCut editing** — placed after the site chapters (shoot → sites → video-shoot → edit → photo-post → references):

```
# 2부 · 드론 사진·영상

- [드론 사진 개요](09-drone/index.md)                     (unchanged)
  - dji-mini5pro-basics / -settings / composition / flight-and-battery / gobi-environment
- [명소별 드론 촬영 원리](10-drone-sites/overview.md)      (unchanged, 5 sites)
- [드론 영상 촬영](09-drone/video-index.md)               ← NEW landing (prose + read-order)
  - [영상 촬영 기초 — 프레임레이트·셔터앵글·D-Log/HDR·ND](09-drone/video-shooting.md)
  - [시네마틱 드론 무브먼트](09-drone/video-movements.md)
- [CapCut 영상 편집](09-drone/capcut-index.md)            ← NEW landing (replaces video-editing stub role)
  - [CapCut 시작하기 — 설치·인터페이스·프로젝트](09-drone/capcut-basics.md)
  - [컷 편집 — 순서 잡기와 다듬기](09-drone/capcut-cut.md)
  - [색보정·안정화·속도(슬로모·타임랩스)](09-drone/capcut-grade-speed.md)
  - [음악·자막·내보내기(해상도·비트레이트)](09-drone/capcut-export.md)
  - [예시 편집 스토리보드 (실제 영상은 트립 후)](09-drone/capcut-storyboard.md)
- [드론 사진 후보정](09-drone/drone-postprocessing.md)     ← promoted to standalone leaf
- [드론 참고 자료](08-references/drone-index.md)           (add 영상 튜토리얼 + 무료 영상 소스 절)
  - drone-mongolia-regulations / drone-gear-tutorials / drone-galleries
```

**File actions**
| File | Action |
|---|---|
| `09-drone/video-index.md` | CREATE — landing (why video ≠ photo, read-order, "실제 영상은 트립 후" note) |
| `09-drone/video-shooting.md` | CREATE — framerate/resolution/shutter-angle/D-Log/HDR/ND-for-motion |
| `09-drone/video-movements.md` | CREATE — reveal/orbit/flyaway/crane cinematic moves |
| `09-drone/capcut-index.md` | CREATE — CapCut editing landing (read-order) |
| `09-drone/capcut-basics.md` … `capcut-export.md` | CREATE — 4 workflow pages |
| `09-drone/capcut-storyboard.md` | CREATE — storyboard example built from existing stills |
| `09-drone/video-editing.md` | RETIRE (stub) — content superseded by CapCut group. Leave a one-line redirect page OR delete + drop from SUMMARY |
| `09-drone/postprocessing-index.md` | RETIRE combined landing — `drone-postprocessing.md` becomes a standalone leaf |
| `src/SUMMARY.md` | Edit part heading + the 2부 block |
| `src/introduction.md` (line ~114) | Update — currently says "영상 보정은 추후 보강"; now video is a real chapter |

**Lean fallback (if the fuller split feels heavy pre-trip):** collapse shooting into one page (`video-shooting.md`) and CapCut into two (`capcut-workflow.md` + `capcut-storyboard.md`). Still re-split photo-post out of the combined group. The fuller split above is recommended because CapCut is footage-agnostic and can be written *now* from the app UI + workflow, without any real clip.

**Why not nest video under `드론 사진 개요`?** It would bury a co-equal skill (video shooting is a distinct discipline: motion, framerate, movements) inside a photo-titled group. Parallel top-level groups match how 1부/3부 treat shooting vs post as siblings.

---

## 3. Video-presentation policy — STILL + STORYBOARD, NOT embedded video

**Verdict: do NOT self-host or embed real video. Use storyboard tables + representative stills + textual step-by-step, with "실제 영상은 트립(2026-08-13) 이후 교체" notes.** This matches the book's existing honesty pattern (`before-after.md`, `drone-postprocessing.md`, `travel-recipes.md`).

**Can mdBook embed video? Technically yes** — markdown passes raw HTML through, so both `<video>` (self-hosted) and a YouTube `<iframe>` render fine in an mdBook page. Feasibility is not the blocker; *practicality and honesty* are.

**Why self-hosting is impractical (web-verified):**
- GitHub Pages published site **soft cap 1 GB total**; **100 GB/month bandwidth** soft limit; git friction on files **>50–100 MB** (GitHub Pages limits doc). 
- DJI Mini-class 4K/2.7K footage runs ~**200–400 MB per minute**. Even one or two real clips would dominate the whole-site budget and bloat the repo. → Self-hosting drone video on GitHub Pages is not viable.

**Representative EXAMPLE video → LINK-ONLY (recommended), not embed.** The book already links YouTube tutorials as text links (verified via oEmbed in `drone-gear-tutorials.md` / `mongolia-astrophotography-links.md`) and explicitly warns "프레임을 캡처해 싣거나 재편집해 쓰지 말 것." Keep that policy: link to representative cinematic/CapCut tutorials; do not embed an `<iframe>`. (A single YouTube iframe is technically allowed but breaks the book's consistent link-only convention and adds a third-party dependency to every page load.)

**Free VIDEO clip sources — honest license status (do NOT call these CC0):**

| Source | License reality (2026) | Rehost/embed in book? | CC0? |
|---|---|---|---|
| **Pexels Video** | Pexels License — free personal/commercial, **no attribution required**, modification allowed. Prohibits redistributing/selling on other stock platforms & selling unaltered copies. | Allowed *as part of a larger work* (a book qualifies), but size makes self-host impractical → **link-only** | **NO** (dropped CC0 in 2017) |
| **Pixabay Video** | Content License — free, no attribution, no standalone redistribution/competing-stock use. **Pre-2019-01-09 uploads are CC0**; newer are Content License; video-effect content has an extra clause. | Same as Pexels → **link-only** | **Only** for pre-2019 items, per-file |
| **Coverr** | Free commercial, no attribution; cannot redistribute as stock. | link-only | **NO** |
| **Wikimedia Commons video** (WebM/OGV) | Per-file: often **CC BY-SA** or **CC0**. Rehostable *with* attribution/ShareAlike. | Rehostable but still adds file size + a good Gobi/desert drone clip is unlikely to exist | Per-file (verify each) |

**Honesty rule for the roadmap:** never label a Pexels/Pixabay/Coverr clip "CC0." They are permissive-but-restricted custom licenses. Distinguish **link-only** (always safe) from **embed/self-host** (permitted as part of a larger work under those licenses, but size-impractical here). Only Wikimedia CC0/pre-2019-Pixabay-CC0 files are true public domain, and only after per-file verification.

---

## 4. Confirmed reusable CC0 stills already in the repo

Read directly from repo files + existing credit captions:

**`src/images/drone-sites/` (5 files):**
| File | Author | License | CC0? |
|---|---|---|---|
| `khongoryn-els.jpg` | Bernard Gagnon | **CC0 / public domain** | ✅ YES |
| `bayanzag.jpg` | Bernard Gagnon | **CC0 / public domain** | ✅ YES |
| `yolyn-am.jpg` | Bernard Gagnon | **CC0 / public domain** | ✅ YES |
| `tsagaan-suvarga.jpg` | Rob Oo | CC BY 2.0 (attribution) | no |
| `baga-gazriin-chuluu.jpg` | Arabsalam | CC BY-SA 4.0 (attrib + ShareAlike) | no |

**`src/images/drone/` (4 files):** `aerial-hero.jpg` & `dune-pattern.jpg` (Sonse, CC BY 2.0), `real-drone-dunhuang.jpg` (w0zny, CC BY-SA 3.0), `red-sand.jpg` (Olga Ernst & Hp.Baumeler, CC BY-SA 4.0) — **none CC0**, all attribution/ShareAlike.

**Recommendation for the storyboard:** build representative "shot" thumbnails from the **3 Bernard Gagnon CC0 site stills** (khongoryn-els / bayanzag / yolyn-am) — true public domain, no attribution obligation, already resized/EXIF-stripped, already in the tree. CC BY / CC BY-SA stills are *also* reusable within the book (attribution is already carried in their captions), so they can fill storyboard cells too **provided the credit line is repeated** and, for CC BY-SA files, the book's own license stance stays compatible. Carry the same honesty caption used elsewhere: *"지상 촬영 예시 — 실제 드론 영상 프레임은 트립 후 교체."* Present the storyboard as a **table** (shot # · 무브먼트 · 초 · 대표 스틸 · 편집 노트), not as fake video.

---

## 5. CapCut UI screenshot policy — CONFIRMED: author's own captures later, placeholders now

CapCut UI is **copyrighted by ByteDance** — same situation as Adobe/Lightroom UI in this book. The book's established policy (verified): it embeds **no third-party software-UI screenshots**; it describes UI in prose and leaves HTML-comment placeholders for images to be produced by the author (e.g. `<!-- 이미지: timelapse-sequence.png ... -->` in `timelapse.md`, `<!-- 사진: 보정 전/후 ... -->` in `before-after.md`, `<!-- 이미지: src/images/drone/before-after-drone.jpg -->` in `drone-postprocessing.md`).

**Apply the identical policy to CapCut pages:**
- Describe the CapCut interface/steps in text.
- Use `<!-- 이미지: src/images/drone/capcut-<step>.png — 저자 직접 캡처 예정 -->` placeholders.
- Do **not** scrape/rehost ByteDance UI screenshots or marketing images.
- Real annotated captures are added by the author after installing CapCut (screenshots of one's own screen using free software are fine to publish; the concern avoided is redistributing ByteDance's *own* asset images).

---

## 6. Anti-patterns to avoid

- **Self-hosting `.mp4`/`.webm` drone clips in the repo** — blows the 1 GB Pages budget, triggers git large-file friction, slows clones. (Also would contradict the book's own before/after-pending honesty pattern.)
- **Labeling Pexels/Pixabay/Coverr clips "CC0"** — factually wrong; they are custom permissive licenses with redistribution limits.
- **Fabricating a Gobi drone video URL** to look complete — none was verified; link only what oEmbed/file-page confirms, per existing book policy.
- **Keeping the `드론 사진·영상 보정` combined group** — buries real video content behind a photo-post title and keeps the retired stub visible.
- **Embedding CapCut/ByteDance UI images** — copyrighted; use own captures + placeholders.

---

## Sources

- Repo (read directly): `src/SUMMARY.md`, `src/09-drone/*` (index, postprocessing-index, video-editing, drone-postprocessing), `src/10-drone-sites/overview.md` + site captions, `src/13-editing/credits.md`, `src/06-bonus/timelapse.md`, `src/book.toml`, `src/images/drone/`, `src/images/drone-sites/` — HIGH confidence.
- [GitHub Pages limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits) — 1 GB site, 100 GB/mo bandwidth — HIGH.
- [Pexels License](https://www.pexels.com/license/) / [Pexels license FAQ](https://help.pexels.com/hc/en-us/articles/360042295174) — no-attrib, no-restock, not CC0 — HIGH.
- [Pixabay Content License](https://pixabay.com/service/license-summary/) — Content License vs pre-2019 CC0 — HIGH.
- mdBook raw-HTML passthrough (markdown → HTML): `<video>`/`<iframe>` render — HIGH (standard mdBook/CommonMark behavior).
