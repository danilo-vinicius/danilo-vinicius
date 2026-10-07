import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../../context/ThemeContext';
import './ThemeFloater.css';

export const ThemeFloater = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className="theme-floater"
      onClick={toggleTheme}
      title={theme === 'dark' ? 'Mudar para modo claro' : 'Mudar para modo escuro'}
      aria-label="Alternar Tema"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          toggleTheme();
        }
      }}
    >
      <FontAwesomeIcon icon={theme === 'dark' ? faMoon : faSun} />
    </div>
  );
};

export default ThemeFloater;
