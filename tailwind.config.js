/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grayf4: "#F4F4F4",
        grayf7: "#F7F7F7",
        grayfc: "#FCFCFC",
        graye4: "#e4e4e4",
        gray80: "#808191",
        primaryText: "#11142D",
        primary: "#475BE8",
        secondary: "#2ED480",
      },
      spacing: {
        c10: "10px",
      },
      boxShadow: {
        dropdown: "0px 25px 50px 0px rgba(91, 88, 88, 0.15);",
      },
    },
  },
  plugins: [],
};
