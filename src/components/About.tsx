import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-40 bg-muted/30 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] overflow-hidden rounded-3xl group"
          >
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000"
              alt="The Strategist"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-10 left-10">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-[1px] bg-white" />
                <span className="text-xs font-bold uppercase tracking-[0.4em] text-white">The Strategist</span>
              </div>
              <h4 className="text-4xl font-display font-black text-white tracking-tighter uppercase">STERLING ROSS</h4>
            </div>
          </motion.div>

          {/* Content Side */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-[1px] bg-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary">Our Philosophy</span>
            </motion.div>
            
            <h3 className="text-5xl md:text-7xl font-display font-black tracking-tighter leading-[0.9] mb-12">
              BEYOND <br />
              <span className="text-muted-foreground/50">DECORATION.</span>
            </h3>

            <div className="space-y-8 text-xl text-muted-foreground leading-relaxed">
              <p>
                Most businesses treat design as an afterthought—a coat of paint to hide a weak strategy. We treat it as the <span className="text-foreground font-bold">engine of growth</span>.
              </p>
              <p>
                With a background in high-stakes sales and creative direction, I bridge the gap between "looks good" and "sells well." My mission is to ensure your brand doesn't just join the conversation—it dominates it.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-12 mt-16">
              <div>
                <div className="text-5xl font-display font-black text-primary mb-2">$50M+</div>
                <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Revenue Generated</div>
              </div>
              <div>
                <div className="text-5xl font-display font-black text-primary mb-2">12+</div>
                <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Global Markets</div>
              </div>
            </div>

            <motion.button
              whileHover={{ x: 10 }}
              className="mt-16 flex items-center gap-4 text-foreground font-bold uppercase tracking-widest text-sm group"
            >
              Learn the Methodology
              <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all">
                <ArrowUpRight size={20} />
              </div>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};
