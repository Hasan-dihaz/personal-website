/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        twitter:'#1da1f2',
        linkedin:'#0a66c2',
        facebook:'#1771e6'
      }
    },
  },
  plugins: [],
}
