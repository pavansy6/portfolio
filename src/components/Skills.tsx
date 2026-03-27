import { motion } from 'framer-motion';
import { Network } from 'lucide-react';

const FloatingNode = ({ skill, index }: { skill: string, index: number }) => {
  // Generate random stable coordinates for animations
  const randomX = Math.random() * 40 - 20;
  const randomY = Math.random() * 40 - 20;
  const delay = index * 0.2;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      animate={{
        y: [0, randomY, 0],
        x: [0, randomX, 0],
      }}
      transition={{
        opacity: { duration: 0.5, delay: delay * 0.5 },
        scale: { duration: 0.5, delay: delay * 0.5 },
        y: { repeat: Infinity, duration: 4 + Math.random() * 2, ease: "easeInOut" },
        x: { repeat: Infinity, duration: 5 + Math.random() * 2, ease: "easeInOut" }
      }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.1, zIndex: 10, filter: "brightness(1.5)" }}
      className="relative flex items-center justify-center p-4 m-2 glass-card rounded-full neon-border cursor-none"
    >
      <span className="font-mono text-sm tracking-widest text-[#f8fafc] text-glow whitespace-nowrap">
        {skill}
      </span>
      {/* Decorative connection points */}
      <div className="absolute top-0 left-1/2 w-1 h-1 bg-purple-500 rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-1 h-1 bg-pink-500 rounded-full" />
    </motion.div>
  );
};

const Skills = () => {
  const nodeSkills = [
    "Python", "RAG", "LLMs", "NLP", "Credit Risk",
    "SQL Server", "Oracle", "MySQL", "MLOps", "PowerBI",
    "Machine Learning", "Neural Networks", "Pandas",
    "HDFS", "Spark", "Hadoop", "Excel", "Statistics"
  ];

  return (
    <section id="skills" className="w-full min-h-[80vh] py-24 px-6 relative z-10 flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 flex items-center gap-4 justify-end"
        >
          <div className="h-[1px] flex-grow bg-gradient-to-l from-purple-500/50 to-transparent mr-4" />
          <h2 className="text-4xl md:text-5xl font-black font-heading text-slate-100 uppercase tracking-widest text-glow text-right">
            Neural Net
          </h2>
          <Network className="text-purple-500" size={32} />
        </motion.div>

        {/* Abstract floating nodes container */}
        <div className="relative w-full h-[500px] bg-black/40 rounded-3xl border border-purple-900/30 overflow-hidden hidden md:block">
          {/* Faux Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

          <div className="absolute inset-0 flex flex-wrap content-center justify-center gap-6 p-12 z-10">
            {nodeSkills.map((skill, index) => (
              <FloatingNode key={skill} skill={skill} index={index} />
            ))}
          </div>

          {/* Core Eye / Hub */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-purple-500/10 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full border border-pink-500/20 bg-black shadow-[0_0_50px_rgba(255,45,117,0.1)] flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,1)] animate-ping" />
            </div>
          </div>
        </div>

        {/* Mobile View Strategy */}
        <div className="md:hidden flex flex-wrap gap-3 justify-center">
          {nodeSkills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="px-4 py-2 glass-card neon-border rounded border border-purple-500/30 text-xs font-mono text-purple-200"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
