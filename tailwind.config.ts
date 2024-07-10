import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      white: "#ffffff",
      black: "#161a1d",
      green: "#34c759",
      yellow: "#EE9B00",
      grey: "#757778",
      "light-gray": "#d3d3d3",
    },
    extend: {
      backgroundImage: {
        "microphones-white": "url('/images/microphones-white.svg')",
        "microphones-black": "url('/images/microphones-black.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
