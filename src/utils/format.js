/**
 * Formats a number according to locale standards
 *
 * @param {number} value - The number to format
 * @param {number} [max=4] - Maximum number of decimal places to display
 * @returns {string} Formatted number string with locale-specific separators
 *
 * @example
 * formatNumber(1234.567) // Returns "1,234.567" (depending on locale)
 * formatNumber(1234.567, 2) // Returns "1,234.57"
 */
export function formatNumber(value, max = 4) {
  return new Intl.NumberFormat(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: max,
  }).format(value);
}

/**
 * Formats an ISO timestamp to locale-specific date and time string
 *
 * @param {string|Date} date - ISO timestamp string or Date object
 * @returns {string} Formatted date and time (e.g., "May 4, 10:30:45")
 *
 * @example
 * formatTimestamp("2026-05-04T10:30:45Z") // Returns "May 4, 10:30:45"
 */
export function formatTimestamp(date) {
  return new Date(date).toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}
