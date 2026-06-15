// AppGameComponents.jsx — dark-theme BonsaiTree, HabitCard, StreakBadge
// BonsaiTree uses glow/opacity layers matching the real Whimsical Intuition App

function BonsaiTree({ branches, level, size = 1, showLabels = false, style }) {
  const b = level !== undefined
    ? { self: level, purpose: level, character: level, relationships: level }
    : { self: 3, purpose: 3, character: 3, relationships: 3, ...(branches || {}) };
  const clamp = v => Math.min(Math.max(Math.round(v ?? 0), 0), 5);
  const lvl = { self: clamp(b.self), purpose: clamp(b.purpose), character: clamp(b.character), relationships: clamp(b.relationships) };

  const w = 160 * size, h = 180 * size;

  const sage = "#34d399", violet = "#a78bfa", blue = "#60a5fa", plum = "#c084fc", mint = "#6ee7b7";
  const trunk = "#7c5cbf", pot = "#2d2550", potRim = "#3d3270";
  const tr = "opacity 700ms ease";

  // Glow cluster helper — renders concentric circles from outer glow to inner solid
  const G = (cx, cy, color, show, rList, oList) =>
    rList.map((r, i) =>
      React.createElement('circle', { key: r, cx, cy, r, fill: color, opacity: show ? oList[i] : 0, style: { transition: tr } })
    );

  return (
    <svg width={w} height={h} viewBox="0 0 160 180" fill="none" xmlns="http://www.w3.org/2000/svg" style={style}>
      {/* Pot */}
      <rect x="52" y="152" width="56" height="22" rx="5" fill={pot} />
      <rect x="44" y="146" width="72" height="10" rx="4" fill={potRim} />
      <ellipse cx="80" cy="146" rx="30" ry="4" fill="rgba(52,211,153,0.06)" />

      {/* Trunk */}
      <path d="M80 146 Q77 118 74 96 Q71 78 76 60" stroke={trunk} strokeWidth="6.5" strokeLinecap="round" />

      {/* Relationships branch (level 1+) */}
      {lvl.relationships >= 1 && <path d="M75 130 Q58 122 44 116" stroke={trunk} strokeWidth="3.5" strokeLinecap="round" />}
      {lvl.relationships >= 1 && <path d="M76 124 Q92 116 108 112" stroke={trunk} strokeWidth="3.5" strokeLinecap="round" />}

      {/* Self branch (level 2+) */}
      {lvl.self >= 1 && <path d="M75 105 Q60 92 46 76" stroke={trunk} strokeWidth="4" strokeLinecap="round" />}

      {/* Character branch (level 3+) */}
      {lvl.character >= 1 && <path d="M75 88 Q90 76 100 60" stroke={trunk} strokeWidth="3.5" strokeLinecap="round" />}

      {/* Far left (relationships level 4+) */}
      {lvl.relationships >= 3 && <path d="M55 84 Q44 74 38 62" stroke={trunk} strokeWidth="2.5" strokeLinecap="round" />}

      {/* Upper right (purpose level 4+) */}
      {lvl.purpose >= 3 && <path d="M77 72 Q88 60 94 48" stroke={trunk} strokeWidth="2.5" strokeLinecap="round" />}

      {/* RELATIONSHIPS — plum/indigo, lower wide clusters */}
      {G(44, 114, plum, lvl.relationships >= 1, [20, 14, 9, 5.5], [0.08, 0.18, 0.48, 0.82])}
      {lvl.relationships >= 2 && G(108, 110, plum, true, [17, 12, 8, 5], [0.08, 0.18, 0.48, 0.82])}
      {lvl.relationships >= 3 && G(36, 56, plum, true, [13, 9, 5.5], [0.2, 0.5, 0.85])}

      {/* SELF — violet, left mid cluster */}
      {G(44, 68, violet, lvl.self >= 1, [20, 15, 10, 6], [0.10, 0.22, 0.55, 0.88])}
      {lvl.self >= 2 && G(36, 54, violet, true, [12, 8, 5], [0.15, 0.38, 0.72])}
      {lvl.self >= 4 && G(50, 42, violet, true, [8, 5, 3], [0.18, 0.42, 0.78])}

      {/* CHARACTER — blue, right mid cluster */}
      {G(102, 54, blue, lvl.character >= 1, [18, 13, 9, 5.5], [0.10, 0.22, 0.55, 0.88])}
      {lvl.character >= 2 && G(112, 44, blue, true, [13, 9, 5.5], [0.12, 0.28, 0.65])}
      {lvl.character >= 4 && G(98, 62, blue, true, [7, 5], [0.25, 0.55])}

      {/* PURPOSE — sage/green, apex main foliage */}
      {G(78, 42, sage, lvl.purpose >= 1, [32, 26, 20, 14, 9], [0.08, 0.14, 0.28, 0.65, 0.90])}
      {lvl.purpose >= 2 && G(66, 30, mint, true, [10, 7], [0.45, 0.45])}
      {lvl.purpose >= 2 && G(90, 32, mint, true, [9, 6], [0.45, 0.45])}
      {lvl.purpose >= 4 && <>
        {G(96, 40, sage, true, [12, 8], [0.30, 0.65])}
        {G(58, 26, sage, true, [9], [0.55])}
      </>}

      {/* Level 5 — sparkle dots */}
      {lvl.purpose >= 5 && <>
        <circle cx="60" cy="36" r="2" fill="#fff" opacity="0.5" />
        <circle cx="86" cy="34" r="1.5" fill="#fff" opacity="0.4" />
        <circle cx="44" cy="60" r="1.5" fill="#fff" opacity="0.4" />
      </>}

      {/* Optional branch labels */}
      {showLabels && <>
        <text x="40" y="82" fill={violet} fontSize="7" fontWeight="600" textAnchor="end" fontFamily="DM Sans,sans-serif">Self</text>
        <text x="112" y="58" fill={blue} fontSize="7" fontWeight="600" textAnchor="start" fontFamily="DM Sans,sans-serif">Character</text>
        <text x="80" y="14" fill={sage} fontSize="7" fontWeight="600" textAnchor="middle" fontFamily="DM Sans,sans-serif">Purpose</text>
        <text x="80" y="140" fill={plum} fontSize="7" fontWeight="600" textAnchor="middle" fontFamily="DM Sans,sans-serif">Relationships</text>
      </>}
    </svg>
  );
}

function HabitCard({ name, icon, color = 'violet', streak = 0, completed = false, progress, progressMax = 100, onToggle, size = 'md', style }) {
  const colorMap = {
    violet: { bg: 'rgba(167,139,250,0.1)', text: '#a78bfa', iconBg: 'rgba(167,139,250,0.15)', ring: '#a78bfa' },
    green:  { bg: 'rgba(52,211,153,0.08)', text: '#34d399', iconBg: 'rgba(52,211,153,0.12)', ring: '#34d399' },
    blue:   { bg: 'rgba(96,165,250,0.08)', text: '#60a5fa', iconBg: 'rgba(96,165,250,0.12)', ring: '#60a5fa' },
    plum:   { bg: 'rgba(192,132,252,0.08)', text: '#c084fc', iconBg: 'rgba(192,132,252,0.12)', ring: '#c084fc' },
    sage:   { bg: 'rgba(52,211,153,0.08)', text: '#34d399', iconBg: 'rgba(52,211,153,0.12)', ring: '#34d399' },
    gold:   { bg: 'rgba(251,191,36,0.08)',  text: '#fbbf24', iconBg: 'rgba(251,191,36,0.12)',  ring: '#fbbf24' },
    earth:  { bg: 'rgba(167,139,250,0.06)', text: '#7e72a8', iconBg: 'rgba(167,139,250,0.1)',  ring: '#7e72a8' },
    lavender: { bg: 'rgba(167,139,250,0.1)', text: '#a78bfa', iconBg: 'rgba(167,139,250,0.15)', ring: '#a78bfa' },
    sky:    { bg: 'rgba(96,165,250,0.08)', text: '#60a5fa', iconBg: 'rgba(96,165,250,0.12)', ring: '#60a5fa' },
  };
  const c = colorMap[color] || colorMap.violet;
  const sizes = { sm: { p: '10px', ib: '28px', if: '14px', ns: '11px', ss: '10px', rs: 32, rw: 3 }, md: { p: '14px', ib: '36px', if: '18px', ns: '13px', ss: '11px', rs: 40, rw: 3.5 }, lg: { p: '18px', ib: '44px', if: '22px', ns: '15px', ss: '12px', rs: 48, rw: 4 } };
  const s = sizes[size] || sizes.md;
  const rr = (s.rs - s.rw * 2) / 2, circ = 2 * Math.PI * rr;
  const pct = progress !== undefined ? Math.min(Math.max(progress / progressMax, 0), 1) : (completed ? 1 : 0);
  return (
    <div onClick={onToggle} style={{ background: completed ? c.bg : '#17122a', borderRadius: 16, padding: s.p, border: `1px solid ${completed ? c.ring + '40' : 'rgba(167,139,250,0.1)'}`, display: 'flex', flexDirection: 'column', gap: '10px', cursor: onToggle ? 'pointer' : 'default', userSelect: 'none', transition: 'all 180ms ease', ...style }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ width: s.ib, height: s.ib, borderRadius: 10, background: c.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: s.if }}>{icon}</div>
        <div style={{ position: 'relative', width: s.rs + 'px', height: s.rs + 'px' }}>
          <svg width={s.rs} height={s.rs} viewBox={`0 0 ${s.rs} ${s.rs}`} style={{ transform: 'rotate(-90deg)' }}>
            <circle cx={s.rs/2} cy={s.rs/2} r={rr} fill="none" stroke="rgba(167,139,250,0.1)" strokeWidth={s.rw} />
            <circle cx={s.rs/2} cy={s.rs/2} r={rr} fill="none" stroke={c.ring} strokeWidth={s.rw} strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={circ * (1 - pct)} style={{ transition: 'stroke-dashoffset .4s ease' }} />
          </svg>
          {completed && <span style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: c.ring, fontSize: '11px', fontWeight: 700 }}>✓</span>}
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        <span style={{ fontFamily: 'DM Sans,sans-serif', fontSize: s.ns, fontWeight: 500, color: completed ? c.text : '#e4dff5' }}>{name}</span>
        {streak > 0 && <span style={{ fontFamily: 'DM Sans,sans-serif', fontSize: s.ss, color: '#7e72a8' }}>🔥 {streak} day streak</span>}
      </div>
    </div>
  );
}

function StreakBadge({ count = 0, size = 'md', label, style }) {
  const sizes = { sm: { p: '6px 10px', fs: '14px', cs: '13px', ls: '11px', r: 8 }, md: { p: '8px 14px', fs: '18px', cs: '17px', ls: '11px', r: 10 }, lg: { p: '10px 16px', fs: '22px', cs: '22px', ls: '13px', r: 12 } };
  const s = sizes[size] || sizes.md;
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: s.p, borderRadius: s.r, background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.2)', ...style }}>
      <span style={{ fontSize: s.fs, lineHeight: 1 }}>🔥</span>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <span style={{ fontFamily: 'DM Sans,sans-serif', fontSize: s.cs, fontWeight: 700, color: '#fbbf24', lineHeight: 1 }}>{count}</span>
        <span style={{ fontFamily: 'DM Sans,sans-serif', fontSize: s.ls, fontWeight: 500, color: '#7e72a8', lineHeight: 1 }}>{label || 'day streak'}</span>
      </div>
    </div>
  );
}

Object.assign(window, { BonsaiTree, HabitCard, StreakBadge });
