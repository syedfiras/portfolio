import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerRef = useRef(null);

  // Subtle Parallax on mouse move
  useEffect(() => {
    let rafId;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      targetX = (clientX / window.innerWidth - 0.5) * 20;
      targetY = (clientY / window.innerHeight - 0.5) * 20;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;
      
      const layer = document.querySelector(".parallax-layer");
      const bgLayer = document.querySelector(".parallax-layer-bg");
      
      if (layer) {
        layer.style.transform = `translate(${currentX}px, ${currentY}px)`;
      }
      if (bgLayer) {
        bgLayer.style.transform = `translate(${-currentX * 1.5}px, ${-currentY * 1.5}px)`;
      }
      
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    rafId = requestAnimationFrame(animate);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const particles = React.useMemo(() => {
    return [...Array(30)].map((_, i) => ({ id: i }));
  }, []);

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background - No gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#020617]" />
        
        {/* Spider web grid */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="w-full h-full bg-repeat"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cpath d='M40 0 L40 80 M0 40 L80 40 M0 0 L80 80 M80 0 L0 80' stroke='%23E11D48' stroke-width='0.5' fill='none' opacity='0.3'/%3E%3Ccircle cx='40' cy='40' r='15' stroke='%232563EB' stroke-width='0.3' fill='none'/%3E%3C/svg%3E")`
            }}
          />
        </div>

        {/* Solid color orbs - no gradients */}
        <div className="absolute top-20 left-20 w-[400px] h-[400px] rounded-full bg-[#E11D48]/5 blur-[100px]" />
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] rounded-full bg-[#2563EB]/5 blur-[120px]" />
        
        {/* Floating particles */}
        {particles.map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-0.5 h-0.5 bg-[#E11D48] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 5}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div className="parallax-layer flex flex-col items-start space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#E11D48]/50 bg-[#E11D48]/10 text-sm text-[#E11D48] backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E11D48] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E11D48]"></span>
            </span>
            Spider-Sense Active — Web Weaver Status
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold leading-tight"
          >
            Your Friendly
            <br />
            Neighborhood
            <br />
            <span className="text-[#E11D48]">
              Web Developer
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 max-w-md leading-relaxed"
          >
            Swinging through the digital multiverse, crafting cinematic web experiences with great power comes great performance.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <a href="#projects" className="group relative px-8 py-3 rounded-lg bg-[#E11D48] text-white font-bold overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(225,29,72,0.6)] hover:-translate-y-1">
              <span className="relative z-10">View Web-Slinging</span>
              <div className="absolute inset-0 bg-[#ff2a5f] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
            <a href="#contact" className="px-8 py-3 rounded-lg border-2 border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white transition-all hover:-translate-y-1 font-medium">
              Contact the Web
            </a>
          </motion.div>

          {/* Spider-Verse stats */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex gap-6 pt-6"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-[#E11D48]">20+</div>
              <div className="text-xs text-slate-500 font-mono">Webs Weaved</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#2563EB]">100%</div>
              <div className="text-xs text-slate-500 font-mono">Spider-Sense</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#60A5FA]">24/7</div>
              <div className="text-xs text-slate-500 font-mono">On Patrol</div>
            </div>
          </motion.div>
        </div>

        {/* Right Side - Code Editor */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:flex justify-center parallax-layer-bg relative items-center"
        >
          <div className="relative z-10 w-full max-w-md">
            {/* Code editor */}
            <div className="glass-panel-glow rounded-2xl p-6 backdrop-blur-xl border border-[#E11D48]/30 shadow-2xl bg-[#0A0F2A]">
              {/* Window controls */}
              <div className="flex items-center gap-2 mb-6 pb-3 border-b border-slate-700">
                <div className="w-3 h-3 rounded-full bg-[#E11D48]" />
                <div className="w-3 h-3 rounded-full bg-[#EAB308]" />
                <div className="w-3 h-3 rounded-full bg-[#22C55E]" />
                <div className="ml-2 flex items-center gap-2">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L13.5 8L19 9L15 13L16 19L12 16L8 19L9 13L5 9L10.5 8L12 2Z" fill="#E11D48" />
                  </svg>
                  <span className="text-xs text-slate-500 font-mono">spider-sense.tsx</span>
                </div>
              </div>
              
              {/* Code lines */}
              <div className="space-y-2 font-mono text-sm">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-[#E11D48]">1</span>
                  <span className="text-[#60A5FA]">const</span>
                  <span className="text-[#EAB308]"> spiderSense</span>
                  <span className="text-white"> = </span>
                  <span className="text-[#EAB308]">active</span>
                  <span className="text-white">;</span>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-[#E11D48]">2</span>
                  <span className="text-[#60A5FA]">function</span>
                  <span className="text-[#EAB308]"> WebSlinger</span>
                  <span className="text-white">() {'{'}</span>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex items-center gap-3 pl-4"
                >
                  <span className="text-[#E11D48]">3</span>
                  <span className="text-[#60A5FA]">return</span>
                  <span className="text-white"> (</span>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex items-center gap-3 pl-8"
                >
                  <span className="text-[#E11D48]">4</span>
                  <span className="text-white">{'<div className="web-swinging">'}</span>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 }}
                  className="flex items-center gap-3 pl-12"
                >
                  <span className="text-[#E11D48]">5</span>
                  <span className="text-white">Building awesome </span>
                  <span className="text-[#EAB308] animate-pulse">websites</span>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.0 }}
                  className="flex items-center gap-3 pl-8"
                >
                  <span className="text-[#E11D48]">6</span>
                  <span className="text-white">{'</div>'}</span>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1 }}
                  className="flex items-center gap-3 pl-4"
                >
                  <span className="text-[#E11D48]">7</span>
                  <span className="text-white"> );</span>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-[#E11D48]">8</span>
                  <span className="text-white">{'}'}</span>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.3 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-[#E11D48]">9</span>
                  <span className="text-white">WebSlinger</span>
                  <span className="text-white">();</span>
                </motion.div>

                {/* Blinking cursor */}
                <motion.div 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4 }}
                >
                  <span className="text-[#E11D48]">10</span>
                  <span className="w-2 h-4 bg-[#E11D48] animate-blink" />
                </motion.div>
              </div>
            </div>

            {/* Floating panels */}
            <motion.div 
              className="absolute -top-4 -right-4 glass-panel-glow px-3 py-2 rounded-lg text-xs font-mono z-20"
              animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="text-[#E11D48]">🕷️ SPIDER-SENSE</div>
              <div className="text-white font-bold">TINGLING</div>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-4 -left-4 glass-panel px-3 py-2 rounded-lg text-xs font-mono z-20"
              animate={{ y: [0, 8, 0], rotate: [0, -2, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
              <div className="text-[#60A5FA]">WEB ACTIVE</div>
              <div className="text-white font-bold">SWINGING</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-xs text-slate-500 font-mono tracking-widest">SWING DOWN</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#E11D48] to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[#E11D48] animate-scroll" />
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          50% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-200px) translateX(${Math.random() * 100 - 50}px);
            opacity: 0;
          }
        }
        
        @keyframes scroll {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }
        
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;