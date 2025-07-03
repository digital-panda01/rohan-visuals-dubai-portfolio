
import React from 'react';

const ExperienceSection = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto container-padding">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Experience
        </h2>
        <div className="space-y-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-2">Visual Designer</h3>
            <p className="text-gray-400 mb-2">2020 - Present</p>
            <p className="text-gray-300">Creating visual identities and designs for various clients and projects.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-2">Photographer</h3>
            <p className="text-gray-400 mb-2">2018 - Present</p>
            <p className="text-gray-300">Capturing moments and stories through professional photography.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
