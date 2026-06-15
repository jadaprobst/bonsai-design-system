export function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  fullWidth = false,
  leftIcon = null,
  rightIcon = null,
  onClick,
  type = 'button',
  style,
  className,
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: 'var(--font-sans)',
    fontWeight: 'var(--font-semibold)',
    letterSpacing: 'var(--tracking-wide)',
    borderRadius: 'var(--radius-button)',
    border: '1.5px solid transparent',
    cursor: disabled || loading ? 'not-allowed' : 'pointer',
    transition: 'var(--transition-color), var(--transition-shadow), transform var(--duration-fast) var(--ease-out)',
    whiteSpace: 'nowrap',
    width: fullWidth ? '100%' : 'auto',
    opacity: disabled ? 0.55 : 1,
    userSelect: 'none',
    WebkitTapHighlightColor: 'transparent',
    outline: 'none',
    position: 'relative',
    overflow: 'hidden',
  };

  const sizes = {
    xs: { fontSize: 'var(--text-xs)',   padding: 'var(--space-1) var(--space-3)',    minHeight: '28px' },
    sm: { fontSize: 'var(--text-sm)',   padding: 'var(--space-2) var(--space-4)',    minHeight: '36px' },
    md: { fontSize: 'var(--text-base)', padding: 'var(--space-3) var(--space-5)',    minHeight: '44px' },
    lg: { fontSize: 'var(--text-md)',   padding: 'var(--space-4) var(--space-7)',    minHeight: '52px' },
  };

  const variants = {
    primary: {
      background: 'var(--color-interactive)',
      color: '#ffffff',
      borderColor: 'var(--color-interactive)',
      boxShadow: 'var(--shadow-button-primary)',
    },
    secondary: {
      background: 'transparent',
      color: 'var(--color-interactive)',
      borderColor: 'var(--color-border-brand)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-text-brand)',
      borderColor: 'transparent',
    },
    soft: {
      background: 'var(--color-bg-brand)',
      color: 'var(--color-interactive)',
      borderColor: 'transparent',
    },
    danger: {
      background: 'var(--color-error)',
      color: '#ffffff',
      borderColor: 'var(--color-error)',
    },
    'danger-ghost': {
      background: 'transparent',
      color: 'var(--color-error)',
      borderColor: 'transparent',
    },
  };

  const Spinner = () => (
    React.createElement('svg', {
      width: '16', height: '16', viewBox: '0 0 24 24', fill: 'none',
      stroke: 'currentColor', strokeWidth: '2.5',
      style: { animation: 'bonsai-spin 0.8s linear infinite', flexShrink: 0 },
    },
      React.createElement('circle', { cx: '12', cy: '12', r: '10', strokeOpacity: '0.25' }),
      React.createElement('path', { d: 'M12 2a10 10 0 0 1 10 10', strokeLinecap: 'round' })
    )
  );

  const handleMouseEnter = (e) => {
    if (disabled || loading) return;
    const el = e.currentTarget;
    if (variant === 'primary') el.style.background = 'var(--color-interactive-hover)';
    else if (variant === 'secondary' || variant === 'ghost' || variant === 'soft')
      el.style.background = 'var(--color-bg-brand)';
  };
  const handleMouseLeave = (e) => {
    if (disabled || loading) return;
    e.currentTarget.style.background = variants[variant]?.background || '';
  };
  const handleMouseDown = (e) => {
    if (disabled || loading) return;
    e.currentTarget.style.transform = 'scale(0.96)';
  };
  const handleMouseUp = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
  };

  return React.createElement('button', {
    type,
    disabled: disabled || loading,
    onClick,
    style: {
      ...base,
      ...sizes[size] || sizes.md,
      ...variants[variant] || variants.primary,
      ...style,
    },
    className,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onMouseDown: handleMouseDown,
    onMouseUp: handleMouseUp,
    onFocus: (e) => { e.currentTarget.style.boxShadow = 'var(--shadow-focus-brand)'; },
    onBlur:  (e) => { e.currentTarget.style.boxShadow = variants[variant]?.boxShadow || 'none'; },
  },
    loading && React.createElement(Spinner),
    leftIcon && !loading && React.createElement('span', { style: { display: 'flex', alignItems: 'center', flexShrink: 0 } }, leftIcon),
    children,
    rightIcon && React.createElement('span', { style: { display: 'flex', alignItems: 'center', flexShrink: 0 } }, rightIcon)
  );
}
