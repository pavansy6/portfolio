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
    <nav className="fixed bottom-0 left-0 w-full h-[70px] md:relative md:h-full md:w-64 bg-black/95 backdrop-blur-md md:bg-black border-t md:border-t-0 md:border-r border-white/10 md:border-white/5 flex flex-row md:flex-col z-50 shrink-0">
      
      {/* Bat Logo Area - Desktop Only */}
      <div className="hidden md:flex p-8 items-center justify-center border-b border-white/5 opacity-80">
        <img src={batmanLogo} alt="Batman Logo" className="w-24 h-auto object-contain mix-blend-lighten grayscale opacity-70" />
      </div>

      {/* Profile Info - Desktop Only */}
      <div className="hidden md:block p-6 text-center border-b border-white/5">
        <h2 className="text-xl font-heading font-bold text-slate-200 uppercase tracking-widest">Pavan Yadav</h2>
        <p className="text-xs text-yellow-500 font-mono mt-2 tracking-wide">AI_ENGINEER // OPR</p>
      </div>

      {/* Nav Links - Horizontal on Mobile, Vertical on Desktop */}
      <div className="flex-1 flex flex-row md:flex-col justify-around py-0 px-2 md:py-6 md:px-4 gap-1 md:gap-2">
        {navItems.map((item) => {
          const isActive = activeView === item.id;
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => setActiveView(item.id)}
              className={`relative flex flex-col md:flex-row items-center justify-center md:justify-start gap-1 md:gap-4 px-2 py-2 md:px-4 md:py-3 rounded-md transition-all duration-300 group flex-1 md:flex-none
                ${isActive ? 'md:bg-yellow-500/10 text-yellow-500' : 'text-slate-400 hover:text-slate-200 md:hover:bg-white/5'}
              `}
            >
              <Icon size={20} className={`transition-colors md:w-[18px] md:h-[18px] ${isActive ? 'text-yellow-500' : 'text-slate-500 group-hover:text-slate-300'}`} />
              <span className={`font-mono text-[9px] md:text-sm tracking-wider uppercase ${isActive ? 'text-yellow-500' : 'text-slate-500'}`}>{item.label}</span>

              {isActive && (
                <>
                  {/* Top indicator for mobile */}
                  <motion.div
                    layoutId="activeNavIndicatorMobile"
                    className="absolute top-0 left-1/4 w-1/2 h-[2px] bg-yellow-500 rounded-b-md md:hidden"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                  {/* Side indicator for desktop */}
                  <motion.div
                    layoutId="activeNavIndicatorDesktop"
                    className="hidden md:block absolute left-0 top-0 w-1 h-full bg-yellow-500 rounded-r-md"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                </>
              )}
            </button>
          );
        })}
      </div>

      {/* Footer Info - Desktop Only */}
      <div className="hidden md:block p-4 border-t border-white/5 text-center">
        <p className="font-mono text-[10px] text-slate-600 uppercase tracking-widest">
          SYS.VER_2.4.9 <br /> SECURE COMM LINK
        </p>
      </div>
    </nav>
  );
};

export default Navigation;
