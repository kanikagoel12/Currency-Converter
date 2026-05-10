import { useState } from "react";
import { toast } from "sonner";
import useConverter from "../hooks/useConverter";
import CurrencyInput from "./CurrencyInput";
import SwapButton from "./SwapButton";
import ResultCard from "./ResultCard";
import Loader from "./Loader";

/**
 * ConverterCard Component
 * 
 * Main converter form component that orchestrates the currency conversion workflow.
 * 
 * Features:
 * - Amount input validation
 * - Currency pair selection
 * - Swap currencies functionality
 * - Real-time conversion results
 * - Error handling with user feedback
 * - Accessible form with proper labels
 * - Animated swap button
 * 
 * @component
 * @returns {React.ReactElement} Main conversion form container
 * 
 * @example
 * <ConverterCard />
 */
export default function ConverterCard() {
  const {
    amount,
    setAmount,
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    result,
    loading,
    error,
    lastUpdated,
    fetchRate,
    swapCurrencies,
  } = useConverter();

  const [rotating, setRotating] = useState(false);

  /**
   * Handles form submission for conversion
   * Shows toast notifications for success/error states
   */
  const onConvert = async (event) => {
    event.preventDefault();

    // Validate amount
    const numAmount = parseFloat(amount);
    if (isNaN(numAmount) || numAmount <= 0) {
      toast.error("Please enter a valid amount greater than 0");
      return;
    }

    const response = await fetchRate();
    if (response.ok) {
      toast.success("✓ Exchange rate updated", {
        description: `${fromCurrency} → ${toCurrency}`,
      });
    } else {
      toast.error("✗ Failed to fetch rate", {
        description: "Please check your connection and try again",
      });
    }
  };

  /**
   * Handles currency swap with animation
   */
  const onSwap = () => {
    setRotating(true);
    swapCurrencies();
    setTimeout(() => setRotating(false), 500);
  };

  return (
    <form
      onSubmit={onConvert}
      className="w-full rounded-2xl border border-white/40 bg-white/50 p-6 shadow-glass backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/50 sm:p-8"
      noValidate
      aria-label="Currency conversion form"
    >
      {/* From Currency Input */}
      <CurrencyInput
        label="From"
        amount={amount}
        onAmountChange={setAmount}
        currency={fromCurrency}
        onCurrencyChange={setFromCurrency}
        showAmount
      />

      {/* Swap Button */}
      <SwapButton onSwap={onSwap} rotating={rotating} />

      {/* To Currency Input */}
      <CurrencyInput
        label="To"
        currency={toCurrency}
        onCurrencyChange={setToCurrency}
      />

      {/* Convert Button */}
      <button
        type="submit"
        disabled={loading}
        className="mt-5 w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-500 px-4 py-3 font-semibold text-white transition hover:brightness-110 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400"
        aria-label="Convert currency"
      >
        {loading ? "Converting..." : "Convert Now"}
      </button>

      {/* Loading State */}
      {loading ? <Loader /> : null}

      {/* Result Card */}
      {!loading && result ? (
        <ResultCard result={result} lastUpdated={lastUpdated} />
      ) : null}

      {/* Error Message */}
      {!loading && error ? (
        <div 
          className="mt-4 rounded-2xl border border-rose-200 bg-rose-50 p-3 text-sm text-rose-700 dark:border-rose-900/40 dark:bg-rose-900/20 dark:text-rose-300"
          role="alert"
          aria-live="polite"
        >
          <p className="font-semibold">Error fetching rates</p>
          <p className="text-xs mt-1">{error}</p>
        </div>
      ) : null}
    </form>
  );
}
