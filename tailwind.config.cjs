/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#742fed",

          "secondary": "#0c93c9",

          "accent": "#45cc84",

          "neutral": "#232F38",

          "base-100": "#F4F3F7",

          "info": "#96CFE3",

          "success": "#82E3D1",

          "warning": "#B96A04",

          "error": "#DA322F",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
