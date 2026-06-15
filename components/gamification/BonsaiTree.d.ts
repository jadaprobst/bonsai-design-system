export interface BonsaiTreeProps {
  /** Growth level 1–5: 1=seedling, 3=growing, 5=mature bonsai */
  level?: 1 | 2 | 3 | 4 | 5;
  /** Container size in px — the SVG scales proportionally (default 200) */
  size?: number;
  /** Animate branch/foliage transitions when level changes */
  animated?: boolean;
  style?: React.CSSProperties;
}
