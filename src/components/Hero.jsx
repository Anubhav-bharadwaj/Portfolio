import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaInstagram, FaArrowDown } from 'react-icons/fa';
import { HiCode, HiSparkles, HiAcademicCap } from 'react-icons/hi';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-particles">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="particle" />
        ))}
      </div>
      <div className="bg-glow glow-1" />
      <div className="bg-glow glow-2" />
      
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="hero-badge">
              <span className="dot" />
              Open to opportunities
            </div>
            
            <h1 className="hero-name">
              Hi, I'm <span className="gradient-text">Anubhav</span>
              <br />Bharadwaj
            </h1>
            
            <p className="hero-title">
              B.Tech CSE Student | Full Stack Web Development | Data Science & AI Enthusiast
            </p>
            
            <p className="hero-description">
              Passionate about building beautiful web experiences and exploring the frontiers of AI & Data Science. Currently pursuing B.Tech in Computer Science at Integral University.
            </p>
            
            <div className="hero-buttons">
              <a href="#projects" className="btn-primary">
                <span>View My Work</span>
                <FaArrowDown />
              </a>
              <a href="#contact" className="btn-outline">
                Get in Touch
              </a>
            </div>
            
            <div className="hero-socials">
              <a href="https://github.com/Anubhav-bharadwaj" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/anubhav-bharadwaj-3308ab347/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="https://www.instagram.com/anubhav.b.20_06?igsh=MXMwZHpsZTV4b3F4ZQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="hero-avatar-wrapper">
              <div className="hero-avatar-ring" />
              <div className="hero-avatar">
                <img src="/picture.jpeg" alt="Anubhav Bharadwaj" className="hero-avatar-img" />
              </div>
              
              <motion.div
                className="hero-float-card float-card-1"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <HiCode className="icon" style={{ color: '#7c3aed' }} />
                Full Stack Dev
              </motion.div>
              
              <motion.div
                className="hero-float-card float-card-2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <HiSparkles className="icon" style={{ color: '#06b6d4' }} />
                AI Enthusiast
              </motion.div>
              
              <motion.div
                className="hero-float-card float-card-3"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <HiAcademicCap className="icon" style={{ color: '#3b82f6' }} />
                B.Tech CSE
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
