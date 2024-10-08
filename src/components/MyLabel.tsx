import './mylabel.css'

interface Props {
  /** 
   * Text to display
  */
 label: string
 /** 
  * Label size
 */
  size?: 'normal'| 'h1'| 'h2'| 'h3'
  /** 
   * Customize all letters
   */
  allCaps?: boolean
  /** 
   * Label Color
   */
  color?: 'text-primary' | 'text-secondary' | 'text-tertiary'
  /** 
   * Font Color
   */
  fontColor?: string 
}

export function MyLabel ({ label, size = 'normal', allCaps = false, color, fontColor }: Props) {
  return (
    <span className={`${size} ${color} label`} style={{ color: fontColor }}>
      {allCaps ? label.toUpperCase() : label}
    </span>
  )
}