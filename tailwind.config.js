/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#E05100', hover: '#C24600', light: '#FF7A2E' },
        dark: { DEFAULT: '#404040', 900: '#2E2E2E' },
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
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'modal-in': {
          from: { opacity: '0', transform: 'translateY(32px) scale(0.98)' },
          to: { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        pop: {
          '0%': { transform: 'scale(1)' },
          '40%': { transform: 'scale(1.12)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        'pattern-rise': 'pattern-rise 14s linear infinite',
        'fade-in': 'fade-in 200ms ease-out',
        'fade-up': 'fade-up 400ms cubic-bezier(0.16, 1, 0.3, 1) both',
        'modal-in': 'modal-in 320ms cubic-bezier(0.16, 1, 0.3, 1)',
        pop: 'pop 320ms ease-out',
      },
    },
  },
  plugins: [],
}
