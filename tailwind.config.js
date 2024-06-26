/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'light-pink': '#F2A1A1',
      'mono-red': '#EC7474',
      'off-white': '#F5F5F5',
      'brown': '#975715',
      'blue': '#2C29BB',
      'dark-blue': '#1B1A54',
      'light-blue': '#5D5BD1',
    },
    
    extend: {
      fontFamily: {
        outfit: ["Outfit", 'sans-serif'],
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
    },
  },
  plugins: [],
}

