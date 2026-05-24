import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "BIFA Management System",
    type: "Mobile App",
    stack: ["React Native", "Node.js", "NativeWind", "Supabase"],
    description: "Comprehensive management system for BIFA (Football Club). Features player tracking, match scheduling, and club administration dashboards.",
    link: "https://bifa-registration-portal.netlify.app/",
    github: "https://github.com/syedfiras/bifa",
    x: 20,
    y: 20,
    color: "#E11D48" // Red
  },
  {
    id: 2,
    title: "Sahaya (Women Safety)",
    type: "Mobile App",
    stack: ["React Native", "Geofencing", "Node.js"],
    description: "A specialized women's safety mobile application utilizing real-time geofencing and emergency alert systems.",
    link: "",
    github: "https://github.com/syedfiras/sahaya",
    x: 80,
    y: 15,
    color: "#2563EB" // Blue
  },
  {
    id: 3,
    title: "Gym Management App",
    type: "Mobile App",
    stack: ["Ionic", "Angular", "Node.js", "Supabase"],
    description: "A full-featured gym management system that streamlines operations for gym owners and trainers. Features include member registration, attendance tracking, workout plan creation, class scheduling, payment processing, and detailed analytics.",
    link: "https://gymnetsolutions.netlify.app",
    github: "https://github.com/AhmedGannam/Gym-Management-App",
    x: 85,
    y: 75,
    color: "#60A5FA" // Light Blue
  },
  {
    id: 4,
    title: "IJESTM Journal",
    type: "Web Application",
    stack: ["React", "REST API", "Full-Stack"],
    description: "A full-stack academic journal web app providing a digital platform for publishing and accessing peer-reviewed research articles.",
    link: "https://ijestm.aitm.edu.in/",
    github: "https://github.com/codingclub-aitm/IJESTM",
    x: 15,
    y: 80,
    color: "#ff2a5f" // Pink/Red glow
  }
];

const ProjectsWeb = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const [hoveredNode, setHoveredNode] = useState(null);

  return (
    <section id="projects" className="py-32 relative min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">

        <div className="mb-16">
          <span className="h-[2px] w-12 bg-[#E11D48] mb-4 block" />
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Project <span className="text-[#60A5FA]">Network.</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-lg">
            Interactive telemetry dashboard. Select a node to view detailed mission data.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* Left: SVG Spider Web Network Visualization */}
          <div className="relative aspect-square w-full max-w-md mx-auto lg:max-w-none glass-panel p-4 rounded-3xl overflow-hidden border-[#2563EB]/20">
            <svg viewBox="0 0 100 100" className="w-full h-full text-slate-800">
              {/* Background Web Structure */}
              <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.5" fill="none" />
              <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" fill="none" />
              <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="0.5" fill="none" />

              <line x1="50" y1="50" x2="50" y2="5" stroke="currentColor" strokeWidth="0.5" />
              <line x1="50" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="0.5" />
              <line x1="50" y1="50" x2="50" y2="95" stroke="currentColor" strokeWidth="0.5" />
              <line x1="50" y1="50" x2="5" y2="50" stroke="currentColor" strokeWidth="0.5" />
              <line x1="50" y1="50" x2="82" y2="18" stroke="currentColor" strokeWidth="0.5" />
              <line x1="50" y1="50" x2="82" y2="82" stroke="currentColor" strokeWidth="0.5" />
              <line x1="50" y1="50" x2="18" y2="82" stroke="currentColor" strokeWidth="0.5" />
              <line x1="50" y1="50" x2="18" y2="18" stroke="currentColor" strokeWidth="0.5" />

              {/* Connections between nodes and center */}
              <g className="connections">
                {projects.map((p) => (
                  <motion.line
                    key={`line-${p.id}`}
                    x1="50" y1="50"
                    x2={p.x} y2={p.y}
                    stroke={activeProject.id === p.id ? p.color : "#334155"}
                    strokeWidth={activeProject.id === p.id ? 1.5 : 0.5}
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                ))}
              </g>

              {/* Nodes */}
              {projects.map((p) => (
                <g
                  key={`node-${p.id}`}
                  className="cursor-pointer group"
                  onClick={() => setActiveProject(p)}
                  onMouseEnter={() => setHoveredNode(p.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                >
                  {/* Outer glow aura for active/hover */}
                  {(activeProject.id === p.id || hoveredNode === p.id) && (
                    <motion.circle
                      cx={p.x} cy={p.y} r="8"
                      fill={p.color}
                      className="opacity-20 mix-blend-screen pointer-events-none"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}

                  {/* Node Circle */}
                  <motion.circle
                    cx={p.x} cy={p.y} r={activeProject.id === p.id ? "4" : "3"}
                    fill={activeProject.id === p.id ? p.color : "#94A3B8"}
                    stroke="#020617"
                    strokeWidth="1.5"
                    className="transition-all duration-300"
                  />

                  {/* Node Label */}
                  <text
                    x={p.x} y={p.y + 8}
                    textAnchor="middle"
                    fill={activeProject.id === p.id ? "#F8FAFC" : "#64748B"}
                    className="text-[4px] font-mono font-medium transition-colors"
                  >
                    {p.title}
                  </text>
                </g>
              ))}

              {/* Central Core Node */}
              <circle cx="50" cy="50" r="3" fill="#E11D48" className="animate-pulse" />
            </svg>

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_100%)] pointer-events-none" />
          </div>

          {/* Right: Holographic Project Details Deck */}
          <div className="relative w-full h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, x: 20, filter: 'blur(10px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, x: -20, filter: 'blur(10px)' }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute inset-0 glass-panel-glow p-8 md:p-10 rounded-2xl border-l-[4px] flex flex-col justify-between"
                style={{ borderLeftColor: activeProject.color }}
              >

                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="px-3 py-1 bg-slate-800/50 rounded text-xs font-mono tracking-widest text-slate-400 border border-slate-700">
                      ID: {activeProject.id.toString().padStart(3, '0')}
                    </div>
                    <div
                      className="text-xs font-mono flex items-center gap-2"
                      style={{ color: activeProject.color }}
                    >
                      <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: activeProject.color }} />
                      {activeProject.type.toUpperCase()}
                    </div>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 leading-tight">
                    {activeProject.title}
                  </h3>

                  <p className="text-slate-300 leading-relaxed mb-8">
                    {activeProject.description}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-xs font-mono text-slate-500 mb-3 tracking-widest uppercase">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.stack.map(tech => (
                        <span key={tech} className="px-3 py-1 bg-[#0F172A] border border-slate-700 text-slate-300 text-xs rounded font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-6 border-t border-slate-800">
                  <a
                    href={activeProject.link}
                    className="flex-1 text-center py-3 px-6 rounded bg-[#1E293B] hover:bg-slate-700 text-white font-medium transition-colors border border-slate-600 hover:border-slate-400 flex items-center justify-center gap-2"
                  >
                    TEST RUN
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </a>
                  <a
                    href={activeProject.github}
                    className="flex-1 text-center py-3 px-6 rounded text-slate-300 hover:text-white hover:bg-slate-800 transition-colors border border-slate-700 hover:border-slate-500 flex items-center justify-center gap-2"
                  >
                    SOURCE CODE
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  </a>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectsWeb;
