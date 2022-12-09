/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  darkMode: 'class', /** 'media' or 'class' */
  theme: {
    extend: {
      fontFamily: {
    'vt323': ['VT323'],
  },
    },
    plugins: [],
  },
};