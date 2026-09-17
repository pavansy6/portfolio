import { useEffect, useState } from "react";
import { profile } from "../data";
import ThemeToggle from "./ThemeToggle";
import OrbitMark from "./OrbitMark";

const links = [
  { id: "work", label: "Work" },
  { id: "finance", label: "Finance" },
  { id: "experience", label: "Experience" },
  { id: "stack", label: "Stack" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#f5f3ec]/85 dark:bg-[#141210]/85 backdrop-blur-xl border-b border-stone-900/[0.08] dark:border-stone-100/[0.08]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group text-[#1c1917] dark:text-[#ede9e3]">
          <OrbitMark className="h-7 w-7" />
          <span className="font-display italic text-lg">Pavan Yadav</span>
          <span className="label text-stone-500 hidden sm:inline">/ AI Engineer</span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`text-[13px] font-medium tracking-wide transition-colors ${
                active === l.id ? "text-[#1c1917] dark:text-[#ede9e3]" : "text-stone-500 hover:text-stone-900 dark:hover:text-stone-100"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <span className="hidden sm:flex items-center gap-2 text-[12px] text-stone-600 dark:text-stone-400 border border-stone-900/10 dark:border-stone-100/10 bg-white/70 dark:bg-stone-800/70 rounded-full px-3 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c9a96a] opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c9a96a]" />
            </span>
            Data Scientist
          </span>
          <a
            href={`mailto:${profile.email}`}
            className="text-[13px] font-semibold bg-[#1c1917] dark:bg-[#ede9e3] text-[#f7f5f0] dark:text-[#141210] rounded-full px-4 py-2 hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors"
          >
            Email me
          </a>
        </div>
      </div>

      {/* mobile quick links */}
      <nav className="md:hidden flex items-center gap-5 overflow-x-auto px-6 pb-3 text-[13px] text-stone-500">
        {links.map((l) => (
          <a key={l.id} href={`#${l.id}`} className="shrink-0 hover:text-stone-900 dark:hover:text-stone-100">
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Navigation;
