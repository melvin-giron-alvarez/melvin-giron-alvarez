/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'dimgrey' : '#dfdfdf',
      'dimblack' : '#0E0E0E',
      'borderColor' : '#A9A9A9',
      'dimteal' : '#ECF5F1'
    },
    extend: {},
  },
  plugins: [],
}

