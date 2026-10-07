import React from 'react';
import './ProjectFilter.css';

const defaultCategories = [
  { id: 'all', label: 'Todos' },
  { id: 'powerbi', label: 'Power BI' },
  { id: 'python', label: 'Automação (Python)' },
  { id: 'sql', label: 'Engenharia de Dados' }
];

export const ProjectFilter = ({
  categories = defaultCategories,
  activeCategory = 'all',
  onSelectCategory
}) => {
  return (
    <div
      className="filter-buttons"
      role="tablist"
      aria-label="Filtro de categoria de projetos"
    >
      {categories.map((cat) => (
        <button
          key={cat.id}
          className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
          onClick={() => onSelectCategory && onSelectCategory(cat.id)}
          role="tab"
          aria-selected={activeCategory === cat.id}
          tabIndex={0}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilter;
