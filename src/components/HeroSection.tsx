
import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="text-center container-padding">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Rohan Maharjan
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Visual Designer & Photographer
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors">
            View Portfolio
          </button>
          <button className="border border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-gray-900 px-8 py-3 rounded-lg transition-colors">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
