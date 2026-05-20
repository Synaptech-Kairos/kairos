import React, { useState } from 'react'

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode
  label?: string
}

export default function FormField({ icon, label, style, ...props }: FormFieldProps) {
  const [focused, setFocused] = useState(false)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      {label && (
        <label
          style={{
            fontFamily: 'Geist, sans-serif',
            fontSize: 13,
            fontWeight: 500,
            color: '#000',
            letterSpacing: '-0.13px',
          }}
        >
          {label}
        </label>
      )}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          height: 47,
          paddingLeft: 14,
          paddingRight: 14,
          borderRadius: 7,
          border: `1.5px solid ${focused ? '#888' : '#cdcdcd'}`,
          background: 'rgba(156, 156, 156, 0.05)',
          transition: 'border-color 0.15s ease',
        }}
      >
        {icon && <div style={{ display: 'flex', opacity: 0.5 }}>{icon}</div>}
        <input
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            flex: 1,
            border: 'none',
            background: 'transparent',
            fontFamily: 'Geist, sans-serif',
            fontSize: 13,
            color: '#000',
            outline: 'none',
            ...style,
          }}
          {...props}
        />
      </div>
    </div>
  )
}
