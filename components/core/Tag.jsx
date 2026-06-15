export function Tag({
  children,
  color = 'earth',
  size = 'md',
  icon = null,
  removable = false,
  onRemove,
  onClick,
  active = false,
  style,
}) {
  const colors = {
    earth:    { bg: 'var(--color-earth-100)',     text: 'var(--color-earth-700)',    activeBg: 'var(--color-earth-200)',    border: 'var(--color-earth-200)' },
    green:    { bg: 'var(--color-green-50)',      text: 'var(--color-green-700)',    activeBg: 'var(--color-green-100)',    border: 'var(--color-green-200)' },
    gold:     { bg: 'var(--color-gold-50)',       text: 'var(--color-gold-700)',     activeBg: 'var(--color-gold-100)',     border: 'var(--color-gold-200)' },
    terra:    { bg: 'var(--color-terra-50)',      text: 'var(--color-terra-600)',    activeBg: 'var(--color-terra-100)',    border: 'var(--color-terra-200)' },
    lavender: { bg: 'var(--color-lavender-50)',   text: 'var(--color-lavender-600)', activeBg: 'var(--color-lavender-100)', border: 'var(--color-lavender-200)' },
    sky:      { bg: 'var(--color-sky-50)',        text: 'var(--color-sky-600)',      activeBg: 'var(--color-sky-100)',      border: 'var(--color-sky-200)' },
  };

  const sizes = {
    sm: { fontSize: 'var(--text-xs)',  padding: '4px 10px',  gap: '4px',  iconSize: '12px' },
    md: { fontSize: 'var(--text-sm)',  padding: '6px 12px',  gap: '5px',  iconSize: '14px' },
    lg: { fontSize: 'var(--text-base)', padding: '8px 14px', gap: '6px',  iconSize: '16px' },
  };

  const c = colors[color] || colors.earth;
  const s = sizes[size] || sizes.md;
  const isClickable = Boolean(onClick);

  return React.createElement('span', {
    onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: s.gap,
      borderRadius: 'var(--radius-tag)',
      background: active ? c.activeBg : c.bg,
      color: c.text,
      border: `1px solid ${c.border}`,
      fontFamily: 'var(--font-sans)',
      fontSize: s.fontSize,
      fontWeight: 'var(--font-medium)',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      cursor: isClickable ? 'pointer' : 'default',
      userSelect: 'none',
      transition: 'var(--transition-color)',
      padding: s.padding,
      ...style,
    },
  },
    icon && React.createElement('span', {
      style: { display: 'flex', alignItems: 'center', fontSize: s.iconSize, flexShrink: 0 },
    }, icon),
    children,
    removable && React.createElement('button', {
      onClick: (e) => { e.stopPropagation(); onRemove && onRemove(); },
      style: {
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'none', border: 'none', padding: '0',
        cursor: 'pointer', color: 'inherit', opacity: 0.6,
        marginLeft: '2px', fontSize: s.iconSize,
        lineHeight: 1,
      },
    }, '×')
  );
}
