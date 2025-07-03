import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const profilePhoto = '/public/placeholder.svg'; // Use your real photo if available

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Animated background shapes */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute w-96 h-96 bg-portfolio-accent rounded-full blur-3xl opacity-60 left-[-10%] top-[-10%] animate-pulse" />
        <div className="absolute w-80 h-80 bg-portfolio-primary rounded-full blur-2xl opacity-40 right-[-8%] bottom-[-8%] animate-pulse" />
      </motion.div>
      <div className="text-center container-padding z-10 w-full">
        <motion.img
          src={profilePhoto}
          alt="Rohan Maharjan profile"
          className="mx-auto mb-8 w-36 h-36 rounded-full object-cover border-4 border-portfolio-accent shadow-lg bg-white"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
        />
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Designing Stories Through Visuals
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          I'm Rohan Maharjan, a Graphic Designer & Photographer from Nepal, passionate about crafting visual identities and capturing meaningful moments.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <Link to="/portfolio">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors shadow-lg hover:scale-105">
              View Portfolio
            </button>
          </Link>
          <a href="#contact">
            <button className="border border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-gray-900 px-8 py-3 rounded-lg transition-colors shadow-lg hover:scale-105">
              Contact Me
            </button>
          </a>
        </motion.div>
        {/* Animated scroll down arrow */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <a href="#about" className="animate-bounce text-portfolio-accent text-3xl">
            ↓
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
