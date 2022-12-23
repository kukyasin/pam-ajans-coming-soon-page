/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kdam: ['Kdam Thmor Pro', "sans-serif"],
        titanone: ['Titan One', "cursive"],
        blzee: ["blzee", "cursive"],
        poorstory: ["Poor Story", "cursive"],
        eringobragh: ["Erin Go Bragh", "cusrive"],
       },
       backgroundImage: {
        'discord': "url('/assets/images/discord.png')",
      }
    },
  },
  plugins: [],
}
