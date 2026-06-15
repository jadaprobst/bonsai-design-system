export interface CardProps {
  /** Visual style */
  variant?: 'default' | 'elevated' | 'bordered' | 'muted' | 'brand' | 'glass';
  /** Internal padding preset */
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** Border-radius preset */
  radius?: 'card' | 'card-inner' | 'modal' | 'sheet' | 'lg' | 'xl';
  /** Renders as a different HTML element (e.g. "section", "article", "li") */
  as?: keyof HTMLElementTagNameMap;
  /** Makes the card interactive — adds hover lift + cursor pointer */
  onClick?: (e: React.MouseEvent) => void;
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}
