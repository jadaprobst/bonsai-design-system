// InsightsScreen.jsx — port of real app, SVG area chart (no recharts)

function InsightsScreen({ nav }) {
  const { ScreenWrapper } = window;
  const V = "#a78bfa", SAGE = "#34d399", BLUE = "#60a5fa", PLUM = "#c084fc";
  const MUTED = "#7e72a8", FG = "#e4dff5", CARD = "#17122a";

  const balanceData = [
    { day:"M", score:72 }, { day:"T", score:68 }, { day:"W", score:74 },
    { day:"T", score:65 }, { day:"F", score:80 }, { day:"S", score:87 }, { day:"S", score:84 },
  ];

  const strengths = [
    { label:"Personal Growth",    sub:"You've been journaling for 9 days straight", icon:"🌱", color:SAGE },
    { label:"Physical Health",    sub:"3 workouts this week — your best yet",        icon:"⚡", color:BLUE },
    { label:"Sleep Consistency",  sub:"Averaging 7.8 hrs, up from 6.2 last week",   icon:"🌙", color:V },
  ];
  const attention = [
    { label:"Social Connection", sub:"No friend check-ins in 5 days",                     icon:"💬", color:PLUM },
    { label:"Screen Time",       sub:"Up 40% since Monday — want to set a limit?",         icon:"📱", color:"#f87171" },
  ];

  // Simple SVG area chart (no recharts)
  function AreaChart({ data, color, width=280, height=110 }) {
    const minV = 55, maxV = 100;
    const pts = data.map((d, i) => ({
      x: (i / (data.length - 1)) * width,
      y: height - ((d.score - minV) / (maxV - minV)) * (height - 10) - 4,
      day: d.day, score: d.score,
    }));
    const line = pts.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
    const area = `0,${height} ${line} ${width},${height}`;
    const gradId = "aGrad_" + color.replace("#","");
    return (
      <svg width={width} height={height} style={{ overflow: "visible" }}>
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor={color} stopOpacity={0.35} />
            <stop offset="100%" stopColor={color} stopOpacity={0.02} />
          </linearGradient>
        </defs>
        {/* Grid lines */}
        {[0,0.33,0.66,1].map((f,i) => (
          <line key={i} x1={0} y1={height * f} x2={width} y2={height * f} stroke="rgba(167,139,250,0.06)" strokeWidth="1" />
        ))}
        <polygon points={area} fill={`url(#${gradId})`} />
        <polyline points={line} fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        {pts.map((p, i) => <circle key={i} cx={p.x} cy={p.y} r={3} fill={color} />)}
        {/* X labels */}
        {pts.map((p, i) => (
          <text key={i} x={p.x} y={height + 14} textAnchor="middle" fill={MUTED} fontSize="11" fontFamily="DM Sans, sans-serif">{p.day}</text>
        ))}
      </svg>
    );
  }

  return (
    <ScreenWrapper nav={nav} active="insights">
      <div style={{ display: "flex", flexDirection: "column", gap: 20, paddingBottom: 16 }}>

        {/* Header */}
        <div style={{ padding: "20px 20px 0" }}>
          <p style={{ fontSize: "0.75rem", fontWeight: 500, color: MUTED, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 4 }}>Weekly</p>
          <h1 style={{ fontFamily: "Fraunces, serif", fontWeight: 300, fontSize: "1.6rem", color: FG, lineHeight: 1.25, margin: 0 }}>Insights</h1>
        </div>

        {/* Chart */}
        <div style={{ margin: "0 16px", background: CARD, borderRadius: 20, padding: "20px 16px 28px", border: "1px solid rgba(167,139,250,0.08)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
            <div>
              <p style={{ fontSize: "0.6875rem", fontWeight: 600, color: MUTED, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Balance over time</p>
              <div style={{ display: "flex", gap: 8 }}>
                {["Week","Month","Year"].map((l, i) => (
                  <button key={l} style={{ fontSize: "0.75rem", fontWeight: i===0 ? 600 : 400, color: i===0 ? V : MUTED, background: i===0 ? "rgba(167,139,250,0.12)" : "transparent", borderRadius: 99, padding: "3px 12px", border: "none", cursor: "pointer", fontFamily: "DM Sans, sans-serif" }}>{l}</button>
                ))}
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontFamily: "Fraunces, serif", fontSize: "1.5rem", fontWeight: 400, color: FG }}>87</div>
              <div style={{ fontSize: "0.6875rem", color: SAGE }}>↑ +9 this week</div>
            </div>
          </div>
          <AreaChart data={balanceData} color={V} />
        </div>

        {/* Top strengths */}
        <div style={{ padding: "0 16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <span style={{ color: SAGE, fontSize: 14 }}>★</span>
            <p style={{ fontSize: "0.6875rem", fontWeight: 600, color: MUTED, letterSpacing: "0.1em", textTransform: "uppercase" }}>Top strengths</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {strengths.map((s, i) => (
              <div key={i} style={{ background: CARD, borderRadius: 14, padding: "13px 16px", display: "flex", alignItems: "center", gap: 12, border: "1px solid rgba(167,139,250,0.07)" }}>
                <span style={{ fontSize: "1.25rem", flexShrink: 0 }}>{s.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "0.875rem", fontWeight: 500, color: FG }}>{s.label}</div>
                  <div style={{ fontSize: "0.75rem", color: MUTED, marginTop: 2 }}>{s.sub}</div>
                </div>
                <div style={{ width: 8, height: 8, borderRadius: 99, background: s.color, flexShrink: 0 }} />
              </div>
            ))}
          </div>
        </div>

        {/* Needs attention */}
        <div style={{ padding: "0 16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <span style={{ color: PLUM, fontSize: 14 }}>!</span>
            <p style={{ fontSize: "0.6875rem", fontWeight: 600, color: MUTED, letterSpacing: "0.1em", textTransform: "uppercase" }}>Needs attention</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {attention.map((a, i) => (
              <div key={i} style={{ background: CARD, borderRadius: 14, padding: "13px 16px", display: "flex", alignItems: "center", gap: 12, border: `1px solid ${a.color}20` }}>
                <span style={{ fontSize: "1.25rem", flexShrink: 0 }}>{a.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "0.875rem", fontWeight: 500, color: FG }}>{a.label}</div>
                  <div style={{ fontSize: "0.75rem", color: MUTED, marginTop: 2 }}>{a.sub}</div>
                </div>
                <button style={{ background: `${a.color}18`, color: a.color, border: "none", borderRadius: 99, padding: "4px 12px", fontFamily: "DM Sans, sans-serif", fontSize: "0.6875rem", fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap" }}>Tend it</button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </ScreenWrapper>
  );
}

Object.assign(window, { InsightsScreen });
