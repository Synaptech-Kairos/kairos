/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'headline-medium': ['32px', { lineHeight: '100%', letterSpacing: '-0.32px' }],
        'title-large': ['25px', { lineHeight: '100%', letterSpacing: '-0.25px' }],
        'title-medium': ['23px', { lineHeight: '100%', letterSpacing: '-0.23px' }],
        'title-small': ['20px', { lineHeight: '100%', letterSpacing: '-0.2px' }],
        'body-large': ['16px', { lineHeight: '100%', letterSpacing: '-0.16px' }],
        'body-medium': ['13px', { lineHeight: '100%', letterSpacing: '-0.13px' }],
        'body-small': ['11px', { lineHeight: '100%', letterSpacing: '-0.11px' }],
      },
      fontFamily: {
        unbounded: ['Unbounded, sans-serif'],
        geist: ['Geist, sans-serif'],
      },
      fontWeight: {
        medium: 500,
      },
    },
  },
  plugins: [],
}
