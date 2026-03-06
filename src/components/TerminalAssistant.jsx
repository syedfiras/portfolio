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
            }, 15); // Adjust speed here
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
        { type: 'system', text: 'Welcome to Firas AI Terminal Interface.' },
        { type: 'system', text: 'Assistant initialized. You can use commands or just ask me questions naturally!' }
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

        // Clear and Exit are immediate actions
        if (trimmedCmd.toLowerCase() === 'clear') {
            setHistory([]);
            return;
        }
        if (trimmedCmd.toLowerCase() === 'exit') {
            setIsOpen(false);
            return;
        }

        // Add user command and 'thinking' state
        setHistory(prev => [
            ...prev,
            { type: 'user', text: `visitor@firas-os:~$ ${cmd}` },
            { type: 'thinking', text: 'AI is processing...' }
        ]);
        setIsTyping(true);

        setTimeout(() => {
            const lowerQuery = trimmedCmd.toLowerCase();
            let response = '';

            // NLP-lite logic
            if (/(who are you|about|bio|who is|experience)/i.test(lowerQuery)) {
                response = "I am the Firas AI Assistant. Syed Firas is a Mobile Experience Architect specializing in React Native, building extremely fluid and performant mobile apps.";
            } else if (/(skill|tech|stack|language|know|framework)/i.test(lowerQuery)) {
                response = "Core Stack: React Native, React.js, Next.js, Ionic, Angular, Node.js, and TypeScript. He bridges the gap between sophisticated design and solid engineering.";
            } else if (/(project|work|portfolio|built|made)/i.test(lowerQuery)) {
                response = "Firas has built numerous apps, notably Gym Management App, CreatorFlow AI, IJESTM, and SAHAYA. Check out the 'Live Projects' section for more details!";
            } else if (/(contact|email|hire|reach|phone|message)/i.test(lowerQuery)) {
                response = "You can reach Firas directly at syedfiras06@gmail.com. Or find his LinkedIn/GitHub in the footer. Let's build something great!";
            } else if (/(hello|hi|hey|greetings)/i.test(lowerQuery)) {
                response = "Hello! I am Firas's AI Assistant. You can ask me about his skills, experience, projects, or how to contact him. Try asking: 'What are his skills?'";
            } else if (/(help|cmd|command)/i.test(lowerQuery)) {
                response = "You don't need strict commands anymore! Just talk to me.\nTry:\n- 'What are his skills?'\n- 'Tell me about your projects'\n- 'How can I contact you?'\nOr use 'clear' to clear, and 'exit' to close.";
            } else {
                response = `I'm an AI specialized in Syed Firas's portfolio. I couldn't process: "${trimmedCmd}". Try asking me about 'skills', 'projects', 'about', or 'contact'.`;
            }

            setHistory(prev => {
                const newHistory = [...prev];
                newHistory.pop(); // remove 'thinking' loader
                return [...newHistory, { type: 'assistant', text: response, isNew: true }];
            });
        }, 800 + Math.random() * 600); // Artificial thinking delay
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
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        onClick={() => setIsOpen(true)}
                        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#fde24f] border-4 border-[#1b2d45] flex items-center justify-center neo-brutal hover:bg-[#ff5470] group"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#1b2d45] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M4 15a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2H6a2 2 0 00-2 2z" />
                        </svg>
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
                        className="fixed bottom-6 right-6 z-50 w-[90vw] md:w-[400px] h-[500px] flex flex-col bg-[#1b2d45] border-4 border-[#1b2d45] shadow-[8px_8px_0_0_#ff5470] overflow-hidden"
                    >
                        {/* Terminal Header */}
                        <div className="bg-white px-4 py-2 flex items-center justify-between border-b-4 border-[#1b2d45]">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#ff5470] border-2 border-[#1b2d45]"></div>
                                <div className="w-3 h-3 rounded-full bg-[#fde24f] border-2 border-[#1b2d45]"></div>
                                <div className="w-3 h-3 rounded-full bg-[#00ebc7] border-2 border-[#1b2d45]"></div>
                            </div>
                            <span className="text-xs font-black uppercase tracking-widest text-[#1b2d45]">AI Terminal</span>
                            <button onClick={() => setIsOpen(false)} className="text-[#1b2d45] hover:text-[#ff5470]">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>

                        {/* Terminal Body */}
                        <div className="flex-1 p-4 overflow-y-auto font-mono text-[13px] scrollbar-thin scrollbar-thumb-[#ff5470] scrollbar-track-[#1b2d45]">
                            {history.map((msg, idx) => (
                                <div key={idx} className="mb-3">
                                    {msg.type === 'user' ? (
                                        <div className="text-[#00ebc7]">{msg.text}</div>
                                    ) : msg.type === 'system' ? (
                                        <div className="text-[#fde24f] font-bold">{msg.text}</div>
                                    ) : msg.type === 'thinking' ? (
                                        <div className="text-[#ff5470] font-bold animate-pulse">{msg.text}</div>
                                    ) : (
                                        <div className="text-white whitespace-pre-wrap">
                                            {msg.isNew ? (
                                                <TypewriterText text={msg.text} onComplete={() => {
                                                    setIsTyping(false);
                                                    msg.isNew = false; // Prevent re-typing on re-render
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
                        <form onSubmit={handleSubmit} className="p-4 bg-[#1b2d45] border-t-4 border-[#2b4566] flex">
                            <span className="text-[#00ebc7] font-mono mr-2">visitor@firas:~$</span>
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                disabled={isTyping}
                                className="flex-1 bg-transparent text-white font-mono outline-none disabled:opacity-50"
                                autoComplete="off"
                                spellCheck="false"
                            />
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default TerminalAssistant;
