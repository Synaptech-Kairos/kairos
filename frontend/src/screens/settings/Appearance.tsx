import { useState } from 'react'
import { useTheme } from '../../context/ThemeContext'
import { typography } from '../../styles/typography'
import SettingsSidebar from '../../components/SettingsSidebar'

export default function Appearance() {
  const { themeColors, effectiveTheme } = useTheme()
  const isDark = effectiveTheme === 'dark'

  const textPrimary = themeColors.inverseContainer
  const textMuted = isDark ? 'rgba(245,245,245,0.5)' : 'rgba(0,0,0,0.5)'
  const rowBg = isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.02)'
  const rowBorder = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'

  // Interactive configurations matching the screen mockup state variables
  const [selectedTheme, setSelectedTheme] = useState('system') // 'system' | 'light' | 'dark'
  const [selectedAccent, setSelectedAccent] = useState('white') // matching the color circles
  const [displayOptions, setDisplayOptions] = useState({
    miniTimerAlwaysOnTop: true,
    compactMode: true,
  })

  // Accent Colors representation sequence extracted directly from image_29b7dc.png
  const accentColors = [
    { id: 'sage', value: '#8f976a' },
    { id: 'teal', value: '#588b76' },
    { id: 'periwinkle', value: '#7991cc' },
    { id: 'lavender', value: '#937cb7' },
    { id: 'orchid', value: '#e089d0' },
    { id: 'coral', value: '#e28f86' },
    { id: 'white', value: '#f5f5f5' },
  ]

  const toggleDisplayOption = (key: keyof typeof displayOptions) => {
    setDisplayOptions((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  // Mini graphic representations component to simulate the preview frames
  const ThemePreviewCard = ({ 
    type, 
    label 
  }: { 
    type: 'system' | 'light' | 'dark'; 
    label: string 
  }) => {
    const isSelected = selectedTheme === type

    return (
      <div 
        onClick={() => setSelectedTheme(type)}
        style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          gap: '8px', 
          cursor: 'pointer' 
        }}
      >
        <div
          style={{
            width: '148px',
            height: '92px',
            borderRadius: '10px',
            border: `2px solid ${isSelected ? (isDark ? '#ffffff' : '#000000') : 'transparent'}`,
            backgroundColor: type === 'light' ? '#ffffff' : '#1e1e1e',
            position: 'relative',
            overflow: 'hidden',
            boxSizing: 'border-box',
            transition: 'border-color 0.2s'
          }}
        >
          {/* System theme split graphic representation background */}
          {type === 'system' && (
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: 0,
                height: 0,
                borderStyle: 'solid',
                borderWidth: '92px 148px 0 0',
                borderColor: `#ffffff transparent transparent transparent`,
                zIndex: 1,
              }}
            />
          )}

          {/* Mini preview timer interface ring styling context */}
          <div
            style={{
              position: 'absolute',
              right: '-20px',
              bottom: '10px',
              width: '80px',
              height: '40px',
              borderRadius: '20px',
              border: `4px dashed ${type === 'light' || (type === 'system') ? '#999' : '#444'}`,
              zIndex: 2,
              opacity: 0.4
            }}
          />
          <span
            style={{
              position: 'absolute',
              right: '8px',
              bottom: '22px',
              fontSize: '10px',
              fontWeight: 600,
              color: type === 'light' ? '#000' : '#fff',
              zIndex: 3,
            }}
          >
            25:43
          </span>

          {/* Small Logo node indicator top-left */}
          <div
            style={{
              position: 'absolute',
              top: '12px',
              left: '12px',
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: type === 'light' ? '#000000' : '#ffffff',
              zIndex: 3
            }}
          />
        </div>
        <span style={{ fontSize: '11px', color: isSelected ? textPrimary : textMuted }}>
          {label}
        </span>
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
        fontFamily: 'sans-serif',
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

      {/* Main Structural Shared Nav Grid Container */}
      <div style={{ display: 'flex', flex: 1, padding: '24px', overflow: 'hidden' }}>
        
        {/* Universal Modular Sidebar Component */}
        <SettingsSidebar textPrimary={textPrimary} textMuted={textMuted} />

        {/* Right Settings Panel Work Area */}
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
            Appearance
          </h1>

          {/* THEME SELECTION BLOCK */}
          <div style={{ marginBottom: '28px' }}>
            <p style={{ fontSize: '11px', color: textMuted, margin: '0 0 12px 0' }}>Theme</p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <ThemePreviewCard type="system" label="Follow system" />
              <ThemePreviewCard type="light" label="Light" />
              <ThemePreviewCard type="dark" label="Dark" />
            </div>
          </div>

          {/* ACCENT COLOR GRID BLOCK */}
          <div style={{ marginBottom: '32px' }}>
            <p style={{ fontSize: '11px', color: textMuted, margin: '0 0 12px 0' }}>Accent color</p>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              {accentColors.map((color) => {
                const isColorSelected = selectedAccent === color.id
                return (
                  <div
                    key={color.id}
                    onClick={() => setSelectedAccent(color.id)}
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      backgroundColor: color.value,
                      cursor: 'pointer',
                      boxSizing: 'border-box',
                      border: isColorSelected 
                        ? `2.5px solid ${isDark ? '#ffffff' : '#000000'}` 
                        : '1px solid rgba(0,0,0,0.15)',
                      transform: isColorSelected ? 'scale(1.04)' : 'scale(1)',
                      transition: 'transform 0.1s, border-width 0.1s'
                    }}
                  />
                )
              })}
            </div>
          </div>

          {/* DISPLAY MODES MODIFIERS LIST */}
          <div>
            <p style={{ fontSize: '11px', color: textMuted, margin: '0 0 12px 0' }}>Display options</p>

            {/* Item Row 1: Mini Timer Always on Top */}
            <div
              onClick={() => toggleDisplayOption('miniTimerAlwaysOnTop')}
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
              }}
            >
              <div
                style={{
                  width: '18px',
                  height: '18px',
                  borderRadius: '4px',
                  border: `1.5px solid ${displayOptions.miniTimerAlwaysOnTop ? (isDark ? '#ffffff' : '#000000') : textMuted}`,
                  backgroundColor: displayOptions.miniTimerAlwaysOnTop ? (isDark ? '#ffffff' : '#000000') : 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {displayOptions.miniTimerAlwaysOnTop && (
                  <span style={{ color: isDark ? '#121212' : '#ffffff', fontSize: '11px', fontWeight: 'bold' }}>✓</span>
                )}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                <p style={{ fontSize: '13px', fontWeight: 500, color: textPrimary, margin: 0 }}>
                  Mini timer always on top
                </p>
                <p style={{ fontSize: '11px', color: textMuted, margin: 0 }}>
                  Force Kairōs to always be the foreground window when the timer is in compact mode
                </p>
              </div>
            </div>

            {/* Item Row 2: Compact Mode */}
            <div
              onClick={() => toggleDisplayOption('compactMode')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '14px 16px',
                backgroundColor: rowBg,
                border: `1px solid ${rowBorder}`,
                borderRadius: '6px',
                cursor: 'pointer',
                userSelect: 'none',
              }}
            >
              <div
                style={{
                  width: '18px',
                  height: '18px',
                  borderRadius: '4px',
                  border: `1.5px solid ${displayOptions.compactMode ? (isDark ? '#ffffff' : '#000000') : textMuted}`,
                  backgroundColor: displayOptions.compactMode ? (isDark ? '#ffffff' : '#000000') : 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {displayOptions.compactMode && (
                  <span style={{ color: isDark ? '#121212' : '#ffffff', fontSize: '11px', fontWeight: 'bold' }}>✓</span>
                )}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                <p style={{ fontSize: '13px', fontWeight: 500, color: textPrimary, margin: 0 }}>
                  Compact mode
                </p>
                <p style={{ fontSize: '11px', color: textMuted, margin: 0 }}>
                  Always start the timer in compact mode by default
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}