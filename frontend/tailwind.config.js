/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors:{
        "primary-200":"#2973d8" ,
        "primary-100": "#ADD8E6",
        "secondary-200":"#110e4c",
        "secondary-100":"#b3737c"
      }
    },
  },
  plugins: [],
}

