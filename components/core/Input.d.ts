export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Visible label rendered above the input */
  label?: string;
  /** Helper text shown below the input in muted color */
  helper?: string;
  /** Error message — overrides helper, turns border red */
  error?: string;
  /** Icon element inside the left edge */
  leftIcon?: React.ReactNode;
  /** Icon element inside the right edge */
  rightIcon?: React.ReactNode;
  /** Size preset */
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  id?: string;
  style?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
}
