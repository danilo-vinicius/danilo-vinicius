import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Typewriter from '../components/Typewriter/Typewriter';
import TechTicker from '../components/TechTicker/TechTicker';
import './Home.css';

export const Home = () => {
  return (
    <section id="home-hero" aria-label="Apresentação principal">
      <div className="hero-bg-overlay" aria-hidden="true" />

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <span className="badge-gold">Data Analyst & BI Specialist</span>

        <h1>
          Danilo Vinícius <br />
          <span className="text-highlight">Engenharia & Análise de Dados</span>
        </h1>

        <Typewriter />

        <p className="hero-description">
          Transformo dados brutos em <strong>insights valiosos</strong>, desenvolvo{' '}
          <strong>painéis executivos</strong> interativos e automatizo{' '}
          <strong>processos operacionais</strong> para acelerar a tomada de decisão estratégica.
        </p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Link to="/projetos" className="btn-primary-lg">
            Ver Portfólio de Dados
          </Link>
          <Link to="/sobre" className="btn-outline-lg">
            Sobre Mim
          </Link>
        </motion.div>
      </motion.div>

      <TechTicker />
    </section>
  );
};

export default Home;
