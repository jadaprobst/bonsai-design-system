// ScheduleScreen.jsx

function ScheduleScreen({ nav }) {
  const { Badge, Button } = window;
  const { ScreenWrapper } = window;

  const [activeDay, setActiveDay] = React.useState(2); // 0=Mon, default Wed

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  const dates = ['Dec 1', 'Dec 2', 'Dec 3', 'Dec 4', 'Dec 5'];

  const events = {
    0: [{ time: '9:00am',   title: 'Calc homework due',  type: 'deadline', stress: 'okay' }],
    1: [{ time: '11:59pm',  title: 'English essay due',  type: 'deadline', stress: 'low'  }, { time: '3:30pm', title: 'Soccer practice', type: 'activity', stress: 'great' }],
    2: [{ time: '9:00am',   title: 'Chemistry exam',     type: 'exam',     stress: 'stressed' }, { time: '11:59pm', title: 'CS project due', type: 'deadline', stress: 'low' }, { time: '7:00pm', title: 'Group study w/ Maya', type: 'social', stress: 'good' }],
    3: [{ time: '1:00pm',   title: 'Bio lab report due', type: 'deadline', stress: 'okay' }, { time: '4:00pm', title: 'Therapy appointment', type: 'wellness', stress: 'great' }],
    4: [{ time: 'All day',  title: 'College app draft',  type: 'deadline', stress: 'low'  }, { time: '6:00pm', title: 'Family dinner', type: 'social', stress: 'great' }],
  };

  const stressLevels = [3, 4, 8, 5, 4];
  const stressColors = ['var(--color-green-400)', 'var(--color-green-400)', 'var(--color-terra-400)', 'var(--color-gold-400)', 'var(--color-green-400)'];

  const typeColors = {
    exam:     { color: 'stressed', icon: '📝' },
    deadline: { color: 'okay',     icon: '📋' },
    activity: { color: 'good',     icon: '⚽' },
    social:   { color: 'good',     icon: '👥' },
    wellness: { color: 'great',    icon: '🌿' },
  };

  const todayStress = stressLevels[activeDay];
  const isHighLoad = todayStress >= 7;

  return React.createElement(ScreenWrapper, { nav, active: 'schedule' },
    // ── Header ──────────────────────────────────────────────
    React.createElement('div', { style: { padding: '20px 20px 0' } },
      React.createElement('p', { style: { fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', fontWeight: 500, marginBottom: 2 } }, 'Synced with Canvas'),
      React.createElement('h1', { style: { fontSize: 'var(--text-xl)', fontWeight: 700, color: 'var(--color-text-primary)' } }, 'This week')
    ),

    // ── Day Selector ─────────────────────────────────────────
    React.createElement('div', { style: { display: 'flex', gap: 6, padding: '16px 20px 0', overflowX: 'auto' } },
      days.map((day, i) => React.createElement('button', {
        key: day,
        onClick: () => setActiveDay(i),
        style: {
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3,
          padding: '8px 10px', borderRadius: 'var(--radius-md)',
          border: i === activeDay ? 'none' : '1.5px solid var(--color-border)',
          background: i === activeDay ? 'var(--color-brand)' : '#fff',
          color: i === activeDay ? '#fff' : 'var(--color-text-secondary)',
          cursor: 'pointer', flexShrink: 0, minWidth: 52,
          transition: 'all .15s',
        },
      },
        React.createElement('span', { style: { fontSize: '10px', fontWeight: 700, letterSpacing: '.04em' } }, day),
        React.createElement('span', { style: { fontSize: 'var(--text-sm)', fontWeight: 700 } }, dates[i].split(' ')[1]),
        React.createElement('div', { style: { width: 6, height: 6, borderRadius: '50%', background: i === activeDay ? 'rgba(255,255,255,.6)' : stressColors[i] } })
      ))
    ),

    // ── Stress Forecast ──────────────────────────────────────
    React.createElement('div', { style: { margin: '14px 20px 0', padding: '12px 14px', borderRadius: 'var(--radius-lg)', background: isHighLoad ? 'var(--color-terra-50)' : 'var(--color-green-50)', border: `1px solid ${isHighLoad ? 'var(--color-terra-200)' : 'var(--color-green-200)'}`, display: 'flex', alignItems: 'center', gap: 10 } },
      React.createElement('span', { style: { fontSize: 18 } }, isHighLoad ? '⚡' : '🌿'),
      React.createElement('div', null,
        React.createElement('p', { style: { fontSize: 'var(--text-xs)', fontWeight: 700, color: isHighLoad ? 'var(--color-terra-600)' : 'var(--color-green-700)' } },
          isHighLoad ? 'High-load day — plan a reset' : 'Load looks manageable today'),
        React.createElement('p', { style: { fontSize: '10px', color: 'var(--color-text-muted)', marginTop: 2 } },
          isHighLoad ? 'Rest tonight, eat well, reach out to a friend' : 'Good day to build habits and check in')
      )
    ),

    // ── Events ───────────────────────────────────────────────
    React.createElement('div', { style: { padding: '14px 20px 24px', display: 'flex', flexDirection: 'column', gap: 8 } },
      React.createElement('p', { style: { fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--color-text-muted)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 4 } }, `${days[activeDay]} · ${dates[activeDay]}`),
      (events[activeDay] || []).map((ev, i) => React.createElement('div', {
        key: i,
        style: {
          background: '#fff', borderRadius: 'var(--radius-lg)', padding: '12px 14px',
          boxShadow: 'var(--shadow-sm)', display: 'flex', alignItems: 'center', gap: 12,
        },
      },
        React.createElement('span', { style: { fontSize: 20, flexShrink: 0 } }, typeColors[ev.type]?.icon || '•'),
        React.createElement('div', { style: { flex: 1 } },
          React.createElement('p', { style: { fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--color-text-primary)' } }, ev.title),
          React.createElement('p', { style: { fontSize: '10px', color: 'var(--color-text-muted)', marginTop: 2 } }, ev.time)
        ),
        React.createElement(Badge, { color: typeColors[ev.type]?.color || 'earth', size: 'sm', dot: true }, ev.type)
      )),
      events[activeDay]?.length === 0 && React.createElement('p', { style: { textAlign: 'center', padding: '32px 0', color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)' } }, 'Nothing scheduled — a good day to rest.')
    )
  );
}

Object.assign(window, { ScheduleScreen });
