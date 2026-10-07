import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBriefcase,
  faGraduationCap,
  faFileDownload
} from '@fortawesome/free-solid-svg-icons';
import Timeline from '../components/Timeline/Timeline';
import { statsData } from '../data/statsData';
import { experienceData, educationData, skillsData } from '../data/experienceData';
import { getIcon } from '../utils/iconHelper';
import './Sobre.css';

export const Sobre = () => {
  return (
    <div className="sobre-page">
      {/* Hero Section */}
      <motion.section
        id="sobre-hero"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-container">
          <div className="hero-image">
            <img
              src="https://github.com/user-attachments/assets/8465b79f-71aa-46ef-8746-ef12bceb366c"
              alt="Danilo Vinícius"
            />
          </div>

          <div className="hero-text">
            <span className="badge-gold">Data Scientist & BI Analyst</span>
            <h1>Dados: A base da minha trajetória</h1>
            <p>
              Minha carreira não migrou para a área de dados, ela{' '}
              <strong>começou nos dados</strong>. Iniciei na <strong>EBSERH</strong>{' '}
              transformando bases brutas em indicadores de progresso educacional e elevei
              o nível de complexidade atuando com BI estratégico na{' '}
              <strong>Presidência da República</strong>.
            </p>
            <p>
              Hoje, na <strong>Brasfort</strong>, utilizo essa expertise para
              revolucionar processos operacionais. Aplico <strong>Python</strong> e{' '}
              <strong>Power BI</strong> para criar soluções de automação e
              inteligência, provando na prática que a cultura <em>Data-Driven</em> gera
              valor em qualquer ambiente.
            </p>

            <div className="hero-btns">
              <a
                href="https://github.com/user-attachments/files/24245381/Danilo.Vinicius.Bastos.Torres.docx.1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <FontAwesomeIcon icon={faFileDownload} style={{ marginRight: '8px' }} />
                Download CV
              </a>
              <Link to="/contato" className="btn-outline">
                Entre em contato
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Stats Bar */}
      <motion.section
        id="stats-bar"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {statsData.map((stat) => (
          <div key={stat.id} className="stat-item">
            <h2>{stat.value}</h2>
            <p>{stat.label}</p>
          </div>
        ))}
      </motion.section>

      <hr className="section-divider" />

      {/* Trajetória Profissional */}
      <motion.section
        id="experiencia"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          <FontAwesomeIcon icon={faBriefcase} /> Trajetória Profissional
        </h2>
        <Timeline items={experienceData} type="experience" />
      </motion.section>

      <hr className="section-divider" />

      {/* Formação Acadêmica */}
      <motion.section
        id="formacao"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          <FontAwesomeIcon icon={faGraduationCap} /> Formação Acadêmica
        </h2>
        <Timeline items={educationData} type="education" />
      </motion.section>

      <hr className="section-divider" />

      {/* Skills & Dock */}
      <motion.section
        id="skills"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="skills-intro">
          <h2 className="section-title">Tech Stack & Aprendizado</h2>
          <p className="skills-desc">
            Minha caixa de ferramentas é focada em <strong>autonomia</strong> e{' '}
            <strong>escalabilidade</strong>. Não apenas conheço a sintaxe, mas entendo
            a arquitetura necessária para integrar essas tecnologias em soluções robustas.
          </p>

          <div className="skills-tags">
            <span className="tag">📊 Visualização de Dados</span>
            <span className="tag">⚙️ Engenharia de Dados (ETL)</span>
            <span className="tag">🤖 Automação de Processos</span>
            <span className="tag">🐍 Scripting Avançado</span>
          </div>
        </div>

        <div className="dock-wrapper">
          <div className="skills-dock">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                className="dock-item"
                style={{ '--sk-color': skill.color }}
              >
                <div className="dock-icon">
                  <FontAwesomeIcon icon={getIcon(skill.icon)} />
                </div>
                <div className="dock-label">
                  <strong>{skill.name}</strong>
                  <span>{skill.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Sobre;
