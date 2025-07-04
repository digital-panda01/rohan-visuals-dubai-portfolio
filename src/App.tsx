import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PortfolioPage from "./pages/PortfolioPage";
import PortfolioProjectPage from "./pages/PortfolioProjectPage";
import AboutPage from './pages/AboutPage';
import EducationPage from './pages/EducationPage';
import ExperiencePage from './pages/ExperiencePage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 5 * 60 * 1000,
    },
  },
});

const AnimatedBackground = () => {
  // Parallax effect on scroll
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }} aria-hidden="true" key="animated-bg">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.18 }}
        transition={{ duration: 2 }}
        style={{ width: '100vw', height: '100vh', position: 'absolute', top: 0, left: 0 }}
      >
        {/* Professional floating blobs with parallax */}
        <motion.div
          style={{
            position: 'absolute',
            width: 420,
            height: 420,
            borderRadius: '50%',
            background: 'radial-gradient(circle at 30% 30%, #7c3aed 50%, #818cf8 80%, transparent 100%)',
            top: `calc(8% + ${scrollY * 0.04}px)`,
            left: '4%',
            filter: 'blur(60px)',
            opacity: 0.5,
            transition: 'top 0.2s',
          }}
          animate={{
            y: [0, 30, 0],
            x: [0, 18, 0],
            scale: [1, 1.07, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
        />
        <motion.div
          style={{
            position: 'absolute',
            width: 320,
            height: 320,
            borderRadius: '50%',
            background: 'radial-gradient(circle at 70% 70%, #f472b6 40%, #f9a8d4 80%, transparent 100%)',
            bottom: `calc(8% - ${scrollY * 0.03}px)`,
            right: '8%',
            filter: 'blur(60px)',
            opacity: 0.4,
            transition: 'bottom 0.2s',
          }}
          animate={{
            y: [0, -24, 0],
            x: [0, -16, 0],
            scale: [1, 1.09, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
        />
        <motion.div
          style={{
            position: 'absolute',
            width: 260,
            height: 260,
            borderRadius: '50%',
            background: 'radial-gradient(circle at 50% 50%, #34d399 40%, #6ee7b7 80%, transparent 100%)',
            top: `calc(58% + ${scrollY * 0.02}px)`,
            left: '38%',
            filter: 'blur(60px)',
            opacity: 0.35,
            transition: 'top 0.2s',
          }}
          animate={{
            y: [0, 18, 0],
            x: [0, -10, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 26, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
        />
        {/* Soft fade at edges for elegance */}
        <div style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background: 'radial-gradient(ellipse at center, transparent 70%, #18181b 100%)',
          zIndex: 2,
        }} />
      </motion.div>
    </div>
  );
};

const App = () => {
  console.log("App component is rendering");
  
  return (
    <>
      <AnimatedBackground />
      <ErrorBoundary>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <div className="min-h-screen bg-gray-900 text-gray-100" style={{ position: 'relative', zIndex: 1 }}>
              <Toaster />
              <Sonner />
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/education" element={<EducationPage />} />
                  <Route path="/experience" element={<ExperiencePage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/portfolio" element={<PortfolioPage />} />
                  <Route path="/portfolio/:projectId" element={<PortfolioProjectPage />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            </div>
          </TooltipProvider>
        </QueryClientProvider>
      </ErrorBoundary>
    </>
  );
};

export default App;
