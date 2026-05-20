// Direction A — "HEX" (Polytopia-native).
// Light paper, vibrant tribe colors, hex grids, geometric sans.
// Real PolyChampions content from WP export.

const { useState, useMemo } = React;

const HEX = {
  paper:    '#FFF8E7',
  paper2:   '#FFFDF4',
  ink:      '#1A1626',
  ink2:     '#4A4458',
  ink3:     '#7A7488',
  line:     '#E8DFC4',
  brand:    '#FF6B35',
  brandDk:  '#D9421F',
  discord:  '#5865F2',
  good:     '#3DA859',
  warn:     '#E84A2D',
};

const hexFont = `'Space Grotesk', ui-sans-serif, system-ui, sans-serif`;
const monoFont = `'JetBrains Mono', ui-monospace, Menlo, monospace`;

const PAGES = [
  { id: 'home', label: 'Home' },
  { id: 'teams', label: 'Teams' },
  { id: 'team', label: 'Team' },
  { id: 'join', label: 'Join a Team' },
  { id: 'faq', label: 'FAQ' },
  { id: 'rules', label: 'League Rules' },
  { id: 'news', label: 'News' },
  { id: 'article', label: 'Article' },
  { id: 'history', label: 'History' },
  { id: 'hall', label: 'Hall of Champions' },
];

function Nav({ page, setPage }) {
  const visible = ['home', 'teams', 'join', 'faq', 'rules', 'news', 'history', 'hall'];
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 40, background: HEX.paper, borderBottom: `2px solid ${HEX.ink}` }}>
      <div style={{ display: 'flex', alignItems: 'center', padding: '14px 36px', gap: 28 }}>
        <button onClick={() => setPage('home')} style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
          <svg width="34" height="34" viewBox="-26 -26 52 52">
            <path d={window.hexPath(24)} fill={HEX.ink} />
            <path d={window.hexPath(16)} fill={HEX.brand} />
            <path d={window.hexPath(8)} fill={HEX.paper} />
          </svg>
          <span style={{ fontFamily: hexFont, fontWeight: 800, fontSize: 19, color: HEX.ink, letterSpacing: '-0.02em' }}>PolyChampions</span>
        </button>
        <nav style={{ display: 'flex', gap: 2, marginLeft: 4 }}>
          {PAGES.filter(p => visible.includes(p.id)).map(p => (
            <button key={p.id} onClick={() => setPage(p.id)} style={{
              background: page === p.id ? HEX.ink : 'transparent',
              color: page === p.id ? HEX.paper : HEX.ink,
              border: 'none', padding: '7px 12px', borderRadius: 5,
              fontFamily: hexFont, fontWeight: 600, fontSize: 13, cursor: 'pointer',
              transition: 'background .12s',
            }} onMouseEnter={e => { if (page !== p.id) e.currentTarget.style.background = HEX.line; }}
               onMouseLeave={e => { if (page !== p.id) e.currentTarget.style.background = 'transparent'; }}
            >{p.label}</button>
          ))}
        </nav>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 10 }}>
          <a href={window.MERCH_URL} target="_blank" rel="noopener" style={{ fontFamily: hexFont, fontWeight: 600, fontSize: 13, color: HEX.ink, textDecoration: 'none', padding: '7px 10px' }}>Merch ↗</a>
          <a href={window.DISCORD_URL} target="_blank" rel="noopener" style={{ background: HEX.discord, color: '#fff', border: 'none', borderRadius: 6, padding: '9px 16px', fontFamily: hexFont, fontWeight: 700, fontSize: 13, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
            <window.DiscordIcon size={15} /> Join Discord
          </a>
        </div>
      </div>
    </header>
  );
}

function HexButton({ children, primary, href, onClick, style }) {
  const baseStyle = {
    display: 'inline-flex', alignItems: 'center', gap: 8,
    background: primary ? HEX.ink : 'transparent',
    color: primary ? HEX.paper : HEX.ink,
    border: `2px solid ${HEX.ink}`,
    padding: '12px 22px', borderRadius: 8,
    fontFamily: hexFont, fontWeight: 700, fontSize: 14, cursor: 'pointer',
    letterSpacing: '0.01em', textDecoration: 'none',
    transition: 'transform .12s, box-shadow .12s',
    ...style,
  };
  const handlers = {
    onMouseEnter: e => { e.currentTarget.style.transform = 'translate(-2px,-2px)'; e.currentTarget.style.boxShadow = `4px 4px 0 0 ${HEX.ink}`; },
    onMouseLeave: e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; },
  };
  if (href) return <a href={href} target="_blank" rel="noopener" style={baseStyle} {...handlers}>{children}</a>;
  return <button onClick={onClick} style={baseStyle} {...handlers}>{children}</button>;
}

// ─── HOME ───────────────────────────────────────────────────────────────────
function HexHome({ setPage, setTeamId }) {
  const tiles = useMemo(() => window.lowPolyHexes(42, ['#FFE5B4', '#FFD0A1', '#F5C842', '#FF6B35', '#7DC242', '#5BB7E5'], 90), []);
  return (
    <div>
      <section style={{ position: 'relative', padding: '70px 36px 80px', overflow: 'hidden', background: HEX.paper, borderBottom: `2px solid ${HEX.ink}` }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.4 }}><window.HexGridBg tiles={tiles} /></div>
        <div style={{ position: 'relative', maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 50, alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: HEX.ink, color: HEX.paper, padding: '6px 14px', borderRadius: 99, fontFamily: monoFont, fontSize: 11, fontWeight: 600, marginBottom: 22, letterSpacing: '0.05em' }}>
              SEASON {window.SEASON.number} · 21ST EDITION
            </div>
            <h1 style={{ fontFamily: hexFont, fontSize: 84, fontWeight: 800, color: HEX.ink, letterSpacing: '-0.04em', lineHeight: 0.92, margin: 0 }}>
              The competitive league for <span style={{ background: HEX.brand, color: HEX.paper, padding: '0 12px', display: 'inline-block', transform: 'rotate(-1.5deg)' }}>The Battle</span> of Polytopia.
            </h1>
            <p style={{ fontFamily: hexFont, fontSize: 20, color: HEX.ink2, marginTop: 24, lineHeight: 1.45, maxWidth: 540 }}>
              Matches organized through Discord. Team-based, organized gameplay. We promote sportsmanship, tolerance, and a positive attitude — and training, tactics, and education in the world of Polytopia.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 30 }}>
              <HexButton primary onClick={() => setPage('join')}>Join the league →</HexButton>
              <HexButton onClick={() => setPage('teams')}>See the 10 houses</HexButton>
            </div>
          </div>
          {/* Stack of houses, real logos */}
          <div style={{ position: 'relative', height: 380 }}>
            {window.HOUSES.slice(0, 6).map((h, i) => {
              const angle = (i - 2.5) * 14;
              const x = (i - 2.5) * 36;
              const y = Math.abs(i - 2.5) * 8;
              return (
                <div key={h.id} style={{
                  position: 'absolute',
                  left: '50%', top: '50%',
                  transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${angle}deg)`,
                  border: `3px solid ${HEX.ink}`, borderRadius: 16,
                  background: h.color, padding: 12,
                  boxShadow: `${i * 2}px ${i * 2}px 0 0 ${HEX.ink}`,
                  zIndex: i,
                }}>
                  <window.HouseLogoBare house={h.id} size={84} />
                </div>
              );
            })}
          </div>
        </div>
        {/* Stat strip */}
        <div style={{ position: 'relative', maxWidth: 1180, margin: '60px auto 0', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', border: `2px solid ${HEX.ink}`, borderRadius: 10, background: HEX.paper2, overflow: 'hidden' }}>
          {[
            ['10', 'Houses'],
            [`${window.SEASON.teamCount}`, 'Teams across skill levels'],
            ['21', 'Seasons played'],
            ['May 2018', 'Founded'],
          ].map(([n, l], i) => (
            <div key={i} style={{ padding: '22px 26px', borderRight: i < 3 ? `2px solid ${HEX.ink}` : 'none' }}>
              <div style={{ fontFamily: hexFont, fontSize: 40, fontWeight: 800, color: HEX.ink, letterSpacing: '-0.03em', lineHeight: 1 }}>{n}</div>
              <div style={{ fontFamily: monoFont, fontSize: 11, color: HEX.ink2, marginTop: 6, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How the League Works */}
      <section style={{ padding: '60px 36px', background: HEX.paper2, borderBottom: `2px solid ${HEX.ink}` }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 50 }}>
          <div>
            <div style={{ fontFamily: monoFont, fontSize: 11, color: HEX.brand, letterSpacing: '0.15em', fontWeight: 600 }}>HOW THE LEAGUE WORKS</div>
            <h2 style={{ fontFamily: hexFont, fontSize: 44, fontWeight: 800, color: HEX.ink, margin: '8px 0 0', letterSpacing: '-0.03em', lineHeight: 1 }}>12 games. One season. Three months.</h2>
          </div>
          <div style={{ fontFamily: hexFont, fontSize: 17, color: HEX.ink2, lineHeight: 1.6 }}>
            <p style={{ margin: 0 }}>Teams play 12 games per season — one 2v2 and one 3v3 game vs every other team in their division. Teammates share screenshots of their game and coordinate moves to plan a joint strategy.</p>
            <p style={{ margin: '14px 0 0' }}>The top teams in each division are <strong style={{ color: HEX.good }}>promoted</strong> and the bottom teams are <strong style={{ color: HEX.warn }}>relegated</strong>. All matches are assigned and wins logged in our Discord server.</p>
            <div style={{ display: 'flex', gap: 24, marginTop: 28, paddingTop: 24, borderTop: `1px solid ${HEX.line}` }}>
              {[['2v2', 'Two on two'], ['3v3', 'Three on three'], ['12', 'Games / season'], ['3 mo', 'Season length']].map(([n, l]) => (
                <div key={l}>
                  <div style={{ fontFamily: hexFont, fontSize: 26, fontWeight: 800, color: HEX.ink }}>{n}</div>
                  <div style={{ fontFamily: monoFont, fontSize: 10, color: HEX.ink2, letterSpacing: '0.08em' }}>{l.toUpperCase()}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The 10 Houses */}
      <section style={{ padding: '60px 36px', background: HEX.paper, borderBottom: `2px solid ${HEX.ink}` }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 24 }}>
            <div>
              <div style={{ fontFamily: monoFont, fontSize: 11, color: HEX.brand, letterSpacing: '0.15em', fontWeight: 600 }}>THE LEAGUE</div>
              <h2 style={{ fontFamily: hexFont, fontSize: 44, fontWeight: 800, color: HEX.ink, margin: '4px 0 0', letterSpacing: '-0.03em' }}>Ten Houses</h2>
            </div>
            <button onClick={() => setPage('teams')} style={{ background: 'none', border: 'none', fontFamily: hexFont, fontWeight: 600, fontSize: 14, color: HEX.ink, cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: 4 }}>All teams →</button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12 }}>
            {window.HOUSES.map(h => (
              <button key={h.id} onClick={() => { setTeamId(h.id); setPage('team'); }} style={{
                border: `2px solid ${HEX.ink}`, borderRadius: 12, background: h.color, padding: 16,
                cursor: 'pointer', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
                transition: 'transform .15s, box-shadow .15s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translate(-3px,-3px)'; e.currentTarget.style.boxShadow = `5px 5px 0 0 ${HEX.ink}`; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}>
                <window.HouseLogoBare house={h.id} size={72} />
                <div style={{ fontFamily: hexFont, fontWeight: 800, fontSize: 17, color: h.accent, letterSpacing: '-0.01em' }}>{h.name}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube */}
      <section style={{ padding: '60px 36px', background: HEX.paper2, borderBottom: `2px solid ${HEX.ink}` }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 40, alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: monoFont, fontSize: 11, color: HEX.brand, letterSpacing: '0.15em', fontWeight: 600 }}>YOUTUBE</div>
            <h2 style={{ fontFamily: hexFont, fontSize: 40, fontWeight: 800, color: HEX.ink, margin: '6px 0 0', letterSpacing: '-0.03em', lineHeight: 1 }}>Strategy guides, game reviews, and other fun videos.</h2>
            <p style={{ fontFamily: hexFont, fontSize: 16, color: HEX.ink2, marginTop: 16, lineHeight: 1.55 }}>PolyChampions regularly posts strategy guides, game reviews, and other fun videos about Polytopia.</p>
            <a href={window.YOUTUBE_URL} target="_blank" rel="noopener" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 20, fontFamily: hexFont, fontWeight: 700, fontSize: 14, color: HEX.brand, textDecoration: 'none' }}>Subscribe on YouTube ↗</a>
          </div>
          <div style={{ border: `2px solid ${HEX.ink}`, borderRadius: 10, overflow: 'hidden' }}>
            <window.YouTubeEmbed id={window.FEATURED_YT} />
          </div>
        </div>
      </section>

      {/* History snippet */}
      <section style={{ padding: '70px 36px', background: HEX.ink, color: HEX.paper, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.12 }}><window.HexGridBg tiles={window.lowPolyHexes(7, [HEX.brand, '#F5C842', '#5BB7E5', '#7DC242'], 60)} /></div>
        <div style={{ position: 'relative', maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 50, alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: monoFont, fontSize: 11, color: HEX.brand, letterSpacing: '0.15em', fontWeight: 600 }}>SINCE 2018</div>
            <h2 style={{ fontFamily: hexFont, fontSize: 56, fontWeight: 800, margin: '8px 0 0', letterSpacing: '-0.03em', lineHeight: 1 }}>From 4 colors to 25+ teams.</h2>
            <p style={{ fontFamily: hexFont, fontSize: 18, opacity: 0.8, marginTop: 18, lineHeight: 1.5, maxWidth: 560 }}>First founded in May 2018 with players placed into 4 color groups. Today we have over 25 teams across skill levels, each with 5-20 members. Currently in our 21st season — and actively recruiting.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <HexButton primary onClick={() => setPage('history')} style={{ background: HEX.brand, borderColor: HEX.brand, padding: '16px 22px' }}>Read the league history →</HexButton>
            <HexButton onClick={() => setPage('hall')} style={{ borderColor: HEX.paper, color: HEX.paper, padding: '16px 22px' }}>Hall of Champions</HexButton>
          </div>
        </div>
      </section>
    </div>
  );
}

window.HEX_TOKENS = { HEX, hexFont, monoFont, PAGES };
window.HexNav = Nav;
window.HexButton = HexButton;
window.HexHome = HexHome;
