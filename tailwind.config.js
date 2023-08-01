/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#757575",
          "200": "#212121",
          "300": "#0a2540",
          "400": "rgba(255, 255, 255, 0.81)",
          "500": "rgba(0, 0, 0, 0.2)",
          "600": "rgba(255, 255, 255, 0.4)",
        },
        darkslategray: "#425466",
        mediumslateblue: "#635bff",
        whitesmoke: {
          "100": "#f6f9fc",
          "200": "#f4f7fa",
          "300": "#efefef",
        },
        royalblue: {
          "100": "#7085fa",
          "200": "#5267dc",
        },
        black: "#000",
        gainsboro: {
          "100": "#e0e0e0",
          "200": "#d9d9d9",
        },
        darkslateblue: {
          "100": "rgba(66, 71, 112, 0.2)",
          "200": "rgba(66, 71, 112, 0.3)",
          "300": "rgba(66, 71, 112, 0.06)",
          "400": "rgba(66, 71, 112, 0)",
        },
        lightskyblue: "#8cc6ff",
        lightgray: "rgba(206, 206, 206, 0.81)",
        deepskyblue: "#00d4ff",
        lightsteelblue: "#adbdcc",
      },
      fontFamily: {
        "helvetica-neue": "'Helvetica Neue'",
        "league-spartan": "'League Spartan'",
        inter: "Inter",
      },
      borderRadius: {
        "10xs-7": "2.7px",
        "base-5": "16.5px",
        "41xl": "60px",
      },
    },
    fontSize: {
      lg: "18px",
      "19xl": "38px",
      mid: "17px",
      "5xs-6": "7.6px",
      "2xs-9": "10.9px",
      "6xs-5": "6.5px",
      mini: "15px",
      sm: "14px",
      "9xl": "28px",
      "72xl": "91px",
      "5xl": "24px",
      "3xl": "22px",
      "17xl": "36px",
    },
    screens: {
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
