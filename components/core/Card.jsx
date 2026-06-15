export function Card({
  children,
  variant = 'default',
  padding = 'md',
  radius = 'card',
  as: Tag = 'div',
  onClick,
  style,
  className,
}) {
  const variants = {
    default: {
      background: 'var(--color-bg-surface)',
      boxShadow: 'var(--shadow-card)',
      border: 'none',
    },
    elevated: {
      background: 'var(--color-bg-surface)',
      boxShadow: 'var(--shadow-lg)',
      border: 'none',
    },
    bordered: {
      background: 'var(--color-bg-surface)',
      boxShadow: 'var(--shadow-xs)',
      border: '1.5px solid var(--color-border)',
    },
    muted: {
      background: 'var(--color-bg-muted)',
      boxShadow: 'none',
      border: 'none',
    },
    brand: {
      background: 'var(--color-bg-brand)',
      boxShadow: 'none',
      border: '1.5px solid var(--color-border-brand)',
    },
    glass: {
      background: 'rgba(255,255,255,0.72)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      boxShadow: 'var(--shadow-lg)',
      border: '1px solid rgba(255,255,255,0.5)',
    },
  };

  const paddings = {
    none: '0',
    sm:   'var(--padding-card-sm)',
    md:   'var(--padding-card-md)',
    lg:   'var(--padding-card-lg)',
  };

  const radii = {
    card:       'var(--radius-card)',
    'card-inner': 'var(--radius-card-inner)',
    modal:      'var(--radius-modal)',
    sheet:      'var(--radius-sheet)',
    lg:         'var(--radius-lg)',
    xl:         'var(--radius-xl)',
  };

  const isInteractive = Boolean(onClick);

  return React.createElement(Tag, {
    onClick,
    style: {
      ...variants[variant] || variants.default,
      borderRadius: radii[radius] || radii.card,
      padding: paddings[padding] || paddings.md,
      position: 'relative',
      overflow: 'hidden',
      cursor: isInteractive ? 'pointer' : 'default',
      transition: isInteractive
        ? 'transform var(--duration-normal) var(--ease-out), box-shadow var(--duration-normal) var(--ease-out)'
        : 'none',
      ...style,
    },
    className,
    onMouseEnter: isInteractive
      ? (e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; }
      : undefined,
    onMouseLeave: isInteractive
      ? (e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = variants[variant]?.boxShadow || 'var(--shadow-card)'; }
      : undefined,
  }, children);
}
