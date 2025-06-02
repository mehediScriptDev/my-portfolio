/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    colors:{
        maincl: '#0d1117',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

