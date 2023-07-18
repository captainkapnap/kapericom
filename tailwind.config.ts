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
        aw_p_dynamic: "clamp(1.2rem, 2.3vw, 1.4rem)",
        aw_h1_dynamic: "clamp(1.5rem, 2.5vw, 2rem)",
        aw_title_dynamic: "clamp(1.4rem, 2.5vw, 2.3rem)",
      },
      spacing: {
        aw_content_mx: "clamp(0.2rem, 1vw, 3.5rem)",
      }
    },
  },
  plugins: [],
} satisfies Config;
