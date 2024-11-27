/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'logo1': '#20ACDF',
        'logo2': '#240147'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'berkshire': ['Berkshire Swash', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

