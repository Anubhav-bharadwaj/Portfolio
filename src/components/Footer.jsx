import { FaGithub, FaLinkedinIn, FaInstagram, FaHeart } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">AB.</div>
          
          <div className="footer-socials">
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
          
          <p className="footer-text">
            © {new Date().getFullYear()} Anubhav Bharadwaj. Designed & Developed by Anubhav Bharadwaj.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
