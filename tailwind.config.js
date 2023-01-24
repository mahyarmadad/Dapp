/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./screen/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        88: "88px",
      },
    },
    colors: {
      itemBg: "#323232",
      gray01: "#ffffff",
      gray02: "#eff4f8",
      gray03: "#7e7e7e",
      gray04: "#4b4b4b",
      gray05: "#323232",
      gray06: "#2b2b2b",
    },
  },
  plugins: [],
};
