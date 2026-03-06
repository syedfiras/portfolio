import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const internships = [
    {
        title: 'Web Development Internship',
        company: 'My Job Grow & IIT Hyderabad',
        role: 'Web Developer Intern',
        date: '2025',
        description: 'Completed internship in collaboration with E&N IIT Hyderabad, focusing on modern web technologies and full-stack integration.',
        details: 'Worked on real-world projects, implementing responsive designs and integrating APIs. Collaborated with cross-functional teams to deliver high-quality web solutions.',
        image: '/internship-iit.jpg',
        color: 'bg-blue-50 text-[#00ebc7] border-blue-100',
        achievement: 'Completed'
    },
    {
        title: 'Web Development Course',
        company: 'My Job Grow',
        role: 'Student',
        date: 'October 2025',
        description: 'Successfully completed Web Development Upskilling Course, mastering full-stack concepts, database design, and responsive UI.',
        details: 'Gained proficiency in MERN stack, database management, and deployment strategies. Built multiple capstone projects demonstrating full-stack capabilities.',
        image: '/course-webdev.jpg',
        color: 'bg-purple-50 text-[#ff5470] border-purple-100',
        achievement: 'Certified'
    },
    {
        title: 'Frontend Internship',
        company: 'iTecz Solutions',
        role: 'Frontend Intern',
        date: 'March 2025 - June 2025',
        description: 'Developed scalable web applications using Ionic and Angular frameworks, focusing on component-driven architecture.',
        details: 'Contributed to the development of a large-scale enterprise application. Optimized rendering performance and ensured cross-browser compatibility.',
        image: '/internship-cert.jpg',
        color: 'bg-cyan-50 text-cyan-600 border-cyan-100',
        achievement: 'Completed'
    }
];

const hackathons = [
    {
        title: 'CodeFest',
        role: 'Frontend Developer',
        description: 'Collaborated on building a responsive web application during a high-energy development sprint.',
        date: '2025',
        achievement: 'Participation',
        image: '/codefest-cert.jpg',
        color: 'bg-slate-50 text-slate-600 border-slate-100',
        details: 'Gained hands-on experience in rapid prototyping and teamwork using modern frontend libraries.'

    },
    {
        title: 'HackPrix',
        role: 'Frontend Developer',
        description: 'Developed the user interface for a solution addressing regional social problems through tech-driven intervention.',
        date: '2025',
        achievement: 'Participation',
        image: '/hackprix-cert.jpg',
        color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
        details: 'Focused on accessibility and local language integration to ensure the solution could be used by a wide demographic.'

    },
    {
        title: 'Innovex',
        role: 'Lead Frontend Developer',
        description: 'Built SAHAYA - A women safety application with real-time location sharing and emergency alerts. Selected among top 10 teams.',
        date: '2025',
        achievement: 'Top 10',
        image: '/innovex-cert.jpg',
        color: 'bg-rose-50 text-rose-600 border-rose-100',
        details: 'Spearheaded the frontend development of SAHAYA. Implemented complex geolocation features and emergency trigger protocols. Won recognition for UX/UI excellence.'
    },
    {
        title: 'AI HACKDAY BANGALURU',
        role: 'Full-Stack Developer',
        description: 'Developed a comprehensive platform to help Content Creators leverage AI for smart scripting and analysis.',
        date: '2025',
        achievement: 'Finalist',
        image: '/Syed Firas_page-0001.jpg',
        color: 'bg-indigo-50 text-indigo-600 border-indigo-100',
        details: 'Collaborated in a high-intensity environment to deliver a functional MVP within 24 hours. Focused on AI API integration and responsive frontend design.'
    }
];

const Achievements = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);

    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax values
    const yParallaxFast = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section id="achievements" ref={containerRef} className="py-24 bg-white transition-colors duration-300 relative overflow-hidden">
            {/* Parallax Background Decorations */}
            <motion.div
                style={{ y: yParallaxFast }}
                className="absolute left-[10%] top-[40%] w-[20%] h-[20%] bg-[#00ebc7]/30/10 rounded-full mix-blend-multiply -z-10 blur-3xl lg:blur-[80px]"
            />

            <div className="w-full px-6 sm:px-12 lg:px-16 relative z-10">

                {/* Header Section */}
                <div className="max-w-7xl mx-auto mb-20 text-center">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-xs font-bold tracking-widest text-[#6b7280] uppercase mb-4 block"
                    >
                        Success & Learning
                    </motion.span>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1b2d45] tracking-tight">
                        Selected Achievements
                    </h2>
                    <div className="w-16 h-1 bg-[#1b2d45] mx-auto mt-6 rounded-full" />
                </div>

                {/* Internships & Certifications Section */}
                <div className="max-w-7xl mx-auto mb-24">
                    <div className="flex items-center gap-4 mb-10">
                        <h3 className="text-lg font-bold text-[#1b2d45]">Certificates</h3>
                        <div className="h-[1px] flex-1 bg-[#f4efd8] hidden sm:block" />
                    </div>

                    {/* Horizontal Scroll Container */}
                    <div className="flex overflow-x-auto pb-8 -mx-6 px-6 sm:mx-0 sm:px-0 gap-6 snap-x hide-scrollbar">
                        {internships.map((intern, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                onClick={() => setSelectedEvent(intern)}
                                className="group shrink-0 w-[85vw] sm:w-[400px] snap-center cursor-pointer bg-white rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:-translate-y-1 flex flex-col neo-brutal"
                            >
                                <div className="p-8 sm:p-10 flex flex-col flex-1">
                                    <div className="flex justify-between items-start mb-6">
                                        <div>
                                            <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-[#f4efd8] border border-[#1b2d45] mb-3 inline-block">
                                                {intern.date}
                                            </span>
                                            <p className="text-[10px] font-bold text-[#6b7280] uppercase tracking-widest">{intern.company}</p>
                                        </div>
                                        <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-widest ${intern.color} border`}>
                                            {intern.achievement}
                                        </span>
                                    </div>
                                    <h4 className="text-xl font-black text-[#1b2d45] mb-4 tracking-tight leading-tight group-hover:text-primary transition-colors">
                                        {intern.title}
                                    </h4>
                                    <p className="text-[#2b4566] text-xs font-medium leading-relaxed mb-8 line-clamp-3">
                                        {intern.description}
                                    </p>
                                    <button className="mt-auto text-xs font-black uppercase tracking-widest text-[#1b2d45] border-b-2 border-transparent group-hover:border-[#1b2d45] transition-all w-max">
                                        View details
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Hackathons Section */}
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-4 mb-10">
                        <h3 className="text-lg font-bold text-[#1b2d45]">Events & Innovation</h3>
                        <div className="h-[1px] flex-1 bg-[#f4efd8] hidden sm:block" />
                    </div>

                    {/* Horizontal Scroll Container */}
                    <div className="flex overflow-x-auto pb-8 -mx-6 px-6 sm:mx-0 sm:px-0 gap-6 snap-x hide-scrollbar">
                        {hackathons.map((hack, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                onClick={() => setSelectedEvent(hack)}
                                className="group shrink-0 w-[80vw] sm:w-[350px] snap-center cursor-pointer bg-white rounded-[2rem] p-8 transition-all duration-500 flex flex-col items-center text-center neo-brutal hover:-translate-y-1"
                            >
                                <div className="w-16 h-16 rounded-[1.5rem] bg-[#1b2d45] flex items-center justify-center text-[#fdf8e3] mb-6 group-hover:scale-110 transition-transform duration-500 neo-brutal-sm">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
                                    </svg>
                                </div>
                                <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter ${hack.color} border mb-4`}>
                                    {hack.achievement}
                                </span>
                                <h4 className="text-lg font-bold text-[#1b2d45] mb-2">{hack.title}</h4>
                                <p className="text-[#6b7280] text-sm font-medium mb-6">{hack.role}</p>

                                <button className="mt-auto text-xs font-black uppercase tracking-widest text-[#1b2d45] border-b-2 border-transparent group-hover:border-[#1b2d45] transition-all">
                                    View details
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Split-Screen Event Modal */}
            <AnimatePresence>
                {selectedEvent && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedEvent(null)}
                        className="fixed inset-0 bg-white/80 backdrop-blur-xl z-[70] flex items-center justify-center p-4 md:p-8"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-[2.5rem] max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row relative neo-brutal"
                        >
                            <button
                                onClick={() => setSelectedEvent(null)}
                                className="absolute top-8 right-8 p-3 bg-[#f4efd8]/50 rounded-full hover:bg-[#1b2d45] hover:text-[#fdf8e3] transition-all duration-300 z-10 backdrop-blur-sm"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Modal Left: Dynamic Visual */}
                            <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden bg-[#FAFAFA]">
                                <img
                                    src={selectedEvent.image}
                                    alt={selectedEvent.title}
                                    className="w-full h-full object-contain p-8 md:p-12 hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />
                            </div>

                            {/* Modal Right: Technical Info */}
                            <div className="md:w-1/2 p-10 md:p-16 overflow-y-auto">
                                <span className={`inline-block px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase mb-6 border ${selectedEvent.color}`}>
                                    {selectedEvent.achievement}
                                </span>

                                <h2 className="text-2xl md:text-3xl font-black text-[#1b2d45] tracking-tighter mb-4 leading-none">
                                    {selectedEvent.title}
                                </h2>

                                <div className="flex items-center gap-3 text-[#6b7280] font-bold uppercase tracking-widest text-xs mb-10">
                                    <span>{selectedEvent.role}</span>
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#f4efd8]" />
                                    <span>{selectedEvent.date}</span>
                                </div>

                                <div className="space-y-10">
                                    <div>
                                        <h3 className="text-sm font-bold uppercase tracking-widest text-[#1b2d45] mb-4 border-l-4 border-[#1b2d45] pl-4">Perspective</h3>
                                        <p className="text-[#2b4566] text-lg leading-relaxed font-medium">
                                            {selectedEvent.description}
                                        </p>
                                    </div>

                                    {selectedEvent.details && (
                                        <div>
                                            <h3 className="text-sm font-bold uppercase tracking-widest text-[#1b2d45] mb-4 border-l-4 border-[#1b2d45] pl-4">Core Contribution</h3>
                                            <p className="text-[#2b4566] text-lg leading-relaxed font-medium italic">
                                                "{selectedEvent.details}"
                                            </p>
                                        </div>
                                    )}

                                    <button
                                        onClick={() => setSelectedEvent(null)}
                                        className="w-full py-5 bg-[#1b2d45] text-[#fdf8e3] rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:opacity-90 transition-all duration-300 neo-brutal-sm"
                                    >
                                        Dismiss View
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Achievements;
