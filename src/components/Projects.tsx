import { motion } from 'framer-motion';
import { ExternalLink, Flame } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
      className="glass-card rounded-xl overflow-hidden neon-border group flex flex-col h-full bg-gradient-to-b from-black/80 to-purple-950/20"
    >
      <div className="relative h-48 w-full overflow-hidden bg-black flex items-center justify-center">
        {project.preview ? (
          <img 
            src={project.preview} 
            alt={project.title} 
            className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-black/90 flex items-center justify-center p-6 text-center">
            <h3 className="text-3xl font-black font-heading text-purple-300/30 uppercase tracking-tighter">{project.title}</h3>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-slate-100 font-heading">
            {project.title}
          </h3>
          <div className="flex gap-3">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-purple-400 transition-colors z-10 interactive">
                <FaGithub size={20} />
              </a>
            )}
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-pink-400 transition-colors z-10 interactive">
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
        
        <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((t: string) => (
            <span key={t} className="px-3 py-1 text-xs font-mono rounded bg-purple-900/30 border border-purple-500/30 text-purple-300 shadow-[0_0_10px_rgba(139,92,246,0.1)]">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "MoodSync",
      description: "AI-powered mood-based music discovery using Reddit NLP and Spotify audio features. Analyzes sentiment and context to generate highly personalized listening experiences.",
      tech: ["Python", "NLP", "Spotify API", "Sentiment Analysis"],
      github: "https://github.com/pavansy6/moodsync",
      link: null,
      preview: null // Will show fallback gradient
    },
    {
      title: "Customer Churn Prediction",
      description: "Advanced machine learning pipeline to predict customer churn and retention strategies. Utilizes behavioral data modeling to identify at-risk users before they drop off.",
      tech: ["Python", "Machine Learning", "Data Modeling", "Pandas"],
      github: "https://github.com/pavansy6/customer-churn-and-retention",
      link: null,
      preview: null
    },
    {
      title: "Application Scorecard",
      description: "Interactive web application evaluating credit risk. Uses machine learning and traditional credit scorecard techniques to predict loan default likelihood based on applicant data.",
      tech: ["Python", "Machine Learning", "Credit Risk Modeling"],
      github: "https://github.com/pavansy6/application_scorecard",
      link: null,
      preview: null
    },
    {
      title: "HDFCBANK Stock Time Series",
      description: "Time Series Analysis with seasonal decomposition and ARIMA modeling achieving highly accurate RMSE for stock price predictions.",
      tech: ["Python", "NSE", "ARIMA", "Statistics"],
      github: "https://github.com/pavansy6/tsa_hdfcbank",
      link: null,
      preview: null
    }
  ];

  return (
    <section id="projects" className="w-full min-h-screen py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 flex items-center gap-4"
        >
          <Flame className="text-pink-500" size={32} />
          <h2 className="text-4xl md:text-5xl font-black font-heading text-slate-100 uppercase tracking-widest text-glow">
            Operatives
          </h2>
          <div className="h-[1px] flex-grow bg-gradient-to-r from-purple-500/50 to-transparent ml-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
