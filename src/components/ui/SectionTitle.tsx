import React from 'react';
import { motion } from 'motion/react';

interface SectionTitleProps {
  title1: string;
  title2: string;
  backgroundText: string;
  subtitle?: string;
  className?: string;
  dark?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title1, 
  title2, 
  backgroundText, 
  subtitle,
  className = "",
  dark = true
}) => {
  return (
    <div className={`relative mb-16 ${className}`}>
      {/* Background Parallax/Marquee Text - Static for now to ensure consistency, or simple fade in */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full overflow-hidden select-none pointer-events-none opacity-[0.03]">
        <motion.div 
          initial={{ y: 20 }}
          whileInView={{ y: -20 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className={`text-[120px] md:text-[180px] font-black leading-none whitespace-nowrap text-center ${dark ? 'text-white' : 'text-black'}`}
        >
          {backgroundText}
        </motion.div>
      </div>

      {/* Main Title Group */}
      <div className="relative z-10 text-center">
        {subtitle && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className={`h-[1px] w-8 ${dark ? 'bg-zinc-500' : 'bg-zinc-400'}`}></span>
            <span className={`text-sm font-bold tracking-[0.3em] uppercase ${dark ? 'text-zinc-400' : 'text-zinc-500'}`}>
              {subtitle}
            </span>
            <span className={`h-[1px] w-8 ${dark ? 'bg-zinc-500' : 'bg-zinc-400'}`}></span>
          </motion.div>
        )}

        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none"
        >
          {/* Part 1: Solid */}
          <span className={dark ? 'text-white' : 'text-black'}>
            {title1}
          </span>
          
          {/* Spacer */}
          <span className="inline-block w-4"></span>

          {/* Part 2: Outline */}
          <span 
            className="text-transparent transition-all duration-700 hover:text-white/10"
            style={{ 
              WebkitTextStroke: dark ? '1px white' : '1px black',
            }}
          >
            {title2}
          </span>
        </motion.h2>
      </div>
    </div>
  );
};
