import React from 'react'
import { typography } from '../styles/typography'

interface CheckboxProps {
  checked: boolean
  onChange: (checked: boolean) => void
  label?: React.ReactNode
}

export default function Checkbox({ checked, onChange, label }: CheckboxProps) {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}
      onClick={() => onChange(!checked)}
    >
      <div
        style={{
          width: 18,
          height: 18,
          flexShrink: 0,
          borderRadius: 5,
          border: '1.5px solid #000',
          background: checked ? '#000' : 'transparent',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background 0.15s ease',
        }}
      >
        {checked && (
          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
            <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
      {label && (
        <span style={{ ...typography.bodySmall, color: '#000', opacity: 0.8 }}>
          {label}
        </span>
      )}
    </div>
  )
}
