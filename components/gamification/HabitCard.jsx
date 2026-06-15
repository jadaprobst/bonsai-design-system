export function HabitCard({
  name,
  icon,
  color = 'green',
  streak = 0,
  completed = false,
  progress,
  progressMax = 100,
  onToggle,
  size = 'md',
  style,
}) {
  const colors = {
    green:    { ring: 'green',    bg: 'var(--color-green-50)',    text: 'var(--color-green-700)',    iconBg: 'var(--color-green-100)' },
    gold:     { ring: 'gold',     bg: 'var(--color-gold-50)',     text: 'var(--color-gold-700)',     iconBg: 'var(--color-gold-100)' },
    lavender: { ring: 'lavender', bg: 'var(--color-lavender-50)', text: 'var(--color-lavender-600)', iconBg: 'var(--color-lavender-100)' },
    sky:      { ring: 'sky',      bg: 'var(--color-sky-50)',      text: 'var(--color-sky-600)',      iconBg: 'var(--color-sky-100)' },
    terra:    { ring: 'terra',    bg: 'var(--color-terra-50)',    text: 'var(--color-terra-600)',    iconBg: 'var(--color-terra-100)' },
    earth:    { ring: 'earth',    bg: 'var(--color-earth-50)',    text: 'var(--color-earth-600)',    iconBg: 'var(--color-earth-100)' },
  };

  const c = colors[color] || colors.green;
  const hasProgress = progress !== undefined;

  const sizes = {
    sm: { padding: '12px', iconBox: '32px', iconFont: '16px', nameSize: 'var(--text-xs)',  streakSize: 'var(--text-2xs)', ringSize: 36, ringStroke: 3 },
    md: { padding: '16px', iconBox: '40px', iconFont: '20px', nameSize: 'var(--text-sm)',  streakSize: 'var(--text-xs)',  ringSize: 44, ringStroke: 3.5 },
    lg: { padding: '20px', iconBox: '48px', iconFont: '24px', nameSize: 'var(--text-base)', streakSize: 'var(--text-sm)', ringSize: 52, ringStroke: 4 },
  };
  const s = sizes[size] || sizes.md;

  const ringRadius = (s.ringSize - s.ringStroke * 2) / 2;
  const circumference = 2 * Math.PI * ringRadius;
  const pct = hasProgress ? Math.min(Math.max((progress / progressMax), 0), 1) : (completed ? 1 : 0);
  const offset = circumference * (1 - pct);

  const ringColors = {
    green: '#52B788', gold: '#E9A23B', lavender: '#9B8EC4',
    sky: '#5BA4CF', terra: '#C1665A', earth: '#C4956A',
  };
  const ringFill = ringColors[color] || ringColors.green;

  return React.createElement('div', {
    style: {
      background: completed ? c.bg : 'var(--color-bg-surface)',
      borderRadius: 'var(--radius-card-inner)',
      padding: s.padding,
      boxShadow: 'var(--shadow-sm)',
      border: `1.5px solid ${completed ? 'var(--color-border-brand)' : 'var(--color-border)'}`,
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      cursor: onToggle ? 'pointer' : 'default',
      transition: 'var(--transition-color), transform var(--duration-fast) var(--ease-out)',
      userSelect: 'none',
      WebkitTapHighlightColor: 'transparent',
      ...style,
    },
    onClick: onToggle,
  },
    // Top row: icon + streak
    React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' } },
      React.createElement('div', {
        style: {
          width: s.iconBox, height: s.iconBox,
          borderRadius: 'var(--radius-sm)',
          background: c.iconBg,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: s.iconFont, flexShrink: 0,
        },
      }, icon),

      // Progress ring / checkmark
      React.createElement('div', {
        style: { position: 'relative', width: s.ringSize + 'px', height: s.ringSize + 'px' },
      },
        React.createElement('svg', {
          width: s.ringSize, height: s.ringSize,
          viewBox: `0 0 ${s.ringSize} ${s.ringSize}`,
          style: { transform: 'rotate(-90deg)' },
        },
          React.createElement('circle', {
            cx: s.ringSize/2, cy: s.ringSize/2, r: ringRadius,
            fill: 'none', stroke: 'var(--color-border)',
            strokeWidth: s.ringStroke,
          }),
          React.createElement('circle', {
            cx: s.ringSize/2, cy: s.ringSize/2, r: ringRadius,
            fill: 'none', stroke: ringFill,
            strokeWidth: s.ringStroke, strokeLinecap: 'round',
            strokeDasharray: circumference,
            strokeDashoffset: offset,
            style: { transition: 'stroke-dashoffset var(--duration-slow) var(--ease-out)' },
          })
        ),
        completed && React.createElement('span', {
          style: {
            position: 'absolute', inset: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: ringFill, fontSize: 'var(--text-xs)', fontWeight: 'var(--font-bold)',
          },
        }, '✓')
      )
    ),

    // Name + streak row
    React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: '3px' } },
      React.createElement('span', {
        style: {
          fontFamily: 'var(--font-sans)', fontSize: s.nameSize,
          fontWeight: 'var(--font-semibold)',
          color: completed ? c.text : 'var(--color-text-primary)',
        },
      }, name),
      streak > 0 && React.createElement('span', {
        style: {
          fontFamily: 'var(--font-sans)', fontSize: s.streakSize,
          fontWeight: 'var(--font-medium)',
          color: 'var(--color-text-muted)',
        },
      }, `🔥 ${streak} day streak`)
    )
  );
}
