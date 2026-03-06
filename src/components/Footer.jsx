import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="py-12 border-t border-[#1b2d45] bg-white transition-colors duration-300 w-full">
            <div className="max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <div>
                        <h3 className="text-xl font-black text-[#1b2d45] mb-6 tracking-tight">
                            Syed Firas Peerzada
                        </h3>
                        <p className="text-[#2b4566] text-base mb-6 leading-relaxed max-w-xs">
                            Mobile Developer specializing in React Native and cross-platform applications. Building digital experiences that matter.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="https://github.com/syedfiras" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#2b4566] hover:bg-[#1b2d45] hover:text-[#fdf8e3] transition-all duration-300 neo-brutal-sm">
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/syedfiras7" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#2b4566] hover:bg-[#0077b5] hover:text-[#fdf8e3] transition-all duration-300 neo-brutal-sm">
                                <FaLinkedin />
                            </a>
                            <a href="https://www.instagram.com/_.syedfiras" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#2b4566] hover:bg-[#E1306C] hover:text-[#fdf8e3] transition-all duration-300 neo-brutal-sm">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="text-base font-bold uppercase tracking-widest text-[#1b2d45] mb-6">Navigation</h3>
                        <ul className="space-y-4">
                            {['Home', 'About', 'Projects', 'Achievements', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        className="text-base text-[#2b4566] hover:text-[#1b2d45] hover:pl-2 transition-all duration-300 inline-block"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-base font-bold uppercase tracking-widest text-[#1b2d45] mb-6">Expertise</h3>
                        <ul className="space-y-4">
                            <li className="text-base text-[#2b4566]">Mobile App Development</li>
                            <li className="text-base text-[#2b4566]">Web Development</li>
                            <li className="text-base text-[#2b4566]">UI / UX Design</li>
                            <li className="text-base text-[#2b4566]">Cross-Platform Solutions</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-base font-bold uppercase tracking-widest text-[#1b2d45] mb-6">Contact</h3>
                        <div className="space-y-4">
                            <div>
                                <p className="text-sm font-bold text-[#6b7280] uppercase tracking-wider mb-1">Email</p>
                                <a href="mailto:syedfiras06@gmail.com" className="text-base text-[#1b2d45] font-medium hover:text-primary transition-colors">
                                    syedfiras06@gmail.com
                                </a>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-[#6b7280] uppercase tracking-wider mb-1">Phone</p>
                                <p className="text-base text-[#1b2d45] font-medium">
                                    +91 90357 89815
                                </p>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-[#6b7280] uppercase tracking-wider mb-1">Location</p>
                                <p className="text-base text-[#1b2d45] font-medium">
                                    Bangalore, Karnataka, India
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-[#1b2d45] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-[#6b7280] font-medium">
                        © {new Date().getFullYear()} Syed Firas Peerzada. All rights reserved.
                    </p>
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="px-6 py-2 rounded-full bg-white hover:bg-[#1b2d45] hover:text-[#fdf8e3] text-sm font-bold uppercase tracking-widest text-[#1b2d45] transition-all duration-300 neo-brutal-sm"
                    >
                        Back to Top
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
