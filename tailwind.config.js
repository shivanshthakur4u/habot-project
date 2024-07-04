/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        arial: ["Arial", "sans-serif"],
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to bottom, #072F57 0%, #072F57 45%, #072F57 75%)",
      },
      opacity: {
        75: "0.75",
      },
    },
  },
  plugins: [],
};
