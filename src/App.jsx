import Navbar from "./components/Navbar";
import ConverterCard from "./components/ConverterCard";
import Toast from "./components/Toast";
import useTheme from "./hooks/useTheme";

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const signatureClassName =
    theme === "dark"
      ? "pointer-events-none fixed bottom-4 right-4 z-20 select-none rounded-full border border-white/10 bg-slate-950/20 px-3 py-1 text-xs italic text-white/75 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-md sm:bottom-6 sm:right-6 sm:text-sm"
      : "pointer-events-none fixed bottom-4 right-4 z-20 select-none px-3 py-1 text-xs italic text-slate-900 bg-transparent border-transparent sm:bottom-6 sm:right-6 sm:text-sm";

  return (
    <div className="relative isolate flex min-h-screen flex-col overflow-hidden bg-app-gradient px-4">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 background-scene"
      >
        <div className="scene-light" />
        <div className="ambient-grid" />

        <div className="sphere-parallax sphere-parallax-near">
          <div className="floating-sphere sphere-one" />
        </div>
        <div className="sphere-parallax sphere-parallax-mid">
          <div className="floating-sphere sphere-two" />
        </div>
        <div className="sphere-parallax sphere-parallax-mid">
          <div className="floating-sphere sphere-four" />
        </div>
      </div>

      <div className="relative z-10 flex flex-1 flex-col">
        <Navbar theme={theme} onToggleTheme={toggleTheme} />
        <main className="mx-auto flex w-full max-w-2xl flex-1 items-center justify-center py-6 sm:py-8">
          <ConverterCard />
        </main>
        <Toast />
      </div>

      <p
        aria-hidden="true"
        className={signatureClassName}
        style={{ fontFamily: '"Brush Script MT", "Segoe Script", cursive' }}
      >
        made with love by Kanika ✨
      </p>
    </div>
  );
}
