const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    ringColor: {
      white: colors.white,
      pink: colors.fuchsia,
    },
    extend: {
      colors: {
        orange: colors.orange,
        amber: colors.amber,
      },
    },
  },
  variants: {
    extend: {
      ringColor: ['hover', 'active'],
    },
  },
  plugins: [],
}
