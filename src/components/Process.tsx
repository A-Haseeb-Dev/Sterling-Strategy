import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const steps = [
  {
    number: '01',
    title: 'Strategic Audit',
    description: 'We analyze your current visual assets and market positioning to identify conversion leaks.',
    details: 'Deep dive into your sales funnel, competitor analysis, and brand sentiment.'
  },
  {
    number: '02',
    title: 'Creative Matchmaking',
    description: 'I hand-pick the top 1% of creative talent specifically suited for your industry and goals.',
    details: 'Access to a global network of vetted designers, motion artists, and strategists.'
  },
  {
    number: '03',
    title: 'Agile Execution',
    description: 'Rapid prototyping and feedback loops ensure we hit the mark without wasting weeks of time.',
    details: 'Direct communication, transparent project management, and rapid iterations.'
  },
  {
    number: '04',
    title: 'Scale & Optimize',
    description: 'We deliver high-end assets and provide a roadmap for consistent creative output.',
    details: 'Implementation guides, asset libraries, and performance tracking.'
  },
];

export const Process = () => {
  return (
    <section id="process" className="py-40 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-20">
          
          {/* Sticky Header */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-40">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-6"
              >
                <div className="w-12 h-[1px] bg-primary" />
                <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary">The Methodology</span>
              </motion.div>
              <h3 className="text-5xl md:text-7xl font-display font-black tracking-tighter leading-[0.9] mb-8">
                HOW WE <br />
                <span className="text-muted-foreground/50">ENGINEER WIN.</span>
              </h3>
              <p className="text-xl text-muted-foreground max-w-md leading-relaxed">
                A streamlined process designed for speed, quality, and zero friction. We don't just "do design"—we engineer outcomes.
              </p>
            </div>
          </div>

          {/* Steps List */}
          <div className="lg:col-span-7 space-y-32">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="relative group"
              >
                <div className="flex items-start gap-8 md:gap-12">
                  <div className="flex flex-col items-center">
                    <div className="text-4xl md:text-6xl font-display font-black text-primary mb-4 font-mono">
                      {step.number}
                    </div>
                    <div className="w-[1px] h-full bg-border group-last:hidden" />
                  </div>
                  
                  <div className="pt-2">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-muted-foreground mb-4 opacity-60">Phase {step.number}</div>
                    <h4 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6 group-hover:text-primary transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-xl text-foreground font-medium mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {step.details}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
