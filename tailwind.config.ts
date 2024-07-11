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
      "dark-grey": "#D3D3D3",
      "blood-red": "#660708",
      "Seal Brown": "#4B270F",
      "light-gray": "#d3d3d3",
      "white-smoke": "#F5F3F4",
      "eerie-black": "#161A1D",
    },
    extend: {
      backgroundImage: {
        "microphones-white": "url('/images/microphones-white.svg')",
        "microphones-black": "url('/images/microphones-black.svg')",
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        "70%": "70%",
      },
    },
  },
  plugins: [],
};
export default config;
