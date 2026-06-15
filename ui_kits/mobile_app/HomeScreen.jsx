// HomeScreen.jsx — faithful port of the real Whimsical Intuition App HomeScreen

function HomeScreen({ nav }) {
  const { BonsaiTree } = window;
  const { ScreenWrapper } = window;

  const V = "#a78bfa", SAGE = "#34d399", BLUE = "#60a5fa", PLUM = "#c084fc";
  const MUTED = "#7e72a8", FG = "#e4dff5", CARD = "#17122a", RAISED = "#1e1836";

  const r = 52, circ = 2 * Math.PI * r, score = 87, filled = circ * (score / 100);

  const categories = [
    { label: "Academic",  value: 78, color: BLUE },
    { label: "Wellbeing", value: 65, color: V },
    { label: "Social",    value: 52, color: PLUM },
    { label: "Physical",  value: 84, color: SAGE },
  ];

  const upNext = [
    { time: "3:00 PM", label: "AP Calculus review", sub: "Charlotte R.", color: BLUE },
    { time: "5:30 PM", label: "Volleyball Practice", sub: "Main Gymnasium", color: SAGE },
  ];

  return (
    <ScreenWrapper nav={nav} active="home">
      <div style={{ display: "flex", flexDirection: "column", gap: 16, paddingBottom: 16 }}>

        {/* Greeting */}
        <div style={{ padding: "20px 20px 0" }}>
          <p style={{ fontSize: "0.75rem", fontWeight: 500, color: MUTED, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 4 }}>
            Wednesday, May 14
          </p>
          <h1 style={{ fontFamily: "Fraunces, serif", fontWeight: 300, fontSize: "1.6rem", color: FG, lineHeight: 1.25, margin: 0 }}>
            Good morning, Ava 🌿
          </h1>
        </div>

        {/* Balance card */}
        <div style={{ margin: "0 16px", background: CARD, borderRadius: 20, padding: 20, border: "1px solid rgba(167,139,250,0.1)" }}>
          <p style={{ fontSize: "0.6875rem", fontWeight: 600, color: MUTED, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>
            Daily Balance
          </p>
          <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
            {/* Ring */}
            <div style={{ position: "relative", width: 130, height: 130, flexShrink: 0 }}>
              <svg width="130" height="130" viewBox="0 0 130 130">
                <circle cx="65" cy="65" r={r} fill="none" stroke="rgba(167,139,250,0.08)" strokeWidth="10" />
                <circle cx="65" cy="65" r={r} fill="none" stroke="url(#ringGrad)" strokeWidth="10"
                  strokeDasharray={`${filled} ${circ}`} strokeLinecap="round" transform="rotate(-90 65 65)" />
                <defs>
                  <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#a78bfa" />
                    <stop offset="100%" stopColor="#34d399" />
                  </linearGradient>
                </defs>
                <text x="65" y="60" textAnchor="middle" fill={FG} fontSize="26" fontFamily="Fraunces, serif" fontWeight="400">{score}</text>
                <text x="65" y="76" textAnchor="middle" fill={MUTED} fontSize="10" fontFamily="DM Sans, sans-serif" fontWeight="500">balance</text>
              </svg>
            </div>
            {/* Bars */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
              {categories.map(c => (
                <div key={c.label}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                    <span style={{ fontSize: "0.75rem", color: MUTED }}>{c.label}</span>
                    <span style={{ fontSize: "0.75rem", fontWeight: 500, color: FG }}>{c.value}%</span>
                  </div>
                  <div style={{ height: 5, borderRadius: 99, background: "rgba(167,139,250,0.1)" }}>
                    <div style={{ height: "100%", width: `${c.value}%`, borderRadius: 99, background: c.color }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p style={{ fontFamily: "Fraunces, serif", fontSize: "0.875rem", fontStyle: "italic", color: MUTED, marginTop: 16, lineHeight: 1.6 }}>
            Progress is not about doing more — it's about growing in the right direction. 🌱
          </p>
        </div>

        {/* Up next */}
        <div style={{ padding: "0 16px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
            <p style={{ fontSize: "0.6875rem", fontWeight: 600, color: MUTED, letterSpacing: "0.1em", textTransform: "uppercase" }}>Up next</p>
            <button style={{ background: "none", border: "none", cursor: "pointer", color: V, fontSize: "0.75rem", padding: 0 }}>View all ›</button>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {upNext.map(t => (
              <div key={t.label} style={{ background: CARD, borderRadius: 14, padding: "12px 16px", display: "flex", alignItems: "center", gap: 12, border: "1px solid rgba(167,139,250,0.08)" }}>
                <div style={{ width: 3, height: 36, borderRadius: 99, background: t.color, flexShrink: 0 }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "0.875rem", fontWeight: 500, color: FG }}>{t.label}</div>
                  <div style={{ fontSize: "0.75rem", color: MUTED }}>{t.sub}</div>
                </div>
                <span style={{ fontSize: "0.75rem", color: MUTED }}>{t.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bonsai preview */}
        <div style={{ margin: "0 16px", background: "linear-gradient(135deg, rgba(23,18,42,1) 0%, rgba(30,24,54,1) 100%)", borderRadius: 20, padding: "18px 20px", border: "1px solid rgba(52,211,153,0.15)", display: "flex", alignItems: "center", gap: 16 }}>
          <BonsaiTree level={3} size={0.7} />
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
              <span style={{ fontSize: "0.6875rem", fontWeight: 600, color: MUTED, letterSpacing: "0.1em", textTransform: "uppercase" }}>Your bonsai</span>
              <span style={{ background: "rgba(52,211,153,0.15)", color: SAGE, borderRadius: 99, padding: "2px 8px", fontSize: "0.6875rem", fontWeight: 600 }}>🌿 251</span>
            </div>
            <p style={{ fontFamily: "Fraunces, serif", fontSize: "1rem", fontWeight: 400, color: FG, lineHeight: 1.4, margin: "0 0 6px" }}>Level 3 · Growing steadily</p>
            <p style={{ fontSize: "0.75rem", color: MUTED, lineHeight: 1.5, margin: 0 }}>Your bonsai grew a new branch today. Keep tending.</p>
          </div>
        </div>

        {/* Tree tip */}
        <div style={{ margin: "0 16px", background: RAISED, borderRadius: 16, padding: "14px 16px", display: "flex", gap: 10, alignItems: "flex-start", border: "1px solid rgba(167,139,250,0.08)" }}>
          <span style={{ color: PLUM, marginTop: 2, flexShrink: 0, fontSize: 15 }}>⚡</span>
          <div>
            <p style={{ fontSize: "0.6875rem", fontWeight: 600, color: PLUM, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4 }}>Tree tip</p>
            <p style={{ fontSize: "0.8125rem", color: MUTED, lineHeight: 1.5, margin: 0 }}>Even a bonsai rests in winter. One slow day won't undo your progress.</p>
          </div>
        </div>

      </div>
    </ScreenWrapper>
  );
}

Object.assign(window, { HomeScreen });
