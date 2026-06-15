export interface MoodSelectorProps {
  /** Currently selected mood */
  value?: 'great' | 'good' | 'okay' | 'low' | 'stressed';
  /** Called when user selects a mood */
  onChange?: (mood: 'great' | 'good' | 'okay' | 'low' | 'stressed') => void;
  /** Size preset */
  size?: 'sm' | 'md' | 'lg';
  /** Show text labels under each emoji */
  showLabels?: boolean;
  style?: React.CSSProperties;
}
