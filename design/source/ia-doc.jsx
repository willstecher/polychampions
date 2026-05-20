// Information Architecture documentation artboard — updated to match the real
// PolyChampions site (current nav + 21 seasons of content).

function IADoc() {
  const ink = '#1A1626';
  const ink2 = '#4A4458';
  const line = '#E8DFC4';
  const paper = '#FFF8E7';
  const paper2 = '#FFFDF4';
  const accent = '#FF6B35';
  const sans = `'Space Grotesk', ui-sans-serif, system-ui, sans-serif`;
  const mono = `ui-monospace, 'JetBrains Mono', Menlo, monospace`;

  const TREE = [
    { label: 'Home', children: [], note: 'Welcome / mission · How the League Works · 10 Houses overview · Featured YouTube · Founding snippet → History' },
    { label: 'Teams', children: [
      { label: 'House detail (×10)', note: 'Arctic Wolves · Dragons · Jets · Kraken · Lightning · Plague · Ronin · Tempest · Vikings · Wildfire' },
    ], note: 'All 10 Houses with bios, logos, mottos, and historical context where present' },
    { label: 'Join a Team', children: [], note: 'Novas explainer · 6-step bot walkthrough · embedded tutorial video · Discord CTA' },
    { label: 'FAQ', children: [], note: 'Auctions, FATs, trades, contracts, roster caps, seasons, what happens if you\'re not picked' },
    { label: 'League Rules', children: [], note: 'Full 33k-word rulebook from the WP export — sectioned, sticky-nav for long-form reading' },
    { label: 'News', children: [
      { label: 'Article detail', note: 'Single-post template — recaps, strategy guides, livestream announcements, awards' },
    ], note: '10 posts in the export (2019 → 2024). Tagged: Recap, Strategy, Livestream, Awards, Tools, Roster moves' },
    { label: 'History', children: [], note: 'Timeline from May 25, 2018 (TopiaRoyale founding) to Season 21 today' },
    { label: 'Hall of Champions', children: [], note: 'Season-by-season winners with house badge, score line, defeated finalist' },
    { label: 'Merch', children: [], note: 'External link to PolyChampions Fourthwall shop' },
  ];

  const Node = ({ node, depth = 0 }) => (
    <div style={{ marginLeft: depth * 22 }}>
      <div style={{ display: 'flex', gap: 14, padding: '10px 0', borderBottom: `1px solid ${line}` }}>
        <div style={{ width: 14, marginTop: 6, flexShrink: 0 }}>
          <div style={{ width: 8, height: 8, background: depth === 0 ? accent : ink2, borderRadius: 2 }} />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: sans, fontWeight: depth === 0 ? 700 : 600, fontSize: depth === 0 ? 17 : 14, color: ink, letterSpacing: '-0.01em' }}>{node.label}</div>
          {node.note && <div style={{ fontFamily: sans, fontSize: 12, color: ink2, marginTop: 3, lineHeight: 1.5, maxWidth: 600 }}>{node.note}</div>}
        </div>
      </div>
      {node.children?.map((c, i) => <Node key={i} node={c} depth={depth + 1} />)}
    </div>
  );

  return (
    <div style={{ padding: '36px 40px', background: paper, fontFamily: sans, color: ink }}>
      <div style={{ fontFamily: mono, fontSize: 11, color: ink2, letterSpacing: '0.15em' }}>INFORMATION ARCHITECTURE · PORT FROM WORDPRESS</div>
      <h1 style={{ fontFamily: sans, fontSize: 42, fontWeight: 800, color: ink, margin: '6px 0 4px', letterSpacing: '-0.03em' }}>PolyChampions.com sitemap</h1>
      <p style={{ fontFamily: sans, fontSize: 14, color: ink2, marginTop: 4, maxWidth: 760, lineHeight: 1.5 }}>
        Structure mirrors the live site nav (Home · Teams · Join a Team · FAQ · League Rules · News · Merch), with <em>History</em> and <em>Hall of Champions</em> elevated from sub-routes so they stand on their own. All copy below is from your WordPress export 2026-05-20, not placeholder text.
      </p>
      <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
        <div>
          <div style={{ fontFamily: mono, fontSize: 11, color: ink2, letterSpacing: '0.15em', marginBottom: 8 }}>SITE TREE</div>
          {TREE.map((n, i) => <Node key={i} node={n} />)}
        </div>
        <div>
          <div style={{ fontFamily: mono, fontSize: 11, color: ink2, letterSpacing: '0.15em', marginBottom: 8 }}>FACELIFT BRIEF</div>
          <div style={{ border: `2px solid ${ink}`, borderRadius: 8, background: paper2, padding: 18 }}>
            <h3 style={{ fontFamily: sans, fontWeight: 700, fontSize: 15, color: ink, margin: 0 }}>What changes</h3>
            <ul style={{ fontFamily: sans, fontSize: 13, color: ink2, margin: '6px 0 0', paddingLeft: 18, lineHeight: 1.55 }}>
              <li><b style={{ color: ink }}>Visual identity</b> — drop the default WordPress theme; commit to a system (type pairing, color discipline, deliberate hierarchy)</li>
              <li><b style={{ color: ink }}>House identity</b> — surface the 10 houses everywhere, with their logos and colors driving the visual rhythm</li>
              <li><b style={{ color: ink }}>Reading experience</b> — proper editorial layout for News & League Rules, not blog-default</li>
              <li><b style={{ color: ink }}>Static / Markdown-first</b> — content collections in Astro, non-devs edit Markdown files</li>
            </ul>
            <h3 style={{ fontFamily: sans, fontWeight: 700, fontSize: 15, color: ink, margin: '16px 0 6px' }}>What doesn't change (v1)</h3>
            <ul style={{ fontFamily: sans, fontSize: 13, color: ink2, margin: 0, paddingLeft: 18, lineHeight: 1.55 }}>
              <li>Discord is still the league's operational hub — site doesn't try to replace it</li>
              <li>No live data — no leaderboards, standings, or fixtures (those live on Discord)</li>
              <li>Existing copy is ported as-is; we can iterate after launch</li>
            </ul>
            <h3 style={{ fontFamily: sans, fontWeight: 700, fontSize: 15, color: ink, margin: '16px 0 6px' }}>Two visual directions to choose between</h3>
            <div style={{ fontFamily: sans, fontSize: 13, color: ink2, lineHeight: 1.55 }}>
              <p style={{ margin: '0 0 6px' }}><b style={{ color: ink }}>A · "HEX"</b> — Polytopia-native. Hex grids, low-poly tiles, vibrant tribe colors, geometric sans. Energetic, of-the-game.</p>
              <p style={{ margin: 0 }}><b style={{ color: ink }}>B · "ATLAS"</b> — Editorial broadcast. Dark mode, ceremonial gold, Newsreader serif, restrained Polytopia accents. Treats the league as a federation.</p>
            </div>
          </div>
          <div style={{ marginTop: 12, padding: 14, background: ink, color: paper, borderRadius: 8, fontFamily: mono, fontSize: 12, lineHeight: 1.55 }}>
            <span style={{ color: accent, letterSpacing: '0.08em' }}>CONTENT SOURCE</span> — All copy, house bios, FAQs, novas steps, history beats, and hall-of-champions records come straight from your WordPress export (polychampions.WordPress.2026-05-20.xml). House logos are loaded from polychampions.com/wp-content/uploads/ — we'll bundle locally for the Astro build.
          </div>
        </div>
      </div>
    </div>
  );
}

window.IADoc = IADoc;
