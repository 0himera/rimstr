/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        poiret: ['"Poiret One"', 'serif'],
        'great-vibes': ['"Great Vibes"', 'serif'],
      },
      colors: {
        primary: {
          50: '#f8f9fa',
          100: '#f1f3f5',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#868e96',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
        },
        aivory: {
          100: '#FAEBD7',
          200: '#FFFFF0',
        },
        grafit: {
          100: '#2F2F2F',
        },
      },
    },
  },
  plugins: [],
}