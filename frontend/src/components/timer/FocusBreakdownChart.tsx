import { typography } from '../../styles/typography'

export default function FocusBreakdownChart() {
  return (
    <div
      style={{
        width: 665,
        height: 205,
        borderRadius: 7,
        background: '#F0F0F0',
        padding: '16px 18px',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          ...typography.bodySmall,
          color: '#9A9A9A',
          fontSize: 8,
          textTransform: 'uppercase',
          marginBottom: 8,
        }}
      >
        Focus breakdown
      </div>
      <svg viewBox="0 0 628 150" width="100%" height="150" role="img" aria-label="Focus breakdown">
        <defs>
          <linearGradient id="focusFill" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#B9D7B5" stopOpacity="0.48" />
            <stop offset="48%" stopColor="#D3DDB5" stopOpacity="0.45" />
            <stop offset="64%" stopColor="#E1C2BE" stopOpacity="0.48" />
            <stop offset="100%" stopColor="#B9D7C4" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <path
          d="M0 82 C48 35 82 28 126 64 C174 102 196 86 222 33 C249 -20 334 28 369 84 C405 142 487 118 526 82 C562 49 595 45 628 50 L628 132 L0 132 Z"
          fill="url(#focusFill)"
        />
        <path
          d="M0 82 C48 35 82 28 126 64 C174 102 196 86 222 33 C249 -20 334 28 369 84 C405 142 487 118 526 82 C562 49 595 45 628 50"
          fill="none"
          stroke="#84A77E"
          strokeWidth="1.4"
        />
        <path d="M626 47L628 50L625 53" fill="none" stroke="#84A77E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="0" y1="132" x2="628" y2="132" stroke="#B8B8B8" strokeWidth="1" />
        <text x="0" y="147" fill="#9A9A9A" fontFamily="Geist, sans-serif" fontSize="8">5:05 PM</text>
        <text x="628" y="147" fill="#9A9A9A" fontFamily="Geist, sans-serif" fontSize="8" textAnchor="end">5:40 PM</text>
      </svg>
    </div>
  )
}
