import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';

interface NavbarProps {
  onNavigate: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '男士', en: 'MEN', page: 'running' },
    { name: '女士', en: 'WOMEN', page: 'training' },
    { name: '儿童', en: 'KIDS', page: 'lifestyle' },
    { name: '装备', en: 'GEAR', page: 'training' },
    { name: '系列', en: 'SERIES', page: 'lifestyle' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black/90 backdrop-blur-md py-4 shadow-lg shadow-white/5' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu />
          </button>

          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer">
            <div onClick={() => onNavigate('home')}>
              <Logo className="h-10 w-auto text-white" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => onNavigate(link.page)}
                className="group flex flex-col items-center bg-transparent border-none p-0 cursor-pointer"
              >
                <span className="text-base font-bold text-white transition-colors tracking-widest">
                  {link.name}
                </span>
                <span className="text-[10px] font-medium text-zinc-500 group-hover:text-zinc-300 transition-colors tracking-widest opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 duration-300">
                  {link.en}
                </span>
              </button>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center gap-6 text-white">
            <button className="hover:text-zinc-300 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="hidden sm:block hover:text-zinc-300 transition-colors">
              <User className="w-5 h-5" />
            </button>
            <button className="relative hover:text-zinc-300 transition-colors">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-white text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: "circOut" }}
            className="fixed inset-0 z-[60] bg-black flex flex-col p-6"
          >
            <div className="flex items-center justify-between mb-12">
              <Logo className="h-10 w-auto text-white" />
              <button
                className="text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col gap-8 pl-4">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.name}
                  onClick={() => {
                    onNavigate(link.page);
                    setIsMobileMenuOpen(false);
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="group flex items-baseline gap-3 text-left bg-transparent border-none p-0 cursor-pointer"
                >
                  <span className="text-3xl font-bold text-white">{link.name}</span>
                  <span className="text-sm font-medium text-zinc-600 uppercase tracking-widest">{link.en}</span>
                </motion.button>
              ))}
            </div>
            <div className="mt-auto pt-8 border-t border-zinc-800">
              <div className="flex flex-col gap-4">
                <Button variant="outline" className="w-full text-white border-zinc-700 hover:bg-zinc-800 hover:text-white">
                  登录 / Sign In
                </Button>
                <Button className="w-full bg-white text-black hover:bg-zinc-200">
                  加入会员 / Join Us
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
