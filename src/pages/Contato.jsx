import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedinIn,
  faGithub,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons';
import Footer from '../components/Footer/Footer';
import './Contato.css';

const contactChannels = [
  {
    id: 'linkedin',
    title: 'LinkedIn',
    subtitle: 'Perfil profissional & conexões',
    actionText: 'Conectar',
    icon: faLinkedinIn,
    url: 'https://www.linkedin.com/in/danilovin%C3%ADcius57/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BKuukIoe7T2uxes8IaoRASw%3D%3D',
    target: '_blank'
  },
  {
    id: 'github',
    title: 'GitHub',
    subtitle: 'Repositórios & códigos',
    actionText: 'Ver Código',
    icon: faGithub,
    url: 'https://github.com/danilo-vinicius',
    target: '_blank'
  },
  {
    id: 'email',
    title: 'E-mail',
    subtitle: 'danilovinicius570@gmail.com',
    actionText: 'Enviar E-mail',
    icon: faEnvelope,
    url: 'mailto:danilovinicius570@gmail.com',
    target: '_self'
  },
  {
    id: 'whatsapp',
    title: 'WhatsApp',
    subtitle: 'Conversa direta e ágil',
    actionText: 'Conversar',
    icon: faWhatsapp,
    url: 'https://wa.me/5561984853715',
    target: '_blank'
  }
];

export const Contato = () => {
  return (
    <div className="contato-page-wrapper">
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        aria-label="Canais de contato"
      >
        <div className="contact-header">
          <h1 className="contact-title">
            Vamos transformar dados em{' '}
            <span className="contact-title-highlight">resultados</span>?
          </h1>

          <p className="contact-description">
            Estou disponível para novas oportunidades, projetos desafiadores e consultorias em{' '}
            <strong>Engenharia de Dados</strong>, <strong>Business Intelligence</strong> e{' '}
            <strong>Automações</strong>. Conecte-se comigo por um dos canais abaixo:
          </p>
        </div>

        <div className="contact-cards-grid">
          {contactChannels.map((channel, index) => (
            <motion.a
              key={channel.id}
              href={channel.url}
              target={channel.target || '_blank'}
              rel={channel.target === '_blank' ? 'noopener noreferrer' : undefined}
              className="contact-card"
              aria-label={channel.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="contact-card-icon-box">
                <FontAwesomeIcon icon={channel.icon} />
              </div>

              <div className="contact-card-info">
                <h3 className="contact-card-title">{channel.title}</h3>
                <p className="contact-card-subtitle">{channel.subtitle}</p>
              </div>

              <div className="contact-card-action">
                <span>{channel.actionText}</span>
                <span className="contact-arrow" aria-hidden="true">↗</span>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default Contato;

