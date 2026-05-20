# Design System — PolyChampions HEX

Detailed token spec, component anatomy, and visual rules. Pair with `PAGE_LAYOUTS.md` for per-page specs.

---

## 1. Tokens (CSS variables)

Drop these into `src/styles/tokens.css` and import once from your root layout.

```css
:root {
  /* Colors */
  --paper:     #FFF8E7;
  --paper-2:   #FFFDF4;
  --ink:       #1A1626;
  --ink-2:     #4A4458;
  --ink-3:     #7A7488;
  --line:      #E8DFC4;

  --brand:     #FF6B35;
  --brand-dk:  #D9421F;
  --discord:   #5865F2;
  --good:      #3DA859;
  --warn:      #E84A2D;

  /* Type */
  --font-sans:  'Space Grotesk', ui-sans-serif, system-ui, sans-serif;
  --font-mono:  'JetBrains Mono', ui-monospace, Menlo, monospace;

  /* Type scale */
  --text-display-1: 84px;
  --text-display-2: 60px;
  --text-h2:        44px;
  --text-h3:        30px;
  --text-h4:        22px;
  --text-body-l:    20px;
  --text-body:      16px;
  --text-meta:      13px;
  --text-mono-sm:   11px;
  --text-mono-xs:   10px;

  /* Borders */
  --border-strong: 2px solid var(--ink);
  --border-subtle: 1px solid var(--line);

  /* Radii */
  --radius-sm:  4px;
  --radius:     8px;
  --radius-lg:  12px;
  --radius-pill: 999px;

  /* Spacing helpers */
  --pad-card-sm: 16px;
  --pad-card:    20px;
  --pad-card-lg: 28px;
  --pad-section: 56px 36px;
  --pad-hero:    70px 36px;

  /* Containers */
  --container-narrow: 720px;
  --container:        900px;
  --container-wide:   1180px;

  /* Motion */
  --tap:    transform .12s, box-shadow .12s;
  --float:  transform .15s, box-shadow .15s;
}

@media (max-width: 768px) {
  :root {
    --text-display-1: 48px;
    --text-display-2: 38px;
    --text-h2:        30px;
    --text-h3:        24px;
    --pad-section:    40px 20px;
    --pad-hero:       48px 20px;
  }
}
```

---

## 2. Typography rules

- Display + headings: `font-family: var(--font-sans)` weight 700–800 with negative letter-spacing
- Body: `var(--font-sans)` weight 400 (use 500 for slightly emphasized UI labels)
- Eyebrows, metadata, code, dates: `var(--font-mono)` 500–600 uppercase tracked `letter-spacing: 0.15em`
- **Never** mix in additional fonts. Two families only.
- Pretty wrapping: add `text-wrap: pretty` to all `<p>` and `<h2>` (h1 with `text-wrap: balance`)

---

## 3. Component anatomy

### 3.1 `<SiteHeader>` — sticky top nav

```
┌──────────────────────────────────────────────────────────────────────┐
│  ▲ PolyChampions    Home  Teams  Join  FAQ  Rules  News  History     │
│  hex logo (34px)    nav buttons         Merch ↗   [Join Discord ⚆]   │
└──────────────────────────────────────────────────────────────────────┘
   2px ink border-bottom │ background: var(--paper) │ sticky top
```

- Logo: small SVG hex stack (3 concentric hexes: ink → brand → paper) at 34×34, plus wordmark in Space Grotesk 800/19px
- Nav buttons: padding `7px 12px`, radius 5, font weight 600/13px
  - active: `background: var(--ink)`, `color: var(--paper)`
  - hover (inactive): `background: var(--line)`
- Discord CTA: `background: var(--discord)`, `color: white`, radius 6, padding `9px 16px`, weight 700, with Discord icon (16px) at left
- Merch link: text-only with `↗` glyph, no border

### 3.2 `<SiteFooter>`

```
┌──────────────────────────────────────────────────────────────────────┐
│  ▲ PolyChampions    YouTube  Discord  Contact  Merch    © Season 21  │
└──────────────────────────────────────────────────────────────────────┘
   background: var(--ink) │ color: var(--paper) │ 36px padding
```

- Logo: hex (paper outer, brand inner) at 28×28 + wordmark 800/17
- Nav links: weight 500/13, `opacity: 0.8`, no underline
- Copyright: mono, opacity 0.5

### 3.3 `<Button>` — three variants

```
.btn {
  display: inline-flex; align-items: center; gap: 8px;
  border: var(--border-strong);
  padding: 12px 22px;
  border-radius: var(--radius);
  font: 700 14px var(--font-sans);
  letter-spacing: 0.01em;
  cursor: pointer;
  transition: var(--tap);
}
.btn:hover { transform: translate(-2px, -2px); box-shadow: 4px 4px 0 0 var(--ink); }

.btn-primary    { background: var(--ink); color: var(--paper); }
.btn-secondary  { background: transparent; color: var(--ink); }
.btn-discord    { background: var(--discord); border-color: var(--discord); color: #fff; }
```

The flat-offset shadow is **the signature interaction.** Don't replace it with `0 4px 12px rgba()`.

### 3.4 `<HouseLogo>`

A real PNG logo (transparent BG) wrapped in a colored hexagon frame.

```
size = 64 (default) | 48 | 100 | 140 | 180
frame = true (default) | false

When frame=true:
  - SVG hexagon background fill = house.color (or override via prop)
  - Logo image inset by ~18% (padding inside hex)
When frame=false:
  - Bare logo image, no background
```

Logo image gets `filter: drop-shadow(0 1px 2px rgba(0,0,0,0.25))` for legibility against the colored hex.

### 3.5 `<HouseCard>` — for the Teams grid on Home / Teams

```
┌──────────────────────────────┐
│                              │  ← background = house.color
│        [house logo 72]       │     border: 2px solid var(--ink)
│                              │     radius: 12px
│         House Name           │     padding: 16px
│         (color: accent)      │     text-align: center
│                              │
└──────────────────────────────┘
hover: lift translate(-3,-3) + 5px 5px 0 0 ink shadow
```

### 3.6 `<HouseBio>` — full bio row on Teams page

A horizontal card with logo on one side and copy on the other, alternating sides per row.

```
Even rows:  [LOGO 160] [Name 38px + motto italic + bio paragraph]
Odd rows:   [Name + bio][LOGO 160]

Wrapper: padding 24px 28px, border 2px ink, radius 12, background: house.color
Text color: house.accent (everything)
```

Same hover lift as `<HouseCard>`.

### 3.7 `<HouseBanner>` — top of House detail page

```
┌──────────────────────────────────────────────────────────────────────┐
│  ░░░░░░░ low-poly hex tiles (opacity 0.25, deterministic seed) ░░░░░ │
│                                                                      │
│   ┌─[ Logo 140 in a paper-bordered hex frame, 4px ink border ]      │
│   │                                                                  │
│   │     HOUSE                                                        │
│   │     [Name 88px 800]                                              │
│   │     "motto" 22px italic                                          │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
  background: house.color, all text: house.accent
  border-bottom: 2px solid var(--ink)
```

### 3.8 `<Eyebrow>`

```
font: 600 11px var(--font-mono);
letter-spacing: 0.15em;
color: var(--brand);    /* or var(--ink-2) inside dark hero on var(--ink) bg */
margin-bottom: 6px;
text-transform: uppercase;
```

Always uppercase. Always above an h1/h2 with 6–8px gap.

### 3.9 `<Stat>` block

```
[Big number 40px/800/ink, line-height: 1]
[MONO 11px LABEL, ink-2, 0.08em tracking, uppercase]

Container: padding 22px 26px, border-right 2px ink (in a strip)
```

Used 4-up in the home hero stat strip.

### 3.10 `<HexBg>` — decorative background

SVG with 60–90 hexagons placed deterministically from a numeric seed, opacity 0.25–0.45. Used in:

- Hero (large, paper colors)
- CTA section (dark, brand + tribe accent colors)
- House banner (the house's color + accent)
- News article hero placeholders

Generate with:

```js
function lowPolyHexes(seed, palette, count = 60) {
  let s = seed;
  const rand = () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
  const tiles = [];
  for (let i = 0; i < count; i++) {
    tiles.push([
      Math.floor(rand() * 28),       // col
      Math.floor(rand() * 18),       // row
      palette[Math.floor(rand() * palette.length)]
    ]);
  }
  return tiles;
}
```

Hex tile path (pointy-top, circumradius = size):

```js
function hexPath(size) {
  const pts = [];
  for (let i = 0; i < 6; i++) {
    const a = (Math.PI / 3) * i - Math.PI / 2;
    pts.push([size * Math.cos(a), size * Math.sin(a)]);
  }
  return 'M' + pts.map(p => p.join(',')).join('L') + 'Z';
}
```

Tile spacing: `w = size * √3`, `h = size * 1.5`. Offset every odd row by `w/2`.

### 3.11 `<TimelineItem>` — History page beats

```
                Date eyebrow (mono 12, brand)
○────────────   Beat title (26px h2)
│               Body paragraph 15/1.65/ink-2
│
○────────────   ...
│
```

- Vertical rail: 3px solid ink at left edge, full height of timeline
- Beat marker: 19×19 brand circle, 3px ink border, radius 99, sitting on the rail

### 3.12 `<Accordion>` — FAQ

Use **native `<details>`/`<summary>`**, no JS.

```
<details>
  <summary>
    {question}
    <span class="plus">+</span>   ← rotates to × when open via CSS
  </summary>
  <div class="body">{answer}</div>
</details>

Wrapper: border 2px ink, radius 10, background var(--paper-2), padding 18px 22px
Summary: weight 700/18px ink, flex space-between
Body: 15/1.6 ink-2, padding-top 0
Default ::marker hidden via summary::-webkit-details-marker { display: none }
```

### 3.13 `<NewsCard>`

```
┌────────────────────────────────────┐
│ [TAG 1] [TAG 2]                    │
│                                    │
│ Article Title (18/800/ink, 1.25)   │
│                                    │
│ Excerpt copy 13/1.5/ink-2          │
│                                    │
│ MAY 14, 2024                       │
└────────────────────────────────────┘
border: 2px ink | radius 10 | padding 18 | background paper-2

TAG pill: font-mono 9px, padding 2px 6px, radius 3, bg ink, color paper
```

### 3.14 `<RulesSidebar>` — sticky TOC

```
position: sticky; top: 90px;   /* clear the 70px-ish sticky header + breathing room */
Inside, items: padding 6px 10px, border-left 3px line (transparent → brand on hover/active)
```

Use `scroll-margin-top: 90px` on each rules section so anchor jumps don't bury headings under the sticky nav.

### 3.15 `<YouTubeEmbed>`

```jsx
<div style={{ position: 'relative', aspectRatio: '16/9', borderRadius: 8, overflow: 'hidden', border: '2px solid var(--ink)' }}>
  <iframe
    src={`https://www.youtube.com/embed/${id}`}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
    loading="lazy"
    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
  />
</div>
```

Featured video: `c6SqDIYaAcU`. Novas bot tutorial: `_KsDd0LT54M`.

---

## 4. Section rhythm

Every page section follows this pattern:

```
<section style="padding: 56–70px 36px; border-bottom: 2px solid var(--ink);">
  <div style="max-width: 1180px; margin: 0 auto;">
    <Eyebrow>SECTION CONTEXT</Eyebrow>
    <h2 class="h2">Section title</h2>
    ... content ...
  </div>
</section>
```

The 2px ink border between sections is intentional — it creates a strong horizontal rhythm. Don't drop it.

---

## 5. Accessibility

- Color contrast: every paper/ink combination passes WCAG AAA. House colors are paired with their own `accent` for guaranteed contrast.
- All buttons are `<button>` or `<a>`, not `<div onclick>`
- All icons have aria-labels or are decorative (`aria-hidden`)
- Focus states: `outline: 2px solid var(--brand); outline-offset: 3px;` — visible on dark and light backgrounds
- Skip-to-content link at top of `<body>` (visually hidden until focused)
- `<details>` summary is keyboard-operable by default
