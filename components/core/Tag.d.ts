export interface TagProps {
  /** Color theme */
  color?: 'earth' | 'green' | 'gold' | 'terra' | 'lavender' | 'sky';
  size?: 'sm' | 'md' | 'lg';
  /** Icon before the label */
  icon?: React.ReactNode;
  /** Shows × remove button */
  removable?: boolean;
  /** Called when × is clicked */
  onRemove?: () => void;
  /** Makes tag clickable */
  onClick?: () => void;
  /** Fills with active background color */
  active?: boolean;
  children: React.ReactNode;
  style?: React.CSSProperties;
}
