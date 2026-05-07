import { Toaster } from "sonner";

/**
 * Toast Notification Manager Component
 *
 * Wrapper component for the Sonner toast notification system.
 * Handles all toast notifications throughout the application.
 *
 * Features:
 * - Displays at the top-right of the screen
 * - Rich color support (success=green, error=red, etc.)
 * - Close button on each toast
 * - Glass-morphism design matching app theme
 *
 * @component
 * @returns {React.ReactElement} Toaster container for notifications
 *
 * @example
 * In your component:
 * import { toast } from "sonner";
 *
 * function MyComponent() {
 *   const handleClick = () => {
 *     toast.success("Exchange rate updated!");
 *     toast.error("Failed to fetch rates");
 *   };
 * }
 */
export default function Toast() {
  return (
    <Toaster
      position="top-right"
      richColors
      closeButton
      toastOptions={{
        classNames: {
          toast:
            "rounded-2xl border border-white/40 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/80",
        },
      }}
    />
  );
}
