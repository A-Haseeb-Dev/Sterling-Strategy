import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Zap, ShieldCheck, TrendingUp, MousePointer2, Send, CheckCircle2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Magnetic } from './Magnetic';

const leadSchema = z.object({
  name: z.string().min(2, 'Name required'),
  email: z.string().email('Invalid email'),
  company: z.string().optional(),
});

type LeadFormData = z.infer<typeof leadSchema>;

export const Hero = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
  });

  const onSubmit = async (data: LeadFormData) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Lead captured:', data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const textY = useTransform(scrollY, [0, 500], [0, 50]);
  const bgY = useTransform(scrollY, [0, 1000], [0, 300]);
  const rotateY = useTransform(scrollY, [0, 1000], [0, 45]);

  return (
    <section className="relative min-h-[110vh] flex items-center pt-32 pb-20 overflow-hidden">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.05]" 
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }} 
      />

      {/* Editorial Background Text - Parallax */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full select-none pointer-events-none opacity-[0.05] dark:opacity-[0.08] whitespace-nowrap z-0"
      >
        <span className="text-[35vw] font-display font-black tracking-tighter uppercase leading-none block">
          STRATEGY • RESULTS • DESIGN
        </span>
        <span className="text-[35vw] font-display font-black tracking-tighter uppercase leading-none block -mt-[10vw] ml-[20vw]">
          CLOSE • SCALE • DOMINATE
        </span>
      </motion.div>

      {/* Floating Decorative Elements */}
      <motion.div
        style={{ y: y2, rotate: rotateY }}
        className="absolute top-40 right-[10%] w-64 h-64 border border-primary/10 rounded-full -z-10 hidden lg:block"
      />
      <motion.div
        style={{ y: y1, rotate: -rotateY }}
        className="absolute bottom-40 left-[5%] w-96 h-96 border border-primary/5 rounded-xl -z-10 hidden lg:block"
      />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 relative z-20">
            <motion.div
              style={{ y: textY }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-3 mb-8">
                <motion.div 
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="w-12 h-[1px] bg-primary" 
                />
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-primary">
                  The Creative Arbitrage
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-display font-black leading-[0.85] mb-10 tracking-tighter">
                <span className="block overflow-hidden">
                  <motion.span 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="block"
                  >
                    I DON'T
                  </motion.span>
                </span>
                <span className="block overflow-hidden">
                  <motion.span 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="block text-edge-outline"
                  >
                    DESIGN.
                  </motion.span>
                </span>
                <span className="block overflow-hidden mt-2">
                  <motion.span 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="block text-primary italic"
                  >
                    I CLOSE.
                  </motion.span>
                </span>
              </h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="text-lg md:text-2xl text-muted-foreground mb-12 max-w-xl leading-[1.4] font-medium"
              >
                Managing the top 1% of global creative talent to deliver visual assets that don't just look good—they drive revenue.
              </motion.p>
              
              <div className="flex flex-wrap items-center gap-6">
                <Magnetic>
                  <motion.button
                    whileHover={{ scale: 1.05, rotate: -1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-foreground text-background px-10 py-5 rounded-lg font-black text-xl flex items-center gap-3 shadow-2xl shadow-foreground/20 group"
                  >
                    Secure Your Strategy
                    <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                  </motion.button>
                </Magnetic>
                
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-14 h-14 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                    <MousePointer2 size={20} className="group-hover:text-white transition-colors" />
                  </div>
                  <span className="font-bold text-sm tracking-widest uppercase opacity-60 group-hover:opacity-100 transition-opacity">
                    View Methodology
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Lead Capture Form */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-card border border-border p-8 md:p-12 rounded-2xl shadow-2xl relative overflow-hidden isolate"
            >
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -mr-16 -mt-16 rounded-full blur-3xl -z-10" />
              
              <div className="mb-10">
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-3">Priority Access</div>
                <h2 className="text-3xl font-display font-black tracking-tighter leading-none">
                  INITIATE <br />
                  <span className="text-muted-foreground/50">STRATEGY.</span>
                </h2>
              </div>

              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-widest mb-2">Request Logged</h3>
                  <p className="text-sm text-muted-foreground">Our lead strategist will contact you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest opacity-50">Full Name</label>
                    <input 
                      {...register('name')}
                      className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-primary transition-colors text-lg font-medium"
                      placeholder="Alexander Sterling"
                    />
                    {errors.name && <p className="text-[10px] text-red-500 font-bold uppercase">{errors.name.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest opacity-50">Business Email</label>
                    <input 
                      {...register('email')}
                      className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-primary transition-colors text-lg font-medium"
                      placeholder="alex@company.com"
                    />
                    {errors.email && <p className="text-[10px] text-red-500 font-bold uppercase">{errors.email.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest opacity-50">Company / Organization</label>
                    <input 
                      {...register('company')}
                      className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-primary transition-colors text-lg font-medium"
                      placeholder="Global Ventures"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    className="w-full bg-primary text-white py-5 rounded-lg font-bold uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 shadow-xl shadow-primary/20 disabled:opacity-50 group"
                  >
                    {isSubmitting ? 'Processing...' : 'Secure Your Strategy'}
                    <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                  </motion.button>
                  
                  <p className="text-[9px] text-center text-muted-foreground uppercase tracking-widest opacity-50">
                    Strictly confidential. No spam. Only results.
                  </p>
                </form>
              )}
            </motion.div>

            {/* Floating Editorial Element */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-10 -right-10 z-20 bg-foreground text-background p-6 rounded-xl shadow-2xl hidden xl:block max-w-[200px]"
            >
              <div className="text-2xl font-display font-black mb-1">98%</div>
              <div className="text-[8px] font-bold uppercase tracking-[0.2em] opacity-80 leading-relaxed">
                Retention rate driven by performance.
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.5em]">Scroll</span>
        <div className="w-[1px] h-12 bg-foreground" />
      </motion.div>
    </section>
  );
};
