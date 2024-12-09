/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Include all relevant files
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))", // Add this line for border color
        input: "hsl(var(--input))", // Optional, for input color
        ring: "hsl(var(--ring))", // Optional, for focus ring
      },
    },
  },
  plugins: [],
};
