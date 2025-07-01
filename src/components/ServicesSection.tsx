
import React from 'react';
import { Palette, Camera, Share2, Printer, Building, Users } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Palette,
      title: "Brand Identity Design",
      description: "Creating memorable logos, color palettes, and complete brand systems that tell your story.",
      features: ["Logo Design", "Brand Guidelines", "Color Systems", "Typography"]
    },
    {
      icon: Share2,
      title: "Social Media Design",
      description: "Engaging visual content that captures attention and drives engagement across all platforms.",
      features: ["Post Designs", "Story Templates", "Cover Images", "Campaign Graphics"]
    },
    {
      icon: Printer,
      title: "Marketing Materials",
      description: "Professional print and digital marketing materials that make lasting impressions.",
      features: ["Posters & Flyers", "Banners & Flex", "Business Cards", "Brochures"]
    },
    {
      icon: Camera,
      title: "Wedding & Event Photography",
      description: "Capturing your most precious moments with artistic flair and professional quality.",
      features: ["Wedding Coverage", "Event Documentation", "Portrait Sessions", "Post-Processing"]
    },
    {
      icon: Building,
      title: "Real Estate Photography",
      description: "Professional property photography that showcases spaces in their best light.",
      features: ["Property Tours", "Architectural Shots", "Interior Photography", "Drone Footage"]
    },
    {
      icon: Users,
      title: "Community Projects",
      description: "Collaborative visual solutions for community events, youth programs, and social initiatives.",
      features: ["Event Coverage", "Campaign Design", "Documentation", "Promotional Materials"]
    }
  ];

  return (
    <section id="services" className="section-spacing bg-gray-900">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Palette className="h-5 w-5 text-portfolio-accent" />
            <span className="text-portfolio-accent font-semibold">Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What I Offer
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            From brand identity to event photography, I provide comprehensive creative solutions that help businesses and individuals tell their stories effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                <div className="bg-portfolio-primary/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-portfolio-accent/20 transition-colors">
                  <IconComponent className="h-8 w-8 text-portfolio-primary group-hover:text-portfolio-accent transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-portfolio-accent rounded-full"></div>
                      <span className="text-sm text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              My Creative Process
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Every project follows a structured approach to ensure quality results and client satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your vision and requirements" },
              { step: "02", title: "Concept", desc: "Developing creative ideas and initial designs" },
              { step: "03", title: "Creation", desc: "Bringing the concept to life with precision" },
              { step: "04", title: "Delivery", desc: "Final refinements and project handover" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-portfolio-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {process.title}
                </h4>
                <p className="text-sm text-gray-400">
                  {process.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
