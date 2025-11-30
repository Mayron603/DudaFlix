/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'titan': ['"Titan One"', 'cursive'], // A fonte do Google
      },
      colors: {
        'purple-main': '#8B80F9', // O roxo claro do texto
        'purple-btn': '#8B80F9',  // O roxo do botão
      }
    },
  },
  plugins: [],
}