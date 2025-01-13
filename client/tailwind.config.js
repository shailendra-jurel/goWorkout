/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    
  ],   theme: {
    extend: {
      colors: {
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        customBlue: '#1E3A8A',
        customGreen: '#10B981',
        customYellow: '#FBBF24',
        customPurple: '#8B5CF6',
      },
    },
  },
  plugins: [],
}

