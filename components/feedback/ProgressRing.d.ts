export interface ProgressRingProps {
  /** Current value */
  value?: number;
  /** Maximum value (default 100) */
  max?: number;
  /** Diameter in px (default 56) */
  size?: number;
  /** Ring stroke thickness in px (default 4) */
  strokeWidth?: number;
  /** Fill color — named alias or CSS color */
  color?: 'green' | 'brand' | 'gold' | 'terra' | 'lavender' | 'sky' | 'earth' | string;
  /** Track (background ring) color */
  trackColor?: string;
  /** Center label — typically the numeric value */
  label?: string;
  /** Smaller text below the label */
  sublabel?: string;
  style?: React.CSSProperties;
}
