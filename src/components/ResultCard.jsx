import { Clock } from "lucide-react";
import { formatNumber, formatTimestamp } from "../utils/format";

/**
 * ResultCard Component
 *
 * Displays the conversion result, exchange rate, and timestamp.
 *
 * Features:
 * - Shows converted amount and exchange rate
 * - Last update timestamp
 * - Responsive glass-morphism design
 * - Accessible markup with semantic HTML
 *
 * @component
 * @param {Object} props - Component props
 * @returns {React.ReactElement} Result card with conversion details
 *
 * @example
 * <ResultCard
 *   result={{ fromCurrency: "USD", toCurrency: "INR", rate: 83.12, converted: 8312 }}
 *   lastUpdated={new Date().toISOString()}
 * />
 */
export default function ResultCard({ result, lastUpdated }) {
  return (
    <div className="mt-5 rounded-[28px] border border-white/20 bg-gradient-to-br from-white/6 to-white/3 p-4 shadow-2xl backdrop-blur-xl dark:border-white/6 dark:bg-slate-900/40">
      <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
        Conversion Result
      </p>

      <div className="mt-2 flex items-start justify-between gap-4">
        <div>
          <p className="text-3xl font-bold tracking-tight leading-none">
            {formatNumber(result.converted)} <span className="text-lg">{result.toCurrency}</span>
          </p>
          {/*<p className="mt-1 text-sm text-slate-600 dark:text-slate-300">*/}
          {/*  {formatNumber(result.amount, 2)} {result.fromCurrency} = {formatNumber(result.converted)} {result.toCurrency}*/}
          {/*</p>*/}
        </div>

      </div>

      {/*<p className="mt-1 text-sm text-slate-600 dark:text-slate-300">*/}
      {/*  {formatNumber(result.amount, 2)} {result.fromCurrency} ={" "}*/}
      {/*  {formatNumber(result.converted)} {result.toCurrency}*/}
      {/*</p>*/}

      <p className="mt-3 text-xs text-slate-600 dark:text-slate-300">
        Exchange rate: 1 {result.fromCurrency} = {formatNumber(result.rate, 6)} {result.toCurrency}
      </p>

      <div className="mt-3 flex items-center justify-end gap-2 text-xs text-slate-400">
        <Clock size={12} aria-hidden="true" />
        <time dateTime={lastUpdated}>{formatTimestamp(lastUpdated)}</time>
      </div>
    </div>
  );
}
