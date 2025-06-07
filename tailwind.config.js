/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      keyframes: {
        playfulZoom: {
          '0%': { transform: 'scale(1) rotate(0deg)' },
          '25%': { transform: 'scale(1.1) rotate(2deg)' },
          '50%': { transform: 'scale(1.15) rotate(-2deg)' },
          '75%': { transform: 'scale(1.1) rotate(1deg)' },
          '100%': { transform: 'scale(1) rotate(0deg)' }
        },
        slideIn: {
          '0%': { 
            transform: 'translateX(100%)',
            opacity: '0'
          },
          '100%': { 
            transform: 'translateX(0)',
            opacity: '1'
          }
        }
      },
      animation: {
        'playful': 'playfulZoom 0.8s ease-in-out infinite',
        'slide-in': 'slideIn 0.7s ease-in-out'
      }
    },
  },
  plugins: [],
};
