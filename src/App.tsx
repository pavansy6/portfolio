import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import CustomCursor from './components/ui/CustomCursor';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import TerminalWidget from './components/TerminalWidget';

function App() {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen bg-[var(--color-bg-primary)] overflow-hidden font-body text-slate-200">
      <CustomCursor />
      
      {/* Background Film Grain */}
      <div className="film-grain" />
      <div className="scanline" />

      {/* Background Glows */}
      <div className="fixed top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-900/20 blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-fuchsia-900/10 blur-[150px] pointer-events-none" />

      {/* Simple Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-pink-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col items-center justify-center w-full">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      
      <TerminalWidget />
      
      <footer className="w-full py-8 text-center border-t border-purple-900/30 text-slate-500 font-mono text-sm relative z-10 bg-black/50 backdrop-blur-md">
        <p>Built with React + Vite + Framer Motion. System Online.</p>
        <p className="mt-2 opacity-50">© {new Date().getFullYear()} Pavan Yadav. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
