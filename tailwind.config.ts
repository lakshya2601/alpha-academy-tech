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
        serifRegular:["var(--font-serif)"],
        faustina:["var(--font-faustina)"]
      },
      backgroundImage: {
        'navbar-bg': 'linear-gradient(180deg, rgba(19,150,170,1) 0%, rgba(255,255,255,0) 100%)',
        "backdrop-blur": "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2650997899159666) 1%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
