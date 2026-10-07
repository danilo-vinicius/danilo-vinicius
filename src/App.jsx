import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import ThemeFloater from './components/ThemeFloater/ThemeFloater';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import Typewriter from './components/Typewriter/Typewriter';
import TechTicker from './components/TechTicker/TechTicker';
import ProjectCard from './components/ProjectCard/ProjectCard';
import ProjectFilter from './components/ProjectFilter/ProjectFilter';
import Pagination from './components/Pagination/Pagination';
import Timeline from './components/Timeline/Timeline';
import Carousel from './components/Carousel/Carousel';

import { projectsData, servicesData } from './data/projectsData';
import { experienceData, educationData } from './data/experienceData';

export function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProjects = projectsData.filter((p) =>
    activeCategory === 'all' ? true : p.category === activeCategory
  );

  return (
    <Router>
      <ThemeProvider>
        <Navbar />
        <ThemeFloater />
        <main style={{ minHeight: '80vh', padding: '100px 20px 40px' }}>
          <section style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h1>Danilo Vinícius | Data Analyst</h1>
            <Typewriter />
          </section>

          <section style={{ marginBottom: '60px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Carrossel de Serviços</h2>
            <Carousel items={servicesData} />
          </section>

          <section style={{ marginBottom: '60px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Catálogo de Projetos</h2>
            <ProjectFilter
              activeCategory={activeCategory}
              onSelectCategory={(cat) => {
                setActiveCategory(cat);
                setCurrentPage(1);
              }}
            />
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '30px',
                maxWidth: '1200px',
                margin: '0 auto'
              }}
            >
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={2}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </section>

          <section style={{ marginBottom: '60px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Trajetória Profissional</h2>
            <Timeline items={experienceData} type="experience" />
          </section>

          <section style={{ marginBottom: '60px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Formação Acadêmica</h2>
            <Timeline items={educationData} type="education" />
          </section>

          <TechTicker />
        </main>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
