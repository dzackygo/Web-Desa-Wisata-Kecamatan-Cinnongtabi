/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      aspectRatio: {
        'w-16': 16,
        'h-9': 9,
      },
      backgroundImage: {
        'gradient-text': 'linear-gradient(to right, var(--tw-gradient-stops))',
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    function ({ addUtilities, theme }) {
      const newUtilities = {
        '.text-gradient': {
          backgroundImage: theme('backgroundImage.gradient-text'),
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          'color': 'transparent',
          'display': 'inline-block',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    },

  ],
}

