import { text } from 'framer-motion/client';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ['Gilroy', 'sans-serif'],
        dmSans: ['DM Sans', 'sans-serif'],
      },
      colors: {
        primary: "#FAD007",
        secondary: "#FAEAEA",
        black_1: "07070A",
        black_2: "39393B",
        white: "FFFFFF",
        off_white: "F6F6F6",
      }
    },
  },
  plugins: [],
}