/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        "13": "repeat(13, minmax(0, 1fr))",
        "14": "repeat(14, minmax(0, 1fr))",
        "15": "repeat(15, minmax(0, 1fr))",
      },
      colors: {
        "pastel": "#F1EAFF",
        "skin": "#FFEDED",
      },
    },
  },
  plugins: [],
};
