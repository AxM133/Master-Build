/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#F26A1B', hover: '#D85A0F' },
        dark: { DEFAULT: '#3C3C3C', 900: '#2E2E2E' },
      },
      fontFamily: {
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 24px rgba(0, 0, 0, 0.12)',
        'card-hover': '0 8px 32px rgba(0, 0, 0, 0.18)',
      },
    },
  },
  plugins: [],
}
