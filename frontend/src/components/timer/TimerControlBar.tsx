import type { CSSProperties } from 'react'

interface TimerControlBarProps {
  isRunning: boolean
  onToggleRunning: () => void
  onFullscreen: () => void
}

export default function TimerControlBar({
  isRunning,
  onToggleRunning,
  onFullscreen,
}: TimerControlBarProps) {
  return (
    <div
      style={{
        position: 'absolute',
        left: '50%',
        bottom: 31,
        transform: 'translateX(-50%)',
        height: 40,
        padding: '0 14px',
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        background: '#FFFFFF',
        borderRadius: 999,
        boxShadow: '0 0 12px rgba(0,0,0,0.12)',
        zIndex: 20,
      }}
    >
      <button
        aria-label={isRunning ? 'Pause timer' : 'Resume timer'}
        onClick={onToggleRunning}
        style={iconButtonStyle}
      >
        {isRunning ? (
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <rect x="4" y="3" width="2" height="9" rx="0.6" fill="black" />
            <rect x="9" y="3" width="2" height="9" rx="0.6" fill="black" />
          </svg>
        ) : (
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path d="M5 3.5L11 7.5L5 11.5V3.5Z" fill="black" />
          </svg>
        )}
      </button>
      <button aria-label="Timer settings" style={iconButtonStyle}>
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
          <circle cx="7.5" cy="7.5" r="2.2" stroke="black" strokeWidth="1.2" />
          <path d="M7.5 1.8V3.1M7.5 11.9V13.2M2.6 7.5H3.9M11.1 7.5H12.4M4 4L4.9 4.9M10.1 10.1L11 11M11 4L10.1 4.9M4.9 10.1L4 11" stroke="black" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      </button>
      <button aria-label="Enter fullscreen" onClick={onFullscreen} style={iconButtonStyle}>
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
          <path d="M4.2 3H3V6.2M10.8 3H12V6.2M3 8.8V12H6.2M12 8.8V12H8.8" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  )
}

const iconButtonStyle: CSSProperties = {
  width: 18,
  height: 18,
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
}
