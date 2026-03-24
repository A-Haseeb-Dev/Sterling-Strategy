import React from 'react';
import { motion } from 'motion/react';
import { Mail, MessageSquare, Calendar, Send, ArrowRight } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(1, 'Please select a subject'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const selectedSubject = watch('subject');

  const subjects = [
    { value: 'brand', label: 'Brand Identity Strategy' },
    { value: 'creative', label: 'Ad Creative Package' },
    { value: 'consulting', label: 'UI/UX Consulting' },
    { value: 'other', label: 'Other' },
  ];

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log('Form submitted:', data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="contact" className="py-40 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-muted/10 -skew-x-12 translate-x-1/4 -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-20">
          
          {/* Left Side: Editorial Content */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-[1px] bg-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary">Initiate Contact</span>
            </motion.div>
            
            <h3 className="text-5xl md:text-7xl font-display font-black tracking-tighter leading-[0.9] mb-12">
              READY TO <br />
              <span className="text-muted-foreground/50">DOMINATE?</span>
            </h3>

            <p className="text-xl text-muted-foreground mb-16 leading-relaxed max-w-md">
              We don't work with everyone. We work with those ready to lead their industry. If that's you, let's talk.
            </p>

            <div className="space-y-12">
              <div className="group cursor-pointer">
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-2">Direct Line</div>
                <div className="text-2xl font-display font-bold tracking-tight group-hover:text-primary transition-colors flex items-center gap-3">
                  hello@sterling.com
                  <ArrowRight size={20} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </div>
              </div>
              
              <div className="group cursor-pointer">
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-2">Strategy Session</div>
                <div className="text-2xl font-display font-bold tracking-tight group-hover:text-primary transition-colors flex items-center gap-3">
                  calendly.com/sterling
                  <ArrowRight size={20} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </div>
              </div>

              <div className="group cursor-pointer">
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-2">Instant Access</div>
                <div className="text-2xl font-display font-bold tracking-tight group-hover:text-primary transition-colors flex items-center gap-3">
                  +1 (555) 000-0000
                  <ArrowRight size={20} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Premium Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border p-8 md:p-16 rounded-xl shadow-2xl relative overflow-hidden"
            >
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 bg-primary flex flex-col items-center justify-center text-white z-20 p-12 text-center"
                >
                  <div className="w-20 h-20 bg-white/20 rounded-lg flex items-center justify-center mb-6">
                    <Send size={40} />
                  </div>
                  <h4 className="text-4xl font-display font-black mb-4">MESSAGE RECEIVED.</h4>
                  <p className="text-xl opacity-80">We'll review your strategy and reach out within 24 hours.</p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest opacity-50">Full Name</label>
                    <input 
                      {...register('name')}
                      className="w-full bg-transparent border-b border-border py-4 focus:outline-none focus:border-primary transition-colors text-xl font-medium"
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-xs text-red-500 font-bold uppercase tracking-tighter">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest opacity-50">Email Address</label>
                    <input 
                      {...register('email')}
                      className="w-full bg-transparent border-b border-border py-4 focus:outline-none focus:border-primary transition-colors text-xl font-medium"
                      placeholder="john@company.com"
                    />
                    {errors.email && <p className="text-xs text-red-500 font-bold uppercase tracking-tighter">{errors.email.message}</p>}
                  </div>
                </div>
                
                <div className="space-y-3 relative">
                  <label className="text-[10px] font-bold uppercase tracking-widest opacity-50">Strategic Interest</label>
                  <div 
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full border-b border-border py-4 flex justify-between items-center cursor-pointer group"
                  >
                    <span className={`text-xl font-medium ${!selectedSubject ? 'text-muted-foreground/50' : 'text-foreground'}`}>
                      {subjects.find(s => s.value === selectedSubject)?.label || 'Select an option'}
                    </span>
                    <motion.div
                      animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                      className="text-primary"
                    >
                      <ArrowRight size={20} className="rotate-90" />
                    </motion.div>
                  </div>

                  {isDropdownOpen && (
                    <>
                      <div 
                        className="fixed inset-0 z-30" 
                        onClick={() => setIsDropdownOpen(false)} 
                      />
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute left-0 right-0 top-full mt-2 bg-card border border-border rounded-lg shadow-2xl z-40 overflow-hidden"
                      >
                        {subjects.map((subject) => (
                          <div
                            key={subject.value}
                            onClick={() => {
                              setValue('subject', subject.value, { shouldValidate: true });
                              setIsDropdownOpen(false);
                            }}
                            className="px-6 py-4 hover:bg-muted transition-colors cursor-pointer text-sm font-bold uppercase tracking-widest"
                          >
                            {subject.label}
                          </div>
                        ))}
                      </motion.div>
                    </>
                  )}
                  <input type="hidden" {...register('subject')} />
                  {errors.subject && <p className="text-xs text-red-500 font-bold uppercase tracking-tighter">{errors.subject.message}</p>}
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest opacity-50">Project Brief</label>
                  <textarea 
                    {...register('message')}
                    rows={4}
                    className="w-full bg-transparent border-b border-border py-4 focus:outline-none focus:border-primary transition-colors text-xl font-medium resize-none"
                    placeholder="Tell us about your goals..."
                  />
                  {errors.message && <p className="text-xs text-red-500 font-bold uppercase tracking-tighter">{errors.message.message}</p>}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white py-6 rounded-lg font-bold uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-4 shadow-xl shadow-primary/20 disabled:opacity-50 group"
                >
                  {isSubmitting ? 'Processing...' : 'Secure Your Strategy'}
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
