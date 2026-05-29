import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import TitleBar from '../../components/TitleBar'
import SegmentedTimerRing from '../../components/timer/SegmentedTimerRing'
import TimerControlBar from '../../components/timer/TimerControlBar'
import { typography } from '../../styles/typography'

const TOTAL_SECONDS = 35 * 60
const INITIAL_REMAINING_SECONDS = 24 * 60 + 57

function formatTimer(seconds: number) {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
}

export default function TimerInProgress() {
  const navigate = useNavigate()
  const [remainingSeconds, setRemainingSeconds] = useState(INITIAL_REMAINING_SECONDS)
  const [isRunning, setIsRunning] = useState(true)
  const completedRef = useRef(false)
  const [startedAt] = useState(() => {
    const elapsedSeconds = TOTAL_SECONDS - INITIAL_REMAINING_SECONDS
    return new Date(Date.now() - elapsedSeconds * 1000).toISOString()
  })

  useEffect(() => {
    if (!isRunning || remainingSeconds <= 0) return
    const interval = window.setInterval(() => {
      setRemainingSeconds(seconds => Math.max(0, seconds - 1))
    }, 1000)
    return () => window.clearInterval(interval)
  }, [isRunning, remainingSeconds])

  useEffect(() => {
    if (remainingSeconds > 0 || completedRef.current) return
    completedRef.current = true
    navigate('/timer-recap', {
      state: {
        totalSeconds: TOTAL_SECONDS,
        startedAt,
        endedAt: new Date().toISOString(),
        recordedWith: 'Muse 2',
        serial: 'ZEHF4H',
        focusRecoveries: 7,
      },
    })
  }, [navigate, remainingSeconds, startedAt])

  const handleFullscreen = () => {
    if (document.fullscreenElement) {
      void document.exitFullscreen()
      return
    }
    void document.documentElement.requestFullscreen()
  }

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
      }}
    >
      <TitleBar showTitle forceLight />

      <SpotifyCard />
      <MuseStatusCard />

      <main
        style={{
          position: 'relative',
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: 32,
        }}
      >
        <SegmentedTimerRing
          remainingSeconds={remainingSeconds}
          totalSeconds={TOTAL_SECONDS}
          label={formatTimer(remainingSeconds)}
        />
      </main>

      <TimerControlBar
        isRunning={isRunning}
        onToggleRunning={() => setIsRunning(running => !running)}
        onFullscreen={handleFullscreen}
      />

      <StatusPill
        position="left"
        background="#FFF1F1"
        icon={<HeartIcon />}
        label="72 bpm"
      />
      <StatusPill
        position="right"
        background="#EEF7EF"
        icon={<FocusIcon />}
        label="Focused"
      />
    </div>
  )
}

function SpotifyCard() {
  return (
    <div
      style={{
        position: 'absolute',
        top: 75,
        left: 24,
        width: 256,
        height: 72,
        borderRadius: 7,
        background: '#E9ECE8',
        display: 'flex',
        alignItems: 'center',
        padding: '10px 11px',
        boxSizing: 'border-box',
        zIndex: 10,
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 10,
          left: 10,
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          ...typography.bodySmall,
          color: '#6F776E',
          fontSize: 10,
        }}
      >
        <SpotifyIcon />
        Spotify
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          marginTop: 14,
        }}
      >
        <AlbumCover />
        <div>
          <div style={{ ...typography.bodySmall, color: '#1E1E1E', fontSize: 11, marginBottom: 4 }}>
            Heavier
          </div>
          <div style={{ ...typography.bodySmall, color: '#627160', fontSize: 10 }}>
            ODESZA, Yellow House
          </div>
        </div>
      </div>
    </div>
  )
}

function MuseStatusCard() {
  return (
    <div
      style={{
        position: 'absolute',
        top: 74,
        right: 24,
        width: 83,
        height: 42,
        borderRadius: 6,
        border: '1px solid #EEEEEE',
        background: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 7,
        zIndex: 10,
      }}
    >
      <MuseIcon />
      <div>
        <div style={{ ...typography.bodySmall, color: '#000000', fontSize: 10, fontWeight: 500 }}>
          Muse 2
        </div>
        <div style={{ ...typography.bodySmall, color: '#5AA65B', fontSize: 7 }}>
          Active
        </div>
      </div>
    </div>
  )
}

function StatusPill({
  position,
  background,
  icon,
  label,
}: {
  position: 'left' | 'right'
  background: string
  icon: ReactNode
  label: string
}) {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: 24,
        [position]: 24,
        minWidth: 75,
        height: 38,
        borderRadius: 5,
        background,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 7,
        padding: '0 10px',
        boxSizing: 'border-box',
        zIndex: 10,
        ...typography.bodySmall,
        color: '#000000',
        fontSize: 10,
      }}
    >
      {icon}
      {label}
    </div>
  )
}

function AlbumCover() {
  return (
    <div
      style={{
        width: 28,
        height: 28,
        borderRadius: 2,
        background: 'linear-gradient(135deg, #A7B980 0%, #D7B16A 48%, #647C62 100%)',
        overflow: 'hidden',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '1fr 1fr',
        gap: 1,
      }}
    >
      {['#6C855F', '#D3A552', '#334636', '#BFCB8F'].map(color => (
        <div key={color} style={{ background: color, opacity: 0.82 }} />
      ))}
    </div>
  )
}

function SpotifyIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <circle cx="5" cy="5" r="4.5" stroke="#6F776E" />
      <path d="M2.9 4.2C4.2 3.8 5.6 3.9 7 4.5M3.1 5.3C4.2 5 5.3 5.1 6.4 5.6M3.4 6.3C4.2 6.1 5.1 6.2 5.9 6.5" stroke="#6F776E" strokeWidth="0.6" strokeLinecap="round" />
    </svg>
  )
}

function MuseIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
      <path d="M4.2 8.6C4.2 6.1 6.1 4.2 8.5 4.2C10.9 4.2 12.8 6.1 12.8 8.6" stroke="black" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M2.8 7.7V9.8M14.2 7.7V9.8" stroke="black" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="8.5" cy="8.6" r="1.8" stroke="black" strokeWidth="1.1" />
    </svg>
  )
}

function HeartIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <path d="M6.5 10.7C4.1 8.7 2.4 7.2 2.4 5.4C2.4 4.2 3.3 3.3 4.5 3.3C5.2 3.3 5.9 3.7 6.3 4.3C6.7 3.7 7.4 3.3 8.2 3.3C9.4 3.3 10.3 4.2 10.3 5.4C10.3 7.2 8.6 8.7 6.5 10.7Z" stroke="black" strokeWidth="0.9" strokeLinejoin="round" />
    </svg>
  )
}

function FocusIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <circle cx="6.5" cy="4.2" r="1.6" stroke="black" strokeWidth="0.9" />
      <path d="M3.8 10.1C4.2 8.9 5.2 8.2 6.5 8.2C7.8 8.2 8.8 8.9 9.2 10.1" stroke="black" strokeWidth="0.9" strokeLinecap="round" />
    </svg>
  )
}
