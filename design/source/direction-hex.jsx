// Direction A — HEX root component. Wires nav + pages.

function HexPrototype() {
  const [page, setPage] = React.useState('home');
  const [teamId, setTeamId] = React.useState('lightning');
  const [articleId, setArticleId] = React.useState(window.NEWS[0].slug);
  const props = { page, setPage, teamId, setTeamId, articleId, setArticleId };
  const T = window.HEX_TOKENS;
  return (
    <div style={{ fontFamily: T.hexFont, background: T.HEX.paper, color: T.HEX.ink, width: '100%' }}>
      <window.HexNav page={page} setPage={setPage} />
      {page === 'home'    && <window.HexHome {...props} />}
      {page === 'teams'   && <window.HexTeams {...props} />}
      {page === 'team'    && <window.HexTeam {...props} />}
      {page === 'join'    && <window.HexJoin {...props} />}
      {page === 'faq'     && <window.HexFAQ {...props} />}
      {page === 'rules'   && <window.HexRules {...props} />}
      {page === 'news'    && <window.HexNews {...props} />}
      {page === 'article' && <window.HexArticle {...props} />}
      {page === 'history' && <window.HexHistory {...props} />}
      {page === 'hall'    && <window.HexHall {...props} />}

      <footer style={{ padding: '36px', background: T.HEX.ink, color: T.HEX.paper }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <svg width="28" height="28" viewBox="-26 -26 52 52">
              <path d={window.hexPath(24)} fill={T.HEX.paper} />
              <path d={window.hexPath(14)} fill={T.HEX.brand} />
            </svg>
            <div style={{ fontFamily: T.hexFont, fontWeight: 800, fontSize: 17 }}>PolyChampions</div>
          </div>
          <nav style={{ display: 'flex', gap: 18, fontFamily: T.hexFont, fontSize: 13 }}>
            <a href={window.YOUTUBE_URL} target="_blank" rel="noopener" style={{ color: T.HEX.paper, textDecoration: 'none', opacity: 0.8 }}>YouTube</a>
            <a href={window.DISCORD_URL} target="_blank" rel="noopener" style={{ color: T.HEX.paper, textDecoration: 'none', opacity: 0.8 }}>Discord</a>
            <a href="mailto:polychampions@gmail.com" style={{ color: T.HEX.paper, textDecoration: 'none', opacity: 0.8 }}>Contact</a>
            <a href={window.MERCH_URL} target="_blank" rel="noopener" style={{ color: T.HEX.paper, textDecoration: 'none', opacity: 0.8 }}>Merch</a>
          </nav>
          <div style={{ fontFamily: T.monoFont, fontSize: 11, opacity: 0.5 }}>© PolyChampions · Season 21</div>
        </div>
      </footer>
    </div>
  );
}

window.HexPrototype = HexPrototype;
