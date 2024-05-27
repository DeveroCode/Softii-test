/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue, js}",
  ],
  theme: {
    extend: {
      "colors": {
        "primary": "#fbdeda",
        "numbers": "#ed6a5a",
        "title": "#3d3d3d",
        "secondary": "#e6e6e6",
        "btn": "#c3c3c3"
      },
      "screens": {
        "md": "1600px",
        "xl": "1900px"
      }
    },
    plugins: [],
  }
}

