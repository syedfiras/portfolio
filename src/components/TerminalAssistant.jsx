import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TypewriterText = ({ text, onComplete }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, 15);
            return () => clearTimeout(timeout);
        } else if (onComplete) {
            onComplete();
        }
    }, [currentIndex, text, onComplete]);

    return <span>{displayedText}</span>;
};

const TerminalAssistant = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([
        { type: 'system', text: '>_ SPIDER-VERSE AI TERMINAL v2.0' },
        { type: 'system', text: '>_ Neural interface connected. Ask me anything about Firas.' }
    ]);
    const [isTyping, setIsTyping] = useState(false);

    const endOfMessagesRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        if (endOfMessagesRef.current) {
            endOfMessagesRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [history, isOpen]);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    const handleCommand = (cmd) => {
        const trimmedCmd = cmd.trim();
        if (!trimmedCmd) return;

        if (trimmedCmd.toLowerCase() === 'clear') {
            setHistory([]);
            return;
        }
        if (trimmedCmd.toLowerCase() === 'exit') {
            setIsOpen(false);
            return;
        }

        setHistory(prev => [
            ...prev,
            { type: 'user', text: `> ${cmd}` },
            { type: 'thinking', text: '[PROCESSING_QUERY]' }
        ]);
        setIsTyping(true);

        setTimeout(() => {
            const lowerQuery = trimmedCmd.toLowerCase();
            let response = '';

            if (/(who are you|about|bio|who is|experience)/i.test(lowerQuery)) {
                response = "🧬 SYED FIRAS — Frontend Architect & UI/UX Designer specializing in cinematic web experiences. He crafts digital interfaces that blend dark luxury aesthetics with cutting-edge performance. Think Spider-Verse meets high-end tech.";
            } else if (/(skill|tech|stack|language|know|framework)/i.test(lowerQuery)) {
                response = "⚡ WEB ABILITIES:\n• React.js & Next.js — Master weaver\n• Tailwind CSS & Framer Motion — Animation sorcery\n• React Native & Ionic — Cross-dimensional apps\n• Node.js & MongoDB — Backend web-slinging\n• TypeScript — Type-safe armor";
            } else if (/(project|work|portfolio|built|made)/i.test(lowerQuery)) {
                response = "🕸️ SIGNATURE PROJECTS:\n• Spider-Verse Portfolio — The site you're on!\n• Gym Management System — Fitness tracking app\n• CreatorFlow AI — AI-powered content platform\n• SAHAYA — Emergency response system\n\nCheck the 'Projects' section for live demos!";
            } else if (/(contact|email|hire|reach|phone|message)/i.test(lowerQuery)) {
                response = "📡 SECURE COMMUNICATIONS:\n• Email: syedfiras06@gmail.com\n• GitHub: /syedfiras\n• LinkedIn: /in/syedfiras7\n• Instagram: @_.syedfiras\n\nSend a signal, and he'll respond within 24 hours.";
            } else if (/(hello|hi|hey|greetings)/i.test(lowerQuery)) {
                response = "👋 Hey there, true believer! I'm the Spider-Verse AI assistant. Ask me about Firas's skills, projects, experience, or how to reach him. Type 'help' for guidance!";
            } else if (/(spider|verse|web|swing)/i.test(lowerQuery)) {
                response = "🕷️ Ah, a person of culture! This portfolio draws heavy inspiration from the Spider-Verse aesthetic — neon glows, web patterns, cinematic motion, and that 'with great power' energy. Firas brings that same intensity to web development.";
            } else if (/(help|cmd|command)/i.test(lowerQuery)) {
                response = "🕸️ COMMS PROTOCOLS:\n• 'skills' — View tech stack\n• 'projects' — Explore portfolio\n• 'about' — Learn about Firas\n• 'contact' — Get in touch\n• 'clear' — Reset terminal\n• 'exit' — Close session\n\nJust ask naturally in English too!";
            } else {
                response = `⚠️ UNKNOWN QUERY: "${trimmedCmd}".\nMy spider-sense is tingling, but I don't understand. Try asking about 'skills', 'projects', 'about', or 'contact'. Type 'help' for all commands.`;
            }

            setHistory(prev => {
                const newHistory = [...prev];
                newHistory.pop();
                return [...newHistory, { type: 'assistant', text: response, isNew: true }];
            });
        }, 800 + Math.random() * 600);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input && !isTyping) {
            handleCommand(input);
            setInput('');
        }
    };

    return (
        <>
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: 180 }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsOpen(true)}
                        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#E11D48] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(225,29,72,0.5)] hover:shadow-[0_0_30px_rgba(225,29,72,0.7)] transition-all duration-300 group"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                        <div className="absolute inset-0 rounded-full border-2 border-[#E11D48]/50 animate-ping" />
                    </motion.button>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                        className="fixed bottom-6 right-6 z-50 w-[90vw] md:w-[450px] h-[550px] flex flex-col bg-[#020617] border border-[#E11D48]/30 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(225,29,72,0.2)]"
                    >
                        {/* Terminal Header */}
                        <div className="bg-gradient-to-r from-[#E11D48]/10 to-[#2563EB]/10 px-4 py-3 flex items-center justify-between border-b border-[#E11D48]/30">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#E11D48] shadow-[0_0_5px_#E11D48]" />
                                <div className="w-3 h-3 rounded-full bg-[#EAB308] shadow-[0_0_5px_#EAB308]" />
                                <div className="w-3 h-3 rounded-full bg-[#22C55E] shadow-[0_0_5px_#22C55E]" />
                            </div>
                            <div className="flex items-center gap-2">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L13.5 8L19 9L15 13L16 19L12 16L8 19L9 13L5 9L10.5 8L12 2Z" fill="#E11D48" />
                                </svg>
                                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#60A5FA]">Spider-Verse Terminal</span>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-[#E11D48] transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>

                        {/* Terminal Body */}
                        <div className="flex-1 p-4 overflow-y-auto font-mono text-[13px] bg-[#020617]">
                            {history.map((msg, idx) => (
                                <div key={idx} className="mb-3">
                                    {msg.type === 'user' ? (
                                        <div className="text-[#60A5FA] font-mono">
                                            <span className="text-[#E11D48]"></span> {msg.text}
                                        </div>
                                    ) : msg.type === 'system' ? (
                                        <div className="text-[#EAB308] font-mono text-xs opacity-80">
                                            {msg.text}
                                        </div>
                                    ) : msg.type === 'thinking' ? (
                                        <div className="text-[#E11D48] font-mono text-xs animate-pulse flex items-center gap-2">
                                            <span className="inline-block w-2 h-2 rounded-full bg-[#E11D48] animate-pulse" />
                                            {msg.text}
                                        </div>
                                    ) : (
                                        <div className="text-slate-300 whitespace-pre-wrap font-mono text-xs leading-relaxed">
                                            {msg.isNew ? (
                                                <TypewriterText text={msg.text} onComplete={() => {
                                                    setIsTyping(false);
                                                    msg.isNew = false;
                                                }} />
                                            ) : (
                                                <span>{msg.text}</span>
                                            )}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <div ref={endOfMessagesRef} />
                        </div>

                        {/* Terminal Input */}
                        <form onSubmit={handleSubmit} className="p-4 bg-[#0A0F2A] border-t border-[#E11D48]/30 flex items-center gap-2">
                            <span className="text-[#E11D48] font-mono text-sm">❯</span>
                            <span className="text-[#60A5FA] font-mono text-xs">visitor@spider-verse:~$</span>
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                disabled={isTyping}
                                className="flex-1 bg-transparent text-white font-mono text-sm outline-none disabled:opacity-50 placeholder:text-slate-600"
                                autoComplete="off"
                                spellCheck="false"
                                placeholder="Ask me anything..."
                            />
                        </form>
                        
                        {/* Footer hint */}
                        <div className="px-4 pb-3 text-[8px] font-mono text-slate-600 flex justify-between">
                            <span>Type 'help' for commands</span>
                            <span>🕷️ SPIDER-SENSE ONLINE</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default TerminalAssistant;