# polychampions.com

The marketing + reference site for [PolyChampions](https://polychampions.com), a competitive league for [The Battle of Polytopia](https://midjiwan.com/polytopia.html). Built with [Astro](https://astro.build), shipped as a static site. The league's operational hub is Discord — this site is the handbook.

## Run it locally

```sh
npm install
npm run dev
```

Dev server runs at `http://localhost:4321`.

## Commands

| Command           | Action                                         |
| :---------------- | :--------------------------------------------- |
| `npm install`     | Install dependencies                           |
| `npm run dev`     | Start local dev server                         |
| `npm run build`   | Build production site to `./dist/`             |
| `npm run preview` | Preview the production build locally           |

## Project layout

```
.
├── design/                 ← original design handoff (tokens, layouts, prototype, raw WP export)
├── public/houses/          ← house logos (PNG)
├── src/
│   ├── components/         ← Button, HouseCard, HexBg, SiteHeader, etc.
│   ├── content/            ← Markdown collections
│   │   ├── houses/         ← one .md per house, with color + accent in front-matter
│   │   ├── news/           ← news posts
│   │   └── pages/          ← top-level page copy (home, faq, history, rules, …)
│   ├── content.config.ts   ← collection schemas (glob loader)
│   ├── layouts/            ← BaseLayout, ArticleLayout
│   ├── pages/              ← routes (Astro file-based routing)
│   └── styles/tokens.css   ← design tokens as CSS variables
├── astro.config.mjs
└── package.json
```

## Editing content

Most updates are Markdown edits. No code changes needed.

- **Add a house** — drop `src/content/houses/<slug>.md` with `id`, `name`, `logo`, `color`, `accent`, optional `motto`. Drop the logo PNG into `public/houses/<slug>.png`. Add the slug to the `houseOrder` array in `src/pages/index.astro` and `src/pages/teams/index.astro`.
- **Update house bio** — edit the body of `src/content/houses/<slug>.md`.
- **Publish news** — drop `src/content/news/<slug>.md` with `title`, `date`, `author` in the front-matter. Sorted by `date` desc on `/news`.
- **Edit a top-level page** — edit `src/content/pages/<slug>.md` (home, faq, history, league-rules, …).

## Design system

The `design/` folder is the canonical reference for tokens, components, and per-page layouts. Three documents worth reading in order:

1. `design/README.md`
2. `design/DESIGN_SYSTEM.md`
3. `design/PAGE_LAYOUTS.md`

The HTML/JSX files under `design/source/` are interactive prototypes — read for intent, don't copy code from them. The actual implementation lives in `src/`.

## Signature details (don't drift)

- Background `#FFF8E7` (warm paper), foreground `#1A1626` (warm near-black). Never `#fff` / `#000`.
- 2px ink borders are the visual signature.
- Hover lift is **flat-offset**: `translate(-2,-2)` + `4px 4px 0 0 ink`. Never `0 4px 12px rgba(0,0,0,0.1)`.
- House colors are paired with a contrast accent in front-matter. Text on a house's color MUST use that house's accent — never fall back to `--ink` (it'll fail contrast on Lightning's yellow).
