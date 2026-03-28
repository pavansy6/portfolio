import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, X, Minus } from 'lucide-react';

const TerminalWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [history, setHistory] = useState([
    { text: "System Boot... SECURE_SYS_OS v1.0 ready. Type 'help' for commands.", type: "system" }
  ]);
  const [input, setInput] = useState('');
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const processCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    
    if (trimmed === '') return;

    let response = "";
    switch (trimmed) {
      case 'help':
        response = `Available commands:
  help      - display protocol options
  whoami    - identify primary operator
  skills    - load active capabilities
  clear     - wipe terminal records
  reboot    - restart system link`;
        break;
      case 'whoami':
        response = "Operator: PAVAN YADAV. Access Level: ADMIN. Mission: Data Science & AI Engineering.";
        break;
      case 'skills':
        response = "Scanning capabilities...\n[Machine Learning] - ACTIVE\n[Data Engineering] - SECURE\n[Python/Analysis]  - NOMINAL\nSystem check complete.";
        break;
      case 'clear':
        setHistory([]);
        return;
      case 'reboot':
        setHistory([{ text: "System link re-established. Memory scrubbed.", type: "system" }]);
        return;
      default:
        response = `Command unrecognized: '${trimmed}'. Type 'help' to review protocols.`;
    }

    setHistory(prev => [
      ...prev, 
      { text: `> ${cmd}`, type: "user" },
      { text: response, type: "system" }
    ]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      processCommand(input);
      setInput('');
    }
  };

  return (
    <>
      {/* Terminal Toggle Button */}
      <div className="fixed bottom-[90px] md:bottom-6 right-4 md:right-6 z-50 flex gap-4">
        {!isOpen && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-yellow-500 blur-sm rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
            <button
              onClick={() => setIsOpen(true)}
              className="relative w-12 h-12 bg-black tactical-border rounded-sm flex items-center justify-center text-slate-500 hover:text-yellow-500 hover:border-yellow-500 transition-colors interactive shadow-2xl"
            >
              <TerminalIcon size={20} />
            </button>
          </motion.div>
        )}
      </div>

      {/* Terminal Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              y: isMinimized ? 'calc(100% - 40px)' : 0,
              scale: 1 
            }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className={`fixed ${isMinimized ? 'bottom-[70px] md:bottom-0 right-4 md:right-6' : 'bottom-[80px] md:bottom-6 right-4 left-4 md:left-auto md:right-6'} w-auto md:w-[450px] z-50 bg-black tactical-border rounded-sm shadow-2xl overflow-hidden flex flex-col`}
            style={{ height: isMinimized ? '40px' : '350px' }}
          >
            {/* Header */}
            <div className="h-[40px] bg-white/5 border-b border-white/10 flex items-center justify-between px-4 cursor-pointer hover:bg-white/10 transition-colors" onClick={() => setIsMinimized(!isMinimized)}>
              <div className="flex items-center gap-2">
                <TerminalIcon size={14} className="text-yellow-500" />
                <span className="font-mono text-[10px] text-yellow-500/80 tracking-widest uppercase">SECURE_TERM_LINK</span>
              </div>
              <div className="flex items-center gap-3">
                <button 
                  onClick={(e) => { e.stopPropagation(); setIsMinimized(!isMinimized); }} 
                  className="text-slate-500 hover:text-yellow-500 interactive"
                >
                  <Minus size={14} />
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); setIsOpen(false); setIsMinimized(false); }} 
                  className="text-slate-500 hover:text-red-500 interactive"
                >
                  <X size={14} />
                </button>
              </div>
            </div>

            {/* Content body */}
            <div className="flex-1 p-4 overflow-y-auto font-mono text-sm leading-relaxed custom-scrollbar bg-black">
              {history.map((line, i) => (
                <div key={i} className={`mb-3 whitespace-pre-wrap flex ${line.type === 'user' ? 'text-yellow-400' : 'text-slate-400'}`}>
                  {line.type === 'system' && <span className="text-yellow-500/50 mr-2 mt-[2px] leading-tight">&gt;</span>}
                  <div className="flex-1">{line.text}</div>
                </div>
              ))}
              <div ref={endRef} />
            </div>

            {/* Input area */}
            <div className="h-[50px] border-t border-white/10 flex items-center px-4 bg-black/80">
              <span className="text-yellow-500 mr-3 font-mono text-xs animate-pulse">$&gt;</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent text-slate-200 outline-none font-mono text-sm interactive placeholder:text-slate-700"
                placeholder="Awaiting command..."
                disabled={isMinimized}
                autoFocus
                spellCheck={false}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TerminalWidget;
