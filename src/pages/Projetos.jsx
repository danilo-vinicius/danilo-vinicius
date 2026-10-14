import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../context/ThemeContext';
import ProjectFilter from '../components/ProjectFilter/ProjectFilter';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import Pagination from '../components/Pagination/Pagination';
import PixelBlast from '../components/PixelBlast/PixelBlast';
import DashboardMockup from '../components/DashboardMockup/DashboardMockup';
import { projectsData, servicesData, workProcessData } from '../data/projectsData';
import { getIcon } from '../utils/iconHelper';
import './Projetos.css';

export const Projetos = () => {
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

  const filteredProjects = projectsData.filter((p) =>
    activeCategory === 'all' ? true : p.category === activeCategory
  );

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const displayedProjects = filteredProjects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  );

  const handleCategorySelect = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const scrollToPortfolio = (e) => {
    e.preventDefault();
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="projetos-page">
      {/* SEÇÃO 1: Hero Section (Split Bipartida com PixelBlast) */}
      <section id="proj-hero" className="proj-hero-section">
        {/* Fundo Interativo PixelBlast (React Bits) */}
        <div className="proj-hero-pixelblast-bg">
          <PixelBlast
            variant="circle"
            pixelSize={6}
            color={theme === 'light' ? '#0284C7' : '#38BDF8'}
            patternScale={3}
            patternDensity={1.1}
            pixelSizeJitter={0.4}
            enableRipples
            rippleSpeed={0.4}
            rippleThickness={0.12}
            rippleIntensityScale={1.4}
            liquid
            liquidStrength={0.1}
            liquidRadius={1.2}
            liquidWobbleSpeed={4.8}
            speed={0.45}
            edgeFade={0.3}
            transparent
          />
        </div>

        <div className="proj-hero-container">
          <div className="proj-hero-split-grid">
            {/* Coluna da Esquerda: Conteúdo textual */}
            <motion.div
              className="proj-hero-text-col"
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="proj-hero-tag">
                CATÁLOGO DE SOLUÇÕES
              </div>

              <h1 className="proj-hero-title">
                Soluções de <span className="proj-hero-title-highlight">Impacto Real</span>
              </h1>

              <p className="proj-hero-desc">
                Este portfólio vai além do código. Aqui apresento cases práticos onde
                utilizei a inteligência de dados para <strong>automatizar rotinas manuais</strong>,{' '}
                reduzir custos e <strong>eliminar a incerteza da tomada de decisão</strong>.
              </p>

              <div className="proj-hero-actions">
                <a href="#portfolio" className="btn-hero-primary" onClick={scrollToPortfolio}>
                  Explorar Cases
                  <FontAwesomeIcon icon={faArrowDown} className="btn-arrow-icon" />
                </a>
              </div>
            </motion.div>

            {/* Coluna da Direita: Elemento Visual / Preview de Dashboard */}
            <motion.div
              className="proj-hero-visual-col"
              initial={{ opacity: 0, x: 35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <DashboardMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2: Pilares de Atuação (Grid de 3 Colunas) */}
      <motion.section
        id="services"
        className="services-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-header">
          <span className="section-pill-tag">PILARES DE ATUAÇÃO</span>
          <h2>O Que Posso Fazer Por Você?</h2>
          <p>Soluções focadas em transformar grandes volumes de dados em inteligência e resultado.</p>
        </div>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              className="service-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <div className="service-icon-box">
                <FontAwesomeIcon icon={getIcon(service.icon)} />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-tags">
                {service.tags.map((tag, idx) => (
                  <span key={idx} className="service-tag-pill">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* SEÇÃO 3: Metodologia & Pipeline (Fluxo Contínuo / Stepper) */}
      <motion.section
        id="work-process"
        className="pipeline-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-header">
          <span className="section-pill-tag">FLUXO DE TRABALHO</span>
          <h2>Metodologia &amp; Pipeline</h2>
          <p>
            Do entendimento do negócio à entrega de valor: meu fluxo de trabalho ponta a ponta.
          </p>
        </div>

        <div className="pipeline-stepper-container">
          <div className="pipeline-grid">
            {workProcessData.map((proc, index) => (
              <motion.div
                key={proc.step}
                className="pipeline-step-card"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="pipeline-step-top">
                  <span className="pipeline-step-num">0{proc.step}</span>
                  <div className="pipeline-step-icon">
                    <FontAwesomeIcon icon={getIcon(proc.icon)} />
                  </div>
                </div>

                <div className="pipeline-step-body">
                  <span className="pipeline-step-phase">{proc.title}</span>
                  <h3 className="pipeline-step-title">{proc.subtitle}</h3>
                  <p className="pipeline-step-desc">{proc.description}</p>
                </div>

                {index < workProcessData.length - 1 && (
                  <div className="pipeline-connector-indicator" aria-hidden="true" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* SEÇÃO 4: Portfolio Showcase Section */}
      <motion.section
        id="portfolio"
        className="portfolio-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="portfolio-header">
          <span className="section-pill-tag">CASES PRÁTICOS</span>
          <h2>Catálogo de Soluções</h2>
          <p className="portfolio-sub">
            Navegue pelos projetos focados em resolver problemas reais de ponta a ponta.
          </p>

          <ProjectFilter
            activeCategory={activeCategory}
            onSelectCategory={handleCategorySelect}
          />
        </div>

        <div className="projects-grid-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeCategory}-${currentPage}`}
              className="projects-grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {displayedProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          </AnimatePresence>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </motion.section>
    </div>
  );
};

export default Projetos;
