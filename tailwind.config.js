/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "neutral-face-bold": ["Neutral Face Bold"],
        "neutral-face": ["Neutral Face"],
      },
      keyframes: {
        "show-list-item": {
          from: { transform: "translateX(-75px)" },
          to: { transform: "translateX(0px)" },
        },
      },

      animation: {
        "show-list-item": "show-list-item linear .2s",
      },
    },
  },
  plugins: [],
};
