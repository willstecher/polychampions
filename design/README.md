# Handoff: PolyChampions Facelift — Direction A (HEX)

## Overview

This is a handoff package to rebuild **polychampions.com** as a modern static site, replacing the current WordPress install. The new site is a **content facelift**, not a redesign of information architecture — the existing copy ships verbatim. The visual identity, typography, and component system are new.

**Target stack:** Astro (static output) + Markdown content collections. No live data, no CMS for v1 (Discord is the operational hub; matches and standings live there).

**Direction chosen:** "HEX" — Polytopia-native. Hex grids, vibrant tribe colors, flat geometric forms, Space Grotesk + JetBrains Mono. The visual language draws from The Battle of Polytopia (the game the league plays) without lifting any in-game UI directly.

---

## About the design files

The files in `/source/` are **design references created in HTML/JSX** — interactive prototypes showing the intended look and behavior. **Do not copy them line-for-line.** Recreate them as proper Astro components, using Astro's idioms (server-rendered `.astro` files, scoped CSS, content collections, no React unless you need client-side interaction).

The prototypes use inline `style={{}}` blocks for self-contained portability. In Astro you'll want CSS variables and component-scoped CSS. The design tokens in §3 give you the exact values.

---

## Fidelity

**High-fidelity.** All colors, type sizes, line-heights, border weights, spacing, and copy are intentional. Match them precisely:

- Background `#FFF8E7` (warm paper, not pure white)
- Foreground `#1A1626` (warm near-black, not `#000`)
- Borders are `2px solid #1A1626` — heavier than usual; this is the signature
- Drop shadows on hover are flat-offset (`4px 4px 0 0` ink), not blurred — this is the signature too

---

## Tech stack

Use **Astro 4.x** (latest). Suggested setup:

```bash
npm create astro@latest polychampions -- --template minimal --typescript strict --no-git --no-install
cd polychampions
npm install
npx astro add mdx sitemap
```

**Content collections** (`src/content/config.ts`):

```ts
import { defineCollection, z } from 'astro:content';

const houses = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    name: z.string(),
    logo: z.string().url(),
    color: z.string(),      // tribe primary, e.g. "#F5C842"
    accent: z.string(),     // darker companion for text on the color
    motto: z.string().optional(),
  }),
});

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    date: z.coerce.date(),
    author: z.string().default('PolyChampions'),
    tags: z.array(z.string()).default([]),
    featuredImage: z.string().url().optional(),
  }),
});

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
  }),
});

export const collections = { houses, news, pages };
```

The `/content/` folder in this bundle is structured to drop directly into `src/content/`.

---

## Sitemap

Match the live site's nav exactly. Discord, YouTube, Contact email, and Merch links go in the footer.

| Route | Source | Notes |
|---|---|---|
| `/` | `content/pages/home.md` | Mission + how league works + 10 houses + featured YouTube + history snippet |
| `/teams/` | `content/pages/teams.md` + `content/houses/*.md` | All 10 houses with bios |
| `/teams/[slug]/` | `content/houses/[slug].md` | One per house |
| `/join/` | `content/pages/join.md` | Novas explainer + 6-step bot walkthrough |
| `/faq/` | `content/pages/faq.md` | 8 Q&As (use a parser that splits H2/P pairs) |
| `/league-rules/` | `content/pages/league-rules.md` | ~33k words; sticky-nav reading view |
| `/news/` | `content/news/*.md` | Index page sorted by date desc |
| `/news/[slug]/` | `content/news/[slug].md` | Article detail |
| `/history/` | `content/pages/history.md` | Long-form prose with section H2s |
| `/hall-of-champions/` | `content/pages/hall-of-champions.md` | Season-by-season winners |
| `/elo/` | `content/pages/elo.md` | Short explainer |
| `/strategy/` | `content/pages/strategy.md` | Strategy & Tactics resources page |

**External:**

- Discord: `https://discord.gg/7AKFVrZfqb`
- YouTube: `https://www.youtube.com/channel/UC9IStoy1QBIr4_iFTi3E6PA`
- Merch: `https://polychampions-shop.fourthwall.com/`
- Contact: `mailto:polychampions@gmail.com`

---

## Design system

See **`DESIGN_SYSTEM.md`** in this bundle for full token spec, type scale, component anatomy, and per-page layout specs. The short version:

**Colors**

| Token | Value | Use |
|---|---|---|
| `--paper` | `#FFF8E7` | Page background (warm) |
| `--paper-2` | `#FFFDF4` | Card / surface |
| `--ink` | `#1A1626` | All foreground text + borders |
| `--ink-2` | `#4A4458` | Secondary text |
| `--ink-3` | `#7A7488` | Tertiary / metadata |
| `--line` | `#E8DFC4` | Subtle dividers (warm) |
| `--brand` | `#FF6B35` | Single accent — used sparingly for CTAs, eyebrows, highlights |
| `--brand-dk` | `#D9421F` | Hover state for brand |
| `--discord` | `#5865F2` | Discord CTA only |
| `--good` | `#3DA859` | Promotion indicator |
| `--warn` | `#E84A2D` | Relegation indicator (visually similar to brand; only use in standings-style contexts) |

**Houses** carry their own color + accent in front-matter (see `content/houses/*.md`). When a house appears on its own card or banner, the card background is `color` and ALL text on it is `accent` (don't use `--ink` on a house color — contrast will fail on yellow).

**Type**

- Display + UI sans: **Space Grotesk** — weights 400, 500, 600, 700, 800 (Google Fonts)
- Monospace (metadata, eyebrows, code): **JetBrains Mono** — weights 400, 500, 600 (Google Fonts)

Scale (px):

| Token | Size | Weight | Letter-spacing | Use |
|---|---|---|---|---|
| `--text-display-1` | 84 | 800 | -0.04em | Hero H1 |
| `--text-display-2` | 60 | 800 | -0.03em | Page H1 |
| `--text-h2` | 44 | 800 | -0.03em | Section H2 |
| `--text-h3` | 30 | 800 | -0.02em | Subsection H3 |
| `--text-h4` | 22 | 700 | -0.01em | Card heading |
| `--text-body-l` | 20 | 400 | normal | Hero lead paragraph |
| `--text-body` | 16 | 400 | normal | Default body |
| `--text-meta` | 13 | 500 | normal | UI labels |
| `--text-mono-sm` | 11 | 600 | 0.15em | Mono eyebrows / metadata |
| `--text-mono-xs` | 10 | 700 | 0.08em | Pill tags (uppercase) |

Line-height: 1 for display (≥60px), 1.2 for h2/h3, 1.55–1.65 for body.

**Spacing scale:** 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48, 56, 60, 70 (px). Most cards use `padding: 16–22px`; section vertical rhythm is `padding: 56–70px 36px`.

**Borders + radii**

- Standard border: `2px solid var(--ink)` — this is the signature
- Subtle border: `1px solid var(--line)` for in-table row dividers
- Radius: `6px` for inline buttons, `8px` for cards/inputs, `10–12px` for major surfaces, `99px` for pills

**Shadows**

- Hover lift: `transform: translate(-2px, -2px)` + `box-shadow: 4px 4px 0 0 var(--ink)` — flat, offset, never blurred
- Card hover: `transform: translate(-3px, -3px)` + `box-shadow: 5px 5px 0 0 var(--ink)` (bigger lift for tile cards)
- Transitions: `transform .12s, box-shadow .12s` (or `.15s` on cards) — no easing override, browser default is fine

---

## Components

See `DESIGN_SYSTEM.md` for full anatomy. Quick list of components to build:

| Component | Purpose |
|---|---|
| `<SiteHeader>` | Sticky top nav with logo + page links + Merch + Discord CTA |
| `<SiteFooter>` | Hex logo + nav links (YouTube, Discord, Contact, Merch) + copyright |
| `<HouseLogo>` | Real house logo image, optionally wrapped in a colored hex frame |
| `<HouseCard>` | Tile-style card for the Teams grid — color background, large logo, name in accent |
| `<HouseBanner>` | Hero band for House detail pages — color background with low-poly hex tiles, logo in a paper-bordered hex frame, big serif/sans name |
| `<Button variant="primary|secondary|discord">` | Border-heavy button with flat-offset hover |
| `<Eyebrow>` | Mono uppercase tracked label above headings |
| `<Stat>` | Big number + mono caption (used in stat strips) |
| `<HexBg>` | Decorative SVG hex-tile background (deterministic from seed) — used in heroes and CTAs |
| `<TimelineItem>` | History page beat: date eyebrow + h2 + body, with a ring + line on the left |
| `<Accordion>` / `<Disclosure>` | FAQ entries — use native `<details>`/`<summary>` |
| `<NewsCard>` | Tag pill row + title + excerpt + date/author |
| `<RulesSidebar>` | Sticky table of contents for the long-form League Rules |
| `<YouTubeEmbed>` | 16:9 iframe wrapper |

---

## Interactions & behavior

- **Page navigation** is real `<a href>` links — no client-side router needed
- **Hover states** on all interactive elements; never rely on cursor change alone
- **House cards** lift on hover with offset shadow (see above)
- **Buttons** lift the same way
- **FAQ items** open/close with the native `<details>` element (no JS)
- **League Rules sidebar** uses anchor links and `scroll-margin-top` to clear the sticky header (NOT `scrollIntoView`)
- **External links** open in a new tab (`target="_blank" rel="noopener"`)
- **Discord button** in nav always renders in Discord blurple (`#5865F2`), regardless of page

---

## Responsive behavior

The prototype is desktop-first at 1440px. The site must be **mobile-friendly** but not mobile-first in priority — users overwhelmingly browse from desktop after finding the league on Discord.

Targets:

- Desktop ≥1280px: full layout as designed
- Tablet 768–1279px: collapse 2-col layouts to 1; reduce hero from 84px → 56px
- Mobile <768px: stack everything, hide secondary nav items behind a hamburger, reduce hero to 40px

**Critical: don't break the hex aesthetic on mobile.** Hex backgrounds can scale down, but make sure house cards still feel chunky (≥ 280px width on phones).

---

## Assets

**Logos** — download these from polychampions.com into `public/houses/` at build time:

| File | URL |
|---|---|
| `arctic-wolves.png` | https://polychampions.com/wp-content/uploads/2024/08/ArcticWolves-border.png |
| `dragons.png` | https://polychampions.com/wp-content/uploads/2024/08/dragons_logo.png |
| `jets.png` | https://polychampions.com/wp-content/uploads/2024/08/JetsLogo.png |
| `kraken.png` | https://polychampions.com/wp-content/uploads/2024/08/kraken-border.png |
| `lightning.png` | https://polychampions.com/wp-content/uploads/2024/08/LightningLogo2.png |
| `plague.png` | https://polychampions.com/wp-content/uploads/2024/08/plague-border.png |
| `ronin.png` | https://polychampions.com/wp-content/uploads/2024/08/ronin-border.png |
| `tempest.png` | https://polychampions.com/wp-content/uploads/2024/08/Tempest.png |
| `vikings.png` | https://polychampions.com/wp-content/uploads/2024/08/vikings-border.png |
| `wildfire.png` | https://polychampions.com/wp-content/uploads/2024/08/Wildfire_cir.png |
| `polytopia-promo.png` | https://polychampions.com/wp-content/uploads/2024/08/Battle-of-Polytopia-400.jpg.png |
| `novas.png` | https://polychampions.com/wp-content/uploads/2019/11/Novas.png |

After download, update each `houses/*.md` front-matter `logo:` field to the local path (e.g. `/houses/arctic-wolves.png`).

Use Astro's `<Image>` component for these (or `Picture` for art-directed cropping) — automatic optimization to WebP/AVIF.

---

## Content

**`/content/`** in this bundle is the canonical source — all copy comes from your WordPress export (`source/content-raw.json`, also included for reference).

- `content/pages/` — top-level pages (home, faq, history, etc.) as Markdown
- `content/houses/` — 10 current houses, each with structured front-matter + bio body
- `content/news/` — 10 news posts as Markdown

A few content notes worth flagging to the editor:

1. The home page still says **"15 league houses"** in one spot but the export shows **10**. Fix the live copy to "10 league houses" (or update if there are now 15 again — confirm with the league lead).
2. **Sparkies, Crawfish, Mallards, Cosmonauts, Bombers, Reapers** appear in History / Hall of Champions and have detail pages in the export but are NOT in the current 10 houses. Treat them as **historical** — keep their bios for the History page references but don't link them from Teams.
3. The Hall of Champions in the export only covers Seasons 1–8. The history page mentions Seasons 15–16 (Dragons top seed) and we're now on Season 21 — the editor needs to backfill Seasons 9–21 winners or remove the page until they do.
4. The home page's stat ("over 25 teams") is league-wide including sub-teams within houses (e.g. Lightning has Lightning + Thundercats + Electrons). Keep as-is.

---

## Files in this bundle

```
design_handoff_polychampions_facelift/
├── README.md                         ← you are here
├── DESIGN_SYSTEM.md                  ← detailed tokens, type, components, per-page layouts
├── PAGE_LAYOUTS.md                   ← per-page wireframes in prose
├── content/                          ← drop into src/content/ in your Astro project
│   ├── houses/                       ← 10 .md files with structured front-matter
│   ├── news/                         ← 10 .md posts
│   └── pages/                        ← home, faq, history, hall, join, league-rules, elo, strategy, teams
├── source/                           ← original design references (read-only)
│   ├── PolyChampions Rebuild.html    ← the interactive prototype
│   ├── direction-hex-home.jsx        ← Direction A Home page source
│   ├── direction-hex-pages.jsx       ← Direction A all other pages source
│   ├── direction-hex.jsx             ← root wiring
│   ├── shared-primitives.jsx         ← HouseLogo, HexBg, YouTubeEmbed helpers
│   ├── houses-data.jsx               ← static data used by the prototype
│   └── content-raw.json              ← raw WordPress export (all 99 items, full HTML bodies)
```

---

## Suggested first commit milestones

1. **Setup**: Astro + MDX + sitemap installed, fonts loaded, design tokens as CSS variables in `:root`
2. **Home page**: lands at exactly the layout in the prototype, real logos pulled in
3. **Teams + Team detail**: all 10 houses route correctly with their colors
4. **Join + FAQ**: simple-content pages with proper component reuse
5. **News index + News detail**: collection wired up, sort by date
6. **League Rules**: sticky sidebar, anchor scroll respects sticky header
7. **History + Hall of Champions**
8. **Footer + 404**: don't forget these
9. **Lighthouse pass**: a11y ≥ 95, performance ≥ 95 (Astro should give you this for free)
10. **Deploy**: Netlify, Vercel, or Cloudflare Pages — pick whichever matches the league's existing infra
