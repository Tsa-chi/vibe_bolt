/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        'thumb': '48px', // Minimum thumb-friendly touch target
        'thumb-lg': '64px', // Large thumb-friendly touch target
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
        '3xl': '24px',
      },
      fontSize: {
        'thumb': ['18px', '24px'], // Larger text for better readability
      },
      animation: {
        'slide-up': 'slide-up 0.3s ease-out',
        'pulse-gentle': 'pulse-gentle 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};