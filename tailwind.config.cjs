/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        neon: {
          cyan: '#22D3EE',
          purple: '#A855F7',
          glow: '#67E8F9',
        },
        bg: {
          deep: '#04050A',
          panel: '#0C1020',
          elevated: '#141B30',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Sora', 'SF Pro Display', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        26: '6.5rem',
      },
      boxShadow: {
        glow: '0 0 30px rgba(103, 232, 249, 0.25)',
        purple: '0 0 28px rgba(168, 85, 247, 0.28)',
      },
    },
  },
  plugins: [],
}
