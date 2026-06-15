// HabitsScreen.jsx

function HabitsScreen({ nav }) {
  const { HabitCard, ProgressRing, StreakBadge } = window;
  const { ScreenWrapper } = window;

  const [habits, setHabits] = React.useState([
    { id: 'sleep',    name: 'Sleep',      icon: '🌙', color: 'lavender', streak: 12, done: true,  progress: 8, max: 8 },
    { id: 'exercise', name: 'Exercise',   icon: '🏃', color: 'green',    streak: 4,  done: false, progress: 0, max: 1 },
    { id: 'water',    name: 'Water',      icon: '💧', color: 'sky',      streak: 7,  done: true,  progress: 6, max: 8 },
    { id: 'journal',  name: 'Journal',    icon: '📓', color: 'earth',    streak: 0,  done: false, progress: 0, max: 1 },
    { id: 'social',   name: 'Social',     icon: '💬', color: 'gold',     streak: 3,  done: true,  progress: 1, max: 1 },
    { id: 'mindful',  name: 'Mindful',    icon: '🧘', color: 'terra',    streak: 2,  done: false, progress: 0, max: 1 },
  ]);

  const toggle = (id) => setHabits(hs => hs.map(h => h.id === id ? { ...h, done: !h.done } : h));
  const doneCount = habits.filter(h => h.done).length;

  return React.createElement(ScreenWrapper, { nav, active: 'habits' },
    // ── Header ──────────────────────────────────────────────
    React.createElement('div', { style: { padding: '20px 20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' } },
      React.createElement('div', null,
        React.createElement('p', { style: { fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', fontWeight: 500, marginBottom: 2 } }, "Today's progress"),
        React.createElement('h1', { style: { fontSize: 'var(--text-xl)', fontWeight: 700, color: 'var(--color-text-primary)' } }, 'Your habits')
      ),
      React.createElement(StreakBadge, { count: 12, size: 'sm' })
    ),

    // ── Progress Summary ─────────────────────────────────────
    React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: 16, padding: '20px 20px 16px', background: '#fff', margin: '16px 20px', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-sm)' } },
      React.createElement(ProgressRing, {
        value: doneCount, max: habits.length,
        color: doneCount >= 4 ? 'green' : doneCount >= 2 ? 'gold' : 'terra',
        size: 72, strokeWidth: 5,
        label: `${doneCount}/${habits.length}`,
        sublabel: 'done',
      }),
      React.createElement('div', null,
        React.createElement('h2', { style: { fontSize: 'var(--text-lg)', fontWeight: 700, color: 'var(--color-text-primary)' } },
          doneCount === habits.length ? 'All done! 🎉' : `${doneCount} of ${habits.length} tended today`
        ),
        React.createElement('p', { style: { fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', marginTop: 4 } },
          doneCount < habits.length
            ? `${habits.length - doneCount} more habit${habits.length - doneCount > 1 ? 's' : ''} to grow your bonsai`
            : 'Your bonsai is thriving today'
        )
      )
    ),

    // ── Habit Grid ───────────────────────────────────────────
    React.createElement('div', { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, padding: '0 20px 24px' } },
      habits.map(h => React.createElement(HabitCard, {
        key: h.id,
        name: h.name,
        icon: h.icon,
        color: h.color,
        streak: h.streak,
        completed: h.done,
        progress: h.done ? h.max : h.progress,
        progressMax: h.max,
        size: 'md',
        onToggle: () => toggle(h.id),
      }))
    )
  );
}

Object.assign(window, { HabitsScreen });
