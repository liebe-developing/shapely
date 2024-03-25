/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        parallax1: "url(assets/parallax1.jpg)",
        parallax2: "url(assets/parallax2.jpg)",
        testimonials: "url(assets/testimonials.jpg)",
      },
    },
  },
  plugins: [],
};
