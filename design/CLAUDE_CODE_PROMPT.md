# Claude Code starter prompt

Paste this into Claude Code in an empty repo. It assumes Claude Code can read the files in this handoff folder you've placed alongside the prompt.

---

## Prompt

I'm rebuilding **polychampions.com** as a static Astro site, replacing the current WordPress install. The full design + content handoff lives in `./design_handoff_polychampions_facelift/`. Read these three files first, in order:

1. `design_handoff_polychampions_facelift/README.md` — project overview, stack, sitemap, asset list
2. `design_handoff_polychampions_facelift/DESIGN_SYSTEM.md` — exact tokens (colors, type, spacing), component anatomy, accessibility rules
3. `design_handoff_polychampions_facelift/PAGE_LAYOUTS.md` — per-page layout specs

The visual prototype is `design_handoff_polychampions_facelift/source/PolyChampions Rebuild.html`. Open it in a browser and walk through the prototype if anything in the docs is ambiguous — it's the source of truth for layout and interaction. (It's HTML+JSX in script tags for portability; **do not** copy that code into Astro components — recreate it cleanly using Astro idioms.)

The content lives under `design_handoff_polychampions_facelift/content/`:

- `pages/*.md` — top-level pages
- `houses/*.md` — 10 house bios with structured front-matter (id, name, logo, color, accent, motto)
- `news/*.md` — 10 news posts

These drop straight into `src/content/` once the Astro project is set up.

### What to build

A production-ready Astro 4.x static site:

- **Astro + MDX + sitemap** integrations
- **Content collections** for `houses`, `news`, `pages` per the schema in README §"Tech stack"
- **Routes**: see README §"Sitemap" — eleven routes including dynamic `[slug]` pages for houses and news
- **Design tokens** as CSS variables in `src/styles/tokens.css` (see DESIGN_SYSTEM.md §1)
- **Components** per DESIGN_SYSTEM.md §3 — build the lot, with proper Astro component composition
- **Per-page layouts** per PAGE_LAYOUTS.md — match the prototype precisely
- **Real house logos** downloaded into `public/houses/` from the URLs listed in README §"Assets", then referenced via Astro `<Image>` for optimization
- **Mobile-responsive** per README §"Responsive behavior" — break at 768 and 1280
- **Lighthouse 95+** on a11y and performance — Astro should give you this for free, but check
- **No client-side JS** unless strictly needed (FAQ uses native `<details>`, nav is static `<a>` links)

### Approach

Suggested order:

1. Run `npm create astro@latest` with the minimal template, add MDX + sitemap
2. Set up content collections + types
3. Build the design tokens CSS file + load Google Fonts (Space Grotesk + JetBrains Mono)
4. Build shared components: `SiteHeader`, `SiteFooter`, `Button`, `HouseLogo`, `Eyebrow`, `HexBg`
5. Build the home page — this validates the design system end-to-end
6. Build remaining pages, reusing components
7. Download house logos to `public/houses/`, update front-matter to local paths
8. Run a Lighthouse pass; fix anything < 95
9. Deploy to Cloudflare Pages, Vercel, or Netlify

### Important constraints

- Match colors and type exactly — `#FFF8E7` paper, `#1A1626` ink, Space Grotesk + JetBrains Mono
- Don't use a UI library (Tailwind is fine; shadcn/ui or similar is overkill for a 10-page static site)
- The flat-offset hover shadow (`translate(-2,-2)` + `4px 4px 0 0 ink`) is the signature interaction — preserve it on all interactive elements
- 2px ink borders are intentional — they're the visual signature too
- Houses use their own color + accent pair — text on a house's color background MUST use the house's accent (don't fall back to the main `--ink` token, you'll get contrast failures on yellow Lightning)
- No live data — no leaderboards, standings, or fixtures (Discord is the operational hub)

### Caveats from the editor

These are noted in README §"Content" — flag for the league lead before launch:

1. The home page in the export says "15 league houses" but only 10 are listed — confirm count
2. Hall of Champions data only covers Seasons 1–8; we're now on Season 21 — backfill or hide the page
3. Several historical houses (Sparkies, Crawfish, Mallards, Cosmonauts, Bombers) appear in History but aren't in current 10 — treat them as historical references only

When you've finished, give me a one-screen preview of `/` and `/teams/` so I can spot-check the design fidelity before we deploy.
