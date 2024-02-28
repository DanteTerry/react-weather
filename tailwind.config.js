/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#e7edfa",
      },
      colors: {
        border: "#0a95c0",
      },
      backgroundImage: {
        "grid-bg": "url('/src/assets/night-landscape.png')",
      },
    },
  },
  plugins: [],
};
