import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, CheckCircle2, TrendingUp } from 'lucide-react';

const cases = [
  {
    title: 'Lumina SaaS Rebrand',
    category: 'Brand Strategy',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    problem: 'Generic look, low trust among enterprise clients.',
    solution: 'Established a "Premium Minimalist" identity with high-end typography.',
    result: '3x increase in enterprise demo requests within 60 days.',
    stats: '+300%',
    statLabel: 'Demo Requests'
  },
  {
    title: 'Peak Performance Ads',
    category: 'Performance Design',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
    problem: 'Stagnant ROAS and high creative fatigue.',
    solution: 'Implemented a dynamic motion-first creative system.',
    result: '45% reduction in CAC and 2.5x higher CTR.',
    stats: '-45%',
    statLabel: 'CAC Reduction'
  },
];

export const CaseStudies = () => {
  return (
    <section id="cases" className="py-40 bg-muted/30 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-[1px] bg-primary" />
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary">Selected Works</span>
          </motion.div>
          <h3 className="text-5xl md:text-8xl font-display font-black tracking-tighter leading-[0.9]">
            PROVEN <br />
            <span className="text-muted-foreground/50">OUTCOMES.</span>
          </h3>
        </div>

        <div className="space-y-40">
          {cases.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 lg:gap-32 items-center`}
            >
              {/* Image Container */}
              <div className="flex-1 relative group">
                <div className="relative overflow-hidden rounded-xl aspect-[4/5] lg:aspect-square">
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
                </div>
                
                {/* Floating Stat Card */}
                <motion.div
                  initial={{ x: i % 2 === 0 ? 50 : -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className={`absolute ${i % 2 === 0 ? '-right-10' : '-left-10'} -bottom-10 bg-background p-8 rounded-[2rem] shadow-2xl z-20 min-w-[200px] border border-border`}
                >
                  <div className="flex items-center gap-2 text-primary mb-1">
                    <TrendingUp size={16} />
                    <span className="text-[10px] font-bold uppercase tracking-widest">{item.statLabel}</span>
                  </div>
                  <div className="text-5xl font-display font-black">{item.stats}</div>
                </motion.div>
              </div>

              {/* Content Container */}
              <div className="flex-1 space-y-8">
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">{item.category}</span>
                  <h4 className="text-4xl md:text-6xl font-display font-bold tracking-tight leading-tight">{item.title}</h4>
                </div>
                
                <div className="space-y-6 text-xl text-muted-foreground leading-relaxed">
                  <div className="p-8 rounded-3xl bg-background border border-border">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground block mb-2">The Challenge</span>
                    <p className="text-foreground font-medium">{item.problem}</p>
                  </div>
                  <div className="p-8 rounded-3xl bg-background border border-border">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground block mb-2">The Strategy</span>
                    <p className="text-foreground font-medium">{item.solution}</p>
                  </div>
                </div>

                <motion.button
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 text-xl font-bold group"
                >
                  Read Full Strategy
                  <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                    <ArrowRight size={20} className="group-hover:text-white transition-colors" />
                  </div>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
