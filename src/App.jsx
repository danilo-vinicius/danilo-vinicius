import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import ThemeFloater from './components/ThemeFloater/ThemeFloater';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

export function App() {
  return (
    <Router>
      <ThemeProvider>
        <Navbar />
        <ThemeFloater />
        <main style={{ minHeight: '80vh', padding: '100px 20px 40px' }}>
          <h1>Danilo Vinícius | Data Analyst</h1>
        </main>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
