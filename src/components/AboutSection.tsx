import React, { useRef } from 'react';
import { Button } from './ui/button';
import { motion, useScroll, useTransform } from 'motion/react';
import { SectionTitle } from './ui/SectionTitle';

export const AboutSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section className="relative py-32 lg:py-48 bg-black overflow-hidden" ref={ref}>
      <div className="absolute inset-0 opacity-20">
         <motion.div style={{ y }} className="h-[120%] w-full">
            <img
              src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2938&auto=format&fit=crop"
              alt="Gym interior"
              className="h-full w-full object-cover grayscale"
            />
         </motion.div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        
        <SectionTitle 
          title1="精准" 
          title2="律动" 
          backgroundText="PHILOSOPHY"
          subtitle="Precision in Every Movement"
        />

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-zinc-300 text-lg md:text-2xl max-w-3xl mx-auto mb-16 leading-relaxed font-light"
        >
          在 <span className="text-white font-black underline underline-offset-4 decoration-zinc-700">fitting</span>，我们相信最完美的装备是隐形的。它随你而动，随你呼吸，并适应你的每一次爆发。
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button className="relative overflow-hidden bg-white text-black hover:text-white border border-transparent hover:border-white rounded-none px-12 py-7 text-lg font-bold uppercase tracking-widest group transition-all duration-300">
            <span className="relative z-10">探索科技 / Explore Tech</span>
            <div className="absolute inset-0 bg-black transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
