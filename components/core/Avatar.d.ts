export interface AvatarProps {
  /** Image URL — falls back to initials if undefined or fails */
  src?: string;
  /** User's display name — used for initials fallback and alt text */
  name?: string;
  /** Size preset */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  /** Shows a colored wellness ring around the avatar */
  showRing?: boolean;
  /** Color of the wellness ring — named alias or any CSS color */
  wellnessColor?: 'great' | 'good' | 'okay' | 'low' | 'stressed' | 'green' | 'gold' | 'lavender' | 'sky' | string;
  style?: React.CSSProperties;
}
