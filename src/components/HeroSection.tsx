
import React from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen hero-gradient flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-portfolio-primary rounded-full"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 border-2 border-portfolio-accent rounded-full"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 border-2 border-portfolio-highlight rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto container-padding text-center relative z-10">
        <div className="animate-fade-in">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-portfolio-primary mb-6 leading-tight">
            Designing Stories
            <br />
            <span className="text-portfolio-accent">Through Visuals</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            I'm a Graphic Designer & Photographer from Nepal, passionate about crafting visual identities and capturing meaningful moments.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-portfolio-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              View My Work
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-portfolio-primary text-portfolio-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-portfolio-primary hover:text-white transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </button>
          </div>

          {/* Featured Work Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-portfolio-primary to-portfolio-accent"></div>
              <div className="p-4">
                <h3 className="font-semibold text-portfolio-primary">Brand Identity</h3>
                <p className="text-sm text-gray-600">Creative logo design & branding</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-portfolio-accent to-portfolio-highlight"></div>
              <div className="p-4">
                <h3 className="font-semibold text-portfolio-primary">Social Media</h3>
                <p className="text-sm text-gray-600">Engaging post designs</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-portfolio-highlight to-portfolio-bg"></div>
              <div className="p-4">
                <h3 className="font-semibold text-portfolio-primary">Photography</h3>
                <p className="text-sm text-gray-600">Wedding & event photography</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="h-8 w-8 text-portfolio-primary" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
