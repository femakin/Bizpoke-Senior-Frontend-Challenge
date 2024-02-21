/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  // theme: {

  //   extend: {},
  // },


  theme: {
    extend: {
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },

      colors: {
        biz: {
          sidebg: '#151922',
          mainbg: '#ffffff',
          sidetextcolor: '#61616a',
          sidemenuhovercolor: '#c2cfbb',
          bottomnamecolor: '#5f6168',
          blackcolor: '#18171e'
          // inactivebuttons: '#F0F0EE',
          // whitebg: '#FFFEFB',
          // accent: '#D3E0E6',
          // secondaccent: '#EDF3F4',
          // active: '#50C878'
        }
      },

      // fontFamily: {
      //   Mont: ["var(--font-montserrat)", ...fontFamily.Mont]
      // }
      // backgroundColor: {
      //   bg: {
      //     background: '#004C8F'
      //   }
      // },

      fontFamily: {
        robo: ["Roboto", 'sans-serif'],
      },

      fontSize: {

      }
    },
  },

  plugins: [],
}




