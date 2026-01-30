/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Unbounded", "system-ui", "sans-serif"],
        sans: ["Manrope", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#0b1d29",
        ocean: "#102c3b",
        jade: "#25c4a1",
        lime: "#b8ff4a",
        mist: "#cfe6ec",
      },
      boxShadow: {
        glow: "0 20px 50px rgba(37, 196, 161, 0.25)",
        soft: "0 30px 60px rgba(7, 18, 28, 0.45)",
      },
    },
  },
  plugins: [],
}
