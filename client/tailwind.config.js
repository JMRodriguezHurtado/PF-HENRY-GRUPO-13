/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./src/App"
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'primary': "#ECEEFF",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)",
        'silver1': 'var(--silver1)',
        'silver2': 'var(--silver2)',
        'silver3': 'var(--silver3)',
        'silver4': 'var(--silver4)',
        'gray1': 'var(--gray1)',
        'gray2': 'var(--gray2)',
        'gray3': 'var(--gray3)',
        'gray4': 'var(--gray4)',
        'blue1': 'var(--blue1)',
        'blue2': 'var(--blue2)',
        'blue3': 'var(--blue3)',
        'blue4': 'var(--blue4)',
        'primary': 'var(--primary)',
        'slate-gray': 'var(--slate-gray)',
        'pale-blue': 'var(--pale-blue)',
        'white-400': 'var(--white-400)',
      },
        fontFamily: {
        'bebas': 'var(--bebas)',
        'garamond': 'var(--garam)',
        'pop-bold' : 'var(--popBold)',
        'pop-light' : 'var(--popLight)',
        'pop-semi' : 'var(--popSemi)',
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      screens: {
        "wide": "1440px"
      }
    },
  },
  plugins: [],
}