import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const skillCategories = [
  {
    id: 1,
    title: "Web Shooters (Frontend)",
    color: "#E11D48",
    x: 20,
    y: 20,
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "React Native", "Ionic", "Angular"]
  },
  {
    id: 2,
    title: "Spider-Sense (Backend)",
    color: "#2563EB",
    x: 80,
    y: 15,
    skills: ["Node.js", "Express", "MongoDB", "Supabase"]
  },
  {
    id: 3,
    title: "Tech Suit (Tools)",
    color: "#60A5FA",
    x: 85,
    y: 75,
    skills: ["Git", "GitHub", "Figma", "Vite"]
  }
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0]);
  const [hoveredNode, setHoveredNode] = useState(null);

  // Memoized particles
  const particles = React.useMemo(() => {
    return [...Array(30)].map((_, i) => ({ id: i }));
  }, []);

  return (
    <section id="skills" className="py-32 relative min-h-screen flex items-center overflow-hidden">
      {/* Optimized Background */}
      <div className="absolute inset-0 z-0">
        {/* Deep gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0A0F2A] to-[#020617]" />
        
        {/* Static grid pattern - fixed SVG syntax */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full bg-repeat"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M40 0 L40 40 M0 40 L40 40' stroke='%23E11D48' stroke-width='0.3' fill='none' opacity='0.3'/%3E%3C/svg%3E")`
            }}
          />
        </div>

        {/* Static gradient orbs - no animations */}
        <div className="absolute top-20 left-20 w-[350px] h-[350px] rounded-full bg-[#E11D48]/5 blur-[100px]" />
        <div className="absolute bottom-20 right-20 w-[450px] h-[450px] rounded-full bg-[#2563EB]/5 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#E11D48]/3 blur-[150px]" />

        {/* Floating particles - CSS animations */}
        {particles.map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-0.5 h-0.5 bg-gradient-to-r from-[#E11D48] to-[#2563EB] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `floatSkill ${3 + Math.random() * 4}s linear infinite`,
              animationDelay: `${Math.random() * 8}s`,
              opacity: 0,
            }}
          />
        ))}

        {/* Static spider web overlay */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="webGradientSkill">
                <stop offset="0%" stopColor="#E11D48" stopOpacity="0.3"/>
                <stop offset="100%" stopColor="#2563EB" stopOpacity="0"/>
              </radialGradient>
            </defs>
            <path d="M30% 0% L30% 100% M70% 0% L70% 100% M0% 30% L100% 30% M0% 70% L100% 70%" 
              stroke="url(#webGradientSkill)" strokeWidth="0.5" opacity="0.3" fill="none"/>
            <circle cx="50%" cy="50%" r="25%" stroke="#E11D48" strokeWidth="0.5" fill="none" opacity="0.15"/>
            <circle cx="50%" cy="50%" r="40%" stroke="#2563EB" strokeWidth="0.5" fill="none" opacity="0.1"/>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="mb-16">
          <span className="h-[2px] w-12 bg-gradient-to-r from-[#E11D48] to-[#2563EB] mb-4 block" />
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Suit <span className="text-[#E11D48]">Abilities.</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-lg">
            High-performance modules equipped for traversing the complex architecture of the modern web. Select a node to inspect.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* Left: SVG Spider Web Network */}
          <div className="relative aspect-square w-full max-w-md mx-auto lg:max-w-none glass-panel p-4 rounded-3xl overflow-hidden border border-[#2563EB]/20 backdrop-blur-sm">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              {/* Background Web Structure */}
              <circle cx="50" cy="50" r="45" stroke="#334155" strokeWidth="0.5" fill="none" />
              <circle cx="50" cy="50" r="30" stroke="#334155" strokeWidth="0.5" fill="none" />
              <circle cx="50" cy="50" r="15" stroke="#334155" strokeWidth="0.5" fill="none" />

              <line x1="50" y1="50" x2="50" y2="5" stroke="#334155" strokeWidth="0.5" />
              <line x1="50" y1="50" x2="95" y2="50" stroke="#334155" strokeWidth="0.5" />
              <line x1="50" y1="50" x2="50" y2="95" stroke="#334155" strokeWidth="0.5" />
              <line x1="50" y1="50" x2="5" y2="50" stroke="#334155" strokeWidth="0.5" />
              <line x1="50" y1="50" x2="82" y2="18" stroke="#334155" strokeWidth="0.5" />
              <line x1="50" y1="50" x2="82" y2="82" stroke="#334155" strokeWidth="0.5" />
              <line x1="50" y1="50" x2="18" y2="82" stroke="#334155" strokeWidth="0.5" />
              <line x1="50" y1="50" x2="18" y2="18" stroke="#334155" strokeWidth="0.5" />

              {/* Connections from center to category nodes */}
              {skillCategories.map((cat) => (
                <line
                  key={`line-${cat.id}`}
                  x1="50" y1="50"
                  x2={cat.x} y2={cat.y}
                  stroke={activeCategory.id === cat.id ? cat.color : "#334155"}
                  strokeWidth={activeCategory.id === cat.id ? 1.5 : 0.5}
                />
              ))}

              {/* Category Nodes */}
              {skillCategories.map((cat) => (
                <g
                  key={`node-${cat.id}`}
                  className="cursor-pointer transition-all duration-300"
                  onClick={() => setActiveCategory(cat)}
                  onMouseEnter={() => setHoveredNode(cat.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                >
                  {/* Aura glow */}
                  {(activeCategory.id === cat.id || hoveredNode === cat.id) && (
                    <circle
                      cx={cat.x} cy={cat.y} r="8"
                      fill={cat.color}
                      opacity="0.2"
                      className="mix-blend-screen"
                    >
                      <animate attributeName="r" values="6;10;6" dur="2s" repeatCount="indefinite"/>
                    </circle>
                  )}

                  {/* Node */}
                  <circle
                    cx={cat.x} cy={cat.y}
                    r={activeCategory.id === cat.id ? "4" : "3"}
                    fill={activeCategory.id === cat.id ? cat.color : "#94A3B8"}
                    stroke="#020617"
                    strokeWidth="1.5"
                  />

                  {/* Label */}
                  <text
                    x={cat.x} y={cat.y + 8}
                    textAnchor="middle"
                    fill={activeCategory.id === cat.id ? "#F8FAFC" : "#64748B"}
                    fontSize="3.5"
                    fontFamily="monospace"
                  >
                    {cat.title.split('(')[0].trim()}
                  </text>
                </g>
              ))}

              {/* Center Core */}
              <circle cx="50" cy="50" r="3" fill="#E11D48">
                <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
              </circle>
            </svg>

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_80%)] pointer-events-none" />
          </div>

          {/* Right: Active Skill Category Detail Panel */}
          <div className="relative w-full h-[420px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute inset-0 glass-panel-glow p-8 md:p-10 rounded-2xl border-l-[4px] flex flex-col justify-between backdrop-blur-md"
                style={{ borderLeftColor: activeCategory.color }}
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="px-3 py-1 bg-slate-800/50 rounded text-xs font-mono tracking-widest text-slate-400 border border-slate-700">
                      MODULE: {activeCategory.id.toString().padStart(2, '0')}
                    </div>
                    <div
                      className="text-xs font-mono flex items-center gap-2"
                      style={{ color: activeCategory.color }}
                    >
                      <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: activeCategory.color }} />
                      ABILITY ACTIVE
                    </div>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-8 leading-tight">
                    {activeCategory.title}
                  </h3>

                  <div>
                    <h4 className="text-xs font-mono text-slate-500 mb-4 tracking-widest uppercase">Loaded Modules</h4>
                    <div className="flex flex-wrap gap-3">
                      {activeCategory.skills.map((skill, i) => (
                        <span
                          key={skill}
                          className="px-4 py-2 bg-[#0F172A] border text-sm rounded font-mono text-slate-300 transition-all hover:text-white cursor-default"
                          style={{ borderColor: `${activeCategory.color}40` }}
                          onMouseEnter={e => e.currentTarget.style.boxShadow = `0 0 12px ${activeCategory.color}66`}
                          onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-800 font-mono text-xs text-slate-500">
                  <span style={{ color: activeCategory.color }}>{activeCategory.skills.length}</span> modules loaded &mdash; click other nodes to switch
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes floatSkill {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(-200px) translateX(${Math.random() * 100 - 50}px);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;