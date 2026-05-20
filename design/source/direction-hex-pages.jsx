// Direction A — HEX — remaining pages.
const { HEX: HX, hexFont: hF, monoFont: mF } = window.HEX_TOKENS;

// ─── TEAMS (all 10, full bios) ──────────────────────────────────────────────
function HexTeams({ setTeamId, setPage }) {
  return (
    <div style={{ padding: '56px 36px', background: HX.paper, minHeight: 800 }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ marginBottom: 32 }}>
          <div style={{ fontFamily: mF, fontSize: 12, color: HX.brand, letterSpacing: '0.15em', fontWeight: 600 }}>THE LEAGUE</div>
          <h1 style={{ fontFamily: hF, fontSize: 60, fontWeight: 800, color: HX.ink, margin: '6px 0 0', letterSpacing: '-0.03em' }}>The PolyChampions League has ten Houses, each hosting multiple teams.</h1>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {window.HOUSES.map((h, i) => (
            <button key={h.id} onClick={() => { setTeamId(h.id); setPage('team'); }} style={{
              display: 'grid', gridTemplateColumns: `${i % 2 ? '1fr 200px' : '200px 1fr'}`, gap: 28, alignItems: 'center',
              padding: '24px 28px', background: h.color, border: `2px solid ${HX.ink}`, borderRadius: 12,
              cursor: 'pointer', textAlign: 'left',
              transition: 'transform .15s, box-shadow .15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translate(-3px,-3px)'; e.currentTarget.style.boxShadow = `5px 5px 0 0 ${HX.ink}`; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}>
              {i % 2 === 0 && <window.HouseLogoBare house={h.id} size={160} />}
              <div style={{ order: i % 2 ? 0 : 1 }}>
                <h2 style={{ fontFamily: hF, fontSize: 38, fontWeight: 800, color: h.accent, margin: 0, letterSpacing: '-0.02em' }}>{h.name}</h2>
                {h.motto && <div style={{ fontFamily: hF, fontStyle: 'italic', fontSize: 14, color: h.accent, opacity: 0.7, marginTop: 2 }}>"{h.motto}"</div>}
                <p style={{ fontFamily: hF, fontSize: 15, color: h.accent, marginTop: 10, lineHeight: 1.55, opacity: 0.92, maxWidth: 720 }}>{h.bio}</p>
              </div>
              {i % 2 !== 0 && <window.HouseLogoBare house={h.id} size={160} />}
            </button>
          ))}
        </div>
        <div style={{ marginTop: 32, padding: 24, border: `2px solid ${HX.ink}`, borderRadius: 10, background: HX.paper2, textAlign: 'center' }}>
          <p style={{ fontFamily: hF, fontSize: 16, color: HX.ink, margin: 0 }}>Read the step-by-step instructions on <button onClick={() => setPage('join')} style={{ background: 'none', border: 'none', fontFamily: 'inherit', fontSize: 'inherit', color: HX.brand, fontWeight: 700, cursor: 'pointer', padding: 0, textDecoration: 'underline', textUnderlineOffset: 3 }}>how to get on a team</button>.</p>
        </div>
      </div>
    </div>
  );
}

// ─── TEAM DETAIL ────────────────────────────────────────────────────────────
function HexTeam({ teamId, setPage }) {
  const h = window.houseById(teamId) || window.HOUSES[0];
  return (
    <div>
      <section style={{ position: 'relative', background: h.color, padding: '56px 36px 44px', borderBottom: `2px solid ${HX.ink}`, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.25 }}><window.HexGridBg tiles={window.lowPolyHexes(h.id.charCodeAt(0), [h.color, h.accent, h.color], 80)} /></div>
        <div style={{ position: 'relative', maxWidth: 1180, margin: '0 auto', display: 'flex', gap: 32, alignItems: 'center' }}>
          <div style={{ border: `4px solid ${HX.ink}`, borderRadius: 16, padding: 14, background: HX.paper }}>
            <window.HouseLogoBare house={h.id} size={140} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: mF, fontSize: 11, color: h.accent, opacity: 0.7, letterSpacing: '0.15em', fontWeight: 600 }}>HOUSE</div>
            <h1 style={{ fontFamily: hF, fontSize: 88, fontWeight: 800, color: h.accent, margin: '2px 0 0', letterSpacing: '-0.04em', lineHeight: 0.95 }}>{h.name}</h1>
            {h.motto && <div style={{ fontFamily: hF, fontStyle: 'italic', fontSize: 22, color: h.accent, opacity: 0.8, marginTop: 8 }}>"{h.motto}"</div>}
          </div>
        </div>
      </section>
      <section style={{ padding: '48px 36px', background: HX.paper }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{ fontFamily: hF, fontSize: 20, color: HX.ink, lineHeight: 1.55, margin: 0 }}>{h.bio}</p>
          {h.historical && (
            <>
              <h2 style={{ fontFamily: hF, fontSize: 28, fontWeight: 800, color: HX.ink, margin: '36px 0 12px', letterSpacing: '-0.02em' }}>History</h2>
              <p style={{ fontFamily: hF, fontSize: 16, color: HX.ink2, lineHeight: 1.65, margin: 0 }}>{h.historical}</p>
            </>
          )}
          <div style={{ marginTop: 40, padding: 24, border: `2px solid ${HX.ink}`, borderRadius: 10, background: HX.paper2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 20 }}>
            <div>
              <div style={{ fontFamily: hF, fontWeight: 700, fontSize: 18, color: HX.ink }}>Want to join {h.name}?</div>
              <div style={{ fontFamily: hF, fontSize: 14, color: HX.ink2, marginTop: 2 }}>Pass probation as a Nova, then contact a recruiter in Discord.</div>
            </div>
            <window.HexButton primary onClick={() => setPage('join')}>How to join →</window.HexButton>
          </div>
          <div style={{ marginTop: 28 }}>
            <button onClick={() => setPage('teams')} style={{ background: 'none', border: 'none', fontFamily: hF, fontWeight: 600, fontSize: 14, color: HX.ink, cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: 4 }}>← Back to all teams</button>
          </div>
        </div>
      </section>
    </div>
  );
}

// ─── JOIN A TEAM (Novas) ────────────────────────────────────────────────────
function HexJoin({ setPage }) {
  return (
    <div style={{ background: HX.paper, minHeight: 800 }}>
      <section style={{ padding: '70px 36px 50px', background: HX.ink, color: HX.paper, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.18 }}><window.HexGridBg tiles={window.lowPolyHexes(99, [HX.brand, '#F5C842', '#5BB7E5'], 60)} /></div>
        <div style={{ position: 'relative', maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ fontFamily: mF, fontSize: 11, opacity: 0.65, letterSpacing: '0.15em', fontWeight: 600 }}>HOW TO JOIN</div>
          <h1 style={{ fontFamily: hF, fontSize: 80, fontWeight: 800, margin: '8px 0 0', letterSpacing: '-0.04em', lineHeight: 0.95 }}>The Novas:<br/>your first season.</h1>
          <p style={{ fontFamily: hF, fontSize: 19, opacity: 0.82, marginTop: 20, maxWidth: 700, lineHeight: 1.55 }}>The Novas are the rookie team where all new league players start. Register your Polytopia in-game name in the Discord server. To access multiplayer in the app, you must purchase at least one tribe. To graduate, complete at least one 2v2 game and start at least one more.</p>
        </div>
      </section>
      <section style={{ padding: '50px 36px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <h2 style={{ fontFamily: hF, fontSize: 30, fontWeight: 800, color: HX.ink, margin: '0 0 20px', letterSpacing: '-0.02em' }}>Step by step</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {window.NOVAS_STEPS.map(s => (
              <div key={s.n} style={{ display: 'grid', gridTemplateColumns: '60px 1fr', gap: 18, padding: '18px 22px', border: `2px solid ${HX.ink}`, borderRadius: 10, background: HX.paper2, alignItems: 'center' }}>
                <div style={{ fontFamily: hF, fontSize: 44, fontWeight: 800, color: HX.brand, lineHeight: 1, letterSpacing: '-0.05em' }}>0{s.n}</div>
                <div>
                  <div style={{ fontFamily: hF, fontWeight: 700, fontSize: 19, color: HX.ink, lineHeight: 1.3 }} dangerouslySetInnerHTML={{ __html: s.t.replace(/(\$\w+(?:\s\[[^\]]+\])?)/g, `<code style="background:${HX.ink};color:${HX.paper};padding:2px 6px;border-radius:3px;font-family:${mF};font-size:14px;">$1</code>`) }} />
                  <div style={{ fontFamily: hF, fontSize: 14, color: HX.ink2, marginTop: 4, lineHeight: 1.5 }}>{s.d}</div>
                </div>
              </div>
            ))}
          </div>
          <h2 style={{ fontFamily: hF, fontSize: 30, fontWeight: 800, color: HX.ink, margin: '40px 0 14px', letterSpacing: '-0.02em' }}>Bot tutorial</h2>
          <p style={{ fontFamily: hF, fontSize: 15, color: HX.ink2, marginBottom: 16 }}>How to use the PolyElo bot to register, join games, and log wins / losses.</p>
          <div style={{ border: `2px solid ${HX.ink}`, borderRadius: 10, overflow: 'hidden' }}>
            <window.YouTubeEmbed id={window.NOVAS_YT} />
          </div>
          <div style={{ marginTop: 32, padding: 28, background: HX.ink, color: HX.paper, borderRadius: 10, display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 24, alignItems: 'center' }}>
            <div>
              <div style={{ fontFamily: hF, fontSize: 24, fontWeight: 800, letterSpacing: '-0.02em' }}>Ready? Join the Discord.</div>
              <div style={{ fontFamily: hF, fontSize: 15, opacity: 0.75, marginTop: 4 }}>That's where all PolyChampions matches are organized.</div>
            </div>
            <window.HexButton href={window.DISCORD_URL} primary style={{ background: HX.discord, borderColor: HX.discord, padding: '14px 22px', fontSize: 15 }}>
              <window.DiscordIcon size={16} /> discord.gg/7AKFVrZfqb
            </window.HexButton>
          </div>
        </div>
      </section>
    </div>
  );
}

// ─── FAQ ────────────────────────────────────────────────────────────────────
function HexFAQ() {
  return (
    <div style={{ padding: '56px 36px', background: HX.paper, minHeight: 800 }}>
      <div style={{ maxWidth: 820, margin: '0 auto' }}>
        <div style={{ marginBottom: 28 }}>
          <div style={{ fontFamily: mF, fontSize: 11, color: HX.brand, letterSpacing: '0.15em', fontWeight: 600 }}>FREQUENTLY ASKED</div>
          <h1 style={{ fontFamily: hF, fontSize: 60, fontWeight: 800, color: HX.ink, margin: '6px 0 0', letterSpacing: '-0.03em' }}>Questions</h1>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {window.FAQS.map((f, i) => (
            <details key={i} style={{ border: `2px solid ${HX.ink}`, borderRadius: 10, background: HX.paper2 }} open={i === 0}>
              <summary style={{ padding: '18px 22px', fontFamily: hF, fontWeight: 700, fontSize: 18, color: HX.ink, cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
                {f.q}
                <span style={{ fontFamily: mF, fontSize: 22, color: HX.brand, flexShrink: 0 }}>+</span>
              </summary>
              <div style={{ padding: '0 22px 18px', fontFamily: hF, fontSize: 15, color: HX.ink2, lineHeight: 1.6 }}>{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── LEAGUE RULES (long doc treatment) ──────────────────────────────────────
function HexRules() {
  const sections = [
    { id: 'overview', t: 'Overview' },
    { id: 'seasons', t: 'Seasons & Divisions' },
    { id: 'matches', t: 'Match Format' },
    { id: 'tribe-bans', t: 'Tribe Bans & Map Settings' },
    { id: 'rosters', t: 'Rosters & Free Agency' },
    { id: 'fats', t: 'FATs & Auctions' },
    { id: 'trades', t: 'Trades' },
    { id: 'conduct', t: 'Code of Conduct' },
  ];
  return (
    <div style={{ padding: '56px 36px', background: HX.paper, minHeight: 800 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '220px 1fr', gap: 40 }}>
        <aside style={{ position: 'sticky', top: 90, alignSelf: 'flex-start' }}>
          <div style={{ fontFamily: mF, fontSize: 11, color: HX.ink2, letterSpacing: '0.15em', fontWeight: 600, marginBottom: 10 }}>CONTENTS</div>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {sections.map(s => (
              <a key={s.id} href={`#${s.id}`} style={{ fontFamily: hF, fontSize: 14, color: HX.ink, textDecoration: 'none', padding: '6px 10px', borderRadius: 4, borderLeft: `3px solid ${HX.line}`, fontWeight: 500 }}>{s.t}</a>
            ))}
          </nav>
        </aside>
        <article>
          <div style={{ fontFamily: mF, fontSize: 11, color: HX.brand, letterSpacing: '0.15em', fontWeight: 600 }}>OFFICIAL LEAGUE RULES</div>
          <h1 style={{ fontFamily: hF, fontSize: 56, fontWeight: 800, color: HX.ink, margin: '6px 0 0', letterSpacing: '-0.03em' }}>League Rules</h1>
          <p style={{ fontFamily: hF, fontSize: 16, color: HX.ink2, marginTop: 16, lineHeight: 1.55 }}>The complete rulebook governing seasons, divisions, match formats, tribe bans, roster mechanics, FAT auctions, and player conduct.</p>
          <div style={{ marginTop: 28, padding: 18, background: HX.paper2, border: `2px solid ${HX.ink}`, borderRadius: 8, display: 'flex', gap: 14, alignItems: 'center' }}>
            <div style={{ fontFamily: mF, fontSize: 11, color: HX.brand, letterSpacing: '0.1em', fontWeight: 700 }}>NOTE</div>
            <div style={{ fontFamily: hF, fontSize: 14, color: HX.ink2 }}>The full 33,000-word rulebook from the WordPress export is preserved here. This view shows section structure — the body copy renders below.</div>
          </div>
          {sections.map(s => (
            <section key={s.id} id={s.id} style={{ marginTop: 36, paddingTop: 24, borderTop: `1px solid ${HX.line}` }}>
              <h2 style={{ fontFamily: hF, fontSize: 30, fontWeight: 800, color: HX.ink, margin: 0, letterSpacing: '-0.02em' }}>{s.t}</h2>
              <p style={{ fontFamily: hF, fontSize: 16, color: HX.ink2, lineHeight: 1.7, marginTop: 12 }}>
                {{
                  overview: "PolyChampions is a competitive league for The Battle of Polytopia. Matches are organized through the official Discord server. The league focuses on competitive, team-based, organized gameplay and promotes sportsmanship, tolerance, and a positive attitude.",
                  seasons: "Seasons last three months. Teams play 12 games per season — one 2v2 and one 3v3 game vs every other team in their division. The top teams in each division are promoted; the bottom teams are relegated.",
                  matches: "All matches are assigned and wins logged in the Discord server. Teammates share screenshots of their game and coordinate moves to plan a joint strategy. 2v2 games are hosted on large maps; 3v3 games on huge maps.",
                  'tribe-bans': "Tribe pick restrictions vary by season. Map types include drylands, archipelago, lakes, and continents — Water World is banned. The hosting team chooses from the remaining map types.",
                  rosters: "There is no maximum number of players on a team. Each person usually plays 1-3 season games. Team leaders assign season games. Each team has their own way of deciding player rosters.",
                  fats: "Teams have a currency called Free Agent Tokens (FATs). The top teams get fewer; struggling teams get more so they can recruit better talent. Auctions occur every two weeks. Free Agents may indicate team preferences.",
                  trades: "Players may trade at any time, as long as the new team agrees to take them. Players who want to switch should reach out to the team leaders to arrange it. Player contracts do not expire.",
                  conduct: "Players who break league rules may be dropped from their team and re-enter Free Agency. Sportsmanship, tolerance, and a positive attitude are required at all times."
                }[s.id]}
              </p>
              <p style={{ fontFamily: hF, fontSize: 14, color: HX.ink3, fontStyle: 'italic', marginTop: 12 }}>Full rules text follows here from the WP export — abbreviated for the POC.</p>
            </section>
          ))}
        </article>
      </div>
    </div>
  );
}

// ─── NEWS INDEX ─────────────────────────────────────────────────────────────
function HexNews({ setPage, setArticleId }) {
  const featured = window.NEWS[0];
  const rest = window.NEWS.slice(1);
  return (
    <div style={{ padding: '56px 36px', background: HX.paper, minHeight: 800 }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ marginBottom: 32 }}>
          <div style={{ fontFamily: mF, fontSize: 11, color: HX.brand, letterSpacing: '0.15em', fontWeight: 600 }}>NEWS</div>
          <h1 style={{ fontFamily: hF, fontSize: 60, fontWeight: 800, color: HX.ink, margin: '6px 0 0', letterSpacing: '-0.03em' }}>The Field Report</h1>
        </div>
        <button onClick={() => { setArticleId(featured.slug); setPage('article'); }} style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 30, padding: 30, border: `2px solid ${HX.ink}`, borderRadius: 12, background: HX.paper2, cursor: 'pointer', textAlign: 'left', width: '100%', marginBottom: 28 }}>
          <div>
            <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
              {featured.tags.map(t => <span key={t} style={{ fontFamily: mF, fontSize: 10, background: HX.brand, color: HX.paper, padding: '3px 8px', borderRadius: 3, fontWeight: 700, letterSpacing: '0.05em' }}>{t.toUpperCase()}</span>)}
            </div>
            <h2 style={{ fontFamily: hF, fontSize: 34, fontWeight: 800, color: HX.ink, margin: 0, letterSpacing: '-0.02em', lineHeight: 1.1 }}>{featured.title}</h2>
            <p style={{ fontFamily: hF, fontSize: 16, color: HX.ink2, marginTop: 14, lineHeight: 1.55 }}>{featured.excerpt}</p>
            <div style={{ fontFamily: mF, fontSize: 12, color: HX.ink3, marginTop: 18 }}>{featured.date} · {featured.author}</div>
          </div>
          <div style={{ height: 240, background: `linear-gradient(135deg, ${HX.brand}, #F5C842)`, borderRadius: 10, position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, opacity: 0.6 }}><window.HexGridBg tiles={window.lowPolyHexes(101, [HX.brand, '#F5C842', '#5BB7E5'], 60)} /></div>
          </div>
        </button>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14 }}>
          {rest.map(n => (
            <button key={n.slug} onClick={() => { setArticleId(n.slug); setPage('article'); }} style={{ border: `2px solid ${HX.ink}`, borderRadius: 10, padding: 18, background: HX.paper2, cursor: 'pointer', textAlign: 'left' }}>
              <div style={{ display: 'flex', gap: 6, marginBottom: 10, flexWrap: 'wrap' }}>
                {n.tags.map(t => <span key={t} style={{ fontFamily: mF, fontSize: 9, background: HX.ink, color: HX.paper, padding: '2px 6px', borderRadius: 3, fontWeight: 700, letterSpacing: '0.05em' }}>{t.toUpperCase()}</span>)}
              </div>
              <h3 style={{ fontFamily: hF, fontWeight: 800, fontSize: 18, color: HX.ink, margin: 0, lineHeight: 1.25, letterSpacing: '-0.01em' }}>{n.title}</h3>
              <p style={{ fontFamily: hF, fontSize: 13, color: HX.ink2, marginTop: 10, lineHeight: 1.5 }}>{n.excerpt}</p>
              <div style={{ fontFamily: mF, fontSize: 11, color: HX.ink3, marginTop: 12 }}>{n.date}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── ARTICLE ────────────────────────────────────────────────────────────────
function HexArticle({ articleId, setPage }) {
  const a = window.NEWS.find(n => n.slug === articleId) || window.NEWS[0];
  return (
    <div style={{ padding: '56px 36px', background: HX.paper, minHeight: 800 }}>
      <article style={{ maxWidth: 720, margin: '0 auto' }}>
        <button onClick={() => setPage('news')} style={{ background: 'none', border: 'none', fontFamily: hF, fontWeight: 600, fontSize: 13, color: HX.ink2, cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: 3, marginBottom: 24, padding: 0 }}>← All news</button>
        <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
          {a.tags.map(t => <span key={t} style={{ fontFamily: mF, fontSize: 10, background: HX.brand, color: HX.paper, padding: '3px 8px', borderRadius: 3, fontWeight: 700, letterSpacing: '0.05em' }}>{t.toUpperCase()}</span>)}
        </div>
        <h1 style={{ fontFamily: hF, fontSize: 52, fontWeight: 800, color: HX.ink, margin: 0, letterSpacing: '-0.03em', lineHeight: 1.05 }}>{a.title}</h1>
        <div style={{ fontFamily: mF, fontSize: 12, color: HX.ink3, marginTop: 14, letterSpacing: '0.05em' }}>{a.date} · {a.author}</div>
        <hr style={{ border: 'none', borderTop: `2px solid ${HX.ink}`, margin: '28px 0' }} />
        <div style={{ fontFamily: hF, fontSize: 18, color: HX.ink, lineHeight: 1.7 }}>
          <p style={{ marginTop: 0 }}>{a.excerpt}</p>
          <p>Hey guys! Welcome to the first (public) update on how the season is going. Unfortunately we'll have to do it without the graphics this time as Vorce is catching up to life after being sick, but I'm sure you'll manage just fine with the old school discord screenshots, right? Let's get right into it!</p>
          <h2 style={{ fontFamily: hF, fontSize: 28, fontWeight: 800, color: HX.ink, margin: '32px 0 12px', letterSpacing: '-0.02em' }}>Bronze division</h2>
          <p>14 games have ended already in bronze, but because of the sheer size of this league this means a lot of teams have only had one or two games ending so far. Starting with the teams that haven't won a game yet, we have Narwhals and Phantoms at one loss so far (against Chameleons and Flames) — which is not enough to really say anything about the trajectory they're on for this season. Voyagers have made a rough debut though, starting off at 0-2 after losses to Bandits and Ravens.</p>
          <p>Moving on, we have two teams with a win already, but also two losses — making for not exactly an exciting start to the season so far for Huskies and Ravens. Huskies lost to Axolotls and Electrons and beat Flames, while Ravens took losses against Overcast and Chameleons.</p>
          <p style={{ fontStyle: 'italic', color: HX.ink2, padding: '20px 24px', background: HX.paper2, border: `2px solid ${HX.ink}`, borderRadius: 8, margin: '28px 0' }}>Continued from the WP export — full article body imports cleanly into Markdown for the Astro build.</p>
        </div>
      </article>
    </div>
  );
}

// ─── HISTORY ────────────────────────────────────────────────────────────────
function HexHistory() {
  return (
    <div style={{ padding: '56px 36px', background: HX.paper, minHeight: 800 }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div style={{ marginBottom: 36 }}>
          <div style={{ fontFamily: mF, fontSize: 11, color: HX.brand, letterSpacing: '0.15em', fontWeight: 600 }}>FOUNDED MAY 25, 2018</div>
          <h1 style={{ fontFamily: hF, fontSize: 60, fontWeight: 800, color: HX.ink, margin: '6px 0 0', letterSpacing: '-0.03em' }}>League History</h1>
          <p style={{ fontFamily: hF, fontSize: 17, color: HX.ink2, marginTop: 14, lineHeight: 1.55, maxWidth: 640 }}>From 4 color groups and 40 founding members, to 25+ teams across multiple skill levels in our 21st season.</p>
        </div>
        <div style={{ position: 'relative', paddingLeft: 32 }}>
          <div style={{ position: 'absolute', left: 8, top: 4, bottom: 4, width: 3, background: HX.ink }} />
          {window.HISTORY_BEATS.map((b, i) => (
            <div key={i} style={{ position: 'relative', marginBottom: 32 }}>
              <div style={{ position: 'absolute', left: -32, top: 4, width: 19, height: 19, background: HX.brand, border: `3px solid ${HX.ink}`, borderRadius: 99 }} />
              <div style={{ fontFamily: mF, fontSize: 12, color: HX.brand, letterSpacing: '0.05em', fontWeight: 600 }}>{b.date.toUpperCase()}</div>
              <h2 style={{ fontFamily: hF, fontSize: 26, fontWeight: 800, color: HX.ink, margin: '4px 0 8px', letterSpacing: '-0.02em' }}>{b.title}</h2>
              <p style={{ fontFamily: hF, fontSize: 15, color: HX.ink2, lineHeight: 1.65, margin: 0 }}>{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── HALL OF CHAMPIONS ──────────────────────────────────────────────────────
function HexHall() {
  return (
    <div style={{ padding: '56px 36px', background: HX.paper, minHeight: 800 }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <div style={{ marginBottom: 32 }}>
          <div style={{ fontFamily: mF, fontSize: 11, color: HX.brand, letterSpacing: '0.15em', fontWeight: 600 }}>SINCE SEASON 1</div>
          <h1 style={{ fontFamily: hF, fontSize: 60, fontWeight: 800, color: HX.ink, margin: '6px 0 0', letterSpacing: '-0.03em' }}>Hall of Champions</h1>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 14 }}>
          {window.HALL_OF_CHAMPIONS.map(c => {
            const winner = window.houseById(c.winner.toLowerCase()) || window.HOUSES.find(h => h.name === c.winner);
            return (
              <div key={c.season} style={{ display: 'grid', gridTemplateColumns: '90px 1fr 100px', gap: 18, alignItems: 'center', padding: 18, border: `2px solid ${HX.ink}`, borderRadius: 10, background: winner ? winner.color : HX.paper2 }}>
                <div>
                  <div style={{ fontFamily: mF, fontSize: 10, color: winner ? winner.accent : HX.ink2, opacity: 0.7, letterSpacing: '0.1em', fontWeight: 600 }}>SEASON</div>
                  <div style={{ fontFamily: hF, fontSize: 44, fontWeight: 800, color: winner ? winner.accent : HX.ink, lineHeight: 1, letterSpacing: '-0.04em' }}>{c.season}</div>
                </div>
                <div>
                  <div style={{ fontFamily: hF, fontWeight: 800, fontSize: 22, color: winner ? winner.accent : HX.ink, letterSpacing: '-0.01em' }}>{c.winner}</div>
                  <div style={{ fontFamily: hF, fontSize: 13, color: winner ? winner.accent : HX.ink2, opacity: 0.85, lineHeight: 1.4, marginTop: 3 }}>{c.detail}</div>
                </div>
                {winner && <window.HouseLogoBare house={winner.id} size={80} />}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { HexTeams, HexTeam, HexJoin, HexFAQ, HexRules, HexNews, HexArticle, HexHistory, HexHall });
