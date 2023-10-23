/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        dark: "#1E293B",
        myRed: "#ac0d14",
        myRedHover: "#8e090f",
        btnBlueLight: "#1C59AE",
        btnBlueDark: "#19509D",
      },
      width: {
        20: "20px",
        40: "40px",
        150: "150",
        350: "350px",
      },
      height: {
        "h-18": "4.375rem",
        20: "20px",
        100: "100px",
        250: "250px",
      },
      maxWidth: {
        150: "150px",
        1200: "1200px",
      },
    },
  },
  plugins: [],
};
