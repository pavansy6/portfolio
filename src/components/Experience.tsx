import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const ExperienceCard = () => {
  const experiences = [
    {
      title: "Data Science Intern",
      company: "Marsh McLennan",
      location: "Mumbai, Maharashtra, India",
      date: "Feb 2025 - Present",
      duties: [
        "Processed and analyzed data from 8 diverse sources, classifying cyber claims into a predefined taxonomy.",
        "Automated repetitive processes using Python and Pandas, reducing processing time and minimizing human errors.",
        "Cleaned and standardized datasets of regulatory acts and ransomware gang names.",
        "Developed a deduplication dictionary reducing redundant aliases and improving tagging precision."
      ]
    }
  ];

  return (
    <div className="relative border-l-2 border-purple-500/30 pl-8 ml-4">
      {/* Timeline glowing dot */}
      <div className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_15px_rgba(139,92,246,0.8)]" />

      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 relative"
        >
          <div className="glass-card neon-border rounded-xl p-8 hover:bg-black/80 transition-all duration-300">
            <h3 className="text-2xl font-black font-heading text-slate-100 flex items-center gap-3">
              <span className="text-glow">{exp.company}</span>
            </h3>
            
            <h4 className="text-xl text-purple-400 mt-2 font-body font-semibold">{exp.title}</h4>
            
            <div className="flex flex-wrap gap-4 mt-3 mb-6 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1 bg-black/50 px-3 py-1 rounded-full border border-purple-900/30">
                <Calendar size={14} className="text-pink-500" />
                <span>{exp.date}</span>
              </div>
              <div className="flex items-center gap-1 bg-black/50 px-3 py-1 rounded-full border border-purple-900/30">
                <MapPin size={14} className="text-pink-500" />
                <span>{exp.location}</span>
              </div>
            </div>

            <ul className="space-y-3">
              {exp.duties.map((duty, idx) => (
                <li key={idx} className="flex gap-3 text-sm text-slate-300">
                  <span className="text-pink-500 leading-tight">▶</span>
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
    <section id="experience" className="w-full min-h-screen py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 flex items-center gap-4"
        >
          <Briefcase className="text-pink-500" size={32} />
          <h2 className="text-4xl md:text-5xl font-black font-heading text-slate-100 uppercase tracking-widest text-glow">
            Service Record
          </h2>
          <div className="h-[1px] flex-grow bg-gradient-to-r from-purple-500/50 to-transparent ml-4" />
        </motion.div>

        <ExperienceCard />
      </div>
    </section>
  );
};

export default Experience;
