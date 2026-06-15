export interface StreakBadgeProps {
  /** Number of consecutive days */
  count?: number;
  /** Size preset */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Pulse the flame icon */
  animated?: boolean;
  /** Override the "day streak" label */
  label?: string;
  style?: React.CSSProperties;
}
