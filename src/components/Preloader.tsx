import React from 'react';
import { motion } from 'motion/react';

export const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
      }}
      className="fixed inset-0 z-[100] bg-background flex items-center justify-center overflow-hidden"
    >
      <div className="relative flex flex-col items-center">
        {/* Animated Background Rings */}
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1.5, opacity: 0.1 }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          className="absolute inset-0 border border-primary rounded-full"
        />
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 2, opacity: 0.05 }}
          transition={{ duration: 2, delay: 0.5, repeat: Infinity, ease: "easeOut" }}
          className="absolute inset-0 border border-primary rounded-full"
        />

        {/* Logo Animation */}
        <div className="relative z-10 flex flex-col items-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-2xl shadow-primary/20 mb-6"
          >
            <span className="text-white font-display font-black text-3xl">S</span>
          </motion.div>
          
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center"
            >
              <span className="font-display font-bold text-2xl tracking-widest uppercase">Sterling</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mt-1">Creative Strategy</span>
            </motion.div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-12 w-48 h-[2px] bg-muted rounded-full overflow-hidden relative">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-y-0 left-0 bg-primary"
          />
        </div>
      </div>
    </motion.div>
  );
};
