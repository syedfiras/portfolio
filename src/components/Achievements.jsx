import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

const internships = [
    {
        title: 'Web Development Internship',
        company: 'My Job Grow & IIT Hyderabad',
        date: '2025',
        description: 'Completed internship in collaboration with E&N IIT Hyderabad.',
        image: '/internship-iit.jpg'
    },
    {
        title: 'Web Development Course',
        company: 'My Job Grow',
        date: 'October 2025',
        description: 'Successfully completed Web Development Upskilling Course.',
        image: '/course-webdev.jpg'
    },
    {
        title: 'Frontend Internship',
        company: 'iTecz Solutions',
        date: 'March 2025 - June 2025',
        description: 'Developed web applications using Ionic and Angular.',
        image: '/internship-cert.jpg'
    }
];

const hackathons = [
    {
        title: 'CodeFest',
        role: 'Frontend Developer',
        description: 'Collaborated on building a responsive web application.',
        date: '2025',
        achievement: 'Participation',
        image: '/codefest-cert.jpg'
    },
    {
        title: 'HackPrix',
        role: 'Frontend Developer',
        description: 'Developed the user interface for a solution addressing real-world problems.',
        date: '2025',
        achievement: 'Participation',
        image: '/hackprix-cert.jpg'
    },
    {
        title: 'Innovex',
        role: 'Frontend Developer',
        description: 'Created an innovative project that was selected among the top teams.',
        date: '2025',
        achievement: 'Top 10',
        image: '/innovex-cert.jpg'
    },
    {
        title: 'AI HACKDAY BANGALURU',
        role: 'Full-Stack',
        description: 'Developed a website to help Content Creators using AI',
        date: '2025',
        achievement: 'Participation',
        image: '/bang.jpg'
    }
];

const Achievements = () => {
    return (
        <SectionWrapper id="achievements" className="py-20 bg-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                        Achievements & Internships
                    </h2>
                    <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
                        Recognition of my skills and participation in tech events.
                    </p>
                </div>

                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-white mb-8 border-l-4 border-primary pl-4">
                        Internships & Certifications
                    </h3>
                    <motion.div
                        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
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
                        {internships.map((intern, index) => (
                            <motion.div
                                key={index}
                                className="bg-slate-800 rounded-lg shadow-lg border border-slate-700 hover:border-primary transition-colors overflow-hidden"
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    show: { opacity: 1, y: 0 }
                                }}
                                whileHover={{ scale: 1.03 }}
                            >
                                <img className="h-48 w-full object-contain bg-white" src={intern.image} alt={intern.title} />
                                <div className="p-6">
                                    <h4 className="text-xl font-semibold text-white">{intern.title}</h4>
                                    <p className="text-primary mt-1">{intern.company}</p>
                                    <p className="text-gray-300 text-sm mt-2">{intern.description}</p>
                                    <p className="text-gray-400 text-xs mt-4">{intern.date}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <div>
                    <h3 className="text-2xl font-bold text-white mb-8 border-l-4 border-primary pl-4">
                        Hackathons Attended
                    </h3>
                    <motion.div
                        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
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
                        {hackathons.map((hack, index) => (
                            <motion.div
                                key={index}
                                className="bg-slate-800 rounded-lg shadow-lg border border-slate-700 hover:border-primary transition-colors overflow-hidden"
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    show: { opacity: 1, y: 0 }
                                }}
                                whileHover={{ scale: 1.03 }}
                            >
                                <img className="h-48 w-full object-contain bg-white" src={hack.image} alt={hack.title} />
                                <div className="p-6">
                                    <div className="flex justify-between items-start">
                                        <h4 className="text-xl font-semibold text-white">{hack.title}</h4>
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                                            {hack.achievement}
                                        </span>
                                    </div>
                                    <p className="text-gray-300 mt-3">{hack.description}</p>
                                    <div className="mt-4 flex justify-between items-center text-sm text-gray-400">
                                        <span>{hack.role}</span>
                                        <span>{hack.date}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Achievements;
