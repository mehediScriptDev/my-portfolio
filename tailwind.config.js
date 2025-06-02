/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    colors:{
        maincl: '#0e0f1c',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

