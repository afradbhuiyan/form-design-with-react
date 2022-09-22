/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },

    screens: {
      sm: '576px',
      md: '768px',
      lg: '1024px',
      xl: '1200px',
      xxl: '1400px'
    },

    colors: {
      transparent: colors.transparent,
      white: colors.white,
      black: colors.black,
      gray: colors.zinc,
      primary: colors.teal
    },

    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  
  plugins: [
    require('@tailwindcss/forms')
  ],
}
