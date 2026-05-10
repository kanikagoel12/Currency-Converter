import { useEffect, useMemo, useState } from "react";

const API_BASE =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

export default function useConverter() {
  const [amount, setAmount] = useState("100");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [lastUpdated, setLastUpdated] = useState(null);

  const numericAmount = useMemo(() => {
    const parsed = parseFloat(amount);
    if (Number.isNaN(parsed) || parsed <= 0) return 1;
    return parsed;
  }, [amount]);

  const fetchRate = async () => {
    setLoading(true);
    setError("");
    try {
      const url = `${API_BASE}/${fromCurrency.toLowerCase()}.min.json`;
      const response = await fetch(url);
      if (!response.ok) {
        setError("Failed to fetch rates.");
        setResult(null);
        return { ok: false };
      }
      const data = await response.json();
      const rate = data?.[fromCurrency.toLowerCase()]?.[toCurrency.toLowerCase()];
      if (!rate) {
        setError("Rate not available for this pair.");
        setResult(null);
        return { ok: false };
      }

      const converted = numericAmount * rate;
      setResult({
        amount: numericAmount,
        fromCurrency,
        toCurrency,
        rate,
        converted,
      });
      setLastUpdated(new Date().toISOString());
      return { ok: true };
    } catch (err) {
      setError(err.message || "Something went wrong.");
      setResult(null);
      return { ok: false };
    } finally {
      setLoading(false);
    }
  };

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  useEffect(() => {
    fetchRate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
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
  };
}
