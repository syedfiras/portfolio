import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState(null); // 'sending', 'success', 'error'

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate network request
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
      
      setTimeout(() => setStatus(null), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Comms Header & Links */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="h-[2px] w-12 bg-[#E11D48] mb-4 block" />
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
              Send a <br />
              <span className="text-gradient-red">Signal.</span>
            </h2>
            <p className="text-lg text-slate-400 mb-12 max-w-md">
              My spider-sense is tingling. Looking for a premium web experience or just want to talk tech? Drop a line into the multiverse.
            </p>

            <div className="space-y-6">
              <a 
                href="mailto:syedfiras06@gmail.com" 
                className="group flex items-center gap-6 p-4 rounded-xl hover:bg-[#0F172A] transition-colors border border-transparent hover:border-slate-800"
              >
                <div className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 group-hover:text-[#E11D48] group-hover:border-[#E11D48] transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-500 mb-1">EMAIL UPLINK</div>
                  <div className="text-slate-200 font-medium group-hover:text-white transition-colors">syedfiras06@gmail.com</div>
                </div>
              </a>

              <a 
                href="https://github.com/syedfiras" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-6 p-4 rounded-xl hover:bg-[#0F172A] transition-colors border border-transparent hover:border-slate-800"
              >
                <div className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 group-hover:text-[#E11D48] group-hover:border-[#E11D48] transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-500 mb-1">GITHUB REPO</div>
                  <div className="text-slate-200 font-medium group-hover:text-white transition-colors">github.com/syedfiras</div>
                </div>
              </a>

              <a 
                href="https://linkedin.com/in/syedfiras7" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-6 p-4 rounded-xl hover:bg-[#0F172A] transition-colors border border-transparent hover:border-slate-800"
              >
                <div className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 group-hover:text-[#E11D48] group-hover:border-[#E11D48] transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-500 mb-1">LINKEDIN NETWORK</div>
                  <div className="text-slate-200 font-medium group-hover:text-white transition-colors">linkedin.com/in/syedfiras7</div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Terminal Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-panel-glow rounded-2xl p-8 relative overflow-hidden border-t-2 border-[#E11D48]">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-8 border-b border-slate-800 pb-4">
                <div className="w-3 h-3 rounded-full bg-[#E11D48]" />
                <div className="w-3 h-3 rounded-full bg-[#EAB308]" />
                <div className="w-3 h-3 rounded-full bg-[#22C55E]" />
                <span className="ml-4 font-mono text-xs text-slate-500 uppercase tracking-widest">Secure_Transmission_Link</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative group">
                  <input 
                    type="text" 
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    className="w-full bg-transparent border-b border-slate-700 py-3 text-white focus:outline-none focus:border-[#60A5FA] transition-colors peer placeholder-transparent"
                    placeholder="Name"
                  />
                  <label htmlFor="name" className="absolute left-0 top-3 text-slate-500 font-mono text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#60A5FA] peer-valid:-top-4 peer-valid:text-xs">
                    [IDENTIFIER_STRING]
                  </label>
                </div>

                <div className="relative group">
                  <input 
                    type="email" 
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    className="w-full bg-transparent border-b border-slate-700 py-3 text-white focus:outline-none focus:border-[#60A5FA] transition-colors peer placeholder-transparent"
                    placeholder="Email"
                  />
                  <label htmlFor="email" className="absolute left-0 top-3 text-slate-500 font-mono text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#60A5FA] peer-valid:-top-4 peer-valid:text-xs">
                    [RETURN_ADDRESS]
                  </label>
                </div>

                <div className="relative group pt-4">
                  <textarea 
                    id="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    className="w-full bg-[#0F172A] border border-slate-700 rounded-lg p-4 text-white focus:outline-none focus:border-[#E11D48] transition-colors resize-none placeholder-slate-600 font-mono text-sm"
                    placeholder="> TYPE_TRANSMISSION_HERE_"
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'sending' || status === 'success'}
                  className="w-full py-4 rounded-lg font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-3 relative overflow-hidden group border border-[#E11D48]/50 disabled:opacity-80 disabled:cursor-not-allowed"
                >
                  <div className="absolute inset-0 bg-[#E11D48] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                  
                  <span className="relative z-10 flex items-center gap-2 group-hover:text-white" style={{ color: status === 'success' ? '#22C55E' : '#E11D48' }}>
                    {status === 'sending' ? (
                      <><div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" /> ENCRYPTING...</>
                    ) : status === 'success' ? (
                      <><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg> TRANSMITTED</>
                    ) : (
                      <>INITIATE TRANSFER</>
                    )}
                  </span>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;