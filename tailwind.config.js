/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        primary: "Hanken Grotesk",
      },
      colors: {
        "primary-light-red": "hsl(0, 100%, 67%)",
        "primary-orangey-yellow": "hsl(39, 100%, 56%)",
        "primary-green-teal": "hsl(166, 100%, 37%)",
        "primary-cobalt-blue": "hsl(234, 85%, 45%)",
        "gradients-background-light-slate-blue": "#7857ff",
        "gradients-background-light-royal-blue": "#2e2be9",
        "gradients-circle-violet-blue": "hsla(256, 72%, 46%, 1)",
        "gradients-circle-persian-blue": "hsla(241, 72%, 46%, 0)",
        "neutral-pale-blue": "hsl(221, 100%, 96%)",
        "neutral-light-lavender": "hsl(241, 100%, 89%)",
        "neutral-dark-gray-blue": "hsl(224, 30%, 27%)",
      },
      fontSize: {
        s: "1.125rem",
      },
    },
  },
  plugins: [],
};
