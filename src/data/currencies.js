/**
 * Currency to Country Code Mapping
 *
 * Maps ISO 4217 currency codes to ISO 3166-1 alpha-2 country codes
 * for flag image retrieval from flagsapi.com
 *
 * @type {Object.<string, string>}
 */
export const currencyMap = {
  AED: "AE", // United Arab Emirates Dirham
  AUD: "AU", // Australian Dollar
  BDT: "BD", // Bangladeshi Taka
  BRL: "BR", // Brazilian Real
  CAD: "CA", // Canadian Dollar
  CHF: "CH", // Swiss Franc
  CNY: "CN", // Chinese Yuan
  DKK: "DK", // Danish Krone
  EUR: "FR", // Euro (using France flag)
  GBP: "GB", // British Pound
  HKD: "HK", // Hong Kong Dollar
  INR: "IN", // Indian Rupee
  JPY: "JP", // Japanese Yen
  KRW: "KR", // South Korean Won
  MXN: "MX", // Mexican Peso
  MYR: "MY", // Malaysian Ringgit
  NOK: "NO", // Norwegian Krone
  NZD: "NZ", // New Zealand Dollar
  PHP: "PH", // Philippine Peso
  PKR: "PK", // Pakistani Rupee
  RUB: "RU", // Russian Ruble
  SAR: "SA", // Saudi Arabian Riyal
  SEK: "SE", // Swedish Krona
  SGD: "SG", // Singapore Dollar
  THB: "TH", // Thai Baht
  TRY: "TR", // Turkish Lira
  USD: "US", // US Dollar
  VND: "VN", // Vietnamese Dong
  ZAR: "ZA", // South African Rand
};

/**
 * Sorted array of all supported currency codes
 * @type {string[]}
 */
export const currencies = Object.keys(currencyMap).sort();

/**
 * Retrieves the flag image URL for a given currency
 *
 * @param {string} code - ISO 4217 currency code (e.g., "USD", "EUR")
 * @returns {string} Flag image URL from flagsapi.com or empty string if currency not found
 *
 * @example
 * getFlag("USD") // Returns "https://flagsapi.com/US/flat/64.png"
 * getFlag("INR") // Returns "https://flagsapi.com/IN/flat/64.png"
 * getFlag("XXX") // Returns ""
 */
export function getFlag(code) {
  const country = currencyMap[code];
  return country ? `https://flagsapi.com/${country}/flat/64.png` : "";
}
