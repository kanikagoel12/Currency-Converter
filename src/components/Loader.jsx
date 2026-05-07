/**
 * Loader Component
 *
 * Displays a loading skeleton with animated pulse effect.
 * Used to indicate that exchange rate data is being fetched.
 *
 * @component
 * @returns {React.ReactElement} Animated skeleton loader
 *
 * @example
 * {isLoading && <Loader />}
 */
export default function Loader() {
  return (
    <div className="mt-5 rounded-2xl border border-white/40 bg-white/60 p-4 shadow-glass backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/50" aria-live="polite" aria-label="Loading exchange rate">
      {/* Label skeleton */}
      <div className="h-4 w-24 animate-pulse rounded bg-slate-300/80 dark:bg-slate-700" />

      {/* Main number skeleton */}
      <div className="mt-3 h-8 w-2/3 animate-pulse rounded bg-slate-200/80 dark:bg-slate-800" />

      {/* Description skeleton */}
      <div className="mt-3 h-4 w-1/2 animate-pulse rounded bg-slate-200/80 dark:bg-slate-800" />
    </div>
  );
}
