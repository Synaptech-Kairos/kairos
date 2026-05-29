import type { ReactNode } from 'react'
import { typography } from '../../styles/typography'

interface SessionMetricCardProps {
  label: string
  children: ReactNode
}

export default function SessionMetricCard({ label, children }: SessionMetricCardProps) {
  return (
    <div
      style={{
        width: 215,
        height: 172,
        borderRadius: 7,
        background: '#F0F0F0',
        padding: '17px 15px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          ...typography.bodySmall,
          color: '#9A9A9A',
          fontSize: 8,
          textTransform: 'uppercase',
        }}
      >
        {label}
      </div>
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        {children}
      </div>
    </div>
  )
}
