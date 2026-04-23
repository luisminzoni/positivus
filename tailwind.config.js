/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#B9FF66',
          dark: '#191A23',
          gray: '#F3F3F3',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
      },
      fontSize: {
        'h1-desktop': ['60px', { lineHeight: '1.1', fontWeight: '500' }],
        'h2-desktop': ['40px', { lineHeight: '1.2', fontWeight: '500' }],
        'h3-desktop': ['28px', { lineHeight: '1.3', fontWeight: '500' }],
        'h4-desktop': ['20px', { lineHeight: '1.4', fontWeight: '500' }],
        'body-desktop': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'h1-mobile': ['36px', { lineHeight: '1.1', fontWeight: '500' }],
        'h2-mobile': ['28px', { lineHeight: '1.2', fontWeight: '500' }],
        'h3-mobile': ['20px', { lineHeight: '1.3', fontWeight: '500' }],
        'h4-mobile': ['18px', { lineHeight: '1.4', fontWeight: '500' }],
        'body-mobile': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
      },
      borderRadius: {
        card: '45px',
        pill: '100px',
        tag: '7px',
      },
      boxShadow: {
        card: '0px 4px 0px 0px #191A23',
      },
    },
  },
  plugins: [],
};


