export function Badge({
  children,
  color = 'green',
  size = 'md',
  dot = false,
  style,
}) {
  const colors = {
    green:     { bg: 'var(--color-green-100)',      text: 'var(--color-green-700)',      dot: 'var(--color-green-500)' },
    sage:      { bg: 'var(--color-brand-light)',     text: 'var(--color-brand-mid)',      dot: 'var(--color-brand)' },
    gold:      { bg: 'var(--color-gold-100)',        text: 'var(--color-gold-700)',       dot: 'var(--color-gold-500)' },
    terra:     { bg: 'var(--color-terra-100)',       text: 'var(--color-terra-600)',      dot: 'var(--color-terra-500)' },
    lavender:  { bg: 'var(--color-lavender-100)',    text: 'var(--color-lavender-600)',   dot: 'var(--color-lavender-500)' },
    sky:       { bg: 'var(--color-sky-100)',         text: 'var(--color-sky-600)',        dot: 'var(--color-sky-500)' },
    earth:     { bg: 'var(--color-earth-100)',       text: 'var(--color-earth-700)',      dot: 'var(--color-earth-500)' },
    dark:      { bg: 'var(--color-earth-800)',       text: '#ffffff',                     dot: 'var(--color-green-400)' },
    // Wellness aliases
    great:     { bg: 'var(--color-green-100)',       text: 'var(--color-green-700)',      dot: 'var(--color-wellness-great)' },
    good:      { bg: 'var(--color-green-50)',        text: 'var(--color-green-600)',      dot: 'var(--color-wellness-good)' },
    okay:      { bg: 'var(--color-gold-100)',        text: 'var(--color-gold-600)',       dot: 'var(--color-wellness-okay)' },
    low:       { bg: 'var(--color-terra-50)',        text: 'var(--color-terra-500)',      dot: 'var(--color-wellness-low)' },
    stressed:  { bg: 'var(--color-terra-100)',       text: 'var(--color-terra-600)',      dot: 'var(--color-wellness-stressed)' },
  };

  const sizes = {
    sm: { fontSize: 'var(--text-2xs)', padding: '2px 8px',  fontWeight: 'var(--font-semibold)' },
    md: { fontSize: 'var(--text-xs)',  padding: '4px 10px', fontWeight: 'var(--font-medium)' },
    lg: { fontSize: 'var(--text-sm)',  padding: '5px 12px', fontWeight: 'var(--font-medium)' },
  };

  const c = colors[color] || colors.green;
  const s = sizes[size] || sizes.md;

  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '5px',
      borderRadius: 'var(--radius-badge)',
      background: c.bg,
      color: c.text,
      fontFamily: 'var(--font-sans)',
      letterSpacing: 'var(--tracking-wide)',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      flexShrink: 0,
      ...s,
      ...style,
    },
  },
    dot && React.createElement('span', {
      style: {
        width: '6px', height: '6px',
        borderRadius: '50%',
        background: c.dot,
        flexShrink: 0,
      },
    }),
    children
  );
}
