import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        clamp: "clamp(0.8rem, 2vw, 1.05rem)",
      },
    },
  },
  plugins: [],
} satisfies Config;
