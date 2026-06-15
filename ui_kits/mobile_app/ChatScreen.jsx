// ChatScreen.jsx — port of real Whimsical Intuition App ChatScreen

function ChatScreen({ nav }) {
  const { ScreenWrapper } = window;
  const V = "#a78bfa", SAGE = "#34d399";
  const MUTED = "#7e72a8", FG = "#e4dff5", CARD = "#17122a", RAISED = "#1e1836";

  const [messages, setMessages] = React.useState([
    { from: "ai",   text: "Hey, I noticed you've been keeping your streak going for the past 3 days. That's real — how's it feeling?" },
    { from: "user", text: "Honestly pretty good but I'm stressed about the calc test tomorrow" },
    { from: "ai",   text: "That's completely understandable. Let's take a look at your week and see what we can shift around. Want to talk about it?" },
  ]);
  const [input,   setInput]   = React.useState("");
  const [focused, setFocused] = React.useState(false);
  const bottomRef = React.useRef(null);

  const aiReplies = [
    "I hear you. What's the part that feels most uncertain right now?",
    "That makes sense given your week. One thing at a time — what would help most right now?",
    "You're doing more than you think. Want me to help you map out a plan?",
    "Even a bonsai rests in winter. It's okay to slow down today.",
  ];

  const suggestions = ["Suggestions for me", "Study Smart", "Reach Out", "Kindness Challenge"];

  React.useEffect(() => {
    if (bottomRef.current) bottomRef.current.scrollIntoView({ behavior: "auto" });
  }, [messages]);

  function send(text) {
    const msg = text ?? input.trim();
    if (!msg) return;
    setMessages(prev => [...prev, { from: "user", text: msg }]);
    setInput("");
    setTimeout(() => {
      setMessages(prev => [...prev, { from: "ai", text: aiReplies[Math.floor(Math.random() * aiReplies.length)] }]);
    }, 900);
  }

  // LeafIcon inline SVG
  const Leaf = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={SAGE} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
    </svg>
  );

  const SendIcon = (active) => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={active ? "#0e0b1a" : MUTED} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
    </svg>
  );

  return (
    <ScreenWrapper nav={nav} active="chat" scrollable={false}>
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>

        {/* Header */}
        <div style={{ padding: "20px 20px 16px", borderBottom: "1px solid rgba(167,139,250,0.08)", display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
          <div style={{ width: 38, height: 38, borderRadius: 99, background: "linear-gradient(135deg, rgba(167,139,250,0.3), rgba(52,211,153,0.2))", border: `1.5px solid ${V}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Leaf />
          </div>
          <div>
            <div style={{ fontSize: "0.9375rem", fontWeight: 600, color: FG }}>BonsAI</div>
            <div style={{ fontSize: "0.6875rem", color: SAGE }}>● Online</div>
          </div>
        </div>

        {/* Messages */}
        <div style={{ flex: 1, overflowY: "auto", padding: "16px 16px 8px", display: "flex", flexDirection: "column", gap: 12 }}>
          {messages.map((m, i) => (
            <div key={i} style={{ display: "flex", justifyContent: m.from === "user" ? "flex-end" : "flex-start", gap: 8, alignItems: "flex-end" }}>
              {m.from === "ai" && (
                <div style={{ width: 28, height: 28, borderRadius: 99, background: "rgba(167,139,250,0.15)", border: `1px solid ${V}30`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginBottom: 2 }}>
                  <Leaf />
                </div>
              )}
              <div style={{
                maxWidth: "75%", padding: "10px 14px",
                borderRadius: m.from === "user" ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
                background: m.from === "user" ? V : CARD,
                color: m.from === "user" ? "#0e0b1a" : FG,
                fontSize: "0.875rem", lineHeight: 1.55,
                border: m.from === "ai" ? "1px solid rgba(167,139,250,0.1)" : "none",
                fontFamily: "DM Sans, sans-serif",
              }}>
                {m.text}
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Suggestions */}
        <div style={{ padding: "8px 16px", display: "flex", gap: 8, overflowX: "auto", flexShrink: 0 }}>
          {suggestions.map(s => (
            <button key={s} onClick={() => send(s)} style={{ background: RAISED, color: MUTED, borderRadius: 99, padding: "6px 14px", fontSize: "0.75rem", fontWeight: 500, border: "1px solid rgba(167,139,250,0.1)", cursor: "pointer", whiteSpace: "nowrap", flexShrink: 0, fontFamily: "DM Sans, sans-serif" }}>{s}</button>
          ))}
        </div>

        {/* Input */}
        <div style={{ padding: "8px 16px 16px", flexShrink: 0 }}>
          <div style={{ display: "flex", gap: 10, alignItems: "center", background: CARD, borderRadius: 99, padding: "8px 8px 8px 18px", border: focused ? `1.5px solid ${V}` : "1.5px solid rgba(167,139,250,0.12)", transition: "border-color 200ms ease", boxShadow: focused ? `0 0 0 3px rgba(167,139,250,0.1)` : "none" }}>
            <input value={input} onChange={e => setInput(e.target.value)} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} onKeyDown={e => e.key === "Enter" && send()} placeholder="What's on your mind?"
              style={{ flex: 1, background: "transparent", border: "none", outline: "none", fontFamily: "DM Sans, sans-serif", fontSize: "0.875rem", color: FG }} />
            <button onClick={() => send()} style={{ width: 36, height: 36, borderRadius: 99, background: input.trim() ? V : "rgba(167,139,250,0.1)", border: "none", cursor: input.trim() ? "pointer" : "default", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 200ms ease", flexShrink: 0 }}>
              {SendIcon(!!input.trim())}
            </button>
          </div>
        </div>

      </div>
    </ScreenWrapper>
  );
}

Object.assign(window, { ChatScreen });
