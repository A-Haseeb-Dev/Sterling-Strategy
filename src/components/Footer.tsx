import React from 'react';
import { motion } from 'motion/react';
import { Plus, ArrowUpRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-32 bg-background border-t border-border/50 relative overflow-hidden isolate">
      {/* Background Text Pattern */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none -z-10 opacity-[0.07] dark:opacity-[0.12]">
        <div className="text-[15vw] font-display font-black text-foreground uppercase tracking-tighter leading-none whitespace-nowrap -rotate-12 scale-110">
          STERLING • STERLING • STERLING
        </div>
        <div className="text-[15vw] font-display font-black text-foreground uppercase tracking-tighter leading-none whitespace-nowrap -rotate-12 scale-110 translate-x-[10vw]">
          STERLING • STERLING • STERLING
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-20 mb-20">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-lg shadow-primary/20">
                <Plus className="text-white" size={20} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-black text-xl tracking-tighter">STERLING</span>
                <span className="text-[8px] font-bold uppercase tracking-[0.5em] text-primary">Strategy</span>
              </div>
            </div>
            <p className="text-xl text-muted-foreground max-w-sm leading-relaxed">
              Engineering market dominance through high-stakes creative strategy and elite talent matchmaking.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-6">Navigation</div>
              <ul className="space-y-4">
                {['Capabilities', 'Outcomes', 'Methodology', 'The Strategist'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase().split(' ')[0]}`} className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-6">Connect</div>
              <ul className="space-y-4">
                {['LinkedIn', 'Twitter', 'Instagram', 'Behance'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors flex items-center gap-2 group">
                      {item}
                      <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-6">Legal</div>
              <ul className="space-y-4">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground">
            © 2026 STERLING STRATEGY. ALL RIGHTS RESERVED.
          </div>
          <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground">
            CRAFTED FOR DOMINANCE.
          </div>
        </div>
      </div>
    </footer>
  );
};
