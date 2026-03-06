import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FaReact, FaAngular, FaNodeJs, FaGithub, FaPython, FaJava } from 'react-icons/fa';
import { SiIonic, SiJavascript, SiTypescript, SiMongodb, SiSupabase, SiTailwindcss, SiMysql, SiC, SiNextdotjs } from 'react-icons/si';

const skillsData = [
    { name: 'React Native', icon: FaReact, category: 'Tech Stack' },
    { name: 'Ionic', icon: SiIonic, category: 'Tech Stack' },
    { name: 'Angular', icon: FaAngular, category: 'Tech Stack' },
    { name: 'React.js', icon: FaReact, category: 'Tech Stack' },
    { name: 'Next.js', icon: SiNextdotjs, category: 'Tech Stack' },
    { name: 'Node.js', icon: FaNodeJs, category: 'Tech Stack' },
    { name: 'MongoDB', icon: SiMongodb, category: 'Tech Stack' },
    { name: 'Git / GitHub', icon: FaGithub, category: 'Tech Stack' },
    { name: 'Supabase', icon: SiSupabase, category: 'Tech Stack' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, category: 'Tech Stack' },
    { name: 'JavaScript', icon: SiJavascript, category: 'Languages' },
    { name: 'TypeScript', icon: SiTypescript, category: 'Languages' },
    { name: 'Python', icon: FaPython, category: 'Languages' },
    { name: 'Java', icon: FaJava, category: 'Languages' },
    { name: 'C', icon: SiC, category: 'Languages' },
    { name: 'MySql', icon: SiMysql, category: 'Languages' }
];

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
        color: 'bg-[#f4efd8] text-[#2b4566] border-[#1b2d45]',
        achievement: 'Active'
    },
];

const About = () => {
    const [activeTab, setActiveTab] = useState('About Me');
    const tabs = ['About Me', 'Experience', 'Skills'];

    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax values
    const yParallaxFast = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const yParallaxSlow = useTransform(scrollYProgress, [0, 1], [50, -50]);

    return (
        <section id="about" ref={containerRef} className="py-20 bg-white transition-colors duration-300 relative overflow-hidden">
            {/* Parallax Background Decorations */}
            <motion.div style={{ y: yParallaxSlow }} className="absolute -left-20 top-20 w-40 h-40 bg-[#f4efd8] rounded-full mix-blend-multiply -z-10 blur-xl" />
            <motion.div style={{ y: yParallaxFast }} className="absolute -right-10 bottom-20 w-32 h-32 bg-[#f4efd8] rounded-full mix-blend-multiply -z-10 blur-xl" />

            <div className="max-w-4xl mx-auto px-6 sm:px-12 lg:px-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12 relative z-10">
                        <motion.span
                            style={{ y: useTransform(scrollYProgress, [0, 1], [20, -20]) }}
                            className="text-2xl font-bold tracking-widest text-[#6b7280] uppercase block"
                        >
                            Profile
                        </motion.span>

                        {/* Toggle Buttons */}
                        <div className="flex gap-4 bg-white p-1.5 rounded-full w-max neo-brutal-sm">
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${activeTab === tab
                                        ? 'bg-[#1b2d45] text-[#fdf8e3] neo-brutal-sm'
                                        : 'text-[#2b4566] hover:text-[#1b2d45]'
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="min-h-[400px]">
                        <AnimatePresence mode="wait">
                            {activeTab === 'About Me' && (
                                <motion.div
                                    key="about"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h2 className="text-2xl md:text-3xl font-black text-[#1b2d45] mb-8 leading-relaxed">
                                        I'm a <span className="text-[#6b7280]">passionate developer</span> focused on crafting <span className="text-[#6b7280]">intuitive</span> and <span className="text-[#6b7280]">engaging</span> digital experiences.
                                    </h2>

                                    <div className="text-sm text-[#2b4566] leading-7 space-y-6 font-medium">
                                        <p>
                                            With a strong foundation in <strong className="text-[#1b2d45]">React Native</strong> and <strong className="text-[#1b2d45]">Modern Web Technologies</strong>, I bridge the gap between design and engineering. My goal is to build software that not only works perfectly but also feels amazing to use.
                                        </p>
                                        <p>
                                            When I'm not coding, I'm exploring new design trends, contributing to open source, or learning the latest advancements in the mobile ecosystem. I believe in continuous learning and the power of clean, maintainable code.
                                        </p>
                                    </div>

                                    <div className="mt-12 flex flex-wrap items-center gap-8">
                                        <div>
                                            <h3 className="text-2xl font-black text-[#1b2d45]">1+</h3>
                                            <p className="text-[10px] uppercase tracking-widest text-[#2b4566] font-bold mt-1">Years Exp.</p>
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-black text-[#1b2d45]">15+</h3>
                                            <p className="text-[10px] uppercase tracking-widest text-[#2b4566] font-bold mt-1">Projects</p>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === 'Experience' && (
                                <motion.div
                                    key="experience"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-8"
                                >
                                    {internships.map((job, index) => (
                                        <div key={index} className="relative pl-8 border-l-2 border-[#1b2d45] pb-2 last:pb-0">
                                            <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-4 border-white ${activeTab === 'Experience' ? 'bg-[#1b2d45]' : 'bg-[#f4efd8]'}`}></div>

                                            <div className="bg-white p-6 rounded-2xl neo-brutal">
                                                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                                                    <div>
                                                        <h3 className="text-lg font-black text-[#1b2d45]">{job.title}</h3>
                                                        <p className="text-xs font-bold text-[#6b7280] uppercase tracking-wider mt-1">{job.company}</p>
                                                    </div>
                                                    <span className="px-3 py-1 rounded-full bg-[#1b2d45] text-[#fdf8e3] text-[10px] font-bold uppercase tracking-widest w-max neo-brutal-sm">
                                                        {job.date}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-[#2b4566] font-medium leading-relaxed">
                                                    {job.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            )}

                            {activeTab === 'Skills' && (
                                <motion.div
                                    key="skills"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-12"
                                >
                                    <div>
                                        <h3 className="text-xl font-black text-[#1b2d45] mb-6 flex items-center gap-3">
                                            <div className="w-3 h-3 rounded-full bg-[#ff5470] border-2 border-[#1b2d45]"></div>
                                            Tech Stack
                                        </h3>
                                        <div className="flex flex-wrap gap-4">
                                            {skillsData.filter(s => s.category === 'Tech Stack').map((skill) => (
                                                <div key={skill.name} className="px-5 py-3 rounded-2xl bg-white text-[#1b2d45] font-bold text-sm flex items-center gap-3 neo-brutal-sm hover:-translate-y-1 transition-transform cursor-pointer">
                                                    <skill.icon className="w-5 h-5 text-[#ff5470]" />
                                                    {skill.name}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-black text-[#1b2d45] mb-6 flex items-center gap-3">
                                            <div className="w-3 h-3 rounded-full bg-[#00ebc7] border-2 border-[#1b2d45]"></div>
                                            Languages
                                        </h3>
                                        <div className="flex flex-wrap gap-4">
                                            {skillsData.filter(s => s.category === 'Languages').map((skill) => (
                                                <div key={skill.name} className="px-5 py-3 rounded-2xl bg-white text-[#1b2d45] font-bold text-sm flex items-center gap-3 neo-brutal-sm hover:-translate-y-1 transition-transform cursor-pointer">
                                                    <skill.icon className="w-5 h-5 text-[#00ebc7]" />
                                                    {skill.name}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div >
        </section >
    );
};

export default About;
