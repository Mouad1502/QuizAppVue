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
      },
      fontFamily: {
        'sans': ['Poppins, sans-serif'],
      },
    },
  },
  plugins: [],
}

