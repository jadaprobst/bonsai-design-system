/**
 * @startingPoint section="Components" subtitle="Primary action button — use for the main CTA on any screen" viewport="400x120"
 */
export interface ButtonProps {
  /** Visual style of the button */
  variant?: 'primary' | 'secondary' | 'ghost' | 'soft' | 'danger' | 'danger-ghost';
  /** Size preset */
  size?: 'xs' | 'sm' | 'md' | 'lg';
  /** Disables interaction and dims the button */
  disabled?: boolean;
  /** Shows a spinner and disables interaction */
  loading?: boolean;
  /** Stretches to fill container width */
  fullWidth?: boolean;
  /** Icon element before label */
  leftIcon?: React.ReactNode;
  /** Icon element after label */
  rightIcon?: React.ReactNode;
  /** Button label text */
  children: React.ReactNode;
  /** Click handler */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /** HTML button type */
  type?: 'button' | 'submit' | 'reset';
  style?: React.CSSProperties;
  className?: string;
}
