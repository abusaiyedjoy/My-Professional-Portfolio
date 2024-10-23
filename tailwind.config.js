/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        hiWiggle: {
          "25%": { transform: "translateY(0px) rotate(15deg)" },
          "75%": { transform: "translateY(0px) rotate(-15deg)" },
        },
      },
      animation: {
        hiWiggle: "hiWiggle 3s infinite ease-in-out",
      },
      colors:{
        primary: "#f79c13",
        secondary: "#1E1E1E"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}