/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
theme: {
  extend: { 
    backgroundImage: {
    Desktop: "url('./assets/desktop.svg')"
  },
    borderRadius: {
      lg: 'var(--radius)',
      md: 'calc(var(--radius) - 2px)',
      sm: 'calc(var(--radius) - 4px)'
    },
    colors: {
      coolgray: '#f0f4f8',
      marineblue: '#022b3a',
      violet: '#7c3aed',
    }
  }
},
plugins: [require("tailwindcss-animate")],
}
