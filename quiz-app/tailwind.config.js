/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blueTheme: '#001e4d',
        correct: '#9aeabc',
        incorrect: '#ff9393',
      },
      fontFamily: {
        'sans': ['Poppins, sans-serif'],
      },
    },
  },
  plugins: [],
}

