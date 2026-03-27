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
    <section id="contact" className="w-full min-h-[80vh] py-24 px-6 relative z-10 flex flex-col justify-center">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="glass-card neon-border rounded-2xl p-8 md:p-12 relative overflow-hidden"
        >
          {/* Decorative corner lines */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-purple-500/50 rounded-tl-2xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-pink-500/50 rounded-br-2xl pointer-events-none" />

          <div className="flex flex-col md:flex-row gap-12">
            
            <div className="flex-1">
              <h2 className="text-4xl font-black font-heading text-slate-100 uppercase tracking-widest text-glow mb-2">
                Init Contact
              </h2>
              <p className="text-slate-400 mb-8 font-mono text-sm leading-relaxed">
                Looking for new operatives. If you have a project, role, or mission requiring a skilled AI Engineer, establish an uplink below.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 bg-black/60 p-4 rounded-lg border border-purple-900/40 relative group">
                  <Mail className="text-purple-500" />
                  <span className="font-mono text-sm text-slate-300">pavansy2006@gmail.com</span>
                  
                  <button 
                    onClick={handleCopy}
                    className="absolute right-4 p-2 hover:bg-purple-900/40 rounded-md transition-colors interactive text-slate-400 hover:text-purple-300"
                  >
                    {copied ? <Check size={18} className="text-green-400" /> : <Copy size={18} />}
                  </button>
                </div>

                <div className="flex gap-4">
                  <a href="https://github.com/pavansy6" target="_blank" rel="noreferrer" className="p-4 bg-black/60 border border-purple-900/40 rounded-lg hover:border-purple-500/50 hover:bg-purple-900/20 transition-all text-slate-400 hover:text-purple-300 interactive group">
                    <FaGithub className="group-hover:scale-110 transition-transform" />
                  </a>
                  <a href="https://linkedin.com/in/pavansyadav" target="_blank" rel="noreferrer" className="p-4 bg-black/60 border border-purple-900/40 rounded-lg hover:border-purple-500/50 hover:bg-purple-900/20 transition-all text-slate-400 hover:text-purple-300 interactive group">
                    <FaLinkedin className="group-hover:scale-110 transition-transform" />
                  </a>
                  <a href="https://www.instagram.com/pavansyadav_/" target="_blank" rel="noreferrer" className="p-4 bg-black/60 border border-purple-900/40 rounded-lg hover:border-pink-500/50 hover:bg-pink-900/20 transition-all text-slate-400 hover:text-pink-300 interactive group">
                    <FaInstagram className="group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-center">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="group">
                  <input 
                    type="text" 
                    placeholder="Subject (e.g. Protocol 01)" 
                    className="w-full bg-black/40 border border-purple-900/40 rounded-none p-4 font-mono text-sm text-slate-200 focus:outline-none focus:border-purple-500/80 focus:ring-1 focus:ring-purple-500/50 transition-all interactive"
                  />
                </div>
                <div className="group">
                  <textarea 
                    placeholder="Payload Data..." 
                    rows={4}
                    className="w-full bg-black/40 border border-purple-900/40 rounded-none p-4 font-mono text-sm text-slate-200 focus:outline-none focus:border-purple-500/80 focus:ring-1 focus:ring-purple-500/50 transition-all resize-none interactive"
                  ></textarea>
                </div>
                
                <button className="w-full py-4 bg-black border-2 border-purple-500 text-purple-400 font-mono tracking-widest uppercase hover:bg-purple-600 hover:text-white transition-all interactive flex items-center justify-center gap-2 group">
                  <Terminal size={18} className="group-hover:animate-bounce" />
                  Transmit
                </button>
              </form>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
