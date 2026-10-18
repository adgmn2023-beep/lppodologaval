/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        "ink-2": "var(--ink-2)",
        gold: "var(--gold)",
        "gold-light": "var(--gold-light)",
        "gold-deep": "var(--gold-deep)",
        ivory: "var(--ivory)",
        "ivory-2": "var(--ivory-2)",
        white: "var(--white)",
        "on-ink": "var(--text-on-ink)",
        "muted-on-ink": "var(--muted-on-ink)",
        body: "var(--text)",
        heading: "var(--heading)",
        accent: "var(--accent)",
        muted: "var(--muted)",
        line: "var(--line)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Arial", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 16px 50px rgba(11, 11, 12, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
