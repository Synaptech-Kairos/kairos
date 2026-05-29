export const colors = {
  light: {
    background: '#FFFFFF',
    containerLow: '#F1F1F1',
    inverseContainer: '#000000',
    accentYellow: '#C6CB88',
    accentGreen: '#91BCA9',
    accentBlue: '#8BA6EA',
    accentPurple: '#C289E8',
    accentPink: '#EA8BCD',
    accentRed: '#EA8B8B',
  },
  dark: {
    background: '#141414',
    containerLow: '#353535',
    inverseContainer: '#F5F5F5',
    accentYellow: '#8E925D',
    accentGreen: '#538770',
    accentBlue: '#738CCB',
    accentPurple: '#9973B3',
    accentPink: '#C171A8',
    accentRed: '#C07676',
  },
} as const

export type ThemeMode = keyof typeof colors
export type ColorTheme = typeof colors[ThemeMode]

export const accentColorPairs = [
  { light: '#C6CB88', dark: '#8E925D' }, // yellow
  { light: '#91BCA9', dark: '#538770' }, // green
  { light: '#8BA6EA', dark: '#738CCB' }, // blue
  { light: '#C289E8', dark: '#9973B3' }, // purple
  { light: '#EA8BCD', dark: '#C171A8' }, // pink
  { light: '#EA8B8B', dark: '#C07676' }, // red
  { light: '#000000', dark: '#F5F5F5' }, // neutral (inverse container)
] as const
