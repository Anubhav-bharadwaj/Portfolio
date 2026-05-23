import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedinIn, FaGithub, FaInstagram, FaPaperPlane } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:anubhavbharadwaj.2006@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`;
    window.open(mailtoLink, '_blank');
  };

  return (
    <section className="contact section" id="contact">
      <div className="bg-glow glow-1" />
      <div className="bg-glow glow-2" />
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Contact</span>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">Feel free to reach out for collaborations or just a friendly chat</p>
        </motion.div>

        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
        >
          <div className="contact-info">
            <h3>Get in <span className="gradient-text">Touch</span></h3>
            <p>
              I'm always excited to connect with fellow developers, potential collaborators, and anyone interested 
              in technology. Whether you have a project idea, an opportunity, or just want to say hi — don't hesitate!
            </p>
            
            <div className="contact-methods">
              <a href="mailto:anubhavbharadwaj.2006@gmail.com" className="contact-method">
                <div className="contact-method-icon"><FaEnvelope /></div>
                <div className="contact-method-text">
                  <span className="contact-method-label">Email</span>
                  <span className="contact-method-value">anubhavbharadwaj.2006@gmail.com</span>
                </div>
              </a>
              
              <a href="https://www.linkedin.com/in/anubhav-bharadwaj-3308ab347/" target="_blank" rel="noopener noreferrer" className="contact-method">
                <div className="contact-method-icon"><FaLinkedinIn /></div>
                <div className="contact-method-text">
                  <span className="contact-method-label">LinkedIn</span>
                  <span className="contact-method-value">Anubhav Bharadwaj</span>
                </div>
              </a>
              
              <a href="https://github.com/Anubhav-bharadwaj" target="_blank" rel="noopener noreferrer" className="contact-method">
                <div className="contact-method-icon"><FaGithub /></div>
                <div className="contact-method-text">
                  <span className="contact-method-label">GitHub</span>
                  <span className="contact-method-value">Anubhav-bharadwaj</span>
                </div>
              </a>

              <div className="contact-method">
                <div className="contact-method-icon"><HiLocationMarker /></div>
                <div className="contact-method-text">
                  <span className="contact-method-label">Location</span>
                  <span className="contact-method-value">Lucknow, India</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper glass-card">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn-primary">
                <span>Send Message</span>
                <FaPaperPlane />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
