import React from 'react';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import { Plus } from 'lucide-react';
import { SectionTitle } from './ui/SectionTitle';

const products = [
  {
    id: 1,
    name: 'Phantom Runner V2',
    nameCN: '幻影跑鞋 V2',
    category: 'Men\'s Running',
    categoryCN: '男士跑步',
    price: '¥1,299',
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=2864&auto=format&fit=crop',
    tag: 'NEW',
  },
  {
    id: 2,
    name: 'Core Tech Tee',
    nameCN: '核心科技T恤',
    category: 'Men\'s Training',
    categoryCN: '男士训练',
    price: '¥399',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2960&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Stealth Leggings',
    nameCN: '隐形紧身裤',
    category: 'Women\'s Training',
    categoryCN: '女士训练',
    price: '¥699',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2599&auto=format&fit=crop',
    tag: 'HOT',
  },
  {
    id: 4,
    name: 'Aero Jacket',
    nameCN: '空气力学外套',
    category: 'Outerwear',
    categoryCN: '户外系列',
    price: '¥1,499',
    image: 'https://images.unsplash.com/photo-1559563458-52c69f83555a?q=80&w=2865&auto=format&fit=crop',
  },
];

interface TrendingNowProps {
  onNavigate?: (page: string) => void;
}

export const TrendingNow: React.FC<TrendingNowProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 bg-zinc-950 border-t border-zinc-900 overflow-hidden">
      <div className="container mx-auto px-6">
        
        <SectionTitle 
          title1="当季" 
          title2="热推" 
          backgroundText="TRENDING"
          subtitle="Latest Collection"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
          {products.map((product, index) => (
            <motion.div 
              key={product.id} 
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900 mb-6 rounded-sm">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {product.tag && (
                  <span className="absolute top-4 left-4 bg-white text-black text-[10px] font-bold px-3 py-1 uppercase tracking-wider">
                    {product.tag}
                  </span>
                )}
                
                {/* Quick Add Button */}
                <button className="absolute bottom-4 right-4 h-12 w-12 bg-white flex items-center justify-center text-black translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-xl hover:scale-110 z-20">
                  <Plus className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-1 pl-2 border-l-2 border-transparent group-hover:border-white transition-colors duration-300">
                <div className="flex justify-between items-start">
                  <h3 className="text-white text-lg font-bold uppercase tracking-wide group-hover:text-zinc-300 transition-colors">
                    {product.nameCN}
                  </h3>
                  <p className="text-white font-bold">{product.price}</p>
                </div>
                <p className="text-zinc-500 text-xs font-mono uppercase">{product.name}</p>
                <p className="text-zinc-400 text-sm">{product.categoryCN}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Button
            size="lg"
            variant="outline"
            className="relative overflow-hidden border-zinc-700 text-white bg-transparent hover:text-black rounded-none px-16 py-6 uppercase tracking-[0.2em] font-bold text-sm group"
            onClick={() => onNavigate && onNavigate('running')}
          >
            <span className="relative z-10">浏览全部商品 / Shop All</span>
            <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
          </Button>
        </div>
      </div>
    </section>
  );
};
