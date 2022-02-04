const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./public/**/*.html"],
  media: false,
  theme: {
    extend: {
      colors: {
        owngray: "#424242",
        owngreen: "#96c346",
        ownmidgray: "#f6f6f6",
        ownblue: "#2596be",
        navblue:"#a2d6f5",
        ownyellow: "#ffa600",
        navgray:"#efefef",
        navblue1:"#3d74b9",
        navblue2:'#5bc4e9',
        navblue3: '#def2fe',
        navblue4: '#e9f7fe',
        testimonial:"#47576e",
        booknow:"#712B86",
        footer:"#2B568B"
      },
      fontFamily:{
        nav:['Poppins'],
        nav1:['"Dancing Script"'],
        booknow:['Baumans']
      },
      keyframes: {
        myAnimation: {
          '0%': {"margin-top":'-270px'},
          '5%': {"margin-top":'-180px'},
          '33%':{"margin-top":'-180px'},
          '38%': {"margin-top":'-90px'},
          '66%': {"margin-top":'-90px'},
          '71%': {"margin-top":'0px'},
          '99.99%': {"margin-top":'0px'},
          '100%': {"margin-top":'-270px'},
        },
      },

      animation: {
        'myAnimation': "myAnimation 5s linear infinite;",
        'myBounce': 'bounce 1s 2.5 forwards',
      },
     
      backgroundImage: {
        'quote-image': "url('../assets/quote.png')",
      },
    },
  },
  variants: {
    extend: {
      animation:['even','odd','hover'],
      gradientColorStops: ['active', 'group-hover'],
      scale: ["group-hover", "active", "focus", "group-focus"],
      translate:["group-hover", "active", "focus", "group-focus"],
      transition:["group-hover", "active", "focus", "hover0"],
      ringOffsetWidth: ["group-hover", "active", "focus", "group-focus"],
      ringWidth: ["group-hover", "active", "focus", "group-focus"],
      ringColor: ["group-hover", "active", "focus", "group-focus"],
      ringOffsetColor: ["group-hover", "active", "focus", "group-focus"],
      backgroundPosition: ["group-hover", "active", "focus", "group-focus"],
      borderWidth: ["group-hover", "active", "focus", "group-focus"],
      visibility: ["group-hover", "active", "focus", "group-focus"],
    },
  },
};
