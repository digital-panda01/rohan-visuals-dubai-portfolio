import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto container-padding">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Contact Me
        </h2>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-stretch">
          {/* Contact Details - Left */}
          <div className="md:w-1/2 flex flex-col justify-center md:items-start items-center text-center md:text-left">
            <h3 className="text-2xl font-semibold text-white mb-4">Get in Touch</h3>
            <ul className="text-gray-300 space-y-3 mb-8">
              <li><span className="font-bold text-portfolio-accent">Email:</span> maharjan10rohan@gmail.com</li>
              <li><span className="font-bold text-portfolio-accent">Phone:</span> 9848534297</li>
              <li><span className="font-bold text-portfolio-accent">Location:</span> Nepal, Kathmandu <span className="mx-2">→</span> Dubai, UAE</li>
            </ul>
            <p className="text-gray-400">Feel free to reach out for collaborations, project inquiries, or just to say hello!</p>
          </div>
          {/* Contact Form - Right */}
          <div className="md:w-1/2">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
