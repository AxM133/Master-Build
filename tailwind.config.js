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
        header: '0 8px 24px -12px rgba(0, 0, 0, 0.18)',
      },
      keyframes: {
        'pattern-rise': {
          to: { transform: 'translate3d(0, calc(-1 * var(--tile-size)), 0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'fade-out': {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'modal-in': {
          from: { opacity: '0', transform: 'translateY(32px) scale(0.98)' },
          to: { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        'modal-out': {
          from: { opacity: '1', transform: 'translateY(0) scale(1)' },
          to: { opacity: '0', transform: 'translateY(24px) scale(0.98)' },
        },
        'slide-in-right': {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(0)' },
        },
        'slide-out-right': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(100%)' },
        },
        'toast-in': {
          from: { opacity: '0', transform: 'translateY(16px) scale(0.96)' },
          to: { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        'scroll-hint': {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '70%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '0' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(1)', opacity: '0.6' },
          '100%': { transform: 'scale(1.7)', opacity: '0' },
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
        'fade-out': 'fade-out 220ms ease-in forwards',
        'fade-up': 'fade-up 600ms cubic-bezier(0.16, 1, 0.3, 1) both',
        'modal-in': 'modal-in 320ms cubic-bezier(0.16, 1, 0.3, 1)',
        'modal-out': 'modal-out 220ms ease-in forwards',
        'slide-in-right': 'slide-in-right 360ms cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-out-right': 'slide-out-right 220ms ease-in forwards',
        'toast-in': 'toast-in 320ms cubic-bezier(0.16, 1, 0.3, 1)',
        'scroll-hint': 'scroll-hint 1.6s ease-in-out infinite',
        pop: 'pop 320ms ease-out',
        'pulse-ring': 'pulse-ring 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
    },
  },
  plugins: [],
}
