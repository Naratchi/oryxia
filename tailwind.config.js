/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#070708',
        bg2: '#0c0c0e',
        bg3: '#111113',
        muted: 'rgba(255,255,255,0.45)',
        muted2: 'rgba(255,255,255,0.15)',
        border: 'rgba(255,255,255,0.07)',
        border2: 'rgba(255,255,255,0.13)',
        v1: '#8b6cf7',
        v2: '#c45af5',
        r1: '#f0566a',
      },
      fontFamily: {
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
