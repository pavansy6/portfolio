import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, Terminal } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('pavansy2006@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full h-full flex flex-col relative z-10 max-w-4xl mx-auto flex-1 justify-center pb-20">
      
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="glass-card tactical-border rounded-sm p-8 md:p-12 relative overflow-hidden bg-black/80"
      >
        {/* Decorative corner accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-yellow-500/50 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-yellow-500/50 pointer-events-none" />

        <div className="flex flex-col md:flex-row gap-12">
          
          <div className="flex-1">
            <h2 className="text-3xl font-black font-heading text-slate-200 uppercase tracking-widest mb-2 flex items-center gap-3">
              <span className="w-2 h-2 bg-yellow-500 animate-pulse" />
              SECURE_UPLINK
            </h2>
            <p className="text-slate-400 mb-8 font-mono text-sm leading-relaxed">
              System is awaiting encrypted transmission. If you have a project, role, or mission requiring a skilled AI Engineer, establish an uplink below.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 bg-black p-4 rounded-sm border border-yellow-500/20 relative group hover:border-yellow-500/50 transition-colors">
                <Mail className="text-yellow-500" size={20} />
                <span className="font-mono text-sm text-slate-300">pavansy2006@gmail.com</span>
                
                <button 
                  onClick={handleCopy}
                  className="absolute right-4 p-2 bg-yellow-500/10 hover:bg-yellow-500/20 rounded-sm transition-colors interactive text-yellow-500"
                >
                  {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                </button>
              </div>

              <div className="flex gap-4">
                <a href="https://github.com/pavansy6" target="_blank" rel="noreferrer" className="p-4 bg-black border border-white/5 rounded-sm hover:border-yellow-500/50 hover:bg-yellow-500/5 transition-all text-slate-400 hover:text-yellow-500 interactive group">
                  <FaGithub className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://linkedin.com/in/pavansyadav" target="_blank" rel="noreferrer" className="p-4 bg-black border border-white/5 rounded-sm hover:border-yellow-500/50 hover:bg-yellow-500/5 transition-all text-slate-400 hover:text-yellow-500 interactive group">
                  <FaLinkedin className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://www.instagram.com/pavansyadav_/" target="_blank" rel="noreferrer" className="p-4 bg-black border border-white/5 rounded-sm hover:border-yellow-500/50 hover:bg-yellow-500/5 transition-all text-slate-400 hover:text-yellow-500 interactive group">
                  <FaInstagram className="group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="group relative">
                <span className="absolute left-4 top-4 text-yellow-500/50 font-mono text-xs">&gt;</span>
                <input 
                  type="text" 
                  placeholder="SUBJECT_IDENTIFIER" 
                  className="w-full bg-black/60 border border-white/10 rounded-sm pl-8 pr-4 py-4 font-mono text-sm text-slate-200 focus:outline-none focus:border-yellow-500/80 transition-all placeholder:text-slate-600"
                />
              </div>
              <div className="group relative">
                <span className="absolute left-4 top-4 text-yellow-500/50 font-mono text-xs">&gt;</span>
                <textarea 
                  placeholder="ENCRYPTED_PAYLOAD..." 
                  rows={4}
                  className="w-full bg-black/60 border border-white/10 rounded-sm pl-8 pr-4 py-4 font-mono text-sm text-slate-200 focus:outline-none focus:border-yellow-500/80 transition-all resize-none placeholder:text-slate-600"
                ></textarea>
              </div>
              
              <button className="w-full py-4 bg-yellow-500 text-black font-mono tracking-widest font-bold text-sm uppercase hover:bg-yellow-400 border border-yellow-500 transition-colors flex items-center justify-center gap-3 group">
                <Terminal size={16} />
                TRANSMIT_DATA
              </button>
            </form>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
