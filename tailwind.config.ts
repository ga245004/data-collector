export default {
    content: [
        "./src/**/*.{html,ts}"
    ],
    safelist: [
      { pattern: /bg-gradient-to-.*/ },
      {
        pattern: /(from|to)-.*/,
      },
    ],
    theme: {
        extend: {}
    },
    plugins: [],
}