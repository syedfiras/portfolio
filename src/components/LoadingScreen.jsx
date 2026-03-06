import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = () => {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Precise progress tracking
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                const increment = Math.random() * 15;
                return Math.min(prev + increment, 100);
            });
        }, 150);

        const hideLoading = () => {
            setTimeout(() => {
                setLoading(false);
            }, 800);
        };

        if (document.readyState === 'complete') {
            setTimeout(hideLoading, 2000);
        } else {
            window.addEventListener('load', () => {
                setTimeout(hideLoading, 2000);
            });
            setTimeout(hideLoading, 4000);
        }

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence mode="wait">
            {loading && (
                <motion.div
                    key="loader"
                    initial={{ opacity: 1 }}
                    exit={{
                        y: '-100%',
                        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
                    }}
                    className="fixed inset-0 z-[9999] bg-[var(--color-bg-main)] flex flex-col items-center justify-center p-6 overflow-hidden border-b-4 border-black"
                >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1b2d45 2px, transparent 2px)', backgroundSize: '30px 30px' }}>
                    </div>

                    <div className="relative w-full max-w-lg bg-white border-4 border-[#1b2d45] shadow-[12px_12px_0_0_#1b2d45] p-8 md:p-12 mb-8 transform -rotate-1">
                        {/* Name & Role */}
                        <div className="mb-10 text-center border-b-4 border-[#1b2d45] pb-8">
                            <motion.h1
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, ease: "backOut" }}
                                className="text-[#1b2d45] text-3xl md:text-5xl font-black tracking-tighter uppercase mb-4"
                            >
                                Syed Firas
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                                className="bg-[#ff5470] text-white inline-block px-4 py-1 text-xs md:text-sm font-bold tracking-widest uppercase border-2 border-[#1b2d45] shadow-[4px_4px_0_0_#1b2d45]"
                            >
                                Mobile Experience Architect
                            </motion.p>
                        </div>

                        {/* Bold Progress Bar */}
                        <div className="relative flex flex-col items-center">
                            <div className="w-full h-12 border-4 border-[#1b2d45] bg-white relative overflow-hidden mb-4">
                                <motion.div
                                    className="absolute top-0 left-0 h-full bg-[#00ebc7] border-r-4 border-[#1b2d45]"
                                    style={{ width: `${progress}%` }}
                                    transition={{ ease: "linear" }}
                                />
                                <div className="absolute inset-0 flex items-center justify-center mix-blend-difference">
                                    <span className="text-xl font-black text-white tracking-widest">
                                        {Math.floor(progress)}%
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Status Bits */}
                        <div className="flex justify-between text-[10px] md:text-xs font-black uppercase tracking-widest text-[#1b2d45] mt-6">
                            <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity }}>
                                {progress < 30 ? 'BOOTING...' : progress < 70 ? 'LOADING ASSETS...' : 'READY'}
                            </motion.span>
                            <span>SYS_VOL: 1.0.4</span>
                        </div>
                    </div>

                    {/* Marquee Banner */}
                    <div className="absolute bottom-10 py-3 bg-[#1b2d45] text-white w-[110vw] -rotate-2 border-y-4 border-white flex overflow-hidden">
                        <motion.div
                            initial={{ x: "0%" }}
                            animate={{ x: "-50%" }}
                            transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
                            className="flex whitespace-nowrap text-xl font-black uppercase tracking-widest"
                        >
                            <span className="mx-6">INITIALIZING SYSTEM</span> •
                            <span className="mx-6">PORTFOLIO PROTOCOL ENABLED</span> •
                            <span className="mx-6">FETCHING RESOURCES</span> •
                            <span className="mx-6">INITIALIZING SYSTEM</span> •
                            <span className="mx-6">PORTFOLIO PROTOCOL ENABLED</span> •
                            <span className="mx-6">FETCHING RESOURCES</span> •
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LoadingScreen;
