import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

const skills = [
    { name: 'React Native', level: 'Intermediate', icon: '📱' },
    { name: 'Ionic', level: 'Intermediate', icon: '⚡' },
    { name: 'Angular', level: 'Intermediate', icon: '🅰️' },
    { name: 'React.js', level: 'Intermediate', icon: '⚛️' },
    { name: 'JavaScript (ES6+)', level: 'Intermediate', icon: '💛' },
    { name: 'Node.js', level: 'Intermediate', icon: '🟢' },
    { name: 'MongoDB', level: 'Intermediate', icon: '🍃' },
    { name: 'Git / GitHub', level: 'Intermediate', icon: '🐙' },
];

const Skills = () => {
    return (
        <SectionWrapper id="skills" className="py-20 bg-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                        Technical Skills
                    </h2>
                    <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
                        My tech stack and tools I use to build amazing apps.
                    </p>
                </div>

                <motion.div
                    className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4"
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    }}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: { base: 0.1, md: 0.25 } }}
                >
                    {skills.map((skill) => (
                        <motion.div
                            key={skill.name}
                            className="bg-slate-800 rounded-lg p-6 text-center hover:bg-slate-700 transition-colors shadow-lg border border-slate-700"
                            variants={{
                                hidden: { opacity: 0, y: { base: 10, md: 20 } },
                                show: { opacity: 1, y: 0, transition: { duration: 0.15 } }
                            }}
                        >
                            <div className="text-4xl mb-4">{skill.icon}</div>
                            <h3 className="text-lg font-medium text-white">{skill.name}</h3>
                            <p className="mt-2 text-sm text-primary">{skill.level}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </SectionWrapper>
    );
};

export default Skills;
