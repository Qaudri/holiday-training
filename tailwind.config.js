/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './plugins/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-light': '#93F2F3',
        'primary': '#058182',
        'primary-dark': '#002020',
        'secondary': '#F26522',
        'pink': '#FF9CF2',
        'pink-dark': '#7D2A78',
        'accent': '#666666',
        'light': '#F4F4F4'
      },

      animation: {
        float: 'float 5s ease-in-out infinite',
      },

      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(var(--arrow-rotation, 0deg))' },
          '50%': { transform: 'translateY(-10px) rotate(var(--arrow-rotation, 0deg))' },
        },
      },

      height: theme => ({
        'screen-40': '40vh',
        'screen-50': '50vh',
        'screen-60': '60vh',
        'screen-70': '70vh',
        'screen-75': '75vh',
        'screen-80': '80vh',
        'screen-85': '85vh',
        'screen-90': '90vh',
      }),

      zIndex: {
        '10': 10,
        '20': 20,
        '30': 30,
        '40': 40,
        '50': 50,
        '60': 60,
        '70': 70,
        '80': 80,
        '90': 90,
        '100': 100,
        '110': 110,
        '120': 120,
        '130': 130,
        '140': 140,
        '150': 150,
        'auto': 'auto',
      },
    },
  },
  plugins: [],
}
