const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/popup/**/*.svelte"],
  theme: {
    extend: {
      // fontFamily: {
      // 	heading: ["Outfit", "sans-serif"],
      // },

      // Fix for a Tailwind 3 change (https://tailwindcss.com/docs/upgrade-guide#removed-color-aliases)
      colors: {
        green: colors.emerald,
        yellow: colors.amber,
        purple: colors.violet,
      },
    },
  },
  plugins: [],
};
