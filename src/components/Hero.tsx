import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Terminal } from 'lucide-react';

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

      let typeSpeed = isDeleting ? 40 : 100;

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
    <span className="text-transparent flex items-center h-[2em] bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 font-mono font-medium tracking-tight">
      <span className="mr-1">&gt;</span>
      {currentText}
      <span className="animate-pulse ml-1 text-purple-500 border-r-2 border-purple-500 w-1 inline-block h-[1em]" />
    </span>
  );
};

const Hero = () => {
  const roles = [
    "AI Engineer",
    "Data Scientist",
    "Full Stack Developer",
    "Builder of intelligent systems"
  ];

  return (
    <section id="hero" className="w-full min-h-screen flex flex-col items-center justify-center relative px-6 z-10">
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center text-center max-w-4xl"
      >
        <motion.div 
          className="mb-6 py-1 px-3 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-mono uppercase tracking-widest flex items-center gap-2 interactive"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          System Active
        </motion.div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-heading tracking-tighter text-slate-100 mb-6 drop-shadow-2xl">
          <span className="block text-glow">PAVAN</span>
          <span className="block text-glow-magenta mt-[-0.2em]">YADAV</span>
        </h1>

        <div className="text-xl md:text-3xl text-slate-400 mb-12 h-12 flex justify-center">
          <TypewriterText texts={roles} />
        </div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-6 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <a href="#projects" className="interactive px-8 py-4 rounded-none bg-black/60 neon-border font-mono tracking-wider flex items-center justify-center gap-2 group hover:bg-purple-900/20">
            <Terminal size={18} className="text-purple-400 group-hover:text-pink-400 transition-colors" />
            <span>Init Sequence</span>
          </a>
          <a href="#contact" className="interactive px-8 py-4 rounded-none bg-black/60 magenta-border font-mono tracking-wider hover:bg-pink-900/20">
            Establish Uplink
          </a>
        </motion.div>
      </motion.div>

      <motion.div 
        className="absolute bottom-10 flex flex-col items-center gap-2 text-purple-500/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-xs font-mono uppercase tracking-widest">Scroll to access</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
