import kairosLogo from '../assets/icons/icon-kairos-logo.svg'
import { typography } from '../styles/typography'
import { useTheme } from '../context/ThemeContext'

interface TitleBarProps {
  showTitle?: boolean
}

const isMac = navigator.userAgent.includes('Mac OS X')

export default function TitleBar({ showTitle = false }: TitleBarProps) {
  const { themeColors, effectiveTheme } = useTheme()
  const stroke = themeColors.inverseContainer



  return (
    <div className="relative z-10 w-full flex items-center justify-between">

      {/* LEFT SIDE — DRAG REGION */}
      <div
        className="flex items-end"
        style={{
          padding: '12px 30px',
          gap: 8,
          WebkitAppRegion: 'drag',
          ...(isMac && { marginLeft: 70, marginTop: 6 })
        }}
      >
        <img
          src={kairosLogo}
          alt="Kairōs"
          style={{
            height: 16,
            width: 'auto',
            filter: effectiveTheme === 'dark' ? 'invert(1)' : 'none'
          }}
        />

        {showTitle && (
          <span
            style={{
              ...typography.bodyMedium,
              fontFamily: 'Unbounded, sans-serif',
              color: stroke,
              letterSpacing: '-0.11px'
            }}
          >
            Kairōs
          </span>
        )}
      </div>

      {/* RIGHT SIDE — NO‑DRAG REGION */}
      {!isMac && (
        <div
          className="flex items-center"
          style={{
            gap: 18,
            paddingRight: 30,
            WebkitAppRegion: 'no-drag'
          }}
        >
          {/* MINIMIZE */}
          <button
            className="flex items-center justify-center w-6 h-6 hover:opacity-40 transition-opacity"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            onClick={() => {
              if (!window.electron?.minimize) {
                console.error("minimize() not available")
                return
              }
              window.electron.minimize()
            }}
          >
            <svg width="12" height="2" viewBox="0 0 12 2" fill="none">
              <line x1="0" y1="1" x2="12" y2="1" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          {/* MAXIMIZE */}
          <button
            className="flex items-center justify-center w-6 h-6 hover:opacity-40 transition-opacity"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            onClick={() => {
              if (!window.electron?.maximize) {
                console.error("maximize() not available")
                return
              }
              window.electron.maximize()
            }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <rect x="0.75" y="0.75" width="10.5" height="10.5" stroke={stroke} strokeWidth="1.5" />
            </svg>
          </button>

          {/* CLOSE */}
          <button
            className="flex items-center justify-center w-6 h-6 hover:opacity-40 transition-opacity"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            onClick={() => {
              if (!window.electron?.close) {
                console.error("close() not available")
                return
              }
              window.electron.close()
            }}
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
