/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      rubik: ['Rubik', 'sans-serif']
    },
    colors:{
      'orange': '#6A04BD'
    }
  },
  plugins: [],
};
