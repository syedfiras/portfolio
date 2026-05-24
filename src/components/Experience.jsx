import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const journeySteps = [
  {
    year: "2024 - Present",
    title: "Freelance Developer",
    subtitle: "Self Employed",
    description: "Delivering end-to-end web solutions using Ionic Angular, Next.js, and React.js. Key Projects: Management System & Scalable Web Platforms.",
    color: "#E11D48" // Red
  },
  {
    year: "2025",
    title: "Web Development Internship",
    subtitle: "My Job Grow & IIT Hyderabad",
    description: "Completed internship in collaboration with E&N IIT Hyderabad, focusing on modern web technologies and full-stack integration.",
    color: "#2563EB" // Blue
  },
  {
    year: "Mar 2025 - Jun 2025",
    title: "Frontend Internship",
    subtitle: "iTecz Solutions",
    description: "Developed scalable web applications using Ionic and Angular frameworks, focusing on component-driven architecture.",
    color: "#60A5FA" // Light Blue
  },
  {
    year: "2026 - Present",
    title: "Frontend Intern",
    subtitle: "Omnimate",
    description: "Currently working as a Frontend Intern contributing to modern frontend systems and user interfaces.",
    color: "#ff2a5f" // Pink Red
  }
];

const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" ref={containerRef} className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative">
        
        <div className="text-center mb-24">
          <span className="h-[2px] w-12 bg-[#60A5FA] mb-4 inline-block" />
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Origin <span className="text-[#2563EB]">Story.</span>
          </h2>
          <p className="mt-4 text-slate-400">The evolution of a web crawler.</p>
        </div>

        <div className="relative">
          {/* Background glowing line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-slate-800 -translate-x-1/2" />
          
          {/* Animated active line */}
          <motion.div 
            className="absolute left-8 md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-[#E11D48] via-[#2563EB] to-[#E11D48] -translate-x-1/2 origin-top shadow-[0_0_15px_rgba(37,99,235,0.8)]"
            style={{ height: lineHeight }}
          />

          {/* Timeline Nodes */}
          {journeySteps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`relative flex items-center mb-20 md:justify-between w-full ${isEven ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Center Node */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-[#020617] border-2 border-slate-700 -translate-x-1/2 z-10 transition-colors duration-500 hover:border-[#E11D48] hover:bg-[#E11D48] hover:shadow-[0_0_15px_rgba(225,29,72,0.8)]" />
                
                {/* Content Card */}
                <div className="w-full pl-20 md:pl-0 md:w-[45%]">
                  <div className="glass-panel p-6 md:p-8 rounded-2xl relative group overflow-hidden border-t hover:border-[#2563EB]/50 transition-colors">
                    {/* Hover Glow */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                      style={{ background: `radial-gradient(circle at ${isEven ? '0%' : '100%'} 50%, ${step.color}, transparent)` }}
                    />

                    <div className="flex items-center gap-4 mb-4">
                      <span className="font-mono text-sm tracking-widest text-slate-500">{step.year}</span>
                      <span className="h-[1px] flex-1 bg-slate-800" />
                    </div>

                    <h3 
                      className="text-2xl font-display font-bold text-white mb-1 transition-colors"
                    >
                      {step.title}
                    </h3>
                    <div className="text-sm font-mono mb-4" style={{ color: step.color }}>{step.subtitle}</div>
                    
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
};

export default Experience;
