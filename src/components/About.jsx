import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const internships = [
    {
        title: 'Web Development Internship',
        company: 'My Job Grow & IIT Hyderabad',
        role: 'Web Developer Intern',
        date: '2025',
        description: 'Completed internship in collaboration with E&N IIT Hyderabad, focusing on modern web technologies and full-stack integration.',
        details: 'Worked on real-world projects, implementing responsive designs and integrating APIs. Collaborated with cross-functional teams to deliver high-quality web solutions.',
        image: '/internship-iit.jpg',
        color: 'bg-blue-50 text-blue-600 border-blue-100',
        achievement: 'Completed'
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
    },
    {
        title: 'Freelance Developer',
        company: 'Self Employed',
        role: 'Full Stack Developer',
        date: '2024 - Present',
        description: 'Delivering end-to-end web solutions using Ionic Angular, Next.js, and React.js. Key Projects:  Management System & Scalable Web Platforms.',
        details: 'Managed entire project lifecycles from requirement gathering to deployment. Implemented modern UI/UX principles and ensured mobile responsiveness across all deliverables.',
        image: '/freelance.jpg', // Placeholder, not used in About view but keeps structure consistent
        color: 'bg-gray-50 text-gray-600 border-gray-100',
        achievement: 'Active'
    },
];

const About = () => {
    const [activeTab, setActiveTab] = useState('About Me');
    const tabs = ['About Me', 'Experience'];

    return (
        <section id="about" className="py-20 bg-white dark:bg-black transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-6 sm:px-12 lg:px-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
                        <span className="text-2xl font-bold tracking-widest text-gray-400 dark:text-gray-500 uppercase block">
                            Profile
                        </span>

                        {/* Toggle Buttons */}
                        <div className="flex gap-4 bg-gray-50 dark:bg-[#111] p-1.5 rounded-full w-max border border-gray-100 dark:border-gray-800">
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${activeTab === tab
                                        ? 'bg-black dark:bg-white text-white dark:text-black shadow-md'
                                        : 'text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white'
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="min-h-[400px]">
                        <AnimatePresence mode="wait">
                            {activeTab === 'About Me' ? (
                                <motion.div
                                    key="about"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h2 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-8 leading-relaxed">
                                        I'm a <span className="text-gray-400">passionate developer</span> focused on crafting <span className="text-gray-400">intuitive</span> and <span className="text-gray-400">engaging</span> digital experiences.
                                    </h2>

                                    <div className="text-sm dark:text-gray-400 text-gray-600 leading-7 space-y-6 font-medium">
                                        <p>
                                            With a strong foundation in <strong className="text-black dark:text-gray-200">React Native</strong> and <strong className="text-black dark:text-gray-200">Modern Web Technologies</strong>, I bridge the gap between design and engineering. My goal is to build software that not only works perfectly but also feels amazing to use.
                                        </p>
                                        <p>
                                            When I'm not coding, I'm exploring new design trends, contributing to open source, or learning the latest advancements in the mobile ecosystem. I believe in continuous learning and the power of clean, maintainable code.
                                        </p>
                                    </div>

                                    <div className="mt-12 flex flex-wrap items-center gap-8">
                                        <div>
                                            <h3 className="text-2xl font-black text-gray-900 dark:text-white">1+</h3>
                                            <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mt-1">Years Exp.</p>
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-black text-gray-900 dark:text-white">15+</h3>
                                            <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mt-1">Projects</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="experience"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-8"
                                >
                                    {internships.map((job, index) => (
                                        <div key={index} className="relative pl-8 border-l-2 border-gray-100 dark:border-gray-800 pb-2 last:pb-0">
                                            <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-4 border-white dark:border-black ${activeTab === 'Experience' ? 'bg-black dark:bg-white' : 'bg-gray-200'}`}></div>

                                            <div className="bg-[#FAFAFA] dark:bg-[#111] p-6 rounded-2xl border border-gray-50 dark:border-gray-800 hover:shadow-lg transition-shadow duration-300">
                                                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                                                    <div>
                                                        <h3 className="text-lg font-black text-gray-900 dark:text-white">{job.title}</h3>
                                                        <p className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mt-1">{job.company}</p>
                                                    </div>
                                                    <span className="px-3 py-1 rounded-full bg-black dark:bg-white text-white dark:text-black text-[10px] font-bold uppercase tracking-widest w-max">
                                                        {job.date}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
                                                    {job.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
