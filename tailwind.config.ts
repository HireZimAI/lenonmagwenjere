import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './data/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#14110F',
        'ink-soft': '#2A2421',
        paper: '#F7F4EF',
        'paper-dim': '#EFEAE1',
        bronze: '#A8763E',
        'bronze-light': '#C79A5E',
        // Veneka Group's brand green, sampled from the group logo.
        forest: '#123E2A',
        stone: '#6E655C',
        edge: '#DED6C9',
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '7xl': ['4.5rem', { lineHeight: '1.02', letterSpacing: '-0.02em' }],
        '8xl': ['6rem', { lineHeight: '0.98', letterSpacing: '-0.025em' }],
      },
      maxWidth: { measure: '34rem', wide: '78rem' },
    },
  },
  plugins: [],
};
export default config;
