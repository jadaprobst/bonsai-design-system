/* @ds-bundle: {"format":3,"namespace":"BonsAIDesignSystem_9e0b99","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"MoodSelector","sourcePath":"components/feedback/MoodSelector.jsx"},{"name":"ProgressRing","sourcePath":"components/feedback/ProgressRing.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"BonsaiTree","sourcePath":"components/gamification/BonsaiTree.jsx"},{"name":"HabitCard","sourcePath":"components/gamification/HabitCard.jsx"},{"name":"StreakBadge","sourcePath":"components/gamification/StreakBadge.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"8859fa3b7cd3","components/core/Badge.jsx":"6f0470737c10","components/core/Button.jsx":"4f5d841da0a1","components/core/Card.jsx":"58398b0d7901","components/core/Input.jsx":"70555e9a7937","components/core/Tag.jsx":"700abc5a42b6","components/feedback/MoodSelector.jsx":"b4572eef8a16","components/feedback/ProgressRing.jsx":"40b28ab9e29e","components/feedback/Toast.jsx":"1a4842f5cce0","components/gamification/BonsaiTree.jsx":"6374337363be","components/gamification/HabitCard.jsx":"7c06aa1e8b81","components/gamification/StreakBadge.jsx":"2d69bd881e34","ui_kits/mobile_app/AppCoreComponents.jsx":"c0487b636eab","ui_kits/mobile_app/AppGameComponents.jsx":"87ccbdd4e88a","ui_kits/mobile_app/AppShared.jsx":"d681a1669ada","ui_kits/mobile_app/ChatScreen.jsx":"dddf1ac6c260","ui_kits/mobile_app/CheckInScreen.jsx":"9ded852b8c62","ui_kits/mobile_app/HabitsScreen.jsx":"6a241060d940","ui_kits/mobile_app/HomeScreen.jsx":"75fec54166ae","ui_kits/mobile_app/InsightsScreen.jsx":"cf3706f5b8b9","ui_kits/mobile_app/ScheduleScreen.jsx":"e152dd8ec69e","ui_kits/mobile_app/TodayScreen.jsx":"f300c45216cd","ui_kits/mobile_app/ios-frame.jsx":"be3343be4b51"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BonsAIDesignSystem_9e0b99 = window.BonsAIDesignSystem_9e0b99 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function Avatar({
  src,
  name,
  size = 'md',
  wellnessColor,
  showRing = false,
  style
}) {
  const sizes = {
    xs: {
      outer: 28,
      inner: 24,
      font: 'var(--text-2xs)',
      ring: 2
    },
    sm: {
      outer: 36,
      inner: 30,
      font: 'var(--text-xs)',
      ring: 2.5
    },
    md: {
      outer: 44,
      inner: 38,
      font: 'var(--text-sm)',
      ring: 3
    },
    lg: {
      outer: 56,
      inner: 48,
      font: 'var(--text-base)',
      ring: 3
    },
    xl: {
      outer: 72,
      inner: 62,
      font: 'var(--text-lg)',
      ring: 3.5
    },
    '2xl': {
      outer: 96,
      inner: 84,
      font: 'var(--text-xl)',
      ring: 4
    }
  };
  const s = sizes[size] || sizes.md;
  const initials = name ? name.trim().split(/\s+/).slice(0, 2).map(w => w[0].toUpperCase()).join('') : '?';

  // Map wellness color names to actual colors
  const wellnessColors = {
    great: 'var(--color-wellness-great)',
    good: 'var(--color-wellness-good)',
    okay: 'var(--color-wellness-okay)',
    low: 'var(--color-wellness-low)',
    stressed: 'var(--color-wellness-stressed)',
    green: 'var(--color-green-500)',
    gold: 'var(--color-gold-500)',
    lavender: 'var(--color-lavender-500)',
    sky: 'var(--color-sky-500)'
  };
  const ringColor = wellnessColor ? wellnessColors[wellnessColor] || wellnessColor : 'var(--color-border-brand)';
  const outerStyle = {
    width: s.outer + 'px',
    height: s.outer + 'px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    background: showRing ? `conic-gradient(${ringColor} 0deg, ${ringColor} 270deg, var(--color-border) 270deg)` : 'transparent',
    padding: showRing ? s.ring + 'px' : '0',
    ...style
  };
  const innerStyle = {
    width: showRing ? '100%' : s.outer + 'px',
    height: showRing ? '100%' : s.outer + 'px',
    borderRadius: '50%',
    overflow: 'hidden',
    background: 'var(--color-earth-100)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: showRing ? '2px solid var(--color-bg-surface)' : 'none',
    flexShrink: 0
  };
  return React.createElement('div', {
    style: outerStyle
  }, React.createElement('div', {
    style: innerStyle
  }, src ? React.createElement('img', {
    src,
    alt: name || 'Avatar',
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : React.createElement('span', {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: s.font,
      fontWeight: 'var(--font-semibold)',
      color: 'var(--color-text-secondary)',
      lineHeight: 1,
      userSelect: 'none'
    }
  }, initials)));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function Badge({
  children,
  color = 'green',
  size = 'md',
  dot = false,
  style
}) {
  const colors = {
    green: {
      bg: 'var(--color-green-100)',
      text: 'var(--color-green-700)',
      dot: 'var(--color-green-500)'
    },
    sage: {
      bg: 'var(--color-brand-light)',
      text: 'var(--color-brand-mid)',
      dot: 'var(--color-brand)'
    },
    gold: {
      bg: 'var(--color-gold-100)',
      text: 'var(--color-gold-700)',
      dot: 'var(--color-gold-500)'
    },
    terra: {
      bg: 'var(--color-terra-100)',
      text: 'var(--color-terra-600)',
      dot: 'var(--color-terra-500)'
    },
    lavender: {
      bg: 'var(--color-lavender-100)',
      text: 'var(--color-lavender-600)',
      dot: 'var(--color-lavender-500)'
    },
    sky: {
      bg: 'var(--color-sky-100)',
      text: 'var(--color-sky-600)',
      dot: 'var(--color-sky-500)'
    },
    earth: {
      bg: 'var(--color-earth-100)',
      text: 'var(--color-earth-700)',
      dot: 'var(--color-earth-500)'
    },
    dark: {
      bg: 'var(--color-earth-800)',
      text: '#ffffff',
      dot: 'var(--color-green-400)'
    },
    // Wellness aliases
    great: {
      bg: 'var(--color-green-100)',
      text: 'var(--color-green-700)',
      dot: 'var(--color-wellness-great)'
    },
    good: {
      bg: 'var(--color-green-50)',
      text: 'var(--color-green-600)',
      dot: 'var(--color-wellness-good)'
    },
    okay: {
      bg: 'var(--color-gold-100)',
      text: 'var(--color-gold-600)',
      dot: 'var(--color-wellness-okay)'
    },
    low: {
      bg: 'var(--color-terra-50)',
      text: 'var(--color-terra-500)',
      dot: 'var(--color-wellness-low)'
    },
    stressed: {
      bg: 'var(--color-terra-100)',
      text: 'var(--color-terra-600)',
      dot: 'var(--color-wellness-stressed)'
    }
  };
  const sizes = {
    sm: {
      fontSize: 'var(--text-2xs)',
      padding: '2px 8px',
      fontWeight: 'var(--font-semibold)'
    },
    md: {
      fontSize: 'var(--text-xs)',
      padding: '4px 10px',
      fontWeight: 'var(--font-medium)'
    },
    lg: {
      fontSize: 'var(--text-sm)',
      padding: '5px 12px',
      fontWeight: 'var(--font-medium)'
    }
  };
  const c = colors[color] || colors.green;
  const s = sizes[size] || sizes.md;
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '5px',
      borderRadius: 'var(--radius-badge)',
      background: c.bg,
      color: c.text,
      fontFamily: 'var(--font-sans)',
      letterSpacing: 'var(--tracking-wide)',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      flexShrink: 0,
      ...s,
      ...style
    }
  }, dot && React.createElement('span', {
    style: {
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      background: c.dot,
      flexShrink: 0
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  fullWidth = false,
  leftIcon = null,
  rightIcon = null,
  onClick,
  type = 'button',
  style,
  className
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: 'var(--font-sans)',
    fontWeight: 'var(--font-semibold)',
    letterSpacing: 'var(--tracking-wide)',
    borderRadius: 'var(--radius-button)',
    border: '1.5px solid transparent',
    cursor: disabled || loading ? 'not-allowed' : 'pointer',
    transition: 'var(--transition-color), var(--transition-shadow), transform var(--duration-fast) var(--ease-out)',
    whiteSpace: 'nowrap',
    width: fullWidth ? '100%' : 'auto',
    opacity: disabled ? 0.55 : 1,
    userSelect: 'none',
    WebkitTapHighlightColor: 'transparent',
    outline: 'none',
    position: 'relative',
    overflow: 'hidden'
  };
  const sizes = {
    xs: {
      fontSize: 'var(--text-xs)',
      padding: 'var(--space-1) var(--space-3)',
      minHeight: '28px'
    },
    sm: {
      fontSize: 'var(--text-sm)',
      padding: 'var(--space-2) var(--space-4)',
      minHeight: '36px'
    },
    md: {
      fontSize: 'var(--text-base)',
      padding: 'var(--space-3) var(--space-5)',
      minHeight: '44px'
    },
    lg: {
      fontSize: 'var(--text-md)',
      padding: 'var(--space-4) var(--space-7)',
      minHeight: '52px'
    }
  };
  const variants = {
    primary: {
      background: 'var(--color-interactive)',
      color: '#ffffff',
      borderColor: 'var(--color-interactive)',
      boxShadow: 'var(--shadow-button-primary)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--color-interactive)',
      borderColor: 'var(--color-border-brand)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-text-brand)',
      borderColor: 'transparent'
    },
    soft: {
      background: 'var(--color-bg-brand)',
      color: 'var(--color-interactive)',
      borderColor: 'transparent'
    },
    danger: {
      background: 'var(--color-error)',
      color: '#ffffff',
      borderColor: 'var(--color-error)'
    },
    'danger-ghost': {
      background: 'transparent',
      color: 'var(--color-error)',
      borderColor: 'transparent'
    }
  };
  const Spinner = () => React.createElement('svg', {
    width: '16',
    height: '16',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '2.5',
    style: {
      animation: 'bonsai-spin 0.8s linear infinite',
      flexShrink: 0
    }
  }, React.createElement('circle', {
    cx: '12',
    cy: '12',
    r: '10',
    strokeOpacity: '0.25'
  }), React.createElement('path', {
    d: 'M12 2a10 10 0 0 1 10 10',
    strokeLinecap: 'round'
  }));
  const handleMouseEnter = e => {
    if (disabled || loading) return;
    const el = e.currentTarget;
    if (variant === 'primary') el.style.background = 'var(--color-interactive-hover)';else if (variant === 'secondary' || variant === 'ghost' || variant === 'soft') el.style.background = 'var(--color-bg-brand)';
  };
  const handleMouseLeave = e => {
    if (disabled || loading) return;
    e.currentTarget.style.background = variants[variant]?.background || '';
  };
  const handleMouseDown = e => {
    if (disabled || loading) return;
    e.currentTarget.style.transform = 'scale(0.96)';
  };
  const handleMouseUp = e => {
    e.currentTarget.style.transform = 'scale(1)';
  };
  return React.createElement('button', {
    type,
    disabled: disabled || loading,
    onClick,
    style: {
      ...base,
      ...(sizes[size] || sizes.md),
      ...(variants[variant] || variants.primary),
      ...style
    },
    className,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onMouseDown: handleMouseDown,
    onMouseUp: handleMouseUp,
    onFocus: e => {
      e.currentTarget.style.boxShadow = 'var(--shadow-focus-brand)';
    },
    onBlur: e => {
      e.currentTarget.style.boxShadow = variants[variant]?.boxShadow || 'none';
    }
  }, loading && React.createElement(Spinner), leftIcon && !loading && React.createElement('span', {
    style: {
      display: 'flex',
      alignItems: 'center',
      flexShrink: 0
    }
  }, leftIcon), children, rightIcon && React.createElement('span', {
    style: {
      display: 'flex',
      alignItems: 'center',
      flexShrink: 0
    }
  }, rightIcon));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  children,
  variant = 'default',
  padding = 'md',
  radius = 'card',
  as: Tag = 'div',
  onClick,
  style,
  className
}) {
  const variants = {
    default: {
      background: 'var(--color-bg-surface)',
      boxShadow: 'var(--shadow-card)',
      border: 'none'
    },
    elevated: {
      background: 'var(--color-bg-surface)',
      boxShadow: 'var(--shadow-lg)',
      border: 'none'
    },
    bordered: {
      background: 'var(--color-bg-surface)',
      boxShadow: 'var(--shadow-xs)',
      border: '1.5px solid var(--color-border)'
    },
    muted: {
      background: 'var(--color-bg-muted)',
      boxShadow: 'none',
      border: 'none'
    },
    brand: {
      background: 'var(--color-bg-brand)',
      boxShadow: 'none',
      border: '1.5px solid var(--color-border-brand)'
    },
    glass: {
      background: 'rgba(255,255,255,0.72)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      boxShadow: 'var(--shadow-lg)',
      border: '1px solid rgba(255,255,255,0.5)'
    }
  };
  const paddings = {
    none: '0',
    sm: 'var(--padding-card-sm)',
    md: 'var(--padding-card-md)',
    lg: 'var(--padding-card-lg)'
  };
  const radii = {
    card: 'var(--radius-card)',
    'card-inner': 'var(--radius-card-inner)',
    modal: 'var(--radius-modal)',
    sheet: 'var(--radius-sheet)',
    lg: 'var(--radius-lg)',
    xl: 'var(--radius-xl)'
  };
  const isInteractive = Boolean(onClick);
  return React.createElement(Tag, {
    onClick,
    style: {
      ...(variants[variant] || variants.default),
      borderRadius: radii[radius] || radii.card,
      padding: paddings[padding] || paddings.md,
      position: 'relative',
      overflow: 'hidden',
      cursor: isInteractive ? 'pointer' : 'default',
      transition: isInteractive ? 'transform var(--duration-normal) var(--ease-out), box-shadow var(--duration-normal) var(--ease-out)' : 'none',
      ...style
    },
    className,
    onMouseEnter: isInteractive ? e => {
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
    } : undefined,
    onMouseLeave: isInteractive ? e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = variants[variant]?.boxShadow || 'var(--shadow-card)';
    } : undefined
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function Input({
  label,
  helper,
  error,
  leftIcon,
  rightIcon,
  size = 'md',
  disabled = false,
  id,
  style,
  containerStyle,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const sizes = {
    sm: {
      fontSize: 'var(--text-sm)',
      height: '36px',
      iconSize: '14px'
    },
    md: {
      fontSize: 'var(--text-base)',
      height: '44px',
      iconSize: '16px'
    },
    lg: {
      fontSize: 'var(--text-md)',
      height: '52px',
      iconSize: '18px'
    }
  };
  const s = sizes[size] || sizes.md;
  const borderColor = error ? 'var(--color-error)' : focused ? 'var(--color-border-focus)' : 'var(--color-border)';
  const boxShadow = error ? focused ? 'var(--shadow-focus-error)' : 'none' : focused ? 'var(--shadow-focus-brand)' : 'none';
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      ...containerStyle
    }
  }, label && React.createElement('label', {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--font-medium)',
      color: error ? 'var(--color-error)' : 'var(--color-text-secondary)',
      lineHeight: 1
    }
  }, label), React.createElement('div', {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, leftIcon && React.createElement('span', {
    style: {
      position: 'absolute',
      left: '14px',
      display: 'flex',
      alignItems: 'center',
      color: 'var(--color-text-muted)',
      fontSize: s.iconSize,
      pointerEvents: 'none'
    }
  }, leftIcon), React.createElement('input', {
    id: inputId,
    disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      width: '100%',
      height: s.height,
      fontFamily: 'var(--font-sans)',
      fontSize: s.fontSize,
      color: 'var(--color-text-primary)',
      background: disabled ? 'var(--color-bg-muted)' : 'var(--color-bg-surface)',
      border: `1.5px solid ${borderColor}`,
      borderRadius: 'var(--radius-input)',
      padding: `0 ${rightIcon ? '40px' : '14px'} 0 ${leftIcon ? '40px' : '14px'}`,
      outline: 'none',
      boxShadow,
      transition: 'border-color var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out)',
      cursor: disabled ? 'not-allowed' : 'text',
      opacity: disabled ? 0.6 : 1,
      ...style
    },
    ...rest
  }), rightIcon && React.createElement('span', {
    style: {
      position: 'absolute',
      right: '14px',
      display: 'flex',
      alignItems: 'center',
      color: 'var(--color-text-muted)',
      fontSize: s.iconSize,
      pointerEvents: 'none'
    }
  }, rightIcon)), (error || helper) && React.createElement('p', {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--color-error)' : 'var(--color-text-muted)',
      lineHeight: 'var(--leading-normal)'
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  color = 'earth',
  size = 'md',
  icon = null,
  removable = false,
  onRemove,
  onClick,
  active = false,
  style
}) {
  const colors = {
    earth: {
      bg: 'var(--color-earth-100)',
      text: 'var(--color-earth-700)',
      activeBg: 'var(--color-earth-200)',
      border: 'var(--color-earth-200)'
    },
    green: {
      bg: 'var(--color-green-50)',
      text: 'var(--color-green-700)',
      activeBg: 'var(--color-green-100)',
      border: 'var(--color-green-200)'
    },
    gold: {
      bg: 'var(--color-gold-50)',
      text: 'var(--color-gold-700)',
      activeBg: 'var(--color-gold-100)',
      border: 'var(--color-gold-200)'
    },
    terra: {
      bg: 'var(--color-terra-50)',
      text: 'var(--color-terra-600)',
      activeBg: 'var(--color-terra-100)',
      border: 'var(--color-terra-200)'
    },
    lavender: {
      bg: 'var(--color-lavender-50)',
      text: 'var(--color-lavender-600)',
      activeBg: 'var(--color-lavender-100)',
      border: 'var(--color-lavender-200)'
    },
    sky: {
      bg: 'var(--color-sky-50)',
      text: 'var(--color-sky-600)',
      activeBg: 'var(--color-sky-100)',
      border: 'var(--color-sky-200)'
    }
  };
  const sizes = {
    sm: {
      fontSize: 'var(--text-xs)',
      padding: '4px 10px',
      gap: '4px',
      iconSize: '12px'
    },
    md: {
      fontSize: 'var(--text-sm)',
      padding: '6px 12px',
      gap: '5px',
      iconSize: '14px'
    },
    lg: {
      fontSize: 'var(--text-base)',
      padding: '8px 14px',
      gap: '6px',
      iconSize: '16px'
    }
  };
  const c = colors[color] || colors.earth;
  const s = sizes[size] || sizes.md;
  const isClickable = Boolean(onClick);
  return React.createElement('span', {
    onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: s.gap,
      borderRadius: 'var(--radius-tag)',
      background: active ? c.activeBg : c.bg,
      color: c.text,
      border: `1px solid ${c.border}`,
      fontFamily: 'var(--font-sans)',
      fontSize: s.fontSize,
      fontWeight: 'var(--font-medium)',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      cursor: isClickable ? 'pointer' : 'default',
      userSelect: 'none',
      transition: 'var(--transition-color)',
      padding: s.padding,
      ...style
    }
  }, icon && React.createElement('span', {
    style: {
      display: 'flex',
      alignItems: 'center',
      fontSize: s.iconSize,
      flexShrink: 0
    }
  }, icon), children, removable && React.createElement('button', {
    onClick: e => {
      e.stopPropagation();
      onRemove && onRemove();
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'none',
      border: 'none',
      padding: '0',
      cursor: 'pointer',
      color: 'inherit',
      opacity: 0.6,
      marginLeft: '2px',
      fontSize: s.iconSize,
      lineHeight: 1
    }
  }, '×'));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/MoodSelector.jsx
try { (() => {
function MoodSelector({
  value,
  onChange,
  size = 'md',
  showLabels = true,
  style
}) {
  const moods = [{
    id: 'great',
    emoji: '😄',
    label: 'Amazing',
    color: 'var(--color-wellness-great)',
    bg: 'var(--color-green-50)',
    border: 'var(--color-green-300)'
  }, {
    id: 'good',
    emoji: '🙂',
    label: 'Good',
    color: 'var(--color-wellness-good)',
    bg: 'var(--color-green-50)',
    border: 'var(--color-green-200)'
  }, {
    id: 'okay',
    emoji: '😐',
    label: 'Okay',
    color: 'var(--color-wellness-okay)',
    bg: 'var(--color-gold-50)',
    border: 'var(--color-gold-200)'
  }, {
    id: 'low',
    emoji: '😔',
    label: 'Low',
    color: 'var(--color-wellness-low)',
    bg: 'var(--color-terra-50)',
    border: 'var(--color-terra-200)'
  }, {
    id: 'stressed',
    emoji: '😰',
    label: 'Rough',
    color: 'var(--color-wellness-stressed)',
    bg: 'var(--color-terra-100)',
    border: 'var(--color-terra-300)'
  }];
  const sizes = {
    sm: {
      box: 52,
      emoji: '20px',
      labelSize: 'var(--text-2xs)'
    },
    md: {
      box: 64,
      emoji: '26px',
      labelSize: 'var(--text-xs)'
    },
    lg: {
      box: 76,
      emoji: '32px',
      labelSize: 'var(--text-sm)'
    }
  };
  const s = sizes[size] || sizes.md;
  return React.createElement('div', {
    style: {
      display: 'flex',
      gap: '8px',
      alignItems: 'flex-start',
      ...style
    }
  }, moods.map(mood => {
    const selected = value === mood.id;
    return React.createElement('button', {
      key: mood.id,
      onClick: () => onChange && onChange(mood.id),
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '5px',
        flex: 1,
        padding: '8px 4px',
        borderRadius: 'var(--radius-lg)',
        border: `1.5px solid ${selected ? mood.border : 'var(--color-border)'}`,
        background: selected ? mood.bg : 'var(--color-bg-surface)',
        cursor: 'pointer',
        transition: 'var(--transition-color), transform var(--duration-fast) var(--ease-bounce)',
        transform: selected ? 'scale(1.06)' : 'scale(1)',
        boxShadow: selected ? 'var(--shadow-sm)' : 'none',
        outline: 'none',
        WebkitTapHighlightColor: 'transparent'
      },
      onMouseEnter: e => {
        if (!selected) e.currentTarget.style.background = mood.bg;
      },
      onMouseLeave: e => {
        if (!selected) e.currentTarget.style.background = 'var(--color-bg-surface)';
      }
    }, React.createElement('span', {
      style: {
        fontSize: s.emoji,
        lineHeight: 1,
        display: 'block'
      }
    }, mood.emoji), showLabels && React.createElement('span', {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: s.labelSize,
        fontWeight: selected ? 'var(--font-semibold)' : 'var(--font-medium)',
        color: selected ? mood.color : 'var(--color-text-muted)',
        lineHeight: 1,
        transition: 'color var(--duration-fast)'
      }
    }, mood.label));
  }));
}
Object.assign(__ds_scope, { MoodSelector });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/MoodSelector.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressRing.jsx
try { (() => {
function ProgressRing({
  value = 0,
  max = 100,
  size = 56,
  strokeWidth = 4,
  color = 'green',
  trackColor,
  label,
  sublabel,
  style
}) {
  const colors = {
    green: 'var(--color-green-500)',
    brand: 'var(--color-brand)',
    gold: 'var(--color-gold-500)',
    terra: 'var(--color-terra-500)',
    lavender: 'var(--color-lavender-500)',
    sky: 'var(--color-sky-500)',
    earth: 'var(--color-earth-400)'
  };
  const strokeColor = colors[color] || color;
  const trackStroke = trackColor || 'var(--color-border)';
  const radius = (size - strokeWidth * 2) / 2;
  const circumference = 2 * Math.PI * radius;
  const pct = Math.min(Math.max(value / max, 0), 1);
  const offset = circumference * (1 - pct);
  const center = size / 2;
  return React.createElement('div', {
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size + 'px',
      height: size + 'px',
      flexShrink: 0,
      ...style
    }
  }, React.createElement('svg', {
    width: size,
    height: size,
    viewBox: `0 0 ${size} ${size}`,
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      transform: 'rotate(-90deg)'
    }
  }, React.createElement('circle', {
    cx: center,
    cy: center,
    r: radius,
    fill: 'none',
    stroke: trackStroke,
    strokeWidth
  }), React.createElement('circle', {
    cx: center,
    cy: center,
    r: radius,
    fill: 'none',
    stroke: strokeColor,
    strokeWidth,
    strokeLinecap: 'round',
    strokeDasharray: circumference,
    strokeDashoffset: offset,
    style: {
      transition: 'stroke-dashoffset var(--duration-slow) var(--ease-out)'
    }
  })), React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1px',
      zIndex: 1
    }
  }, label && React.createElement('span', {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: size < 50 ? 'var(--text-xs)' : 'var(--text-sm)',
      fontWeight: 'var(--font-bold)',
      color: 'var(--color-text-primary)',
      lineHeight: 1
    }
  }, label), sublabel && React.createElement('span', {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-2xs)',
      fontWeight: 'var(--font-medium)',
      color: 'var(--color-text-muted)',
      lineHeight: 1
    }
  }, sublabel)));
}
Object.assign(__ds_scope, { ProgressRing });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressRing.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  message,
  type = 'default',
  icon,
  onDismiss,
  style
}) {
  const types = {
    default: {
      bg: 'var(--color-earth-800)',
      text: '#ffffff',
      icon: null
    },
    success: {
      bg: 'var(--color-green-800)',
      text: '#ffffff',
      icon: '✓'
    },
    warning: {
      bg: 'var(--color-gold-100)',
      text: 'var(--color-gold-700)',
      icon: '!'
    },
    error: {
      bg: 'var(--color-terra-600)',
      text: '#ffffff',
      icon: '✕'
    },
    info: {
      bg: 'var(--color-sky-600)',
      text: '#ffffff',
      icon: 'i'
    },
    growth: {
      bg: 'var(--color-green-700)',
      text: '#ffffff',
      icon: '🌿'
    }
  };
  const t = types[type] || types.default;
  const displayIcon = icon !== undefined ? icon : t.icon;
  return React.createElement('div', {
    role: 'alert',
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      padding: '12px 16px',
      borderRadius: 'var(--radius-toast)',
      background: t.bg,
      color: t.text,
      boxShadow: 'var(--shadow-toast)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--font-medium)',
      lineHeight: 'var(--leading-snug)',
      maxWidth: '360px',
      minWidth: '200px',
      animation: 'toast-in var(--duration-moderate) var(--ease-bounce)',
      ...style
    }
  }, displayIcon && React.createElement('span', {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.15)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--font-bold)',
      flexShrink: 0,
      lineHeight: 1
    }
  }, displayIcon), React.createElement('span', {
    style: {
      flex: 1
    }
  }, message), onDismiss && React.createElement('button', {
    onClick: onDismiss,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'none',
      border: 'none',
      color: 'inherit',
      opacity: 0.7,
      cursor: 'pointer',
      padding: '0',
      marginLeft: '4px',
      fontSize: 'var(--text-base)',
      lineHeight: 1,
      flexShrink: 0
    }
  }, '×'));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/gamification/BonsaiTree.jsx
try { (() => {
function BonsaiTree({
  branches = {
    self: 3,
    purpose: 3,
    character: 3,
    relationships: 3
  },
  level,
  // backward-compat: sets all branches equally
  size = 200,
  animated = true,
  showLabels = false,
  style
}) {
  const b = level !== undefined ? {
    self: level,
    purpose: level,
    character: level,
    relationships: level
  } : {
    self: 3,
    purpose: 3,
    character: 3,
    relationships: 3,
    ...branches
  };
  const clamp = v => Math.min(Math.max(Math.round(v ?? 0), 0), 5);
  const lvl = {
    self: clamp(b.self),
    purpose: clamp(b.purpose),
    character: clamp(b.character),
    relationships: clamp(b.relationships)
  };
  const anim = animated ? `opacity var(--duration-growth) var(--ease-growth)` : 'none';
  const show = (min, branchLvl) => ({
    opacity: branchLvl >= min ? 1 : 0,
    transition: anim
  });

  // Per-branch jewel-tone palettes
  const pal = {
    self: {
      dk: '#5038A8',
      md: '#7C3AED',
      mn: '#8B5CF6',
      lt: '#A78BFA',
      pl: '#C4B5FD',
      branch: lvl.self === 0 ? '#B8AFDA' : '#5038A8',
      sub: lvl.self === 0 ? '#C4B5FD' : '#7C3AED'
    },
    purpose: {
      dk: '#2D6A4F',
      md: '#40916C',
      mn: '#52B788',
      lt: '#74C69D',
      pl: '#95D5B2',
      branch: lvl.purpose === 0 ? '#A0B8A8' : '#2D6A4F',
      sub: lvl.purpose === 0 ? '#B7D4C2' : '#40916C'
    },
    character: {
      dk: '#0E7490',
      md: '#0891B2',
      mn: '#06B6D4',
      lt: '#22D3EE',
      pl: '#67E8F9',
      branch: lvl.character === 0 ? '#90BEC8' : '#0E7490',
      sub: lvl.character === 0 ? '#A5D4E0' : '#0891B2'
    },
    relationships: {
      dk: '#3730A3',
      md: '#4F46E5',
      mn: '#6366F1',
      lt: '#818CF8',
      pl: '#A5B4FC',
      branch: lvl.relationships === 0 ? '#A8A8D8' : '#3730A3',
      sub: lvl.relationships === 0 ? '#C0C0E8' : '#4F46E5'
    }
  };
  const textStyle = anchor => ({
    fontFamily: 'var(--font-sans, system-ui)',
    fontSize: '9',
    fontWeight: '700',
    letterSpacing: '0.03em',
    textAnchor: anchor,
    opacity: showLabels ? 1 : 0,
    transition: anim
  });
  const p = pal;
  return React.createElement('div', {
    style: {
      width: size + 'px',
      height: size * 1.1 + 'px',
      flexShrink: 0,
      ...style
    }
  }, React.createElement('svg', {
    viewBox: '0 0 200 220',
    width: size,
    height: size * 1.1,
    xmlns: 'http://www.w3.org/2000/svg'
  }, /* ── Pot ─────────────────────────────────────────────────── */
  React.createElement('rect', {
    x: 73,
    y: 192,
    width: 54,
    height: 7,
    rx: 3.5,
    fill: '#A68262'
  }), React.createElement('path', {
    d: 'M77 199 L80 216 L120 216 L123 199Z',
    fill: '#C4956A'
  }), React.createElement('ellipse', {
    cx: 100,
    cy: 194,
    rx: 27,
    ry: 5.5,
    fill: '#8B6B4E'
  }), /* ── Trunk ───────────────────────────────────────────────── */
  React.createElement('path', {
    d: 'M100 192 C99 174 97 156 94 138 C91 120 95 100 98 82 C100 72 100 60 100 46',
    stroke: '#4A3728',
    strokeWidth: 5.5,
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }), /* ═══ RELATIONSHIPS — indigo, lower wide spread ═══════════ */
  React.createElement('path', {
    d: 'M94 148 C78 140 62 133 46 128',
    stroke: p.relationships.branch,
    strokeWidth: 3.5,
    fill: 'none',
    strokeLinecap: 'round'
  }), React.createElement('path', {
    d: 'M96 141 C112 134 128 130 150 124',
    stroke: p.relationships.branch,
    strokeWidth: 3.5,
    fill: 'none',
    strokeLinecap: 'round'
  }), React.createElement('circle', {
    cx: 44,
    cy: 123,
    r: 10,
    fill: p.relationships.dk,
    ...show(1, lvl.relationships)
  }), React.createElement('circle', {
    cx: 36,
    cy: 117,
    r: 8,
    fill: p.relationships.mn,
    ...show(2, lvl.relationships)
  }), React.createElement('circle', {
    cx: 50,
    cy: 113,
    r: 9,
    fill: p.relationships.md,
    ...show(2, lvl.relationships)
  }), React.createElement('circle', {
    cx: 34,
    cy: 108,
    r: 7,
    fill: p.relationships.lt,
    ...show(3, lvl.relationships)
  }), React.createElement('circle', {
    cx: 46,
    cy: 106,
    r: 8,
    fill: p.relationships.mn,
    ...show(4, lvl.relationships)
  }), React.createElement('circle', {
    cx: 30,
    cy: 100,
    r: 7,
    fill: p.relationships.pl,
    ...show(5, lvl.relationships)
  }), React.createElement('circle', {
    cx: 152,
    cy: 119,
    r: 10,
    fill: p.relationships.dk,
    ...show(1, lvl.relationships)
  }), React.createElement('circle', {
    cx: 160,
    cy: 113,
    r: 8,
    fill: p.relationships.mn,
    ...show(2, lvl.relationships)
  }), React.createElement('circle', {
    cx: 146,
    cy: 109,
    r: 9,
    fill: p.relationships.md,
    ...show(2, lvl.relationships)
  }), React.createElement('circle', {
    cx: 164,
    cy: 106,
    r: 7,
    fill: p.relationships.lt,
    ...show(3, lvl.relationships)
  }), React.createElement('circle', {
    cx: 154,
    cy: 103,
    r: 8,
    fill: p.relationships.mn,
    ...show(4, lvl.relationships)
  }), React.createElement('circle', {
    cx: 168,
    cy: 98,
    r: 7,
    fill: p.relationships.pl,
    ...show(5, lvl.relationships)
  }), React.createElement('text', {
    x: 100,
    y: 152,
    fill: p.relationships.dk,
    ...textStyle('middle')
  }, 'Relationships'), /* ═══ SELF — violet, left mid ══════════════════════════════ */
  React.createElement('path', {
    d: 'M94 120 C80 113 66 108 52 103',
    stroke: p.self.branch,
    strokeWidth: 3,
    fill: 'none',
    strokeLinecap: 'round'
  }), React.createElement('path', {
    d: 'M89 110 C74 103 60 97 46 91',
    stroke: p.self.sub,
    strokeWidth: 2.25,
    fill: 'none',
    strokeLinecap: 'round'
  }), React.createElement('circle', {
    cx: 48,
    cy: 98,
    r: 11,
    fill: p.self.dk,
    ...show(1, lvl.self)
  }), React.createElement('circle', {
    cx: 40,
    cy: 91,
    r: 9,
    fill: p.self.mn,
    ...show(2, lvl.self)
  }), React.createElement('circle', {
    cx: 54,
    cy: 88,
    r: 10,
    fill: p.self.md,
    ...show(2, lvl.self)
  }), React.createElement('circle', {
    cx: 38,
    cy: 82,
    r: 8,
    fill: p.self.lt,
    ...show(3, lvl.self)
  }), React.createElement('circle', {
    cx: 50,
    cy: 79,
    r: 9,
    fill: p.self.mn,
    ...show(4, lvl.self)
  }), React.createElement('circle', {
    cx: 34,
    cy: 74,
    r: 8,
    fill: p.self.pl,
    ...show(5, lvl.self)
  }), React.createElement('circle', {
    cx: 46,
    cy: 70,
    r: 8,
    fill: p.self.pl,
    ...show(5, lvl.self)
  }), React.createElement('text', {
    x: 38,
    y: 90,
    fill: p.self.dk,
    ...textStyle('end')
  }, 'Self'), /* ═══ CHARACTER — teal, right mid ══════════════════════════ */
  React.createElement('path', {
    d: 'M101 120 C115 113 130 108 144 103',
    stroke: p.character.branch,
    strokeWidth: 3,
    fill: 'none',
    strokeLinecap: 'round'
  }), React.createElement('path', {
    d: 'M106 110 C121 103 136 97 150 91',
    stroke: p.character.sub,
    strokeWidth: 2.25,
    fill: 'none',
    strokeLinecap: 'round'
  }), React.createElement('circle', {
    cx: 146,
    cy: 98,
    r: 11,
    fill: p.character.dk,
    ...show(1, lvl.character)
  }), React.createElement('circle', {
    cx: 154,
    cy: 91,
    r: 9,
    fill: p.character.mn,
    ...show(2, lvl.character)
  }), React.createElement('circle', {
    cx: 140,
    cy: 88,
    r: 10,
    fill: p.character.md,
    ...show(2, lvl.character)
  }), React.createElement('circle', {
    cx: 156,
    cy: 82,
    r: 8,
    fill: p.character.lt,
    ...show(3, lvl.character)
  }), React.createElement('circle', {
    cx: 144,
    cy: 79,
    r: 9,
    fill: p.character.mn,
    ...show(4, lvl.character)
  }), React.createElement('circle', {
    cx: 160,
    cy: 74,
    r: 8,
    fill: p.character.pl,
    ...show(5, lvl.character)
  }), React.createElement('circle', {
    cx: 148,
    cy: 70,
    r: 8,
    fill: p.character.pl,
    ...show(5, lvl.character)
  }), React.createElement('text', {
    x: 162,
    y: 90,
    fill: p.character.dk,
    ...textStyle('start')
  }, 'Character'), /* ═══ PURPOSE — green, apex ════════════════════════════════ */
  React.createElement('path', {
    d: 'M98 88 C88 80 78 74 68 70',
    stroke: p.purpose.branch,
    strokeWidth: 2.5,
    fill: 'none',
    strokeLinecap: 'round'
  }), React.createElement('path', {
    d: 'M101 83 C111 75 121 69 130 66',
    stroke: p.purpose.branch,
    strokeWidth: 2.5,
    fill: 'none',
    strokeLinecap: 'round'
  }), React.createElement('circle', {
    cx: 100,
    cy: 67,
    r: 13,
    fill: p.purpose.mn,
    ...show(1, lvl.purpose)
  }), React.createElement('circle', {
    cx: 91,
    cy: 59,
    r: 10,
    fill: p.purpose.dk,
    ...show(2, lvl.purpose)
  }), React.createElement('circle', {
    cx: 110,
    cy: 59,
    r: 10,
    fill: p.purpose.md,
    ...show(2, lvl.purpose)
  }), React.createElement('circle', {
    cx: 68,
    cy: 66,
    r: 9,
    fill: p.purpose.lt,
    ...show(3, lvl.purpose)
  }), React.createElement('circle', {
    cx: 130,
    cy: 62,
    r: 9,
    fill: p.purpose.mn,
    ...show(3, lvl.purpose)
  }), React.createElement('circle', {
    cx: 100,
    cy: 50,
    r: 13,
    fill: p.purpose.md,
    ...show(3, lvl.purpose)
  }), React.createElement('circle', {
    cx: 91,
    cy: 42,
    r: 10,
    fill: p.purpose.dk,
    ...show(4, lvl.purpose)
  }), React.createElement('circle', {
    cx: 110,
    cy: 42,
    r: 10,
    fill: p.purpose.mn,
    ...show(4, lvl.purpose)
  }), React.createElement('circle', {
    cx: 100,
    cy: 34,
    r: 11,
    fill: p.purpose.lt,
    ...show(4, lvl.purpose)
  }), React.createElement('circle', {
    cx: 93,
    cy: 26,
    r: 9,
    fill: p.purpose.pl,
    ...show(5, lvl.purpose)
  }), React.createElement('circle', {
    cx: 107,
    cy: 26,
    r: 9,
    fill: p.purpose.lt,
    ...show(5, lvl.purpose)
  }), React.createElement('circle', {
    cx: 100,
    cy: 19,
    r: 8,
    fill: p.purpose.pl,
    ...show(5, lvl.purpose)
  }), React.createElement('text', {
    x: 100,
    y: 14,
    fill: p.purpose.dk,
    ...textStyle('middle')
  }, 'Purpose')));
}
Object.assign(__ds_scope, { BonsaiTree });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/gamification/BonsaiTree.jsx", error: String((e && e.message) || e) }); }

// components/gamification/HabitCard.jsx
try { (() => {
function HabitCard({
  name,
  icon,
  color = 'green',
  streak = 0,
  completed = false,
  progress,
  progressMax = 100,
  onToggle,
  size = 'md',
  style
}) {
  const colors = {
    green: {
      ring: 'green',
      bg: 'var(--color-green-50)',
      text: 'var(--color-green-700)',
      iconBg: 'var(--color-green-100)'
    },
    gold: {
      ring: 'gold',
      bg: 'var(--color-gold-50)',
      text: 'var(--color-gold-700)',
      iconBg: 'var(--color-gold-100)'
    },
    lavender: {
      ring: 'lavender',
      bg: 'var(--color-lavender-50)',
      text: 'var(--color-lavender-600)',
      iconBg: 'var(--color-lavender-100)'
    },
    sky: {
      ring: 'sky',
      bg: 'var(--color-sky-50)',
      text: 'var(--color-sky-600)',
      iconBg: 'var(--color-sky-100)'
    },
    terra: {
      ring: 'terra',
      bg: 'var(--color-terra-50)',
      text: 'var(--color-terra-600)',
      iconBg: 'var(--color-terra-100)'
    },
    earth: {
      ring: 'earth',
      bg: 'var(--color-earth-50)',
      text: 'var(--color-earth-600)',
      iconBg: 'var(--color-earth-100)'
    }
  };
  const c = colors[color] || colors.green;
  const hasProgress = progress !== undefined;
  const sizes = {
    sm: {
      padding: '12px',
      iconBox: '32px',
      iconFont: '16px',
      nameSize: 'var(--text-xs)',
      streakSize: 'var(--text-2xs)',
      ringSize: 36,
      ringStroke: 3
    },
    md: {
      padding: '16px',
      iconBox: '40px',
      iconFont: '20px',
      nameSize: 'var(--text-sm)',
      streakSize: 'var(--text-xs)',
      ringSize: 44,
      ringStroke: 3.5
    },
    lg: {
      padding: '20px',
      iconBox: '48px',
      iconFont: '24px',
      nameSize: 'var(--text-base)',
      streakSize: 'var(--text-sm)',
      ringSize: 52,
      ringStroke: 4
    }
  };
  const s = sizes[size] || sizes.md;
  const ringRadius = (s.ringSize - s.ringStroke * 2) / 2;
  const circumference = 2 * Math.PI * ringRadius;
  const pct = hasProgress ? Math.min(Math.max(progress / progressMax, 0), 1) : completed ? 1 : 0;
  const offset = circumference * (1 - pct);
  const ringColors = {
    green: '#52B788',
    gold: '#E9A23B',
    lavender: '#9B8EC4',
    sky: '#5BA4CF',
    terra: '#C1665A',
    earth: '#C4956A'
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
      ...style
    },
    onClick: onToggle
  },
  // Top row: icon + streak
  React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, React.createElement('div', {
    style: {
      width: s.iconBox,
      height: s.iconBox,
      borderRadius: 'var(--radius-sm)',
      background: c.iconBg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: s.iconFont,
      flexShrink: 0
    }
  }, icon),
  // Progress ring / checkmark
  React.createElement('div', {
    style: {
      position: 'relative',
      width: s.ringSize + 'px',
      height: s.ringSize + 'px'
    }
  }, React.createElement('svg', {
    width: s.ringSize,
    height: s.ringSize,
    viewBox: `0 0 ${s.ringSize} ${s.ringSize}`,
    style: {
      transform: 'rotate(-90deg)'
    }
  }, React.createElement('circle', {
    cx: s.ringSize / 2,
    cy: s.ringSize / 2,
    r: ringRadius,
    fill: 'none',
    stroke: 'var(--color-border)',
    strokeWidth: s.ringStroke
  }), React.createElement('circle', {
    cx: s.ringSize / 2,
    cy: s.ringSize / 2,
    r: ringRadius,
    fill: 'none',
    stroke: ringFill,
    strokeWidth: s.ringStroke,
    strokeLinecap: 'round',
    strokeDasharray: circumference,
    strokeDashoffset: offset,
    style: {
      transition: 'stroke-dashoffset var(--duration-slow) var(--ease-out)'
    }
  })), completed && React.createElement('span', {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: ringFill,
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--font-bold)'
    }
  }, '✓'))),
  // Name + streak row
  React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '3px'
    }
  }, React.createElement('span', {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: s.nameSize,
      fontWeight: 'var(--font-semibold)',
      color: completed ? c.text : 'var(--color-text-primary)'
    }
  }, name), streak > 0 && React.createElement('span', {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: s.streakSize,
      fontWeight: 'var(--font-medium)',
      color: 'var(--color-text-muted)'
    }
  }, `🔥 ${streak} day streak`)));
}
Object.assign(__ds_scope, { HabitCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/gamification/HabitCard.jsx", error: String((e && e.message) || e) }); }

// components/gamification/StreakBadge.jsx
try { (() => {
function StreakBadge({
  count = 0,
  size = 'md',
  animated = true,
  label,
  style
}) {
  const sizes = {
    sm: {
      padding: '6px 10px',
      gap: '5px',
      flameSize: '14px',
      countSize: 'var(--text-sm)',
      labelSize: 'var(--text-xs)',
      radius: 'var(--radius-sm)'
    },
    md: {
      padding: '8px 14px',
      gap: '6px',
      flameSize: '18px',
      countSize: 'var(--text-lg)',
      labelSize: 'var(--text-xs)',
      radius: 'var(--radius-md)'
    },
    lg: {
      padding: '12px 18px',
      gap: '8px',
      flameSize: '24px',
      countSize: 'var(--text-2xl)',
      labelSize: 'var(--text-sm)',
      radius: 'var(--radius-lg)'
    },
    xl: {
      padding: '16px 24px',
      gap: '10px',
      flameSize: '32px',
      countSize: 'var(--text-3xl)',
      labelSize: 'var(--text-base)',
      radius: 'var(--radius-xl)'
    }
  };
  const s = sizes[size] || sizes.md;

  // Pulse animation keyframes injected once
  React.useEffect(() => {
    if (!animated) return;
    const id = 'bonsai-streak-style';
    if (document.getElementById(id)) return;
    const el = document.createElement('style');
    el.id = id;
    el.textContent = `
      @keyframes streak-pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.12); }
      }
      @keyframes bonsai-spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      @keyframes toast-in {
        from { opacity: 0; transform: translateY(8px) scale(0.95); }
        to { opacity: 1; transform: translateY(0) scale(1); }
      }
    `;
    document.head.appendChild(el);
  }, [animated]);
  return React.createElement('div', {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '4px',
      ...style
    }
  }, React.createElement('div', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: s.gap,
      padding: s.padding,
      borderRadius: s.radius,
      background: 'var(--color-streak-bg)',
      border: '1.5px solid var(--color-gold-200)'
    }
  }, React.createElement('span', {
    style: {
      fontSize: s.flameSize,
      lineHeight: 1,
      display: 'inline-block',
      animation: animated && count > 0 ? 'streak-pulse 2s ease-in-out infinite' : 'none'
    }
  }, '🔥'), React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1px'
    }
  }, React.createElement('span', {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: s.countSize,
      fontWeight: 'var(--font-bold)',
      color: 'var(--color-gold-700)',
      lineHeight: 1
    }
  }, count), React.createElement('span', {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: s.labelSize,
      fontWeight: 'var(--font-medium)',
      color: 'var(--color-earth-500)',
      lineHeight: 1
    }
  }, label || (count === 1 ? 'day streak' : 'day streak')))));
}
Object.assign(__ds_scope, { StreakBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/gamification/StreakBadge.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile_app/AppCoreComponents.jsx
try { (() => {
// AppCoreComponents.jsx — Button, Card, Badge, Input, Avatar, Tag, MoodSelector, ProgressRing, Toast
// Self-contained for UI kit (no _ds_bundle.js dependency)

function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  fullWidth = false,
  leftIcon = null,
  rightIcon = null,
  onClick,
  type = 'button',
  style
}) {
  const sizes = {
    xs: {
      fontSize: 'var(--text-xs)',
      padding: 'var(--space-1) var(--space-3)',
      minHeight: '28px'
    },
    sm: {
      fontSize: 'var(--text-sm)',
      padding: 'var(--space-2) var(--space-4)',
      minHeight: '36px'
    },
    md: {
      fontSize: 'var(--text-base)',
      padding: 'var(--space-3) var(--space-5)',
      minHeight: '44px'
    },
    lg: {
      fontSize: 'var(--text-md)',
      padding: 'var(--space-4) var(--space-7)',
      minHeight: '52px'
    }
  };
  const variants = {
    primary: {
      background: 'var(--color-interactive)',
      color: '#fff',
      borderColor: 'var(--color-interactive)',
      boxShadow: 'var(--shadow-button-primary)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--color-interactive)',
      borderColor: 'var(--color-border-brand)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-text-brand)',
      borderColor: 'transparent'
    },
    soft: {
      background: 'var(--color-bg-brand)',
      color: 'var(--color-interactive)',
      borderColor: 'transparent'
    },
    danger: {
      background: 'var(--color-error)',
      color: '#fff',
      borderColor: 'var(--color-error)'
    },
    'danger-ghost': {
      background: 'transparent',
      color: 'var(--color-error)',
      borderColor: 'transparent'
    }
  };
  const Spinner = () => React.createElement('svg', {
    width: 16,
    height: 16,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2.5,
    style: {
      animation: 'bonsai-spin .8s linear infinite',
      flexShrink: 0
    }
  }, React.createElement('circle', {
    cx: 12,
    cy: 12,
    r: 10,
    strokeOpacity: .25
  }), React.createElement('path', {
    d: 'M12 2a10 10 0 0 1 10 10',
    strokeLinecap: 'round'
  }));
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: 'var(--font-sans)',
    fontWeight: 'var(--font-semibold)',
    letterSpacing: 'var(--tracking-wide)',
    borderRadius: 'var(--radius-button)',
    border: '1.5px solid transparent',
    cursor: disabled || loading ? 'not-allowed' : 'pointer',
    transition: 'var(--transition-color),box-shadow var(--duration-normal) var(--ease-out),transform var(--duration-fast) var(--ease-out)',
    whiteSpace: 'nowrap',
    width: fullWidth ? '100%' : 'auto',
    opacity: disabled ? 0.55 : 1,
    userSelect: 'none',
    outline: 'none'
  };
  return React.createElement('button', {
    type,
    disabled: disabled || loading,
    onClick,
    style: {
      ...base,
      ...sizes[size],
      ...variants[variant],
      ...style
    },
    onMouseEnter: e => {
      if (!disabled && !loading && variant === 'primary') e.currentTarget.style.background = 'var(--color-interactive-hover)';
    },
    onMouseLeave: e => {
      if (!disabled && !loading) e.currentTarget.style.background = variants[variant]?.background || '';
    },
    onMouseDown: e => {
      if (!disabled && !loading) e.currentTarget.style.transform = 'scale(0.96)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onFocus: e => {
      e.currentTarget.style.boxShadow = 'var(--shadow-focus-brand)';
    },
    onBlur: e => {
      e.currentTarget.style.boxShadow = variants[variant]?.boxShadow || 'none';
    }
  }, loading && React.createElement(Spinner), leftIcon && !loading && React.createElement('span', {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, leftIcon), children, rightIcon && React.createElement('span', {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, rightIcon));
}
function Card({
  children,
  variant = 'default',
  padding = 'md',
  radius = 'card',
  as: Tag = 'div',
  onClick,
  style
}) {
  const variants = {
    default: {
      background: 'var(--color-bg-surface)',
      boxShadow: 'var(--shadow-card)',
      border: 'none'
    },
    elevated: {
      background: 'var(--color-bg-surface)',
      boxShadow: 'var(--shadow-lg)',
      border: 'none'
    },
    bordered: {
      background: 'var(--color-bg-surface)',
      boxShadow: 'var(--shadow-xs)',
      border: '1.5px solid var(--color-border)'
    },
    muted: {
      background: 'var(--color-bg-muted)',
      boxShadow: 'none',
      border: 'none'
    },
    brand: {
      background: 'var(--color-bg-brand)',
      boxShadow: 'none',
      border: '1.5px solid var(--color-border-brand)'
    }
  };
  const paddings = {
    none: '0',
    sm: 'var(--padding-card-sm)',
    md: 'var(--padding-card-md)',
    lg: 'var(--padding-card-lg)'
  };
  const radii = {
    card: 'var(--radius-card)',
    'card-inner': 'var(--radius-card-inner)',
    lg: 'var(--radius-lg)',
    xl: 'var(--radius-xl)'
  };
  return React.createElement(Tag, {
    onClick,
    style: {
      ...variants[variant],
      borderRadius: radii[radius] || radii.card,
      padding: paddings[padding],
      position: 'relative',
      overflow: 'hidden',
      cursor: onClick ? 'pointer' : 'default',
      ...style
    }
  }, children);
}
function Badge({
  children,
  color = 'green',
  size = 'md',
  dot = false,
  style
}) {
  const colors = {
    green: {
      bg: 'var(--color-green-100)',
      text: 'var(--color-green-700)',
      dot: 'var(--color-green-500)'
    },
    sage: {
      bg: 'var(--color-brand-light)',
      text: 'var(--color-brand-mid)',
      dot: 'var(--color-brand)'
    },
    gold: {
      bg: 'var(--color-gold-100)',
      text: 'var(--color-gold-700)',
      dot: 'var(--color-gold-500)'
    },
    terra: {
      bg: 'var(--color-terra-100)',
      text: 'var(--color-terra-600)',
      dot: 'var(--color-terra-500)'
    },
    lavender: {
      bg: 'var(--color-lavender-100)',
      text: 'var(--color-lavender-600)',
      dot: 'var(--color-lavender-500)'
    },
    sky: {
      bg: 'var(--color-sky-100)',
      text: 'var(--color-sky-600)',
      dot: 'var(--color-sky-500)'
    },
    earth: {
      bg: 'var(--color-earth-100)',
      text: 'var(--color-earth-700)',
      dot: 'var(--color-earth-500)'
    },
    dark: {
      bg: 'var(--color-earth-800)',
      text: '#fff',
      dot: 'var(--color-green-400)'
    },
    great: {
      bg: 'var(--color-green-100)',
      text: 'var(--color-green-700)',
      dot: 'var(--color-wellness-great)'
    },
    good: {
      bg: 'var(--color-green-50)',
      text: 'var(--color-green-600)',
      dot: 'var(--color-wellness-good)'
    },
    okay: {
      bg: 'var(--color-gold-100)',
      text: 'var(--color-gold-600)',
      dot: 'var(--color-wellness-okay)'
    },
    low: {
      bg: 'var(--color-terra-50)',
      text: 'var(--color-terra-500)',
      dot: 'var(--color-wellness-low)'
    },
    stressed: {
      bg: 'var(--color-terra-100)',
      text: 'var(--color-terra-600)',
      dot: 'var(--color-wellness-stressed)'
    }
  };
  const sizes = {
    sm: {
      fontSize: 'var(--text-2xs)',
      padding: '2px 8px',
      fontWeight: 'var(--font-semibold)'
    },
    md: {
      fontSize: 'var(--text-xs)',
      padding: '4px 10px',
      fontWeight: 'var(--font-medium)'
    },
    lg: {
      fontSize: 'var(--text-sm)',
      padding: '5px 12px',
      fontWeight: 'var(--font-medium)'
    }
  };
  const c = colors[color] || colors.green,
    s = sizes[size] || sizes.md;
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '5px',
      borderRadius: 'var(--radius-badge)',
      background: c.bg,
      color: c.text,
      fontFamily: 'var(--font-sans)',
      letterSpacing: 'var(--tracking-wide)',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      flexShrink: 0,
      ...s,
      ...style
    }
  }, dot && React.createElement('span', {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: c.dot,
      flexShrink: 0
    }
  }), children);
}
function Input({
  label,
  helper,
  error,
  leftIcon,
  rightIcon,
  size = 'md',
  disabled = false,
  id,
  style,
  containerStyle,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const sizes = {
    sm: {
      fontSize: 'var(--text-sm)',
      height: '36px'
    },
    md: {
      fontSize: 'var(--text-base)',
      height: '44px'
    },
    lg: {
      fontSize: 'var(--text-md)',
      height: '52px'
    }
  };
  const s = sizes[size] || sizes.md;
  const borderColor = error ? 'var(--color-error)' : focused ? 'var(--color-border-focus)' : 'var(--color-border)';
  const boxShadow = error ? focused ? 'var(--shadow-focus-error)' : 'none' : focused ? 'var(--shadow-focus-brand)' : 'none';
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      ...containerStyle
    }
  }, label && React.createElement('label', {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--font-medium)',
      color: error ? 'var(--color-error)' : 'var(--color-text-secondary)',
      lineHeight: 1
    }
  }, label), React.createElement('div', {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, leftIcon && React.createElement('span', {
    style: {
      position: 'absolute',
      left: '14px',
      display: 'flex',
      alignItems: 'center',
      color: 'var(--color-text-muted)',
      pointerEvents: 'none'
    }
  }, leftIcon), React.createElement('input', {
    id: inputId,
    disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      width: '100%',
      height: s.height,
      fontFamily: 'var(--font-sans)',
      fontSize: s.fontSize,
      color: 'var(--color-text-primary)',
      background: disabled ? 'var(--color-bg-muted)' : 'var(--color-bg-surface)',
      border: `1.5px solid ${borderColor}`,
      borderRadius: 'var(--radius-input)',
      padding: `0 ${rightIcon ? '40px' : '14px'} 0 ${leftIcon ? '40px' : '14px'}`,
      outline: 'none',
      boxShadow,
      transition: 'border-color var(--duration-fast) var(--ease-out),box-shadow var(--duration-fast) var(--ease-out)',
      cursor: disabled ? 'not-allowed' : 'text',
      opacity: disabled ? 0.6 : 1,
      ...style
    },
    ...rest
  }), rightIcon && React.createElement('span', {
    style: {
      position: 'absolute',
      right: '14px',
      display: 'flex',
      alignItems: 'center',
      color: 'var(--color-text-muted)',
      pointerEvents: 'none'
    }
  }, rightIcon)), (error || helper) && React.createElement('p', {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--color-error)' : 'var(--color-text-muted)'
    }
  }, error || helper));
}
function Avatar({
  src,
  name,
  size = 'md',
  wellnessColor,
  showRing = false,
  style
}) {
  const sizes = {
    xs: {
      outer: 28,
      inner: 24,
      font: 'var(--text-2xs)',
      ring: 2
    },
    sm: {
      outer: 36,
      inner: 30,
      font: 'var(--text-xs)',
      ring: 2.5
    },
    md: {
      outer: 44,
      inner: 38,
      font: 'var(--text-sm)',
      ring: 3
    },
    lg: {
      outer: 56,
      inner: 48,
      font: 'var(--text-base)',
      ring: 3
    },
    xl: {
      outer: 72,
      inner: 62,
      font: 'var(--text-lg)',
      ring: 3.5
    },
    '2xl': {
      outer: 96,
      inner: 84,
      font: 'var(--text-xl)',
      ring: 4
    }
  };
  const s = sizes[size] || sizes.md;
  const initials = name ? name.trim().split(/\s+/).slice(0, 2).map(w => w[0].toUpperCase()).join('') : '?';
  const wc = {
    great: 'var(--color-wellness-great)',
    good: 'var(--color-wellness-good)',
    okay: 'var(--color-wellness-okay)',
    low: 'var(--color-wellness-low)',
    stressed: 'var(--color-wellness-stressed)'
  };
  const ringColor = wellnessColor ? wc[wellnessColor] || wellnessColor : 'var(--color-border-brand)';
  return React.createElement('div', {
    style: {
      width: s.outer + 'px',
      height: s.outer + 'px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      background: showRing ? `conic-gradient(${ringColor} 0deg,${ringColor} 270deg,var(--color-border) 270deg)` : 'transparent',
      padding: showRing ? s.ring + 'px' : '0',
      ...style
    }
  }, React.createElement('div', {
    style: {
      width: showRing ? '100%' : s.outer + 'px',
      height: showRing ? '100%' : s.outer + 'px',
      borderRadius: '50%',
      overflow: 'hidden',
      background: 'var(--color-earth-100)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: showRing ? '2px solid var(--color-bg-surface)' : 'none',
      flexShrink: 0
    }
  }, src ? React.createElement('img', {
    src,
    alt: name || 'Avatar',
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : React.createElement('span', {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: s.font,
      fontWeight: 'var(--font-semibold)',
      color: 'var(--color-text-secondary)',
      lineHeight: 1,
      userSelect: 'none'
    }
  }, initials)));
}
function Tag({
  children,
  color = 'earth',
  size = 'md',
  icon = null,
  removable = false,
  onRemove,
  onClick,
  active = false,
  style
}) {
  const colors = {
    earth: {
      bg: 'var(--color-earth-100)',
      text: 'var(--color-earth-700)',
      activeBg: 'var(--color-earth-200)',
      border: 'var(--color-earth-200)'
    },
    green: {
      bg: 'var(--color-green-50)',
      text: 'var(--color-green-700)',
      activeBg: 'var(--color-green-100)',
      border: 'var(--color-green-200)'
    },
    gold: {
      bg: 'var(--color-gold-50)',
      text: 'var(--color-gold-700)',
      activeBg: 'var(--color-gold-100)',
      border: 'var(--color-gold-200)'
    },
    terra: {
      bg: 'var(--color-terra-50)',
      text: 'var(--color-terra-600)',
      activeBg: 'var(--color-terra-100)',
      border: 'var(--color-terra-200)'
    },
    lavender: {
      bg: 'var(--color-lavender-50)',
      text: 'var(--color-lavender-600)',
      activeBg: 'var(--color-lavender-100)',
      border: 'var(--color-lavender-200)'
    },
    sky: {
      bg: 'var(--color-sky-50)',
      text: 'var(--color-sky-600)',
      activeBg: 'var(--color-sky-100)',
      border: 'var(--color-sky-200)'
    }
  };
  const sizes = {
    sm: {
      fontSize: 'var(--text-xs)',
      padding: '4px 10px',
      gap: '4px'
    },
    md: {
      fontSize: 'var(--text-sm)',
      padding: '6px 12px',
      gap: '5px'
    },
    lg: {
      fontSize: 'var(--text-base)',
      padding: '8px 14px',
      gap: '6px'
    }
  };
  const c = colors[color] || colors.earth,
    s = sizes[size] || sizes.md;
  return React.createElement('span', {
    onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: s.gap,
      borderRadius: 'var(--radius-tag)',
      background: active ? c.activeBg : c.bg,
      color: c.text,
      border: `1px solid ${c.border}`,
      fontFamily: 'var(--font-sans)',
      fontSize: s.fontSize,
      fontWeight: 'var(--font-medium)',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      cursor: onClick ? 'pointer' : 'default',
      userSelect: 'none',
      padding: s.padding,
      ...style
    }
  }, icon && React.createElement('span', {
    style: {
      display: 'flex',
      alignItems: 'center',
      flexShrink: 0
    }
  }, icon), children, removable && React.createElement('button', {
    onClick: e => {
      e.stopPropagation();
      onRemove && onRemove();
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'none',
      border: 'none',
      padding: '0',
      cursor: 'pointer',
      color: 'inherit',
      opacity: .6,
      marginLeft: '2px',
      lineHeight: 1
    }
  }, '×'));
}
function MoodSelector({
  value,
  onChange,
  size = 'md',
  showLabels = true,
  style
}) {
  const moods = [{
    id: 'great',
    emoji: '😄',
    label: 'Amazing',
    color: 'var(--color-wellness-great)',
    bg: 'var(--color-green-50)',
    border: 'var(--color-green-300)'
  }, {
    id: 'good',
    emoji: '🙂',
    label: 'Good',
    color: 'var(--color-wellness-good)',
    bg: 'var(--color-green-50)',
    border: 'var(--color-green-200)'
  }, {
    id: 'okay',
    emoji: '😐',
    label: 'Okay',
    color: 'var(--color-wellness-okay)',
    bg: 'var(--color-gold-50)',
    border: 'var(--color-gold-200)'
  }, {
    id: 'low',
    emoji: '😔',
    label: 'Low',
    color: 'var(--color-wellness-low)',
    bg: 'var(--color-terra-50)',
    border: 'var(--color-terra-200)'
  }, {
    id: 'stressed',
    emoji: '😰',
    label: 'Rough',
    color: 'var(--color-wellness-stressed)',
    bg: 'var(--color-terra-100)',
    border: 'var(--color-terra-300)'
  }];
  const sizes = {
    sm: {
      box: 52,
      emoji: '20px',
      labelSize: 'var(--text-2xs)'
    },
    md: {
      box: 64,
      emoji: '26px',
      labelSize: 'var(--text-xs)'
    },
    lg: {
      box: 76,
      emoji: '32px',
      labelSize: 'var(--text-sm)'
    }
  };
  const s = sizes[size] || sizes.md;
  return React.createElement('div', {
    style: {
      display: 'flex',
      gap: '8px',
      alignItems: 'flex-start',
      ...style
    }
  }, moods.map(mood => {
    const selected = value === mood.id;
    return React.createElement('button', {
      key: mood.id,
      onClick: () => onChange && onChange(mood.id),
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '5px',
        flex: 1,
        padding: '8px 4px',
        borderRadius: 'var(--radius-lg)',
        border: `1.5px solid ${selected ? mood.border : 'var(--color-border)'}`,
        background: selected ? mood.bg : 'var(--color-bg-surface)',
        cursor: 'pointer',
        transition: 'var(--transition-color),transform var(--duration-fast) var(--ease-bounce)',
        transform: selected ? 'scale(1.06)' : 'scale(1)',
        boxShadow: selected ? 'var(--shadow-sm)' : 'none',
        outline: 'none',
        WebkitTapHighlightColor: 'transparent'
      },
      onMouseEnter: e => {
        if (!selected) e.currentTarget.style.background = mood.bg;
      },
      onMouseLeave: e => {
        if (!selected) e.currentTarget.style.background = 'var(--color-bg-surface)';
      }
    }, React.createElement('span', {
      style: {
        fontSize: s.emoji,
        lineHeight: 1,
        display: 'block'
      }
    }, mood.emoji), showLabels && React.createElement('span', {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: s.labelSize,
        fontWeight: selected ? 'var(--font-semibold)' : 'var(--font-medium)',
        color: selected ? mood.color : 'var(--color-text-muted)',
        lineHeight: 1
      }
    }, mood.label));
  }));
}
function ProgressRing({
  value = 0,
  max = 100,
  size = 56,
  strokeWidth = 4,
  color = 'green',
  trackColor,
  label,
  sublabel,
  style
}) {
  const colors = {
    green: 'var(--color-green-500)',
    brand: 'var(--color-brand)',
    gold: 'var(--color-gold-500)',
    terra: 'var(--color-terra-500)',
    lavender: 'var(--color-lavender-500)',
    sky: 'var(--color-sky-500)',
    earth: 'var(--color-earth-400)'
  };
  const strokeColor = colors[color] || color,
    trackStroke = trackColor || 'var(--color-border)';
  const radius = (size - strokeWidth * 2) / 2,
    circumference = 2 * Math.PI * radius;
  const pct = Math.min(Math.max(value / max, 0), 1),
    offset = circumference * (1 - pct),
    center = size / 2;
  return React.createElement('div', {
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size + 'px',
      height: size + 'px',
      flexShrink: 0,
      ...style
    }
  }, React.createElement('svg', {
    width: size,
    height: size,
    viewBox: `0 0 ${size} ${size}`,
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      transform: 'rotate(-90deg)'
    }
  }, React.createElement('circle', {
    cx: center,
    cy: center,
    r: radius,
    fill: 'none',
    stroke: trackStroke,
    strokeWidth
  }), React.createElement('circle', {
    cx: center,
    cy: center,
    r: radius,
    fill: 'none',
    stroke: strokeColor,
    strokeWidth,
    strokeLinecap: 'round',
    strokeDasharray: circumference,
    strokeDashoffset: offset,
    style: {
      transition: 'stroke-dashoffset var(--duration-slow) var(--ease-out)'
    }
  })), React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1px',
      zIndex: 1
    }
  }, label && React.createElement('span', {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: size < 50 ? 'var(--text-xs)' : 'var(--text-sm)',
      fontWeight: 'var(--font-bold)',
      color: 'var(--color-text-primary)',
      lineHeight: 1
    }
  }, label), sublabel && React.createElement('span', {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-2xs)',
      fontWeight: 'var(--font-medium)',
      color: 'var(--color-text-muted)',
      lineHeight: 1
    }
  }, sublabel)));
}
function Toast({
  message,
  type = 'default',
  icon,
  onDismiss,
  style
}) {
  const types = {
    default: {
      bg: 'var(--color-earth-800)',
      text: '#fff',
      icon: null
    },
    success: {
      bg: 'var(--color-green-800)',
      text: '#fff',
      icon: '✓'
    },
    warning: {
      bg: 'var(--color-gold-100)',
      text: 'var(--color-gold-700)',
      icon: '!'
    },
    error: {
      bg: 'var(--color-terra-600)',
      text: '#fff',
      icon: '✕'
    },
    info: {
      bg: 'var(--color-sky-600)',
      text: '#fff',
      icon: 'i'
    },
    growth: {
      bg: 'var(--color-green-700)',
      text: '#fff',
      icon: '🌿'
    }
  };
  const t = types[type] || types.default,
    displayIcon = icon !== undefined ? icon : t.icon;
  return React.createElement('div', {
    role: 'alert',
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      padding: '12px 16px',
      borderRadius: 'var(--radius-toast)',
      background: t.bg,
      color: t.text,
      boxShadow: 'var(--shadow-toast)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--font-medium)',
      maxWidth: '360px',
      minWidth: '200px',
      ...style
    }
  }, displayIcon && React.createElement('span', {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: 'rgba(255,255,255,.15)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--font-bold)',
      flexShrink: 0,
      lineHeight: 1
    }
  }, displayIcon), React.createElement('span', {
    style: {
      flex: 1
    }
  }, message), onDismiss && React.createElement('button', {
    onClick: onDismiss,
    style: {
      display: 'flex',
      alignItems: 'center',
      background: 'none',
      border: 'none',
      color: 'inherit',
      opacity: .7,
      cursor: 'pointer',
      padding: '0',
      marginLeft: '4px',
      fontSize: 'var(--text-base)',
      lineHeight: 1,
      flexShrink: 0
    }
  }, '×'));
}
Object.assign(window, {
  Button,
  Card,
  Badge,
  Input,
  Avatar,
  Tag,
  MoodSelector,
  ProgressRing,
  Toast
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile_app/AppCoreComponents.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile_app/AppGameComponents.jsx
try { (() => {
// AppGameComponents.jsx — dark-theme BonsaiTree, HabitCard, StreakBadge
// BonsaiTree uses glow/opacity layers matching the real Whimsical Intuition App

function BonsaiTree({
  branches,
  level,
  size = 1,
  showLabels = false,
  style
}) {
  const b = level !== undefined ? {
    self: level,
    purpose: level,
    character: level,
    relationships: level
  } : {
    self: 3,
    purpose: 3,
    character: 3,
    relationships: 3,
    ...(branches || {})
  };
  const clamp = v => Math.min(Math.max(Math.round(v ?? 0), 0), 5);
  const lvl = {
    self: clamp(b.self),
    purpose: clamp(b.purpose),
    character: clamp(b.character),
    relationships: clamp(b.relationships)
  };
  const w = 160 * size,
    h = 180 * size;
  const sage = "#34d399",
    violet = "#a78bfa",
    blue = "#60a5fa",
    plum = "#c084fc",
    mint = "#6ee7b7";
  const trunk = "#7c5cbf",
    pot = "#2d2550",
    potRim = "#3d3270";
  const tr = "opacity 700ms ease";

  // Glow cluster helper — renders concentric circles from outer glow to inner solid
  const G = (cx, cy, color, show, rList, oList) => rList.map((r, i) => React.createElement('circle', {
    key: r,
    cx,
    cy,
    r,
    fill: color,
    opacity: show ? oList[i] : 0,
    style: {
      transition: tr
    }
  }));
  return /*#__PURE__*/React.createElement("svg", {
    width: w,
    height: h,
    viewBox: "0 0 160 180",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: style
  }, /*#__PURE__*/React.createElement("rect", {
    x: "52",
    y: "152",
    width: "56",
    height: "22",
    rx: "5",
    fill: pot
  }), /*#__PURE__*/React.createElement("rect", {
    x: "44",
    y: "146",
    width: "72",
    height: "10",
    rx: "4",
    fill: potRim
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "80",
    cy: "146",
    rx: "30",
    ry: "4",
    fill: "rgba(52,211,153,0.06)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M80 146 Q77 118 74 96 Q71 78 76 60",
    stroke: trunk,
    strokeWidth: "6.5",
    strokeLinecap: "round"
  }), lvl.relationships >= 1 && /*#__PURE__*/React.createElement("path", {
    d: "M75 130 Q58 122 44 116",
    stroke: trunk,
    strokeWidth: "3.5",
    strokeLinecap: "round"
  }), lvl.relationships >= 1 && /*#__PURE__*/React.createElement("path", {
    d: "M76 124 Q92 116 108 112",
    stroke: trunk,
    strokeWidth: "3.5",
    strokeLinecap: "round"
  }), lvl.self >= 1 && /*#__PURE__*/React.createElement("path", {
    d: "M75 105 Q60 92 46 76",
    stroke: trunk,
    strokeWidth: "4",
    strokeLinecap: "round"
  }), lvl.character >= 1 && /*#__PURE__*/React.createElement("path", {
    d: "M75 88 Q90 76 100 60",
    stroke: trunk,
    strokeWidth: "3.5",
    strokeLinecap: "round"
  }), lvl.relationships >= 3 && /*#__PURE__*/React.createElement("path", {
    d: "M55 84 Q44 74 38 62",
    stroke: trunk,
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }), lvl.purpose >= 3 && /*#__PURE__*/React.createElement("path", {
    d: "M77 72 Q88 60 94 48",
    stroke: trunk,
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }), G(44, 114, plum, lvl.relationships >= 1, [20, 14, 9, 5.5], [0.08, 0.18, 0.48, 0.82]), lvl.relationships >= 2 && G(108, 110, plum, true, [17, 12, 8, 5], [0.08, 0.18, 0.48, 0.82]), lvl.relationships >= 3 && G(36, 56, plum, true, [13, 9, 5.5], [0.2, 0.5, 0.85]), G(44, 68, violet, lvl.self >= 1, [20, 15, 10, 6], [0.10, 0.22, 0.55, 0.88]), lvl.self >= 2 && G(36, 54, violet, true, [12, 8, 5], [0.15, 0.38, 0.72]), lvl.self >= 4 && G(50, 42, violet, true, [8, 5, 3], [0.18, 0.42, 0.78]), G(102, 54, blue, lvl.character >= 1, [18, 13, 9, 5.5], [0.10, 0.22, 0.55, 0.88]), lvl.character >= 2 && G(112, 44, blue, true, [13, 9, 5.5], [0.12, 0.28, 0.65]), lvl.character >= 4 && G(98, 62, blue, true, [7, 5], [0.25, 0.55]), G(78, 42, sage, lvl.purpose >= 1, [32, 26, 20, 14, 9], [0.08, 0.14, 0.28, 0.65, 0.90]), lvl.purpose >= 2 && G(66, 30, mint, true, [10, 7], [0.45, 0.45]), lvl.purpose >= 2 && G(90, 32, mint, true, [9, 6], [0.45, 0.45]), lvl.purpose >= 4 && /*#__PURE__*/React.createElement(React.Fragment, null, G(96, 40, sage, true, [12, 8], [0.30, 0.65]), G(58, 26, sage, true, [9], [0.55])), lvl.purpose >= 5 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "60",
    cy: "36",
    r: "2",
    fill: "#fff",
    opacity: "0.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "86",
    cy: "34",
    r: "1.5",
    fill: "#fff",
    opacity: "0.4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "44",
    cy: "60",
    r: "1.5",
    fill: "#fff",
    opacity: "0.4"
  })), showLabels && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("text", {
    x: "40",
    y: "82",
    fill: violet,
    fontSize: "7",
    fontWeight: "600",
    textAnchor: "end",
    fontFamily: "DM Sans,sans-serif"
  }, "Self"), /*#__PURE__*/React.createElement("text", {
    x: "112",
    y: "58",
    fill: blue,
    fontSize: "7",
    fontWeight: "600",
    textAnchor: "start",
    fontFamily: "DM Sans,sans-serif"
  }, "Character"), /*#__PURE__*/React.createElement("text", {
    x: "80",
    y: "14",
    fill: sage,
    fontSize: "7",
    fontWeight: "600",
    textAnchor: "middle",
    fontFamily: "DM Sans,sans-serif"
  }, "Purpose"), /*#__PURE__*/React.createElement("text", {
    x: "80",
    y: "140",
    fill: plum,
    fontSize: "7",
    fontWeight: "600",
    textAnchor: "middle",
    fontFamily: "DM Sans,sans-serif"
  }, "Relationships")));
}
function HabitCard({
  name,
  icon,
  color = 'violet',
  streak = 0,
  completed = false,
  progress,
  progressMax = 100,
  onToggle,
  size = 'md',
  style
}) {
  const colorMap = {
    violet: {
      bg: 'rgba(167,139,250,0.1)',
      text: '#a78bfa',
      iconBg: 'rgba(167,139,250,0.15)',
      ring: '#a78bfa'
    },
    green: {
      bg: 'rgba(52,211,153,0.08)',
      text: '#34d399',
      iconBg: 'rgba(52,211,153,0.12)',
      ring: '#34d399'
    },
    blue: {
      bg: 'rgba(96,165,250,0.08)',
      text: '#60a5fa',
      iconBg: 'rgba(96,165,250,0.12)',
      ring: '#60a5fa'
    },
    plum: {
      bg: 'rgba(192,132,252,0.08)',
      text: '#c084fc',
      iconBg: 'rgba(192,132,252,0.12)',
      ring: '#c084fc'
    },
    sage: {
      bg: 'rgba(52,211,153,0.08)',
      text: '#34d399',
      iconBg: 'rgba(52,211,153,0.12)',
      ring: '#34d399'
    },
    gold: {
      bg: 'rgba(251,191,36,0.08)',
      text: '#fbbf24',
      iconBg: 'rgba(251,191,36,0.12)',
      ring: '#fbbf24'
    },
    earth: {
      bg: 'rgba(167,139,250,0.06)',
      text: '#7e72a8',
      iconBg: 'rgba(167,139,250,0.1)',
      ring: '#7e72a8'
    },
    lavender: {
      bg: 'rgba(167,139,250,0.1)',
      text: '#a78bfa',
      iconBg: 'rgba(167,139,250,0.15)',
      ring: '#a78bfa'
    },
    sky: {
      bg: 'rgba(96,165,250,0.08)',
      text: '#60a5fa',
      iconBg: 'rgba(96,165,250,0.12)',
      ring: '#60a5fa'
    }
  };
  const c = colorMap[color] || colorMap.violet;
  const sizes = {
    sm: {
      p: '10px',
      ib: '28px',
      if: '14px',
      ns: '11px',
      ss: '10px',
      rs: 32,
      rw: 3
    },
    md: {
      p: '14px',
      ib: '36px',
      if: '18px',
      ns: '13px',
      ss: '11px',
      rs: 40,
      rw: 3.5
    },
    lg: {
      p: '18px',
      ib: '44px',
      if: '22px',
      ns: '15px',
      ss: '12px',
      rs: 48,
      rw: 4
    }
  };
  const s = sizes[size] || sizes.md;
  const rr = (s.rs - s.rw * 2) / 2,
    circ = 2 * Math.PI * rr;
  const pct = progress !== undefined ? Math.min(Math.max(progress / progressMax, 0), 1) : completed ? 1 : 0;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onToggle,
    style: {
      background: completed ? c.bg : '#17122a',
      borderRadius: 16,
      padding: s.p,
      border: `1px solid ${completed ? c.ring + '40' : 'rgba(167,139,250,0.1)'}`,
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      cursor: onToggle ? 'pointer' : 'default',
      userSelect: 'none',
      transition: 'all 180ms ease',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: s.ib,
      height: s.ib,
      borderRadius: 10,
      background: c.iconBg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: s.if
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: s.rs + 'px',
      height: s.rs + 'px'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: s.rs,
    height: s.rs,
    viewBox: `0 0 ${s.rs} ${s.rs}`,
    style: {
      transform: 'rotate(-90deg)'
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: s.rs / 2,
    cy: s.rs / 2,
    r: rr,
    fill: "none",
    stroke: "rgba(167,139,250,0.1)",
    strokeWidth: s.rw
  }), /*#__PURE__*/React.createElement("circle", {
    cx: s.rs / 2,
    cy: s.rs / 2,
    r: rr,
    fill: "none",
    stroke: c.ring,
    strokeWidth: s.rw,
    strokeLinecap: "round",
    strokeDasharray: circ,
    strokeDashoffset: circ * (1 - pct),
    style: {
      transition: 'stroke-dashoffset .4s ease'
    }
  })), completed && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: c.ring,
      fontSize: '11px',
      fontWeight: 700
    }
  }, "\u2713"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'DM Sans,sans-serif',
      fontSize: s.ns,
      fontWeight: 500,
      color: completed ? c.text : '#e4dff5'
    }
  }, name), streak > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'DM Sans,sans-serif',
      fontSize: s.ss,
      color: '#7e72a8'
    }
  }, "\uD83D\uDD25 ", streak, " day streak")));
}
function StreakBadge({
  count = 0,
  size = 'md',
  label,
  style
}) {
  const sizes = {
    sm: {
      p: '6px 10px',
      fs: '14px',
      cs: '13px',
      ls: '11px',
      r: 8
    },
    md: {
      p: '8px 14px',
      fs: '18px',
      cs: '17px',
      ls: '11px',
      r: 10
    },
    lg: {
      p: '10px 16px',
      fs: '22px',
      cs: '22px',
      ls: '13px',
      r: 12
    }
  };
  const s = sizes[size] || sizes.md;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      padding: s.p,
      borderRadius: s.r,
      background: 'rgba(251,191,36,0.1)',
      border: '1px solid rgba(251,191,36,0.2)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: s.fs,
      lineHeight: 1
    }
  }, "\uD83D\uDD25"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'DM Sans,sans-serif',
      fontSize: s.cs,
      fontWeight: 700,
      color: '#fbbf24',
      lineHeight: 1
    }
  }, count), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'DM Sans,sans-serif',
      fontSize: s.ls,
      fontWeight: 500,
      color: '#7e72a8',
      lineHeight: 1
    }
  }, label || 'day streak')));
}
Object.assign(window, {
  BonsaiTree,
  HabitCard,
  StreakBadge
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile_app/AppGameComponents.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile_app/AppShared.jsx
try { (() => {
// AppShared.jsx — dark theme nav + ScreenWrapper for BonsAI UI kit

// Lucide-style icon SVGs matching the real app
const HomeIcon = () => /*#__PURE__*/React.createElement("svg", {
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.75",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "9 22 9 12 15 12 15 22"
}));
const CalendarIcon = () => /*#__PURE__*/React.createElement("svg", {
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.75",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "4",
  width: "18",
  height: "18",
  rx: "2"
}), /*#__PURE__*/React.createElement("line", {
  x1: "16",
  y1: "2",
  x2: "16",
  y2: "6"
}), /*#__PURE__*/React.createElement("line", {
  x1: "8",
  y1: "2",
  x2: "8",
  y2: "6"
}), /*#__PURE__*/React.createElement("line", {
  x1: "3",
  y1: "10",
  x2: "21",
  y2: "10"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "8",
  cy: "14",
  r: "1",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "14",
  r: "1",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "16",
  cy: "14",
  r: "1",
  fill: "currentColor"
}));
const HeartIcon = () => /*#__PURE__*/React.createElement("svg", {
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.75",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
}));
const ChatIcon = () => /*#__PURE__*/React.createElement("svg", {
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.75",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
}));
const ChartIcon = () => /*#__PURE__*/React.createElement("svg", {
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.75",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("line", {
  x1: "18",
  y1: "20",
  x2: "18",
  y2: "10"
}), /*#__PURE__*/React.createElement("line", {
  x1: "12",
  y1: "20",
  x2: "12",
  y2: "4"
}), /*#__PURE__*/React.createElement("line", {
  x1: "6",
  y1: "20",
  x2: "6",
  y2: "14"
}));
const tabs = [{
  id: 'home',
  icon: HomeIcon,
  label: 'Home'
}, {
  id: 'today',
  icon: CalendarIcon,
  label: 'Today'
}, {
  id: 'checkin',
  icon: HeartIcon,
  label: 'Check in'
}, {
  id: 'chat',
  icon: ChatIcon,
  label: 'BonsAI'
}, {
  id: 'insights',
  icon: ChartIcon,
  label: 'Insights'
}];
function BottomNav({
  active,
  nav
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 80,
      flexShrink: 0,
      background: '#17122a',
      borderTop: '1px solid rgba(167,139,250,0.08)',
      display: 'flex',
      alignItems: 'center',
      padding: '0 8px 16px',
      position: 'relative'
    }
  }, tabs.map(t => {
    const isActive = active === t.id;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      onClick: () => nav(t.id),
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
        padding: '8px 4px',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        color: isActive ? '#a78bfa' : '#7e72a8',
        transition: 'color 200ms ease',
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        transition: 'transform 200ms ease',
        transform: isActive ? 'scale(1.1)' : 'scale(1)'
      }
    }, /*#__PURE__*/React.createElement(t.icon, null)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'DM Sans, sans-serif',
        fontSize: '0.625rem',
        fontWeight: isActive ? 600 : 400,
        letterSpacing: '0.02em'
      }
    }, t.label), isActive && /*#__PURE__*/React.createElement("div", {
      style: {
        width: 16,
        height: 2,
        borderRadius: 99,
        background: '#a78bfa',
        position: 'absolute',
        bottom: -8
      }
    }));
  }));
}
function ScreenWrapper({
  children,
  nav,
  active,
  scrollable = true
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: '#0e0b1a',
      overflow: 'hidden',
      fontFamily: 'DM Sans, sans-serif'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: scrollable ? 'auto' : 'hidden',
      overflowX: 'hidden',
      WebkitOverflowScrolling: 'touch'
    }
  }, children), /*#__PURE__*/React.createElement(BottomNav, {
    active: active,
    nav: nav
  }));
}
Object.assign(window, {
  BottomNav,
  ScreenWrapper
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile_app/AppShared.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile_app/ChatScreen.jsx
try { (() => {
// ChatScreen.jsx — port of real Whimsical Intuition App ChatScreen

function ChatScreen({
  nav
}) {
  const {
    ScreenWrapper
  } = window;
  const V = "#a78bfa",
    SAGE = "#34d399";
  const MUTED = "#7e72a8",
    FG = "#e4dff5",
    CARD = "#17122a",
    RAISED = "#1e1836";
  const [messages, setMessages] = React.useState([{
    from: "ai",
    text: "Hey, I noticed you've been keeping your streak going for the past 3 days. That's real — how's it feeling?"
  }, {
    from: "user",
    text: "Honestly pretty good but I'm stressed about the calc test tomorrow"
  }, {
    from: "ai",
    text: "That's completely understandable. Let's take a look at your week and see what we can shift around. Want to talk about it?"
  }]);
  const [input, setInput] = React.useState("");
  const [focused, setFocused] = React.useState(false);
  const bottomRef = React.useRef(null);
  const aiReplies = ["I hear you. What's the part that feels most uncertain right now?", "That makes sense given your week. One thing at a time — what would help most right now?", "You're doing more than you think. Want me to help you map out a plan?", "Even a bonsai rests in winter. It's okay to slow down today."];
  const suggestions = ["Suggestions for me", "Study Smart", "Reach Out", "Kindness Challenge"];
  React.useEffect(() => {
    if (bottomRef.current) bottomRef.current.scrollIntoView({
      behavior: "auto"
    });
  }, [messages]);
  function send(text) {
    const msg = text ?? input.trim();
    if (!msg) return;
    setMessages(prev => [...prev, {
      from: "user",
      text: msg
    }]);
    setInput("");
    setTimeout(() => {
      setMessages(prev => [...prev, {
        from: "ai",
        text: aiReplies[Math.floor(Math.random() * aiReplies.length)]
      }]);
    }, 900);
  }

  // LeafIcon inline SVG
  const Leaf = () => /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: SAGE,
    strokeWidth: "1.75",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"
  }));
  const SendIcon = active => /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: active ? "#0e0b1a" : MUTED,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "22",
    y1: "2",
    x2: "11",
    y2: "13"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "22 2 15 22 11 13 2 9 22 2"
  }));
  return /*#__PURE__*/React.createElement(ScreenWrapper, {
    nav: nav,
    active: "chat",
    scrollable: false
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 20px 16px",
      borderBottom: "1px solid rgba(167,139,250,0.08)",
      display: "flex",
      alignItems: "center",
      gap: 12,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 99,
      background: "linear-gradient(135deg, rgba(167,139,250,0.3), rgba(52,211,153,0.2))",
      border: `1.5px solid ${V}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Leaf, null)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "0.9375rem",
      fontWeight: 600,
      color: FG
    }
  }, "BonsAI"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "0.6875rem",
      color: SAGE
    }
  }, "\u25CF Online"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "16px 16px 8px",
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, messages.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      justifyContent: m.from === "user" ? "flex-end" : "flex-start",
      gap: 8,
      alignItems: "flex-end"
    }
  }, m.from === "ai" && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      borderRadius: 99,
      background: "rgba(167,139,250,0.15)",
      border: `1px solid ${V}30`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      marginBottom: 2
    }
  }, /*#__PURE__*/React.createElement(Leaf, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "75%",
      padding: "10px 14px",
      borderRadius: m.from === "user" ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
      background: m.from === "user" ? V : CARD,
      color: m.from === "user" ? "#0e0b1a" : FG,
      fontSize: "0.875rem",
      lineHeight: 1.55,
      border: m.from === "ai" ? "1px solid rgba(167,139,250,0.1)" : "none",
      fontFamily: "DM Sans, sans-serif"
    }
  }, m.text))), /*#__PURE__*/React.createElement("div", {
    ref: bottomRef
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 16px",
      display: "flex",
      gap: 8,
      overflowX: "auto",
      flexShrink: 0
    }
  }, suggestions.map(s => /*#__PURE__*/React.createElement("button", {
    key: s,
    onClick: () => send(s),
    style: {
      background: RAISED,
      color: MUTED,
      borderRadius: 99,
      padding: "6px 14px",
      fontSize: "0.75rem",
      fontWeight: 500,
      border: "1px solid rgba(167,139,250,0.1)",
      cursor: "pointer",
      whiteSpace: "nowrap",
      flexShrink: 0,
      fontFamily: "DM Sans, sans-serif"
    }
  }, s))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 16px 16px",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "center",
      background: CARD,
      borderRadius: 99,
      padding: "8px 8px 8px 18px",
      border: focused ? `1.5px solid ${V}` : "1.5px solid rgba(167,139,250,0.12)",
      transition: "border-color 200ms ease",
      boxShadow: focused ? `0 0 0 3px rgba(167,139,250,0.1)` : "none"
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: input,
    onChange: e => setInput(e.target.value),
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    onKeyDown: e => e.key === "Enter" && send(),
    placeholder: "What's on your mind?",
    style: {
      flex: 1,
      background: "transparent",
      border: "none",
      outline: "none",
      fontFamily: "DM Sans, sans-serif",
      fontSize: "0.875rem",
      color: FG
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => send(),
    style: {
      width: 36,
      height: 36,
      borderRadius: 99,
      background: input.trim() ? V : "rgba(167,139,250,0.1)",
      border: "none",
      cursor: input.trim() ? "pointer" : "default",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "background 200ms ease",
      flexShrink: 0
    }
  }, SendIcon(!!input.trim()))))));
}
Object.assign(window, {
  ChatScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile_app/ChatScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile_app/CheckInScreen.jsx
try { (() => {
// CheckInScreen.jsx — port of real Whimsical Intuition App CheckInScreen

function CheckInScreen({
  nav
}) {
  const {
    ScreenWrapper
  } = window;
  const V = "#a78bfa",
    SAGE = "#34d399",
    BLUE = "#60a5fa";
  const MUTED = "#7e72a8",
    FG = "#e4dff5",
    CARD = "#17122a",
    RAISED = "#1e1836";
  const moods = [{
    emoji: "😞",
    label: "Low",
    value: 1
  }, {
    emoji: "😕",
    label: "Meh",
    value: 2
  }, {
    emoji: "😐",
    label: "Okay",
    value: 3
  }, {
    emoji: "🙂",
    label: "Good",
    value: 4
  }, {
    emoji: "😄",
    label: "Great",
    value: 5
  }];
  const [mood, setMood] = React.useState(4);
  const [energy, setEnergy] = React.useState(7);
  const [stress, setStress] = React.useState(4);
  const [moodVal, setMoodVal] = React.useState(6);
  const [saved, setSaved] = React.useState(false);
  const selectedMood = moods.find(m => m.value === mood);
  function handleSave() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }
  function Slider({
    label,
    value,
    onChange,
    color
  }) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "0.875rem",
        fontWeight: 500,
        color: FG
      }
    }, label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "0.875rem",
        color: MUTED
      }
    }, value, "/10")), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        height: 6,
        borderRadius: 99,
        background: "rgba(167,139,250,0.1)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: 0,
        top: 0,
        height: "100%",
        width: `${value * 10}%`,
        borderRadius: 99,
        background: color,
        transition: "width 100ms"
      }
    }), /*#__PURE__*/React.createElement("input", {
      type: "range",
      min: 0,
      max: 10,
      value: value,
      onChange: e => onChange(+e.target.value),
      style: {
        position: "absolute",
        inset: 0,
        width: "100%",
        opacity: 0,
        cursor: "pointer",
        height: "100%"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        top: "50%",
        left: `${value * 10}%`,
        transform: "translate(-50%, -50%)",
        width: 18,
        height: 18,
        borderRadius: 99,
        background: color,
        border: "2px solid #0e0b1a",
        boxShadow: `0 0 8px ${color}60`,
        pointerEvents: "none"
      }
    })));
  }
  return /*#__PURE__*/React.createElement(ScreenWrapper, {
    nav: nav,
    active: "checkin"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 24,
      paddingBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 20px 0"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "0.75rem",
      fontWeight: 500,
      color: MUTED,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      marginBottom: 4
    }
  }, "Daily"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "Fraunces, serif",
      fontWeight: 300,
      fontSize: "1.6rem",
      color: FG,
      lineHeight: 1.25,
      margin: 0
    }
  }, "Check in")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 16px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "Fraunces, serif",
      fontSize: "1.1rem",
      color: FG,
      marginBottom: 20,
      lineHeight: 1.5
    }
  }, "How are you feeling right now?"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: CARD,
      borderRadius: 20,
      padding: "24px 20px",
      textAlign: "center",
      marginBottom: 16,
      border: "1px solid rgba(167,139,250,0.1)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "3.5rem",
      marginBottom: 8,
      lineHeight: 1
    }
  }, selectedMood.emoji), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Fraunces, serif",
      fontSize: "1.25rem",
      color: FG,
      marginBottom: 4
    }
  }, selectedMood.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "0.75rem",
      color: MUTED
    }
  }, mood >= 4 ? "You've got this 🌿" : mood === 3 ? "That's okay. We're here." : "Let's tend to that.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      justifyContent: "space-between"
    }
  }, moods.map(m => /*#__PURE__*/React.createElement("button", {
    key: m.value,
    onClick: () => setMood(m.value),
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 5,
      padding: "10px 4px",
      borderRadius: 14,
      border: "none",
      cursor: "pointer",
      background: mood === m.value ? "rgba(167,139,250,0.15)" : RAISED,
      outline: mood === m.value ? `1.5px solid ${V}` : "none",
      transition: "all 180ms ease"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: mood === m.value ? "1.5rem" : "1.25rem",
      transition: "font-size 180ms"
    }
  }, m.emoji), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.6rem",
      fontWeight: 500,
      color: mood === m.value ? V : MUTED
    }
  }, m.label))))), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "0 16px",
      background: CARD,
      borderRadius: 20,
      padding: 20,
      display: "flex",
      flexDirection: "column",
      gap: 22,
      border: "1px solid rgba(167,139,250,0.08)"
    }
  }, /*#__PURE__*/React.createElement(Slider, {
    label: "Energy",
    value: energy,
    onChange: setEnergy,
    color: SAGE
  }), /*#__PURE__*/React.createElement(Slider, {
    label: "Stress",
    value: stress,
    onChange: setStress,
    color: "#f87171"
  }), /*#__PURE__*/React.createElement(Slider, {
    label: "Mood",
    value: moodVal,
    onChange: setMoodVal,
    color: V
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 16px"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: handleSave,
    style: {
      width: "100%",
      background: saved ? SAGE : V,
      color: "#0e0b1a",
      borderRadius: 99,
      padding: "15px 24px",
      fontSize: "0.9375rem",
      fontWeight: 600,
      border: "none",
      cursor: "pointer",
      transition: "background 300ms ease",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      fontFamily: "DM Sans, sans-serif"
    }
  }, saved ? "✓ Saved" : "Save check-in"), saved && /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: "center",
      fontSize: "0.8125rem",
      color: SAGE,
      marginTop: 10
    }
  }, "Your bonsai noticed \uD83C\uDF3F"))));
}
Object.assign(window, {
  CheckInScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile_app/CheckInScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile_app/HabitsScreen.jsx
try { (() => {
// HabitsScreen.jsx

function HabitsScreen({
  nav
}) {
  const {
    HabitCard,
    ProgressRing,
    StreakBadge
  } = window;
  const {
    ScreenWrapper
  } = window;
  const [habits, setHabits] = React.useState([{
    id: 'sleep',
    name: 'Sleep',
    icon: '🌙',
    color: 'lavender',
    streak: 12,
    done: true,
    progress: 8,
    max: 8
  }, {
    id: 'exercise',
    name: 'Exercise',
    icon: '🏃',
    color: 'green',
    streak: 4,
    done: false,
    progress: 0,
    max: 1
  }, {
    id: 'water',
    name: 'Water',
    icon: '💧',
    color: 'sky',
    streak: 7,
    done: true,
    progress: 6,
    max: 8
  }, {
    id: 'journal',
    name: 'Journal',
    icon: '📓',
    color: 'earth',
    streak: 0,
    done: false,
    progress: 0,
    max: 1
  }, {
    id: 'social',
    name: 'Social',
    icon: '💬',
    color: 'gold',
    streak: 3,
    done: true,
    progress: 1,
    max: 1
  }, {
    id: 'mindful',
    name: 'Mindful',
    icon: '🧘',
    color: 'terra',
    streak: 2,
    done: false,
    progress: 0,
    max: 1
  }]);
  const toggle = id => setHabits(hs => hs.map(h => h.id === id ? {
    ...h,
    done: !h.done
  } : h));
  const doneCount = habits.filter(h => h.done).length;
  return React.createElement(ScreenWrapper, {
    nav,
    active: 'habits'
  },
  // ── Header ──────────────────────────────────────────────
  React.createElement('div', {
    style: {
      padding: '20px 20px 0',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, React.createElement('div', null, React.createElement('p', {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--color-text-muted)',
      fontWeight: 500,
      marginBottom: 2
    }
  }, "Today's progress"), React.createElement('h1', {
    style: {
      fontSize: 'var(--text-xl)',
      fontWeight: 700,
      color: 'var(--color-text-primary)'
    }
  }, 'Your habits')), React.createElement(StreakBadge, {
    count: 12,
    size: 'sm'
  })),
  // ── Progress Summary ─────────────────────────────────────
  React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '20px 20px 16px',
      background: '#fff',
      margin: '16px 20px',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-sm)'
    }
  }, React.createElement(ProgressRing, {
    value: doneCount,
    max: habits.length,
    color: doneCount >= 4 ? 'green' : doneCount >= 2 ? 'gold' : 'terra',
    size: 72,
    strokeWidth: 5,
    label: `${doneCount}/${habits.length}`,
    sublabel: 'done'
  }), React.createElement('div', null, React.createElement('h2', {
    style: {
      fontSize: 'var(--text-lg)',
      fontWeight: 700,
      color: 'var(--color-text-primary)'
    }
  }, doneCount === habits.length ? 'All done! 🎉' : `${doneCount} of ${habits.length} tended today`), React.createElement('p', {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--color-text-muted)',
      marginTop: 4
    }
  }, doneCount < habits.length ? `${habits.length - doneCount} more habit${habits.length - doneCount > 1 ? 's' : ''} to grow your bonsai` : 'Your bonsai is thriving today'))),
  // ── Habit Grid ───────────────────────────────────────────
  React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 10,
      padding: '0 20px 24px'
    }
  }, habits.map(h => React.createElement(HabitCard, {
    key: h.id,
    name: h.name,
    icon: h.icon,
    color: h.color,
    streak: h.streak,
    completed: h.done,
    progress: h.done ? h.max : h.progress,
    progressMax: h.max,
    size: 'md',
    onToggle: () => toggle(h.id)
  }))));
}
Object.assign(window, {
  HabitsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile_app/HabitsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile_app/HomeScreen.jsx
try { (() => {
// HomeScreen.jsx — faithful port of the real Whimsical Intuition App HomeScreen

function HomeScreen({
  nav
}) {
  const {
    BonsaiTree
  } = window;
  const {
    ScreenWrapper
  } = window;
  const V = "#a78bfa",
    SAGE = "#34d399",
    BLUE = "#60a5fa",
    PLUM = "#c084fc";
  const MUTED = "#7e72a8",
    FG = "#e4dff5",
    CARD = "#17122a",
    RAISED = "#1e1836";
  const r = 52,
    circ = 2 * Math.PI * r,
    score = 87,
    filled = circ * (score / 100);
  const categories = [{
    label: "Academic",
    value: 78,
    color: BLUE
  }, {
    label: "Wellbeing",
    value: 65,
    color: V
  }, {
    label: "Social",
    value: 52,
    color: PLUM
  }, {
    label: "Physical",
    value: 84,
    color: SAGE
  }];
  const upNext = [{
    time: "3:00 PM",
    label: "AP Calculus review",
    sub: "Charlotte R.",
    color: BLUE
  }, {
    time: "5:30 PM",
    label: "Volleyball Practice",
    sub: "Main Gymnasium",
    color: SAGE
  }];
  return /*#__PURE__*/React.createElement(ScreenWrapper, {
    nav: nav,
    active: "home"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      paddingBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 20px 0"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "0.75rem",
      fontWeight: 500,
      color: MUTED,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      marginBottom: 4
    }
  }, "Wednesday, May 14"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "Fraunces, serif",
      fontWeight: 300,
      fontSize: "1.6rem",
      color: FG,
      lineHeight: 1.25,
      margin: 0
    }
  }, "Good morning, Ava \uD83C\uDF3F")), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "0 16px",
      background: CARD,
      borderRadius: 20,
      padding: 20,
      border: "1px solid rgba(167,139,250,0.1)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "0.6875rem",
      fontWeight: 600,
      color: MUTED,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      marginBottom: 16
    }
  }, "Daily Balance"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 20,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 130,
      height: 130,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "130",
    height: "130",
    viewBox: "0 0 130 130"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "65",
    cy: "65",
    r: r,
    fill: "none",
    stroke: "rgba(167,139,250,0.08)",
    strokeWidth: "10"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "65",
    cy: "65",
    r: r,
    fill: "none",
    stroke: "url(#ringGrad)",
    strokeWidth: "10",
    strokeDasharray: `${filled} ${circ}`,
    strokeLinecap: "round",
    transform: "rotate(-90 65 65)"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "ringGrad",
    x1: "0%",
    y1: "0%",
    x2: "100%",
    y2: "0%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#a78bfa"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#34d399"
  }))), /*#__PURE__*/React.createElement("text", {
    x: "65",
    y: "60",
    textAnchor: "middle",
    fill: FG,
    fontSize: "26",
    fontFamily: "Fraunces, serif",
    fontWeight: "400"
  }, score), /*#__PURE__*/React.createElement("text", {
    x: "65",
    y: "76",
    textAnchor: "middle",
    fill: MUTED,
    fontSize: "10",
    fontFamily: "DM Sans, sans-serif",
    fontWeight: "500"
  }, "balance"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, categories.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.label
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.75rem",
      color: MUTED
    }
  }, c.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.75rem",
      fontWeight: 500,
      color: FG
    }
  }, c.value, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 5,
      borderRadius: 99,
      background: "rgba(167,139,250,0.1)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      width: `${c.value}%`,
      borderRadius: 99,
      background: c.color
    }
  })))))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "Fraunces, serif",
      fontSize: "0.875rem",
      fontStyle: "italic",
      color: MUTED,
      marginTop: 16,
      lineHeight: 1.6
    }
  }, "Progress is not about doing more \u2014 it's about growing in the right direction. \uD83C\uDF31")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "0.6875rem",
      fontWeight: 600,
      color: MUTED,
      letterSpacing: "0.1em",
      textTransform: "uppercase"
    }
  }, "Up next"), /*#__PURE__*/React.createElement("button", {
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      color: V,
      fontSize: "0.75rem",
      padding: 0
    }
  }, "View all \u203A")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, upNext.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.label,
    style: {
      background: CARD,
      borderRadius: 14,
      padding: "12px 16px",
      display: "flex",
      alignItems: "center",
      gap: 12,
      border: "1px solid rgba(167,139,250,0.08)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 3,
      height: 36,
      borderRadius: 99,
      background: t.color,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "0.875rem",
      fontWeight: 500,
      color: FG
    }
  }, t.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "0.75rem",
      color: MUTED
    }
  }, t.sub)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.75rem",
      color: MUTED
    }
  }, t.time))))), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "0 16px",
      background: "linear-gradient(135deg, rgba(23,18,42,1) 0%, rgba(30,24,54,1) 100%)",
      borderRadius: 20,
      padding: "18px 20px",
      border: "1px solid rgba(52,211,153,0.15)",
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(BonsaiTree, {
    level: 3,
    size: 0.7
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.6875rem",
      fontWeight: 600,
      color: MUTED,
      letterSpacing: "0.1em",
      textTransform: "uppercase"
    }
  }, "Your bonsai"), /*#__PURE__*/React.createElement("span", {
    style: {
      background: "rgba(52,211,153,0.15)",
      color: SAGE,
      borderRadius: 99,
      padding: "2px 8px",
      fontSize: "0.6875rem",
      fontWeight: 600
    }
  }, "\uD83C\uDF3F 251")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "Fraunces, serif",
      fontSize: "1rem",
      fontWeight: 400,
      color: FG,
      lineHeight: 1.4,
      margin: "0 0 6px"
    }
  }, "Level 3 \xB7 Growing steadily"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "0.75rem",
      color: MUTED,
      lineHeight: 1.5,
      margin: 0
    }
  }, "Your bonsai grew a new branch today. Keep tending."))), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "0 16px",
      background: RAISED,
      borderRadius: 16,
      padding: "14px 16px",
      display: "flex",
      gap: 10,
      alignItems: "flex-start",
      border: "1px solid rgba(167,139,250,0.08)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: PLUM,
      marginTop: 2,
      flexShrink: 0,
      fontSize: 15
    }
  }, "\u26A1"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "0.6875rem",
      fontWeight: 600,
      color: PLUM,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      marginBottom: 4
    }
  }, "Tree tip"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "0.8125rem",
      color: MUTED,
      lineHeight: 1.5,
      margin: 0
    }
  }, "Even a bonsai rests in winter. One slow day won't undo your progress.")))));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile_app/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile_app/InsightsScreen.jsx
try { (() => {
// InsightsScreen.jsx — port of real app, SVG area chart (no recharts)

function InsightsScreen({
  nav
}) {
  const {
    ScreenWrapper
  } = window;
  const V = "#a78bfa",
    SAGE = "#34d399",
    BLUE = "#60a5fa",
    PLUM = "#c084fc";
  const MUTED = "#7e72a8",
    FG = "#e4dff5",
    CARD = "#17122a";
  const balanceData = [{
    day: "M",
    score: 72
  }, {
    day: "T",
    score: 68
  }, {
    day: "W",
    score: 74
  }, {
    day: "T",
    score: 65
  }, {
    day: "F",
    score: 80
  }, {
    day: "S",
    score: 87
  }, {
    day: "S",
    score: 84
  }];
  const strengths = [{
    label: "Personal Growth",
    sub: "You've been journaling for 9 days straight",
    icon: "🌱",
    color: SAGE
  }, {
    label: "Physical Health",
    sub: "3 workouts this week — your best yet",
    icon: "⚡",
    color: BLUE
  }, {
    label: "Sleep Consistency",
    sub: "Averaging 7.8 hrs, up from 6.2 last week",
    icon: "🌙",
    color: V
  }];
  const attention = [{
    label: "Social Connection",
    sub: "No friend check-ins in 5 days",
    icon: "💬",
    color: PLUM
  }, {
    label: "Screen Time",
    sub: "Up 40% since Monday — want to set a limit?",
    icon: "📱",
    color: "#f87171"
  }];

  // Simple SVG area chart (no recharts)
  function AreaChart({
    data,
    color,
    width = 280,
    height = 110
  }) {
    const minV = 55,
      maxV = 100;
    const pts = data.map((d, i) => ({
      x: i / (data.length - 1) * width,
      y: height - (d.score - minV) / (maxV - minV) * (height - 10) - 4,
      day: d.day,
      score: d.score
    }));
    const line = pts.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
    const area = `0,${height} ${line} ${width},${height}`;
    const gradId = "aGrad_" + color.replace("#", "");
    return /*#__PURE__*/React.createElement("svg", {
      width: width,
      height: height,
      style: {
        overflow: "visible"
      }
    }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
      id: gradId,
      x1: "0",
      y1: "0",
      x2: "0",
      y2: "1"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "0%",
      stopColor: color,
      stopOpacity: 0.35
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "100%",
      stopColor: color,
      stopOpacity: 0.02
    }))), [0, 0.33, 0.66, 1].map((f, i) => /*#__PURE__*/React.createElement("line", {
      key: i,
      x1: 0,
      y1: height * f,
      x2: width,
      y2: height * f,
      stroke: "rgba(167,139,250,0.06)",
      strokeWidth: "1"
    })), /*#__PURE__*/React.createElement("polygon", {
      points: area,
      fill: `url(#${gradId})`
    }), /*#__PURE__*/React.createElement("polyline", {
      points: line,
      fill: "none",
      stroke: color,
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), pts.map((p, i) => /*#__PURE__*/React.createElement("circle", {
      key: i,
      cx: p.x,
      cy: p.y,
      r: 3,
      fill: color
    })), pts.map((p, i) => /*#__PURE__*/React.createElement("text", {
      key: i,
      x: p.x,
      y: height + 14,
      textAnchor: "middle",
      fill: MUTED,
      fontSize: "11",
      fontFamily: "DM Sans, sans-serif"
    }, p.day)));
  }
  return /*#__PURE__*/React.createElement(ScreenWrapper, {
    nav: nav,
    active: "insights"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20,
      paddingBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 20px 0"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "0.75rem",
      fontWeight: 500,
      color: MUTED,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      marginBottom: 4
    }
  }, "Weekly"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "Fraunces, serif",
      fontWeight: 300,
      fontSize: "1.6rem",
      color: FG,
      lineHeight: 1.25,
      margin: 0
    }
  }, "Insights")), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "0 16px",
      background: CARD,
      borderRadius: 20,
      padding: "20px 16px 28px",
      border: "1px solid rgba(167,139,250,0.08)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "0.6875rem",
      fontWeight: 600,
      color: MUTED,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      marginBottom: 8
    }
  }, "Balance over time"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, ["Week", "Month", "Year"].map((l, i) => /*#__PURE__*/React.createElement("button", {
    key: l,
    style: {
      fontSize: "0.75rem",
      fontWeight: i === 0 ? 600 : 400,
      color: i === 0 ? V : MUTED,
      background: i === 0 ? "rgba(167,139,250,0.12)" : "transparent",
      borderRadius: 99,
      padding: "3px 12px",
      border: "none",
      cursor: "pointer",
      fontFamily: "DM Sans, sans-serif"
    }
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Fraunces, serif",
      fontSize: "1.5rem",
      fontWeight: 400,
      color: FG
    }
  }, "87"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "0.6875rem",
      color: SAGE
    }
  }, "\u2191 +9 this week"))), /*#__PURE__*/React.createElement(AreaChart, {
    data: balanceData,
    color: V
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: SAGE,
      fontSize: 14
    }
  }, "\u2605"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "0.6875rem",
      fontWeight: 600,
      color: MUTED,
      letterSpacing: "0.1em",
      textTransform: "uppercase"
    }
  }, "Top strengths")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, strengths.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: CARD,
      borderRadius: 14,
      padding: "13px 16px",
      display: "flex",
      alignItems: "center",
      gap: 12,
      border: "1px solid rgba(167,139,250,0.07)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "1.25rem",
      flexShrink: 0
    }
  }, s.icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "0.875rem",
      fontWeight: 500,
      color: FG
    }
  }, s.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "0.75rem",
      color: MUTED,
      marginTop: 2
    }
  }, s.sub)), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 99,
      background: s.color,
      flexShrink: 0
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: PLUM,
      fontSize: 14
    }
  }, "!"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "0.6875rem",
      fontWeight: 600,
      color: MUTED,
      letterSpacing: "0.1em",
      textTransform: "uppercase"
    }
  }, "Needs attention")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, attention.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: CARD,
      borderRadius: 14,
      padding: "13px 16px",
      display: "flex",
      alignItems: "center",
      gap: 12,
      border: `1px solid ${a.color}20`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "1.25rem",
      flexShrink: 0
    }
  }, a.icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "0.875rem",
      fontWeight: 500,
      color: FG
    }
  }, a.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "0.75rem",
      color: MUTED,
      marginTop: 2
    }
  }, a.sub)), /*#__PURE__*/React.createElement("button", {
    style: {
      background: `${a.color}18`,
      color: a.color,
      border: "none",
      borderRadius: 99,
      padding: "4px 12px",
      fontFamily: "DM Sans, sans-serif",
      fontSize: "0.6875rem",
      fontWeight: 600,
      cursor: "pointer",
      whiteSpace: "nowrap"
    }
  }, "Tend it")))))));
}
Object.assign(window, {
  InsightsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile_app/InsightsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile_app/ScheduleScreen.jsx
try { (() => {
// ScheduleScreen.jsx

function ScheduleScreen({
  nav
}) {
  const {
    Badge,
    Button
  } = window;
  const {
    ScreenWrapper
  } = window;
  const [activeDay, setActiveDay] = React.useState(2); // 0=Mon, default Wed

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  const dates = ['Dec 1', 'Dec 2', 'Dec 3', 'Dec 4', 'Dec 5'];
  const events = {
    0: [{
      time: '9:00am',
      title: 'Calc homework due',
      type: 'deadline',
      stress: 'okay'
    }],
    1: [{
      time: '11:59pm',
      title: 'English essay due',
      type: 'deadline',
      stress: 'low'
    }, {
      time: '3:30pm',
      title: 'Soccer practice',
      type: 'activity',
      stress: 'great'
    }],
    2: [{
      time: '9:00am',
      title: 'Chemistry exam',
      type: 'exam',
      stress: 'stressed'
    }, {
      time: '11:59pm',
      title: 'CS project due',
      type: 'deadline',
      stress: 'low'
    }, {
      time: '7:00pm',
      title: 'Group study w/ Maya',
      type: 'social',
      stress: 'good'
    }],
    3: [{
      time: '1:00pm',
      title: 'Bio lab report due',
      type: 'deadline',
      stress: 'okay'
    }, {
      time: '4:00pm',
      title: 'Therapy appointment',
      type: 'wellness',
      stress: 'great'
    }],
    4: [{
      time: 'All day',
      title: 'College app draft',
      type: 'deadline',
      stress: 'low'
    }, {
      time: '6:00pm',
      title: 'Family dinner',
      type: 'social',
      stress: 'great'
    }]
  };
  const stressLevels = [3, 4, 8, 5, 4];
  const stressColors = ['var(--color-green-400)', 'var(--color-green-400)', 'var(--color-terra-400)', 'var(--color-gold-400)', 'var(--color-green-400)'];
  const typeColors = {
    exam: {
      color: 'stressed',
      icon: '📝'
    },
    deadline: {
      color: 'okay',
      icon: '📋'
    },
    activity: {
      color: 'good',
      icon: '⚽'
    },
    social: {
      color: 'good',
      icon: '👥'
    },
    wellness: {
      color: 'great',
      icon: '🌿'
    }
  };
  const todayStress = stressLevels[activeDay];
  const isHighLoad = todayStress >= 7;
  return React.createElement(ScreenWrapper, {
    nav,
    active: 'schedule'
  },
  // ── Header ──────────────────────────────────────────────
  React.createElement('div', {
    style: {
      padding: '20px 20px 0'
    }
  }, React.createElement('p', {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--color-text-muted)',
      fontWeight: 500,
      marginBottom: 2
    }
  }, 'Synced with Canvas'), React.createElement('h1', {
    style: {
      fontSize: 'var(--text-xl)',
      fontWeight: 700,
      color: 'var(--color-text-primary)'
    }
  }, 'This week')),
  // ── Day Selector ─────────────────────────────────────────
  React.createElement('div', {
    style: {
      display: 'flex',
      gap: 6,
      padding: '16px 20px 0',
      overflowX: 'auto'
    }
  }, days.map((day, i) => React.createElement('button', {
    key: day,
    onClick: () => setActiveDay(i),
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 3,
      padding: '8px 10px',
      borderRadius: 'var(--radius-md)',
      border: i === activeDay ? 'none' : '1.5px solid var(--color-border)',
      background: i === activeDay ? 'var(--color-brand)' : '#fff',
      color: i === activeDay ? '#fff' : 'var(--color-text-secondary)',
      cursor: 'pointer',
      flexShrink: 0,
      minWidth: 52,
      transition: 'all .15s'
    }
  }, React.createElement('span', {
    style: {
      fontSize: '10px',
      fontWeight: 700,
      letterSpacing: '.04em'
    }
  }, day), React.createElement('span', {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 700
    }
  }, dates[i].split(' ')[1]), React.createElement('div', {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: i === activeDay ? 'rgba(255,255,255,.6)' : stressColors[i]
    }
  })))),
  // ── Stress Forecast ──────────────────────────────────────
  React.createElement('div', {
    style: {
      margin: '14px 20px 0',
      padding: '12px 14px',
      borderRadius: 'var(--radius-lg)',
      background: isHighLoad ? 'var(--color-terra-50)' : 'var(--color-green-50)',
      border: `1px solid ${isHighLoad ? 'var(--color-terra-200)' : 'var(--color-green-200)'}`,
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, React.createElement('span', {
    style: {
      fontSize: 18
    }
  }, isHighLoad ? '⚡' : '🌿'), React.createElement('div', null, React.createElement('p', {
    style: {
      fontSize: 'var(--text-xs)',
      fontWeight: 700,
      color: isHighLoad ? 'var(--color-terra-600)' : 'var(--color-green-700)'
    }
  }, isHighLoad ? 'High-load day — plan a reset' : 'Load looks manageable today'), React.createElement('p', {
    style: {
      fontSize: '10px',
      color: 'var(--color-text-muted)',
      marginTop: 2
    }
  }, isHighLoad ? 'Rest tonight, eat well, reach out to a friend' : 'Good day to build habits and check in'))),
  // ── Events ───────────────────────────────────────────────
  React.createElement('div', {
    style: {
      padding: '14px 20px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, React.createElement('p', {
    style: {
      fontSize: 'var(--text-xs)',
      fontWeight: 700,
      color: 'var(--color-text-muted)',
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      marginBottom: 4
    }
  }, `${days[activeDay]} · ${dates[activeDay]}`), (events[activeDay] || []).map((ev, i) => React.createElement('div', {
    key: i,
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-lg)',
      padding: '12px 14px',
      boxShadow: 'var(--shadow-sm)',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, React.createElement('span', {
    style: {
      fontSize: 20,
      flexShrink: 0
    }
  }, typeColors[ev.type]?.icon || '•'), React.createElement('div', {
    style: {
      flex: 1
    }
  }, React.createElement('p', {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      color: 'var(--color-text-primary)'
    }
  }, ev.title), React.createElement('p', {
    style: {
      fontSize: '10px',
      color: 'var(--color-text-muted)',
      marginTop: 2
    }
  }, ev.time)), React.createElement(Badge, {
    color: typeColors[ev.type]?.color || 'earth',
    size: 'sm',
    dot: true
  }, ev.type))), events[activeDay]?.length === 0 && React.createElement('p', {
    style: {
      textAlign: 'center',
      padding: '32px 0',
      color: 'var(--color-text-muted)',
      fontSize: 'var(--text-sm)'
    }
  }, 'Nothing scheduled — a good day to rest.')));
}
Object.assign(window, {
  ScheduleScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile_app/ScheduleScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile_app/TodayScreen.jsx
try { (() => {
// TodayScreen.jsx — port of real Whimsical Intuition App TodayScreen

function TodayScreen({
  nav
}) {
  const {
    ScreenWrapper
  } = window;
  const V = "#a78bfa",
    SAGE = "#34d399",
    BLUE = "#60a5fa",
    PLUM = "#c084fc";
  const MUTED = "#7e72a8",
    FG = "#e4dff5",
    CARD = "#17122a",
    RAISED = "#1e1836";
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const dates = [12, 13, 14, 15, 16, 17, 18];
  const [activeDay, setActiveDay] = React.useState(2);
  const schedule = [{
    time: "8:00 AM",
    label: "AP Calculus",
    sub: "Charlotte R.",
    color: BLUE,
    duration: "1h 30m"
  }, {
    time: "10:00 AM",
    label: "English Essay",
    sub: "Collins & Barnes",
    color: PLUM,
    duration: "45m"
  }, {
    time: "1:30 PM",
    label: "Volleyball Practice",
    sub: "Main Gymnasium",
    color: SAGE,
    duration: "2h"
  }, {
    time: "4:00 PM",
    label: "Read for 30 min",
    sub: "Habit · Wellbeing",
    color: V,
    duration: "30m"
  }];
  return /*#__PURE__*/React.createElement(ScreenWrapper, {
    nav: nav,
    active: "today"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20,
      paddingBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 20px 0"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "0.75rem",
      fontWeight: 500,
      color: MUTED,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      marginBottom: 4
    }
  }, "Schedule"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "Fraunces, serif",
      fontWeight: 300,
      fontSize: "1.6rem",
      color: FG,
      lineHeight: 1.25,
      margin: 0
    }
  }, "Today")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    }
  }, days.map((d, i) => /*#__PURE__*/React.createElement("button", {
    key: d,
    onClick: () => setActiveDay(i),
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 6,
      padding: "10px 0",
      borderRadius: 14,
      border: "none",
      cursor: "pointer",
      background: activeDay === i ? V : "transparent",
      transition: "background 200ms ease"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.6875rem",
      fontWeight: 500,
      color: activeDay === i ? "#0e0b1a" : MUTED
    }
  }, d), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.875rem",
      fontWeight: activeDay === i ? 600 : 400,
      color: activeDay === i ? "#0e0b1a" : FG
    }
  }, dates[i]), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 5,
      height: 5,
      borderRadius: 99,
      background: i === 2 && activeDay !== i ? SAGE : activeDay === i ? "rgba(14,11,26,0.4)" : "transparent"
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 16px",
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, schedule.map((item, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      gap: 14,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      flexShrink: 0,
      paddingTop: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.6875rem",
      color: MUTED
    }
  }, item.time)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingTop: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 99,
      background: item.color,
      flexShrink: 0
    }
  }), i < schedule.length - 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1.5,
      flex: 1,
      background: "rgba(167,139,250,0.12)",
      marginTop: 4,
      minHeight: 40
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: CARD,
      borderRadius: 14,
      padding: "12px 14px",
      border: `1px solid ${item.color}18`,
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "0.9rem",
      fontWeight: 500,
      color: FG
    }
  }, item.label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.75rem",
      color: MUTED
    }
  }, item.sub), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.75rem",
      color: item.color
    }
  }, item.duration)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "0 16px",
      background: "linear-gradient(135deg, rgba(167,139,250,0.12), rgba(52,211,153,0.08))",
      borderRadius: 20,
      padding: 18,
      border: "1px solid rgba(167,139,250,0.2)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: V,
      fontSize: 15
    }
  }, "\u2726"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.6875rem",
      fontWeight: 600,
      color: V,
      letterSpacing: "0.08em",
      textTransform: "uppercase"
    }
  }, "AI plan for today")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "0.875rem",
      color: FG,
      lineHeight: 1.6,
      margin: "0 0 12px"
    }
  }, "You have a big afternoon. Try your hardest task at 10 AM when your focus is sharpest, then let volleyball be your reset."), /*#__PURE__*/React.createElement("button", {
    style: {
      background: V,
      color: "#0e0b1a",
      borderRadius: 99,
      padding: "8px 20px",
      fontFamily: "DM Sans, sans-serif",
      fontSize: "0.8125rem",
      fontWeight: 600,
      border: "none",
      cursor: "pointer"
    }
  }, "Apply plan"))));
}
Object.assign(window, {
  TodayScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile_app/TodayScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile_app/ios-frame.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports (to window): IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard
//
// Usage — wrap your screen content in <IOSDevice> to get the bezel, status bar
// and home indicator (props: title, dark, keyboard):
//
//   <IOSDevice title="Settings">
//     ...your screen content...
//   </IOSDevice>
//   <IOSDevice dark title="Search" keyboard>…</IOSDevice>
/* END USAGE */

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({
  dark = false,
  time = '9:41'
}) {
  const c = dark ? '#fff' : '#000';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 154,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '21px 24px 19px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 20,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 590,
      fontSize: 17,
      lineHeight: '22px',
      color: c
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      paddingTop: 1,
      paddingRight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "12",
    viewBox: "0 0 19 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7.5",
    width: "3.2",
    height: "4.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.8",
    y: "5",
    width: "3.2",
    height: "7",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.6",
    y: "2.5",
    width: "3.2",
    height: "9.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.4",
    y: "0",
    width: "3.2",
    height: "12",
    rx: "0.7",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10.5",
    r: "1.5",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "27",
    height: "13",
    viewBox: "0 0 27 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "12",
    rx: "3.5",
    stroke: c,
    strokeOpacity: "0.35",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "9",
    rx: "2",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z",
    fill: c,
    fillOpacity: "0.4"
  }))));
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({
  children,
  dark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      minWidth: 44,
      borderRadius: 9999,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: dark ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({
  title = 'Title',
  dark = false,
  trailingIcon = true
}) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = content => /*#__PURE__*/React.createElement(IOSGlassPill, {
    dark: dark
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, content));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 62,
      paddingBottom: 10,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px'
    }
  }, pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "none",
    style: {
      marginLeft: -1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2L2 10l8 8",
    stroke: muted,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), trailingIcon && pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "6",
    viewBox: "0 0 22 6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "3",
    r: "2.5",
    fill: muted
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      fontFamily: '-apple-system, system-ui',
      fontSize: 34,
      fontWeight: 700,
      lineHeight: '41px',
      color: text,
      letterSpacing: 0.4
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({
  title,
  detail,
  icon,
  chevron = true,
  isLast = false,
  dark = false
}) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 52,
      padding: '0 16px',
      position: 'relative',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      letterSpacing: -0.43
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: icon,
      marginRight: 12,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: text
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: sec,
      marginRight: 6
    }
  }, detail), chevron && /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l6 6-6 6",
    stroke: ter,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), !isLast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: icon ? 58 : 16,
      height: 0.5,
      background: sep
    }
  }));
}
function IOSList({
  header,
  children,
  dark = false
}) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return /*#__PURE__*/React.createElement("div", null, header && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '-apple-system, system-ui',
      fontSize: 13,
      color: hc,
      textTransform: 'uppercase',
      padding: '8px 36px 6px',
      letterSpacing: -0.08
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 26,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children,
  width = 402,
  height = 874,
  dark = false,
  title,
  keyboard = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      borderRadius: 48,
      overflow: 'hidden',
      position: 'relative',
      background: dark ? '#000' : '#F2F2F7',
      boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
      fontFamily: '-apple-system, system-ui, sans-serif',
      WebkitFontSmoothing: 'antialiased'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 11,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 126,
      height: 37,
      borderRadius: 24,
      background: '#000',
      zIndex: 50
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(IOSStatusBar, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, title !== undefined && /*#__PURE__*/React.createElement(IOSNavBar, {
    title: title,
    dark: dark
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, children), keyboard && /*#__PURE__*/React.createElement(IOSKeyboard, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 60,
      height: 34,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingBottom: 8,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 139,
      height: 5,
      borderRadius: 100,
      background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)'
    }
  })));
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({
  dark = false
}) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z",
      fill: glyph
    })),
    del: /*#__PURE__*/React.createElement("svg", {
      width: "23",
      height: "17",
      viewBox: "0 0 23 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z",
      fill: "none",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 5l7 7M17 5l-7 7",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinecap: "round"
    })),
    ret: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "14",
      viewBox: "0 0 20 14"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 1v6H4m0 0l4-4M4 7l4 4",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  };
  const key = (content, {
    w,
    flex,
    ret,
    fs = 25,
    k
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      height: 42,
      borderRadius: 8.5,
      flex: flex ? 1 : undefined,
      width: w,
      minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs,
      fontWeight: 458,
      color: ret ? '#fff' : glyph
    }
  }, content);
  const row = (keys, pad = 0) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      justifyContent: 'center',
      padding: `0 ${pad}px`
    }
  }, keys.map(l => key(l, {
    flex: true,
    k: l
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 15,
      borderRadius: 27,
      overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: dark ? '0 -2px 20px rgba(0,0,0,0.09)' : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      padding: '8px 22px 13px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, ['"The"', 'the', 'to'].map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 25,
      background: '#ccc',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      color: sugg,
      letterSpacing: -0.43,
      lineHeight: '22px'
    }
  }, w)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      padding: '0 6.5px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 20), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14.25,
      alignItems: 'center'
    }
  }, key(icons.shift, {
    w: 45,
    k: 'shift'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      flex: 1
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l, {
    flex: true,
    k: l
  }))), key(icons.del, {
    w: 45,
    k: 'del'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, key('ABC', {
    w: 92.25,
    fs: 18,
    k: 'abc'
  }), key('', {
    flex: true,
    k: 'space'
  }), key(icons.ret, {
    w: 92.25,
    ret: true,
    k: 'ret'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      width: '100%',
      position: 'relative'
    }
  }));
}
Object.assign(window, {
  IOSDevice,
  IOSStatusBar,
  IOSNavBar,
  IOSGlassPill,
  IOSList,
  IOSListRow,
  IOSKeyboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile_app/ios-frame.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.MoodSelector = __ds_scope.MoodSelector;

__ds_ns.ProgressRing = __ds_scope.ProgressRing;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.BonsaiTree = __ds_scope.BonsaiTree;

__ds_ns.HabitCard = __ds_scope.HabitCard;

__ds_ns.StreakBadge = __ds_scope.StreakBadge;

})();
