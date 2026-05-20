import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export default function Input({ label, style, ...props }: InputProps) {
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
      <input
        style={{
          height: 44,
          borderRadius: 10,
          border: '1px solid #e4e4e7',
          padding: '0 14px',
          fontFamily: 'Geist, sans-serif',
          fontSize: 15,
          color: '#000',
          background: '#fff',
          outline: 'none',
          ...style,
        }}
        {...props}
      />
    </div>
  )
}
