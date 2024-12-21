import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app.vue',
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Cabin', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        fontcolor: 'rgb(33 33 33 / <alpha-value>)',
        lightgray: 'rgb(249 249 249 / <alpha-value>)',
        darkgray: 'rgb(176 176 176 / <alpha-value>)',
        product: {
          blue: 'rgb(46 58 140 / <alpha-value>)',
          green: 'rgb(59 117 95 / <alpha-value>)',
          beige: 'rgb(242 235 219 / <alpha-value>)',
          black: 'rgb(33 33 33 / <alpha-value>)',
          white: 'rgb(255 255 255 / <alpha-value>)',
        },
      }
    },
  },
  safelist: [
    {
      pattern: /(^bg-product-)/,
    },
    {
      pattern: /(^text-product-)/,
    }
  ],
  plugins: [],
}

