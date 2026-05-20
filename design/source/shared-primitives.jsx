// Shared primitives: real house logo (with hex frame), hex helpers, YouTube embed.

const hexPath = (size = 40) => {
  const pts = [];
  for (let i = 0; i < 6; i++) {
    const a = (Math.PI / 3) * i - Math.PI / 2;
    pts.push([size * Math.cos(a), size * Math.sin(a)]);
  }
  return 'M' + pts.map(p => p.join(',')).join('L') + 'Z';
};

// Real house logo rendered in a colored hex frame. Logos load from polychampions.com directly.
function HouseLogo({ house, size = 64, frame = true, frameColor }) {
  const h = typeof house === 'string' ? window.houseById(house) : house;
  if (!h) return null;
  const padding = frame ? size * 0.18 : 0;
  const imgSize = size - padding * 2;
  return (
    <div style={{
      width: size, height: size, position: 'relative', display: 'inline-block', flexShrink: 0,
    }}>
      {frame && (
        <svg width={size} height={size} viewBox={`-${size/2} -${size/2} ${size} ${size}`} style={{ position: 'absolute', inset: 0 }}>
          <path d={hexPath(size * 0.48)} fill={frameColor || h.color} />
        </svg>
      )}
      <img
        src={h.logo}
        alt={h.name}
        loading="lazy"
        style={{
          position: 'absolute',
          top: padding, left: padding,
          width: imgSize, height: imgSize,
          objectFit: 'contain',
          filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.25))',
        }}
      />
    </div>
  );
}

// Naked image (no frame), used in hero contexts where the logo is the focal element
function HouseLogoBare({ house, size = 100 }) {
  const h = typeof house === 'string' ? window.houseById(house) : house;
  if (!h) return null;
  return (
    <img
      src={h.logo}
      alt={h.name}
      loading="lazy"
      style={{ width: size, height: size, objectFit: 'contain', display: 'block', flexShrink: 0 }}
    />
  );
}

function YouTubeEmbed({ id, aspect = '16/9' }) {
  return (
    <div style={{ position: 'relative', aspectRatio: aspect, background: '#000', borderRadius: 8, overflow: 'hidden' }}>
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      />
    </div>
  );
}

// Decorative hex tile pattern for hero backgrounds
function HexGridBg({ tiles = [], size = 36, opacity = 1 }) {
  const w = size * Math.sqrt(3);
  const h = size * 1.5;
  return (
    <svg width="100%" height="100%" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, opacity }}>
      {tiles.map(([col, row, color], i) => {
        const x = col * w + (row % 2 ? w / 2 : 0);
        const y = row * h;
        return <path key={i} d={hexPath(size * 0.97)} transform={`translate(${x},${y})`} fill={color} />;
      })}
    </svg>
  );
}

function lowPolyHexes(seed, palette, count = 28) {
  let s = seed;
  const rand = () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
  const out = [];
  for (let i = 0; i < count; i++) {
    out.push([Math.floor(rand() * 28), Math.floor(rand() * 18), palette[Math.floor(rand() * palette.length)]]);
  }
  return out;
}

const DiscordIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M19.27 5.33A18 18 0 0014.78 4l-.2.4a16.5 16.5 0 00-5.16 0L9.22 4a18 18 0 00-4.49 1.33C1.84 9.6 1.06 13.75 1.45 17.85a18 18 0 005.5 2.78l1.1-1.51a11 11 0 01-1.74-.84l.43-.34a13 13 0 0011.32 0l.43.34a11 11 0 01-1.74.84l1.1 1.51a18 18 0 005.5-2.78c.46-4.75-.74-8.87-3.08-12.52zM8.52 15.33c-1.1 0-2-1-2-2.22 0-1.22.88-2.22 2-2.22 1.13 0 2.04 1 2 2.22 0 1.22-.87 2.22-2 2.22zm6.96 0c-1.1 0-2-1-2-2.22 0-1.22.88-2.22 2-2.22 1.13 0 2.04 1 2 2.22 0 1.22-.87 2.22-2 2.22z"/></svg>
);

Object.assign(window, { hexPath, HouseLogo, HouseLogoBare, YouTubeEmbed, HexGridBg, lowPolyHexes, DiscordIcon });
