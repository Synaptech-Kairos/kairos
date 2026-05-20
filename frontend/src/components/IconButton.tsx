import type { ReactNode, CSSProperties } from 'react'
import { typography } from '../styles/typography'
import { useTheme } from '../context/ThemeContext'

interface IconButtonProps {
  variant?: 'icon-only' | 'text-start' | 'text-end'
  icon: ReactNode
  children?: ReactNode
  onClick?: () => void
  primary?: boolean
  style?: CSSProperties
}

export default function IconButton({
  variant = 'icon-only',
  icon,
  children,
  onClick,
  primary = false,
  style,
}: IconButtonProps) {
  const { themeColors } = useTheme()
  const bg = primary ? themeColors.inverseContainer : themeColors.containerLow
  const color = primary ? themeColors.background : themeColors.inverseContainer

  const base: CSSProperties = {
    background: bg,
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'filter 0.15s',
    ...style,
  }

  if (variant === 'icon-only') {
    return (
      <button
        onClick={onClick}
        className="hover:brightness-95"
        style={{ ...base, width: 40, height: 40 }}
      >
        {icon}
      </button>
    )
  }

  return (
    <button
      onClick={onClick}
      className="hover:brightness-95"
      style={{ ...base, height: 40, padding: '0 14px', gap: 8 }}
    >
      {variant === 'text-end' && icon}
      {children && (
        <span style={{ ...typography.bodyMedium, color, fontWeight: 500 }}>
          {children}
        </span>
      )}
      {variant === 'text-start' && icon}
    </button>
  )
}
