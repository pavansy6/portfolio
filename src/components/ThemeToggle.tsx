import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <button
      onClick={() => setDark((d) => !d)}
      className="flex items-center justify-center w-9 h-9 rounded-full border border-stone-900/10 dark:border-stone-100/15 bg-white/70 dark:bg-stone-800/70 hover:border-stone-900/25 dark:hover:border-stone-100/30 transition-colors"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {dark ? (
        <Sun size={15} className="text-stone-300" />
      ) : (
        <Moon size={15} className="text-stone-500" />
      )}
    </button>
  );
};

export default ThemeToggle;
