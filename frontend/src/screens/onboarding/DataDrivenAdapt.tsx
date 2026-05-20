import { useNavigate } from 'react-router-dom'
import TitleBar from '../../components/TitleBar'
import IconButton from '../../components/IconButton'
import ProgressBar from '../../components/ProgressBar'
import { useTheme } from '../../context/ThemeContext'
import { typography } from '../../styles/typography'
import cancelIcon from '../../assets/icons/icon-cancel.svg'
import nextIcon from '../../assets/icons/icon-next.svg'
import timerPreview from '../../assets/images/timer-preview.png'
import timerPreviewDark from '../../assets/images/timer-preview-dark.png'

export default function DataDrivenAdapt() {
  const navigate = useNavigate()
  const { themeColors, effectiveTheme } = useTheme()

  const isDark = effectiveTheme === 'dark'
  const cardBg = isDark ? themeColors.background : '#FFFFFF'
  const textPrimary = themeColors.inverseContainer
  const textMuted = isDark ? 'rgba(245,245,245,0.5)' : 'rgba(0,0,0,0.5)'
  const iconFilter = isDark ? 'invert(1)' : 'none'
  const imageBg = isDark ? themeColors.containerLow : '#F5F5F5'

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: themeColors.background,
        transition: 'background-color 0.3s ease',
      }}
    >
      {/* Ambient blob */}
      <div
        style={{
          position: 'absolute',
          pointerEvents: 'none',
          width: '85vw',
          height: '80vh',
          bottom: '-10vh',
          left: '4vw',
          background: themeColors.accentGreen,
          filter: 'blur(500px)',
          borderRadius: '50%',
          zIndex: 0,
          opacity: 0.3,
        }}
      />

      <TitleBar showTitle={true} />

      {/* Card wrapper */}
      <div
        style={{
          flex: 1,
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '30px',
          overflowY: 'auto',
        }}
      >
        <div
          style={{
            backgroundColor: cardBg,
            borderRadius: 20,
            boxShadow: isDark
              ? '0 8px 32px rgba(0, 0, 0, 0.3)'
              : '0 8px 32px rgba(0, 0, 0, 0.08)',
            padding: '40px',
            width: '100%',
            maxWidth: 860,
            minHeight: 600,
            display: 'flex',
            flexDirection: 'column',
            gap: 32,
            transition: 'background-color 0.3s ease',
          }}
        >
          {/* Top controls */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 16,
            }}
          >
            <IconButton
              variant="text-end"
              icon={<img src={cancelIcon} alt="" style={{ width: 20, height: 20, filter: iconFilter }} />}
              onClick={() => navigate('/what-is-kairos')}
            >
              Skip
            </IconButton>

            <ProgressBar total={3} current={1.75} />

            <IconButton
              variant="text-start"
              icon={<img src={nextIcon} alt="" style={{ width: 20, height: 20, filter: iconFilter }} />}
              onClick={() => navigate('/track-progress')}
            >
              Next
            </IconButton>
          </div>

          {/* Content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 24,
            }}
          >
            {/* Title */}
            <div style={{ ...typography.headlineMedium, color: textPrimary, textAlign: 'center' }}>
              Data-driven adaptation
            </div>

            {/* Description */}
            <div
              style={{
                ...typography.bodyLarge,
                color: textMuted,
                textAlign: 'center',
                maxWidth: 600,
              }}
            >
              Using your Muse headset, Kairōs automatically adjusts your work and rest sessions to optimize your
              time and avoid burnout using research-backed decoding algorithms
            </div>

            {/* Timer preview image */}
            <div
              style={{
                width: '100%',
                maxWidth: 700,
                marginTop: 26,
                padding: '24px 10px 10px 10px',
                backgroundColor: imageBg,
                borderRadius: 12,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                src={isDark ? timerPreviewDark : timerPreview}
                alt="Timer preview"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: 8,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
