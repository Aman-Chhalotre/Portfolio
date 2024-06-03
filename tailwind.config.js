/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      backgroundImage: {
        'backgroundImg': "url('../images/backgroundImage.jpg')",
        'homeBackround': "url('../images/homebgimage.jpg')",
        'frontend': "url('../images/fronendbg.png')",
        'backend': "url('../images/backendbg.png')"
      }
    },
  },
  plugins: [],
}

