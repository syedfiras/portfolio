import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/syedfiras", label: "GitHub", color: "#E11D48" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/syedfiras7", label: "LinkedIn", color: "#2563EB" },
    { icon: FaInstagram, href: "https://www.instagram.com/_.syedfiras", label: "Instagram", color: "#60A5FA" },
  ];

  const navItems = ['Home', 'About', 'Projects', 'Contact'];

  return (
    <footer className="relative py-16 overflow-hidden border-t border-[#E11D48]/20 bg-gradient-to-b from-[#020617] to-[#0A0F2A]">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footerWeb" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M30 0 L30 60 M0 30 L60 30" stroke="#E11D48" strokeWidth="0.5" fill="none"/>
              <circle cx="30" cy="30" r="10" stroke="#2563EB" strokeWidth="0.3" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footerWeb)"/>
        </svg>
      </div>

      {/* Glowing orb effects */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E11D48]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563EB]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#E11D48] flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L13.5 8L19 9L15 13L16 19L12 16L8 19L9 13L5 9L10.5 8L12 2Z" fill="white" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-white">
                SYED<span className="text-[#E11D48]">.DEV</span>
              </h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Your friendly neighborhood web developer crafting cinematic digital experiences across the multiverse.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative w-10 h-10 rounded-full bg-[#0F172A] border border-slate-700 flex items-center justify-center text-slate-400 hover:border-[#E11D48] hover:text-[#E11D48] transition-all duration-300"
                >
                  <social.icon size={18} />
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-[#0F172A] border border-[#E11D48]/30 rounded text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    {social.label}
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#60A5FA] mb-4">
              <span className="inline-block w-2 h-2 rounded-full bg-[#E11D48] mr-2" />
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-sm text-slate-400 hover:text-[#E11D48] transition-all duration-300 inline-block hover:translate-x-1"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#60A5FA] mb-4">
              <span className="inline-block w-2 h-2 rounded-full bg-[#2563EB] mr-2" />
              Tech Arsenal
            </h3>
            <ul className="space-y-2">
              {['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Node.js'].map((tech) => (
                <li key={tech}>
                  <span className="text-sm text-slate-400 inline-flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#E11D48]" />
                    {tech}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#60A5FA] mb-4">
              <span className="inline-block w-2 h-2 rounded-full bg-[#E11D48] mr-2 animate-pulse" />
              Web-Wide Contact
            </h3>
            <div className="space-y-3">
              <div className="group">
                <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-1">EMAIL</p>
                <a href="mailto:syedfiras06@gmail.com" className="text-sm text-slate-300 hover:text-[#E11D48] transition-colors font-mono">
                  syedfiras06@gmail.com
                </a>
              </div>
              <div className="group">
                <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-1">LOCATION</p>
                <p className="text-sm text-slate-300 font-mono">
                  Bangalore, India
                </p>
              </div>
              <div className="group">
                <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-1">SPIDER-SENSE</p>
                <p className="text-sm text-[#E11D48] font-mono">
                  Always Active
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs text-slate-500 font-mono">
            <span className="text-[#E11D48]">© {new Date().getFullYear()}</span> SYED.DEV — Swinging through the web since 2024
          </p>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-[10px] text-slate-600 font-mono">
              <span className="inline-block w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
              <span className="text-slate-500">SPIDER-SENSE:</span>
              <span className="text-[#E11D48]">ACTIVE</span>
            </div>
            
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group relative px-6 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-slate-300 border border-slate-700 hover:border-[#E11D48] hover:text-[#E11D48] transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">BACK TO TOP ↑</span>
              <div className="absolute inset-0 bg-[#E11D48]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;