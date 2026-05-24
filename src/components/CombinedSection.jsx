import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CombinedSection = () => {
  const [activeTab, setActiveTab] = useState('about');

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

  const [activeCategory, setActiveCategory] = useState(skillCategories[0]);
  const [hoveredNode, setHoveredNode] = useState(null);

  const journeySteps = [
    {
      year: "2024 - Present",
      title: "Freelance Developer",
      subtitle: "Self Employed",
      description: "Delivering end-to-end web solutions using Ionic Angular, Next.js, and React.js. Key Projects: Management System & Scalable Web Platforms.",
      color: "#E11D48"
    },
    {
      year: "2025",
      title: "Web Development Internship",
      subtitle: "My Job Grow & IIT Hyderabad",
      description: "Completed internship in collaboration with E&N IIT Hyderabad, focusing on modern web technologies and full-stack integration.",
      color: "#2563EB"
    },
    {
      year: "Mar 2025 - Jun 2025",
      title: "Frontend Internship",
      subtitle: "iTecz Solutions",
      description: "Developed scalable web applications using Ionic and Angular frameworks, focusing on component-driven architecture.",
      color: "#60A5FA"
    },
    {
      year: "2026 - Present",
      title: "Frontend Intern",
      subtitle: "Omnimate",
      description: "Currently working as a Frontend Intern contributing to modern frontend systems and user interfaces.",
      color: "#ff2a5f"
    }
  ];

  const tabs = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' }
  ];

  return (
    <section id="combined" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#020617]">
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full bg-repeat"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M30 0 L30 60 M0 30 L60 30' stroke='%23E11D48' stroke-width='0.3' fill='none' opacity='0.3'/%3E%3C/svg%3E")`
            }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="h-[2px] w-12 bg-[#E11D48] mb-4 inline-block" />
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            The <span className="text-[#60A5FA]">Multiverse.</span>
          </h2>
          <p className="mt-4 text-slate-400">Explore my identity, abilities, and journey</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="glass-panel p-1 rounded-full inline-flex gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-full text-sm font-mono font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-[#E11D48] text-white shadow-lg'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="min-h-[500px]"
          >
            {/* About Tab */}
            {activeTab === 'about' && (
              <div className="grid md:grid-cols-2 gap-16 relative">
                {/* Left Column: Text */}
                <div className="space-y-8 z-10">
                  <div className="glass-panel-glow p-8 rounded-2xl relative overflow-hidden group">
                    <div className="absolute -bottom-20 -right-20 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                      <svg width="200" height="200" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M50 0V100M0 50H100M14.6447 14.6447L85.3553 85.3553M14.6447 85.3553L85.3553 14.6447" stroke="currentColor" strokeWidth="2"/>
                        <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="2"/>
                        <circle cx="50" cy="50" r="50" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                      Hi, I'm <span className="text-[#E11D48]">Syed Firas</span>
                    </h3>
                    
                    <p className="text-lg text-slate-300 leading-relaxed font-light mb-4">
                      Your friendly neighborhood <strong className="text-white font-medium">web developer</strong> and <strong className="text-white font-medium">frontend architect</strong>! 🕷️
                    </p>
                    
                    <p className="text-lg text-slate-300 leading-relaxed font-light mb-6">
                      I specialize in <strong className="text-white font-medium">cinematic storytelling</strong> and <strong className="text-white font-medium">performance-driven</strong> web applications. 
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
                </div>

                {/* Right Column: Photo + Stats */}
                <div className="flex flex-col gap-6 z-10">
                  {/* Photo Frame */}
                  <div className="relative mx-auto w-64 h-64 md:w-72 md:h-72">
                    <div className="absolute inset-0 rounded-full border border-[#E11D48]/30 animate-spin-slow" />
                    <div className="absolute inset-3 rounded-full border border-[#2563EB]/20 animate-spin-reverse-slow" />
                    <div className="absolute inset-4 rounded-full bg-[#E11D48]/10 blur-2xl" />
                    <div className="absolute inset-4 rounded-full overflow-hidden border-2 border-[#E11D48]/50 shadow-[0_0_30px_rgba(225,29,72,0.3)]">
                      <img
                        src="/your-photo.jpg"
                        alt="Syed Firas"
                        className="w-full h-full object-cover object-top scale-110"
                      />
                    </div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 px-3 py-0.5 bg-[#020617]/90 backdrop-blur-sm border border-[#E11D48]/50 text-[#E11D48] font-mono text-[10px] tracking-widest rounded whitespace-nowrap">
                      SYED FIRAS
                    </div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2 px-3 py-0.5 bg-[#020617]/90 backdrop-blur-sm border border-[#60A5FA]/40 text-[#60A5FA] font-mono text-[10px] tracking-widest rounded whitespace-nowrap">
                      WEB WEAVER
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
                      <div className="text-xs text-slate-400 font-mono">WEBS WEAVED</div>
                    </div>

                    <div className="glass-panel p-5 rounded-2xl border-t border-[#60A5FA]/30 hover:border-[#E11D48]/50 transition-all duration-300 group hover:transform hover:-translate-y-1">
                      <div className="text-3xl font-display font-bold text-white mb-1 group-hover:text-[#E11D48] transition-colors">100%</div>
                      <div className="text-xs text-slate-400 font-mono">SPIDER-SENSE</div>
                    </div>

                    <div className="glass-panel p-5 rounded-2xl border-t border-[#60A5FA]/30 hover:border-[#E11D48]/50 transition-all duration-300 group translate-y-4 hover:transform hover:-translate-y-1">
                      <div className="text-3xl font-display font-bold text-white mb-1 group-hover:text-[#E11D48] transition-colors">4</div>
                      <div className="text-xs text-slate-400 font-mono">INTERNSHIPS</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Skills Tab */}
            {activeTab === 'skills' && (
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Spider Web Network */}
                <div className="relative aspect-square w-full max-w-md mx-auto lg:max-w-none glass-panel p-4 rounded-2xl overflow-hidden border border-[#2563EB]/20 backdrop-blur-sm">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
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

                    {skillCategories.map((cat) => (
                      <line
                        key={`line-${cat.id}`}
                        x1="50" y1="50"
                        x2={cat.x} y2={cat.y}
                        stroke={activeCategory.id === cat.id ? cat.color : "#334155"}
                        strokeWidth={activeCategory.id === cat.id ? 1.5 : 0.5}
                      />
                    ))}

                    {skillCategories.map((cat) => (
                      <g
                        key={`node-${cat.id}`}
                        className="cursor-pointer transition-all duration-300"
                        onClick={() => setActiveCategory(cat)}
                        onMouseEnter={() => setHoveredNode(cat.id)}
                        onMouseLeave={() => setHoveredNode(null)}
                      >
                        {(activeCategory.id === cat.id || hoveredNode === cat.id) && (
                          <circle
                            cx={cat.x} cy={cat.y} r="7"
                            fill={cat.color}
                            opacity="0.2"
                            className="mix-blend-screen"
                          >
                            <animate attributeName="r" values="5;9;5" dur="2s" repeatCount="indefinite"/>
                          </circle>
                        )}

                        <circle
                          cx={cat.x} cy={cat.y}
                          r={activeCategory.id === cat.id ? "4" : "3"}
                          fill={activeCategory.id === cat.id ? cat.color : "#94A3B8"}
                          stroke="#020617"
                          strokeWidth="1.5"
                        />

                        <text
                          x={cat.x} y={cat.y + 7}
                          textAnchor="middle"
                          fill={activeCategory.id === cat.id ? "#F8FAFC" : "#64748B"}
                          fontSize="3"
                          fontFamily="monospace"
                        >
                          {cat.title.split('(')[0].trim()}
                        </text>
                      </g>
                    ))}

                    <circle cx="50" cy="50" r="3" fill="#E11D48">
                      <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
                    </circle>
                  </svg>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_80%)] pointer-events-none" />
                </div>

                {/* Skills Details Panel */}
                <div className="glass-panel-glow p-6 md:p-8 rounded-xl backdrop-blur-md">
                  <div className="flex justify-between items-start mb-4">
                    <div className="px-2 py-0.5 bg-slate-800/50 rounded text-[10px] font-mono tracking-widest text-slate-400 border border-slate-700">
                      MODULE: {activeCategory.id.toString().padStart(2, '0')}
                    </div>
                    <div className="text-[10px] font-mono flex items-center gap-1" style={{ color: activeCategory.color }}>
                      <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: activeCategory.color }} />
                      ACTIVE
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-6">
                    {activeCategory.title}
                  </h3>

                  <div>
                    <h4 className="text-[10px] font-mono text-slate-500 mb-3 tracking-widest uppercase">Loaded Modules</h4>
                    <div className="flex flex-wrap gap-2">
                      {activeCategory.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 bg-[#0F172A] border text-xs rounded font-mono text-slate-300"
                          style={{ borderColor: `${activeCategory.color}40` }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-800 font-mono text-[10px] text-slate-500">
                    <span style={{ color: activeCategory.color }}>{activeCategory.skills.length}</span> modules — click nodes to switch
                  </div>
                </div>
              </div>
            )}

            {/* Experience Tab */}
            {activeTab === 'experience' && (
              <div className="relative max-w-4xl mx-auto">
                <div className="relative">
                  <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-slate-800 -translate-x-1/2" />
                  
                  {journeySteps.map((step, index) => {
                    const isEven = index % 2 === 0;
                    return (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`relative flex items-center mb-12 md:justify-between w-full ${isEven ? 'md:flex-row-reverse' : ''}`}
                      >
                        <div className="absolute left-8 md:left-1/2 w-3 h-3 rounded-full bg-[#020617] border-2 border-slate-700 -translate-x-1/2 z-10 transition-all duration-300 hover:border-[#E11D48] hover:bg-[#E11D48] hover:shadow-[0_0_15px_rgba(225,29,72,0.8)]" />
                        
                        <div className="w-full pl-20 md:pl-0 md:w-[45%]">
                          <div className="glass-panel p-5 rounded-xl group transition-all duration-300">
                            <div className="flex items-center gap-3 mb-3">
                              <span className="font-mono text-xs text-slate-500">{step.year}</span>
                              <span className="h-[1px] flex-1 bg-slate-800" />
                            </div>
                            <h3 className="text-lg font-display font-bold text-white mb-1">{step.title}</h3>
                            <div className="text-xs font-mono mb-3" style={{ color: step.color }}>{step.subtitle}</div>
                            <p className="text-slate-400 text-xs leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <style jsx>{`
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

export default CombinedSection;