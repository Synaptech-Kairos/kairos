interface FeatureCardProps {
  icon: string
  text: string
}

export function FeatureCard({ icon, text }: FeatureCardProps) {
  return (
    <div
      className="flex items-center"
      style={{
        width: 596,
        height: 62,
        paddingLeft: 21,
        paddingRight: 20,
        gap: 20,
        background: 'rgba(255,255,255,0.5)',
        borderRadius: 12,
      }}
    >
      <img src={icon} alt="" style={{ width: 24, height: 24, flexShrink: 0 }} />
      <span
        style={{
          fontFamily: 'Geist, sans-serif',
          fontSize: 16,
          fontWeight: 400,
          color: '#000',
          letterSpacing: '-0.16px',
          whiteSpace: 'nowrap',
        }}
      >
        {text}
      </span>
    </div>
  )
}
