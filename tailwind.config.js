/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'raleway' : ['Raleway'],
        'rubik' : ['Rubik']
      },
      colors:{
        midnightBlue : '#040D12',
        charcoal : '#333333',
        raspberryPink : '#e21b70',
        lightPink : '#fcf1f6',
        mediumGray : '#7d7d7d'
      },
      width:{
        45 : '45%',
      },
    },
  },
  plugins: [],
}
