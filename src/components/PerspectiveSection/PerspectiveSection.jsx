import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './PerspectiveSection.css';

export function PerspectiveSection({
  children,
  index,
  total,
  stickyTop = 70,
  className = '',
  id
}) {
  const containerRef = useRef(null);

  // Monitorar o progresso de rolagem do container da seção
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const isLast = index === total - 1;

  // Efeito de transição suave em profundidade (Stacking Section Transition):
  // Enquanto a seção atual estiver sticky no topo, ela reduz escala suavemente
  // e ganha um leve escurecimento/fade fotográfico, mantendo-se perfeitamente reta,
  // enquanto a próxima seção sobe no fluxo com z-index superior, cobrindo-a livremente.
  const scale = useTransform(scrollYProgress, [0, 1], isLast ? [1, 1] : [1, 0.88]);
  const opacity = useTransform(scrollYProgress, [0, 1], isLast ? [1, 1] : [1, 0.45]);
  const filter = useTransform(
    scrollYProgress,
    [0, 1],
    isLast ? ['brightness(1)', 'brightness(1)'] : ['brightness(1)', 'brightness(0.65)']
  );

  return (
    <div
      ref={containerRef}
      id={id}
      className={`perspective-section-container ${className}`}
      style={{
        position: 'relative',
        minHeight: isLast ? 'auto' : '150vh',
        zIndex: (index + 1) * 10
      }}
    >
      <motion.div
        className={`perspective-section-layer ${index > 0 ? 'has-overlap-shadow' : ''}`}
        style={{
          position: isLast ? 'relative' : 'sticky',
          top: isLast ? 'auto' : `${stickyTop}px`,
          scale,
          opacity,
          filter,
          transformOrigin: 'top center'
        }}
      >
        <div className="perspective-section-content">
          {children}
        </div>
      </motion.div>
    </div>
  );
}

export default PerspectiveSection;

