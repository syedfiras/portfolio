import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [150, -150]);

  // Memoized particles for better performance
  const particles = React.useMemo(() => {
    return [...Array(20)].map((_, i) => ({ id: i }));
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-32 relative overflow-hidden">
      {/* Optimized Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#0A0F2A] to-[#020617]">
        {/* Static spider-web grid - fixed SVG syntax */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full bg-repeat"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cpath d='M40 0 L40 80 M0 40 L80 40' stroke='%23E11D48' stroke-width='0.5' fill='none' opacity='0.3'/%3E%3Cpath d='M0 0 L80 80 M80 0 L0 80' stroke='%232563EB' stroke-width='0.3' fill='none' opacity='0.2'/%3E%3Ccircle cx='40' cy='40' r='2' fill='%23E11D48' opacity='0.5'/%3E%3C/svg%3E")`
            }}
          />
        </div>

        {/* Simplified gradient orbs - no animations for better performance */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-[#E11D48]/5 blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#2563EB]/5 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[#E11D48]/3 blur-[80px]" />

        {/* Floating particles - static positions with CSS animations */}
        {particles.map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-0.5 h-0.5 bg-gradient-to-r from-[#E11D48] to-[#2563EB] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `floatAbout ${3 + Math.random() * 4}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="h-[2px] w-12 bg-gradient-to-r from-[#E11D48] to-[#2563EB]" />
            <span className="text-[#E11D48] font-mono tracking-widest text-sm uppercase">Subject Profile</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            The <span className="text-gradient-blue">Identity.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 relative">
          {/* Left Column: Text */}
          <motion.div style={{ y: y1 }} className="space-y-8 z-10">
            <div className="glass-panel-glow p-8 rounded-2xl relative overflow-hidden group">
              {/* Subtle background spider-web accent */}
              <div className="absolute -bottom-20 -right-20 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                <svg width="200" height="200" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 0V100M0 50H100M14.6447 14.6447L85.3553 85.3553M14.6447 85.3553L85.3553 14.6447" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="50" cy="50" r="50" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>

              <p className="text-lg text-slate-300 leading-relaxed font-light mb-6">
                I am a UI/UX Designer and Frontend Architect specializing in <strong className="text-white font-medium">cinematic storytelling</strong> and <strong className="text-white font-medium">performance-driven</strong> web applications. 
              </p>
              <p className="text-lg text-slate-300 leading-relaxed font-light mb-6">
                My work exists at the intersection of dark luxury aesthetics and cutting-edge web technology, creating digital experiences that feel less like websites and more like interactive cinema.
              </p>
              
              <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                <div className="w-10 h-10 rounded-full bg-[#E11D48]/10 flex items-center justify-center border border-[#E11D48]/30 text-[#E11D48]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <span className="font-mono text-sm text-[#60A5FA]">SECURITY CLEARANCE: LEVEL 9</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Photo + Stats */}
          <motion.div style={{ y: y2 }} className="flex flex-col gap-6 z-10">
            {/* Photo Frame */}
            <div className="relative mx-auto w-64 h-64 md:w-72 md:h-72">
              {/* Spinning ring decorations - using CSS animations */}
              <div className="absolute inset-0 rounded-full border border-[#E11D48]/30 animate-spin-slow" />
              <div className="absolute inset-3 rounded-full border border-[#2563EB]/20 animate-spin-reverse-slow" />

              {/* Glowing background behind photo */}
              <div className="absolute inset-4 rounded-full bg-[#E11D48]/10 blur-2xl" />

              {/* Photo */}
              <div className="absolute inset-4 rounded-full overflow-hidden border-2 border-[#E11D48]/50 shadow-[0_0_30px_rgba(225,29,72,0.3)]">
                <img
                  src="/logo.png"
                  alt="Syed Firas"
                  className="w-full h-full object-cover object-top scale-110"
                />
              </div>

              {/* HUD corner accents */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 px-3 py-0.5 bg-[#020617]/90 backdrop-blur-sm border border-[#E11D48]/50 text-[#E11D48] font-mono text-[10px] tracking-widest rounded whitespace-nowrap">
                SYED FIRAS
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2 px-3 py-0.5 bg-[#020617]/90 backdrop-blur-sm border border-[#60A5FA]/40 text-[#60A5FA] font-mono text-[10px] tracking-widest rounded whitespace-nowrap">
                DEV — ACTIVE
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="glass-panel p-5 rounded-2xl border-t border-[#60A5FA]/30 hover:border-[#E11D48]/50 transition-all duration-300 group hover:transform hover:-translate-y-1">
                <div className="text-3xl font-display font-bold text-white mb-1 group-hover:text-[#E11D48] transition-colors">2+</div>
                <div className="text-xs text-slate-400 font-mono">YEARS ACTIVE</div>
              </div>

              <div className="glass-panel p-5 rounded-2xl border-t border-[#60A5FA]/30 hover:border-[#E11D48]/50 transition-all duration-300 group translate-y-4 hover:transform hover:-translate-y-1">
                <div className="text-3xl font-display font-bold text-white mb-1 group-hover:text-[#E11D48] transition-colors">20+</div>
                <div className="text-xs text-slate-400 font-mono">MISSIONS</div>
              </div>

              <div className="glass-panel p-5 rounded-2xl border-t border-[#60A5FA]/30 hover:border-[#E11D48]/50 transition-all duration-300 group hover:transform hover:-translate-y-1">
                <div className="text-3xl font-display font-bold text-white mb-1 group-hover:text-[#E11D48] transition-colors">100%</div>
                <div className="text-xs text-slate-400 font-mono">SUCCESS RATE</div>
              </div>

              <div className="glass-panel p-5 rounded-2xl border-t border-[#60A5FA]/30 hover:border-[#E11D48]/50 transition-all duration-300 group translate-y-4 hover:transform hover:-translate-y-1">
                <div className="text-3xl font-display font-bold text-white mb-1 group-hover:text-[#E11D48] transition-colors">4</div>
                <div className="text-xs text-slate-400 font-mono">INTERNSHIPS</div>
              </div>
            </div>

            {/* Spider quote */}
            <div className="glass-panel p-4 rounded-xl text-center mt-2">
              <p className="text-xs font-mono text-slate-400 italic">
                "With great power comes great responsibility." 
                <span className="block text-[#E11D48] text-[10px] mt-1">— Uncle Ben</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes floatAbout {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(-150px) translateX(${Math.random() * 80 - 40}px);
            opacity: 0;
          }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse-slow {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
        
        .animate-spin-reverse-slow {
          animation: spin-reverse-slow 18s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default About;