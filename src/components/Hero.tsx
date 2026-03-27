import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';
import type { ViewType } from './Navigation';
import batmanLogo from '../assets/batman-logo.png';

const TypewriterText = ({ texts, delay = 2000 }: { texts: string[], delay?: number }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const tick = () => {
      const fullText = texts[currentTextIndex];

      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }

      let typeSpeed = isDeleting ? 30 : 80;

      if (!isDeleting && currentText === fullText) {
        typeSpeed = delay;
        setIsDeleting(true);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        typeSpeed = 500;
      }

      timeout = setTimeout(tick, typeSpeed);
    };

    timeout = setTimeout(tick, 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts, delay]);

  return (
    <span className="text-yellow-500 flex items-center h-[2em] font-mono font-medium tracking-normal">
      <span className="mr-2 text-slate-500">&gt;</span>
      {currentText}
      <span className="animate-pulse ml-1 text-yellow-500 border-r-2 border-yellow-500 w-1 inline-block h-[1.2em]" />
    </span>
  );
};

interface HeroProps {
  setActiveView: (view: ViewType) => void;
}

const Hero = ({ setActiveView }: HeroProps) => {
  const roles = [
    "AI Engineer",
    "Data Scientist",
    "Machine Learning Specialist",
    "Builder of intelligent systems"
  ];

  return (
    <section className="w-full flex-1 flex flex-col items-center justify-center relative px-6 z-10 min-h-[70vh]">

      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
        <img src={batmanLogo} className="w-[120%] max-w-[800px] h-auto object-contain mix-blend-lighten grayscale" alt="Batman Watermark" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center text-center max-w-4xl relative z-10"
      >
        <motion.div
          className="mb-8 py-1 px-4 rounded-sm border border-yellow-500/20 bg-yellow-500/5 text-yellow-500/80 text-xs font-mono uppercase tracking-widest flex items-center gap-3 tactical-border"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse" />
          SYSTEM.ONLINE // OPR_READY
        </motion.div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black font-heading tracking-tighter text-slate-100 mb-6 uppercase">
          <span className="block drop-shadow-lg">PAVAN</span>
          <span className="block text-slate-400 mt-[-0.2em] drop-shadow-md">YADAV</span>
        </h1>

        <div className="text-xl md:text-2xl text-slate-400 mb-12 h-12 flex justify-center">
          <TypewriterText texts={roles} />
        </div>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 mt-8 w-full sm:w-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <button
            onClick={() => setActiveView('projects')}
            className="w-full sm:w-auto px-8 py-4 bg-black tactical-border font-mono tracking-widest flex items-center justify-center gap-3 group text-sm hover:text-yellow-500 transition-colors"
          >
            <Terminal size={16} className="text-slate-500 group-hover:text-yellow-500 transition-colors" />
            <span>ACCESS_FILES</span>
          </button>

          <button
            onClick={() => setActiveView('contact')}
            className="w-full sm:w-auto px-8 py-4 bg-yellow-500 text-black font-mono tracking-widest font-bold text-sm hover:bg-yellow-400 border border-yellow-500 transition-colors"
          >
            ESTABLISH_LINK
          </button>
        </motion.div>
      </motion.div>

    </section>
  );
};

export default Hero;
