/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary-green':'#5E6C5B',
        'primary-cream': '#F3EFE6',
        'secondary-white' : '#FDFCF7',
        'secondary-blue' : '#D6E0E2',
        'dark-blue' : '#162A2B',
        'storm-cloud' : '#686867',
      }
    },
  },
  plugins: [],
}

