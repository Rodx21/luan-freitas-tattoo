import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Dot tracks instantly
  const dotX = useSpring(mouseX, { damping: 50, stiffness: 600 });
  const dotY = useSpring(mouseY, { damping: 50, stiffness: 600 });

  // Ring lags behind for that trailing feel
  const ringX = useSpring(mouseX, { damping: 28, stiffness: 180 });
  const ringY = useSpring(mouseY, { damping: 28, stiffness: 180 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Trailing ring */}
      <motion.div
        style={{
          position: 'fixed',
          left: ringX,
          top: ringY,
          x: '-50%',
          y: '-50%',
          width: 36,
          height: 36,
          borderRadius: '50%',
          border: '1px solid rgba(201,168,108,0.45)',
          pointerEvents: 'none',
          zIndex: 99997,
        }}
      />

      {/* Dot — gold, instant */}
      <motion.div
        style={{
          position: 'fixed',
          left: dotX,
          top: dotY,
          x: '-50%',
          y: '-50%',
          width: 6,
          height: 6,
          borderRadius: '50%',
          backgroundColor: '#C9A86C',
          pointerEvents: 'none',
          zIndex: 99999,
        }}
      />
    </>
  );
}
