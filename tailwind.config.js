/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#080C14',
          surface: '#0F172A',
          card: '#131D31',
          cardHover: '#18243E',
          border: '#1E293B',
          borderLight: '#334155',
          accent: '#10B981',
          accentHover: '#059669',
          blue: '#3B82F6',
          cyan: '#06B6D4'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-emerald': '0 0 40px -10px rgba(16, 185, 129, 0.25)',
        'glow-blue': '0 0 40px -10px rgba(59, 130, 246, 0.25)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
      }
    },
  },
  plugins: [],
}
