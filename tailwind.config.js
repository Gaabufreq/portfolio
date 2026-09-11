/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#0a0a0c",
        cardBg: "#121218",
        accentCyan: "#00f0ff",
        accentPurple: "#7000ff",
        accentGreen: "#00ff66",
        textLight: "#f3f4f6",
        textMuted: "#9ca3af",
      },
    },
  },
  plugins: [],
}