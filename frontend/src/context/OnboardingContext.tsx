import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

interface OnboardingPreferences {
  colorMode: 'light' | 'dark' | 'system'
  accentColorIndex: number
}

interface OnboardingContextType {
  preferences: OnboardingPreferences
  setColorMode: (mode: 'light' | 'dark' | 'system') => void
  setAccentColorIndex: (index: number) => void
}

const OnboardingContext = createContext<OnboardingContextType | null>(null)

export function OnboardingProvider({ children }: { children: ReactNode }) {
  const [preferences, setPreferences] = useState<OnboardingPreferences>({
    colorMode: 'system',
    accentColorIndex: 2, // blue by default
  })

  return (
    <OnboardingContext.Provider
      value={{
        preferences,
        setColorMode: (colorMode) => setPreferences(p => ({ ...p, colorMode })),
        setAccentColorIndex: (accentColorIndex) => setPreferences(p => ({ ...p, accentColorIndex })),
      }}
    >
      {children}
    </OnboardingContext.Provider>
  )
}

export function useOnboarding() {
  const ctx = useContext(OnboardingContext)
  if (!ctx) throw new Error('useOnboarding must be used within OnboardingProvider')
  return ctx
}
