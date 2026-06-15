// CheckInScreen.jsx — port of real Whimsical Intuition App CheckInScreen

function CheckInScreen({ nav }) {
  const { ScreenWrapper } = window;
  const V = "#a78bfa", SAGE = "#34d399", BLUE = "#60a5fa";
  const MUTED = "#7e72a8", FG = "#e4dff5", CARD = "#17122a", RAISED = "#1e1836";

  const moods = [
    { emoji: "😞", label: "Low",   value: 1 },
    { emoji: "😕", label: "Meh",   value: 2 },
    { emoji: "😐", label: "Okay",  value: 3 },
    { emoji: "🙂", label: "Good",  value: 4 },
    { emoji: "😄", label: "Great", value: 5 },
  ];

  const [mood,    setMood]    = React.useState(4);
  const [energy,  setEnergy]  = React.useState(7);
  const [stress,  setStress]  = React.useState(4);
  const [moodVal, setMoodVal] = React.useState(6);
  const [saved,   setSaved]   = React.useState(false);

  const selectedMood = moods.find(m => m.value === mood);

  function handleSave() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  function Slider({ label, value, onChange, color }) {
    return (
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
          <span style={{ fontSize: "0.875rem", fontWeight: 500, color: FG }}>{label}</span>
          <span style={{ fontSize: "0.875rem", color: MUTED }}>{value}/10</span>
        </div>
        <div style={{ position: "relative", height: 6, borderRadius: 99, background: "rgba(167,139,250,0.1)" }}>
          <div style={{ position: "absolute", left: 0, top: 0, height: "100%", width: `${value * 10}%`, borderRadius: 99, background: color, transition: "width 100ms" }} />
          <input type="range" min={0} max={10} value={value} onChange={e => onChange(+e.target.value)}
            style={{ position: "absolute", inset: 0, width: "100%", opacity: 0, cursor: "pointer", height: "100%" }} />
          <div style={{ position: "absolute", top: "50%", left: `${value * 10}%`, transform: "translate(-50%, -50%)", width: 18, height: 18, borderRadius: 99, background: color, border: "2px solid #0e0b1a", boxShadow: `0 0 8px ${color}60`, pointerEvents: "none" }} />
        </div>
      </div>
    );
  }

  return (
    <ScreenWrapper nav={nav} active="checkin">
      <div style={{ display: "flex", flexDirection: "column", gap: 24, paddingBottom: 16 }}>

        {/* Header */}
        <div style={{ padding: "20px 20px 0" }}>
          <p style={{ fontSize: "0.75rem", fontWeight: 500, color: MUTED, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 4 }}>Daily</p>
          <h1 style={{ fontFamily: "Fraunces, serif", fontWeight: 300, fontSize: "1.6rem", color: FG, lineHeight: 1.25, margin: 0 }}>Check in</h1>
        </div>

        {/* Mood question */}
        <div style={{ padding: "0 16px" }}>
          <p style={{ fontFamily: "Fraunces, serif", fontSize: "1.1rem", color: FG, marginBottom: 20, lineHeight: 1.5 }}>
            How are you feeling right now?
          </p>
          {/* Big mood display */}
          <div style={{ background: CARD, borderRadius: 20, padding: "24px 20px", textAlign: "center", marginBottom: 16, border: "1px solid rgba(167,139,250,0.1)" }}>
            <div style={{ fontSize: "3.5rem", marginBottom: 8, lineHeight: 1 }}>{selectedMood.emoji}</div>
            <div style={{ fontFamily: "Fraunces, serif", fontSize: "1.25rem", color: FG, marginBottom: 4 }}>{selectedMood.label}</div>
            <div style={{ fontSize: "0.75rem", color: MUTED }}>
              {mood >= 4 ? "You've got this 🌿" : mood === 3 ? "That's okay. We're here." : "Let's tend to that."}
            </div>
          </div>
          {/* Mood picker row */}
          <div style={{ display: "flex", gap: 8, justifyContent: "space-between" }}>
            {moods.map(m => (
              <button key={m.value} onClick={() => setMood(m.value)} style={{
                flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 5,
                padding: "10px 4px", borderRadius: 14, border: "none", cursor: "pointer",
                background: mood === m.value ? "rgba(167,139,250,0.15)" : RAISED,
                outline: mood === m.value ? `1.5px solid ${V}` : "none",
                transition: "all 180ms ease",
              }}>
                <span style={{ fontSize: mood === m.value ? "1.5rem" : "1.25rem", transition: "font-size 180ms" }}>{m.emoji}</span>
                <span style={{ fontSize: "0.6rem", fontWeight: 500, color: mood === m.value ? V : MUTED }}>{m.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Sliders */}
        <div style={{ margin: "0 16px", background: CARD, borderRadius: 20, padding: 20, display: "flex", flexDirection: "column", gap: 22, border: "1px solid rgba(167,139,250,0.08)" }}>
          <Slider label="Energy" value={energy} onChange={setEnergy} color={SAGE} />
          <Slider label="Stress" value={stress} onChange={setStress} color="#f87171" />
          <Slider label="Mood"   value={moodVal} onChange={setMoodVal} color={V} />
        </div>

        {/* Save button */}
        <div style={{ padding: "0 16px" }}>
          <button onClick={handleSave} style={{
            width: "100%", background: saved ? SAGE : V, color: "#0e0b1a", borderRadius: 99,
            padding: "15px 24px", fontSize: "0.9375rem", fontWeight: 600,
            border: "none", cursor: "pointer", transition: "background 300ms ease",
            display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
            fontFamily: "DM Sans, sans-serif",
          }}>
            {saved ? "✓ Saved" : "Save check-in"}
          </button>
          {saved && <p style={{ textAlign: "center", fontSize: "0.8125rem", color: SAGE, marginTop: 10 }}>Your bonsai noticed 🌿</p>}
        </div>

      </div>
    </ScreenWrapper>
  );
}

Object.assign(window, { CheckInScreen });
