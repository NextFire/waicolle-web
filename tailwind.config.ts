import type { Config } from "tailwindcss";

export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    darkTheme: "dracula",
  },
} satisfies Config;
