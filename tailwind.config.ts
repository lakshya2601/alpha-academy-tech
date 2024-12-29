import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily:{
        mona:["var(--font-mona)"],
      },
      backgroundImage: {
        'navbar-bg': 'linear-gradient(180deg, rgba(19,150,170,1) 0%, rgba(255,255,255,1) 89%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
