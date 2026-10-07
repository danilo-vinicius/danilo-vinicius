import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import Carousel from '../components/Carousel/Carousel';
import ProjectFilter from '../components/ProjectFilter/ProjectFilter';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import Pagination from '../components/Pagination/Pagination';
import { projectsData, servicesData, workProcessData } from '../data/projectsData';
import { getIcon } from '../utils/iconHelper';
import './Projetos.css';

export const Projetos = () => {
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

  return (
    <div className="projetos-page">
      {/* Project Hero Section */}
      <motion.section
        id="proj-hero"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="proj-hero-content">
          <span className="badge-gold">Catálogo de Soluções</span>

          <h1>
            Soluções de{' '}
            <span className="text-highlight">Impacto Real</span>
          </h1>

          <p>
            Este portfólio vai além do código. Aqui apresento cases práticos onde
            utilizei a inteligência de dados para{' '}
            <strong>automatizar rotinas manuais</strong>, reduzir custos e eliminar a
            incerteza da tomada de decisão.
          </p>

          <div className="hero-buttons">
            <a href="#portfolio" className="btn-scroll-down">
              Explorar Cases{' '}
              <FontAwesomeIcon icon={faArrowDown} style={{ marginLeft: '8px' }} />
            </a>
          </div>
        </div>
      </motion.section>

      {/* Services Carousel Section */}
      <motion.section
        id="services"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-header">
          <h2>O Que Posso Fazer Por Você?</h2>
          <p>Soluções focadas em transformar dados em resultado.</p>
        </div>
        <Carousel items={servicesData} />
      </motion.section>

      {/* Work Process / Pipeline Section */}
      <motion.section
        id="work-process"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-header">
          <h2>Metodologia & Pipeline</h2>
          <p>
            Do entendimento do negócio à entrega de valor: meu fluxo de trabalho
            ponta a ponta.
          </p>
        </div>

        <div className="process-container">
          <div className="process-line" />

          {workProcessData.map((proc) => (
            <motion.div
              key={proc.step}
              className="process-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: proc.step * 0.1 }}
            >
              <div className="process-icon">
                <FontAwesomeIcon icon={getIcon(proc.icon)} />
              </div>
              <div className="process-content">
                <h3>
                  {proc.step}. {proc.title}
                </h3>
                <h4>{proc.subtitle}</h4>
                <p>{proc.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <hr className="section-divider" />

      {/* Portfolio Showcase Section */}
      <motion.section
        id="portfolio"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="portfolio-header">
          <h2>Catálogo de Soluções</h2>
          <p className="portfolio-sub">
            Navegue pelos projetos focados em resolver problemas reais.
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
