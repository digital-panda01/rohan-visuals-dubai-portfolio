import React, { useRef, useEffect, useState } from 'react';
import { Eye, ExternalLink } from 'lucide-react';
import { Link } from "react-router-dom";
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion';
import { portfolioProjects } from '../data/portfolioProjects';

const restaurantImages = [
  'https://i.ibb.co/BH4mvzYg/1.jpg',
  'https://i.ibb.co/mrsy54xB/2.jpg',
  'https://i.ibb.co/Z6wXq72/3.jpg',
  'https://i.ibb.co/svLj9Ym/4.jpg',
  'https://i.ibb.co/PJhPDsX/5.jpg',
  'https://i.ibb.co/DPpVz4J/6.jpg',
  'https://i.ibb.co/ksnVFxN/7.jpg',
];

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const sectionRef = useRef(null);
  const sectionInView = useInView(sectionRef, { once: true });
  const sectionControls = useAnimation();

  useEffect(() => {
    if (sectionInView) {
      sectionControls.start('visible');
    }
  }, [sectionInView, sectionControls]);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'branding', label: 'Branding' },
    { id: 'social', label: 'Social Media' },
    { id: 'photography', label: 'Photography' },
    { id: 'community', label: 'Community Projects' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? portfolioProjects
    : portfolioProjects.filter(project => project.category === activeFilter);

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={sectionControls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
      }}
      className="section-spacing bg-gradient-to-b from-portfolio-bg/30 to-white"
    >
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Eye className="h-5 w-5 text-portfolio-accent" />
            <span className="text-portfolio-accent font-semibold">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Work
          </h2>
          <p className="text-lg text-white max-w-3xl mx-auto">
            A curated selection of projects showcasing my expertise in branding, social media design, and photography across various industries.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 focus:outline-none
                ${activeFilter === category.id
                  ? 'bg-portfolio-primary text-white shadow-lg scale-105'
                  : 'bg-white text-portfolio-primary hover:bg-portfolio-primary/10 border border-portfolio-primary/20'}
              `}
              style={activeFilter === category.id ? { boxShadow: '0 4px 24px 0 rgba(80, 0, 120, 0.15)' } : {}}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                to={`/portfolio/${project.id}`}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group block"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-portfolio-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-white text-portfolio-primary p-3 rounded-full hover:scale-110 transition-transform">
                      <ExternalLink className="h-5 w-5" />
                    </span>
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
              </Link>
            ))}
          </AnimatePresence>
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
    </motion.section>
  );
};

export default PortfolioSection;
