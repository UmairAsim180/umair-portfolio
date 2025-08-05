/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        script: ['var(--font-script)'], 
        inter:['var(--font-inter)'],
        montserrat:['var(--font-montserrat)'],
        poppins:['var(--font-poppins)'],
      },
    },

  },
  plugins: [],
}
