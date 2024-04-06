/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#e7edfa",
      },
      colors: {
        border: "#0a95c0",
      },
      backgroundImage: {
        "night-bg": "url('/assets/night-landscape.png')",
        "day-bg": "url('/assets/day-landscape.png')",
      },
    },
  },
  plugins: [],
};
