/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background : '#232323',
        itemBacground : '#2d2d2d',
        gray : '#afafb9',
        primary : '#f54c40',
        primaryDarker : '#c2190d',
        grayDarker : '#494953',
        background : '#232323',
      },
      fontFamily: {
        shabnam: 'shabnam'
      }
    },
  },
  plugins: [],
}

