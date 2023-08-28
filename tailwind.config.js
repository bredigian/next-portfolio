/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "355px",
        sm: "768px",
        md: "1024px",
        lg: "1280px",
        xl: "1440px",
        "2xl": "1600px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        gray: {
          100: "#ffffff30",
          200: "#ffffff50",
          300: "#ffffff70",
        },
        yellow: {
          primary: "#fed766",
        },
      },
    },
  },
  plugins: [],
}
