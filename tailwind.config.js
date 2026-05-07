/**
 * Tailwind CSS Configuration
 *
 * Customizations:
 * - Dark mode using class strategy
 * - Glassmorphism shadow effect
 * - Custom gradient background for app
 * - Responsive design ready
 *
 * @type {import('tailwindcss').Config}
 * @see https://tailwindcss.com/docs/configuration
 */

export default {
  // Enable dark mode with class strategy (toggles 'dark' class on documentElement)
  darkMode: "class",

  // Scan files for Tailwind class usage
  content: ["./index.html", "./src/**/*.{js,jsx}"],

  theme: {
    extend: {
      // Custom box shadows for glassmorphism effect
      boxShadow: {
        glass: "0 8px 32px rgba(15, 23, 42, 0.18)",
      },

      // Custom background gradients
      backgroundImage: {
        // Multi-layered radial gradient for app background
        "app-gradient":
          "radial-gradient(circle at 10% 20%, rgba(56, 189, 248, 0.35), transparent 35%), radial-gradient(circle at 90% 10%, rgba(168, 85, 247, 0.28), transparent 32%), radial-gradient(circle at 50% 100%, rgba(14, 165, 233, 0.28), transparent 38%)",
      },

      // Additional customizations can be added here
      // spacing, colors, typography, etc.
    },
  },

  plugins: [],
};
