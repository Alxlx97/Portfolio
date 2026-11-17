/** @type {import('tailwindcss').Config} */
const token = (name) => `rgb(var(--c-${name}) / <alpha-value>)`

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      // Theme-aware colors — values live in src/index.css (dark + light)
      colors: {
        canvas: token('canvas'),              // page background
        surface: token('surface'),          // alt section / card background
        'surface-2': token('surface-2'),    // thumbnail background
        'surface-hover': token('surface-hover'),
        line: token('line'),                // borders, dividers
        faint: token('faint'),              // very low-emphasis text
        icon: token('icon'),                // hamburger lines
        subtle: token('subtle'),            // accent italic text
        muted: token('muted'),              // body text
        ink: token('ink'),                  // primary text
      },
    },
  },
  plugins: [],
}
