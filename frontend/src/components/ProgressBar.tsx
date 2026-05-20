import { useTheme } from '../context/ThemeContext'

interface ProgressBarProps {
  total: number
  current: number
}

export default function ProgressBar({ total, current }: ProgressBarProps) {
  const { themeColors } = useTheme()
  const fillPercent = (current / total) * 100
  const stepPositions = Array.from({ length: total }, (_, i) =>
    total === 1 ? 5 : 5 + (i / (total - 1)) * 90
  )

  return (
    <div
      style={{
        position: 'relative',
        width: 400,
        height: 24,
      }}
    >
      {/* Background track */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: themeColors.containerLow,
          borderRadius: 999,
          overflow: 'hidden',
        }}
      >
        {/* Fill track */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: `${fillPercent}%`,
            background: '#7A7A7A',
            borderRadius: 999,
            transition: 'width 0.3s ease',
          }}
        />
      </div>

      {/* Step dots */}
      {stepPositions.map((position, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            left: `${position}%`,
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: 7,
            height: 7,
            borderRadius: '50%',
            background: '#cbcbcb',
            zIndex: 10,
          }}
        />
      ))}
    </div>
  )
}
