import React, { useEffect, useRef } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar/Navbar';
import ThemeFloater from './components/ThemeFloater/ThemeFloater';

import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Projetos from './pages/Projetos';
import Contato from './pages/Contato';

// Helper component to scroll window to top on route change
function ScrollToTop({ lenisRef }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [pathname, lenisRef]);

  return null;
}

export function App() {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Inicialização do Lenis Smooth Scroll (Tutorial Olivier Larose)
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <ScrollToTop lenisRef={lenisRef} />
      <ThemeProvider>
        <div className="app-layout" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <ThemeFloater />
          <main style={{ flex: '1 0 auto' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/projetos" element={<Projetos />} />
              <Route path="/contato" element={<Contato />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
