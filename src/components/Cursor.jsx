import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const cursorRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    let rafId;
    
    const updateMousePosition = (e) => {
      // Use requestAnimationFrame for smoother updates
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    const handleMouseOver = (e) => {
      const isClickable = e.target.closest('a, button, input, textarea, [data-interactive="true"], [role="button"]');
      setIsHovering(!!isClickable);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  // Faster spring configurations
  const dotVariants = {
    default: {
      x: mousePosition.x - 6,
      y: mousePosition.y - 6,
      width: 12,
      height: 12,
      backgroundColor: '#E11D48',
      boxShadow: '0 0 10px rgba(225, 29, 72, 0.5)',
    },
    hover: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      width: 40,
      height: 40,
      backgroundColor: 'rgba(96, 165, 250, 0.3)',
      border: '1.5px solid #60A5FA',
      boxShadow: '0 0 20px rgba(96, 165, 250, 0.6)',
    }
  };

  const ringVariants = {
    default: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      width: 40,
      height: 40,
      border: '1px solid rgba(225, 29, 72, 0.5)',
      opacity: 0.8,
    },
    hover: {
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
      width: 60,
      height: 60,
      border: '1.5px solid rgba(225, 29, 72, 0.8)',
      opacity: 0,
    }
  };

  // Click animation variant
  const clickVariants = {
    false: { scale: 1 },
    true: { scale: 0.8 }
  };

  // Only show on desktop
  if (typeof window !== 'undefined' && window.innerWidth < 768) return null;

  return (
    <>
      {/* Inner Dot */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
        variants={dotVariants}
        animate={isHovering ? "hover" : "default"}
        transition={{ 
          type: "spring", 
          stiffness: 800,  // Increased for faster response
          damping: 30,      // Reduced for less bounce
          mass: 0.3         // Reduced for lighter feel
        }}
      />
      
      {/* Outer Ring */}
      <motion.div
        ref={ringRef}
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998]"
        variants={ringVariants}
        animate={isHovering ? "hover" : "default"}
        transition={{ 
          type: "spring", 
          stiffness: 400, 
          damping: 25, 
          mass: 0.4 
        }}
      />
      
      {/* Click ripple effect */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9997]"
        animate={clickVariants}
        variants={clickVariants}
        initial={false}
        style={{
          x: mousePosition.x - 15,
          y: mousePosition.y - 15,
          width: 30,
          height: 30,
          backgroundColor: '#E11D48',
          opacity: 0.3,
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
};

export default Cursor;