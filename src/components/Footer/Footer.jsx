import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-socials">
          <a
            href="https://www.linkedin.com/in/danilovinícius57"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a
            href="https://github.com/danilo-vinicius"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="mailto:danilovinicius570@gmail.com"
            title="Enviar E-mail"
            aria-label="E-mail"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
        <h4 className="footer-copyright">
          Desenvolvido por Danilo Vinícius &copy; 2025/2026
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
