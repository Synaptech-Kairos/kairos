import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { useOnboarding } from './OnboardingContext'
import { colors, accentColorPairs } from '../styles/colors'
import type { ThemeMode } from '../styles/colors'

interface ThemeContextType {
  effectiveTheme: ThemeMode
  themeColors: typeof colors.light
  currentAccentColor: string
}

const ThemeContext = createContext<ThemeContextType | null>(null)

function getSystemTheme(): ThemeMode {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const { preferences } = useOnboarding()
  const [systemTheme, setSystemTheme] = useState<ThemeMode>(getSystemTheme)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (e: MediaQueryListEvent) => setSystemTheme(e.matches ? 'dark' : 'light')
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const effectiveTheme: ThemeMode =
    preferences.colorMode === 'system' ? systemTheme : preferences.colorMode

  const themeColors = colors[effectiveTheme]
  const currentAccentColor = accentColorPairs[preferences.accentColorIndex][effectiveTheme]

  useEffect(() => {
    const root = document.documentElement
    root.setAttribute('data-theme', effectiveTheme)
    root.style.setProperty('--color-background', themeColors.background)
    root.style.setProperty('--color-container-low', themeColors.containerLow)
    root.style.setProperty('--color-inverse-container', themeColors.inverseContainer)
    root.style.setProperty('--color-accent-yellow', themeColors.accentYellow)
    root.style.setProperty('--color-accent-green', themeColors.accentGreen)
    root.style.setProperty('--color-accent-blue', themeColors.accentBlue)
    root.style.setProperty('--color-accent-purple', themeColors.accentPurple)
    root.style.setProperty('--color-accent-pink', themeColors.accentPink)
    root.style.setProperty('--color-accent-red', themeColors.accentRed)
    root.style.setProperty('--color-accent', currentAccentColor)
  }, [effectiveTheme, themeColors, currentAccentColor])

  return (
    <ThemeContext.Provider value={{ effectiveTheme, themeColors, currentAccentColor }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
