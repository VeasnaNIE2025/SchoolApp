export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",   // ← សំខាន់!
  theme: {
    extend: {
      fontFamily: {
        khmer: ["'Kantumruy Pro'", "'Khmer OS'", "sans-serif"],
      },
    },
  },
  plugins: [],
};