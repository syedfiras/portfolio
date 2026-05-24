import React, { useEffect, useRef, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import ProjectsWeb from './components/ProjectsWeb';
import Experience from './components/Experience';
import Contact from './components/Contact';
import LoadingScreen from './components/LoadingScreen';
import Cursor from './components/Cursor';
import './index.css';
import Footer from './components/Footer';
import terminalassistant from './components/TerminalAssistant'
import TerminalAssistant from './components/TerminalAssistant';
import CombinedSection from './components/CombinedSection';
function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Initialize Lenis for buttery smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // makepill-like easing
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Make sure we stop scrolling while loading
    if (isLoading) {
      lenis.stop();
    } else {
      lenis.start();
    }

    return () => {
      lenis.destroy();
    };
  }, [isLoading]);

  return (
    <div className="bg-[#020617] text-slate-200 min-h-screen font-sans selection:bg-rose-600/30 selection:text-white hide-native-cursor">
      <Cursor />
      
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <>
          <Navbar />
          <main className="relative z-10">
            <Hero />
            <CombinedSection/>
            <ProjectsWeb />
            <Contact />
            <Footer/>
            <TerminalAssistant/>
          </main>
        </>
      )}
    </div>
  );
}

export default App;
