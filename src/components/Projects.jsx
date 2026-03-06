import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub } from 'react-icons/fa';
import creatorflowImg from "../assets/cfai.png";
import sahaya from "../assets/sahaya.jpeg";
import expen from "../assets/expence.png";
import ijestmImg from "../assets/ijestm.png";

const mainProjects = [
    {
        title: 'Gym Management App',
        description: 'A comprehensive solution for managing gym memberships, tracking workouts, and scheduling classes.',
        fullDescription: 'A full-featured gym management system that streamlines operations for gym owners and trainers. Features include member registration, attendance tracking, workout plan creation, class scheduling, payment processing, and detailed analytics.',
        tech: ['Ionic', 'Angular', 'TypeScript', 'Supabase'],
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        link: 'https://gymnetsolutions.netlify.app',
        github: 'https://github.com/AhmedGannam/Gym-Management-App',
        color: 'bg-blue-50 text-[#00ebc7] border-blue-100',
        accentColor: '#3b82f6',
        features: ['Member Management', 'Payment Processing', 'Analytics Dashboard']
    },
    {
        title: 'CreatorFlow AI',
        description: 'CreatorFlow AI helps creators beat creative blocks with instant scripts and smart analysis.',
        fullDescription: 'An AI-powered platform designed to revolutionize content creation for digital creators. Leverages advanced AI models to generate engaging scripts, analyze content performance, create viral hooks, and provide actionable insights.',
        tech: ['React', 'Node.js', 'Supabase', 'AI/ML'],
        image: creatorflowImg,
        link: 'https://cfai.lovable.app',
        github: 'https://github.com/syedfiras/creator-flow-ai',
        color: 'bg-purple-50 text-[#ff5470] border-purple-100',
        accentColor: '#8b5cf6',
        features: ['AI Script Generation', 'Content Analysis', 'Hook Creator', 'Performance Insights', 'Multi-platform Support']
    },
    {
        title: 'IJESTM',
        description: 'Developed a full-stack web application for the International Journal of Engineering, Science, Technology & Management (IJESTM) — a peer-reviewed, open-access academic journal aimed at advancing research visibility and dissemination in engineering, science, technology, and management fields.',
        fullDescription: 'IJESTM is a full-stack academic journal web application developed to provide a digital platform for publishing and accessing peer-reviewed research articles. The system enables users to browse journal volumes, issues, archives, editorial details, and publication information in an organized manner.',
        tech: ['React', 'Node.js', 'MySql'],
        image: ijestmImg,
        link: 'https://ijestm.aitm.edu.in/',
        github: 'https://github.com/codingclub-aitm/IJESTM',
        color: 'bg-purple-50 text-[#ff5470] border-purple-100',
        accentColor: '#8b5cf6',
        features: ['Dynamic journal archives and article listings', 'Editorial and publication information modules', 'REST API integration', 'Responsive UI design']
    },
];

const additionalProjects = [
    {
        title: 'SAHAYA - Women Safety App',
        description: 'A dedicated safety application designed to help women in distress with real-time alerts.',
        fullDescription: 'SAHAYA is a comprehensive women safety application that provides multiple layers of protection. The app features one-tap emergency alerts, real-time location sharing, and direct access to emergency services.',
        tech: ['React Native', 'Geolocation', 'Emergency API'],
        image: sahaya,
        link: '',
        github: 'https://github.com/syedfiras/sahaya',
        color: 'bg-rose-50 text-rose-600 border-rose-100',
        accentColor: '#f43f5e',
        features: ['Emergency Alerts', 'Location Sharing', 'Safe Routes', 'Emergency Contacts']
    },
    {
        title: 'TODO-list App',
        description: 'A dedicated TODO-list application designed to help list your tasks with a clean interface.',
        fullDescription: 'A modern task management application with a focus on simplicity and productivity. Features include task categorization, priority levels, and progress tracking.',
        tech: ['React Native', 'Node.js', 'MongoDB'],
        image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        link: '',
        github: 'https://github.com/syedfiras/to_do_app',
        color: 'bg-amber-50 text-amber-600 border-amber-100',
        accentColor: '#f59e0b',
        features: ['Task Categories', 'Priority Levels', 'Reminders', 'Progress Tracking']
    },
    {
        title: 'ExpensesTracker App',
        description: 'A personal finance application that tracks daily expenses and visualizes spending habits.',
        fullDescription: 'A comprehensive expense tracking application that helps users manage their finances effectively with categorization and budget setting.',
        tech: ['React Native'],
        image: expen,
        link: '',
        github: 'https://github.com/syedfiras/expense_tracker',
        color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
        accentColor: '#10b981',
        features: ['Expense Tracking', 'Budget Management', 'Visual Analytics', 'Monthly Reports']
    },
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax values fixed to array length to avoid rules-of-hooks issue
    const yParallax0 = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const yParallax1 = useTransform(scrollYProgress, [0, 1], [30, -30]);
    const yParallax2 = useTransform(scrollYProgress, [0, 1], [10, -10]);
    const yTransforms = [yParallax0, yParallax1, yParallax2];

    const renderProjectCard = (project, index, isAdditional = false) => (
        <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={!isAdditional ? { y: yTransforms[index] } : {}}
            className="group relative bg-white rounded-3xl overflow-hidden transition-all duration-500 neo-brutal hover:-translate-y-1"
        >
            <div className="relative h-64 overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-all duration-700 ${isAdditional ? 'grayscale group-hover:grayscale-0' : 'scale-105 group-hover:scale-110'
                        }`}
                />
                <div className="absolute inset-0 bg-[#1b2d45]/5 group-hover:bg-transparent transition-colors duration-500"></div>

                {/* Overlay Badge */}
                <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md border ${project.color} bg-white/80`}>
                        {project.tech[0]}
                    </span>
                </div>
            </div>

            <div className="p-8">
                <h3 className="text-lg font-bold text-[#1b2d45] mb-3 tracking-tight">
                    {project.title}
                </h3>
                <p className="text-[#2b4566] text-sm leading-relaxed mb-6 line-clamp-2">
                    {project.description}
                </p>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                    <button
                        onClick={() => setSelectedProject(project)}
                        className="text-sm font-bold text-[#1b2d45] hover:text-primary transition-colors flex items-center gap-2 group/btn"
                    >
                        View Details
                        <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                    {project.link && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-white text-[#1b2d45] hover:bg-[#1b2d45] hover:text-[#fdf8e3] transition-all duration-300 neo-brutal-sm"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );

    return (
        <section id="projects" ref={containerRef} className="py-16 bg-[#FAFAFA] transition-colors duration-300 relative overflow-hidden">
            {/* Parallax Background Decorations */}
            <motion.div
                style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]), rotate: useTransform(scrollYProgress, [0, 1], [0, 45]) }}
                className="absolute right-[-5%] top-[20%] w-[30%] h-[30%] bg-[#ff5470]/30/10 rounded-[4rem] mix-blend-multiply -z-10 blur-3xl"
            />

            <div className="w-full px-6 sm:px-12 lg:px-16 relative z-10">
                <div className="max-w-7xl mx-auto mb-12">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-[10px] font-bold tracking-widest text-[#6b7280] uppercase mb-4 block"
                    >
                        Portfolio
                    </motion.span>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1b2d45] tracking-tight">
                        Live Projects
                    </h2>
                </div>

                {/* Main Projects */}
                <div className="mb-16">
                    <div className="grid gap-8 md:grid-cols-3 hide-scrollbar">
                        {mainProjects.map((project, index) => renderProjectCard(project, index, false))}
                    </div>
                </div>

                {/* Additional Projects */}
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between mb-12">
                        <h3 className="text-lg font-bold text-[#1b2d45]">Experiments & More</h3>
                        <div className="h-[1px] flex-1 bg-[#f4efd8] mx-8 hidden sm:block"></div>
                    </div>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {additionalProjects.map((project, index) => renderProjectCard(project, index, true))}
                    </div>
                </div>
            </div>

            {/* Premium Project Details Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                        className="fixed inset-0 bg-white/80 backdrop-blur-xl z-[60] flex items-center justify-center p-4 md:p-8"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-[2rem] max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row relative neo-brutal"
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-6 right-6 p-3 bg-[#f4efd8]/50 rounded-full hover:bg-[#1b2d45] hover:text-[#fdf8e3] transition-all duration-300 z-10 backdrop-blur-sm"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Left: Project Image */}
                            <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden bg-[#f4efd8]">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"></div>
                            </div>

                            {/* Right: Project Info */}
                            <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto">
                                <div className="mb-8">
                                    <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold ${selectedProject.color} border mb-4`}>
                                        {selectedProject.tech.join(' · ')}
                                    </span>
                                    <h2 className="text-2xl font-bold text-[#1b2d45] tracking-tight mb-6">
                                        {selectedProject.title}
                                    </h2>
                                    <p className="text-[#2b4566] text-lg leading-relaxed">
                                        {selectedProject.fullDescription}
                                    </p>
                                </div>

                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-sm font-bold uppercase tracking-wider text-[#6b7280] mb-4">Core Features</h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {selectedProject.features.map((feature, i) => (
                                                <div key={i} className="flex items-center gap-3 group">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-[#1b2d45] group-hover:scale-150 transition-transform"></div>
                                                    <span className="text-[#2b4566] text-sm font-medium">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-4 pt-4">
                                        {selectedProject.link && (
                                            <a
                                                href={selectedProject.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-8 py-4 bg-[#1b2d45] text-[#fdf8e3] rounded-2xl hover:opacity-90 transition-all duration-300 font-bold flex items-center gap-2 neo-brutal-sm"
                                            >
                                                Visit Project
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </a>
                                        )}
                                        {selectedProject.github && (
                                            <a
                                                href={selectedProject.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-8 py-4 bg-[#1b2d45] text-[#fdf8e3] rounded-2xl hover:opacity-90 transition-all duration-300 font-bold flex items-center gap-2 neo-brutal-sm"
                                            >
                                                GitHub Code
                                                <FaGithub className="w-5 h-5" />
                                            </a>
                                        )}
                                        <button
                                            onClick={() => setSelectedProject(null)}
                                            className="px-8 py-4 bg-white text-[#1b2d45] rounded-2xl hover:opacity-90 transition-all duration-300 font-bold neo-brutal-sm"
                                        >
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
