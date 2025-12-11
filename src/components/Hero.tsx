import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2940&auto=format&fit=crop",
    subtitle: "New Collection 2025",
    title1: "暗夜",
    title2: "淬炼",
    desc: "以黑暗为炉，以汗水为火。全新的黑曜石系列将精密空气动力学与极致轻量化融合。",
    bgText: "OBSIDIAN"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1562771242-a02d909ddc3d?q=80&w=2000&auto=format&fit=crop", // Sprinter
    subtitle: "Professional Running",
    title1: "极速",
    title2: "破风",
    desc: "打破空气阻力，重塑速度极限。专为精英跑者打造的竞速装备。",
    bgText: "VELOCITY"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2000&auto=format&fit=crop", // Urban
    subtitle: "Urban Lifestyle",
    title1: "无界",
    title2: "穿梭",
    desc: "从街头到赛场，风格永不设限。将机能美学融入日常穿搭。",
    bgText: "BOUNDLESS"
  }
];

export const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000); // 6 seconds per slide
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* Background Image with Zoom Effect */}
          <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 6, ease: "easeOut" }}
            className="h-full w-full"
          >
            <img
              src={slides[current].image}
              alt={slides[current].title1}
              className="h-full w-full object-cover opacity-60"
            />
          </motion.div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />
          
          {/* Background Parallax Text */}
          <div className="absolute top-1/2 left-10 md:left-20 -translate-y-1/2 overflow-hidden pointer-events-none select-none mix-blend-overlay opacity-20">
             <motion.span 
               initial={{ y: 100, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ duration: 1, delay: 0.3 }}
               className="text-[120px] md:text-[250px] font-black text-transparent leading-none block"
               style={{ WebkitTextStroke: '2px white' }}
             >
               {slides[current].bgText}
             </motion.span>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-end pb-24 lg:pb-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
              exit: { opacity: 0, transition: { duration: 0.3 } }
            }}
            className="max-w-4xl"
          >
             {/* Subtitle */}
            <motion.div 
              variants={{
                 hidden: { opacity: 0, x: -20 },
                 visible: { opacity: 1, x: 0, transition: { delay: 0.3 } }
              }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-[2px] w-12 bg-white"></div>
              <span className="text-white text-sm md:text-base font-black tracking-[0.4em] uppercase">
                {slides[current].subtitle}
              </span>
            </motion.div>

            {/* Main Title - Kinetic Typography */}
            <div className="relative mb-8 overflow-hidden">
               <motion.h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase leading-[0.9] text-white flex flex-col md:flex-row gap-4">
                  <motion.span
                    variants={{
                        hidden: { x: "-100%" },
                        visible: { x: 0, transition: { duration: 0.8, ease: "circOut" } }
                    }}
                  >
                      {slides[current].title1}
                  </motion.span>
                  <motion.span
                    className="relative text-transparent"
                    style={{ WebkitTextStroke: '1px white' }}
                    variants={{
                        hidden: { x: "100%" },
                        visible: { x: 0, transition: { duration: 0.8, ease: "circOut" } }
                    }}
                  >
                      {slides[current].title2}
                      {/* Fill Animation */}
                      <motion.span 
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
                        className="absolute inset-0 overflow-hidden text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-zinc-600 z-10 whitespace-nowrap"
                        style={{ WebkitTextStroke: '0px' }}
                      >
                        {slides[current].title2}
                      </motion.span>
                  </motion.span>
               </motion.h1>
            </div>

            <motion.p 
               variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { delay: 0.6 } }
               }}
              className="text-zinc-300 text-lg md:text-xl max-w-xl mb-12 leading-relaxed font-light border-l-2 border-zinc-800 pl-6"
            >
              {slides[current].desc}
            </motion.p>

            <motion.div 
              variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { delay: 0.8 } }
              }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <Button
                size="lg"
                className="group relative overflow-hidden bg-white text-black hover:bg-zinc-200 rounded-none px-10 py-7 text-lg tracking-wider font-bold"
              >
                 <span className="relative z-10 flex items-center">
                  立即探索
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="absolute bottom-10 right-10 flex gap-4 z-20">
        <button onClick={prevSlide} className="p-3 border border-zinc-700 text-white hover:bg-white hover:text-black transition-colors rounded-full">
            <ChevronLeft className="w-6 h-6" />
        </button>
        <button onClick={nextSlide} className="p-3 border border-zinc-700 text-white hover:bg-white hover:text-black transition-colors rounded-full">
            <ChevronRight className="w-6 h-6" />
        </button>
      </div>
      
      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-zinc-900 z-20">
        <motion.div 
            key={current}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 6, ease: "linear" }}
            className="h-full bg-white"
        />
      </div>
    </section>
  );
};
