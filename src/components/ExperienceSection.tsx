import React from 'react';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto container-padding">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Experience
        </h2>
        <div className="space-y-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-2">Social Media Officer – Pathik Gyan Niketan</h3>
            <p className="text-gray-400 mb-2">4.5 months</p>
            <ul className="text-gray-300 list-disc list-inside space-y-1">
              <li>Designed engaging social media posts for the school</li>
              <li>Captured professional photos during school events</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-2">Graphic Designer & Marketing Executive – Global Education Counselling Center</h3>
            <p className="text-gray-400 mb-2">3 months</p>
            <ul className="text-gray-300 list-disc list-inside space-y-1">
              <li>Created marketing materials and digital graphics</li>
              <li>Managed social media campaigns and promotions</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-2">Freelance Graphic Designer & Photographer</h3>
            <p className="text-gray-400 mb-2">Ongoing</p>
            <ul className="text-gray-300 list-disc list-inside space-y-1">
              <li>Worked with diverse clients on branding, design, and photography projects</li>
              <li>Specialized in wedding & event photography</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-2">Founder – Digital Print & Creative Studio (Self-Employed Agency)</h3>
            <p className="text-gray-400 mb-2">1.5 years</p>
            <ul className="text-gray-300 list-disc list-inside space-y-1">
              <li>Founded and managed a full-service creative agency</li>
              <li>Handled digital prints, social media, and photography for clients</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
