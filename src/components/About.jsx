import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 bg-white dark:bg-black transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-6 sm:px-12 lg:px-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <span className="text-2xl font-bold tracking-widest text-gray-400 dark:text-gray-500 uppercase mb-6 block">
                        About Me
                    </span>

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

                    <div className="mt-12 flex items-center gap-8">
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
            </div>
        </section>
    );
};

export default About;
