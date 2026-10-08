import React, { createContext, useContext, useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { resolveTransition } from './registry-v2';

const SectionFlowContext = createContext(null);

export function Section({ children, transition, className = '', id }) {
  const context = useContext(SectionFlowContext);
  
  if (!context) {
    // Fallback if rendered standalone without SectionFlow wrapper
    return (
      <section id={id} className={className}>
        {children}
      </section>
    );
  }

  return (
    <div id={id} className={`section-flow-item ${className}`}>
      {children}
    </div>
  );
}

export function SectionFlow({
  children,
  heightPerSection = 150,
  restHeight = 50,
  defaultTransition = 'magnetic-pull',
  className = ''
}) {
  const containerRef = useRef(null);
  const childrenArray = React.Children.toArray(children);
  const sectionCount = childrenArray.length;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    restDelta: 0.001
  });

  return (
    <SectionFlowContext.Provider value={{ sectionCount }}>
      <div
        ref={containerRef}
        className={`section-flow-container ${className}`}
        style={{
          position: 'relative',
          width: '100%'
        }}
      >
        {childrenArray.map((child, index) => (
          <SectionLayer
            key={index}
            index={index}
            total={sectionCount}
            progress={smoothProgress}
            transitionProp={child.props.transition || defaultTransition}
          >
            {child}
          </SectionLayer>
        ))}
      </div>
    </SectionFlowContext.Provider>
  );
}

function SectionLayer({ index, total, progress, transitionProp, children }) {
  const TransitionComp = resolveTransition(transitionProp);

  // Calculate local progress for this section transition [0, 1]
  const startRatio = index / Math.max(1, total - 1);
  const endRatio = (index + 1) / Math.max(1, total - 1);

  // Outgoing layer motion values
  const outProgress = useTransform(
    progress,
    [startRatio, (startRatio + endRatio) / 2, endRatio],
    [0, 0.5, 1]
  );

  // Incoming layer motion values
  const inOpacity = useTransform(progress, [Math.max(0, startRatio - 0.2), startRatio, endRatio], [0.3, 1, 1]);
  const inScale = useTransform(
    progress,
    [Math.max(0, startRatio - 0.25), startRatio, startRatio + (endRatio - startRatio) * 0.5, endRatio],
    [0.94, 0.98, 1.01, 1]
  );
  const inY = useTransform(
    progress,
    [Math.max(0, startRatio - 0.3), startRatio],
    ['30px', '0px']
  );

  const outgoingHandle = {
    style: {
      opacity: useTransform(progress, [startRatio, endRatio], [1, 0.4]),
      scale: useTransform(progress, [startRatio, endRatio], [1, 0.95]),
      y: useTransform(progress, [startRatio, endRatio], ['0px', '-40px'])
    }
  };

  const incomingHandle = {
    style: {
      opacity: inOpacity,
      scale: inScale,
      y: inY
    }
  };

  return (
    <motion.div
      className="section-flow-layer"
      style={{
        width: '100%',
        willChange: 'transform, opacity',
        opacity: incomingHandle.style.opacity,
        scale: incomingHandle.style.scale,
        y: incomingHandle.style.y
      }}
    >
      {TransitionComp && (
        <TransitionComp
          progress={outProgress}
          outgoing={outgoingHandle}
          incoming={incomingHandle}
        />
      )}
      {children}
    </motion.div>
  );
}

export default SectionFlow;
