import { useState } from 'react'
import { useTheme } from '../../context/ThemeContext'
import { typography } from '../../styles/typography'
import { AccountIcons } from '../../components/Icons'
import SettingsSidebar from '../../components/SettingsSidebar'

export default function Notifications() {
  const { themeColors, effectiveTheme } = useTheme()
  const isDark = effectiveTheme === 'dark'
  
  const textPrimary = themeColors.inverseContainer
  const textMuted = isDark ? 'rgba(245,245,245,0.5)' : 'rgba(0,0,0,0.5)'
  const rowBg = isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.02)'
  const rowBorder = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'

  // Mock state management for the interactive checklist options
  const [preferences, setPreferences] = useState({
    workSessionEnd: false,
    breakStartEnd: true,
    dynamicUpdates: true,
    stressed: false,
    strained: true,
    lockedIn: true,
    lowBattery: false
  })

  const togglePref = (key: keyof typeof preferences) => {
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }))
  }

  // Sidebar Layout Data
  const navItems = [
    { name: 'Account', icon: AccountIcons.User },
    { name: 'Appearance', icon: AccountIcons.Eye }, 
    { name: 'Notifications', icon: AccountIcons.Lock }, // This will be active
    { name: 'Devices', icon: AccountIcons.User }, 
    { name: 'Sessions', icon: AccountIcons.Lock } 
  ]

  // Reusable component block for the notification card rows
  const NotificationRow = ({ 
    title, 
    description, 
    stateKey 
  }: { 
    title: string, 
    description: string, 
    stateKey: keyof typeof preferences 
  }) => {
    const isChecked = preferences[stateKey]
    return (
      <div
        onClick={() => togglePref(stateKey)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          padding: '14px 16px',
          backgroundColor: rowBg,
          border: `1px solid ${rowBorder}`,
          borderRadius: '6px',
          marginBottom: '8px',
          cursor: 'pointer',
          userSelect: 'none',
          transition: 'background-color 0.2s, border-color 0.2s'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.04)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = rowBg
        }}
      >
        {/* Custom Visual Checkbox Box */}
        <div
          style={{
            width: '18px',
            height: '18px',
            borderRadius: '4px',
            border: `1.5px solid ${isChecked ? (isDark ? '#ffffff' : '#000000') : textMuted}`,
            backgroundColor: isChecked ? (isDark ? '#ffffff' : '#000000') : 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            transition: 'all 0.15s'
          }}
        >
          {isChecked && (
            <span style={{ 
              color: isDark ? '#121212' : '#ffffff', 
              fontSize: '11px', 
              fontWeight: 'bold',
              lineHeight: 1,
              transform: 'translateY(-0.5px)'
            }}>✓</span>
          )}
        </div>

        {/* Content Labels */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
          <p style={{ fontSize: '13px', fontWeight: 500, color: textPrimary, margin: 0 }}>
            {title}
          </p>
          <p style={{ fontSize: '11px', color: textMuted, margin: 0, lineHeight: '1.4' }}>
            {description}
          </p>
        </div>
      </div>
    )
  }

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
      {/* Top Title Bar controls */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px 0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '20px', height: '20px', backgroundColor: textPrimary, borderRadius: '50%' }} />
          <span style={{ fontSize: '18px', fontWeight: 600, color: textPrimary }}>Kairōs</span>
        </div>
        <button style={{ background: 'none', border: 'none', color: textMuted, cursor: 'pointer', fontSize: '18px' }}>✕</button>
      </div>

      {/* Main Container Workspace */}
      <div style={{ display: 'flex', flex: 1, padding: '24px', overflow: 'hidden' }}>
        
        <SettingsSidebar textPrimary={textPrimary} textMuted={textMuted} />

        {/* Right Settings Configuration Content Block */}
        <div style={{ flex: 1, paddingLeft: '20px', overflowY: 'auto', paddingRight: '10px' }}>
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
            Notifications
          </h1>

          {/* SESSIONS SECTION */}
          <div style={{ marginBottom: '24px' }}>
            <p style={{ fontSize: '11px', color: textMuted, margin: '0 0 10px 0' }}>Sessions</p>
            
            <NotificationRow 
              title="Work session end" 
              description="Receive a notification when a timer session is finished" 
              stateKey="workSessionEnd" 
            />
            <NotificationRow 
              title="Break start/end" 
              description="Get updates about your break status, when it starts, ends, and how much time is left" 
              stateKey="breakStartEnd" 
            />
            <NotificationRow 
              title="Dynamic session updates" 
              description="Get updates when Kairōs dynamically adjusts a break or work session" 
              stateKey="dynamicUpdates" 
            />
          </div>

          {/* NEURAL STATE UPDATES SECTION */}
          <div style={{ marginBottom: '24px' }}>
            <p style={{ fontSize: '11px', color: textMuted, margin: '0 0 10px 0' }}>Neural state updates</p>
            
            <NotificationRow 
              title="Stressed" 
              description="Get notified when your neural activity is estimated to be stressed during a session" 
              stateKey="stressed" 
            />
            <NotificationRow 
              title="Strained" 
              description="Get notified when you are estimated to be strained during a session" 
              stateKey="strained" 
            />
            <NotificationRow 
              title="Locked in" 
              description="Get notified when you are detected to be focused during a session" 
              stateKey="lockedIn" 
            />
          </div>

          {/* DEVICES SECTION */}
          <div style={{ marginBottom: '16px' }}>
            <p style={{ fontSize: '11px', color: textMuted, margin: '0 0 10px 0' }}>Devices</p>
            
            <NotificationRow 
              title="Low battery" 
              description="Get notified when any of your devices reach a battery level below 10%" 
              stateKey="lowBattery" 
            />
          </div>

        </div>
      </div>
    </div>
  )
}