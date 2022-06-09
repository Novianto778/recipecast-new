module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      spacing: {
        'hero': 'calc(100vh - 64px)',
        'recipe': 'calc(100vh - 240px)'
      },
      borderRadius: {
        'corner': '8%'
      },
      colors: {
        'primary': '#f6ba18',
        'secondary': 'rgba(246, 186, 24, 0.29)',
        'accent': '#2f2e41',
        'body': '#404040',
      },
      keyframes: {
        slide: {
          '0%, 100%': { right: '60%' },
          '50%': { right: '10%' },
        } 
      },
      animation: {
        slide: 'slide 4s ease-in-out infinite',
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
      backgroundImage: {
        'overlay': 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5))',
      }
    }
  },
  plugins: [],
}