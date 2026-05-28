import { useState } from 'react'
import { useTheme } from '../../context/ThemeContext'
import { typography } from '../../styles/typography'
import SettingsSidebar from '../../components/SettingsSidebar'

export default function Devices() {
  const { themeColors, effectiveTheme } = useTheme()
  const isDark = effectiveTheme === 'dark'

  const textPrimary = themeColors.inverseContainer
  const textMuted = isDark ? 'rgba(245,245,245,0.5)' : 'rgba(0,0,0,0.5)'
  const containerBg = isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.02)'
  const cardBorder = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
  const subCardBg = isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)'

  // State to manage expanding/collapsing the device details card
  const [isExpanded, setIsExpanded] = useState(true)

  // Diagnostic signal array structure mapping to the UI nodes in image_29b37e.png
  const sensorChannels = [
    { label: 'AF7', status: 'Obstructed', color: '#8f976a' }, // Sage/Olive
    { label: 'AF8', status: 'Lost', color: '#e28f86' },       // Coral/Red
    { label: 'TP9', status: 'Good', color: '#588b76' },       // Green/Teal
    { label: 'TP10', status: 'Good', color: '#588b76' },      // Green/Teal
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
        fontFamily: 'sans-serif',
      }}
    >
      {/* Top Window Title Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px 0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '20px', height: '20px', backgroundColor: textPrimary, borderRadius: '50%' }} />
          <span style={{ fontSize: '18px', fontWeight: 600, color: textPrimary }}>Kairōs</span>
        </div>
        <button style={{ background: 'none', border: 'none', color: textMuted, cursor: 'pointer', fontSize: '18px' }}>✕</button>
      </div>

      {/* Split Window Layout Frame */}
      <div style={{ display: 'flex', flex: 1, padding: '24px', overflow: 'hidden' }}>
        
        {/* Universal Modular Sidebar Component */}
        <SettingsSidebar textPrimary={textPrimary} textMuted={textMuted} />

        {/* Right Settings Panel Block */}
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
            Devices
          </h1>

          {/* MAIN DEVICE INTERACTIVE CARD COMPONENT */}
          <div
            style={{
              backgroundColor: containerBg,
              border: `1px solid ${cardBorder}`,
              borderRadius: '8px',
              padding: '16px 20px',
              maxWidth: '540px',
              transition: 'all 0.25s ease-in-out',
            }}
          >
            {/* Header Area (Visible in both Expanded and Collapsed layout states) */}
            <div 
              onClick={() => setIsExpanded(!isExpanded)}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                cursor: 'pointer',
                userSelect: 'none'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                {/* Simulated device hardware image container placeholder */}
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: '56px', height: '36px', backgroundColor: '#333', borderRadius: '4px', opacity: 0.7 }} />
                  {/* Small absolute wire-look overlay lines mimicking headband nodes */}
                  <div style={{ position: 'absolute', top: '10px', left: '-4px', width: '12px', height: '24px', border: '2px solid #555', borderRadius: '50%' }} />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <h3 style={{ fontSize: '14px', fontWeight: 600, color: textPrimary, margin: 0 }}>Muse 2</h3>
                  <span style={{ fontSize: '10px', color: textMuted }}>Serial ZFW4D</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '2px' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#588b76' }} />
                    <span style={{ fontSize: '11px', fontWeight: 500, color: '#588b76' }}>Connected <span style={{ opacity: 0.6 }}>· 95%</span></span>
                  </div>
                </div>
              </div>

              {/* Status Icons: Bluetooth indicator and Caret Arrow wrapper */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                {/* Simulated SVG inline Bluetooth graphic icon indicator node */}
                <span style={{ color: textMuted, opacity: 0.7, fontSize: '16px' }}>⚡</span>
                
                {/* Rotational Toggle Carret Arrow */}
                <span 
                  style={{ 
                    color: textMuted, 
                    display: 'inline-block',
                    transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s ease',
                    fontSize: '12px'
                  }}
                >
                  ▼
                </span>
              </div>
            </div>

            {/* EXPANDABLE DIAGNOSTICS AREA PANEL BLOCK */}
            {isExpanded && (
              <div style={{ marginTop: '20px', borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)'}`, paddingTop: '16px' }}>
                <p style={{ fontSize: '11px', color: textMuted, margin: '0 0 12px 0' }}>
                  Last calibrated: April 3, 2026
                </p>

                {/* Grid Sequence matching Channel Cards */}
                <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
                  {sensorChannels.map((channel) => (
                    <div
                      key={channel.label}
                      style={{
                        flex: 1,
                        backgroundColor: subCardBg,
                        border: `1px solid ${cardBorder}`,
                        borderRadius: '6px',
                        padding: '10px 4px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                    >
                      <span style={{ fontSize: '10px', color: textMuted, fontWeight: 500 }}>{channel.label}</span>
                      <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: channel.color, opacity: 0.8 }} />
                      <span style={{ fontSize: '10px', color: textPrimary }}>{channel.status}</span>
                    </div>
                  ))}

                  {/* Separate specialized Heart Rate Sensor Card node context block */}
                  <div
                    style={{
                      flex: 1.1,
                      backgroundColor: subCardBg,
                      border: `1px solid ${cardBorder}`,
                      borderRadius: '6px',
                      padding: '10px 4px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    <span style={{ fontSize: '10px', color: textMuted, fontWeight: 500 }}>Heart rate</span>
                    <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#e28f86', opacity: 0.8, display: 'flex', alignItems: 'center', justifyContent: 'center' }} />
                    <span style={{ fontSize: '10px', color: textMuted }}>♡ ---</span>
                  </div>
                </div>

                {/* Management Action Buttons Group Bottom Wrapper */}
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button
                    style={{
                      flex: 1,
                      height: '36px',
                      borderRadius: '6px',
                      border: '1px solid rgba(226, 143, 134, 0.4)',
                      backgroundColor: 'transparent',
                      color: '#e28f86',
                      fontSize: '12px',
                      fontWeight: 500,
                      cursor: 'pointer',
                      transition: 'background-color 0.2s'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(226, 143, 134, 0.08)')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                  >
                    Delete device
                  </button>
                  <button
                    style={{
                      flex: 1,
                      height: '36px',
                      borderRadius: '6px',
                      border: `1px solid ${textPrimary}`,
                      backgroundColor: 'transparent',
                      color: textPrimary,
                      fontSize: '12px',
                      fontWeight: 500,
                      cursor: 'pointer',
                      transition: 'background-color 0.2s'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                  >
                    Calibrate
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* ADD NEW DEVICE COMPONENT FOOTER ROW BUTTON */}
          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              gap: '8px', 
              marginTop: '24px',
              maxWidth: '540px',
              cursor: 'pointer',
              color: textMuted
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = textPrimary)}
            onMouseLeave={(e) => (e.currentTarget.style.color = textMuted)}
          >
            <span style={{ fontSize: '13px' }}>((·))</span>
            <span style={{ fontSize: '12px', fontWeight: 500 }}>Add new device</span>
          </div>

        </div>
      </div>
    </div>
  )
}