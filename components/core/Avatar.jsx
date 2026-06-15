export function Avatar({
  src,
  name,
  size = 'md',
  wellnessColor,
  showRing = false,
  style,
}) {
  const sizes = {
    xs:  { outer: 28, inner: 24, font: 'var(--text-2xs)', ring: 2 },
    sm:  { outer: 36, inner: 30, font: 'var(--text-xs)',  ring: 2.5 },
    md:  { outer: 44, inner: 38, font: 'var(--text-sm)',  ring: 3 },
    lg:  { outer: 56, inner: 48, font: 'var(--text-base)', ring: 3 },
    xl:  { outer: 72, inner: 62, font: 'var(--text-lg)',  ring: 3.5 },
    '2xl': { outer: 96, inner: 84, font: 'var(--text-xl)', ring: 4 },
  };

  const s = sizes[size] || sizes.md;

  const initials = name
    ? name.trim().split(/\s+/).slice(0, 2).map(w => w[0].toUpperCase()).join('')
    : '?';

  // Map wellness color names to actual colors
  const wellnessColors = {
    great:   'var(--color-wellness-great)',
    good:    'var(--color-wellness-good)',
    okay:    'var(--color-wellness-okay)',
    low:     'var(--color-wellness-low)',
    stressed:'var(--color-wellness-stressed)',
    green:   'var(--color-green-500)',
    gold:    'var(--color-gold-500)',
    lavender:'var(--color-lavender-500)',
    sky:     'var(--color-sky-500)',
  };

  const ringColor = wellnessColor
    ? (wellnessColors[wellnessColor] || wellnessColor)
    : 'var(--color-border-brand)';

  const outerStyle = {
    width:  s.outer + 'px',
    height: s.outer + 'px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    background: showRing
      ? `conic-gradient(${ringColor} 0deg, ${ringColor} 270deg, var(--color-border) 270deg)`
      : 'transparent',
    padding: showRing ? s.ring + 'px' : '0',
    ...style,
  };

  const innerStyle = {
    width:  showRing ? '100%' : s.outer + 'px',
    height: showRing ? '100%' : s.outer + 'px',
    borderRadius: '50%',
    overflow: 'hidden',
    background: 'var(--color-earth-100)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: showRing ? '2px solid var(--color-bg-surface)' : 'none',
    flexShrink: 0,
  };

  return React.createElement('div', { style: outerStyle },
    React.createElement('div', { style: innerStyle },
      src
        ? React.createElement('img', {
            src, alt: name || 'Avatar',
            style: { width: '100%', height: '100%', objectFit: 'cover' },
          })
        : React.createElement('span', {
            style: {
              fontFamily: 'var(--font-sans)',
              fontSize: s.font,
              fontWeight: 'var(--font-semibold)',
              color: 'var(--color-text-secondary)',
              lineHeight: 1,
              userSelect: 'none',
            },
          }, initials)
    )
  );
}
