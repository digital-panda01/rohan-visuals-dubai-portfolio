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
              Hello! I'm Rohan Maharjan, a passionate visual designer and photographer dedicated to crafting compelling visual stories. My mission is to help brands and individuals express their unique identity through creative design and stunning photography.
            </p>
            <p className="text-gray-300 text-lg mb-6">
              With a background in both digital and print media, I bring a holistic approach to every project, ensuring each detail aligns with your vision and goals.
            </p>
            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Education</h3>
              <ul className="space-y-4">
                <li>
                  <span className="font-bold text-portfolio-accent">+2 Humanities</span><br/>
                  Kasthamandap S/S College<br/>
                  Graduated: 2018
                </li>
                <li>
                  <span className="font-bold text-portfolio-accent">Bachelor in Business Studies (BBS)</span><br/>
                  Kathmandu College of Central State<br/>
                  Status: Ongoing
                </li>
              </ul>
            </div>
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
