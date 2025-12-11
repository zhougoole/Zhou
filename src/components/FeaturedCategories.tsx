import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { SectionTitle } from './ui/SectionTitle';

const categories = [
  {
    id: 1,
    title: '疾速奔跑',
    en: 'RUNNING',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2940&auto=format&fit=crop',
    description: '超越极限的速度与耐力',
    number: '01',
    page: 'running'
  },
  {
    id: 2,
    title: '力量训练',
    en: 'TRAINING',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2940&auto=format&fit=crop',
    description: '铸就钢铁般的意志',
    number: '02',
    page: 'training'
  },
  {
    id: 3,
    title: '都市生活',
    en: 'LIFESTYLE',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2840&auto=format&fit=crop',
    description: '全天候的舒适体验',
    number: '03',
    page: 'lifestyle'
  },
];

interface FeaturedCategoriesProps {
  onNavigate: (page: string) => void;
}

export const FeaturedCategories: React.FC<FeaturedCategoriesProps> = ({ onNavigate }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-6">
        
        <SectionTitle 
          title1="全套" 
          title2="装备" 
          backgroundText="CATEGORIES"
          subtitle="Gear Up Performance"
        />

        <div className="flex justify-end mb-8">
          <button onClick={() => onNavigate('running')} className="group flex items-center text-sm font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors bg-transparent border-none cursor-pointer">
            View All <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative h-[600px] overflow-hidden cursor-pointer group rounded-sm"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => onNavigate(cat.page)}
            >
              {/* Image Container */}
              <div className="absolute inset-0 overflow-hidden bg-zinc-900">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
              </div>
              
              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                   <span className="text-4xl font-black text-transparent group-hover:text-white transition-colors duration-500" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.5)' }}>
                    {cat.number}
                   </span>
                </div>

                <div>
                   <h3 className="text-2xl font-bold uppercase mb-2 flex flex-col">
                    <span className="text-[10px] tracking-[0.4em] text-zinc-400 mb-2 block">{cat.en}</span>
                    <span className="group-hover:translate-x-2 transition-transform duration-500 text-white">{cat.title}</span>
                  </h3>
                   <div className="h-[1px] w-12 group-hover:w-full bg-white transition-all duration-700 ease-out mb-4 opacity-50" />
                   <p className="text-zinc-400 text-sm max-w-[200px] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    {cat.description}
                   </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
