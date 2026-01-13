import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaReact, FaAngular, FaNodeJs, FaGithub, FaGitAlt, FaPython, FaJava } from 'react-icons/fa';
import { SiIonic, SiJavascript, SiTypescript, SiMongodb, SiSupabase, SiTailwindcss, SiMysql, SiC, SiNextdotjs } from 'react-icons/si';

const skills = [
    { name: 'React Native', icon: FaReact, category: 'Tech Stack' },
    { name: 'Ionic', icon: SiIonic, category: 'Tech Stack' },
    { name: 'Angular', icon: FaAngular, category: 'Tech Stack' },
    { name: 'React.js', icon: FaReact, category: 'Tech Stack' },
    { name: 'Next.js', icon: SiNextdotjs, category: 'Tech Stack' },
    { name: 'JavaScript', icon: SiJavascript, category: 'Languages' },
    { name: 'TypeScript', icon: SiTypescript, category: 'Languages' },
    { name: 'Python', icon: FaPython, category: 'Languages' },
    { name: 'Java', icon: FaJava, category: 'Languages' },
    { name: 'C', icon: SiC, category: 'Languages' },
    { name: 'Node.js', icon: FaNodeJs, category: 'Tech Stack' },
    { name: 'MongoDB', icon: SiMongodb, category: 'Tech Stack' },
    { name: 'Git / GitHub', icon: FaGithub, category: 'Tech Stack' },
    { name: 'Supabase', icon: SiSupabase, category: 'Tech Stack' },
    { name: 'Nativewind CSS', icon: SiTailwindcss, category: 'Tech Stack' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, category: 'Tech Stack' },
    { name: 'MySql', icon: SiMysql, category: 'Languages' }
];

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState('Tech Stack');
    const categories = ['Tech Stack', 'Languages'];

    const filteredSkills = skills.filter(skill => skill.category === activeCategory);

    return (
        <section id="skills" className="py-16 bg-white dark:bg-black transition-colors duration-300">
            <div className="w-full px-6 sm:px-12 lg:px-16">

                {/* Header Section */}
                <div className="max-w-7xl mx-auto mb-12 text-center">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-sm font-bold tracking-widest text-gray-400 dark:text-gray-500 uppercase mb-4 block"
                    >
                        Foundation
                    </motion.span>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
                        Technical Stack
                    </h2>
                    <div className="w-16 h-1 bg-black dark:bg-white mx-auto mt-6 rounded-full" />

                    {/* Category Toggles */}
                    <div className="flex justify-center gap-4 mt-8">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${activeCategory === category
                                    ? 'bg-black dark:bg-white text-white dark:text-black border-black dark:border-white shadow-lg'
                                    : 'bg-transparent text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Skills Container */}
                <div className="max-w-5xl mx-auto min-h-[200px]">
                    <div className="flex flex-wrap justify-center gap-4">
                        {filteredSkills.map((skill) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                className="px-6 py-3 rounded-[1.2rem] bg-[#FAFAFA] dark:bg-[#1a1a1a] text-gray-900 dark:text-gray-200 border-2 border-gray-50 dark:border-gray-800 font-bold text-xs transition-all duration-300 cursor-default shadow-sm hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] flex items-center gap-2 group hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black hover:border-black dark:hover:border-white"
                            >
                                <skill.icon className="w-4 h-4 text-gray-400 group-hover:text-white dark:group-hover:text-black transition-colors" />
                                {skill.name}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
