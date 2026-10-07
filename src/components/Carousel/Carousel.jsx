import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getIcon } from '../../utils/iconHelper';
import { servicesData } from '../../data/projectsData';
import './Carousel.css';

export const Carousel = ({
  items = servicesData,
  autoSlideInterval = 3000
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!items || items.length <= 1 || isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [items, autoSlideInterval, isPaused]);

  if (!items || items.length === 0) return null;

  return (
    <div
      className="carousel-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-roledescription="carousel"
      aria-label="Carrossel de Serviços e Soluções"
    >
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${currentSlideIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div
            className="carousel-slide"
            key={item.id || index}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} de ${items.length}`}
          >
            <div className="service-card">
              {item.icon && (
                <div className="icon-box">
                  <FontAwesomeIcon icon={getIcon(item.icon)} />
                </div>
              )}
              {item.title && <h3>{item.title}</h3>}
              {item.description && <p>{item.description}</p>}
              {item.tags && item.tags.length > 0 && (
                <div className="service-tags">
                  {item.tags.map((tag, tIdx) => (
                    <span key={tIdx}>{tag}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div
        className="carousel-nav"
        role="tablist"
        aria-label="Selecione um slide para exibir"
      >
        {items.map((_, index) => (
          <button
            key={index}
            className={`nav-dot ${currentSlideIndex === index ? 'current-slide' : ''}`}
            onClick={() => setCurrentSlideIndex(index)}
            aria-label={`Ir para o slide ${index + 1}`}
            role="tab"
            aria-selected={currentSlideIndex === index}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
