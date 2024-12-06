import { defineConfig } from "@pandacss/dev";
export default defineConfig({
  globalFontface: {
    title: {
      src: 'url(https://fonts.googleapis.com/css2?family=Krona+One&display=swap)',
      fontWeight: 400,
      fontStyle: 'normal',
    }
  },
  globalVars: {
    '--font-krona-one': 'Krona One, sans-serif'
  },
  theme: {
    extend: {
      tokens: {
        colors: {
          color1: { value: '#F6F1EE' },
          color2: { value: '#4F4A45' },
          color3: { value: '#6C5F5B' },
          color4: { value: '#ED7D31' }
        },
        fonts: {
          title: { value: ['Krona One', "sans-serif"] },
        }
      },
      keyframes:{
        rotation:{
          "0%":{transform: "rotate(0deg)"},
          "100%":{transform: "rotate(360deg)"}
        }
      }
    }
  },



  // Whether to use css reset
  preflight: true,
  syntax: 'template-literal', // required
  jsxFramework: 'react', // optional
  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],


  // The output directory for your css system
  outdir: "styled-system",
});
