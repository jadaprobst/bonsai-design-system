export interface ToastProps {
  /** Toast message text */
  message: string;
  /** Visual style */
  type?: 'default' | 'success' | 'warning' | 'error' | 'info' | 'growth';
  /** Override the default icon — pass null to suppress */
  icon?: React.ReactNode | null;
  /** Shows × dismiss button when provided */
  onDismiss?: () => void;
  style?: React.CSSProperties;
}
