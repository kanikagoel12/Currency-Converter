import { useEffect, useState } from "react";

const THEME_KEY = "currency-theme";

/**
 * Custom hook for theme management (light/dark mode)
 *
 * Features:
 * - Persists theme preference to localStorage
 * - Respects system dark mode preference on first load
 * - Updates DOM classes for TailwindCSS dark mode
 * - Provides theme toggle functionality
 *
 * @returns {Object} Theme state and toggle function
 * @returns {string} theme - Current theme ("light" or "dark")
 * @returns {Function} toggleTheme - Toggle between light and dark themes
 */
export default function useTheme() {
  // Initialize theme from localStorage or system preference
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem(THEME_KEY);
    // Use stored preference if valid
    if (stored === "light" || stored === "dark") return stored;
    // Fall back to system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  // Update DOM and persist theme when it changes
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  /**
   * Toggles between light and dark themes
   */
  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return { theme, toggleTheme };
}
