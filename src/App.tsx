import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { Services } from './components/Services';
import { CaseStudies } from './components/CaseStudies';
import { Process } from './components/Process';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate premium loading sequence
    const timer = setTimeout(() => setIsLoading(false), 2000);
    
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      clearTimeout(timer);
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-background selection:bg-primary/30 selection:text-primary overflow-x-hidden grain cursor-none">
      <CustomCursor />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Preloader key="loader" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Navbar />
            <main className="relative">
              <Hero />
              <SocialProof />
              <Services />
              <CaseStudies />
              <Process />
              <About />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
