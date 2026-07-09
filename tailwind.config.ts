import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFF3E6",
        sand: "#FCE7D2",
        ink: "#3A1420",
        coral: "#FF6F5E",
        magenta: "#E63A73",
        mango: "#F5A524",
        palm: "#155843",
        palmDeep: "#0E3E30",
        shell: "#FFD9C7",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        script: ["var(--font-script)", "cursive"],
        body: ["var(--font-figtree)", "sans-serif"],
      },
      backgroundImage: {
        sunset:
          "linear-gradient(180deg, #FFB199 0%, #FF8A73 28%, #F5A524 58%, #FCE7D2 100%)",
        dusk: "radial-gradient(120% 90% at 50% -10%, #FFD9C7 0%, #FF8A73 45%, #E63A73 100%)",
      },
      boxShadow: {
        card: "0 30px 60px -20px rgba(58, 20, 32, 0.45)",
      },
      keyframes: {
        bloom: {
          "0%": { transform: "scale(0.4) rotate(-8deg)", opacity: "0" },
          "60%": { transform: "scale(1.05) rotate(2deg)", opacity: "1" },
          "100%": { transform: "scale(1) rotate(0deg)", opacity: "1" },
        },
        drift: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        petalFall: {
          "0%": { transform: "translateY(-10vh) rotate(0deg)", opacity: "0" },
          "10%": { opacity: "1" },
          "100%": { transform: "translateY(110vh) rotate(360deg)", opacity: "0.9" },
        },
        riseIn: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        bloom: "bloom 1.1s cubic-bezier(0.22, 1, 0.36, 1) both",
        drift: "drift 6s ease-in-out infinite",
        petalFall: "petalFall linear forwards",
        riseIn: "riseIn 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};
export default config;
