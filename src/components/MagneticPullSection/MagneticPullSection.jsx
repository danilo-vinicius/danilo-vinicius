import React from 'react';
import { motion } from 'framer-motion';

export const MagneticPullSection = ({ children, id, className = '', style = {} }) => {
  return (
    <motion.section
      id={id}
      className={className}
      style={{
        willChange: 'transform, opacity',
        transform: 'translateZ(0)',
        ...style
      }}
      initial={{
        opacity: 0,
        y: 50,
        scale: 0.96
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1
      }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }}
    >
      {children}
    </motion.section>
  );
};

export default MagneticPullSection;
