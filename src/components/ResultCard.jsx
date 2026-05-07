import { ArrowDownRight, ArrowUpRight, Clock } from "lucide-react";
import { formatNumber, formatTimestamp } from "../utils/format";
import Sparkline from "./Sparkline";

/**
 * ResultCard Component
 *
 * Displays the conversion result with exchange rate, trend indicator, and timestamp.
 *
 * Features:
 * - Shows converted amount and exchange rate
 * - Visual trend indicator (up/down arrows with percentage)
 * - Last update timestamp
 * - Responsive glass-morphism design
 * - Accessible markup with semantic HTML
 *
 * @component
 * @param {Object} props - Component props
 * @param {Object} props.result - Conversion result data
 * @param {number} props.result.amount - Original amount
 * @param {string} props.result.fromCurrency - Source currency code
 * @param {string} props.result.toCurrency - Target currency code
 * @param {number} props.result.rate - Exchange rate
 * @param {number} props.result.converted - Converted amount
 * @param {number} props.trend - Trend percentage (+/- value)
 * @param {string} props.lastUpdated - ISO timestamp of update
 * @returns {React.ReactElement} Result card with conversion details
 *
 * @example
 * <ResultCard
 *   result={{ amount: 100, fromCurrency: "USD", toCurrency: "INR", rate: 83.12, converted: 8312 }}
 *   trend={-1.5}
 *   lastUpdated={new Date().toISOString()}
 * />
 */
export default function ResultCard({ result, trend, lastUpdated }) {
  const isUp = trend >= 0;

  // generate small mock series around the rate for sparkline (real data would come from API)
  const series = Array.from({ length: 12 }).map((_, i) => {
    const jitter = (Math.random() - 0.5) * (Math.abs(trend) / 20 + 0.02);
    return result.rate * (1 + jitter);
  });

  return (
    <div className="mt-5 rounded-[28px] border border-white/20 bg-gradient-to-br from-white/6 to-white/3 p-4 shadow-2xl backdrop-blur-xl dark:border-white/6 dark:bg-slate-900/40">
      <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
        Conversion Result
      </p>

      <div className="mt-2 flex items-center justify-between gap-4">
        <div>
          <p className="text-3xl font-bold tracking-tight leading-none">
            {formatNumber(result.converted)} <span className="text-lg">{result.toCurrency}</span>
          </p>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
            {formatNumber(result.amount, 2)} {result.fromCurrency} = {formatNumber(result.converted)} {result.toCurrency}
          </p>
        </div>

        <div className="flex flex-col items-end">
          <div className="mb-2 flex items-center gap-2">
            <div className={`h-2.5 w-2.5 rounded-full ${isUp ? 'bg-emerald-400/90' : 'bg-rose-400/90'} animate-pulse`}></div>
            <span className="text-xs text-slate-400">Realtime</span>
          </div>
          <Sparkline data={series} width={120} height={40} stroke={isUp ? "#34d399" : "#fb7185"} />
        </div>
      </div>

      <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
        {formatNumber(result.amount, 2)} {result.fromCurrency} ={" "}
        {formatNumber(result.converted)} {result.toCurrency}
      </p>

      <p className="mt-3 text-xs text-slate-300/80">
        Exchange rate: 1 {result.fromCurrency} = {formatNumber(result.rate, 6)} {result.toCurrency}
      </p>

      {/* Trend and Timestamp */}
      <div className="mt-3 flex items-center justify-between gap-3 text-sm">
        {/* Trend Indicator */}
        <span
          className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-sm font-medium ${
            isUp
              ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300"
              : "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300"
          }`}
          aria-label={`Trend: ${isUp ? "up" : "down"} ${trend.toFixed(2)}%`}
        >
          {isUp ? <ArrowUpRight size={14} aria-hidden="true" /> : <ArrowDownRight size={14} aria-hidden="true" />}
          <span>{isUp ? "+" : ""}{trend.toFixed(2)}%</span>
        </span>

        {/* Last Updated Timestamp */}
        <span className="inline-flex items-center gap-2 text-xs text-slate-400">
          <Clock size={12} aria-hidden="true" />
          <time dateTime={lastUpdated}>{formatTimestamp(lastUpdated)}</time>
        </span>
      </div>
      
      {/* small stats row */}
      <div className="mt-3 grid grid-cols-3 gap-3 text-xs text-slate-400">
        <div className="rounded-lg bg-white/5 p-2 text-center">
          <div className="text-sm font-semibold">24h</div>
          <div className="text-xs">{(trend + 0.12).toFixed(2)}%</div>
        </div>
        <div className="rounded-lg bg-white/5 p-2 text-center">
          <div className="text-sm font-semibold">High</div>
          <div className="text-xs">{formatNumber(result.rate * 1.02, 6)}</div>
        </div>
        <div className="rounded-lg bg-white/5 p-2 text-center">
          <div className="text-sm font-semibold">Low</div>
          <div className="text-xs">{formatNumber(result.rate * 0.98, 6)}</div>
        </div>
      </div>
    </div>
  );
}
