/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'legal-dark': '#0A231E',   // Verde Abisso
        'legal-accent': '#BC5D2E', // Terracotta
        'legal-paper': '#F2F0E9',  // Sabbia
        'legal-text': '#2C2C2C',   // Antracite
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}