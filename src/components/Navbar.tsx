import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon, Menu, X, ArrowRight, Plus } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { cn } from '../utils/cn';
import { Magnetic } from './Magnetic';

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('');

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Active section tracking
      const sections = ['services', 'cases', 'process', 'about', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Capabilities', href: '#services' },
    { name: 'Outcomes', href: '#cases' },
    { name: 'Methodology', href: '#process' },
    { name: 'The Strategist', href: '#about' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6',
        scrolled ? 'py-4' : 'py-8'
      )}
    >
      <div className={cn(
        "max-w-7xl mx-auto flex items-center justify-between transition-all duration-500",
        scrolled ? "bg-background/80 backdrop-blur-xl border border-border/50 rounded-xl px-8 py-3 shadow-2xl" : ""
      )}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="relative">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-lg shadow-primary/20 group-hover:rotate-90 transition-transform duration-500">
              <Plus className="text-white" size={20} />
            </div>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display font-black text-xl tracking-tighter">STERLING</span>
            <span className="text-[8px] font-bold uppercase tracking-[0.5em] text-primary">Strategy</span>
          </div>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "text-[10px] font-bold uppercase tracking-widest transition-colors relative group",
                activeSection === link.href.slice(1) ? "text-primary" : "text-muted-foreground hover:text-primary"
              )}
            >
              {link.name}
              <span className={cn(
                "absolute -bottom-1 left-0 h-[1px] bg-primary transition-all",
                activeSection === link.href.slice(1) ? "w-full" : "w-0 group-hover:w-full"
              )} />
            </motion.a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent transition-colors"
          >
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
          </button>
          <Magnetic>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-widest shadow-lg shadow-primary/20"
            >
              Start Project
            </motion.button>
          </Magnetic>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <button onClick={toggleTheme} className="p-2">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-6 right-6 bg-background border border-border rounded-xl mt-4 p-8 flex flex-col gap-6 md:hidden shadow-2xl overflow-hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-display font-bold tracking-tight"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-primary text-white w-full py-4 rounded-lg font-bold uppercase tracking-widest text-sm mt-4">
              Start Project
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
