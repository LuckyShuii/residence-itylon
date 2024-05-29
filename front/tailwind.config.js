/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.html',
    './src/**/*.vue',
  ],
  theme: {
    extend: {
      colors: {
        header: '#363636',
        'green-btn': '#89B58C',
        'green-light': '#F3F8F4',
        black: '#363636',    
      }
    },
  },
  plugins: [],
}

