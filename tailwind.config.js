/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#E05100', hover: '#C24600' },
        dark: { DEFAULT: '#3C3C3C', 900: '#2E2E2E' },
      },
      fontFamily: {
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '3px 4px 18px rgba(0, 0, 0, 0.2)',
        'card-hover': '4px 10px 28px rgba(0, 0, 0, 0.24)',
      },
      keyframes: {
        'pattern-rise': {
          to: { transform: 'translate3d(0, calc(-1 * var(--tile-size)), 0)' },
        },
      },
      animation: {
        'pattern-rise': 'pattern-rise 14s linear infinite',
      },
    },
  },
  plugins: [],
}
