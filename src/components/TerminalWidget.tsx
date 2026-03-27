import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, X, Minus } from 'lucide-react';

const TerminalWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [history, setHistory] = useState([
    { text: "Welcome to PSY-OS v2.4. Type 'help' to see available commands.", type: "system" }
  ]);
  const [input, setInput] = useState('');
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const processCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    setHistory(prev => [...prev, { text: `> ${cmd}`, type: "user" }]);
    
    if (trimmed === '') return;

    let response = "";
    switch (trimmed) {
      case 'help':
        response = `Available commands:
  help      - display this message
  whoami    - identify primary user
  skills    - list active proficiencies
  clear     - wipe terminal history
  reboot    - restart interface`;
        break;
      case 'whoami':
        response = "System Admin: PAVAN YADAV. Status: ACTIVE. Mission: Building intelligent architecture.";
        break;
      case 'skills':
        response = "Loading Neural Net...\nPython [100%] | React [90%] | ML [95%] | Data Science [85%]\nStatus: NOMINAL";
        break;
      case 'clear':
        setHistory([]);
        return;
      case 'reboot':
        setHistory([{ text: "System rebooting... Memory flushed.", type: "system" }]);
        return;
      default:
        response = `Command not found: '${trimmed}'. Type 'help' for options.`;
    }

    setHistory(prev => [...prev, { text: response, type: "system" }]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      processCommand(input);
      setInput('');
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex gap-4">
        {!isOpen && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 bg-black/80 magenta-border rounded-full flex items-center justify-center text-pink-500 hover:text-white transition-colors interactive shadow-[0_0_20px_rgba(255,45,117,0.3)] backdrop-blur-md"
          >
            <TerminalIcon size={24} />
          </motion.button>
        )}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              y: isMinimized ? 'calc(100% - 40px)' : 0,
              scale: 1 
            }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className={`fixed ${isMinimized ? 'bottom-0 right-6' : 'bottom-6 right-6'} w-[350px] md:w-[450px] z-50 bg-black/90 neon-border rounded-t-lg shadow-2xl overflow-hidden glass-card flex flex-col`}
            style={{ height: isMinimized ? '40px' : '350px' }}
          >
            {/* Header */}
            <div className="h-[40px] bg-purple-950/40 border-b border-purple-500/30 flex items-center justify-between px-4 cursor-pointer" onClick={() => setIsMinimized(!isMinimized)}>
              <div className="flex items-center gap-2">
                <TerminalIcon size={16} className="text-purple-400" />
                <span className="font-mono text-xs text-purple-300 tracking-wider">PSY-OS Terminal</span>
              </div>
              <div className="flex items-center gap-3">
                <button 
                  onClick={(e) => { e.stopPropagation(); setIsMinimized(!isMinimized); }} 
                  className="text-slate-400 hover:text-white interactive"
                >
                  <Minus size={16} />
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); setIsOpen(false); setIsMinimized(false); }} 
                  className="text-slate-400 hover:text-pink-500 interactive"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Content body */}
            <div className="flex-1 p-4 overflow-y-auto font-mono text-sm leading-relaxed scrollbar-hide">
              {history.map((line, i) => (
                <div key={i} className={`mb-2 whitespace-pre-wrap ${line.type === 'user' ? 'text-green-400' : 'text-slate-300'}`}>
                  {line.text}
                </div>
              ))}
              <div ref={endRef} />
            </div>

            {/* Input area */}
            <div className="h-[50px] border-t border-purple-800/30 flex items-center px-4 bg-black/50">
              <span className="text-purple-500 mr-2 font-mono">&gt;</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent text-slate-200 outline-none font-mono text-sm shadow-none interactive"
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
