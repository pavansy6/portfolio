import { useEffect, useState } from "react";
import { profile } from "../data";

const links = [
  { id: "work", label: "Work" },
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
          ? "bg-[#0a0a0b]/85 backdrop-blur-xl border-b border-white/[0.07]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2 group">
          <span className="font-display italic text-lg text-[#ece9e2]">Pavan Yadav</span>
          <span className="label text-zinc-500 hidden sm:inline">/ AI Engineer</span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`text-[13px] font-medium tracking-wide transition-colors ${
                active === l.id ? "text-[#ece9e2]" : "text-zinc-500 hover:text-zinc-200"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden sm:flex items-center gap-2 text-[12px] text-zinc-400 border border-white/10 rounded-full px-3 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            Open to work
          </span>
          <a
            href={`mailto:${profile.email}`}
            className="text-[13px] font-semibold bg-[#ece9e2] text-[#0a0a0b] rounded-full px-4 py-2 hover:bg-white transition-colors"
          >
            Email me
          </a>
        </div>
      </div>

      {/* mobile quick links */}
      <nav className="md:hidden flex items-center gap-5 overflow-x-auto px-6 pb-3 text-[13px] text-zinc-400">
        {links.map((l) => (
          <a key={l.id} href={`#${l.id}`} className="shrink-0 hover:text-zinc-100">
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Navigation;
