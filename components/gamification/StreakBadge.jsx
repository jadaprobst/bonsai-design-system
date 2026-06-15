export function StreakBadge({
  count = 0,
  size = 'md',
  animated = true,
  label,
  style,
}) {
  const sizes = {
    sm: { padding: '6px 10px', gap: '5px', flameSize: '14px', countSize: 'var(--text-sm)', labelSize: 'var(--text-xs)', radius: 'var(--radius-sm)' },
    md: { padding: '8px 14px', gap: '6px', flameSize: '18px', countSize: 'var(--text-lg)', labelSize: 'var(--text-xs)', radius: 'var(--radius-md)' },
    lg: { padding: '12px 18px', gap: '8px', flameSize: '24px', countSize: 'var(--text-2xl)', labelSize: 'var(--text-sm)', radius: 'var(--radius-lg)' },
    xl: { padding: '16px 24px', gap: '10px', flameSize: '32px', countSize: 'var(--text-3xl)', labelSize: 'var(--text-base)', radius: 'var(--radius-xl)' },
  };

  const s = sizes[size] || sizes.md;

  // Pulse animation keyframes injected once
  React.useEffect(() => {
    if (!animated) return;
    const id = 'bonsai-streak-style';
    if (document.getElementById(id)) return;
    const el = document.createElement('style');
    el.id = id;
    el.textContent = `
      @keyframes streak-pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.12); }
      }
      @keyframes bonsai-spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      @keyframes toast-in {
        from { opacity: 0; transform: translateY(8px) scale(0.95); }
        to { opacity: 1; transform: translateY(0) scale(1); }
      }
    `;
    document.head.appendChild(el);
  }, [animated]);

  return React.createElement('div', {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '4px',
      ...style,
    },
  },
    React.createElement('div', {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: s.gap,
        padding: s.padding,
        borderRadius: s.radius,
        background: 'var(--color-streak-bg)',
        border: '1.5px solid var(--color-gold-200)',
      },
    },
      React.createElement('span', {
        style: {
          fontSize: s.flameSize,
          lineHeight: 1,
          display: 'inline-block',
          animation: animated && count > 0 ? 'streak-pulse 2s ease-in-out infinite' : 'none',
        },
      }, '🔥'),
      React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: '1px' } },
        React.createElement('span', {
          style: {
            fontFamily: 'var(--font-sans)',
            fontSize: s.countSize,
            fontWeight: 'var(--font-bold)',
            color: 'var(--color-gold-700)',
            lineHeight: 1,
          },
        }, count),
        React.createElement('span', {
          style: {
            fontFamily: 'var(--font-sans)',
            fontSize: s.labelSize,
            fontWeight: 'var(--font-medium)',
            color: 'var(--color-earth-500)',
            lineHeight: 1,
          },
        }, label || (count === 1 ? 'day streak' : 'day streak'))
      )
    )
  );
}
