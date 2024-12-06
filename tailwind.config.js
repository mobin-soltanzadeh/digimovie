import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens: {
      "sm250": "250px",
      "sm400": "400px",
      "sm450": "450px",
      "sm500": "500px",
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        "mangiola": "Mangiola",
        "dana-light" : "Dana1",
        "dana-regular" : "Dana2",
        "dana-medium" : "Dana3",
        "dana-demibold" : "Dana4",
        "dana-fa-medium" : "Dana5",
      },
      spacing: {
        "250": "1000px",
        "300": "1200px",
      },
      container: {
        center: true,
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-10deg)' },
          '50%': { transform: 'rotate(10deg)' },
        },
        customSpin: {
          "100%": { transform: "rotate(360deg)" }
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        customSpin: 'customSpin 1.5s linear infinite',
      },
    },
  },
  plugins: [],
}