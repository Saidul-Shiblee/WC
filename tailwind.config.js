const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./public/**/*.html'],
  media: false,
  theme: {
    extend: {
      colors:{
        owngray:'#424242',
        owngreen:'#96c346',
        ownmidgray:'#f6f6f6', 
        ownblue:'#2596be',
        ownyellow:'#ffa600'
      },
      keyframes: {Myping: {'100%': { transform: 'scale(2)',opacity:'0' }}},

      animation: {
        'Myping': 'ping 1s cubic-bezier(0, 0, 0.2, 1)'}
      },
  },
  variants: {
    extend: {
      scale:["group-hover","active"],
      ringOffsetWidth:["group-hover","active",'focus'],
      ringWidth: ["group-hover","active",'focus'],
      ringColor:["group-hover","active",'focus'],
      ringOffsetColor:["group-hover","active",'focus'],
      backgroundPosition:["group-hover","active",'focus'],
      borderWidth: ["group-hover","active",'focus'],
      visibility: ["group-hover","active",'focus'],
      'spin-slow': 'spin 3s linear infinite'
    }
  },
  plugins: [],
}
