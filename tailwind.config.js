/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.html"],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
      },
    },
    extend: {
      colors: {
        primary: "#7f8567",
        secondary: "#eff1e5",
        accent: "#393c2d",
        neutral: "#fff3",
        dark: "#343434",
        white: "#ffffff",
        light: "e0e0e0",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    prefix: "",
    log: false,
    themes: [
      {
        mytheme: {
          primary: "#7f8567",
          secondary: "#eff1e5",
          accent: "#393c2d",
          neutral: "#fff3",
          dark: "#343434",
          white: "#ffffff",
          light: "e0e0e0",
        },
      },
    ],
  },
};
