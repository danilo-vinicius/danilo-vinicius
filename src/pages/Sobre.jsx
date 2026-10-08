import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBriefcase,
  faGraduationCap,
  faFileDownload
} from '@fortawesome/free-solid-svg-icons';
import Lanyard from '../components/Lanyard/Lanyard';
import Timeline from '../components/Timeline/Timeline';
import MagneticPullSection from '../components/MagneticPullSection/MagneticPullSection';
import { statsData } from '../data/statsData';
import { experienceData, educationData, skillsData } from '../data/experienceData';
import { getIcon } from '../utils/iconHelper';

import cardBackSvg from '../assets/card-back.svg';
import strapPatternSvg from '../assets/strap-pattern.svg';
import profilePhoto from '../assets/foto.jpg';

import './Sobre.css';

export const Sobre = () => {
  const heroImageRef = useRef(null);

  return (
    <div className="sobre-page-container">
      <div className="sobre-lanyard-overlay">
        <Lanyard
          targetRef={heroImageRef}
          frontImage={profilePhoto}
          backImage={cardBackSvg}
          strapImage={strapPatternSvg}
          cardColor="#0F172A"
          metal="gold"
          finish="metallic"
          gravity={1}
          breeze={0.6}
        />
      </div>

      <div className="sobre-page">
        {/* Hero Section */}
        <MagneticPullSection id="sobre-hero">
          <div className="hero-container">
            <div className="hero-image" ref={heroImageRef}>
              <div className="hero-lanyard-placeholder" />
            </div>

            <div className="hero-text">
              <span className="badge-gold">Data Scientist & BI Analyst</span>
              <h1>Construindo inteligência através dos dados</h1>
              <p>
                Especialista em <strong>Engenharia de Dados</strong> e <strong>Business Intelligence</strong> com trajetória profissional focada em transformar volumes complexos de informação em valor estratégico. Iniciei na <strong>EBSERH</strong> transformando bases brutas em indicadores operacionais, consolidei a atuação com BI na <strong>Presidência da República</strong> e atuei na <strong>Brasfort</strong> em Segurança Eletrônica como Técnico de Suporte & Dados.
              </p>
              <p>
                Atualmente na <strong>Brasfort</strong>, fui promovido a <strong>Analista de Sistemas</strong> no <strong>Setor de Processos e Performance</strong> (Diretoria de Inovação e Processos), atuando na criação de dashboards para análises técnicas e estratégicas, revisão e construção de processos corporativos e desenvolvimento de automações.
              </p>

              <div className="hero-btns">
                <a
                  href="https://github.com/user-attachments/files/24245381/Danilo.Vinicius.Bastos.Torres.docx.1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <FontAwesomeIcon icon={faFileDownload} className="btn-icon" />
                  Download CV
                </a>
                <Link to="/contato" className="btn-outline">
                  Entre em contato
                </Link>
              </div>
            </div>
          </div>
        </MagneticPullSection>

        {/* Stats Bar */}
        <MagneticPullSection id="stats-bar">
          {statsData.map((stat) => (
            <div key={stat.id} className="stat-item">
              <h2>{stat.value}</h2>
              <p>{stat.label}</p>
            </div>
          ))}
        </MagneticPullSection>

        <hr className="section-divider" />

        {/* Trajetória Profissional */}
        <MagneticPullSection id="experiencia">
          <h2 className="section-title">
            <FontAwesomeIcon icon={faBriefcase} /> Trajetória Profissional
          </h2>
          <Timeline items={experienceData} type="experience" />
        </MagneticPullSection>

        <hr className="section-divider" />

        {/* Formação Acadêmica */}
        <MagneticPullSection id="formacao">
          <h2 className="section-title">
            <FontAwesomeIcon icon={faGraduationCap} /> Formação Acadêmica
          </h2>
          <Timeline items={educationData} type="education" />
        </MagneticPullSection>

        <hr className="section-divider" />

        {/* Skills & Dock */}
        <MagneticPullSection id="skills">
          <div className="skills-intro">
            <h2 className="section-title">Tech Stack & Aprendizado</h2>
            <p className="skills-desc">
              Conjunto de ferramentas e metodologias focadas em <strong>autonomia</strong> e{' '}
              <strong>escalabilidade</strong> para construir pipelines eficientes e análises consistentes.
            </p>

            <div className="skills-tags">
              <span className="tag">Visualização de Dados</span>
              <span className="tag">Engenharia de Dados (ETL)</span>
              <span className="tag">Automação de Processos</span>
              <span className="tag">Scripting Avançado</span>
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
        </MagneticPullSection>
      </div>
    </div>
  );
};

export default Sobre;
