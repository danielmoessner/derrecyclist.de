const typography = require('@tailwindcss/typography');
const colors = require('tailwindcss/colors');
const aspectRatio = require('@tailwindcss/aspect-ratio');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.trueGray,
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['odd'],
      scale: ['group-hover'],
      margin: ['last'],
    },
  },
  plugins: [typography, aspectRatio],
};
