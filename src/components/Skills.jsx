import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaPython, FaJava, FaReact, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiC, SiScikitlearn } from 'react-icons/si';
import { HiCode, HiDatabase, HiCog } from 'react-icons/hi';
import '../styles/Skills.css';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: <HiCode className="cat-icon" />,
    skills: [
      { name: 'HTML5', icon: <FaHtml5 style={{ color: '#e34f26' }} />, level: 'Advanced' },
      { name: 'CSS3', icon: <FaCss3Alt style={{ color: '#1572b6' }} />, level: 'Advanced' },
      { name: 'JavaScript', icon: <FaJsSquare style={{ color: '#f7df1e' }} />, level: 'Intermediate' },
      { name: 'React', icon: <FaReact style={{ color: '#61dafb' }} />, level: 'Intermediate' },
    ],
  },
  {
    title: 'Programming Languages',
    icon: <HiDatabase className="cat-icon" />,
    skills: [
      { name: 'Python', icon: <FaPython style={{ color: '#3776ab' }} />, level: 'Intermediate' },
      { name: 'Java', icon: <FaJava style={{ color: '#ed8b00' }} />, level: 'Intermediate' },
      { name: 'C', icon: <SiC style={{ color: '#a8b9cc' }} />, level: 'Intermediate' },
    ],
  },
  {
    title: 'Tools & Others',
    icon: <HiCog className="cat-icon" />,
    skills: [
      { name: 'Git', icon: <FaGitAlt style={{ color: '#f05032' }} />, level: 'Intermediate' },
      { name: 'GitHub', icon: <FaGithub style={{ color: '#f0f0f5' }} />, level: 'Intermediate' },
      { name: 'ML', icon: <SiScikitlearn style={{ color: '#f7931e' }} />, level: 'Beginner' },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <div className="bg-glow" />
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Skills & Technologies</span>
          <h2 className="section-title">My Tech Arsenal</h2>
          <p className="section-subtitle">Technologies I've been working with and continuously learning</p>
        </motion.div>

        {skillCategories.map((category, catIdx) => (
          <div className="skills-category" key={catIdx}>
            <motion.div
              className="skills-category-title"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {category.icon}
              {category.title}
            </motion.div>
            <motion.div
              className="skills-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              {category.skills.map((skill, idx) => (
                <motion.div
                  className="skill-card glass-card"
                  key={idx}
                  variants={cardVariants}
                >
                  <span className="skill-icon">{skill.icon}</span>
                  <div className="skill-name">{skill.name}</div>
                  <div className="skill-level">{skill.level}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
