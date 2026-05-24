import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(0);
  const [canvasReady, setCanvasReady] = useState(false);

  const messages = [
    "Swinging through the web...",
    "Spinning web strands...",
    "Calibrating spider-sense...",
    "Weaving code magic...",
    "Connecting to multiverse...",
    "Ready to launch!"
  ];

  // Progress and message animation
  useEffect(() => {
    let startTime = performance.now();
    const duration = 3000;
    let animationFrame;

    const messageInterval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 500);

    const animate = (now) => {
      const elapsed = now - startTime;
      const newProgress = Math.min(elapsed / duration, 1);
      setProgress(newProgress);
      
      if (newProgress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        clearInterval(messageInterval);
        if (containerRef.current) {
          containerRef.current.style.transition = 'opacity 0.8s ease-in-out';
          containerRef.current.style.opacity = '0';
          setTimeout(() => {
            onComplete();
          }, 800);
        }
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      clearInterval(messageInterval);
    };
  }, [onComplete, messages.length]);

  // Canvas web animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    setCanvasReady(true);
    const ctx = canvas.getContext('2d');
    let animationId;
    let time = 0;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    const drawWeb = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const maxRadius = Math.min(canvas.width, canvas.height) * 0.35;
      const currentRadius = maxRadius * Math.min(progress + 0.2, 1);
      
      // Draw rotating web strands
      for (let i = 0; i < 8; i++) {
        const angle = (i * Math.PI * 2 / 8) + time;
        const x = centerX + Math.cos(angle) * currentRadius;
        const y = centerY + Math.sin(angle) * currentRadius;
        
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.strokeStyle = `rgba(225, 29, 72, ${0.4 + progress * 0.6})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }
      
      // Draw concentric circles
      for (let r = 1; r <= 3; r++) {
        const radius = (currentRadius / 3) * r;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(96, 165, 250, ${0.3 + progress * 0.4})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      
      // Draw spider in the center
      const spiderSize = 25;
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(time);
      
      // Spider body
      ctx.beginPath();
      ctx.moveTo(0, -spiderSize * 0.6);
      ctx.lineTo(spiderSize * 0.4, -spiderSize * 0.2);
      ctx.lineTo(spiderSize * 0.6, spiderSize * 0.2);
      ctx.lineTo(0, spiderSize * 0.4);
      ctx.lineTo(-spiderSize * 0.6, spiderSize * 0.2);
      ctx.lineTo(-spiderSize * 0.4, -spiderSize * 0.2);
      ctx.closePath();
      ctx.fillStyle = `rgba(225, 29, 72, ${0.7 + progress * 0.3})`;
      ctx.fill();
      ctx.strokeStyle = '#E11D48';
      ctx.lineWidth = 1.5;
      ctx.stroke();
      
      // Spider eyes
      ctx.fillStyle = '#60A5FA';
      ctx.beginPath();
      ctx.arc(-spiderSize * 0.15, -spiderSize * 0.3, spiderSize * 0.08, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(spiderSize * 0.15, -spiderSize * 0.3, spiderSize * 0.08, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
      
      time += 0.02;
      animationId = requestAnimationFrame(drawWeb);
    };
    
    drawWeb();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [progress]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#020617] overflow-hidden"
    >
      {/* Canvas for web animation */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.9 }}
      />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Spider web pattern background */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full bg-repeat"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M30 0 L30 60 M0 30 L60 30 M0 0 L60 60 M60 0 L0 60' stroke='%23E11D48' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`
            }}
          />
        </div>
        
        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-[#E11D48] rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={{
              y: [null, -200, -400],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center px-6">
        {/* Percentage Display */}
        <motion.div
          className="text-7xl md:text-8xl font-display font-bold mb-4"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
          }}
        >
          <span className="text-[#E11D48]">
            {Math.floor(progress * 100)}%
          </span>
        </motion.div>
        
        {/* Title */}
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-2xl md:text-3xl font-display font-bold text-white mb-1">
            SYED<span className="text-[#E11D48]">.DEV</span>
          </h1>
          <div className="h-6">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentMessage}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-xs text-[#60A5FA] tracking-wider font-mono whitespace-nowrap"
              >
                {messages[currentMessage]}
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>
        
        {/* Loading Bar */}
        <div className="w-64 md:w-80 mb-4">
          <div className="relative h-0.5 bg-slate-800 rounded-full overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-[#E11D48] rounded-full"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
        </div>
        
        {/* Quote */}
        <motion.div
          className="text-[8px] font-mono text-slate-600 text-center max-w-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          "With great power comes great responsibility."
        </motion.div>
      </div>
      
      {/* Corner decorations */}
      <div className="absolute top-4 left-4 text-[8px] font-mono text-slate-700">
        SPIDER-VERSE v2.0
      </div>
      <div className="absolute bottom-4 right-4 text-[8px] font-mono text-slate-700 flex items-center gap-1">
        <span className="inline-block w-1 h-1 rounded-full bg-[#22C55E] animate-pulse" />
        WEB WEAVER ACTIVE
      </div>
    </div>
  );
};

export default LoadingScreen;