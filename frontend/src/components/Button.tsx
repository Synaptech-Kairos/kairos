import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
}

const styles: Record<NonNullable<ButtonProps['variant']>, React.CSSProperties> = {
  primary: {
    background: '#000',
    color: '#fff',
  },
  secondary: {
    background: '#625f5f62',
    color: '#000000',
  },
}

export default function Button({ variant = 'primary', children, style, ...props }: ButtonProps) {
  return (
    <button
      className="hover:opacity-80 transition-opacity"
      style={{
        width: 283,
        height: 51,
        fontFamily: 'Geist, sans-serif',
        fontWeight: 500,
        fontSize: 15,
        letterSpacing: '-0.15px',
        border: 'none',
        borderRadius: 12,
        cursor: 'pointer',
        ...styles[variant],
        ...style,
      }}
      {...props}
    >
      {children}
    </button>
  )
}
