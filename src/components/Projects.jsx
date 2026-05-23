import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import '../styles/Projects.css';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with React and Framer Motion. Features smooth animations, dark theme, and a clean design to showcase projects and skills.',
    tags: ['React', 'CSS3', 'Framer Motion'],
    github: 'https://github.com/Anubhav-bharadwaj/Portfolio',
    live: 'https://anubhavbharadwaj.vercel.app/',
    icon: '🌐',
  },
  {
    title: 'MAISON — Curated Objects',
    description: 'MAISON is a modern luxury e-commerce platform offering curated home décor and designer lifestyle pieces with an elegant shopping experience and minimalist aesthetics.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/Anubhav-bharadwaj/E-commerce',
    live: 'https://buyit-ecommerce-lac-five.vercel.app/',
    icon: '🛒',
  },
  {
    title: 'AgroVision',
    description: 'AgroVision is a smart agriculture platform designed to enhance modern farming through technology-driven insights, crop management, and sustainable agricultural solutions.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Python'],
    github: 'https://github.com/Anubhav-bharadwaj/AgroVision-Frontend',
    live: 'https://agro-vision-detect-blue.vercel.app/',
    icon: '🍃',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <div className="bg-glow" />
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Projects</span>
          <h2 className="section-title">Featured Work</h2>
          <p className="section-subtitle">Some of the projects I've built and contributed to</p>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {projects.map((project, idx) => (
            <motion.div
              className="project-card glass-card"
              key={idx}
              variants={cardVariants}
            >
              <div className="project-thumbnail">
                <div className="project-thumbnail-gradient" />
                <div className="project-thumbnail-icon">{project.icon}</div>
              </div>
              <div className="project-body">
                <div className="project-tags">
                  {project.tags.map((tag, tIdx) => (
                    <span className="project-tag" key={tIdx}>{tag}</span>
                  ))}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaGithub /> Code
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
