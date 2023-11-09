/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    darkMode: "class",
    screens: {
      xl: { max: "1440px" },
      lg: { max: "1024px" },
      md: { max: "768px" },
      sm: { max: "480px" },
    },

    container: {
      center: true,
    },
    fontFamily: {
      sans: ["Rubik", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          100: "#1F3A5F",
          200: "#4d648d",
          300: "#acc2ef",
        },
        accent: {
          200: "#3D5A80",
          100: "#cee8ff",
        },
        text: {
          DEFAULT: "#FFFFFF",
          100: "#e0e0e0",
        },
        bg: {
          300: "#0F1C2E",
          200: "#1f2b3e",
          100: "#374357",
        },
        chart: {
          0: "rgb(255, 99, 132)",
          1: "rgb(17, 207, 139)",
        },
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        x: "2rem",
      },
    },
  },
  plugins: [],
};
