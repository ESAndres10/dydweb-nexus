import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dyd: {
          black: "#030814",
          ink: "#07111F",
          navy: "#0A1E49",
          panel: "#0B1730",
          blue: "#075BFF",
          royal: "#123B8F",
          cyan: "#16C7F3",
          silver: "#DCEBFF",
          green: "#DCEBFF",
          text: "#B9C9E4",
          line: "#7BAEFF",
        },
      },
      boxShadow: {
        glow: "0 0 55px rgba(22, 199, 243, 0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
