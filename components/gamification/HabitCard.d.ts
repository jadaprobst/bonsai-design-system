export interface HabitCardProps {
  /** Habit name */
  name: string;
  /** Icon element or emoji */
  icon?: React.ReactNode;
  /** Color theme */
  color?: 'green' | 'gold' | 'lavender' | 'sky' | 'terra' | 'earth';
  /** Days in a row completed */
  streak?: number;
  /** Whether today's habit is done */
  completed?: boolean;
  /** Progress value (0–progressMax). If omitted, ring shows binary done/not */
  progress?: number;
  /** Maximum for progress (default 100) */
  progressMax?: number;
  /** Called when card is tapped to toggle completion */
  onToggle?: () => void;
  size?: 'sm' | 'md' | 'lg';
  style?: React.CSSProperties;
}
