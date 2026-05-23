import { motion } from 'framer-motion';
import { HiAcademicCap } from 'react-icons/hi';
import '../styles/Education.css';

const educationData = [
  {
    degree: 'B.Tech in Computer Science & Engineering',
    school: 'Integral University, Lucknow',
    year: '2024 - 2028',
    description: 'Currently in 2nd year. Pursuing specialization with focus on Full Stack Development, Data Science, and Artificial Intelligence.',
  },
  {
    degree: 'Senior Secondary Education (Class XII)',
    school: 'City Montessori School',
    year: 'Graduated 2024 — 93%',
    description: 'Completed senior secondary education with distinction, building a strong academic foundation in science and mathematics.',
  },
  {
    degree: 'Secondary Education (Class X)',
    school: 'City Montessori School',
    year: 'Graduated 2022 — 96.2%',
    description: 'Achieved outstanding academic performance with 96.2%, demonstrating a strong grasp of core subjects.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Education = () => {
  return (
    <section className="education section" id="education">
      <div className="bg-glow" />
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Education</span>
          <h2 className="section-title">Academic Journey</h2>
          <p className="section-subtitle">My educational background and qualifications</p>
        </motion.div>

        <motion.div
          className="education-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {educationData.map((edu, idx) => (
            <motion.div
              className="education-card glass-card"
              key={idx}
              variants={cardVariants}
            >
              <div className="education-icon-wrapper">
                <HiAcademicCap />
              </div>
              <div className="education-info">
                <div className="education-degree">{edu.degree}</div>
                <div className="education-school">{edu.school}</div>
                <div className="education-year">{edu.year}</div>
                <p className="education-description">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
