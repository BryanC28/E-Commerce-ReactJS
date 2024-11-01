/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '3xl': '2048px',
    },
    container:{
      center:true,
      padding: '1rem'
    },
    extend: {
      fontFamily:{
        roboto: ["Roboto", "serif"],
        quickSan: ["Quicksand", "sans - serif"]
      },
      colors:{
        'primary':'#FD3D57',
      },
    },
  },
  variants:{
    extends:{
      display:['group-hover'],
      visibility:['group-hover'],
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
  darkMode: "class"
}