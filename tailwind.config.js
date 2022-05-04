// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./shared/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        segoe: ["Segoe", "Arial", "sans-serif"],
      },
      lineHeight: {
        "extra-loose": "4rem",
      },
      backgroundColor: {
        cardColor: "#0F73D1",
        "dark-bg-2": "#22343D",
        "dark-bg-3": "#f3f4f6",
        "theme-orange": "#F2994A",
      },
      colors: {
        cardColor: "#0F73D1",
      },
      animation: {
        floating: "floating 3s linear infinite ease-in-out",
      },
      keyframes: {
        floating: {
          "0%": { transform: "translate(0,  0px)" },
          " 50%": { transform: "translate(0, 5px)" },
          "100%": { transform: "translate(0, -0px)" },
        },
      },
    },
  },
  variants: {
    extend: {
      fontFamily: ["hover", "focus"],
    },
  },
  plugins: [],
  corePlugins: {
    fontFamily: true,
  },
};
