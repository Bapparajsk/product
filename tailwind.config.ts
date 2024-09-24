import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";
import svgToDataUri from "mini-svg-data-uri";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
        fontFamily: {
            robo: ["Roboto Mono", "monospace"],
        },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
        animation: {
            "meteor-effect": "meteor 5s linear infinite",
            scroll:
                "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
            "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
            slide: "slide var(--speed) ease-in-out infinite alternate",
            ripple: "ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite",
        },
        keyframes: {
          meteor: {
              "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
              "70%": { opacity: "1" },
              "100%": {
                  transform: "rotate(215deg) translateX(-500px)",
                  opacity: "0",
              },
          },
            scroll: {
                to: {
                    transform: "translate(calc(-50% - 0.5rem))",
                },
            },
            "spin-around": {
                "0%": {
                    transform: "translateZ(0) rotate(0)",
                },
                "15%, 35%": {
                    transform: "translateZ(0) rotate(90deg)",
                },
                "65%, 85%": {
                    transform: "translateZ(0) rotate(270deg)",
                },
                "100%": {
                    transform: "translateZ(0) rotate(360deg)",
                },
            },
            slide: {
                to: {
                    transform: "translate(calc(100cqw - 100%), 0)",
                },
            },
            ripple: {
                "0%, 100%": {
                    transform: "translate(-50%, -50%) scale(1)",
                },
                "50%": {
                    transform: "translate(-50%, -50%) scale(0.9)",
                },
            },
        }
    },
  },
  plugins: [
      nextui(),
      addVariablesForColors,
    function ({ matchUtilities, theme }: PluginAPI) {
      matchUtilities(
          {
            "bg-grid": (value: string) => ({
              backgroundImage: `url("${svgToDataUri(
                  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
              )}")`,
            }),
            "bg-grid-small": (value: string) => ({
              backgroundImage: `url("${svgToDataUri(
                  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
              )}")`,
            }),
            "bg-dot": (value: string) => ({
              backgroundImage: `url("${svgToDataUri(
                  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
              )}")`,
            }),
          },
          { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
    const allColors = flattenColorPalette(theme("colors"));
    const newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );

    addBase({
        ":root": newVars,
    });
}

export default config;
