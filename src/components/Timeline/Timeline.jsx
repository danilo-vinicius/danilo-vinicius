import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBuilding,
  faUniversity,
  faCalendarAlt,
  faCheckCircle,
  faGraduationCap,
  faBriefcase
} from '@fortawesome/free-solid-svg-icons';
import { getIcon } from '../../utils/iconHelper';
import './Timeline.css';

export const Timeline = ({ items = [], type = 'experience' }) => {
  if (!items || items.length === 0) return null;

  const isEducation =
    type === 'education' || items.some((item) => item.degree !== undefined);

  if (isEducation) {
    return (
      <div className="education-container" aria-label="Linha do tempo de formação acadêmica">
        {items.map((item) => (
          <div
            key={item.id || item.degree}
            className={`edu-card-premium ${item.isCurrent ? 'running' : 'completed'}`}
          >
            <div className="card-glow" />
            <div className="edu-header">
              <div className="edu-icon">
                <FontAwesomeIcon icon={getIcon(item.icon || 'fas fa-graduation-cap')} />
              </div>
              <div className={`edu-badge ${item.isCurrent ? '' : 'done'}`}>
                {item.status || (item.isCurrent ? 'Em Andamento' : 'Concluído')}
                {item.isCurrent && <span className="pulse" />}
              </div>
            </div>

            <div className="edu-content">
              <h3>{item.degree}</h3>
              {item.subtitle && <p className="edu-sub">{item.subtitle}</p>}
              <div className="edu-meta">
                {item.institution && (
                  <span>
                    <FontAwesomeIcon icon={faUniversity} /> {item.institution}
                  </span>
                )}
                {item.period && (
                  <span>
                    <FontAwesomeIcon icon={item.isCurrent ? faCalendarAlt : faCheckCircle} />{' '}
                    {item.period}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="timeline-container" aria-label="Linha do tempo de experiência profissional">
      {items.map((item) => (
        <div key={item.id || item.role} className="timeline-item">
          <div className="timeline-dot" />
          <div className="timeline-content">
            <div className="job-header">
              <h3>{item.role}</h3>
              {item.period && <span className="job-date">{item.period}</span>}
            </div>
            {item.company && (
              <h4 className="company">
                <FontAwesomeIcon icon={faBuilding} /> {item.company}
              </h4>
            )}
            {item.responsibilities && item.responsibilities.length > 0 && (
              <ul>
                {item.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
