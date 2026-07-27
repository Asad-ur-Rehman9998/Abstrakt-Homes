/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      colors: {
        luxury: {
          50: '#f8f7f4',
          100: '#efece4',
          200: '#ddd6c8',
          300: '#c4b9a5',
          400: '#a8967a',
          500: '#8f7a5e',
          600: '#7a654d',
          700: '#645240',
          800: '#544536',
          900: '#483c30',
          950: '#271f18',
        },
        navy: {
          900: '#0a0f1a',
          800: '#111827',
          700: '#1a2332',
        },
        gold: {
          300: '#e8d5a3',
          400: '#d4bc7a',
          500: '#c9a962',
          600: '#b8944a',
        },
      },
      backgroundImage: {
        'luxury-gradient': 'linear-gradient(135deg, #0a0f1a 0%, #1a2332 50%, #271f18 100%)',
        'gold-shimmer': 'linear-gradient(90deg, transparent, rgba(201,169,98,0.15), transparent)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
      },
      boxShadow: {
        luxury: '0 25px 50px -12px rgba(0, 0, 0, 0.35)',
        'luxury-lg': '0 35px 60px -15px rgba(0, 0, 0, 0.4)',
        glow: '0 0 40px rgba(201, 169, 98, 0.15)',
        'glow-blue': '0 0 40px rgba(59, 130, 246, 0.2)',
        glass: '0 8px 32px rgba(0, 0, 0, 0.12)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        shimmer: 'shimmer 3s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 4s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%, 100%': { backgroundPosition: '-200% center' },
          '50%': { backgroundPosition: '200% center' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
