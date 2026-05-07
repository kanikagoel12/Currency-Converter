import { ArrowDownUp } from "lucide-react";

/**
 * SwapButton Component
 *
 * Displays an animated button to swap the "from" and "to" currencies.
 * The icon rotates when the swap action is triggered.
 *
 * @component
 * @param {Object} props - Component props
 * @param {Function} props.onSwap - Callback function when swap button is clicked
 * @param {boolean} props.rotating - Whether the icon should be in rotating state (displays 180° rotation)
 * @returns {React.ReactElement} Swap button with animated icon
 *
 * @example
 * <SwapButton onSwap={() => handleSwap()} rotating={isRotating} />
 */
export default function SwapButton({ onSwap, rotating }) {
  return (
    <button
      type="button"
      onClick={onSwap}
      className="mx-auto my-2 flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/70 shadow-glass backdrop-blur-xl transition hover:scale-105 dark:border-white/10 dark:bg-slate-900/60"
      aria-label="Swap currencies"
      title="Swap from and to currencies"
    >
      <ArrowDownUp
        size={18}
        className={`transition-transform duration-500 ${rotating ? "rotate-180" : ""}`}
        aria-hidden="true"
      />
    </button>
  );
}
