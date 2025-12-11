import React from 'react';
import { Logo } from './Logo';
import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-black text-white pt-24 pb-12 border-t border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div>
            <Logo className="h-12 w-auto mb-8 text-white" />
            <p className="text-zinc-500 mb-8 max-w-xs leading-relaxed text-sm">
              专为现代运动员打造的高端运动服饰。每一个针脚都蕴含着精准、性能与风格。
              <br />
              <span className="block mt-4 text-xs font-mono text-zinc-600 uppercase">
                Designed in Shanghai
              </span>
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-black transition-all hover:-translate-y-1">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold uppercase mb-6 tracking-wider flex items-center gap-2">
              购物 <span className="text-xs text-zinc-600 font-normal">SHOP</span>
            </h4>
            <ul className="space-y-4 text-zinc-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-zinc-700 rounded-full"></span> 男士 / Men</a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-zinc-700 rounded-full"></span> 女士 / Women</a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-zinc-700 rounded-full"></span> 儿童 / Kids</a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-zinc-700 rounded-full"></span> 装备 / Accessories</a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-zinc-700 rounded-full"></span> 新品 / New Arrivals</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold uppercase mb-6 tracking-wider flex items-center gap-2">
              客户服务 <span className="text-xs text-zinc-600 font-normal">SUPPORT</span>
            </h4>
            <ul className="space-y-4 text-zinc-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">订单状态</a></li>
              <li><a href="#" className="hover:text-white transition-colors">配送政策</a></li>
              <li><a href="#" className="hover:text-white transition-colors">退换货服务</a></li>
              <li><a href="#" className="hover:text-white transition-colors">尺码指南</a></li>
              <li><a href="#" className="hover:text-white transition-colors">联系我们</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold uppercase mb-6 tracking-wider flex items-center gap-2">
              订阅 <span className="text-xs text-zinc-600 font-normal">NEWSLETTER</span>
            </h4>
            <p className="text-zinc-500 mb-6 text-sm">
              订阅以获取独家优惠、新品首发及会员专属福利。
            </p>
            <form className="flex flex-col gap-3">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input
                  type="email"
                  placeholder="请输入您的邮箱"
                  className="w-full bg-zinc-900 border border-zinc-800 text-white px-10 py-3 focus:ring-1 focus:ring-white focus:border-white outline-none transition-all placeholder:text-zinc-600 text-sm"
                />
              </div>
              <button className="bg-white text-black font-bold uppercase py-3 hover:bg-zinc-200 transition-colors tracking-widest text-sm">
                订阅 / Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center text-zinc-600 text-xs">
          <p>© 2025 Fitting Sports. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-zinc-400">隐私政策</a>
            <a href="#" className="hover:text-zinc-400">服务条款</a>
            <a href="#" className="hover:text-zinc-400">Cookie设置</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
