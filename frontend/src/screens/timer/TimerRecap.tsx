import { useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import TitleBar from '../../components/TitleBar'
import FocusBreakdownChart from '../../components/timer/FocusBreakdownChart'
import SessionMetricCard from '../../components/timer/SessionMetricCard'
import { typography } from '../../styles/typography'

interface TimerSessionState {
  totalSeconds: number
  startedAt: string
  endedAt: string
  recordedWith: string
  serial: string
  focusRecoveries: number
}

function isTimerSessionState(value: unknown): value is TimerSessionState {
  if (!value || typeof value !== 'object') return false
  const state = value as Partial<TimerSessionState>
  return (
    typeof state.totalSeconds === 'number' &&
    typeof state.startedAt === 'string' &&
    typeof state.endedAt === 'string' &&
    typeof state.recordedWith === 'string' &&
    typeof state.serial === 'string' &&
    typeof state.focusRecoveries === 'number'
  )
}

function getFallbackSession(): TimerSessionState {
  const endedAt = new Date()
  const totalSeconds = 35 * 60
  const startedAt = new Date(endedAt.getTime() - totalSeconds * 1000)

  return {
    totalSeconds,
    startedAt: startedAt.toISOString(),
    endedAt: endedAt.toISOString(),
    recordedWith: 'Muse 2',
    serial: 'ZEHF4H',
    focusRecoveries: 7,
  }
}

function getOrdinal(day: number) {
  if (day > 3 && day < 21) return 'th'
  switch (day % 10) {
    case 1:
      return 'st'
    case 2:
      return 'nd'
    case 3:
      return 'rd'
    default:
      return 'th'
  }
}

function formatDate(date: Date) {
  const weekday = date.toLocaleDateString('en-US', { weekday: 'long' })
  const month = date.toLocaleDateString('en-US', { month: 'long' })
  const day = date.getDate()
  const year = date.getFullYear()
  return `${weekday} ${month} ${day}${getOrdinal(day)}, ${year}`
}

function formatTime(date: Date) {
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
  })
}

export default function TimerRecap() {
  const navigate = useNavigate()
  const location = useLocation()
  const session = useMemo(
    () => (isTimerSessionState(location.state) ? location.state : getFallbackSession()),
    [location.state]
  )
  const startedAt = new Date(session.startedAt)
  const endedAt = new Date(session.endedAt)
  const sessionMinutes = Math.round(session.totalSeconds / 60)

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

      <main
        style={{
          width: 665,
          margin: '70px auto 0',
          transform: 'translateX(-36px)',
        }}
      >
        <div style={{ marginBottom: 36 }}>
          <div style={{ ...typography.bodyLarge, color: '#000000', fontWeight: 500, marginBottom: 8 }}>
            Great session, Sebastian
          </div>
          <div style={{ ...typography.bodySmall, color: '#000000', fontSize: 9 }}>
            Here's a recap of how that went
          </div>
        </div>

        <div style={{ display: 'flex', gap: 13, marginBottom: 14 }}>
          <SessionMetricCard label="Session length">
            <div
              style={{
                ...typography.titleLarge,
                fontFamily: 'Geist, sans-serif',
                fontSize: 32,
                fontWeight: 500,
                color: '#000000',
                marginBottom: 21,
              }}
            >
              {sessionMinutes} min
            </div>
            <div style={{ ...typography.bodySmall, color: '#858585', textAlign: 'center', lineHeight: '150%' }}>
              {formatDate(startedAt)}
              <br />
              {formatTime(startedAt)} - {formatTime(endedAt)}
            </div>
          </SessionMetricCard>

          <SessionMetricCard label="Recorded with">
            <MuseDeviceIllustration />
            <div style={{ ...typography.bodyMedium, color: '#000000', fontWeight: 500, marginTop: 8 }}>
              {session.recordedWith}
            </div>
            <div style={{ ...typography.bodySmall, color: '#858585', fontSize: 8 }}>
              Serial {session.serial}
            </div>
          </SessionMetricCard>

          <SessionMetricCard label="Focus recovery">
            <div
              style={{
                ...typography.titleLarge,
                fontFamily: 'Geist, sans-serif',
                fontSize: 32,
                fontWeight: 500,
                color: '#000000',
                marginBottom: 19,
              }}
            >
              {session.focusRecoveries} times
            </div>
            <div
              style={{
                ...typography.bodySmall,
                color: '#858585',
                lineHeight: '140%',
                textAlign: 'left',
                maxWidth: 130,
              }}
            >
              You brought your focus back {session.focusRecoveries} times when distractions arose!
            </div>
          </SessionMetricCard>
        </div>

        <FocusBreakdownChart />

        <button
          onClick={() => navigate('/home')}
          style={{
            display: 'block',
            width: 180,
            height: 34,
            margin: '42px auto 0',
            background: '#000000',
            border: 'none',
            borderRadius: 6,
            color: '#FFFFFF',
            cursor: 'pointer',
            ...typography.bodySmall,
            fontSize: 10,
            fontWeight: 500,
          }}
        >
          Complete
        </button>
      </main>
    </div>
  )
}

function MuseDeviceIllustration() {
  return (
    <svg width="110" height="68" viewBox="0 0 110 68" fill="none" aria-label="Muse 2 device" role="img">
      <path
        d="M19 41C35 30 54 22 80 16C88 14 94 20 96 29C96 33 91 34 88 31C85 27 83 25 79 25C58 30 41 37 26 48C22 51 16 49 14 45C13 43 15 42 19 41Z"
        fill="#2F2A2E"
      />
      <path
        d="M21 42C37 33 55 26 78 20C83 19 87 22 89 27"
        stroke="#D7D1C8"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M17 44C35 34 54 28 77 23"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M33 39C42 37 52 34 64 30"
        stroke="#E1AF7D"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="79" cy="21" r="4" fill="#AFA7A2" />
      <path
        d="M49 34C57 42 61 50 59 60C58 65 52 64 51 59C49 51 45 45 39 39"
        fill="#DCD8D0"
        stroke="#2F2A2E"
        strokeWidth="2"
      />
    </svg>
  )
}
