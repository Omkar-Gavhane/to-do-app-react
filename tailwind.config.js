/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all your React files
  ],
  theme: {
    extend: {
      boxShadow: {
        allxl:
          "0 10px 15px 10px rgb(0 0 0 / 0.1), 0 4px 6px 10px rgb(0 0 0 / 0.1)",
      },
    },
    colors: {
      emerald_green: "#16a34a",
      delete_red: "#dc2626",
      white: "#ffffff",
      gray: "#9ca3af",
      midblack: "#585858",
      blurblack: "#1e293b",
    },
    container: {
      center: true,
      padding: "10rem",
    },
  },
  plugins: [],
};
