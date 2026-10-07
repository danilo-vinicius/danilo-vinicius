import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import ThemeFloater from './components/ThemeFloater/ThemeFloater';

export function App() {
  return (
    <ThemeProvider>
      <ThemeFloater />
      <main>
        <h1>Danilo Vinícius | Data Analyst</h1>
      </main>
    </ThemeProvider>
  );
}

export default App;
