// TodayScreen.jsx — port of real Whimsical Intuition App TodayScreen

function TodayScreen({ nav }) {
  const { ScreenWrapper } = window;
  const V = "#a78bfa", SAGE = "#34d399", BLUE = "#60a5fa", PLUM = "#c084fc";
  const MUTED = "#7e72a8", FG = "#e4dff5", CARD = "#17122a", RAISED = "#1e1836";

  const days  = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
  const dates = [12, 13, 14, 15, 16, 17, 18];
  const [activeDay, setActiveDay] = React.useState(2);

  const schedule = [
    { time: "8:00 AM",  label: "AP Calculus",        sub: "Charlotte R.",       color: BLUE,  duration: "1h 30m" },
    { time: "10:00 AM", label: "English Essay",       sub: "Collins & Barnes",   color: PLUM,  duration: "45m" },
    { time: "1:30 PM",  label: "Volleyball Practice", sub: "Main Gymnasium",     color: SAGE,  duration: "2h" },
    { time: "4:00 PM",  label: "Read for 30 min",     sub: "Habit · Wellbeing",  color: V,     duration: "30m" },
  ];

  return (
    <ScreenWrapper nav={nav} active="today">
      <div style={{ display: "flex", flexDirection: "column", gap: 20, paddingBottom: 16 }}>

        {/* Header */}
        <div style={{ padding: "20px 20px 0" }}>
          <p style={{ fontSize: "0.75rem", fontWeight: 500, color: MUTED, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 4 }}>Schedule</p>
          <h1 style={{ fontFamily: "Fraunces, serif", fontWeight: 300, fontSize: "1.6rem", color: FG, lineHeight: 1.25, margin: 0 }}>Today</h1>
        </div>

        {/* Week strip */}
        <div style={{ padding: "0 16px" }}>
          <div style={{ display: "flex", gap: 6 }}>
            {days.map((d, i) => (
              <button key={d} onClick={() => setActiveDay(i)} style={{
                flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
                padding: "10px 0", borderRadius: 14, border: "none", cursor: "pointer",
                background: activeDay === i ? V : "transparent",
                transition: "background 200ms ease",
              }}>
                <span style={{ fontSize: "0.6875rem", fontWeight: 500, color: activeDay === i ? "#0e0b1a" : MUTED }}>{d}</span>
                <span style={{ fontSize: "0.875rem", fontWeight: activeDay === i ? 600 : 400, color: activeDay === i ? "#0e0b1a" : FG }}>{dates[i]}</span>
                <div style={{ width: 5, height: 5, borderRadius: 99, background: i === 2 && activeDay !== i ? SAGE : activeDay === i ? "rgba(14,11,26,0.4)" : "transparent" }} />
              </button>
            ))}
          </div>
        </div>

        {/* Schedule list */}
        <div style={{ padding: "0 16px", display: "flex", flexDirection: "column", gap: 10 }}>
          {schedule.map((item, i) => (
            <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
              <div style={{ width: 64, flexShrink: 0, paddingTop: 14 }}>
                <span style={{ fontSize: "0.6875rem", color: MUTED }}>{item.time}</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 14 }}>
                <div style={{ width: 10, height: 10, borderRadius: 99, background: item.color, flexShrink: 0 }} />
                {i < schedule.length - 1 && <div style={{ width: 1.5, flex: 1, background: "rgba(167,139,250,0.12)", marginTop: 4, minHeight: 40 }} />}
              </div>
              <div style={{ flex: 1, background: CARD, borderRadius: 14, padding: "12px 14px", border: `1px solid ${item.color}18`, marginBottom: 4 }}>
                <div style={{ fontSize: "0.9rem", fontWeight: 500, color: FG }}>{item.label}</div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 3 }}>
                  <span style={{ fontSize: "0.75rem", color: MUTED }}>{item.sub}</span>
                  <span style={{ fontSize: "0.75rem", color: item.color }}>{item.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* AI plan card */}
        <div style={{ margin: "0 16px", background: "linear-gradient(135deg, rgba(167,139,250,0.12), rgba(52,211,153,0.08))", borderRadius: 20, padding: 18, border: "1px solid rgba(167,139,250,0.2)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
            <span style={{ color: V, fontSize: 15 }}>✦</span>
            <span style={{ fontSize: "0.6875rem", fontWeight: 600, color: V, letterSpacing: "0.08em", textTransform: "uppercase" }}>AI plan for today</span>
          </div>
          <p style={{ fontSize: "0.875rem", color: FG, lineHeight: 1.6, margin: "0 0 12px" }}>
            You have a big afternoon. Try your hardest task at 10 AM when your focus is sharpest, then let volleyball be your reset.
          </p>
          <button style={{ background: V, color: "#0e0b1a", borderRadius: 99, padding: "8px 20px", fontFamily: "DM Sans, sans-serif", fontSize: "0.8125rem", fontWeight: 600, border: "none", cursor: "pointer" }}>
            Apply plan
          </button>
        </div>

      </div>
    </ScreenWrapper>
  );
}

Object.assign(window, { TodayScreen });
