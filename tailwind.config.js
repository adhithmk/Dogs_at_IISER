/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4f0',
          100: '#d4e4d4',
          200: '#b8ccb8',
          300: '#9cb49c',
          400: '#809c80',
          500: '#648464',
          600: '#4d6c4d',
          700: '#1F3D2B',
          800: '#243424',
          900: '#1a2c1a',
        },
        earth: {
          50: '#fdf8f3',
          100: '#f5ede4',
          200: '#ead1c1',
          300: '#deb59e',
          400: '#d2997c',
          500: '#c67d59',
          600: '#a86648',
          700: '#8a4f37',
          800: '#6c3826',
          900: '#4e2115',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'soft-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
