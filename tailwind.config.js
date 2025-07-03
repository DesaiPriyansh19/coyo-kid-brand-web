export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
  fontFamily: {
   sofia: ['"Sofia Sans Extra Condensed"', 'sans-serif'], 
  }
},
extend: {
  animation: {
    wiggle: 'wiggle 1s infinite',
  },
  keyframes: {
    wiggle: {
      '0%, 100%': { transform: 'rotate(-5deg)' },
      '50%': { transform: 'rotate(5deg)' },
    },
  },
    rotate: {
    '90': '90deg',
    '180': '180deg',
  },
   zIndex: {
        '60': '60',
        '100': '100',
        '999': '999',
        'max': '9999', // highest recommended
      },
}


  },
  plugins: [],
}
