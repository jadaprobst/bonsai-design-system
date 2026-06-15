// AppShared.jsx — dark theme nav + ScreenWrapper for BonsAI UI kit

// Lucide-style icon SVGs matching the real app
const HomeIcon    = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>;
const CalendarIcon= () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><circle cx="8" cy="14" r="1" fill="currentColor"/><circle cx="12" cy="14" r="1" fill="currentColor"/><circle cx="16" cy="14" r="1" fill="currentColor"/></svg>;
const HeartIcon   = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>;
const ChatIcon    = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>;
const ChartIcon   = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>;

const tabs = [
  { id: 'home',     icon: HomeIcon,     label: 'Home' },
  { id: 'today',    icon: CalendarIcon, label: 'Today' },
  { id: 'checkin',  icon: HeartIcon,    label: 'Check in' },
  { id: 'chat',     icon: ChatIcon,     label: 'BonsAI' },
  { id: 'insights', icon: ChartIcon,    label: 'Insights' },
];

function BottomNav({ active, nav }) {
  return (
    <div style={{
      height: 80, flexShrink: 0,
      background: '#17122a',
      borderTop: '1px solid rgba(167,139,250,0.08)',
      display: 'flex', alignItems: 'center',
      padding: '0 8px 16px',
      position: 'relative',
    }}>
      {tabs.map(t => {
        const isActive = active === t.id;
        return (
          <button key={t.id} onClick={() => nav(t.id)} style={{
            flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
            padding: '8px 4px', background: 'none', border: 'none', cursor: 'pointer',
            color: isActive ? '#a78bfa' : '#7e72a8',
            transition: 'color 200ms ease',
            position: 'relative',
          }}>
            <div style={{ transition: 'transform 200ms ease', transform: isActive ? 'scale(1.1)' : 'scale(1)' }}>
              <t.icon />
            </div>
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.625rem', fontWeight: isActive ? 600 : 400, letterSpacing: '0.02em' }}>
              {t.label}
            </span>
            {isActive && <div style={{ width: 16, height: 2, borderRadius: 99, background: '#a78bfa', position: 'absolute', bottom: -8 }} />}
          </button>
        );
      })}
    </div>
  );
}

function ScreenWrapper({ children, nav, active, scrollable = true }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#0e0b1a', overflow: 'hidden', fontFamily: 'DM Sans, sans-serif' }}>
      <div style={{ flex: 1, overflowY: scrollable ? 'auto' : 'hidden', overflowX: 'hidden', WebkitOverflowScrolling: 'touch' }}>
        {children}
      </div>
      <BottomNav active={active} nav={nav} />
    </div>
  );
}

Object.assign(window, { BottomNav, ScreenWrapper });
