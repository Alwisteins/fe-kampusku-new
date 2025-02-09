/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "prim-300": "var(--primary-color-300)",
        "sec-100": "var(--secondary-color)",
      },
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
        "infinite-scroll-reverse":
          "infinite-scroll-reverse 50s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-100%)" },
        },
        "infinite-scroll-reverse": {
          from: { transform: "translateX(-80%)" },
          to: { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
};
