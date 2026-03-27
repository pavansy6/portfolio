import { motion } from 'framer-motion';
import { Code2, Cpu, FileText, Mail, Home } from 'lucide-react';
import batmanLogo from '../assets/batman-logo.png';

export type ViewType = 'home' | 'projects' | 'skills' | 'experience' | 'contact';

interface NavigationProps {
  activeView: ViewType;
  setActiveView: (view: ViewType) => void;
}

const Navigation = ({ activeView, setActiveView }: NavigationProps) => {
  const navItems: { id: ViewType; label: string; icon: React.FC<any> }[] = [
    { id: 'home', label: 'SYSTEM_HUB', icon: Home },
    { id: 'projects', label: 'PROJECTS', icon: Code2 },
    { id: 'skills', label: 'CAPABILITIES', icon: Cpu },
    { id: 'experience', label: 'MISSION_LOG', icon: FileText },
    { id: 'contact', label: 'UPLINK', icon: Mail },
  ];

  return (
    <nav className="w-64 h-full bg-black border-r border-white/5 flex flex-col relative z-20 shrink-0">
      {/* Bat Logo Area */}
      <div className="p-8 flex items-center justify-center border-b border-white/5 opacity-80">
        <img src={batmanLogo} alt="Batman Logo" className="w-24 h-auto object-contain mix-blend-lighten grayscale opacity-70" />
      </div>

      {/* Profile Info */}
      <div className="p-6 text-center border-b border-white/5">
        <h2 className="text-xl font-heading font-bold text-slate-200 uppercase tracking-widest">Pavan Yadav</h2>
        <p className="text-xs text-yellow-500 font-mono mt-2 tracking-wide">AI_ENGINEER // OPR</p>
      </div>

      {/* Nav Links */}
      <div className="flex-1 flex flex-col py-6 px-4 gap-2">
        {navItems.map((item) => {
          const isActive = activeView === item.id;
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => setActiveView(item.id)}
              className={`relative flex items-center gap-4 px-4 py-3 rounded-md transition-all duration-300 group
                ${isActive ? 'bg-yellow-500/10 text-yellow-500' : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'}
              `}
            >
              <Icon size={18} className={`transition-colors ${isActive ? 'text-yellow-500' : 'text-slate-500 group-hover:text-slate-300'}`} />
              <span className="font-mono text-sm tracking-wider uppercase">{item.label}</span>

              {isActive && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute left-0 top-0 w-1 h-full bg-yellow-500 rounded-r-md"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Footer Info */}
      <div className="p-4 border-t border-white/5 text-center">
        <p className="font-mono text-[10px] text-slate-600 uppercase tracking-widest">
          SYS.VER_2.4.9 <br /> SECURE COMM LINK
        </p>
      </div>
    </nav>
  );
};

export default Navigation;
