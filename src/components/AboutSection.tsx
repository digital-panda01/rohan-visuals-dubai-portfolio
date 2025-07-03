
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto container-padding">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-300 text-lg mb-6">
              I'm a passionate visual designer and photographer based in Nepal, specializing in creating compelling visual stories through design and photography.
            </p>
            <p className="text-gray-300 text-lg">
              With years of experience in branding, social media design, and photography, I help businesses and individuals bring their vision to life.
            </p>
          </div>
          <div className="bg-gray-700 h-64 rounded-lg flex items-center justify-center">
            <p className="text-gray-400">Photo placeholder</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
