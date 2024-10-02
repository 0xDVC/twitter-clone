/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'black-50': 'rgba(0, 0, 0, 0.5)',
      },
      fontFamily: {
        'sans': ['Twitter-Chirp', 'sans-serif'],
      },
    },
  },
  plugins: [],
}