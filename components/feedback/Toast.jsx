export function Toast({
  message,
  type = 'default',
  icon,
  onDismiss,
  style,
}) {
  const types = {
    default: { bg: 'var(--color-earth-800)',    text: '#ffffff',                    icon: null },
    success: { bg: 'var(--color-green-800)',     text: '#ffffff',                    icon: '✓' },
    warning: { bg: 'var(--color-gold-100)',      text: 'var(--color-gold-700)',      icon: '!' },
    error:   { bg: 'var(--color-terra-600)',     text: '#ffffff',                    icon: '✕' },
    info:    { bg: 'var(--color-sky-600)',        text: '#ffffff',                    icon: 'i' },
    growth:  { bg: 'var(--color-green-700)',     text: '#ffffff',                    icon: '🌿' },
  };

  const t = types[type] || types.default;
  const displayIcon = icon !== undefined ? icon : t.icon;

  return React.createElement('div', {
    role: 'alert',
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      padding: '12px 16px',
      borderRadius: 'var(--radius-toast)',
      background: t.bg,
      color: t.text,
      boxShadow: 'var(--shadow-toast)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--font-medium)',
      lineHeight: 'var(--leading-snug)',
      maxWidth: '360px',
      minWidth: '200px',
      animation: 'toast-in var(--duration-moderate) var(--ease-bounce)',
      ...style,
    },
  },
    displayIcon && React.createElement('span', {
      style: {
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        width: '20px', height: '20px', borderRadius: '50%',
        background: 'rgba(255,255,255,0.15)',
        fontSize: 'var(--text-xs)', fontWeight: 'var(--font-bold)',
        flexShrink: 0, lineHeight: 1,
      },
    }, displayIcon),
    React.createElement('span', { style: { flex: 1 } }, message),
    onDismiss && React.createElement('button', {
      onClick: onDismiss,
      style: {
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'none', border: 'none', color: 'inherit',
        opacity: 0.7, cursor: 'pointer', padding: '0', marginLeft: '4px',
        fontSize: 'var(--text-base)', lineHeight: 1, flexShrink: 0,
      },
    }, '×')
  );
}
