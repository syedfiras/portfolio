import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import LoadingScreen from './components/LoadingScreen';
import Footer from './components/Footer';
import TerminalAssistant from './components/TerminalAssistant';
import './App.css';

// Lazy load heavy components for better initial load
const Projects = React.lazy(() => import('./components/Projects'));
const Achievements = React.lazy(() => import('./components/Achievements'));
const Contact = React.lazy(() => import('./components/Contact'));

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-900 p-4">
          <div className="max-w-xl text-center">
            <h1 className="text-3xl font-bold mb-4 text-red-500">Something went wrong.</h1>
            <p className="text-gray-600 mb-6">Please refresh the page or try again later.</p>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-auto text-red-600 text-left text-sm font-mono border border-gray-200">
              {this.state.error && this.state.error.toString()}
            </pre>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  // Initialize Theme locked to light
  React.useEffect(() => {
    document.documentElement.classList.remove('dark');
    localStorage.removeItem('theme');
  }, []);

  return (
    <ErrorBoundary>
      <LoadingScreen />
      <div className="min-h-screen bg-white text-gray-900 selection:bg-black/20/20 selection:text-black transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
            <Projects />
            <Achievements />
            <Contact />
          </Suspense>
        </main>
        <Footer />
      </div>
      <TerminalAssistant />
    </ErrorBoundary >
  );
}

export default App;
