import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedinIn,
  faGithub,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons';
import './Contato.css';

export const Contato = () => {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      aria-label="Canais de contato"
    >
      <div className="contact-header">
        <h3>Vamos transformar dados em resultados?</h3>

        <p>
          Estou em busca de oportunidades desafiadoras em{' '}
          <strong>Análise de Dados</strong>, <strong>Ciência de Dados</strong>,{' '}
          <strong>Engenharia de Dados (ETL)</strong> e{' '}
          <strong>Business Intelligence</strong>.
        </p>
        <p className="contact-subtext">
          Se você precisa de alguém para automatizar processos, criar painéis
          estratégicos ou descobrir insights ocultos, conecte-se comigo pelos canais
          abaixo.
        </p>
      </div>

      <div id="contact-link">
        <div className="icon-div-linkedin" title="LinkedIn">
          <a
            href="https://www.linkedin.com/in/danilovinícius57"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil no LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>

        <div className="icon-div-github" title="GitHub">
          <a
            href="https://github.com/danilo-vinicius"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil no GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>

        <div className="icon-div-email" title="Enviar E-mail">
          <a href="mailto:danilovinicius570@gmail.com" aria-label="Enviar E-mail">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>

        <div className="icon-div-wpp" title="WhatsApp">
          <a
            href="https://wa.me/5561984853715"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contato via WhatsApp"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Contato;
