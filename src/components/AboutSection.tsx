import React from 'react';
import { GraduationCap, MapPin, Heart } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-spacing bg-gray-900">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="w-full max-w-md mx-auto">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
                  <img
                    src="/lovable-uploads/7d410924-d347-4c3e-a21e-d6ed3a1f1e81.png"
                    alt="Rohan Maharjan - Profile Photo"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-portfolio-accent/20 rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-portfolio-primary/20 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="order-1 lg:order-2 animate-fade-in">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-5 w-5 text-portfolio-accent" />
              <span className="text-portfolio-accent font-semibold">About Me</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Creative Journey from Nepal to Dubai
            </h2>
            
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Rohan Maharjan is a passionate graphic designer and photographer from Nepal with a background in humanities and mass communication. Currently pursuing a Bachelor's degree in Business Studies, he combines creativity with communication and strategy.
            </p>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Rohan is now setting his sights on growing his creative journey in Dubai, bringing his unique perspective and diverse experience to help brands tell their stories through compelling visuals.
            </p>

            {/* Education */}
            <div className="space-y-4 mb-8">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                Education
              </h3>
              <div className="space-y-3 ml-7">
                <div>
                  <p className="font-semibold text-gray-200">Bachelor of Business Studies (Ongoing)</p>
                  <p className="text-sm text-gray-400">Kathmandu College of Central State</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-200">+2 Humanities</p>
                  <p className="text-sm text-gray-400">Kasthamandap Secondary School</p>
                </div>
              </div>
            </div>

            {/* Location & Goals */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="h-5 w-5 text-portfolio-accent" />
                <span className="font-semibold text-white">Next Chapter</span>
              </div>
              <p className="text-gray-300">
                Ready to bring creative excellence to Dubai's vibrant design landscape, combining traditional craftsmanship with modern innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
