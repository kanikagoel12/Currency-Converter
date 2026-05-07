import { useMemo, useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { currencies, getFlag } from "../data/currencies";

/**
 * CurrencyInput Component
 *
 * Displays a searchable dropdown for selecting currencies with flag icons.
 * Supports both amount input and currency selection.
 *
 * Features:
 * - Searchable currency list with real-time filtering
 * - Country flag icons for visual identification
 * - Optional amount input field
 * - Keyboard accessible dropdown
 * - Responsive design with glass-morphism styling
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.label - Label text (e.g., "From" or "To")
 * @param {string} [props.amount] - Current amount value (if showAmount is true)
 * @param {Function} [props.onAmountChange] - Callback when amount changes
 * @param {string} props.currency - Currently selected currency code (e.g., "USD")
 * @param {Function} props.onCurrencyChange - Callback when currency is selected
 * @param {boolean} [props.showAmount=false] - Whether to show amount input field
 * @returns {React.ReactElement} Currency input with dropdown selector
 *
 * @example
 * <CurrencyInput
 *   label="From"
 *   amount="100"
 *   onAmountChange={setAmount}
 *   currency="USD"
 *   onCurrencyChange={setCurrency}
 *   showAmount={true}
 * />
 */
export default function CurrencyInput({
  label,
  amount,
  onAmountChange,
  currency,
  onCurrencyChange,
  showAmount = false,
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  // Filter currencies based on search query
  const filtered = useMemo(() => {
    return currencies.filter((code) =>
      code.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <div className="w-full">
      <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
        {label}
      </label>

      {/* Amount Input Field */}
      {showAmount ? (
        <input
          value={amount}
          onChange={(e) => onAmountChange(e.target.value)}
          type="number"
          inputMode="decimal"
          className="mb-3 w-full rounded-2xl border border-white/40 bg-white/60 px-4 py-3 text-lg font-semibold shadow-glass backdrop-blur-xl outline-none transition focus:border-cyan-400 dark:border-white/10 dark:bg-slate-900/60"
          placeholder="Enter amount"
          aria-label="Amount to convert"
          min="0"
        />
      ) : null}

      {/* Currency Dropdown */}
      <div className="relative">
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="flex w-full items-center gap-3 rounded-2xl border border-white/40 bg-white/60 px-3 py-2.5 shadow-glass backdrop-blur-xl transition hover:border-cyan-400 dark:border-white/10 dark:bg-slate-900/60"
          aria-label={`Select currency, currently ${currency}`}
          aria-expanded={open}
          aria-haspopup="listbox"
        >
          <img
            src={getFlag(currency)}
            alt={`${currency} flag`}
            className="h-6 w-8 rounded object-cover"
            loading="lazy"
          />
          <span className="font-semibold">{currency}</span>
          <ChevronDown
            className={`ml-auto transition-transform ${open ? "rotate-180" : ""}`}
            size={16}
            aria-hidden="true"
          />
        </button>

        {/* Dropdown Menu */}
        {open ? (
          <div
            className="absolute z-30 mt-2 w-full rounded-2xl border border-white/50 bg-white/95 p-2 shadow-glass backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/95"
            role="listbox"
          >
            {/* Search Input */}
            <div className="mb-2 flex items-center gap-2 rounded-xl bg-slate-100 px-2 py-1.5 dark:bg-slate-800">
              <Search size={14} className="text-slate-500" aria-hidden="true" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search currency"
                className="w-full bg-transparent text-sm outline-none"
                aria-label="Search currencies"
              />
            </div>

            {/* Currency List */}
            <div className="max-h-44 space-y-1 overflow-auto">
              {filtered.length > 0 ? (
                filtered.map((code) => (
                  <button
                    key={code}
                    type="button"
                    onClick={() => {
                      onCurrencyChange(code);
                      setOpen(false);
                      setQuery("");
                    }}
                    className="flex w-full items-center gap-2 rounded-xl px-2 py-1.5 text-left text-sm transition hover:bg-cyan-100 dark:hover:bg-cyan-950/40 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    role="option"
                    aria-selected={currency === code}
                  >
                    <img
                      src={getFlag(code)}
                      alt={`${code} flag`}
                      className="h-4 w-6 rounded object-cover"
                      loading="lazy"
                    />
                    <span>{code}</span>
                  </button>
                ))
              ) : (
                <p className="px-2 py-1.5 text-sm text-slate-500">No currencies found</p>
              )}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
