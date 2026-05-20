import { useNavigate } from 'react-router-dom'
import TitleBar from '../../components/TitleBar'
import IconButton from '../../components/IconButton'
import ProgressBar from '../../components/ProgressBar'
import { useTheme } from '../../context/ThemeContext'
import { typography } from '../../styles/typography'
import cancelIcon from '../../assets/icons/icon-cancel.svg'
import nextIcon from '../../assets/icons/icon-next.svg'
import biosignalIcon from '../../assets/icons/icon-biosignal.svg'
import signalIcon from '../../assets/icons/icon-signal.svg'
import starIcon from '../../assets/icons/icon-star.svg'

interface FeatureItem {
  icon: string
  title: string
  description: string
}

export default function WhatIsKairos() {
  const navigate = useNavigate()
  const { themeColors, effectiveTheme } = useTheme()

  const isDark = effectiveTheme === 'dark'
  const cardBg = isDark ? themeColors.background : '#FFFFFF'
  const textPrimary = themeColors.inverseContainer
  const textMuted = isDark ? 'rgba(245,245,245,0.5)' : 'rgba(0,0,0,0.5)'
  const iconFilter = isDark ? 'invert(1)' : 'none'
  const featureBg = isDark ? themeColors.containerLow : '#F9F9F9'

  const features: FeatureItem[] = [
    {
      icon: biosignalIcon,
      title: 'Wear your EEG headset while working to get live insights and stats',
      description: '',
    },
    {
      icon: signalIcon,
      title: 'Connect your favorite apps like Spotify to superpower your sessions',
      description: '',
    },
    {
      icon: starIcon,
      title: 'Avoid burnout and optimize your time with adaptive focus sessions',
      description: '',
    },
  ]

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
          background: themeColors.accentBlue,
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
              onClick={() => navigate('/customize')}
            >
              Skip
            </IconButton>

            <ProgressBar total={3} current={0.3} />

            <IconButton
              variant="text-start"
              icon={<img src={nextIcon} alt="" style={{ width: 20, height: 20, filter: iconFilter }} />}
              onClick={() => navigate('/data-driven-adapt')}
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
              gap: 32,
            }}
          >
            {/* Title */}
            <div style={{ ...typography.headlineMedium, color: textPrimary, textAlign: 'center' }}>
              What is Kairōs?
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
              Kairōs isn't just another Pomodoro timer. It uses your real time brain activity in tandem with other
              biosignals to adapt your focus sessions in real time
            </div>

            {/* Features */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                marginTop: 25,
                width: '100%',
                maxWidth: 500,
              }}
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    gap: 16,
                    padding: '16px',
                    backgroundColor: featureBg,
                    borderRadius: 12,
                    alignItems: 'center',
                    transition: 'background-color 0.3s ease',
                  }}
                >
                  <img
                    src={feature.icon}
                    alt=""
                    style={{
                      width: 24,
                      height: 24,
                      flexShrink: 0,
                      filter: isDark ? 'invert(1)' : 'none',
                    }}
                  />
                  <div style={{ ...typography.bodyMedium, color: textPrimary, lineHeight: 1.5 }}>
                    {feature.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
