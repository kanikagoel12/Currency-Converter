import { Moon, Sun } from "lucide-react";

/**
 * Navbar Component
 *
 * Header component displaying app title and theme toggle button.
 *
 * Features:
 * - App branding and title
 * - Light/dark mode toggle
 * - Responsive Design
 * - Accessible theme switch button
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.theme - Current theme ("light" or "dark")
 * @param {Function} props.onToggleTheme - Callback function when theme is toggled
 * @returns {React.ReactElement} Header navigation component
 *
 * @example
 * <Navbar theme="dark" onToggleTheme={() => toggleTheme()} />
 */
export default function Navbar({ theme, onToggleTheme }) {
  return (
    <header className="mx-auto flex w-full max-w-2xl items-center justify-between px-4 pb-5 pt-6">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
          Premium Fintech
        </p>
        <h1 className="text-2xl font-bold tracking-tight">Currency Converter</h1>
      </div>

      {/* Theme Toggle Button */}
      <button
        type="button"
        onClick={onToggleTheme}
        className="rounded-2xl border border-white/40 bg-white/60 p-2.5 shadow-glass backdrop-blur-xl transition hover:scale-105 dark:border-white/10 dark:bg-slate-900/60 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        aria-pressed={theme === "dark"}
      >
        {theme === "dark" ? (
          <Sun size={18} aria-hidden="true" />
        ) : (
          <Moon size={18} aria-hidden="true" />
        )}
      </button>
    </header>
  );
}
