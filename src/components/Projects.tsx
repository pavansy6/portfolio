import { motion } from 'framer-motion';
import { ExternalLink, Database } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string | null;
  link: string | null;
  preview: string | null;
}

const ProjectCard = ({ project, index }: { project: Project, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="glass-card rounded-sm overflow-hidden tactical-border group flex flex-col h-full bg-black/60 relative"
    >
      {/* Subtle corner accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-yellow-500/50 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-yellow-500/50 opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-slate-200 font-heading uppercase tracking-wide group-hover:text-yellow-500 transition-colors duration-300">
            {project.title}
          </h3>
          <div className="flex gap-4">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-yellow-500 transition-colors z-10 interactive">
                <FaGithub size={18} />
              </a>
            )}
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-yellow-500 transition-colors z-10 interactive">
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
        
        <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow font-mono">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((t: string) => (
            <span key={t} className="px-2 py-1 text-[10px] font-mono rounded-sm bg-yellow-500/5 border border-yellow-500/20 text-yellow-500/80 uppercase tracking-wider">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects: Project[] = [
    {
      title: "MoodSync",
      description: "AI-powered mood-based music discovery using Reddit NLP and Spotify audio features. Analyzes sentiment and context to generate personalized experiences.",
      tech: ["Python", "NLP", "Spotify API", "Sentiment Analysis"],
      github: "https://github.com/pavansy6/moodsync",
      link: null,
      preview: null
    },
    {
      title: "Customer Churn Prediction",
      description: "Advanced machine learning pipeline to predict customer churn. Utilizes behavioral data modeling to identify at-risk users early.",
      tech: ["Python", "Machine Learning", "Data Modeling", "Pandas"],
      github: "https://github.com/pavansy6/customer-churn-and-retention",
      link: null,
      preview: null
    },
    {
      title: "Application Scorecard",
      description: "Interactive application evaluating credit risk. Uses machine learning and credit scorecard techniques to predict loan default likelihood.",
      tech: ["Python", "Machine Learning", "Credit Risk Modeling"],
      github: "https://github.com/pavansy6/application_scorecard",
      link: null,
      preview: null
    },
    {
      title: "HDFCBANK Time Series",
      description: "Time Series Analysis with seasonal decomposition and ARIMA modeling achieving highly accurate RMSE for stock price predictions.",
      tech: ["Python", "NSE", "ARIMA", "Statistics"],
      github: "https://github.com/pavansy6/tsa_hdfcbank",
      link: null,
      preview: null
    }
  ];

  return (
    <div className="w-full h-full flex flex-col relative z-10">
      <div className="mb-10 flex items-center gap-4">
        <Database className="text-yellow-500" size={24} />
        <h2 className="text-2xl md:text-3xl font-black font-heading text-slate-200 uppercase tracking-widest">
          DATA_ARCHIVES
        </h2>
        <div className="h-[1px] flex-grow bg-gradient-to-r from-yellow-500/30 to-transparent ml-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-20">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
