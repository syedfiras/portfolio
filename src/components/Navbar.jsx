import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // check initial theme
    setIsDark(document.documentElement.classList.contains('dark'));

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'projects', 'achievements', 'contact'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top >= -100 && rect.top <= 300;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    e.stopPropagation();

    // Close mobile menu first
    setIsOpen(false);

    const targetId = href.substring(1);
    const element = document.getElementById(targetId);

    if (element) {
      // Small delay to allow menu to close on mobile
      setTimeout(() => {
        // Get navbar height for offset
        const navbarHeight = 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navbarHeight;

        // Try smooth scroll with fallback for older browsers
        try {
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        } catch (error) {
          // Fallback for browsers that don't support smooth scrolling
          window.scrollTo(0, offsetPosition);
        }

        // Update active section
        setActiveSection(targetId);

        // Update URL hash without jumping
        if (window.history && window.history.pushState) {
          window.history.pushState(null, '', href);
        }
      }, 100);
    }
  };

  const toggleTheme = () => {
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
        ? 'bg-white/80 dark:bg-black/80 backdrop-blur-xl shadow-md border-b border-gray-100 dark:border-gray-800'
        : 'bg-transparent'
        }`}
    >
      <div className="w-full h-16 flex items-center justify-between px-6 sm:px-12 lg:px-16">
        {/* Logo/Name - visible on mobile */}
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-lg font-black tracking-tighter text-black dark:text-white md:hidden"
        >
          Firas
        </motion.a>

        {/* Desktop Nav - centered */}
        <div className="hidden md:flex items-center gap-2 mx-auto bg-white/50 dark:bg-black/50 backdrop-blur-md px-6 py-2 rounded-full border border-gray-100 dark:border-gray-800 shadow-sm">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`relative px-4 py-2 text-xs font-bold uppercase tracking-widest transition-colors ${activeSection === link.href.substring(1)
                ? 'text-black dark:text-white'
                : 'text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white'
                }`}
            >
              {link.name}
              {activeSection === link.href.substring(1) && (
                <motion.span
                  layoutId="activeTab"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-black dark:bg-white rounded-full mx-3"
                />
              )}
            </motion.a>
          ))}

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            download="Syed_Firas_Resume.pdf"
            className="ml-4 px-6 py-2 rounded-full bg-black dark:bg-white text-white dark:text-black text-xs font-bold uppercase tracking-widest hover:bg-gray-800 dark:hover:bg-gray-200 transition-all shadow-md"
          >
            Resume
          </a>

          {/* Desktop Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <div className={`w-3 h-3 rounded-full ${isDark ? 'bg-white' : 'bg-black'}`} />
          </button>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
          >
            <div className={`w-4 h-4 rounded-full ${isDark ? 'bg-white' : 'bg-black'}`} />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-black dark:text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white/95 dark:bg-black/95 backdrop-blur-xl border-t border-gray-100 dark:border-gray-800 shadow-xl"
          >
            <div className="px-6 py-6 space-y-2">
              {navLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`block px-6 py-4 text-sm font-bold uppercase tracking-widest rounded-2xl transition-all ${activeSection === link.href.substring(1)
                    ? 'bg-gray-100 dark:bg-[#111] text-black dark:text-white'
                    : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-[#111] hover:text-black dark:hover:text-white'
                    }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="/resume.pdf"
                download="Syed_Firas_Resume.pdf"
                className="block px-6 py-4 text-sm font-bold uppercase tracking-widest rounded-2xl transition-all text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-[#111] hover:text-black dark:hover:text-white"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
