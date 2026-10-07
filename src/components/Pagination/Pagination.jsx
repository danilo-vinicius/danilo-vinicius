import React from 'react';
import './Pagination.css';

export const Pagination = ({ currentPage = 1, totalPages = 1, onPageChange }) => {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="pagination-container" aria-label="Navegação de páginas">
      <button
        className="page-btn"
        disabled={currentPage <= 1}
        onClick={() => onPageChange && onPageChange(currentPage - 1)}
        aria-label="Página anterior"
      >
        &laquo;
      </button>

      {pages.map((page) => (
        <button
          key={page}
          className={`page-btn ${currentPage === page ? 'active' : ''}`}
          onClick={() => onPageChange && onPageChange(page)}
          aria-label={`Ir para a página ${page}`}
          aria-current={currentPage === page ? 'page' : undefined}
        >
          {page}
        </button>
      ))}

      <button
        className="page-btn"
        disabled={currentPage >= totalPages}
        onClick={() => onPageChange && onPageChange(currentPage + 1)}
        aria-label="Próxima página"
      >
        &raquo;
      </button>
    </nav>
  );
};

export default Pagination;
