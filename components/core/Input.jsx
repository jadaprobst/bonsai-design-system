export function Input({
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
    sm: { fontSize: 'var(--text-sm)',   height: '36px', iconSize: '14px' },
    md: { fontSize: 'var(--text-base)', height: '44px', iconSize: '16px' },
    lg: { fontSize: 'var(--text-md)',   height: '52px', iconSize: '18px' },
  };
  const s = sizes[size] || sizes.md;

  const borderColor = error
    ? 'var(--color-error)'
    : focused
    ? 'var(--color-border-focus)'
    : 'var(--color-border)';

  const boxShadow = error
    ? focused ? 'var(--shadow-focus-error)' : 'none'
    : focused ? 'var(--shadow-focus-brand)' : 'none';

  return React.createElement('div', {
    style: { display: 'flex', flexDirection: 'column', gap: '6px', ...containerStyle },
  },
    label && React.createElement('label', {
      htmlFor: inputId,
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-sm)',
        fontWeight: 'var(--font-medium)',
        color: error ? 'var(--color-error)' : 'var(--color-text-secondary)',
        lineHeight: 1,
      },
    }, label),

    React.createElement('div', {
      style: { position: 'relative', display: 'flex', alignItems: 'center' },
    },
      leftIcon && React.createElement('span', {
        style: {
          position: 'absolute', left: '14px',
          display: 'flex', alignItems: 'center',
          color: 'var(--color-text-muted)',
          fontSize: s.iconSize, pointerEvents: 'none',
        },
      }, leftIcon),

      React.createElement('input', {
        id: inputId,
        disabled,
        onFocus: () => setFocused(true),
        onBlur:  () => setFocused(false),
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
          ...style,
        },
        ...rest,
      }),

      rightIcon && React.createElement('span', {
        style: {
          position: 'absolute', right: '14px',
          display: 'flex', alignItems: 'center',
          color: 'var(--color-text-muted)',
          fontSize: s.iconSize, pointerEvents: 'none',
        },
      }, rightIcon),
    ),

    (error || helper) && React.createElement('p', {
      style: {
        margin: 0,
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-xs)',
        color: error ? 'var(--color-error)' : 'var(--color-text-muted)',
        lineHeight: 'var(--leading-normal)',
      },
    }, error || helper)
  );
}
