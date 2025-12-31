import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="py-12 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-black transition-colors duration-300 w-full">
            <div className="max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <div>
                        <h3 className="text-xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
                            Syed Firas Peerzada
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400 text-base mb-6 leading-relaxed max-w-xs">
                            Mobile Developer specializing in React Native and cross-platform applications. Building digital experiences that matter.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="https://github.com/syedfiras" className="w-10 h-10 rounded-full bg-gray-50 dark:bg-[#111] flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300">
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/syedfiras7" className="w-10 h-10 rounded-full bg-gray-50 dark:bg-[#111] flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-[#0077b5] hover:text-white transition-all duration-300">
                                <FaLinkedin />
                            </a>
                            <a href="https://www.instagram.com/_.syedfiras" className="w-10 h-10 rounded-full bg-gray-50 dark:bg-[#111] flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-[#E1306C] hover:text-white transition-all duration-300">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="text-base font-bold uppercase tracking-widest text-gray-900 dark:text-white mb-6">Navigation</h3>
                        <ul className="space-y-4">
                            {['Home', 'About', 'Projects', 'Achievements', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        className="text-base text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:pl-2 transition-all duration-300 inline-block"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-base font-bold uppercase tracking-widest text-gray-900 dark:text-white mb-6">Expertise</h3>
                        <ul className="space-y-4">
                            <li className="text-base text-gray-500 dark:text-gray-400">Mobile App Development</li>
                            <li className="text-base text-gray-500 dark:text-gray-400">Web Development</li>
                            <li className="text-base text-gray-500 dark:text-gray-400">UI / UX Design</li>
                            <li className="text-base text-gray-500 dark:text-gray-400">Cross-Platform Solutions</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-base font-bold uppercase tracking-widest text-gray-900 dark:text-white mb-6">Contact</h3>
                        <div className="space-y-4">
                            <div>
                                <p className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1">Email</p>
                                <a href="mailto:syedfiras06@gmail.com" className="text-base text-gray-900 dark:text-white font-medium hover:text-primary transition-colors">
                                    syedfiras06@gmail.com
                                </a>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1">Phone</p>
                                <p className="text-base text-gray-900 dark:text-white font-medium">
                                    +91 90357 89815
                                </p>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1">Location</p>
                                <p className="text-base text-gray-900 dark:text-white font-medium">
                                    Bangalore, Karnataka, India
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-100 dark:border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-400 dark:text-gray-500 font-medium">
                        © {new Date().getFullYear()} Syed Firas Peerzada. All rights reserved.
                    </p>
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="px-6 py-2 rounded-full bg-gray-50 dark:bg-[#111] hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black text-sm font-bold uppercase tracking-widest text-gray-900 dark:text-white transition-all duration-300"
                    >
                        Back to Top
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
