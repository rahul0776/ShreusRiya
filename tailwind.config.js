/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'royal-sand': '#F3EEE6',
        'royal-brown': '#54433A',
        'royal-slate': '#2C3E50',
        'royal-gold': '#D4AF37',
        'royal-blue': '#A0C4FF',
        'royal-rose': '#FFC8DD',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Outfit"', 'sans-serif'],
        script: ['"Pinyon Script"', 'cursive'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
}
