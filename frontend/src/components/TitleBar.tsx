import kairosLogo from '../assets/icons/icon-kairos-logo.svg'
import { typography } from '../styles/typography'
import { useTheme } from '../context/ThemeContext'

interface TitleBarProps {
  showTitle?: boolean
  forceLight?: boolean
}

const isMac = navigator.userAgent.includes('Mac OS X')

export default function TitleBar({ showTitle = false, forceLight = false }: TitleBarProps) {
  const { themeColors, effectiveTheme } = useTheme()
  const stroke = forceLight ? '#000000' : themeColors.inverseContainer
  const logoFilter = forceLight ? 'none' : effectiveTheme === 'dark' ? 'invert(1)' : 'none'

  return (
    <div
      className="relative z-10 flex items-center justify-between w-full"
      style={{ padding: '12px 30px', WebkitAppRegion: 'drag' } as React.CSSProperties}
    >
      <div
        className="flex items-end"
        style={{ gap: 8, ...(isMac && { marginLeft: 70, marginTop: 6 }), WebkitAppRegion: 'no-drag' } as React.CSSProperties}
      >
        <img src={kairosLogo} alt="Kairōs" style={{ height: 16, width: 'auto', filter: logoFilter }} />
        {showTitle && (
          <span
            style={{
              ...typography.bodyMedium,
              fontFamily: 'Unbounded, sans-serif',
              color: stroke,
              letterSpacing: '-0.11px',
            }}
          >
            Kairōs
          </span>
        )}
      </div>

      {!isMac && (
        <div
          className="flex items-center"
          style={{ gap: 18, WebkitAppRegion: 'no-drag' } as React.CSSProperties}
        >
          <button
            className="flex items-center justify-center w-6 h-6 hover:opacity-40 transition-opacity"
            style={{ background: 'none', border: 'none', cursor: 'default', padding: 0 }}
          >
            <svg width="12" height="2" viewBox="0 0 12 2" fill="none">
              <line x1="0" y1="1" x2="12" y2="1" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
          <button
            className="flex items-center justify-center w-6 h-6 hover:opacity-40 transition-opacity"
            style={{ background: 'none', border: 'none', cursor: 'default', padding: 0 }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <rect x="0.75" y="0.75" width="10.5" height="10.5" stroke={stroke} strokeWidth="1.5" />
            </svg>
          </button>
          <button
            className="flex items-center justify-center w-6 h-6 hover:opacity-40 transition-opacity"
            style={{ background: 'none', border: 'none', cursor: 'default', padding: 0 }}
          >
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
              <path d="M0.5 0.5L10.5 10.5" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
              <path d="M10.5 0.5L0.5 10.5" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}
