import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedCategories } from './components/FeaturedCategories';
import { TrendingNow } from './components/TrendingNow';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { CategoryPage } from './components/pages/CategoryPage';
import { AnimatePresence, motion } from 'motion/react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderContent = () => {
    switch(currentPage) {
      case 'running':
        return <CategoryPage category="running" onBack={() => setCurrentPage('home')} />;
      case 'training':
        return <CategoryPage category="training" onBack={() => setCurrentPage('home')} />;
      case 'lifestyle':
        return <CategoryPage category="lifestyle" onBack={() => setCurrentPage('home')} />;
      case 'home':
      default:
        return (
          <>
            <Hero />
            <FeaturedCategories onNavigate={setCurrentPage} />
            <TrendingNow onNavigate={setCurrentPage} />
            <AboutSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar onNavigate={setCurrentPage} />
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default App;
