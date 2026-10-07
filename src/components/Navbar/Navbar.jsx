import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUser,
  faProjectDiagram,
  faEnvelope,
  faBars
} from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

export const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    };

    const handleMouseMove = (e) => {
      if (e.clientY < 100) {
        setIsHidden(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <header className="navbar-container">
      {/* Logo Fixa (Superior Esquerda) */}
      <div className={`fixed-logo ${isHidden ? 'nav-hidden' : ''}`}>
        <Link to="/">
          DV <span className="logo-accent">|</span> Data Analyst
        </Link>
      </div>

      {/* Menu Flutuante (Centro) */}
      <nav className={`floating-menu ${isHidden ? 'nav-hidden' : ''}`}>
        <div className="menu-links left-links">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            <FontAwesomeIcon icon={faHome} />
            <span>Home</span>
          </NavLink>
          <NavLink
            to="/sobre"
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            <FontAwesomeIcon icon={faUser} />
            <span>Sobre</span>
          </NavLink>
        </div>

        <div className="menu-center-icon">
          <FontAwesomeIcon icon={faBars} />
        </div>

        <div className="menu-links right-links">
          <NavLink
            to="/projetos"
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            <FontAwesomeIcon icon={faProjectDiagram} />
            <span>Projetos</span>
          </NavLink>
          <NavLink
            to="/contato"
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            <FontAwesomeIcon icon={faEnvelope} />
            <span>Contato</span>
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
