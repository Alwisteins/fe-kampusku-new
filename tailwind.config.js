/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "prim-300": "var(--primary-color-300)",
        "sec-100": "var(--secondary-color)",
      },
    },
  },
  plugins: [],
};
