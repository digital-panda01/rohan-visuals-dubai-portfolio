import React from 'react';
import Navigation from '@/components/Navigation';
import PortfolioSection from '@/components/PortfolioSection';
import Footer from '@/components/Footer';

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-portfolio-bg/30 to-white">
      <Navigation />
      <PortfolioSection />
      <Footer />
    </div>
  );
};

export default PortfolioPage; 