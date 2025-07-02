import React, { useRef, useEffect } from 'react';
import { Calendar, MapPin, Star } from 'lucide-react';
import { motion, useAnimation, useInView } from 'framer-motion';

const ExperienceSection = () => {
  const sectionRef = useRef(null);
  const sectionInView = useInView(sectionRef, { once: true });
  const sectionControls = useAnimation();

  useEffect(() => {
    if (sectionInView) {
      sectionControls.start('visible');
    }
  }, [sectionInView, sectionControls]);

  const experiences = [
    {
      title: "Founder",
      company: "Digital Print & Creative Studio",
      duration: "1.5 years",
      type: "Entrepreneurship",
      responsibilities: [
        "Full-service creative agency handling digital prints",
        "Social media content creation and management",
        "Event and wedding photography services",
        "Client relationship management and business development"
      ],
      highlight: true
    },
    {
      title: "Graphic Designer & Marketing Executive",
      company: "Global Education Counselling Center",
      duration: "3 months",
      type: "Full-time",
      responsibilities: [
        "Designed marketing materials and promotional content",
        "Created digital campaigns for education programs",
        "Collaborated with marketing team on brand consistency",
        "Developed visual content for social media platforms"
      ]
    },
    {
      title: "Social Media Officer",
      company: "Primary School",
      duration: "4.5 months",
      type: "Contract",
      responsibilities: [
        "Designed engaging social media posts and graphics",
        "Captured professional photos during school events",
        "Managed social media content calendar",
        "Enhanced school's digital presence and engagement"
      ]
    },
    {
      title: "Freelance Designer & Photographer",
      company: "Various Clients",
      duration: "Ongoing",
      type: "Freelance",
      responsibilities: [
        "Wedding and event photography coverage",
        "Brand identity design for local businesses",
        "Real estate photography and marketing materials",
        "Community project visual documentation"
      ]
    }
  ];

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={sectionControls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
      }}
      className="section-spacing bg-gray-900"
    >
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="h-5 w-5 text-portfolio-accent" />
            <span className="text-portfolio-accent font-semibold">Experience</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Professional Journey
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            From founding my own creative studio to collaborating with diverse clients, each experience has shaped my expertise in design and photography.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative bg-gray-900/80 border border-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                exp.highlight ? 'ring-2 ring-portfolio-accent/50' : ''
              }`}
            >
              {exp.highlight && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-portfolio-primary to-portfolio-accent"></div>
              )}
              
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-portfolio-accent font-semibold mb-2">
                      <MapPin className="h-4 w-4" />
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end">
                    <div className="flex items-center gap-2 text-gray-400 mb-1">
                      <Calendar className="h-4 w-4" />
                      {exp.duration}
                    </div>
                    <span className="text-sm bg-portfolio-accent/20 text-portfolio-accent px-3 py-1 rounded-full">
                      {exp.type}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <div key={respIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-portfolio-accent rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300">{resp}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gray-900/80 border border-gray-700 rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready for New Opportunities
            </h3>
            <p className="text-gray-300 mb-6">
              Looking to bring my diverse experience and creative passion to innovative projects in Dubai's dynamic market.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-portfolio-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 hover:scale-105"
            >
              Let's Collaborate
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ExperienceSection;
