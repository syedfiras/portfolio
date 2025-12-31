import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const contactMethods = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
            title: 'Direct Call',
            value: '+91 90357 89815',
            href: 'tel:+919035789815',
            label: 'Available 10am - 8pm'
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            title: 'Email Pulse',
            value: 'syedfiras06@gmail.com',
            href: 'mailto:syedfiras06@gmail.com',
            label: 'Usually reply within 24h'
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
            ),
            title: 'GitHub Portal',
            value: 'github.com/syedfiras',
            href: 'https://github.com/syedfiras',
            label: 'Check my latest code'
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            ),
            title: 'LinkedIn',
            value: 'syedfiras7',
            href: 'https://www.linkedin.com/in/syedfiras7/',
            label: 'Let\'s link up'
        }
    ];

    return (
        <section id="contact" className="py-8 bg-[#FAFAFA] dark:bg-[#0a0a0a] transition-colors duration-300">
            <div className="w-full px-6 sm:px-12 lg:px-16">

                {/* Header Section */}
                <div className="max-w-7xl mx-auto mb-8 text-center md:text-left">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-xs font-bold tracking-widest text-gray-400 dark:text-gray-500 uppercase mb-4 block"
                    >
                        Communication
                    </motion.span>
                    <h2 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white tracking-tighter leading-none">
                        Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-400 dark:from-white dark:to-gray-500 font-black">Connect</span>
                    </h2>
                </div>

                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">

                    {/* Left: Contact Information */}
                    <div className="lg:w-1/3 space-y-6">
                        {contactMethods.map((method, index) => (
                            <motion.a
                                key={index}
                                href={method.href}
                                target={method.href.startsWith('http') ? '_blank' : undefined}
                                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group block bg-white dark:bg-[#111] rounded-2xl p-4 border border-gray-100 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-500 hover:shadow-lg"
                            >
                                <div className="flex items-center gap-6">
                                    <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-black/10">
                                        {React.cloneElement(method.icon, { className: "w-5 h-5" })}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">{method.title}</p>
                                        <p className="text-base font-bold text-gray-900 dark:text-white truncate tracking-tight">{method.value}</p>
                                        <p className="text-xs font-medium text-gray-400 dark:text-gray-500 mt-1">{method.label}</p>
                                    </div>
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <svg className="w-5 h-5 text-black dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    {/* Right: Premium Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:w-2/3 bg-white dark:bg-[#111] rounded-[2rem] p-6 md:p-8 border border-gray-100 dark:border-gray-800 shadow-xl relative overflow-hidden"
                    >
                        {/* Decorative background element */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 dark:bg-white/5 rounded-bl-[100%] pointer-events-none" />

                        <div className="relative z-10">
                            <h3 className="text-lg font-black text-gray-900 dark:text-white tracking-tighter mb-6">Send a Message</h3>

                            <form action="https://formsubmit.co/syedfiras06@gmail.com" method="POST" className="space-y-6">
                                <input type="hidden" name="_captcha" value="false" />
                                <input type="hidden" name="_subject" value="New Portfolio Inquiry!" />

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Full Identity</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            placeholder="Your Name"
                                            className="w-full px-6 py-3 bg-[#FAFAFA] dark:bg-[#1a1a1a] rounded-xl text-gray-900 dark:text-white font-bold text-sm border-2 border-transparent focus:border-black dark:focus:border-white focus:bg-white dark:focus:bg-black transition-all duration-300 outline-none"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            placeholder="hello@example.com"
                                            className="w-full px-6 py-3 bg-[#FAFAFA] dark:bg-[#1a1a1a] rounded-xl text-gray-900 dark:text-white font-bold text-sm border-2 border-transparent focus:border-black dark:focus:border-white focus:bg-white dark:focus:bg-black transition-all duration-300 outline-none"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Project Scope</label>
                                    <textarea
                                        name="message"
                                        rows="4"
                                        required
                                        placeholder="Describe your vision or inquiry..."
                                        className="w-full px-6 py-4 bg-[#FAFAFA] dark:bg-[#1a1a1a] rounded-2xl text-gray-900 dark:text-white font-bold text-sm border-2 border-transparent focus:border-black dark:focus:border-white focus:bg-white dark:focus:bg-black transition-all duration-300 outline-none resize-none"
                                    ></textarea>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="w-full py-4 bg-black dark:bg-white text-white dark:text-black rounded-xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-black/10 dark:shadow-white/5 hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-4"
                                >
                                    Transmit Message
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
