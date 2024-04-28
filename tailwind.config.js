/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#FF2E62",
          dark: "#D10034",
        },
        secondary: {
          light: "#242933",
          dark: "#CCD1DB",
        },
        accent: {
          light: "#08D9D5",
          dark: "#26F7F4",
        },
        background: {
          light: "#EBEBEB",
          dark: "#141414",
        },
        text: {
          light: "#040316",
          dark: "#EAE9FC",
        },
      },
      fontFamily: {
        display: ["Reem Kufi Fun", "sans-serif"],
        body: ["Reem Kufi Ink", "sans-serif"],
        quotes: ["Roboto", "sans-serif"],
      },
    },
    screens: {
      "xs": "475px",
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px",
    }
  },
  plugins: [],
}

