const colors = require('tailwindcss/colors');

module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '320px',
      'sm': '375px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1440px'
    },
    fontFamily: {
      sans: ['Manrope', "Sans-serif"],
    },
    colors:{
      'primary' : 'hsl(36, 100%, 50%)',
      white: colors.white,
      black: colors.black,
      gray: colors.coolGray
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
