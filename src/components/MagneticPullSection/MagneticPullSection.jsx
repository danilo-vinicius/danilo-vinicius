import React from 'react';
import { motion } from 'framer-motion';

export const MagneticPullSection = ({ children, id, className = '', style = {} }) => {
  return (
    <motion.section
      id={id}
      className={className}
      style={style}
      initial={{
        opacity: 0,
        y: 90,
        scale: 0.92
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: [0.92, 1.03, 0.99, 1]
      }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        duration: 0.85,
        ease: [0.22, 1.25, 0.36, 1],
        opacity: { duration: 0.5, ease: 'easeOut' },
        scale: { duration: 0.85, times: [0, 0.6, 0.85, 1] }
      }}
    >
      {children}
    </motion.section>
  );
};

export default MagneticPullSection;
