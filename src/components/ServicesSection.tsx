
import React from 'react';

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto container-padding">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-700 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-white mb-4">Branding</h3>
            <p className="text-gray-300">Complete brand identity design including logos, color schemes, and brand guidelines.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-white mb-4">Social Media Design</h3>
            <p className="text-gray-300">Eye-catching social media graphics and templates for your online presence.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-white mb-4">Photography</h3>
            <p className="text-gray-300">Professional photography services for events, portraits, and commercial projects.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
