/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: "#ECF0F3",
        Blue: "#6C7CEB",
        Heliotrope: "#DB52F4",
        Gray: "#8F9BB2",
        BlueJeans: "#66A9EB",
      },
    },
  },
  plugins: [require("tailwindcss-neumorphism")],
};
