import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

/**
 * Application Entry Point
 * 
 * Initializes React application with:
 * - React 19 (via .jsx file)
 * - StrictMode for development warnings/checks
 * - Root App component
 * - Global styles from index.css
 */

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
