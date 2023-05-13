/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainBlue : '#218DFD',
        mainGreen : '#00A44E',
        mainPink : '#FF2060'
      },
    },
  },
  plugins: [],
}