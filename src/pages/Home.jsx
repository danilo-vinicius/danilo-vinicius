import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Typewriter from '../components/Typewriter/Typewriter';
import TechTicker from '../components/TechTicker/TechTicker';
import AeroShards from '../components/AeroShards/AeroShards';
import { useTheme } from '../context/ThemeContext';
import './Home.css';

export const Home = () => {
  const { theme } = useTheme();

  // Paleta de cores respeitando o tema da aplicação (Escuro vs Claro)
  const isLight = theme === 'light';
  const backgroundColor = isLight ? '#F8FAFC' : '#161E31';
  const shardColor = isLight ? '#CBD5E1' : '#1F2A44';
  const accentColor = isLight ? '#B4925A' : '#C6A46E';

  return (
    <section id="home-hero" aria-label="Apresentação principal">
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }}>
        <AeroShards
          backgroundColor={backgroundColor}
          shardColor={shardColor}
          accentColor={accentColor}
          placement="full"
          flow="stream"
          material="pearl"
          detail="balanced"
          effect="none"
          scale={1}
          spread={1}
          depth={1}
          speed={0.15}
          spin={1}
          interaction="repel"
          density={1.5}
          shardSize={1.1}
          stretch={1}
          turbulence={1}
          glow={1}
          edgeSoftness={2}
          bloom={0.5}
          grain={0.05}
          chromaticAberration={0.0075}
          transitionDuration={1}
          interactionRadius={1.5}
          interactionStrength={0.5}
          rippleIntensity={1}
          holdToGather={true}
        />
      </div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <span className="badge-gold">Data Analyst & BI Specialist</span>

        <h1>
          Olá, eu sou <span className="text-highlight">Danilo Vinícius</span>
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
