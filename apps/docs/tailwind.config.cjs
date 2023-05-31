// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './index.html',
//     'src/**/*.{js,ts,jsx,tsx}',
//     '../../packages/ui/**/*.{js,ts,jsx,tsx}',
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
// tailwind config is required for editor support
const sharedConfig = require("tailwind-config/tailwind.config.js");

module.exports = {
  presets: [sharedConfig],
};
