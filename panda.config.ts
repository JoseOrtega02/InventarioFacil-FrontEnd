import { defineConfig } from "@pandacss/dev";

export default defineConfig({
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
          body: { value: 'system-ui, sans-serif' }
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
