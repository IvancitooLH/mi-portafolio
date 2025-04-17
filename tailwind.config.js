/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#1F1F20',
        blueDark: '#2B4C7E',
        blue: '#567EBB',
        blueGray: '#606D80',
        light: '#DCE0E6',
      }
    }
  },
  plugins: [],
}
