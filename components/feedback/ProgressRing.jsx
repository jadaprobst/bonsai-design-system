export function ProgressRing({
  value = 0,
  max = 100,
  size = 56,
  strokeWidth = 4,
  color = 'green',
  trackColor,
  label,
  sublabel,
  style,
}) {
  const colors = {
    green:    'var(--color-green-500)',
    brand:    'var(--color-brand)',
    gold:     'var(--color-gold-500)',
    terra:    'var(--color-terra-500)',
    lavender: 'var(--color-lavender-500)',
    sky:      'var(--color-sky-500)',
    earth:    'var(--color-earth-400)',
  };

  const strokeColor  = colors[color] || color;
  const trackStroke  = trackColor || 'var(--color-border)';
  const radius = (size - strokeWidth * 2) / 2;
  const circumference = 2 * Math.PI * radius;
  const pct = Math.min(Math.max(value / max, 0), 1);
  const offset = circumference * (1 - pct);
  const center = size / 2;

  return React.createElement('div', {
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size + 'px',
      height: size + 'px',
      flexShrink: 0,
      ...style,
    },
  },
    React.createElement('svg', {
      width: size, height: size,
      viewBox: `0 0 ${size} ${size}`,
      style: { position: 'absolute', top: 0, left: 0, transform: 'rotate(-90deg)' },
    },
      React.createElement('circle', {
        cx: center, cy: center, r: radius,
        fill: 'none',
        stroke: trackStroke,
        strokeWidth,
      }),
      React.createElement('circle', {
        cx: center, cy: center, r: radius,
        fill: 'none',
        stroke: strokeColor,
        strokeWidth,
        strokeLinecap: 'round',
        strokeDasharray: circumference,
        strokeDashoffset: offset,
        style: { transition: 'stroke-dashoffset var(--duration-slow) var(--ease-out)' },
      })
    ),
    React.createElement('div', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1px',
        zIndex: 1,
      },
    },
      label && React.createElement('span', {
        style: {
          fontFamily: 'var(--font-sans)',
          fontSize: size < 50 ? 'var(--text-xs)' : 'var(--text-sm)',
          fontWeight: 'var(--font-bold)',
          color: 'var(--color-text-primary)',
          lineHeight: 1,
        },
      }, label),
      sublabel && React.createElement('span', {
        style: {
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--text-2xs)',
          fontWeight: 'var(--font-medium)',
          color: 'var(--color-text-muted)',
          lineHeight: 1,
        },
      }, sublabel)
    )
  );
}
