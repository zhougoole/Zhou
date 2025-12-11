import React from 'react';
import { Hero } from '../Hero';
import { FeaturedCategories } from '../FeaturedCategories';
import { TrendingNow } from '../TrendingNow';
import { AboutSection } from '../AboutSection';

interface HomeProps {
  onNavigate: (page: string, id?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <main>
      <Hero onNavigate={onNavigate} />
      <FeaturedCategories onNavigate={onNavigate} />
      <TrendingNow onNavigate={onNavigate} />
      <AboutSection />
    </main>
  );
};
