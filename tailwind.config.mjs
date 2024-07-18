/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#FAD984",
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(circle farthest-side at 50% 0,hsla(0,0%,100%,.12),hsla(0,0%,100%,0));",
        "figma-radial": "linear-gradient(135deg,#1e1e1f,#1e1e20);",
        "text-gradient": "linear-gradient(to right bottom,#fff 10%, #FAD984);",
      },
      screens: {
        xxs: { raw: "(max-width: 399px)" },
        xs: { raw: "(max-width: 550px)" },
        ls: { raw: "(max-width: 680px)" },
        sm: { raw: "(max-width: 750px)" },
        ms: { raw: "(max-width: 817px)" },
        md: { raw: "(max-width: 930px)" },
        lg: { raw: "(max-width: 1050px)" },
        xl: { raw: "(max-width: 1200px)" },
        xxl: { raw: "(max-width: 1473px)" },
      },
      keyframes: {
        "fade-in-y": {
          "0%": {
            opacity: "0",
            transform: "translateY(-40px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        shine: {
          "0%": {
            boxShadow: "0 0 0px #fff",
          },
          "50%": {
            boxShadow: "0 0 5px #fff",
          },
          "100%": {
            boxShadow: "0 0 0px #fff",
          },
        },

        shine2: {
          "0%": {
            filter: "drop-shadow(0 4px 0px #FAD984);",
          },
          "50%": {
            filter: "drop-shadow(0 4px 5px #FAD984);",
          },
          "100%": {
            filter: "drop-shadow(0 0px 0px #FAD984);",
          },
        },

        "fade-in-x": {
          "0%": {
            opacity: "0",
            transform: "translateX(-40px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },

        "fade-in-x-2": {
          "0%": {
            opacity: "0",
            transform: "translateX(40px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        "fade-in-x": "fade-in-x 0.7s ease-in-out",
        "fade-in-y": "fade-in-y 0.7s ease-in-out",
        "fade-in-x-2": "fade-in-x-2 0.7s ease-in-out",
        shine: "shine 2s infinite",
      },
    },
  },
  plugins: [],
}
