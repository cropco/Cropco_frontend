/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#F1F8F3',
          100: '#D5E5DD',
          500: '#12544F',
          600: '#12544F',
          700: '#092328',
        },
        accent: {
          400: '#8BBB92',
          500: '#2A835F',
          600: '#12544F',
        },
        dark: '#092328',
        muted: '#4F6868',
        soft: '#8BBB92',
      }
    },
  },
  plugins: [],
}