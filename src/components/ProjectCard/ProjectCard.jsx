import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faDownload, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { getIcon } from '../../utils/iconHelper';
import './ProjectCard.css';

export const ProjectCard = ({ project }) => {
  if (!project) return null;

  const {
    title,
    category,
    projectCat,
    description,
    tags = [],
    githubUrl,
    demoUrl,
    image,
    icon,
    bgClass
  } = project;

  const resolvedIcon = icon ? getIcon(icon) : faFolderOpen;

  return (
    <article className="project-card" data-category={category}>
      <div className="project-thumb">
        {image ? (
          <img src={image} alt={`Preview do projeto ${title}`} loading="lazy" />
        ) : (
          <div className={`thumb-placeholder ${bgClass || 'python-bg'}`}>
            <FontAwesomeIcon icon={resolvedIcon} />
          </div>
        )}
      </div>

      <div className="project-info">
        <div className="project-text-content">
          <div className="project-cat">{projectCat || category}</div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>

        <div className="project-bottom-block">
          {tags && tags.length > 0 && (
            <div className="tech-stack">
              {tags.map((tag, idx) => (
                <span key={idx}>{tag}</span>
              ))}
            </div>
          )}

          <div className="project-links">
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-link"
                aria-label={`Acessar demonstração do projeto ${title}`}
              >
                <FontAwesomeIcon icon={faPlay} />
                <span>Testar / Demo</span>
              </a>
            )}

            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn-link ${demoUrl ? 'sec' : ''}`}
                aria-label={`Ver código do projeto ${title} no GitHub`}
              >
                <FontAwesomeIcon icon={faGithub} />
                <span>{demoUrl ? 'Código' : 'Ver Código'}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
