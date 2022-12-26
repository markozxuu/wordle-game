const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./pages/**/*.tsx', './components/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        'geist-dark': 'rgba(38, 43, 60, 0.89)',
        geist: '#E5E5E5',
        navbar: '#F3F3F3',
        'navbar-dark': 'rgba(218, 220, 224, 0.03)',
        'box-ausent': 'rgba(147, 155, 159, 0.3)',
        'accents-1': '#6AAA64',
        'accents-2': '#CEB02C',
        'accents-3': '#939B9F',
        'accents-4': '#262B3C',
        keyboard: '#D3D6DA',
        'keyboard-dark': '#565F7E',
      },
      fontFamily: {
        sans: ['var(--font-roboto)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}
