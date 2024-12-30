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
        serifRegular:["var(--font-serif)"]
      },
      backgroundImage: {
        'navbar-bg': 'linear-gradient(180deg, rgba(19,150,170,1) 0%, rgba(255,255,255,1) 89%)',
        "backdrop-blur": "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2650997899159666) 1%)",
        "card-bg":"radial-gradient(ellipse at 50% 50%, rgba(239, 252, 253, 1) 48%, rgba(255, 255, 255, 1) 100%, rgba(251, 251, 251, 0.1) 100%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
