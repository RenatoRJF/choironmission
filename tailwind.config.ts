import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      grey: "#D3D3D3",
      night: "#0B090A",
      white: "#FFFFFF",
      green: "#34C759",
      yellow: "#EE9B00",
      "dark-grey": "#757778",
      "blood-red": "#660708",
      "seal-brown": "#4B270F",
      "light-gray": "#d3d3d3",
      "white-smoke": "#F5F3F4",
      "eerie-black": "#161A1D",
    },
    fontSize: {
      "heading-1": "4.5rem",
      "heading-2": "3.13rem",
      "heading-3": "1.13rem",
      "heading-4": "0.88rem",
      headline: "1rem",
      body: "0.88rem",
      "body-semibold": "0.88rem",
      caption: "0.75rem",
    },
    fontWeight: {
      bold: "bold",
      regular: "400",
      semibold: "500",
      light: "300",
      thin: "200",
    },
    extend: {
      backgroundImage: {
        "microphones-white": "url('/images/microphones-white.svg')",
        "microphones-black": "url('/images/microphones-black.svg')",
        "home-mic": "url('/images/home-mic.svg')",
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        "95%": "95%",
        "90%": "90%",
        "80%": "80%",
        "70%": "70%",
        "60%": "60%",
        "50%": "50%",
        "40%": "40%",
      },
    },
  },
  plugins: [],
};
export default config;
