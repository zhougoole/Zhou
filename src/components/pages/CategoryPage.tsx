import React from 'react';
import { motion } from 'motion/react';
import { SectionTitle } from '../ui/SectionTitle';
import { Button } from '../ui/button';
import { ArrowLeft, Filter } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  tag?: string;
}

interface CategoryPageProps {
  category: 'running' | 'training' | 'lifestyle';
  onBack: () => void;
}

const data = {
  running: {
    title: "疾速奔跑",
    en: "RUNNING",
    desc: "专为速度而生。我们的跑步系列结合了最新的回弹科技与空气动力学设计。",
    heroImage: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2940&auto=format&fit=crop",
    products: [
      { id: 101, name: "Phantom R2", price: "¥1,299", image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=2000", tag: "NEW" },
      { id: 102, name: "Wind Breaker", price: "¥899", image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=2000" },
      { id: 103, name: "Pro Socks", price: "¥99", image: "https://images.unsplash.com/photo-1582966772652-2985139cd7f4?q=80&w=2000" },
      { id: 104, name: "Carbon X", price: "¥1,899", image: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=2000", tag: "PRO" },
    ]
  },
  training: {
    title: "力量训练",
    en: "TRAINING",
    desc: "突破瓶颈。高强度支撑与透气面料，助你征服每一次力竭。",
    heroImage: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2940&auto=format&fit=crop",
    products: [
      { id: 201, name: "Core Tee", price: "¥299", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000" },
      { id: 202, name: "Lift Shoes", price: "¥999", image: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=2000", tag: "STABLE" },
      { id: 203, name: "Pro Shorts", price: "¥359", image: "https://images.unsplash.com/photo-1517438476312-10d79c077509?q=80&w=2000" },
      { id: 204, name: "Grip Gloves", price: "¥159", image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2000" },
    ]
  },
  lifestyle: {
    title: "都市生活",
    en: "LIFESTYLE",
    desc: "全天候舒适。将运动机能融入日常穿搭，重新定义街头风格。",
    heroImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2840&auto=format&fit=crop",
    products: [
      { id: 301, name: "Urban Hoodie", price: "¥599", image: "https://images.unsplash.com/photo-1556906781-9a412961d28c?q=80&w=2000", tag: "HOT" },
      { id: 302, name: "Street Joggers", price: "¥499", image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=2000" },
      { id: 303, name: "Cap", price: "¥199", image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=2000" },
      { id: 304, name: "Tote Bag", price: "¥299", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=2000" },
    ]
  }
};

export const CategoryPage: React.FC<CategoryPageProps> = ({ category, onBack }) => {
  const content = data[category];

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <button 
            onClick={onBack}
            className="flex items-center text-zinc-400 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            返回首页
          </button>
          
          <div className="relative h-[40vh] w-full overflow-hidden rounded-sm mb-16">
             <img 
               src={content.heroImage} 
               alt={content.title} 
               className="w-full h-full object-cover opacity-60"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
             <div className="absolute bottom-10 left-10">
                <motion.h1 
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4"
                >
                  {content.title}
                </motion.h1>
                <p className="text-xl text-zinc-300 max-w-lg">{content.desc}</p>
             </div>
          </div>
        </div>

        {/* Filter Bar (Mockup) */}
        <div className="flex justify-between items-center mb-12 border-b border-zinc-800 pb-4 sticky top-24 bg-black/90 backdrop-blur-md z-40 py-4">
           <div className="flex gap-8 text-sm font-bold uppercase tracking-widest text-zinc-500">
              <button className="text-white">全部商品</button>
              <button className="hover:text-white transition-colors">鞋履</button>
              <button className="hover:text-white transition-colors">服饰</button>
              <button className="hover:text-white transition-colors">配件</button>
           </div>
           <button className="flex items-center gap-2 text-sm font-bold uppercase hover:text-zinc-300">
              <Filter className="w-4 h-4" /> 筛选
           </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
           {content.products.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                 <div className="relative aspect-[3/4] bg-zinc-900 mb-4 overflow-hidden rounded-sm">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {product.tag && (
                      <span className="absolute top-4 left-4 bg-white text-black text-xs font-bold px-2 py-1">
                        {product.tag}
                      </span>
                    )}
                 </div>
                 <h3 className="text-lg font-bold">{product.name}</h3>
                 <p className="text-zinc-400 text-sm">{product.price}</p>
              </motion.div>
           ))}
        </div>
        
        {/* Tech Section Spotlight */}
        <div className="mt-32 border-t border-zinc-900 pt-20">
            <SectionTitle title1="核心" title2="科技" backgroundText="TECHNOLOGY" subtitle="Innovation" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="h-[400px] bg-zinc-900 rounded-sm overflow-hidden relative group">
                   <img src="https://images.unsplash.com/photo-1518617886301-80a6513236ba?q=80&w=2000" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                   <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                       <span className="text-4xl font-black border-2 border-white px-6 py-2 uppercase tracking-widest">
                         AIR-FLEX
                       </span>
                   </div>
                </div>
                <div>
                   <h3 className="text-3xl font-bold mb-6">极致透气 · 零感贴合</h3>
                   <p className="text-zinc-400 leading-relaxed mb-8">
                      采用最新的 Air-Flex 编织技术，比传统面料轻 40%，透气性提升 200%。专为高强度训练设计，让你的每一次呼吸都畅通无阻。
                   </p>
                   <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-none px-8 py-4">
                      了解更多
                   </Button>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};
