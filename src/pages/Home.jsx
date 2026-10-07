import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Typewriter from '../components/Typewriter/Typewriter';
import TechTicker from '../components/TechTicker/TechTicker';
import GradientWaves from '../components/GradientWaves/GradientWaves';
import { useTheme } from '../context/ThemeContext';
import './Home.css';

export const Home = () => {
  const { theme } = useTheme();

  // Paleta de cores respeitando o tema da aplicação (Escuro vs Claro)
  const isLight = theme === 'light';
  const horizonColor = isLight ? '#E2E8F0' : '#161E31';
  const waveColor = isLight ? '#94A3B8' : '#1F2A44';
  const crestColor = isLight ? '#B4925A' : '#C6A46E';

  return (
    <section id="home-hero" aria-label="Apresentação principal">
      <GradientWaves
        horizonColor={horizonColor}
        waveColor={waveColor}
        crestColor={crestColor}
        speed={0.3}
        amplitude={2.0}
        waveScale={0.5}
        waveRatio={0.8}
        swell={25}
        turbulence={15}
        tilt={1.1}
        zoom={1.0}
        height={4.5}
        fogDepth={18}
        detail="medium"
        brightness={isLight ? 1.0 : 0.85}
        opacity={isLight ? 0.85 : 0.75}
        mouseInteraction={true}
        parallaxStrength={0.4}
        grain={true}
        grainIntensity={0.03}
      />

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
