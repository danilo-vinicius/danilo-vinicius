import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDatabase,
  faChartBar,
  faCode,
  faBrain
} from '@fortawesome/free-solid-svg-icons';
import { faPython, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { getIcon } from '../../utils/iconHelper';
import './TechTicker.css';

const defaultTechs = [
  { name: 'Python', icon: faPython },
  { name: 'SQL', icon: faDatabase },
  { name: 'Power BI', icon: faChartBar },
  { name: 'Pandas', icon: faCode },
  { name: 'Machine Learning', icon: faBrain },
  { name: 'Git', icon: faGitAlt }
];

export const TechTicker = ({ techs = defaultTechs, title = 'Tech Stack' }) => {
  // Duplicating the items so the continuous marquee scroll animation loops seamlessly
  const marqueeItems = [...techs, ...techs, ...techs, ...techs];

  return (
    <div className="tech-ticker-wrapper" aria-label="Faixa de tecnologias utilizadas">
      <div className="ticker-label">{title}</div>
      <div className="tech-ticker">
        <div className="ticker-track">
          {marqueeItems.map((tech, index) => (
            <span key={`${tech.name}-${index}`}>
              <FontAwesomeIcon icon={getIcon(tech.icon)} />
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechTicker;
