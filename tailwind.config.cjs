/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        header: ['Outfit', 'sans-serif'],
        sans: ['Hubot Sans', 'sans-serif'],
      },
      colors: {
        primary: {
          blue: '#20262E',
          yellow: '#F2CD5C',
          black: '#111010',
        },
      },
    },
  },
  plugins: [],
};
