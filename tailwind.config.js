/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        neutral:{
          10: '#feffff',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

