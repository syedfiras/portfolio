import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-dark pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
                <motion.div
                    className="md:w-1/2 text-center md:text-left"
                    initial={{ opacity: 0, x: { base: -20, md: -50 } }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: { base: 0.1, md: 0.5 } }}
                    transition={{ duration: 0.4 }}
                >
                    <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                        <span className="block">Hi, I'm <span className="text-primary">Syed Firas</span></span>
                        <span className="block text-2xl md:text-3xl mt-2 text-gray-300">React Native Developer</span>
                    </h1>
                    <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                        I build beautiful, high-performance mobile applications. Currently studying at <span className="text-white font-semibold">Anjuman Institute of Technology and Management</span>.
                    </p>
                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center md:justify-start">
                        <div className="rounded-md shadow">
                            <a href="#projects" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-sky-600 md:py-4 md:text-lg transition-colors">
                                View Projects
                            </a>
                        </div>
                        <div className="mt-3 sm:mt-0 sm:ml-3">
                            <a href="#contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-slate-800 hover:bg-slate-700 md:py-4 md:text-lg transition-colors">
                                Contact Me
                            </a>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
                    initial={{ opacity: 0, x: { base: 20, md: 50 } }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: { base: 0.1, md: 0.5 } }}
                    transition={{ duration: 0.4 }}
                >
                    <div className=" w-64 h-64 md:w-80 md:h-80 bg-linear-to-tr from-primary to-secondary rounded-full opacity-20 blur-3xl absolute animate-pulse"></div>
                    <img
                        src="/profile.jpg"
                        alt="Syed Firas"
                        className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-slate-700 shadow-2xl object-cover"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
