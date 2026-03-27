import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';

interface SkillCategory {
  name: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "CORE_ML_&_ANALYSIS",
    skills: ["Python", "Machine Learning", "Neural Networks", "Pandas", "Statistics"]
  },
  {
    name: "AI_&_NLP_SYSTEMS",
    skills: ["RAG", "LLMs", "NLP", "Generative AI"]
  },
  {
    name: "DATA_ENGINEERING",
    skills: ["SQL (MySQL/Oracle)", "HDFS & Hadoop", "Apache Spark", "MLOps"]
  },
  {
    name: "ANALYTICS_&_DOMAIN",
    skills: ["PowerBI", "Excel", "Credit Risk Modeling"]
  }
];

const SkillPanel = ({ category, index }: { category: SkillCategory, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="glass-card tactical-border p-6 bg-black/60 relative group"
    >
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-yellow-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
      
      <h3 className="text-yellow-500 font-mono text-xs tracking-widest mb-6 flex items-center gap-2">
        <span className="w-1.5 h-1.5 bg-yellow-500 inline-block" />
        {category.name}
      </h3>
      
      <div className="flex flex-wrap gap-3">
        {category.skills.map((skill, i) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: (index * 0.15) + (i * 0.05) }}
            className="px-3 py-1.5 border border-white/5 bg-white/[0.02] text-slate-300 font-mono text-sm group-hover:border-yellow-500/30 group-hover:text-yellow-500/90 transition-colors"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div className="w-full h-full flex flex-col relative z-10 max-w-4xl mx-auto">
      <div className="mb-10 flex items-center gap-4 justify-end">
        <div className="h-[1px] flex-grow bg-gradient-to-l from-yellow-500/30 to-transparent mr-4" />
        <h2 className="text-2xl md:text-3xl font-black font-heading text-slate-200 uppercase tracking-widest text-right">
          CAPABILITIES
        </h2>
        <Cpu className="text-yellow-500" size={24} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-20">
        {skillCategories.map((category, index) => (
          <SkillPanel key={category.name} category={category} index={index} />
        ))}
      </div>

      {/* Decorative System Diagnostics Line */}
      <motion.div 
        className="fixed bottom-10 left-10 right-10 h-[100px] border-t border-yellow-500/10 hidden md:flex items-end justify-between px-4 pb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <span className="font-mono text-[10px] text-yellow-500/30">SYS_MEM: OPTIMAL</span>
        <span className="font-mono text-[10px] text-yellow-500/30">NEURAL_NET: SECURE</span>
        <span className="font-mono text-[10px] text-yellow-500/30 animate-pulse">AWAITING_INPUT...</span>
      </motion.div>
    </div>
  );
};

export default Skills;
