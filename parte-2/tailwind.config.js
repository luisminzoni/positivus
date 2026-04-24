/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'Menlo', 'monospace'],
        voltaire: ['"Voltaire"', 'sans-serif'],
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.18' },
          '50%': { transform: 'scale(1.06)', opacity: '0.26' },
        },
        cursor: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUpWord: {
          '0%': { transform: 'translateY(115%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeUpEl: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDownEl: {
          '0%': { opacity: '0', transform: 'translateY(-12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      animation: {
        blob: 'blob 9s ease-in-out infinite',
        cursor: 'cursor 1.1s ease-in-out infinite',
        'fade-up': 'fade-up 0.6s ease-out forwards',
        shimmer: 'shimmer 3s linear infinite',
      },
      backgroundSize: {
        '200%': '200%',
      },
    },
  },
  plugins: [],
}
