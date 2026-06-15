export function MoodSelector({
  value,
  onChange,
  size = 'md',
  showLabels = true,
  style,
}) {
  const moods = [
    { id: 'great',    emoji: '😄', label: 'Amazing',  color: 'var(--color-wellness-great)',   bg: 'var(--color-green-50)',   border: 'var(--color-green-300)' },
    { id: 'good',     emoji: '🙂', label: 'Good',     color: 'var(--color-wellness-good)',    bg: 'var(--color-green-50)',   border: 'var(--color-green-200)' },
    { id: 'okay',     emoji: '😐', label: 'Okay',     color: 'var(--color-wellness-okay)',    bg: 'var(--color-gold-50)',    border: 'var(--color-gold-200)' },
    { id: 'low',      emoji: '😔', label: 'Low',      color: 'var(--color-wellness-low)',     bg: 'var(--color-terra-50)',   border: 'var(--color-terra-200)' },
    { id: 'stressed', emoji: '😰', label: 'Rough',    color: 'var(--color-wellness-stressed)', bg: 'var(--color-terra-100)', border: 'var(--color-terra-300)' },
  ];

  const sizes = {
    sm: { box: 52, emoji: '20px', labelSize: 'var(--text-2xs)' },
    md: { box: 64, emoji: '26px', labelSize: 'var(--text-xs)' },
    lg: { box: 76, emoji: '32px', labelSize: 'var(--text-sm)' },
  };
  const s = sizes[size] || sizes.md;

  return React.createElement('div', {
    style: {
      display: 'flex',
      gap: '8px',
      alignItems: 'flex-start',
      ...style,
    },
  },
    moods.map((mood) => {
      const selected = value === mood.id;
      return React.createElement('button', {
        key: mood.id,
        onClick: () => onChange && onChange(mood.id),
        style: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '5px',
          flex: 1,
          padding: '8px 4px',
          borderRadius: 'var(--radius-lg)',
          border: `1.5px solid ${selected ? mood.border : 'var(--color-border)'}`,
          background: selected ? mood.bg : 'var(--color-bg-surface)',
          cursor: 'pointer',
          transition: 'var(--transition-color), transform var(--duration-fast) var(--ease-bounce)',
          transform: selected ? 'scale(1.06)' : 'scale(1)',
          boxShadow: selected ? 'var(--shadow-sm)' : 'none',
          outline: 'none',
          WebkitTapHighlightColor: 'transparent',
        },
        onMouseEnter: (e) => { if (!selected) e.currentTarget.style.background = mood.bg; },
        onMouseLeave: (e) => { if (!selected) e.currentTarget.style.background = 'var(--color-bg-surface)'; },
      },
        React.createElement('span', {
          style: { fontSize: s.emoji, lineHeight: 1, display: 'block' },
        }, mood.emoji),
        showLabels && React.createElement('span', {
          style: {
            fontFamily: 'var(--font-sans)',
            fontSize: s.labelSize,
            fontWeight: selected ? 'var(--font-semibold)' : 'var(--font-medium)',
            color: selected ? mood.color : 'var(--color-text-muted)',
            lineHeight: 1,
            transition: 'color var(--duration-fast)',
          },
        }, mood.label)
      );
    })
  );
}
