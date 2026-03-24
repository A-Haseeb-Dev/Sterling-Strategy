import React from 'react';
import { motion } from 'motion/react';

const logos = [
  { name: 'TechFlow' },
  { name: 'Vercel' },
  { name: 'Stripe' },
  { name: 'Linear' },
  { name: 'Raycast' },
  { name: 'Framer' },
];

export const SocialProof = () => {
  return (
    <section className="py-24 border-y border-border/50 bg-muted/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex items-center gap-4 shrink-0">
            <div className="w-8 h-[1px] bg-primary" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground">
              Trusted by Industry Leaders
            </span>
          </div>
          
          <div className="w-full overflow-hidden relative">
            {/* Gradient Masks */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
            
            <motion.div 
              animate={{ x: [0, -1000] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex items-center gap-16 md:gap-32 whitespace-nowrap"
            >
              {[...logos, ...logos, ...logos].map((logo, i) => (
                <div
                  key={`${logo.name}-${i}`}
                  className="flex items-center gap-3 opacity-40 dark:opacity-30 hover:opacity-100 transition-opacity cursor-default"
                >
                  <span className="font-display font-black text-2xl md:text-3xl tracking-tighter uppercase">
                    {logo.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
