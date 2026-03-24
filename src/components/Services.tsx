import React from 'react';
import { motion } from 'motion/react';
import { Target, Layers, Share2, BarChart3, ArrowRight } from 'lucide-react';
import { cn } from '../utils/cn';
import { Magnetic } from './Magnetic';

const services = [
  {
    number: '01',
    title: 'Brand Identity Strategy',
    description: 'We don’t just make logos. We build visual systems that command premium pricing and establish market authority.',
    icon: Target,
    outcome: 'Position as a Market Leader',
    color: 'bg-blue-500',
  },
  {
    number: '02',
    title: 'High-Conversion Ad Creative',
    description: 'Data-backed social media assets designed to stop the scroll and drive measurable click-through rates.',
    icon: Share2,
    outcome: 'Lower CAC by up to 30%',
    color: 'bg-purple-500',
  },
  {
    number: '03',
    title: 'SaaS UI/UX Consulting',
    description: 'I manage the world-class designers who turn complex software into intuitive, beautiful experiences.',
    icon: Layers,
    outcome: 'Reduce Churn & Boost LTV',
    color: 'bg-emerald-500',
  },
  {
    number: '04',
    title: 'Sales Deck Optimization',
    description: 'Transforming boring pitches into visual narratives that close high-ticket enterprise deals.',
    icon: BarChart3,
    outcome: 'Close 2x More Deals',
    color: 'bg-orange-500',
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-40 bg-background relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-32 gap-12">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-12 h-[1px] bg-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary">Our Capabilities</span>
            </motion.div>
            <h3 className="text-5xl md:text-8xl font-display font-black tracking-tighter leading-[0.9]">
              STRATEGIC ASSETS <br />
              <span className="text-muted-foreground/50">FOR GROWTH.</span>
            </h3>
          </div>
          <p className="text-xl text-muted-foreground max-w-md leading-relaxed lg:text-right">
            I handle the creative management so you can focus on scaling. 
            Every package is optimized for conversion, not just aesthetics.
          </p>
        </div>

        <div className="space-y-0">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group relative py-20 border-b border-border flex flex-col lg:flex-row items-start lg:items-center gap-12 hover:bg-muted/30 transition-colors px-6 -mx-6"
            >
              <div className="text-6xl md:text-8xl font-display font-black text-muted-foreground/10 group-hover:text-primary/20 transition-colors">
                {service.number}
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className={cn("w-2 h-2 rounded-full", service.color)} />
                  <h4 className="text-3xl md:text-5xl font-display font-bold tracking-tight">{service.title}</h4>
                </div>
                <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="lg:text-right">
                <div className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-muted-foreground mb-2 opacity-60">Primary Outcome</div>
                <div className="text-2xl font-display font-bold text-foreground">{service.outcome}</div>
              </div>

              <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-4 transition-all hidden lg:block">
                <ArrowRight size={48} className="text-primary" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 p-12 rounded-xl bg-foreground text-background flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="text-center md:text-left">
            <h4 className="text-3xl md:text-5xl font-display font-bold mb-2 tracking-tight">Ready to scale your creative?</h4>
            <p className="text-background/60 text-lg font-medium">Stop managing freelancers. Start seeing results.</p>
          </div>
          <Magnetic>
            <button className="bg-primary text-white px-10 py-5 rounded-lg font-black text-xl whitespace-nowrap hover:scale-105 transition-transform shadow-2xl shadow-primary/20">
              Book Your Audit
            </button>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
};
