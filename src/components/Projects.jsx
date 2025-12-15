import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import creatorflowImg from "../assets/cfai.png";
import sahaya from "../assets/sahaya.jpeg";
import expen from "../assets/expence.png";
const projects = [
    {
        title: 'SAHAYA - Women Safety App',
        description: 'A dedicated safety application designed to help women in distress. Features include real-time location sharing, emergency alerts, and quick access to helplines.',
        tech: ['React Native', 'Geolocation', 'Emergency API'],
        image: sahaya,
        link: 'https://expo.dev/artifacts/eas/skvxeLDnrLZTLX84jWSTax.apk'
    },
    {
        title: 'Gym Management App',
        description: 'A comprehensive solution for managing gym memberships, tracking workouts, and scheduling classes. Built with Ionic and Angular for cross-platform performance.',
        tech: ['Ionic', 'Angular', 'TypeScript'],
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        link: 'https://gymnetsolutions.netlify.app/login'
    },
    // {
    //     title: 'School Management Website',
    //     description: 'A comprehensive platform for managing school operations. Built with Ionic and Angular for the frontend and Django for a robust backend.',
    //     tech: ['Ionic', 'Angular', 'Django'],
    //     image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    //     link: '#'
    // },
    {
        title: 'TODO-list App',
        description: 'A dedicated TODo-list application designed to help list your tasks.',
        tech: ['React Native', 'Node.js', 'Mongodb'],
        image: '',
        link: 'https://expo.dev/artifacts/eas/pJ5sdF44qNbrn2Aw74eZx4.apk'
    },
     {
        title: 'ExpensesTracker App',
        description: 'A Application thats trackers your Expense ',
        tech: ['React Native'],
        image: expen,
        link: ''
    },
     {
        title: 'CreatorFlow',
        description: 'CreatorFlow AI helps creators beat creative blocks with instant scripts, smart analysis, and scroll-stopping hooks.',
        tech: ['React','Node.js','Supabase'],
        image: creatorflowImg,
        link: 'https://cfai.lovable.app'
    },
];

const Projects = () => {
    return (
        <SectionWrapper id="projects" className="py-20 bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                        Featured Projects
                    </h2>
                    <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
                        A selection of my recent work in mobile development.
                    </p>
                </div>

                <motion.div
                    className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-slate-800 border border-slate-700"
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                show: { opacity: 1, y: 0 }
                            }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="shrink-0">
                                <img className="h-48 w-full object-cover" src={project.image} alt={project.title} />
                            </div>
                            <div className="flex-1 p-6 flex flex-col justify-between">
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-white">
                                        {project.title}
                                    </h3>
                                    <p className="mt-3 text-base text-gray-400">
                                        {project.description}
                                    </p>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {project.tech.map((tech) => (
                                            <span key={tech} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-700 text-primary border border-slate-600">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <a href={project.link} className="text-base font-semibold text-primary hover:text-sky-400">
                                        View Project &rarr;
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </SectionWrapper>
    );
};

export default Projects;
