
import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto container-padding">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Contact Me
        </h2>
        <div className="max-w-md mx-auto">
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
    </section>
  );
};

export default ContactSection;
