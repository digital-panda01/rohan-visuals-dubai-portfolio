import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { portfolioProjects } from '@/data/portfolioProjects';

const PortfolioProjectPage = () => {
  const { projectId } = useParams();
  const project = portfolioProjects.find(p => p.id === projectId);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <Link to="/portfolio" className="text-blue-400 hover:text-blue-300 underline">
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="grid mx-auto container-padding">
        <Link
          to="/portfolio"
          className="inline-flex items-center text-gray-300 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Portfolio
        </Link>
        
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">{project.title}</h1>
          <p className="text-xl text-gray-300">{project.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Client</h3>
            <p className="text-gray-300">{project.client}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Year</h3>
            <p className="text-gray-300">{project.year}</p>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
          <div className="flex flex-wrap gap-2">
            {project.services.map((service, index) => (
              <span
                key={index}
                className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm"
              >
                {service}
              </span>
            ))}
          </div>
        </div>

        {/* Featured Image Display */}
        // Large preview removed as requested

        {/* Image Thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
          {project.images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`bg-white rounded-lg shadow-lg overflow-hidden flex items-center justify-center min-h-[120px] transition-all duration-300 ${
                selectedImage === index ? 'ring-4 ring-blue-500 scale-105' : 'hover:scale-105'
              }`}
            >
              <img
                src={image}
                alt={`${project.title} ${index + 1}`}
                className="max-w-full max-h-full object-contain"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioProjectPage;
