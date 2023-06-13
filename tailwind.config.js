/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '375px',
      'md': '500px',
      'lg': '1024px',
    },
    extend: {},
  },
  plugins: [],
}