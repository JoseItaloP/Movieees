/** @type {import('tailwindcss').Config} */



export default {
  content: ["./src/**/*.{html,js,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      'phone': {'max': '768px'},
      'tablet': '769px',
      'laptop': '1023',
      'midSize': '1535px',
      'bigSize': '2170px',
  },
    extend: {
      screens: {
        'phone': {'max': '768px'},
        'tablet': {'min': '769px', 'max': '1250px'},
        'laptop': {'min': '1250px', 'max': '1534px'},
        'midize': {'min': '1535px', 'max': '2169px'},
        'bigSize': {'min': '2170px'}
    },
      colors:{
        'transparent': 'transparent',
        'darkPink':{
          100: '#fff0f3',
          200: '#ffccd5',
          300: '#ffb3c1',
          400: '#ff8fa3',
          500: '#ff758f',
          600: '#ff4d6d',
          700: '#c9184a',
          800: '#a4133c',
          900: '#800f2f',
          950: '#590d22',
        }
      },
      fontFamily:{
          Lato : ['Lato'],
          Rubik: ['Rubik']
        },
        
        
    },
  },
  plugins: [],
}

