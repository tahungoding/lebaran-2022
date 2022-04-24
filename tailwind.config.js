module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem'

      },

    },
    screens: {
      'ss': '374px',
      // => @media (min-width: 374px) { ... }
      'xm': '425px',
      // => @media (min-width: 425px) { ... }
      'xs': '500px',
      // => @media (min-width: 500px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '3xl': '1836px',
      // => @media (min-width: 1536px) { ... }

    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
