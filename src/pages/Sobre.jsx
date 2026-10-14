import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGraduationCap,
  faFileDownload,
  faCogs,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import Lanyard from '../components/Lanyard/Lanyard';
import Timeline from '../components/Timeline/Timeline';
import TimelineBlock01 from '../components/ui/timeline-01';
import PerspectiveSection from '../components/PerspectiveSection/PerspectiveSection';
import { statsData } from '../data/statsData';
import { experienceData, educationData, specialtiesData } from '../data/experienceData';
import { getIcon } from '../utils/iconHelper';

import cardBackSvg from '../assets/card-back.svg';
import strapPatternSvg from '../assets/strap-pattern.svg';
import profilePhoto from '../assets/foto.jpg';

import './Sobre.css';

export const Sobre = () => {
  const heroImageRef = useRef(null);
  const totalSections = 4;

  return (
    <div className="sobre-page-container">
      <div className="sobre-lanyard-overlay">
        <Lanyard
          targetRef={heroImageRef}
          frontImage={profilePhoto}
          backImage={cardBackSvg}
          strapImage={strapPatternSvg}
          strapColor="#6366F1"
          cardColor="#0F172A"
          metal="silver"
          finish="metallic"
          gravity={1}
          breeze={0.6}
        />
      </div>

      <div className="sobre-page">
        {/* SEÇÃO 1: Apresentação & KPIs */}
        <PerspectiveSection index={0} total={totalSections} id="secao-1-apresentacao" stickyTop={70}>
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

          {/* Stats / KPIs Bar integrados na Seção 1 */}
          <div className="stats-bar-container">
            <div className="stats-bar">
              {statsData.map((stat) => (
                <div key={stat.id} className="stat-item">
                  <h2>{stat.value}</h2>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </PerspectiveSection>

        {/* SEÇÃO 2: Trajetória Profissional */}
        <PerspectiveSection index={1} total={totalSections} id="secao-2-experiencia" stickyTop={70}>
          <TimelineBlock01 items={experienceData} />
        </PerspectiveSection>

        {/* SEÇÃO 3: Formação Acadêmica */}
        <PerspectiveSection index={2} total={totalSections} id="secao-3-formacao" stickyTop={70}>
          <h2 className="section-title">
            <FontAwesomeIcon icon={faGraduationCap} /> Formação Acadêmica
          </h2>
          <Timeline items={educationData} type="education" />
        </PerspectiveSection>

        {/* SEÇÃO 4: Especialidades Técnicas & Domínio */}
        <PerspectiveSection index={3} total={totalSections} id="secao-4-especialidades" stickyTop={70}>
          <div className="specialties-header">
            <span className="badge-gold">Domínio Técnico & Especialidades</span>
            <h2 className="section-title">
              <FontAwesomeIcon icon={faCogs} /> Pilares de Atuação
            </h2>
            <p className="specialties-desc">
              Como entrego valor na prática: unindo <strong>engenharia de dados robusta</strong>,{' '}
              <strong>visão analítica estratégica</strong> e <strong>automação de processos</strong> para alavancar a tomada de decisão.
            </p>
          </div>

          <div className="specialties-grid">
            {specialtiesData.map((spec) => (
              <div key={spec.id} className="specialty-card">
                <div className="specialty-card-top">
                  <div className="specialty-icon-wrapper">
                    <FontAwesomeIcon icon={getIcon(spec.icon)} />
                  </div>
                  <span className="specialty-badge">{spec.badge}</span>
                </div>

                <h3 className="specialty-title">{spec.title}</h3>
                <p className="specialty-description">{spec.description}</p>

                <div className="specialty-skills">
                  <span className="specialty-skills-title">Competências & Ferramentas</span>
                  <ul className="specialty-skills-list">
                    {spec.skills.map((skill, idx) => (
                      <li key={idx} className="specialty-skill-item">
                        <span className="skill-dot" />
                        <div className="skill-content">
                          <strong className="skill-name">{skill.name}</strong>
                          <span className="skill-role">{skill.role}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Bloco de Fechamento / Call to Action */}
          <div className="sobre-cta-card">
            <div className="sobre-cta-content">
              <div className="sobre-cta-text">
                <h3>Quer ver essas soluções aplicadas na prática?</h3>
                <p>
                  Explore meus cases e dashboards no catálogo de projetos ou entre em contato para trocar ideias.
                </p>
              </div>
              <div className="sobre-cta-actions">
                <Link to="/projetos" className="btn-primary">
                  Ver Portfólio de Projetos
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>
                <Link to="/contato" className="btn-outline">
                  Iniciar Conversa
                </Link>
              </div>
            </div>
          </div>
        </PerspectiveSection>
      </div>
    </div>
  );
};

export default Sobre;
