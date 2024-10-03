/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],   theme: {
    extend: {
      colors: {
        customBlue: '#1E3A8A',
        customGreen: '#10B981',
        customYellow: '#FBBF24',
        customPurple: '#8B5CF6',
      },
    },
  },
  plugins: [],
}

