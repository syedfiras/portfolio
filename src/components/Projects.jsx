import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import creatorflowImg from "../assets/cfai.png";
import sahaya from "../assets/sahaya.jpeg";
import expen from "../assets/expence.png";

const mainProjects = [
    {
        title: 'Gym Management App',
        description: 'A comprehensive solution for managing gym memberships, tracking workouts, and scheduling classes.',
        fullDescription: 'A full-featured gym management system that streamlines operations for gym owners and trainers. Features include member registration, attendance tracking, workout plan creation, class scheduling, payment processing, and detailed analytics.',
        tech: ['Ionic', 'Angular', 'TypeScript', 'Supabase'],
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        link: 'https://gymnetsolutions.netlify.app',
        color: 'bg-blue-50 text-blue-600 border-blue-100',
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
        color: 'bg-purple-50 text-purple-600 border-purple-100',
        accentColor: '#8b5cf6',
        features: ['AI Script Generation', 'Content Analysis', 'Hook Creator', 'Performance Insights', 'Multi-platform Support']
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
        color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
        accentColor: '#10b981',
        features: ['Expense Tracking', 'Budget Management', 'Visual Analytics', 'Monthly Reports']
    },
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const renderProjectCard = (project, index, isAdditional = false) => (
        <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500"
        >
            <div className="relative h-64 overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-all duration-700 ${isAdditional ? 'grayscale group-hover:grayscale-0' : 'scale-105 group-hover:scale-110'
                        }`}
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>

                {/* Overlay Badge */}
                <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md border ${project.color} bg-white/80`}>
                        {project.tech[0]}
                    </span>
                </div>
            </div>

            <div className="p-8">
                <h3 className="text-lg font-bold text-gray-900 mb-3 tracking-tight">
                    {project.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2">
                    {project.description}
                </p>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                    <button
                        onClick={() => setSelectedProject(project)}
                        className="text-sm font-bold text-gray-900 hover:text-primary transition-colors flex items-center gap-2 group/btn"
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
                            className="p-2 rounded-full bg-gray-50 hover:bg-black hover:text-white transition-all duration-300"
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
        <section id="projects" className="py-24 bg-[#FAFAFA]">
            <div className="w-full px-6 sm:px-12 lg:px-16">
                <div className="max-w-7xl mx-auto mb-20">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4 block"
                    >
                        Portfolio
                    </motion.span>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                        Selected Projects
                    </h2>
                </div>

                {/* Main Projects */}
                <div className="mb-24">
                    <div className="grid gap-10 md:grid-cols-2">
                        {mainProjects.map((project, index) => renderProjectCard(project, index, false))}
                    </div>
                </div>

                {/* Additional Projects */}
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between mb-12">
                        <h3 className="text-lg font-bold text-gray-900">Experiments & More</h3>
                        <div className="h-[1px] flex-1 bg-gray-100 mx-8 hidden sm:block"></div>
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
                            className="bg-white rounded-[2rem] max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] flex flex-col md:flex-row relative border border-gray-100"
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-6 right-6 p-3 bg-gray-50 rounded-full hover:bg-black hover:text-white transition-all duration-300 z-10"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Left: Project Image */}
                            <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden bg-gray-50">
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
                                    <h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-6">
                                        {selectedProject.title}
                                    </h2>
                                    <p className="text-gray-500 text-lg leading-relaxed">
                                        {selectedProject.fullDescription}
                                    </p>
                                </div>

                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">Core Features</h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {selectedProject.features.map((feature, i) => (
                                                <div key={i} className="flex items-center gap-3 group">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-black group-hover:scale-150 transition-transform"></div>
                                                    <span className="text-gray-600 text-sm font-medium">{feature}</span>
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
                                                className="px-8 py-4 bg-black text-white rounded-2xl hover:bg-gray-800 transition-all duration-300 font-bold flex items-center gap-2 shadow-lg shadow-black/10"
                                            >
                                                Visit Project
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </a>
                                        )}
                                        <button
                                            onClick={() => setSelectedProject(null)}
                                            className="px-8 py-4 bg-gray-50 text-gray-900 rounded-2xl hover:bg-gray-100 transition-all duration-300 font-bold"
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
