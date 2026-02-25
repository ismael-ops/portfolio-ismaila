/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F5F1E8',
        sage: '#B8C4B8',
        peach: '#FFD4B8',
        lavender: '#D4C4E8',
        mint: '#C4E8D4',
      },
      fontFamily: {
        'handwriting': ['Caveat', 'cursive'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
