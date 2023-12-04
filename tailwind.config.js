/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'fold-screen' : {'min' : '150px' , 'max' : '299px'},
      
      'mobile' : {'min' : '300px', 'max' : '575px'},

      'tablet': {'min': '576px', 'max': '768px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'laptop': {'min': '769px', 'max': '1024px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'desktop': {'min': '1025px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'large-screen': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }
    },
    extend: {
      backgroundImage: {
        'backgroundImg': "url('../images/backgroundImage.jpg')",
        'homeBackround' : "url('../images/homebgimage.jpg')",
        'frontend' : "url('../images/fronendbg.png')",
        'backend' : "url('../images/backendbg.png')"
      }
    },
  },
  plugins: [],
}

