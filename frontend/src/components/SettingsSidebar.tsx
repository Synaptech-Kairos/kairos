import { useLocation, useNavigate } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { AccountIcons } from './Icons'

interface SettingsSidebarProps {
  textPrimary: string
  textMuted: string
}

export default function SettingsSidebar({ textPrimary, textMuted }: SettingsSidebarProps) {
  const { effectiveTheme } = useTheme()
  const navigate = useNavigate()
  const location = useLocation()
  
  const isDark = effectiveTheme === 'dark'

  const navItems = [
    { name: 'Account', path: '/account', icon: AccountIcons.User },
    { name: 'Appearance', path: '/appearance', icon: AccountIcons.Eye }, 
    { name: 'Notifications', path: '/notifications', icon: AccountIcons.Lock }, 
    { name: 'Devices', path: '/devices', icon: AccountIcons.User }, 
    { name: 'Sessions', path: '/sessions', icon: AccountIcons.Lock } 
  ]

  return (
    <div style={{ width: '220px', display: 'flex', flexDirection: 'column', gap: '8px', paddingRight: '20px' }}>
      {navItems.map((item) => {
        // Matches active styling based on current URL route
        const isActive = location.pathname === item.path
        
        return (
          <div
            key={item.name}
            onClick={() => navigate(item.path)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '10px 16px',
              borderRadius: '6px',
              cursor: 'pointer',
              backgroundColor: isActive ? (isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)') : 'transparent',
              color: isActive ? textPrimary : textMuted,
              transition: 'background-color 0.2s'
            }}
          >
            <item.icon size={18} color={isActive ? textPrimary : textMuted} />
            <span style={{ fontSize: '14px', fontWeight: isActive ? 500 : 400 }}>{item.name}</span>
          </div>
        )
      })}
    </div>
  )
}