/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
    inter: ['Inter', 'sans-serif'],
    mont: ['Montserrat', 'sans-serif'],
  },
      
      keyframes: {
        shine: {
          '0%': { 'background-position': '100%' },
          '100%': { 'background-position': '-100%' },
        },
        
      },
      animation: {
        shine: 'shine 5s linear infinite',
        
      },
    colors:{
        maincl: '#1e1f26',
        textcl: '#0077b5',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

