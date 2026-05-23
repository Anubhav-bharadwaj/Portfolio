import { motion } from 'framer-motion';
import '../styles/Experience.css';

const experiences = [
  {
    role: 'Front-end Development Intern',
    company: 'Cognifyz Technologies',
    period: 'March 2026 - April 2026',
    description: [
      'Developed responsive and interactive web interfaces using HTML, CSS, and JavaScript',
      'Collaborated with the development team to implement UI/UX designs',
      'Gained hands-on experience with modern front-end development practices',
      'Worked on real-world projects improving user experience and accessibility',
    ],
  },
];

const Experience = () => {
  return (
    <section className="experience section" id="experience">
      <div className="bg-glow" />
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Experience</span>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">My professional journey so far</p>
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, idx) => (
            <motion.div
              className="timeline-item"
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <div className="timeline-dot" />
              <div className="timeline-card glass-card">
                <div className="timeline-header">
                  <div className="timeline-role">{exp.role}</div>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <div className="timeline-company">{exp.company}</div>
                <div className="timeline-description">
                  <ul>
                    {exp.description.map((item, dIdx) => (
                      <li key={dIdx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
