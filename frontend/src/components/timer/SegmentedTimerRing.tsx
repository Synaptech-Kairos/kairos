import { useMemo } from 'react'

interface SegmentedTimerRingProps {
  remainingSeconds: number
  totalSeconds: number
  label: string
}

interface Tick {
  x: number
  y: number
  rotation: number
}

const VIEWBOX_WIDTH = 640
const VIEWBOX_HEIGHT = 260
const TRACK_WIDTH = 520
const TRACK_HEIGHT = 150
const TRACK_RADIUS = TRACK_HEIGHT / 2
const TICK_COUNT = 112
const FADE_TICKS = 1.6

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

function getCapsuleTick(index: number): Tick {
  const top = (VIEWBOX_HEIGHT - TRACK_HEIGHT) / 2
  const bottom = top + TRACK_HEIGHT
  const left = (VIEWBOX_WIDTH - TRACK_WIDTH) / 2
  const right = left + TRACK_WIDTH
  const centerY = VIEWBOX_HEIGHT / 2
  const straightLength = TRACK_WIDTH - TRACK_HEIGHT
  const arcLength = Math.PI * TRACK_RADIUS
  const perimeter = straightLength * 2 + arcLength * 2
  const distance = (index / TICK_COUNT) * perimeter

  if (distance < straightLength) {
    return {
      x: left + TRACK_RADIUS + distance,
      y: top,
      rotation: 0,
    }
  }

  if (distance < straightLength + arcLength) {
    const arcDistance = distance - straightLength
    const angle = -90 + (arcDistance / arcLength) * 180
    const radians = (angle * Math.PI) / 180
    return {
      x: right - TRACK_RADIUS + Math.cos(radians) * TRACK_RADIUS,
      y: centerY + Math.sin(radians) * TRACK_RADIUS,
      rotation: angle - 90,
    }
  }

  if (distance < straightLength * 2 + arcLength) {
    const bottomDistance = distance - straightLength - arcLength
    return {
      x: right - TRACK_RADIUS - bottomDistance,
      y: bottom,
      rotation: 0,
    }
  }

  const leftArcDistance = distance - straightLength * 2 - arcLength
  const angle = 90 + (leftArcDistance / arcLength) * 180
  const radians = (angle * Math.PI) / 180
  return {
    x: left + TRACK_RADIUS + Math.cos(radians) * TRACK_RADIUS,
    y: centerY + Math.sin(radians) * TRACK_RADIUS,
    rotation: angle - 90,
  }
}

export default function SegmentedTimerRing({
  remainingSeconds,
  totalSeconds,
  label,
}: SegmentedTimerRingProps) {
  const ticks = useMemo(
    () => Array.from({ length: TICK_COUNT }, (_, index) => getCapsuleTick(index)),
    []
  )
  const elapsedStart = Math.round(TICK_COUNT * 0.34)
  const elapsedTicks = (1 - remainingSeconds / totalSeconds) * TICK_COUNT

  return (
    <div
      style={{
        position: 'relative',
        width: 'min(66vw, 640px)',
        minWidth: 520,
        aspectRatio: `${VIEWBOX_WIDTH} / ${VIEWBOX_HEIGHT}`,
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: '14%',
          right: '14%',
          top: '31%',
          bottom: '31%',
          borderRadius: 999,
          background: 'rgba(206, 229, 197, 0.38)',
          filter: 'blur(24px)',
        }}
      />
      <svg
        viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
        width="100%"
        height="100%"
        aria-label={`Timer remaining ${label}`}
        role="img"
        style={{ position: 'relative', zIndex: 1, overflow: 'visible' }}
      >
        {ticks.map((tick, index) => (
          <rect
            key={`base-${index}`}
            x={tick.x - 3}
            y={tick.y - 19}
            width={6}
            height={34}
            rx={1.5}
            fill="#9B9D98"
            opacity={0.75}
            transform={`rotate(${tick.rotation} ${tick.x} ${tick.y})`}
          />
        ))}
        {ticks.map((tick, index) => {
          const elapsedIndex = (index - elapsedStart + TICK_COUNT) % TICK_COUNT
          const opacity = clamp((elapsedIndex - elapsedTicks) / FADE_TICKS, 0, 1)

          return (
            <rect
              key={`active-${index}`}
              x={tick.x - 3}
              y={tick.y - 19}
              width={6}
              height={34}
              rx={1.5}
              fill="#000000"
              opacity={opacity}
              transform={`rotate(${tick.rotation} ${tick.x} ${tick.y})`}
              style={{ transition: 'opacity 950ms linear' }}
            />
          )
        })}
      </svg>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Unbounded, sans-serif',
          fontSize: 58,
          fontWeight: 400,
          lineHeight: '100%',
          letterSpacing: '-0.32px',
          color: '#000000',
        }}
      >
        {label}
      </div>
    </div>
  )
}
