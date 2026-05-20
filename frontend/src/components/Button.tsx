import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'text'
  children: React.ReactNode
}

const styles: Record<NonNullable<ButtonProps['variant']>, React.CSSProperties> = {
  primary: {
    width: 283,
    height: 51,
    background: '#000',
    color: '#fff',
    borderRadius: 12,
  },
  secondary: {
    width: 283,
    height: 51,
    background: '#625f5f62',
    color: '#000000',
    borderRadius: 12,
  },
  text: {
    width: 283,
    height: 51,
    color: 'rgba(0,0,0,0.5)',
    borderRadius: 12,
  },
}

export default function Button({ variant = 'primary', children, style, ...props }: ButtonProps) {
  return (
    <button
      className={variant === 'text' ? 'hover:bg-black/5 transition-colors' : 'hover:opacity-80 transition-opacity'}
      style={{
        fontFamily: 'Geist, sans-serif',
        fontWeight: 500,
        fontSize: 15,
        letterSpacing: '-0.15px',
        border: 'none',
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
