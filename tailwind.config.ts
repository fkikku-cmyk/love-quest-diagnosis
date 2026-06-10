import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "from-rose-500",
    "to-amber-400",
    "from-fuchsia-500",
    "to-indigo-500",
    "from-orange-500",
    "to-emerald-400",
    "from-red-500",
    "to-slate-500",
    "from-pink-500",
    "to-violet-400",
    "from-purple-500",
    "to-sky-400",
    "from-emerald-500",
    "to-lime-400",
    "from-teal-500",
    "to-green-700",
    "from-cyan-400",
    "to-blue-500",
    "from-indigo-500",
    "to-zinc-500",
    "from-yellow-500",
    "to-stone-500",
    "from-slate-500",
    "to-emerald-600",
    "from-pink-400",
    "to-cyan-400",
    "from-violet-400",
    "to-blue-400",
    "from-lime-400",
    "to-teal-500",
    "from-green-600",
  ],
  theme: {
    extend: {
      boxShadow: {
        pixel: "0 0 0 2px #2a1438, 0 0 0 5px #fff2c6, 0 8px 0 #2a1438",
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};

export default config;
