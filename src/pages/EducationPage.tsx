import React from 'react';
import Navigation from '@/components/Navigation';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

const EducationPage = () => (
  <div className="min-h-screen">
    <Navigation />
    {/* For now, reuse AboutSection, or split out EducationSection later */}
    <AboutSection />
    <Footer />
  </div>
);

export default EducationPage; 