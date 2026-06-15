// AppCoreComponents.jsx — Button, Card, Badge, Input, Avatar, Tag, MoodSelector, ProgressRing, Toast
// Self-contained for UI kit (no _ds_bundle.js dependency)

function Button({ children, variant='primary', size='md', disabled=false, loading=false, fullWidth=false, leftIcon=null, rightIcon=null, onClick, type='button', style }) {
  const sizes = { xs:{fontSize:'var(--text-xs)',padding:'var(--space-1) var(--space-3)',minHeight:'28px'}, sm:{fontSize:'var(--text-sm)',padding:'var(--space-2) var(--space-4)',minHeight:'36px'}, md:{fontSize:'var(--text-base)',padding:'var(--space-3) var(--space-5)',minHeight:'44px'}, lg:{fontSize:'var(--text-md)',padding:'var(--space-4) var(--space-7)',minHeight:'52px'} };
  const variants = { primary:{background:'var(--color-interactive)',color:'#fff',borderColor:'var(--color-interactive)',boxShadow:'var(--shadow-button-primary)'}, secondary:{background:'transparent',color:'var(--color-interactive)',borderColor:'var(--color-border-brand)'}, ghost:{background:'transparent',color:'var(--color-text-brand)',borderColor:'transparent'}, soft:{background:'var(--color-bg-brand)',color:'var(--color-interactive)',borderColor:'transparent'}, danger:{background:'var(--color-error)',color:'#fff',borderColor:'var(--color-error)'}, 'danger-ghost':{background:'transparent',color:'var(--color-error)',borderColor:'transparent'} };
  const Spinner = () => React.createElement('svg',{width:16,height:16,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:2.5,style:{animation:'bonsai-spin .8s linear infinite',flexShrink:0}},React.createElement('circle',{cx:12,cy:12,r:10,strokeOpacity:.25}),React.createElement('path',{d:'M12 2a10 10 0 0 1 10 10',strokeLinecap:'round'}));
  const base = { display:'inline-flex',alignItems:'center',justifyContent:'center',gap:'8px',fontFamily:'var(--font-sans)',fontWeight:'var(--font-semibold)',letterSpacing:'var(--tracking-wide)',borderRadius:'var(--radius-button)',border:'1.5px solid transparent',cursor:disabled||loading?'not-allowed':'pointer',transition:'var(--transition-color),box-shadow var(--duration-normal) var(--ease-out),transform var(--duration-fast) var(--ease-out)',whiteSpace:'nowrap',width:fullWidth?'100%':'auto',opacity:disabled?0.55:1,userSelect:'none',outline:'none' };
  return React.createElement('button',{type,disabled:disabled||loading,onClick,style:{...base,...sizes[size],...variants[variant],...style},onMouseEnter:e=>{if(!disabled&&!loading&&variant==='primary')e.currentTarget.style.background='var(--color-interactive-hover)'},onMouseLeave:e=>{if(!disabled&&!loading)e.currentTarget.style.background=variants[variant]?.background||''},onMouseDown:e=>{if(!disabled&&!loading)e.currentTarget.style.transform='scale(0.96)'},onMouseUp:e=>{e.currentTarget.style.transform='scale(1)'},onFocus:e=>{e.currentTarget.style.boxShadow='var(--shadow-focus-brand)'},onBlur:e=>{e.currentTarget.style.boxShadow=variants[variant]?.boxShadow||'none'}},loading&&React.createElement(Spinner),leftIcon&&!loading&&React.createElement('span',{style:{display:'flex',alignItems:'center'}},leftIcon),children,rightIcon&&React.createElement('span',{style:{display:'flex',alignItems:'center'}},rightIcon));
}

function Card({ children, variant='default', padding='md', radius='card', as:Tag='div', onClick, style }) {
  const variants = { default:{background:'var(--color-bg-surface)',boxShadow:'var(--shadow-card)',border:'none'}, elevated:{background:'var(--color-bg-surface)',boxShadow:'var(--shadow-lg)',border:'none'}, bordered:{background:'var(--color-bg-surface)',boxShadow:'var(--shadow-xs)',border:'1.5px solid var(--color-border)'}, muted:{background:'var(--color-bg-muted)',boxShadow:'none',border:'none'}, brand:{background:'var(--color-bg-brand)',boxShadow:'none',border:'1.5px solid var(--color-border-brand)'} };
  const paddings = { none:'0', sm:'var(--padding-card-sm)', md:'var(--padding-card-md)', lg:'var(--padding-card-lg)' };
  const radii = { card:'var(--radius-card)', 'card-inner':'var(--radius-card-inner)', lg:'var(--radius-lg)', xl:'var(--radius-xl)' };
  return React.createElement(Tag,{onClick,style:{...variants[variant],borderRadius:radii[radius]||radii.card,padding:paddings[padding],position:'relative',overflow:'hidden',cursor:onClick?'pointer':'default',...style}},children);
}

function Badge({ children, color='green', size='md', dot=false, style }) {
  const colors = { green:{bg:'var(--color-green-100)',text:'var(--color-green-700)',dot:'var(--color-green-500)'}, sage:{bg:'var(--color-brand-light)',text:'var(--color-brand-mid)',dot:'var(--color-brand)'}, gold:{bg:'var(--color-gold-100)',text:'var(--color-gold-700)',dot:'var(--color-gold-500)'}, terra:{bg:'var(--color-terra-100)',text:'var(--color-terra-600)',dot:'var(--color-terra-500)'}, lavender:{bg:'var(--color-lavender-100)',text:'var(--color-lavender-600)',dot:'var(--color-lavender-500)'}, sky:{bg:'var(--color-sky-100)',text:'var(--color-sky-600)',dot:'var(--color-sky-500)'}, earth:{bg:'var(--color-earth-100)',text:'var(--color-earth-700)',dot:'var(--color-earth-500)'}, dark:{bg:'var(--color-earth-800)',text:'#fff',dot:'var(--color-green-400)'}, great:{bg:'var(--color-green-100)',text:'var(--color-green-700)',dot:'var(--color-wellness-great)'}, good:{bg:'var(--color-green-50)',text:'var(--color-green-600)',dot:'var(--color-wellness-good)'}, okay:{bg:'var(--color-gold-100)',text:'var(--color-gold-600)',dot:'var(--color-wellness-okay)'}, low:{bg:'var(--color-terra-50)',text:'var(--color-terra-500)',dot:'var(--color-wellness-low)'}, stressed:{bg:'var(--color-terra-100)',text:'var(--color-terra-600)',dot:'var(--color-wellness-stressed)'} };
  const sizes = { sm:{fontSize:'var(--text-2xs)',padding:'2px 8px',fontWeight:'var(--font-semibold)'}, md:{fontSize:'var(--text-xs)',padding:'4px 10px',fontWeight:'var(--font-medium)'}, lg:{fontSize:'var(--text-sm)',padding:'5px 12px',fontWeight:'var(--font-medium)'} };
  const c=colors[color]||colors.green, s=sizes[size]||sizes.md;
  return React.createElement('span',{style:{display:'inline-flex',alignItems:'center',gap:'5px',borderRadius:'var(--radius-badge)',background:c.bg,color:c.text,fontFamily:'var(--font-sans)',letterSpacing:'var(--tracking-wide)',lineHeight:1,whiteSpace:'nowrap',flexShrink:0,...s,...style}},dot&&React.createElement('span',{style:{width:6,height:6,borderRadius:'50%',background:c.dot,flexShrink:0}}),children);
}

function Input({ label, helper, error, leftIcon, rightIcon, size='md', disabled=false, id, style, containerStyle, ...rest }) {
  const [focused,setFocused]=React.useState(false);
  const inputId=id||(label?label.toLowerCase().replace(/\s+/g,'-'):undefined);
  const sizes = { sm:{fontSize:'var(--text-sm)',height:'36px'}, md:{fontSize:'var(--text-base)',height:'44px'}, lg:{fontSize:'var(--text-md)',height:'52px'} };
  const s=sizes[size]||sizes.md;
  const borderColor=error?'var(--color-error)':focused?'var(--color-border-focus)':'var(--color-border)';
  const boxShadow=error?(focused?'var(--shadow-focus-error)':'none'):(focused?'var(--shadow-focus-brand)':'none');
  return React.createElement('div',{style:{display:'flex',flexDirection:'column',gap:'6px',...containerStyle}},
    label&&React.createElement('label',{htmlFor:inputId,style:{fontFamily:'var(--font-sans)',fontSize:'var(--text-sm)',fontWeight:'var(--font-medium)',color:error?'var(--color-error)':'var(--color-text-secondary)',lineHeight:1}},label),
    React.createElement('div',{style:{position:'relative',display:'flex',alignItems:'center'}},
      leftIcon&&React.createElement('span',{style:{position:'absolute',left:'14px',display:'flex',alignItems:'center',color:'var(--color-text-muted)',pointerEvents:'none'}},leftIcon),
      React.createElement('input',{id:inputId,disabled,onFocus:()=>setFocused(true),onBlur:()=>setFocused(false),style:{width:'100%',height:s.height,fontFamily:'var(--font-sans)',fontSize:s.fontSize,color:'var(--color-text-primary)',background:disabled?'var(--color-bg-muted)':'var(--color-bg-surface)',border:`1.5px solid ${borderColor}`,borderRadius:'var(--radius-input)',padding:`0 ${rightIcon?'40px':'14px'} 0 ${leftIcon?'40px':'14px'}`,outline:'none',boxShadow,transition:'border-color var(--duration-fast) var(--ease-out),box-shadow var(--duration-fast) var(--ease-out)',cursor:disabled?'not-allowed':'text',opacity:disabled?0.6:1,...style},...rest}),
      rightIcon&&React.createElement('span',{style:{position:'absolute',right:'14px',display:'flex',alignItems:'center',color:'var(--color-text-muted)',pointerEvents:'none'}},rightIcon)
    ),
    (error||helper)&&React.createElement('p',{style:{margin:0,fontFamily:'var(--font-sans)',fontSize:'var(--text-xs)',color:error?'var(--color-error)':'var(--color-text-muted)'}},error||helper)
  );
}

function Avatar({ src, name, size='md', wellnessColor, showRing=false, style }) {
  const sizes={xs:{outer:28,inner:24,font:'var(--text-2xs)',ring:2},sm:{outer:36,inner:30,font:'var(--text-xs)',ring:2.5},md:{outer:44,inner:38,font:'var(--text-sm)',ring:3},lg:{outer:56,inner:48,font:'var(--text-base)',ring:3},xl:{outer:72,inner:62,font:'var(--text-lg)',ring:3.5},'2xl':{outer:96,inner:84,font:'var(--text-xl)',ring:4}};
  const s=sizes[size]||sizes.md;
  const initials=name?name.trim().split(/\s+/).slice(0,2).map(w=>w[0].toUpperCase()).join(''):'?';
  const wc={great:'var(--color-wellness-great)',good:'var(--color-wellness-good)',okay:'var(--color-wellness-okay)',low:'var(--color-wellness-low)',stressed:'var(--color-wellness-stressed)'};
  const ringColor=wellnessColor?(wc[wellnessColor]||wellnessColor):'var(--color-border-brand)';
  return React.createElement('div',{style:{width:s.outer+'px',height:s.outer+'px',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,background:showRing?`conic-gradient(${ringColor} 0deg,${ringColor} 270deg,var(--color-border) 270deg)`:'transparent',padding:showRing?s.ring+'px':'0',...style}},
    React.createElement('div',{style:{width:showRing?'100%':s.outer+'px',height:showRing?'100%':s.outer+'px',borderRadius:'50%',overflow:'hidden',background:'var(--color-earth-100)',display:'flex',alignItems:'center',justifyContent:'center',border:showRing?'2px solid var(--color-bg-surface)':'none',flexShrink:0}},
      src?React.createElement('img',{src,alt:name||'Avatar',style:{width:'100%',height:'100%',objectFit:'cover'}}):React.createElement('span',{style:{fontFamily:'var(--font-sans)',fontSize:s.font,fontWeight:'var(--font-semibold)',color:'var(--color-text-secondary)',lineHeight:1,userSelect:'none'}},initials)
    )
  );
}

function Tag({ children, color='earth', size='md', icon=null, removable=false, onRemove, onClick, active=false, style }) {
  const colors={earth:{bg:'var(--color-earth-100)',text:'var(--color-earth-700)',activeBg:'var(--color-earth-200)',border:'var(--color-earth-200)'},green:{bg:'var(--color-green-50)',text:'var(--color-green-700)',activeBg:'var(--color-green-100)',border:'var(--color-green-200)'},gold:{bg:'var(--color-gold-50)',text:'var(--color-gold-700)',activeBg:'var(--color-gold-100)',border:'var(--color-gold-200)'},terra:{bg:'var(--color-terra-50)',text:'var(--color-terra-600)',activeBg:'var(--color-terra-100)',border:'var(--color-terra-200)'},lavender:{bg:'var(--color-lavender-50)',text:'var(--color-lavender-600)',activeBg:'var(--color-lavender-100)',border:'var(--color-lavender-200)'},sky:{bg:'var(--color-sky-50)',text:'var(--color-sky-600)',activeBg:'var(--color-sky-100)',border:'var(--color-sky-200)'}};
  const sizes={sm:{fontSize:'var(--text-xs)',padding:'4px 10px',gap:'4px'},md:{fontSize:'var(--text-sm)',padding:'6px 12px',gap:'5px'},lg:{fontSize:'var(--text-base)',padding:'8px 14px',gap:'6px'}};
  const c=colors[color]||colors.earth,s=sizes[size]||sizes.md;
  return React.createElement('span',{onClick,style:{display:'inline-flex',alignItems:'center',gap:s.gap,borderRadius:'var(--radius-tag)',background:active?c.activeBg:c.bg,color:c.text,border:`1px solid ${c.border}`,fontFamily:'var(--font-sans)',fontSize:s.fontSize,fontWeight:'var(--font-medium)',lineHeight:1,whiteSpace:'nowrap',cursor:onClick?'pointer':'default',userSelect:'none',padding:s.padding,...style}},
    icon&&React.createElement('span',{style:{display:'flex',alignItems:'center',flexShrink:0}},icon),
    children,
    removable&&React.createElement('button',{onClick:e=>{e.stopPropagation();onRemove&&onRemove();},style:{display:'flex',alignItems:'center',justifyContent:'center',background:'none',border:'none',padding:'0',cursor:'pointer',color:'inherit',opacity:.6,marginLeft:'2px',lineHeight:1}},'×')
  );
}

function MoodSelector({ value, onChange, size='md', showLabels=true, style }) {
  const moods=[{id:'great',emoji:'😄',label:'Amazing',color:'var(--color-wellness-great)',bg:'var(--color-green-50)',border:'var(--color-green-300)'},{id:'good',emoji:'🙂',label:'Good',color:'var(--color-wellness-good)',bg:'var(--color-green-50)',border:'var(--color-green-200)'},{id:'okay',emoji:'😐',label:'Okay',color:'var(--color-wellness-okay)',bg:'var(--color-gold-50)',border:'var(--color-gold-200)'},{id:'low',emoji:'😔',label:'Low',color:'var(--color-wellness-low)',bg:'var(--color-terra-50)',border:'var(--color-terra-200)'},{id:'stressed',emoji:'😰',label:'Rough',color:'var(--color-wellness-stressed)',bg:'var(--color-terra-100)',border:'var(--color-terra-300)'}];
  const sizes={sm:{box:52,emoji:'20px',labelSize:'var(--text-2xs)'},md:{box:64,emoji:'26px',labelSize:'var(--text-xs)'},lg:{box:76,emoji:'32px',labelSize:'var(--text-sm)'}};
  const s=sizes[size]||sizes.md;
  return React.createElement('div',{style:{display:'flex',gap:'8px',alignItems:'flex-start',...style}},
    moods.map(mood=>{
      const selected=value===mood.id;
      return React.createElement('button',{key:mood.id,onClick:()=>onChange&&onChange(mood.id),style:{display:'flex',flexDirection:'column',alignItems:'center',gap:'5px',flex:1,padding:'8px 4px',borderRadius:'var(--radius-lg)',border:`1.5px solid ${selected?mood.border:'var(--color-border)'}`,background:selected?mood.bg:'var(--color-bg-surface)',cursor:'pointer',transition:'var(--transition-color),transform var(--duration-fast) var(--ease-bounce)',transform:selected?'scale(1.06)':'scale(1)',boxShadow:selected?'var(--shadow-sm)':'none',outline:'none',WebkitTapHighlightColor:'transparent'},onMouseEnter:e=>{if(!selected)e.currentTarget.style.background=mood.bg;},onMouseLeave:e=>{if(!selected)e.currentTarget.style.background='var(--color-bg-surface)';}},
        React.createElement('span',{style:{fontSize:s.emoji,lineHeight:1,display:'block'}},mood.emoji),
        showLabels&&React.createElement('span',{style:{fontFamily:'var(--font-sans)',fontSize:s.labelSize,fontWeight:selected?'var(--font-semibold)':'var(--font-medium)',color:selected?mood.color:'var(--color-text-muted)',lineHeight:1}},mood.label)
      );
    })
  );
}

function ProgressRing({ value=0, max=100, size=56, strokeWidth=4, color='green', trackColor, label, sublabel, style }) {
  const colors={green:'var(--color-green-500)',brand:'var(--color-brand)',gold:'var(--color-gold-500)',terra:'var(--color-terra-500)',lavender:'var(--color-lavender-500)',sky:'var(--color-sky-500)',earth:'var(--color-earth-400)'};
  const strokeColor=colors[color]||color, trackStroke=trackColor||'var(--color-border)';
  const radius=(size-strokeWidth*2)/2, circumference=2*Math.PI*radius;
  const pct=Math.min(Math.max(value/max,0),1), offset=circumference*(1-pct), center=size/2;
  return React.createElement('div',{style:{position:'relative',display:'inline-flex',alignItems:'center',justifyContent:'center',width:size+'px',height:size+'px',flexShrink:0,...style}},
    React.createElement('svg',{width:size,height:size,viewBox:`0 0 ${size} ${size}`,style:{position:'absolute',top:0,left:0,transform:'rotate(-90deg)'}},
      React.createElement('circle',{cx:center,cy:center,r:radius,fill:'none',stroke:trackStroke,strokeWidth}),
      React.createElement('circle',{cx:center,cy:center,r:radius,fill:'none',stroke:strokeColor,strokeWidth,strokeLinecap:'round',strokeDasharray:circumference,strokeDashoffset:offset,style:{transition:'stroke-dashoffset var(--duration-slow) var(--ease-out)'}})
    ),
    React.createElement('div',{style:{display:'flex',flexDirection:'column',alignItems:'center',gap:'1px',zIndex:1}},
      label&&React.createElement('span',{style:{fontFamily:'var(--font-sans)',fontSize:size<50?'var(--text-xs)':'var(--text-sm)',fontWeight:'var(--font-bold)',color:'var(--color-text-primary)',lineHeight:1}},label),
      sublabel&&React.createElement('span',{style:{fontFamily:'var(--font-sans)',fontSize:'var(--text-2xs)',fontWeight:'var(--font-medium)',color:'var(--color-text-muted)',lineHeight:1}},sublabel)
    )
  );
}

function Toast({ message, type='default', icon, onDismiss, style }) {
  const types={default:{bg:'var(--color-earth-800)',text:'#fff',icon:null},success:{bg:'var(--color-green-800)',text:'#fff',icon:'✓'},warning:{bg:'var(--color-gold-100)',text:'var(--color-gold-700)',icon:'!'},error:{bg:'var(--color-terra-600)',text:'#fff',icon:'✕'},info:{bg:'var(--color-sky-600)',text:'#fff',icon:'i'},growth:{bg:'var(--color-green-700)',text:'#fff',icon:'🌿'}};
  const t=types[type]||types.default, displayIcon=icon!==undefined?icon:t.icon;
  return React.createElement('div',{role:'alert',style:{display:'inline-flex',alignItems:'center',gap:'10px',padding:'12px 16px',borderRadius:'var(--radius-toast)',background:t.bg,color:t.text,boxShadow:'var(--shadow-toast)',fontFamily:'var(--font-sans)',fontSize:'var(--text-sm)',fontWeight:'var(--font-medium)',maxWidth:'360px',minWidth:'200px',...style}},
    displayIcon&&React.createElement('span',{style:{display:'flex',alignItems:'center',justifyContent:'center',width:20,height:20,borderRadius:'50%',background:'rgba(255,255,255,.15)',fontSize:'var(--text-xs)',fontWeight:'var(--font-bold)',flexShrink:0,lineHeight:1}},displayIcon),
    React.createElement('span',{style:{flex:1}},message),
    onDismiss&&React.createElement('button',{onClick:onDismiss,style:{display:'flex',alignItems:'center',background:'none',border:'none',color:'inherit',opacity:.7,cursor:'pointer',padding:'0',marginLeft:'4px',fontSize:'var(--text-base)',lineHeight:1,flexShrink:0}},'×')
  );
}

Object.assign(window, { Button, Card, Badge, Input, Avatar, Tag, MoodSelector, ProgressRing, Toast });
