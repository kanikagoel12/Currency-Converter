import React from "react";

/**
 * Simple SVG sparkline component.
 * data: array of numbers
 */
export default function Sparkline({ data = [], width = 120, height = 32, stroke = "#7dd3fc" }) {
  if (!data || data.length === 0) {
    return <svg width={width} height={height} aria-hidden="true" />;
  }

  const max = Math.max(...data);
  const min = Math.min(...data);
  const len = data.length;
  const stepX = width / Math.max(1, len - 1);

  const points = data
    .map((d, i) => {
      const x = i * stepX;
      const t = max === min ? 0.5 : (d - min) / (max - min);
      const y = height - t * height;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none" role="img" aria-label="trend sparkline">
      <polyline
        fill="none"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        points={points}
        style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.25))" }}
      />
    </svg>
  );
}

