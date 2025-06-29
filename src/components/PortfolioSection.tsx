
import React, { useState } from 'react';
import { Eye, ExternalLink } from 'lucide-react';

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Mountain Resort Branding",
      category: "branding",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=500&h=400&fit=crop",
      description: "Complete brand identity for luxury mountain resort including logo, stationery, and digital assets."
    },
    {
      id: 2,
      title: "Wedding Photography",
      category: "photography",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=500&h=400&fit=crop",
      description: "Romantic wedding photography capturing intimate moments and celebration highlights."
    },
    {
      id: 3,
      title: "Social Media Campaign",
      category: "social",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=500&h=400&fit=crop",
      description: "Instagram campaign design for architecture firm featuring modern building photography."
    },
    {
      id: 4,
      title: "Community Event Coverage",
      category: "community",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=500&h=400&fit=crop",
      description: "Documentation of local youth club activities and community engagement events."
    },
    {
      id: 5,
      title: "Restaurant Brand Identity",
      category: "branding",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=500&h=400&fit=crop",
      description: "Traditional restaurant branding with modern twist, including menu design and signage."
    },
    {
      id: 6,
      title: "Nature Photography Series",
      category: "photography",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=500&h=400&fit=crop",
      description: "Wildlife and landscape photography series showcasing Nepal's natural beauty."
    },
    {
      id: 7,
      title: "Tech Startup Social Media",
      category: "social",
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=500&h=400&fit=crop",
      description: "Dynamic social media graphics for technology startup's product launch campaign."
    },
    {
      id: 8,
      title: "Cultural Festival Documentation",
      category: "community",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=400&fit=crop",
      description: "Comprehensive coverage of local cultural festival including performances and traditions."
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'branding', label: 'Branding' },
    { id: 'social', label: 'Social Media' },
    { id: 'photography', label: 'Photography' },
    { id: 'community', label: 'Community Projects' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="section-spacing bg-gradient-to-b from-portfolio-bg/30 to-white">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Eye className="h-5 w-5 text-portfolio-accent" />
            <span className="text-portfolio-accent font-semibold">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-portfolio-primary mb-6">
            Featured Work
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            A curated selection of projects showcasing my expertise in branding, social media design, and photography across various industries.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-portfolio-primary text-white shadow-lg'
                  : 'bg-white text-portfolio-primary hover:bg-portfolio-primary/10 border border-portfolio-primary/20'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-portfolio-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white text-portfolio-primary p-3 rounded-full hover:scale-110 transition-transform">
                    <ExternalLink className="h-5 w-5" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-portfolio-primary mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-portfolio-primary mb-4">
              Like What You See?
            </h3>
            <p className="text-gray-700 mb-6">
              These are just a few examples of my work. I'd love to discuss how we can create something amazing together for your next project.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-portfolio-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 hover:scale-105"
            >
              Start a Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
