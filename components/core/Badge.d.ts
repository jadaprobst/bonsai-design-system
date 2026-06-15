export interface BadgeProps {
  /** Color theme — includes wellness-state aliases */
  color?: 'green' | 'sage' | 'gold' | 'terra' | 'lavender' | 'sky' | 'earth' | 'dark'
        | 'great' | 'good' | 'okay' | 'low' | 'stressed';
  /** Size preset */
  size?: 'sm' | 'md' | 'lg';
  /** Shows a colored dot before the label */
  dot?: boolean;
  children: React.ReactNode;
  style?: React.CSSProperties;
}
