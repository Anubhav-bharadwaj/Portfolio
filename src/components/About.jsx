import { motion } from 'framer-motion';
import '../styles/About.css';

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="bg-glow" />
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">About Me</span>
          <h2 className="section-title">Turning Ideas Into Code</h2>
          <p className="section-subtitle">A glimpse into who I am and what drives me</p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-image-side"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="about-image-wrapper">
              <div className="about-image-box">
                <div className="about-code-display">
                  <div><span className="code-keyword">const</span> <span className="code-prop">anubhav</span> = <span className="code-bracket">{'{'}</span></div>
                  <div>&nbsp;&nbsp;<span className="code-prop">role</span>: <span className="code-string">"CSE Student"</span>,</div>
                  <div>&nbsp;&nbsp;<span className="code-prop">passion</span>: <span className="code-string">"Web Dev & AI"</span>,</div>
                  <div>&nbsp;&nbsp;<span className="code-prop">location</span>: <span className="code-string">"Lucknow, IN"</span>,</div>
                  <div>&nbsp;&nbsp;<span className="code-prop">year</span>: <span className="code-string">"2nd Year"</span>,</div>
                  <div>&nbsp;&nbsp;<span className="code-prop">loves</span>: <span className="code-bracket">[</span></div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">"Building UIs"</span>,</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">"Data Science"</span>,</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">"Problem Solving"</span></div>
                  <div>&nbsp;&nbsp;<span className="code-bracket">]</span></div>
                  <div><span className="code-bracket">{'}'}</span>;</div>
                </div>
              </div>
              <div className="about-accent-shape" />
            </div>
          </motion.div>

          <motion.div
            className="about-text-side"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3>A curious mind with a love for <span className="gradient-text">technology</span></h3>
            <p>
              I'm Anubhav Bharadwaj, a 2nd-year B.Tech Computer Science student at Integral University, Lucknow. 
              With a strong foundation in both front-end and back-end technologies, I enjoy crafting seamless digital 
              experiences that blend aesthetics with functionality.
            </p>
            <p>
              My journey in tech started with curiosity about how websites work, and has evolved into a deep passion 
              for full-stack development, data science, and artificial intelligence. I'm constantly exploring new 
              technologies and building projects that solve real-world problems.
            </p>
            <p>
              When I'm not coding, you'll find me exploring the latest in AI research, contributing to open-source 
              projects, or learning new frameworks and tools to expand my skill set.
            </p>

            <div className="about-stats">
              <div className="about-stat">
                <div className="about-stat-number">8+</div>
                <div className="about-stat-label">Technologies</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-number">1+</div>
                <div className="about-stat-label">Internship</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-number">3+</div>
                <div className="about-stat-label">Projects</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
