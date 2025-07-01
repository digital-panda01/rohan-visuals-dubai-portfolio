
import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-white py-12 relative">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Rohan Maharjan</h3>
            <p className="text-gray-400 mb-4">
              Visual Designer & Photographer crafting meaningful experiences through creative storytelling.
            </p>
            <p className="text-sm text-gray-500">
              From Nepal to Dubai - bringing creativity worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <div className="space-y-2 text-gray-400">
              <p>Brand Identity Design</p>
              <p>Social Media Design</p>
              <p>Wedding Photography</p>
              <p>Marketing Materials</p>
              <p>Real Estate Photography</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm flex items-center gap-2">
            Made with <Heart className="h-4 w-4 text-red-500" /> for creative excellence
          </p>
          <p className="text-gray-500 text-sm mt-4 md:mt-0">
            © 2024 Rohan Maharjan. All rights reserved.
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-6 right-6 bg-portfolio-accent text-white p-3 rounded-full shadow-lg hover:bg-portfolio-primary transition-all duration-300 hover:scale-110"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
};

export default Footer;
