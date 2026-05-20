import { useNavigate } from 'react-router-dom'
import TitleBar from '../../components/TitleBar'
import IconButton from '../../components/IconButton'
import ProgressBar from '../../components/ProgressBar'
import { useOnboarding } from '../../context/OnboardingContext'
import { useTheme } from '../../context/ThemeContext'
import { typography } from '../../styles/typography'
import { accentColorPairs } from '../../styles/colors'
import cancelIcon from '../../assets/icons/icon-cancel.svg'
import nextIcon from '../../assets/icons/icon-next.svg'
import themeLightPng from '../../assets/icons/theme-light.png'
import themeDarkPng from '../../assets/icons/theme-dark.png'
import themeSystemPng from '../../assets/icons/theme-follow-system.png'
import themeLightDarkPng from '../../assets/icons/theme-light-dark.png'
import themeDarkDarkPng from '../../assets/icons/theme-dark-dark.png'
import themeSystemDarkPng from '../../assets/icons/theme-follow-system-dark.png'

export default function Customize() {
  const navigate = useNavigate()
  const { preferences, setColorMode, setAccentColorIndex } = useOnboarding()
  const { themeColors, currentAccentColor, effectiveTheme } = useTheme()

  const isDark = effectiveTheme === 'dark'
  const cardBg = isDark ? themeColors.background : '#FFFFFF'
  const textPrimary = themeColors.inverseContainer
  const textMuted = isDark ? 'rgba(245,245,245,0.5)' : 'rgba(0,0,0,0.5)'
  const iconFilter = isDark ? 'invert(1)' : 'none'

  const colorThemes = [
    { id: 'system', label: 'Follow system', src: isDark ? themeSystemDarkPng : themeSystemPng },
    { id: 'light', label: 'Light', src: isDark ? themeLightDarkPng : themeLightPng },
    { id: 'dark', label: 'Dark', src: isDark ? themeDarkDarkPng : themeDarkPng },
  ] as const

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
        key={currentAccentColor}
        style={{
          position: 'absolute',
          pointerEvents: 'none',
          width: '85vw',
          height: '80vh',
          bottom: '-10vh',
          left: '4vw',
          background: currentAccentColor,
          filter: 'blur(500px)',
          borderRadius: '50%',
          zIndex: 0,
          opacity: 0.6,
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
              onClick={() => navigate('/home')}
            >
              Skip
            </IconButton>

            <ProgressBar total={3} current={0} />

            <IconButton
              variant="text-start"
              icon={<img src={nextIcon} alt="" style={{ width: 20, height: 20, filter: iconFilter }} />}
              onClick={() => navigate('/what-is-kairos')}
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
              gap: 36,
            }}
          >
            {/* Title */}
            <div style={{ ...typography.headlineMedium, color: textPrimary, textAlign: 'center' }}>
              Customize Kairōs
            </div>

            {/* Color theme section */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
              <div style={{ ...typography.bodyMedium, color: textMuted }}>Color theme</div>
              <div style={{ display: 'flex', gap: 14 }}>
                {colorThemes.map((theme) => {
                  const selected = preferences.colorMode === theme.id
                  return (
                    <button
                      key={theme.id}
                      onClick={() => setColorMode(theme.id)}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 10,
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: 0,
                      }}
                    >
                      <img
                        src={theme.src}
                        alt={theme.label}
                        style={{
                          width: 188,
                          height: 144,
                          borderRadius: 12,
                          outline: selected ? `2px solid ${textPrimary}` : '2px solid transparent',
                          outlineOffset: 2,
                          opacity: selected ? 1 : 0.5,
                          transition: 'outline 0.15s, opacity 0.15s',
                        }}
                      />
                      <span
                        style={{
                          ...typography.bodyMedium,
                          color: selected ? textPrimary : textMuted,
                          fontWeight: selected ? 500 : 400,
                        }}
                      >
                        {theme.label}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Accent color section */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
              <div style={{ ...typography.bodyMedium, color: textMuted }}>Accent color</div>
              <div style={{ display: 'flex', gap: 10 }}>
                {accentColorPairs.map((pair, index) => {
                  const color = pair[effectiveTheme]
                  const selected = preferences.accentColorIndex === index
                  return (
                    <button
                      key={index}
                      onClick={() => setAccentColorIndex(index)}
                      style={{
                        width: 64,
                        height: 64,
                        borderRadius: 14,
                        background: color,
                        border: 'none',
                        cursor: 'pointer',
                        outline: selected ? `2px solid ${textPrimary}` : '2px solid transparent',
                        outlineOffset: 3,
                        transition: 'outline-color 0.15s',
                        padding: 0,
                      }}
                    />
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
