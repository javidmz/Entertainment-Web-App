/** @type {import('tailwindcss').Config} */
import x from "./src/assets/Popcorn_1.png"
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'skeletonColor': 'rgb(199, 199, 199)'
      }
    },
    keyframes: {
      'open-mobile-menu': {
        '0%': {
          transform: 'scaleY(0)'
        },
        '80%': {
          transform: 'scaleY(1.2)'
        },
        '100%': {
          transform: 'scaleY(1)'
        }
      }, 
      'pulse': {
        
      }
    },
    animation: {
      'open-mobile-menu': 'open-mobile-menu .5s ease-in forwards'
    },
    screens: {
      'xs': '481px',
      'xmd': '950px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}

