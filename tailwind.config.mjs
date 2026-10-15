/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        forest: "#244b3e",
        leaf: "#477d68",
        sage: "#e5eee7",
        cream: "#f7f6f1",
        ink: "#20342d",
        muted: "#65746d",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Arial", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 16px 50px rgba(36, 75, 62, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
