import { text } from 'framer-motion/client';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-dark': '#121212',
      },
      fontFamily: {
        clash_grotesk: ['Clash Grotesk', 'sans-serif'],
      },
      colors: {
        primary: "#FAD007",
        secondary: "#FAEAEA",
      }
    },
  },
  plugins: [],
}