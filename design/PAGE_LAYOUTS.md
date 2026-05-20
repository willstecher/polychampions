# Page Layouts

Per-page wireframes in prose. All measurements are desktop (≥1280px); responsive collapse rules in `DESIGN_SYSTEM.md` §1.

Refer to `source/PolyChampions Rebuild.html` for the live interactive reference. Direction A (HEX) is the canonical one — open it, navigate the prototype, and screenshot whatever's faster than reading prose.

---

## 1. Home (`/`)

Stacked sections, each separated by a 2px ink border.

### Section 1.1 — Hero

Two-column: text left (`1.4fr`), house logo collage right (`1fr`). Container max-width 1180.

- **Eyebrow pill**: `SEASON 21 · 21ST EDITION` — pill-shape with `background: var(--ink)`, `color: var(--paper)`, padding `6px 14px`, radius 99, mono 11/600
- **H1**: "The competitive league for The Battle of Polytopia." — 84px/800/ink with `-0.04em` letter-spacing, line-height 0.92. The phrase **"The Battle"** gets a brand-orange highlight: `background: var(--brand); color: var(--paper); padding: 0 12px; transform: rotate(-1.5deg); display: inline-block`
- **Lead paragraph**: 20px/400/ink-2, max-width 540, line-height 1.45
- **Buttons**: `[Join the league →]` primary + `[See the 10 houses]` secondary, 12px gap
- **Collage** (right column, position: relative, height 380px): the first 6 house logos in 84px hex cards, each rotated `(i - 2.5) * 14°` and translated `(i - 2.5) * 36px` horizontally with `Math.abs(i - 2.5) * 8px` vertical offset. Each card has 3px ink border, 16px radius, `box-shadow: ${i * 2}px ${i * 2}px 0 0 var(--ink)`. Background uses `house.color`.

### Section 1.2 — Stat strip (4 cells)

Inside hero section, below the columns. 60px top margin.

- 4 equal columns inside a `2px solid var(--ink)` container with `border-radius: 10px`, dividers between cells `2px solid var(--ink)`
- Each cell: padding 22px 26px
  - Big number: 40px/800/ink, `-0.03em`, line-height 1
  - Caption: mono 11px/600/ink-2, uppercase, `0.08em` tracking, 6px above
- Content: `10 / Houses`, `25+ / Teams across skill levels`, `21 / Seasons played`, `May 2018 / Founded`

### Section 1.3 — How the League Works

`background: var(--paper-2)`, padding 60px 36px, two-column `1fr / 1.4fr`.

- Left: eyebrow + H2 "12 games. One season. Three months." (44px/800/-0.03em)
- Right: two paragraphs (17/1.6/ink-2) explaining 12 games per season + promotion/relegation, then a 4-up stat row at the bottom: `2v2 / TWO ON TWO`, `3v3 / THREE ON THREE`, `12 / GAMES PER SEASON`, `3 MO / SEASON LENGTH`

Mark `promoted` in `var(--good)` and `relegated` in `var(--warn)` inline `<strong>` tags.

### Section 1.4 — The 10 Houses

`background: var(--paper)`. Eyebrow + H2 "Ten Houses" + `All teams →` link to `/teams/`.

5-column grid of `<HouseCard>`s. Gap 12px. Each card links to `/teams/[slug]/`.

### Section 1.5 — YouTube

`background: var(--paper-2)`. Two columns `1fr / 1.4fr`:

- Left: eyebrow `YOUTUBE` + H2 "Strategy guides, game reviews, and other fun videos." + paragraph + `Subscribe on YouTube ↗` link
- Right: 16:9 YouTube embed (`c6SqDIYaAcU`) inside a 2px ink border with 10px radius

### Section 1.6 — History CTA

`background: var(--ink)`, `color: var(--paper)`, padding 70px 36px, position relative.

- Decorative `<HexBg>` behind, opacity 0.12, palette: brand + yellow + sky-blue + plague-green
- Two columns `1.4fr / 1fr` aligned center
- Left: eyebrow "SINCE 2018" + H2 "From 4 colors to 25+ teams." (56px/800/-0.03em) + paragraph (18/1.5/0.8 opacity)
- Right: stacked buttons — `[Read the league history →]` primary in brand background, `[Hall of Champions]` secondary with paper border on dark

---

## 2. Teams (`/teams/`)

Container max-width 1180. No hero — just a page header.

- Eyebrow `THE LEAGUE` + H1 "The PolyChampions League has ten Houses, each hosting multiple teams." (60px/800/-0.03em)
- 10 `<HouseBio>` rows, alternating logo-left / logo-right per row. Gap 14px between rows.
- Footer note: "Read the step-by-step instructions on **how to get on a team**." (link to `/join/`) — inside a paper-2 card, 2px ink border, centered text

---

## 3. Team detail (`/teams/[slug]/`)

### 3.1 House banner

`<HouseBanner>` per §3.7 of DESIGN_SYSTEM. Max-width 1180 inside, padding 56px 36px 44px.

- Left: logo in a paper-backed, 4px ink-bordered, 16px radius hex frame (140px)
- Right: eyebrow "HOUSE" + H1 (house name, 88px) + motto if present (22px italic)
- Background: house.color, ALL text: house.accent
- `<HexBg>` opacity 0.25 in the house's color palette, deterministic seed `house.id.charCodeAt(0)`

### 3.2 Body

Max-width 900, padding 48px 36px.

- Lead paragraph: 20px/400/ink (the bio from front-matter), line-height 1.55
- Optional "History" section (h2 28/800/-0.02em) + paragraph if `historical:` exists in the markdown body
- CTA card at bottom: 2px ink border, paper-2 background, padding 24, two-column with copy on left and `[How to join →]` primary button on right
- "← Back to all teams" text link below the CTA

---

## 4. Join a Team (`/join/`)

Two sections.

### 4.1 Hero

`background: var(--ink)`, `color: var(--paper)`, padding 70px 36px 50px, container max-width 1000.

- Decorative `<HexBg>` opacity 0.18
- Eyebrow "HOW TO JOIN" + H1 "The Novas: your first season." (80px, 2 lines)
- Lead paragraph (19/0.82 opacity/1.55)

### 4.2 Steps + tutorial

Container max-width 1000.

- H2 "Step by step"
- 6 step cards, vertical stack (gap 10), each: grid `60px 1fr`, padding 18px 22px, 2px ink border, paper-2 background
  - Left: big numeral "01"–"06" in 44px/800 brand orange
  - Right: step title (19/700) with `$novas` style commands wrapped in inline `<code>` (background: ink, color: paper, padding 2px 6px, radius 3, mono 14)
  - Right subtitle: detail copy (14/1.5/ink-2)
- H2 "Bot tutorial" + lead "How to use the PolyElo bot in the Discord server..."
- 16:9 YouTube embed (`_KsDd0LT54M`) in a 2px ink bordered 10px radius container
- Closing CTA card: ink background, paper text, two-column with "Ready? Join the Discord." + Discord button (`discord.gg/7AKFVrZfqb` with Discord icon)

---

## 5. FAQ (`/faq/`)

Single column max-width 820. Padding 56px 36px.

- Eyebrow "FREQUENTLY ASKED" + H1 "Questions" (60px)
- 8 `<Accordion>` items, gap 10px between
- First item open by default (`<details open>`)
- Content sourced from `content/pages/faq.md` — split on `## ` H2 headings (question = H2 text, answer = following paragraph(s))

---

## 6. League Rules (`/league-rules/`)

Two-column layout, max-width 1100, gap 40px:

### 6.1 Left: sticky TOC (220px wide, sticky-top 90px)

- Mono eyebrow "CONTENTS"
- Anchor links for each section: 14/500/ink, padding 6px 10px, left-border 3px transparent (becomes brand on hover/active), radius 4
- 8 sections: Overview · Seasons & Divisions · Match Format · Tribe Bans & Map Settings · Rosters & Free Agency · FATs & Auctions · Trades · Code of Conduct

### 6.2 Right: long-form article

- Eyebrow "OFFICIAL LEAGUE RULES"
- H1 "League Rules" (56px)
- Intro paragraph (16/1.55)
- Sections, each with:
  - `<section id="…">` for anchor jumping
  - 1px line top divider (`var(--line)`)
  - H2 (30/800)
  - Body paragraphs (16/1.7/ink-2)
- `scroll-margin-top: 90px` on each `<section>` so anchor scroll clears the sticky header

Source: `content/pages/league-rules.md` — the full 33k-word rulebook. Render as MDX so headings can be auto-extracted into the TOC by Astro's `headings()` helper.

---

## 7. News index (`/news/`)

Container max-width 1180.

### 7.1 Header

- Eyebrow "NEWS" + H1 "The Field Report" (60px)

### 7.2 Featured (most recent)

Large card spanning full width:

- 2px ink border, 12px radius, paper-2 background, padding 30
- Grid 1.4fr / 1fr: copy on left (tags, 34px/800 title, excerpt, date·author), gradient hero on right (240px tall, brand→yellow gradient with `<HexBg>` opacity 0.6 overlaid)

### 7.3 Archive grid

3-column grid (gap 14) of `<NewsCard>`s for the remaining 9 articles.

---

## 8. News article (`/news/[slug]/`)

Single column max-width 720. Reading width.

- "← All news" back link (13/600/ink-2, underlined)
- Tag pills row (gap 8)
- H1 title (52px/800/-0.03em/1.05)
- Date · author meta (mono 12, ink-3)
- 2px ink HR divider (28px margins)
- Body: 18/1.7/ink. H2s within body at 28/800. Pullquotes / asides: paper-2 background, 2px ink border, padding 20px 24px, italic

---

## 9. History (`/history/`)

Container max-width 900.

- Eyebrow "FOUNDED MAY 25, 2018" + H1 "League History" (60px) + lead
- `<Timeline>`: vertical rail with `<TimelineItem>` for each beat. 8 beats from the export ranging May 2018 → today (S21).

---

## 10. Hall of Champions (`/hall-of-champions/`)

Container max-width 1000.

- Eyebrow "SINCE SEASON 1" + H1 "Hall of Champions" (60px)
- 2-column grid (gap 14) of season cards
- Each card: 2px ink border, 10px radius, `background: winner.color` (or paper-2 if no winner record), grid `90px 1fr 100px`, padding 18
  - Left: "SEASON" eyebrow + season number 44px/800 in winner.accent
  - Middle: winner name 22px/800 in winner.accent + detail copy 13/1.4
  - Right: house logo bare (80px)

---

## 11. Elo (`/elo/`) and Strategy (`/strategy/`)

Both are short utility pages. Single column max-width 720. Header + body content from markdown. Reuse the article template.

---

## 12. 404

Use the home hero template with:

- Eyebrow "PAGE NOT FOUND"
- H1 "Off the map." (or similar)
- Body: "That URL doesn't lead anywhere on PolyChampions. Try the teams page, or jump into Discord."
- Buttons: `[Browse the teams]` primary + `[Join Discord]` secondary
- One small `<HexBg>` decorative tile cluster

---

## 13. Image dimensions

| Use | Dimensions | Format |
|---|---|---|
| House logo, card | rendered 72px or 84px | Source PNG → Astro `<Image>` to WebP, w=300 |
| House logo, banner | rendered 140px or 180px | Source PNG → Astro `<Image>` to WebP, w=400 |
| News article hero | 1180×400 (when uploaded) | WebP via Astro `<Image>` |
| Site favicon | 32×32 + 180×180 apple-touch | PNG |
| OG image | 1200×630 | PNG generated per page via Astro's OG plugin or Satori |
