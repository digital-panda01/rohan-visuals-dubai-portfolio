import React, { useState, useRef } from 'react';
import { ChevronDown, Camera, Monitor, Cpu } from 'lucide-react';

const HeroSection = () => {
  const [brandBg, setBrandBg] = useState<string | null>(null);
  const [socialMediaBg, setSocialMediaBg] = useState<string | null>(null);
  const [photoBg, setPhotoBg] = useState<string | null>(null);
  const brandInputRef = useRef<HTMLInputElement>(null);
  const socialInputRef = useRef<HTMLInputElement>(null);
  const photoInputRef = useRef<HTMLInputElement>(null);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, setBg: (src: string) => void) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setBg(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, setBg: (src: string) => void) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setBg(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
      {/* Dark Cozy Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle gradient overlays for depth */}
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-900/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-purple-900/15 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-1/4 h-1/4 bg-gradient-to-r from-teal-900/10 to-transparent rounded-full blur-2xl"></div>
        
        {/* Floating Equipment Elements */}
        {/* Sony A7III Camera */}
        <div className="absolute top-20 right-20 opacity-10 rotate-12">
          <div className="w-32 h-20 bg-gray-700 rounded-lg border border-gray-600 relative">
            <div className="absolute top-2 left-2 w-12 h-8 bg-gray-800 rounded-full border border-gray-500"></div>
            <div className="absolute top-1 right-2 w-4 h-3 bg-red-500 rounded-sm"></div>
            <Camera className="absolute bottom-2 right-2 h-6 w-6 text-gray-500" />
          </div>
        </div>

        {/* Godox Flash */}
        <div className="absolute bottom-32 left-16 opacity-8 -rotate-6">
          <div className="w-16 h-24 bg-gray-700 rounded-t-lg border border-gray-600 relative">
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-8 h-6 bg-gray-300 rounded"></div>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-yellow-400 rounded-full"></div>
          </div>
        </div>

        {/* Desktop Setup with RGB */}
        <div className="absolute bottom-20 right-24 opacity-10 rotate-3">
          <div className="relative">
            {/* Monitor */}
            <div className="w-24 h-16 bg-gray-800 rounded border border-gray-600 relative">
              <div className="absolute inset-1 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded"></div>
              <Monitor className="absolute top-1 right-1 h-4 w-4 text-gray-400" />
            </div>
            {/* RGB Keyboard */}
            <div className="w-20 h-6 bg-gray-700 rounded mt-1 border border-gray-600 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/40 via-green-500/40 to-blue-500/40 animate-pulse"></div>
            </div>
            {/* RGB CPU */}
            <div className="absolute -top-8 -right-8 w-12 h-12 bg-gray-700 rounded border border-gray-600 relative">
              <div className="absolute inset-1 bg-gradient-to-tr from-purple-500/50 to-cyan-500/50 rounded animate-pulse"></div>
              <Cpu className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-6 w-6 text-gray-300" />
            </div>
          </div>
        </div>

        {/* Minimalist geometric shapes */}
        <div className="absolute top-1/3 left-12 w-8 h-8 border border-gray-600 rounded-full opacity-20"></div>
        <div className="absolute bottom-1/3 right-16 w-12 h-12 border border-gray-500 rotate-45 opacity-15"></div>
        <div className="absolute top-1/2 right-1/3 w-6 h-6 border border-gray-600 opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto container-padding text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Photo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-portfolio-primary shadow-2xl ring-4 ring-gray-700/50">
                <img 
                  src="/lovable-uploads/64b5c226-d742-4e6f-ba17-adf1c91284ac.png" 
                  alt="Rohan Maharjan - Graphic Designer & Photographer"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-portfolio-accent rounded-full flex items-center justify-center border-4 border-gray-800 shadow-lg">
                <span className="text-white font-bold text-lg">RM</span>
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            Designing Stories
            <br />
            <span className="bg-gradient-to-r from-portfolio-accent to-portfolio-highlight bg-clip-text text-transparent">Through Visuals</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            I'm a Graphic Designer & Photographer from Nepal, passionate about crafting visual identities and capturing meaningful moments.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-portfolio-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 hover:scale-105 shadow-lg border border-gray-700"
            >
              View My Work
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-portfolio-accent text-portfolio-accent px-8 py-4 rounded-lg text-lg font-semibold hover:bg-portfolio-accent hover:text-white transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </button>
          </div>

          {/* Featured Work Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            {/* Brand Identity Card */}
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-700">
              <div
                className="h-48 w-full relative flex items-center justify-center cursor-pointer group"
                onDrop={e => handleDrop(e, src => setBrandBg(src))}
                onDragOver={handleDragOver}
                onClick={() => brandInputRef.current?.click()}
                title="Drag and drop a thumbnail image here or click to select"
              >
                <input
                  type="file"
                  accept="image/*"
                  ref={brandInputRef}
                  className="hidden"
                  onChange={e => handleFileChange(e, src => setBrandBg(src))}
                />
                {brandBg ? (
                  <img src={brandBg} alt="Brand Identity Thumbnail" className="absolute inset-0 w-full h-full object-cover" />
                ) : (
                  <img src="/placeholder.svg" alt="Brand Identity Placeholder" className="absolute inset-0 w-full h-full object-cover opacity-30" />
                )}
                <div className="absolute inset-0 bg-gradient-to-br from-portfolio-primary to-portfolio-accent opacity-70 group-hover:opacity-60 transition" />
                <span className="relative z-10 text-xs text-white bg-gray-900/60 px-2 py-1 rounded shadow mt-32 group-hover:opacity-100 opacity-0 transition">Drag & drop or click to upload</span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-white">Brand Identity</h3>
                <p className="text-sm text-gray-400">Creative logo design & branding</p>
              </div>
            </div>
            {/* Social Media Card */}
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-700">
              <div
                className="h-48 w-full relative flex items-center justify-center cursor-pointer group"
                onDrop={e => handleDrop(e, src => setSocialMediaBg(src))}
                onDragOver={handleDragOver}
                onClick={() => socialInputRef.current?.click()}
                title="Drag and drop a thumbnail image here or click to select"
              >
                <input
                  type="file"
                  accept="image/*"
                  ref={socialInputRef}
                  className="hidden"
                  onChange={e => handleFileChange(e, src => setSocialMediaBg(src))}
                />
                {socialMediaBg ? (
                  <img src={socialMediaBg} alt="Social Media Thumbnail" className="absolute inset-0 w-full h-full object-cover" />
                ) : (
                  <img src="/placeholder.svg" alt="Social Media Placeholder" className="absolute inset-0 w-full h-full object-cover opacity-30" />
                )}
                <div className="absolute inset-0 bg-gradient-to-br from-portfolio-accent to-portfolio-highlight opacity-70 group-hover:opacity-60 transition" />
                <span className="relative z-10 text-xs text-white bg-gray-900/60 px-2 py-1 rounded shadow mt-32 group-hover:opacity-100 opacity-0 transition">Drag & drop or click to upload</span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-white">Social Media</h3>
                <p className="text-sm text-gray-400">Engaging post designs</p>
              </div>
            </div>
            {/* Photography Card */}
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-700">
              <div
                className="h-48 w-full relative flex items-center justify-center cursor-pointer group"
                onDrop={e => handleDrop(e, src => setPhotoBg(src))}
                onDragOver={handleDragOver}
                onClick={() => photoInputRef.current?.click()}
                title="Drag and drop a thumbnail image here or click to select"
              >
                <input
                  type="file"
                  accept="image/*"
                  ref={photoInputRef}
                  className="hidden"
                  onChange={e => handleFileChange(e, src => setPhotoBg(src))}
                />
                {photoBg ? (
                  <img src={photoBg} alt="Photography Thumbnail" className="absolute inset-0 w-full h-full object-cover" />
                ) : (
                  <img src="/placeholder.svg" alt="Photography Placeholder" className="absolute inset-0 w-full h-full object-cover opacity-30" />
                )}
                <div className="absolute inset-0 bg-gradient-to-br from-portfolio-highlight to-portfolio-bg opacity-70 group-hover:opacity-60 transition" />
                <span className="relative z-10 text-xs text-white bg-gray-900/60 px-2 py-1 rounded shadow mt-32 group-hover:opacity-100 opacity-0 transition">Drag & drop or click to upload</span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-white">Photography</h3>
                <p className="text-sm text-gray-400">Wedding & event photography</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="h-8 w-8 text-portfolio-accent" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
