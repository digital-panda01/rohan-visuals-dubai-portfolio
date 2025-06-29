import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "maharjan01rohan@gmail.com",
      href: "mailto:maharjan01rohan@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+977 9848534297",
      href: "tel:+9779848534297"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kathmandu, Nepal → Dubai, UAE",
      href: null
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://linkedin.com/in/rohanmaharjan"
    }
  ];

  return (
    <section id="contact" className="section-spacing bg-portfolio-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-40 h-40 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 border-2 border-white rounded-full"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 border-2 border-white rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto container-padding relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Send className="h-5 w-5 text-portfolio-highlight" />
            <span className="text-portfolio-highlight font-semibold">Contact</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Create Something Amazing
          </h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Ready to bring your vision to life? Whether you need branding, photography, or creative consultation, I'm here to help make it happen.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-portfolio-highlight"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-portfolio-highlight"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-portfolio-highlight resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-portfolio-accent hover:bg-portfolio-highlight text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:scale-100 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-gray-200 mb-8">
                I'm always excited to discuss new projects and creative opportunities. Whether you're looking for a complete rebrand or just need some photography work, let's talk!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-center gap-4">
                    <div className="bg-portfolio-accent/20 p-3 rounded-lg">
                      <IconComponent className="h-6 w-6 text-portfolio-highlight" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-300">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-white font-semibold hover:text-portfolio-highlight transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white font-semibold">{info.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-portfolio-accent/20 rounded-xl p-6 mt-8">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="h-6 w-6 text-portfolio-highlight" />
                <h4 className="text-lg font-semibold">Ready to Collaborate?</h4>
              </div>
              <p className="text-gray-200 mb-4">
                I'm currently available for new projects and always open to discussing creative opportunities in Dubai's vibrant market.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:maharjan01rohan@gmail.com"
                  className="bg-portfolio-highlight text-portfolio-primary px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-all text-center"
                >
                  Email Me
                </a>
                <a
                  href="#"
                  className="border border-portfolio-highlight text-portfolio-highlight px-6 py-2 rounded-lg font-semibold hover:bg-portfolio-highlight hover:text-portfolio-primary transition-all text-center"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
