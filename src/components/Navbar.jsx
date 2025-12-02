import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-dark/90 backdrop-blur-md fixed w-full z-50 border-b border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="shrink-0">
                            <span className="text-primary font-bold text-xl flex items-center gap-2">
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                                <span className="hidden md:block">DevPortfolio</span>
                            </span>
                        </div>
                    </div>

                    {/* Desktop navigation */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                        <div className="flex items-baseline space-x-4">
                            <a href="#home" className="hover:text-primary text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
                            <a href="#skills" className="hover:text-primary text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">Skills</a>
                            <a href="#projects" className="hover:text-primary text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">Projects</a>
                            <a href="#achievements" className="hover:text-primary text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">Achievements</a>
                            <a href="#contact" className="bg-primary hover:bg-sky-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
                            <a href="/syedfiras.pdf" className="bg-primary hover:bg-sky-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors ml-2">Resume</a>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile navigation panel */}
            {isOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
                        <a href="#home" className="hover:text-primary text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
                        <a href="#skills" className="hover:text-primary text-gray-300 block px-3 py-2 rounded-md text-base font-medium">Skills</a>
                        <a href="#projects" className="hover:text-primary text-gray-300 block px-3 py-2 rounded-md text-base font-medium">Projects</a>
                        <a href="#achievements" className="hover:text-primary text-gray-300 block px-3 py-2 rounded-md text-base font-medium">Achievements</a>
                        <a href="#contact" className="hover:text-primary text-gray-300 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
                        <a href="/syedfiras.pdf" className="bg-primary hover:bg-sky-600 text-white block px-3 py-2 rounded-md text-base font-medium mt-2">Resume</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
