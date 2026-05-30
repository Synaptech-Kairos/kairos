import { useState } from 'react'
import { useTheme } from '../../context/ThemeContext'
import { typography } from '../../styles/typography'
import { AccountIcons } from '../../components/Icons'
import { useNavigate } from 'react-router-dom'
import TitleBar from '../../components/TitleBar'
import SettingsSidebar from '../../components/SettingsSidebar'

export default function Account() {
  const navigate = useNavigate()

  const { themeColors, effectiveTheme } = useTheme()
  const [showPassword, setShowPassword] = useState(false)
  const [activeTab, setActiveTab] = useState('Account')

  const isDark = effectiveTheme === 'dark'
  const textPrimary = themeColors.inverseContainer
  const textMuted = isDark ? 'rgba(245,245,245,0.5)' : 'rgba(0,0,0,0.5)'
  
  // Adaptive colors based on theme tokens
  const inputBg = isDark ? themeColors.containerLow : 'rgba(156,156,156,0.05)'
  const borderColor = isDark ? 'rgba(255,255,255,0.15)' : '#cdcdcd'
  const buttonHoverBg = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)'

  // Connection card matching theme context variants
  const connectionBg = isDark ? 'rgba(124,176,113,0.08)' : 'rgba(124,176,113,0.1)'
  const connectionBorder = isDark ? 'rgba(183,201,174,0.2)' : '#b7c9ae'

  const navItems = [
    { name: 'Account', icon: AccountIcons.User },
    { name: 'Appearance', icon: AccountIcons.Eye }, // Replace with template appearance icon if available
    { name: 'Notifications', icon: AccountIcons.Lock }, // Replace with bell icon if available
    { name: 'Devices', icon: AccountIcons.User }, // Replace with device icon if available
    { name: 'Sessions', icon: AccountIcons.Lock } // Replace with clock/session icon if available
  ]

  return (
    <div 
      style={{ 
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '960px', 
        height: '640px',
        backgroundColor: isDark ? '#121212' : '#ffffff',
        borderRadius: '12px',
        boxShadow: '0px 20px 40px rgba(0,0,0,0.4)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        fontFamily: 'sans-serif'
      }}
    >
      {/* Top Title Bar Window controls */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px 0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '20px', height: '20px', backgroundColor: textPrimary, borderRadius: '50%' }} /> {/* Logo Placeholder */}
          <span style={{ fontSize: '18px', fontWeight: 600, color: textPrimary }}>Kairōs</span>
        </div>
        <button style={{ background: 'none', border: 'none', color: textMuted, cursor: 'pointer', fontSize: '18px' }}>✕</button>
      </div>

      {/* Main Settings Split Frame */}
      <div style={{ display: 'flex', flex: 1, padding: '24px', overflow: 'hidden' }}>
        
        <SettingsSidebar textPrimary={textPrimary} textMuted={textMuted} />

        {/* Right Content Panel */}
        <div style={{ flex: 1, paddingLeft: '20px', overflowY: 'auto', maxWidth: '440px' }}>
          <h1
            style={{
              ...typography.headlineMedium,
              fontSize: '24px',
              fontWeight: 500,
              color: textPrimary,
              letterSpacing: '-0.23px',
              margin: '0 0 24px 0',
            }}
          >
            Account
          </h1>

          {/* Identity Section */}
          <div style={{ marginBottom: '24px' }}>
            <p
              style={{
                ...typography.bodyMedium,
                fontSize: '12px',
                color: textMuted,
                marginBottom: '8px',
              }}
            >
              Identity
            </p>

            {/* Full name input */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                height: '42px',
                padding: '0 12px',
                marginBottom: '12px',
                backgroundColor: inputBg,
                border: `1px solid ${borderColor}`,
                borderRadius: '6px',
              }}
            >
              <AccountIcons.User size={18} color={textMuted} />
              <input
                type="text"
                placeholder="Full name"
                style={{
                  flex: 1,
                  backgroundColor: 'transparent',
                  border: 'none',
                  fontSize: '13px',
                  color: textPrimary,
                  outline: 'none',
                }}
              />
            </div>

            {/* Email input */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                height: '42px',
                padding: '0 12px',
                backgroundColor: inputBg,
                border: `1px solid ${borderColor}`,
                borderRadius: '6px',
              }}
            >
              <AccountIcons.Mail size={18} color={textMuted} />
              <input
                type="email"
                placeholder="Email address"
                style={{
                  flex: 1,
                  backgroundColor: 'transparent',
                  border: 'none',
                  fontSize: '13px',
                  color: textPrimary,
                  outline: 'none',
                }}
              />
            </div>
          </div>

          {/* Security Section */}
          <div style={{ marginBottom: '24px' }}>
            <p
              style={{
                ...typography.bodyMedium,
                fontSize: '12px',
                color: textMuted,
                marginBottom: '8px',
              }}
            >
              Security
            </p>

            {/* Password input */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                height: '42px',
                padding: '0 12px',
                marginBottom: '12px',
                backgroundColor: inputBg,
                border: `1px solid ${borderColor}`,
                borderRadius: '6px',
              }}
            >
              <AccountIcons.Lock size={18} color={textMuted} />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                style={{
                  flex: 1,
                  backgroundColor: 'transparent',
                  border: 'none',
                  fontSize: '13px',
                  color: textPrimary,
                  outline: 'none',
                }}
              />
              <div onClick={() => setShowPassword(!showPassword)} style={{ cursor: 'pointer', display: 'flex' }}>
                <AccountIcons.Eye size={18} color={textMuted} />
              </div>
            </div>

            {/* Change password text button */}
            <span
              onClick={() => navigate('/change-password')}
              style={{
                fontSize: '13px',
                color: textMuted,
                cursor: 'pointer',
                display: 'inline-block',
                marginTop: '4px'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = textPrimary)}
              onMouseLeave={(e) => (e.currentTarget.style.color = textMuted)}
            >
              Change password
            </span>
          </div>

          {/* Connections Section */}
          <div>
            <p
              style={{
                ...typography.bodyMedium,
                fontSize: '12px',
                color: textMuted,
                marginBottom: '8px',
              }}
            >
              Connections
            </p>

            {/* Spotify connection */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '12px 14px',
                backgroundColor: connectionBg,
                border: `1px solid ${connectionBorder}`,
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              <AccountIcons.Music size={20} color="#1DB954" /> {/* Set to Spotify green if matching branding */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <p style={{ fontSize: '13px', fontWeight: 500, color: textPrimary, margin: 0 }}>
                  Connect Spotify account
                </p>
                <p style={{ fontSize: '11px', color: textMuted, margin: 0 }}>
                  Control music playback during sessions
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}