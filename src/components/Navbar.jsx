import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#combined' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          // Hide/show navbar on scroll
          if (currentScrollY > lastScrollY && currentScrollY > 100) {
            // Scrolling down - hide navbar
            setIsVisible(false);
          } else {
            // Scrolling up - show navbar
            setIsVisible(true);
          }
          setLastScrollY(currentScrollY);
          
          // Update background opacity based on scroll
          setScrolled(window.scrollY > 50);
          
          // Scroll spy logic
          const sections = navItems.map(item => ({
            id: item.href.substring(1),
            element: document.getElementById(item.href.substring(1))
          }));

          let currentSection = '';
          const scrollPosition = window.scrollY + 150;

          for (const section of sections) {
            if (section.element) {
              const offsetTop = section.element.offsetTop;
              const offsetBottom = offsetTop + section.element.offsetHeight;

              if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                currentSection = section.id;
                break;
              }
            }
          }

          if (window.scrollY < 100) {
            currentSection = 'home';
          }

          if (currentSection) {
            const activeNavItem = navItems.find(item => item.href.substring(1) === currentSection);
            if (activeNavItem) {
              setActiveItem(activeNavItem.name);
            }
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (e, href, name) => {
    e.preventDefault();
    setActiveItem(name);
    setMobileMenuOpen(false);
    
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({
        top: offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ 
          y: isVisible ? 0 : -120,
          transition: { duration: 0.4, ease: 'easeInOut' }
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'py-3 bg-[#020617]/90 backdrop-blur-xl border-b border-[#E11D48]/20 shadow-lg' 
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <motion.a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home', 'Home')}
            className="group relative flex items-center gap-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <div className="relative">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L13.5 8L19 9L15 13L16 19L12 16L8 19L9 13L5 9L10.5 8L12 2Z" fill="#E11D48" stroke="#E11D48" strokeWidth="1" />
                <circle cx="12" cy="11" r="2" fill="white" />
              </svg>
            </div>
            <span className="text-xl font-display font-bold tracking-tight">
              <span className="text-white">SYED</span>
              <span className="text-[#E11D48]">.DEV</span>
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-1">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, item.name)}
                  className="relative px-4 py-2 text-sm font-medium rounded-md cursor-pointer"
                  style={{ 
                    color: activeItem === item.name ? '#E11D48' : '#94A3B8'
                  }}
                  whileHover={{ color: '#E11D48' }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  {activeItem === item.name && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E11D48]"
                      transition={{ 
                        type: "spring", 
                        stiffness: 600, 
                        damping: 30,
                        mass: 0.5
                      }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </motion.a>
              ))}
            </div>

            <motion.a 
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact', 'Contact')}
              className="px-5 py-2 rounded-md text-sm font-medium text-white border border-[#E11D48] hover:bg-[#E11D48] transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Hire Me
            </motion.a>
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button 
            className="md:hidden text-slate-300 hover:text-white transition-colors relative z-50"
            onClick={() => setMobileMenuOpen(true)}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.1 }}
          >
            <Menu size={28} />
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence mode="wait">
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-[#020617] backdrop-blur-xl flex flex-col items-center justify-center"
          >
            <motion.button 
              className="absolute top-6 right-6 text-slate-400 hover:text-white transition-all"
              onClick={() => setMobileMenuOpen(false)}
              whileHover={{ rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <X size={32} />
            </motion.button>
            
            <div className="flex flex-col items-center space-y-8 text-2xl font-display">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ delay: i * 0.1, duration: 0.3, type: "spring", stiffness: 300 }}
                  onClick={(e) => handleNavClick(e, item.href, item.name)}
                  className="relative group cursor-pointer"
                >
                  <span className={`text-slate-400 hover:text-white transition-colors duration-300 ${activeItem === item.name ? 'text-[#E11D48]' : ''}`}>
                    {item.name}
                  </span>
                  {activeItem === item.name && (
                    <motion.div 
                      className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[#E11D48]"
                      layoutId="mobileIndicator"
                      transition={{ type: "spring", stiffness: 600, damping: 30 }}
                    />
                  )}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ delay: 0.4, duration: 0.3, type: "spring", stiffness: 300 }}
                onClick={(e) => handleNavClick(e, '#contact', 'Contact')}
                className="mt-8 px-8 py-3 rounded-md text-lg font-medium bg-[#E11D48] text-white hover:bg-[#ff2a5f] transition-all cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Hire Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;