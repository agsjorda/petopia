// tailwind.config.js
module.exports = {

content: [
  "./App.{js,jsx,ts,tsx}", 
  "./app/**/*.{js,jsx,ts,tsx}"
],
  theme: {
    extend: {
      colors: {
        //add custom colors here
        primary: '#E8B20E',
        gray: '#8F8e8d',
      },
    },
  },
  plugins: [],
}