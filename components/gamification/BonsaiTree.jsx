export function BonsaiTree({
  branches = { self: 3, purpose: 3, character: 3, relationships: 3 },
  level,               // backward-compat: sets all branches equally
  size = 200,
  animated = true,
  showLabels = false,
  style,
}) {
  const b = level !== undefined
    ? { self: level, purpose: level, character: level, relationships: level }
    : { self: 3, purpose: 3, character: 3, relationships: 3, ...branches };

  const clamp = (v) => Math.min(Math.max(Math.round(v ?? 0), 0), 5);
  const lvl = {
    self:          clamp(b.self),
    purpose:       clamp(b.purpose),
    character:     clamp(b.character),
    relationships: clamp(b.relationships),
  };

  const anim = animated ? `opacity var(--duration-growth) var(--ease-growth)` : 'none';
  const show = (min, branchLvl) => ({ opacity: branchLvl >= min ? 1 : 0, transition: anim });

  // Per-branch jewel-tone palettes
  const pal = {
    self: {
      dk: '#5038A8', md: '#7C3AED', mn: '#8B5CF6', lt: '#A78BFA', pl: '#C4B5FD',
      branch: lvl.self === 0 ? '#B8AFDA' : '#5038A8',
      sub:    lvl.self === 0 ? '#C4B5FD' : '#7C3AED',
    },
    purpose: {
      dk: '#2D6A4F', md: '#40916C', mn: '#52B788', lt: '#74C69D', pl: '#95D5B2',
      branch: lvl.purpose === 0 ? '#A0B8A8' : '#2D6A4F',
      sub:    lvl.purpose === 0 ? '#B7D4C2' : '#40916C',
    },
    character: {
      dk: '#0E7490', md: '#0891B2', mn: '#06B6D4', lt: '#22D3EE', pl: '#67E8F9',
      branch: lvl.character === 0 ? '#90BEC8' : '#0E7490',
      sub:    lvl.character === 0 ? '#A5D4E0' : '#0891B2',
    },
    relationships: {
      dk: '#3730A3', md: '#4F46E5', mn: '#6366F1', lt: '#818CF8', pl: '#A5B4FC',
      branch: lvl.relationships === 0 ? '#A8A8D8' : '#3730A3',
      sub:    lvl.relationships === 0 ? '#C0C0E8' : '#4F46E5',
    },
  };

  const textStyle = (anchor) => ({
    fontFamily: 'var(--font-sans, system-ui)',
    fontSize: '9',
    fontWeight: '700',
    letterSpacing: '0.03em',
    textAnchor: anchor,
    opacity: showLabels ? 1 : 0,
    transition: anim,
  });

  const p = pal;

  return React.createElement('div', { style: { width: size + 'px', height: size * 1.1 + 'px', flexShrink: 0, ...style } },
    React.createElement('svg', { viewBox: '0 0 200 220', width: size, height: size * 1.1, xmlns: 'http://www.w3.org/2000/svg' },

      /* ── Pot ─────────────────────────────────────────────────── */
      React.createElement('rect',    { x:73, y:192, width:54, height:7, rx:3.5, fill:'#A68262' }),
      React.createElement('path',    { d:'M77 199 L80 216 L120 216 L123 199Z', fill:'#C4956A' }),
      React.createElement('ellipse', { cx:100, cy:194, rx:27, ry:5.5, fill:'#8B6B4E' }),

      /* ── Trunk ───────────────────────────────────────────────── */
      React.createElement('path', { d:'M100 192 C99 174 97 156 94 138 C91 120 95 100 98 82 C100 72 100 60 100 46', stroke:'#4A3728', strokeWidth:5.5, fill:'none', strokeLinecap:'round', strokeLinejoin:'round' }),

      /* ═══ RELATIONSHIPS — indigo, lower wide spread ═══════════ */
      React.createElement('path', { d:'M94 148 C78 140 62 133 46 128', stroke:p.relationships.branch, strokeWidth:3.5, fill:'none', strokeLinecap:'round' }),
      React.createElement('path', { d:'M96 141 C112 134 128 130 150 124', stroke:p.relationships.branch, strokeWidth:3.5, fill:'none', strokeLinecap:'round' }),
      React.createElement('circle', { cx:44,  cy:123, r:10, fill:p.relationships.dk, ...show(1,lvl.relationships) }),
      React.createElement('circle', { cx:36,  cy:117, r:8,  fill:p.relationships.mn, ...show(2,lvl.relationships) }),
      React.createElement('circle', { cx:50,  cy:113, r:9,  fill:p.relationships.md, ...show(2,lvl.relationships) }),
      React.createElement('circle', { cx:34,  cy:108, r:7,  fill:p.relationships.lt, ...show(3,lvl.relationships) }),
      React.createElement('circle', { cx:46,  cy:106, r:8,  fill:p.relationships.mn, ...show(4,lvl.relationships) }),
      React.createElement('circle', { cx:30,  cy:100, r:7,  fill:p.relationships.pl, ...show(5,lvl.relationships) }),
      React.createElement('circle', { cx:152, cy:119, r:10, fill:p.relationships.dk, ...show(1,lvl.relationships) }),
      React.createElement('circle', { cx:160, cy:113, r:8,  fill:p.relationships.mn, ...show(2,lvl.relationships) }),
      React.createElement('circle', { cx:146, cy:109, r:9,  fill:p.relationships.md, ...show(2,lvl.relationships) }),
      React.createElement('circle', { cx:164, cy:106, r:7,  fill:p.relationships.lt, ...show(3,lvl.relationships) }),
      React.createElement('circle', { cx:154, cy:103, r:8,  fill:p.relationships.mn, ...show(4,lvl.relationships) }),
      React.createElement('circle', { cx:168, cy:98,  r:7,  fill:p.relationships.pl, ...show(5,lvl.relationships) }),
      React.createElement('text', { x:100, y:152, fill:p.relationships.dk, ...textStyle('middle') }, 'Relationships'),

      /* ═══ SELF — violet, left mid ══════════════════════════════ */
      React.createElement('path', { d:'M94 120 C80 113 66 108 52 103', stroke:p.self.branch, strokeWidth:3, fill:'none', strokeLinecap:'round' }),
      React.createElement('path', { d:'M89 110 C74 103 60 97 46 91',   stroke:p.self.sub,    strokeWidth:2.25, fill:'none', strokeLinecap:'round' }),
      React.createElement('circle', { cx:48, cy:98,  r:11, fill:p.self.dk, ...show(1,lvl.self) }),
      React.createElement('circle', { cx:40, cy:91,  r:9,  fill:p.self.mn, ...show(2,lvl.self) }),
      React.createElement('circle', { cx:54, cy:88,  r:10, fill:p.self.md, ...show(2,lvl.self) }),
      React.createElement('circle', { cx:38, cy:82,  r:8,  fill:p.self.lt, ...show(3,lvl.self) }),
      React.createElement('circle', { cx:50, cy:79,  r:9,  fill:p.self.mn, ...show(4,lvl.self) }),
      React.createElement('circle', { cx:34, cy:74,  r:8,  fill:p.self.pl, ...show(5,lvl.self) }),
      React.createElement('circle', { cx:46, cy:70,  r:8,  fill:p.self.pl, ...show(5,lvl.self) }),
      React.createElement('text', { x:38, y:90, fill:p.self.dk, ...textStyle('end') }, 'Self'),

      /* ═══ CHARACTER — teal, right mid ══════════════════════════ */
      React.createElement('path', { d:'M101 120 C115 113 130 108 144 103', stroke:p.character.branch, strokeWidth:3, fill:'none', strokeLinecap:'round' }),
      React.createElement('path', { d:'M106 110 C121 103 136 97 150 91',   stroke:p.character.sub,    strokeWidth:2.25, fill:'none', strokeLinecap:'round' }),
      React.createElement('circle', { cx:146, cy:98,  r:11, fill:p.character.dk, ...show(1,lvl.character) }),
      React.createElement('circle', { cx:154, cy:91,  r:9,  fill:p.character.mn, ...show(2,lvl.character) }),
      React.createElement('circle', { cx:140, cy:88,  r:10, fill:p.character.md, ...show(2,lvl.character) }),
      React.createElement('circle', { cx:156, cy:82,  r:8,  fill:p.character.lt, ...show(3,lvl.character) }),
      React.createElement('circle', { cx:144, cy:79,  r:9,  fill:p.character.mn, ...show(4,lvl.character) }),
      React.createElement('circle', { cx:160, cy:74,  r:8,  fill:p.character.pl, ...show(5,lvl.character) }),
      React.createElement('circle', { cx:148, cy:70,  r:8,  fill:p.character.pl, ...show(5,lvl.character) }),
      React.createElement('text', { x:162, y:90, fill:p.character.dk, ...textStyle('start') }, 'Character'),

      /* ═══ PURPOSE — green, apex ════════════════════════════════ */
      React.createElement('path', { d:'M98 88 C88 80 78 74 68 70',    stroke:p.purpose.branch, strokeWidth:2.5, fill:'none', strokeLinecap:'round' }),
      React.createElement('path', { d:'M101 83 C111 75 121 69 130 66', stroke:p.purpose.branch, strokeWidth:2.5, fill:'none', strokeLinecap:'round' }),
      React.createElement('circle', { cx:100, cy:67,  r:13, fill:p.purpose.mn, ...show(1,lvl.purpose) }),
      React.createElement('circle', { cx:91,  cy:59,  r:10, fill:p.purpose.dk, ...show(2,lvl.purpose) }),
      React.createElement('circle', { cx:110, cy:59,  r:10, fill:p.purpose.md, ...show(2,lvl.purpose) }),
      React.createElement('circle', { cx:68,  cy:66,  r:9,  fill:p.purpose.lt, ...show(3,lvl.purpose) }),
      React.createElement('circle', { cx:130, cy:62,  r:9,  fill:p.purpose.mn, ...show(3,lvl.purpose) }),
      React.createElement('circle', { cx:100, cy:50,  r:13, fill:p.purpose.md, ...show(3,lvl.purpose) }),
      React.createElement('circle', { cx:91,  cy:42,  r:10, fill:p.purpose.dk, ...show(4,lvl.purpose) }),
      React.createElement('circle', { cx:110, cy:42,  r:10, fill:p.purpose.mn, ...show(4,lvl.purpose) }),
      React.createElement('circle', { cx:100, cy:34,  r:11, fill:p.purpose.lt, ...show(4,lvl.purpose) }),
      React.createElement('circle', { cx:93,  cy:26,  r:9,  fill:p.purpose.pl, ...show(5,lvl.purpose) }),
      React.createElement('circle', { cx:107, cy:26,  r:9,  fill:p.purpose.lt, ...show(5,lvl.purpose) }),
      React.createElement('circle', { cx:100, cy:19,  r:8,  fill:p.purpose.pl, ...show(5,lvl.purpose) }),
      React.createElement('text', { x:100, y:14, fill:p.purpose.dk, ...textStyle('middle') }, 'Purpose'),
    )
  );
}
