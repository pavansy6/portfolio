import { motion } from 'framer-motion';
import { Calendar, MapPin, FileArchive } from 'lucide-react';

const ExperienceCard = () => {
  const experiences = [
    {
      title: "Data Science Intern",
      company: "Marsh McLennan",
      location: "Mumbai, Maharashtra, India",
      date: "Feb 2025 - Present",
      status: "ACTIVE_PROTOCOL",
      duties: [
        "Processed and analyzed data from 8 diverse sources, classifying cyber claims into a predefined taxonomy.",
        "Automated repetitive processes using Python and Pandas, reducing processing time and minimizing human errors.",
        "Cleaned and standardized datasets of regulatory acts and ransomware gang names.",
        "Developed a deduplication dictionary reducing redundant aliases and improving tagging precision."
      ]
    }
  ];

  return (
    <div className="relative border-l border-yellow-500/20 pl-6 ml-2 md:ml-4 w-full pt-4">
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 relative group"
        >
          {/* Tactical connection line */}
          <div className="absolute -left-[25px] top-6 w-[24px] h-[1px] bg-yellow-500/50" />
          {/* Timeline hollow node */}
          <div className="absolute -left-[29px] top-[20px] w-2 h-2 border border-yellow-500 bg-black rotate-45 group-hover:bg-yellow-500 transition-colors" />

          <div className="glass-card tactical-border rounded-sm p-6 bg-black/60 hover:border-yellow-500/50 transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4 border-b border-white/5 pb-4">
              <div>
                <h3 className="text-xl font-bold font-heading text-slate-200 uppercase tracking-widest flex items-center gap-3">
                  {exp.company}
                </h3>
                <h4 className="text-yellow-500 mt-1 font-mono text-sm tracking-widest">{exp.title}</h4>
              </div>
              
              <div className="flex items-center gap-2 border border-yellow-500/30 px-2 py-1 bg-yellow-500/5 shrink-0">
                <span className="w-1.5 h-1.5 bg-yellow-500 animate-pulse" />
                <span className="font-mono text-[10px] text-yellow-500 tracking-widest">{exp.status}</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-6 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <Calendar size={14} className="text-slate-500" />
                <span>{exp.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-slate-500" />
                <span>{exp.location}</span>
              </div>
            </div>

            <ul className="space-y-3 font-mono text-sm">
              {exp.duties.map((duty, idx) => (
                <li key={idx} className="flex gap-3 text-slate-300 items-start">
                  <span className="text-yellow-500/70 mt-[2px]">&gt;</span>
                  <span className="leading-relaxed">{duty}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const Experience = () => {
  return (
    <div className="w-full h-full flex flex-col relative z-10 max-w-4xl mx-auto">
      <div className="mb-12 flex items-center gap-4">
        <FileArchive className="text-yellow-500" size={24} />
        <h2 className="text-2xl md:text-3xl font-black font-heading text-slate-200 uppercase tracking-widest">
          MISSION_LOG
        </h2>
        <div className="h-[1px] flex-grow bg-gradient-to-r from-yellow-500/30 to-transparent ml-4" />
      </div>

      <ExperienceCard />
    </div>
  );
};

export default Experience;
