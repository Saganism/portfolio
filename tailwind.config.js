/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    animation: {
      spin: 'spin 30s linear infinite',
  },
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        slideOut: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' },
        }
      },
      animation: {
        'marquee-infinite': 'marquee 25s linear infinite',
        'slide-in': 'slideIn 300ms ease-out',
        'slide-out': 'slideOut 300ms ease-in'
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fill, minmax(300px, 1fr))'
      },
      boxShadow: {
        'card-shadow': '0 35px 35px rgba(0,0,0,0.25)'

      }
    },
  },
  plugins: [],
}
