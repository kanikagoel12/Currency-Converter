/**
 * PostCSS Configuration
 *
 * Plugins:
 * - Tailwind CSS: Utility-first CSS framework
 * - Autoprefixer: Automatically adds vendor prefixes for cross-browser compatibility
 *
 * @see https://postcss.org/
 * @see https://github.com/postcss/autoprefixer
 * @see https://tailwindcss.com/
 */

export default {
  plugins: {
    // Tailwind CSS must be processed first
    tailwindcss: {},

    // Autoprefixer adds vendor-specific prefixes for older browsers
    // Automatically detects browser compatibility from browserslist
    autoprefixer: {},
  },
};
