import React, { useState, useEffect, useRef } from 'react';
import { Mail, Github, Linkedin, ExternalLink, Calendar, MapPin, Code, Database, BarChart3, Brain, TrendingUp, Award, Instagram, Twitter, Coins, Handshake } from 'lucide-react';
import './App.css';

// Mock React Bits components
const SplitText = ({ children, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`split-text ${isVisible ? 'animate' : ''} ${className}`}>
      {children.split('').map((char, i) => (
        <span key={i} style={{ animationDelay: `${i * 0.05}s` }}>
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
};

const GlitchText = ({ children, className = "" }) => {
  const [glitch, setGlitch] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 200);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`glitch-text ${glitch ? 'glitch' : ''} ${className}`}>
      {children}
    </div>
  );
};

const ShinyText = ({ children, className = "" }) => {
  return (
    <div className={`shiny-text ${className}`}>
      {children}
    </div>
  );
};

const TitledCard = ({ title, children, className = "" }) => {
  return (
    <div className={`titled-card ${className}`}>
      <div className="card-title">{title}</div>
      <div className="card-content">{children}</div>
    </div>
  );
};

const CardSwap = ({ front, back, className = "" }) => {
  const [flipped, setFlipped] = useState(false);
  
  return (
    <div className={`card-swap ${flipped ? 'flipped' : ''} ${className}`} onClick={() => setFlipped(!flipped)}>
      <div className="card-front">{front}</div>
      <div className="card-back">{back}</div>
    </div>
  );
};

const FolderTabs = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="folder-tabs">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`folder-tab ${activeTab === index ? 'active' : ''}`}
          onClick={() => onTabChange(index)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

// Main Portfolio Component
const Portfolio = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef([]);

  const sections = ['Home', 'Skills', 'Experience', 'Projects', 'Interests'];

  const skills = [
    { category: 'Programming', items: ['Python', 'R', 'JavaScript', 'Java'], icon: Code },
    { category: 'Databases', items: ['MySQL', 'Oracle', 'HiveQL', 'SQL Server'], icon: Database },
    { category: 'Analytics', items: ['PowerBI', 'Tableau', 'Excel', 'VBA'], icon: BarChart3 },
    { category: 'AI/ML', items: ['Neural Networks', 'NLP', 'Deep Learning', 'Statistics'], icon: Brain },
    { category: 'Big Data', items: ['HDFS', 'Pig', 'Hadoop', 'Spark'], icon: TrendingUp }
  ];

  const projects = [
    {
      title: 'Chess Game Data Analysis',
      tech: 'Python, Kaggle, Statistics',
      description: 'Analyzed Chess Openings for Win Probability. Identified the Vant Kruijs Opening as having the highest win probability among top chess openings.',
      highlights: ['Win Probability Analysis', 'Player Ranking by Elo', 'Correlation Studies'],
      date: 'August 2024'
    },
    {
      title: 'HDFCBANK Stock Time Series',
      tech: 'Python, NSE, ARIMA',
      description: 'Time Series Analysis with seasonal decomposition and ARIMA modeling achieving RMSE of 614.12 for accurate stock price predictions.',
      highlights: ['Seasonal Decomposition', 'Stationarity Testing', 'ARIMA Modeling'],
      date: 'October 2024'
    },
    {
      title: 'VBA Canteen Management',
      tech: 'Excel, VBA, Canva',
      description: 'Enhanced operational efficiency with interactive user forms, reducing user errors by over 50% and enabling real-time insights.',
      highlights: ['Interactive Forms', '50% Error Reduction', 'Real-time Analytics'],
      date: 'March 2024'
    },
    {
      title: 'Olympics 2024 Dashboard',
      tech: 'PowerBI, DAX, Data Modeling',
      description: 'Interactive Power BI dashboard with advanced visualizations and DAX measures for comprehensive data analysis.',
      highlights: ['Interactive Dashboard', 'DAX Measures', 'Data Visualization'],
      date: 'October 2024'
    }
  ];

  const experience = {
    title: 'Data Science Intern',
    company: 'Marsh McLennan',
    period: 'Feb 2025 - Present',
    location: 'Mumbai, Maharashtra, India',
    description: [
      'Processed and analyzed data from 8 diverse sources, applying multiple classification approaches to categorize cyber claims into a predefined taxonomy, improving categorization accuracy and analytical value.',
      'Worked with Python, Pandas to automate repetitive processes, reducing processing time and minimizing human errors.',
      'Documented processes, testing procedures, and categorization guidelines to ensure reproducibility and effective knowledge transfer within the team.',
      'Cleaned and standardized datasets of regulatory acts and ransomware gang names, enhancing entity recognition accuracy.',
      'Developed a deduplication dictionary for ransomware gang names, significantly reducing redundant aliases and improving tagging precision.',
      'Performed comparative tagging analysis between updated and legacy datasets, achieving higher coverage for regulatory acts and reducing false positives in ransomware gang name detection.'
    ]
  };

  const certifications = [
    'Robotics competition with IIT Bombay (e-Yantra initiative)',
    'Alteryx certification - Advanced data manipulation techniques',
    'Bull and Bear Bash event at Ramanarain Ruia College',
    'Introduction to Generative AI - Google Cloud',
    'ChatGPT & AI Hacks in MS Office - Skill Nation',
    'ChatGPT for NLP - Great Learning'
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.6,
      rootMargin: '-50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionRefs.current.indexOf(entry.target);
          if (index !== -1) {
            setActiveSection(index);
          }
        }
      });
    }, observerOptions);

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (index) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="portfolio">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Roboto+Mono:wght@300;400;500&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --bg-primary: #0d0d0d;
          --bg-card: #1a1a1a;
          --bg-card-hover: #252525;
          --accent-green: #00ff99;
          --accent-cyan: #00ffff;
          --text-primary: #ffffff;
          --text-secondary: #b0b0b0;
          --border: #333333;
          --shadow: 0 0 20px rgba(0, 255, 153, 0.1);
        }

        body {
          background: var(--bg-primary);
          color: var(--text-primary);
          font-family: 'Roboto Mono', monospace;
          line-height: 1.6;
          overflow-x: hidden;
        }

        .portfolio {
          min-height: 100vh;
          background: 
            radial-gradient(circle at 20% 80%, rgba(0, 255, 153, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(0, 255, 255, 0.03) 0%, transparent 50%),
            linear-gradient(135deg, var(--bg-primary) 0%, #111111 100%);
          position: relative;
        }

        .portfolio::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(0, 255, 153, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 153, 0.02) 1px, transparent 1px);
          background-size: 50px 50px;
          pointer-events: none;
          z-index: 0;
        }

        .navigation {
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1000;
          background: rgba(26, 26, 26, 0.9);
          backdrop-filter: blur(10px);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 8px;
        }

        .folder-tabs {
          display: flex;
          gap: 4px;
        }

        .folder-tab {
          padding: 8px 16px;
          background: transparent;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          border-radius: 8px;
          font-family: 'Roboto Mono', monospace;
          font-size: 14px;
          transition: all 0.3s ease;
          position: relative;
        }

        .folder-tab:hover {
          color: var(--accent-cyan);
          background: rgba(0, 255, 255, 0.1);
        }

        .folder-tab.active {
          color: var(--accent-green);
          background: rgba(0, 255, 153, 0.1);
          box-shadow: 0 0 10px rgba(0, 255, 153, 0.3);
        }

        .section {
          min-height: 100vh;
          padding: 100px 20px 50px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .container {
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
        }

        .hero {
          text-align: center;
          margin-bottom: 60px;
        }

        .split-text {
          font-family: 'Orbitron', sans-serif;
          font-size: 4rem;
          font-weight: 900;
          margin-bottom: 20px;
          background: linear-gradient(135deg, var(--accent-green), var(--accent-cyan));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .split-text span {
          display: inline-block;
          opacity: 0;
          transform: translateY(50px) rotateX(90deg);
          animation: splitReveal 0.6s ease forwards;
        }

        @keyframes splitReveal {
          to {
            opacity: 1;
            transform: translateY(0) rotateX(0);
          }
        }

        .subtitle {
          font-size: 1.5rem;
          color: var(--text-secondary);
          margin-bottom: 30px;
          font-weight: 300;
        }

        .glitch-text {
          position: relative;
          font-family: 'Orbitron', sans-serif;
        }

        .glitch-text.glitch::before,
        .glitch-text.glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .glitch-text.glitch::before {
          animation: glitch-1 0.2s infinite;
          color: var(--accent-cyan);
          z-index: -1;
        }

        .glitch-text.glitch::after {
          animation: glitch-2 0.2s infinite;
          color: var(--accent-green);
          z-index: -2;
        }

        @keyframes glitch-1 {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
        }

        @keyframes glitch-2 {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(2px, -2px); }
          40% { transform: translate(2px, 2px); }
          60% { transform: translate(-2px, -2px); }
          80% { transform: translate(-2px, 2px); }
        }

        .shiny-text {
          background: linear-gradient(90deg, transparent, var(--accent-cyan), transparent);
          background-size: 200% 100%;
          animation: shine 3s infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        @keyframes shine {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        .profile-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 30px;
          text-align: center;
          box-shadow: var(--shadow);
          transition: all 0.3s ease;
          margin: 0 auto;
          max-width: 400px;
        }

        .profile-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 255, 153, 0.2);
          border-color: var(--accent-green);
        }

        .profile-image {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--accent-green), var(--accent-cyan));
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          font-size: 48px;
          font-weight: bold;
          color: var(--bg-primary);
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 20px;
        }

        .social-link {
          width: 45px;
          height: 45px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          color: var(--accent-green);
          border-color: var(--accent-green);
          box-shadow: 0 0 15px rgba(0, 255, 153, 0.5);
          transform: scale(1.1);
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          margin-top: 40px;
        }

        .titled-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 25px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .titled-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--accent-green), transparent);
          transition: left 0.5s ease;
        }

        .titled-card:hover::before {
          left: 100%;
        }

        .titled-card:hover {
          background: var(--bg-card-hover);
          border-color: var(--accent-green);
          transform: translateY(-5px);
          box-shadow: var(--shadow);
        }

        .card-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 15px;
          color: var(--accent-green);
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .card-content {
          color: var(--text-secondary);
        }

        .skill-items {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 10px;
        }

        .skill-item {
          background: rgba(0, 255, 153, 0.1);
          color: var(--accent-green);
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.9rem;
          border: 1px solid rgba(0, 255, 153, 0.3);
        }

        .experience-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 30px;
          margin: 20px 0;
          box-shadow: var(--shadow);
          transition: all 0.3s ease;
        }

        .experience-card:hover {
          border-color: var(--accent-cyan);
          transform: translateX(10px);
        }

        .experience-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
          flex-wrap: wrap;
          gap: 10px;
        }

        .experience-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--accent-cyan);
        }

        .experience-company {
          font-size: 1.2rem;
          color: var(--text-primary);
          margin: 5px 0;
        }

        .experience-meta {
          display: flex;
          align-items: center;
          gap: 15px;
          color: var(--text-secondary);
          font-size: 0.9rem;
          flex-wrap: wrap;
        }

        .experience-meta span {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .experience-description {
          list-style: none;
          padding: 0;
        }

        .experience-description li {
          padding: 8px 0;
          padding-left: 20px;
          position: relative;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .experience-description li::before {
          content: '▶';
          position: absolute;
          left: 0;
          color: var(--accent-green);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
          margin-top: 40px;
        }

        .card-swap {
          height: 300px;
          position: relative;
          perspective: 1000px;
          cursor: pointer;
        }

        .card-front,
        .card-back {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 25px;
          backface-visibility: hidden;
          transition: transform 0.6s ease;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .card-back {
          transform: rotateY(180deg);
        }

        .card-swap.flipped .card-front {
          transform: rotateY(180deg);
        }

        .card-swap.flipped .card-back {
          transform: rotateY(0);
        }

        .card-swap:hover .card-front {
          border-color: var(--accent-green);
          box-shadow: var(--shadow);
        }

        .project-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--accent-green);
          margin-bottom: 15px;
        }

        .project-tech {
          color: var(--accent-cyan);
          font-size: 0.9rem;
          margin-bottom: 15px;
        }

        .project-description {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .project-highlights {
          list-style: none;
          padding: 0;
        }

        .project-highlights li {
          padding: 4px 0;
          color: var(--text-secondary);
          font-size: 0.9rem;
          padding-left: 15px;
          position: relative;
        }

        .project-highlights li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--accent-green);
        }

        .project-date {
          color: var(--accent-cyan);
          font-size: 0.8rem;
          margin-top: auto;
          text-align: right;
        }

        .certifications-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          margin-top: 30px;
        }

        .certification-item {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 20px;
          display: flex;
          align-items: center;
          gap: 15px;
          transition: all 0.3s ease;
        }

        .certification-item:hover {
          border-color: var(--accent-green);
          transform: translateX(5px);
          box-shadow: var(--shadow);
        }

        .section-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 2.5rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 50px;
          background: linear-gradient(135deg, var(--accent-green), var(--accent-cyan));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .footer {
          text-align: center;
          padding: 40px 20px;
          border-top: 1px solid var(--border);
          background: var(--bg-card);
        }

        .footer-text {
          color: var(--text-secondary);
          margin-bottom: 20px;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .split-text {
            font-size: 2.5rem;
          }

          .subtitle {
            font-size: 1.2rem;
          }

          .section {
            padding: 80px 15px 30px;
          }

          .skills-grid {
            grid-template-columns: 1fr;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .experience-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .folder-tabs {
            flex-wrap: wrap;
          }

          .folder-tab {
            font-size: 12px;
            padding: 6px 12px;
          }
        }

        @media (max-width: 480px) {
          .split-text {
            font-size: 2rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .navigation {
            position: relative;
            top: auto;
            left: auto;
            transform: none;
            margin: 20px;
          }
        }
      `}</style>

      {/* Navigation */}
      <div className="navigation">
        <FolderTabs 
          tabs={sections} 
          activeTab={activeSection} 
          onTabChange={scrollToSection} 
        />
      </div>

      {/* Hero Section */}
      <section 
        ref={(el) => { sectionRefs.current[0] = el; }} 
        className="section hero-section"
      >
        <div className="container">
          <div className="hero">
            <SplitText className="main-title">
              Hi, I'm Pavan Yadav
            </SplitText>
            <GlitchText className="subtitle">
              Data Science Intern at Marsh McLennan
            </GlitchText>
            
            <div className="profile-card">
              <div className="profile-image">PY</div>
              <h3>Bachelor of Science in Data Science</h3>
              <p>School of Data Science & Business Intelligence</p>
              <p style={{ color: 'var(--accent-green)', fontWeight: 'bold' }}>CGPA: 9.2/10</p>
              
              <div className="social-links">
                <a href="mailto:pavansy2006@gmail.com" className="social-link">
                  <Mail size={20} />
                </a>
                <a href="https://linkedin.com/in/pavansyadav" className="social-link" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={20} />
                </a>
                <a href="https://github.com/pavansy6" className="social-link" target="_blank" rel="noopener noreferrer">
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section 
        ref={(el) => { sectionRefs.current[1] = el; }} 
        className="section"
      >
        <div className="container">
          <ShinyText className="section-title">Technical Skills</ShinyText>
          <div className="skills-grid">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <TitledCard key={index} title={
                  <span><IconComponent size={24} /> {skill.category}</span>
                }>
                  <div className="skill-items">
                    {skill.items.map((item, i) => (
                      <span key={i} className="skill-item">{item}</span>
                    ))}
                  </div>
                </TitledCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section 
        ref={(el) => { sectionRefs.current[2] = el; }} 
        className="section"
      >
        <div className="container">
          <ShinyText className="section-title">Experience</ShinyText>
          <div className="experience-card">
            <div className="experience-header">
              <div>
                <h3 className="experience-title">{experience.title}</h3>
                <div className="experience-company">{experience.company}</div>
                <div className="experience-meta">
                  <span><Calendar size={16} /> {experience.period}</span>
                  <span><MapPin size={16} /> {experience.location}</span>
                </div>
              </div>
            </div>
            <ul className="experience-description">
              {experience.description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          
          <TitledCard title={<span><Award size={24} /> Certifications & Achievements</span>}>
            <div className="certifications-list">
              {certifications.map((cert, index) => (
                <div key={index} className="certification-item">
                  <Award size={20} style={{ color: 'var(--accent-cyan)', flexShrink: 0 }} />
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </TitledCard>
        </div>
      </section>

      {/* Projects Section */}
      <section 
        ref={(el) => { sectionRefs.current[3] = el; }} 
        className="section"
      >
        <div className="container">
          <ShinyText className="section-title">Featured Projects</ShinyText>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <CardSwap
                key={index}
                front={
                  <div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-tech">{project.tech}</p>
                    <p className="project-description">{project.description}</p>
                    <div className="project-date">{project.date}</div>
                  </div>
                }
                back={
                  <div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-tech">{project.tech}</p>
                    <div style={{ marginBottom: '15px' }}>
                      <strong style={{ color: 'var(--accent-cyan)' }}>Key Highlights:</strong>
                    </div>
                    <ul className="project-highlights">
                      {project.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                    <div className="project-date">{project.date}</div>
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section 
        ref={(el) => { sectionRefs.current[4] = el; }} 
        className="section interests-section"
      >
        <div className="container">
          <ShinyText className="section-title">Interests</ShinyText>
          <div className="skills-grid">
            <TitledCard title={<span><Coins size={24} /> Quantitative Finance</span>}>
              <div className="card-content">
                <p>Exploring mathematical and statistical models to analyze and predict financial market behavior, with a focus on risk management and derivatives pricing.</p>
              </div>
            </TitledCard>
            <TitledCard title={<span><Handshake size={24} /> Algorithmic Trading</span>}>
              <div className="card-content">
                <p>Developing automated trading strategies using programming and data analysis to execute trades at high speeds, aiming for efficiency and profitability.</p>
              </div>
            </TitledCard>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p className="footer-text">Built with React • Designed with ❤️ by Pavan Yadav</p>
          <div className="social-links">
            <a href="mailto:pavansy2006@gmail.com" className="social-link">
              <Mail size={18} />
            </a>
            <a href="https://www.instagram.com/pavansyadav_/" className="social-link" target="_blank" rel="noopener noreferrer">
              <Instagram size={18} />
            </a>
            <a href="https://github.com/pavansy6" className="social-link" target="_blank" rel="noopener noreferrer">
              <Github size={18} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;