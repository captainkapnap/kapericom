import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        h1_dynamic: "clamp(1rem, 2.5vw, 2rem)",
        p_dynamic: "clamp(0.7rem, 1.7vw, 1.2rem)",
        cost_dynamic: "clamp(1rem, 2.5vw, 2rem)",
        ul_dynamic: "clamp(0.9rem, 2.1vw, 1.2rem)",
      },
    },
  },
  plugins: [],
} satisfies Config;
