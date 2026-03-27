import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import CustomCursor from './components/ui/CustomCursor';
import Navigation, { type ViewType } from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import TerminalWidget from './components/TerminalWidget';

function App() {
  const [mounted, setMounted] = useState(false);
  const [activeView, setActiveView] = useState<ViewType>('home');

  useEffect(() => {
    setMounted(true);
    
    // Optional: Keyboard navigation (Up/Down arrows to shift active view)
    const handleKeyDown = (e: KeyboardEvent) => {
      const views: ViewType[] = ['home', 'projects', 'skills', 'experience', 'contact'];
      const currentIndex = views.indexOf(activeView);
      if (e.key === 'ArrowDown') {
        setActiveView(views[(currentIndex + 1) % views.length]);
      } else if (e.key === 'ArrowUp') {
        setActiveView(views[(currentIndex - 1 + views.length) % views.length]);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeView]);

  if (!mounted) return null;

  const renderView = () => {
    switch (activeView) {
      case 'home': return <Hero setActiveView={setActiveView} />;
      case 'projects': return <Projects />;
      case 'skills': return <Skills />;
      case 'experience': return <Experience />;
      case 'contact': return <Contact />;
      default: return <Hero setActiveView={setActiveView} />;
    }
  };

  return (
    <div className="flex h-screen w-screen bg-black overflow-hidden font-body text-slate-200 selection:bg-yellow-500/30">
      <CustomCursor />
      
      {/* Background Film Grain */}
      <div className="film-grain" />
      <div className="scanline" />

      {/* Background Subtle Gradient Glow */}
      <div className="fixed top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-slate-800/20 blur-[150px] pointer-events-none" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-yellow-900/10 blur-[200px] pointer-events-none" />

      {/* Sidebar Navigation */}
      <Navigation activeView={activeView} setActiveView={setActiveView} />

      {/* Main Content Area */}
      <main className="flex-1 relative z-10 h-full overflow-y-auto overflow-x-hidden flex flex-col items-center custom-scrollbar">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeView}
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -10 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-5xl px-8 py-12 flex flex-col min-h-full items-center justify-center"
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </main>
      
      <TerminalWidget />
    </div>
  );
}

export default App;
