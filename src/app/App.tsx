import { useRef, useState } from 'react';
import { MainNav } from './components/navigation/MainNav';
import { RotatingProfileHero } from './components/merged/RotatingProfileHero';
import { FloatingCartButton } from '@/app/components/cart/FloatingCartButton';
import { CartModal } from '@/app/components/cart/CartModal';
import { ServiceSelectionModal } from '@/app/components/merged/ServiceSelectionModal';
import { ContactModal } from '@/app/components/ContactModal';
import { EnhancedServicesSection } from '@/app/components/merged/EnhancedServicesSection';
import { FeaturedServices } from '@/app/components/merged/FeaturedServices';
import { WebDevProductsWithImages } from '@/app/components/products/WebDevProductsWithImages';
import { ElectricalProductsWithImages } from '@/app/components/products/ElectricalProductsWithImages';
import { PrintingProductsWithImages } from '@/app/components/products/PrintingProductsWithImages';
import { ContactSection } from '@/app/components/merged/ContactSection';
import { EnhancedTestimonials } from '@/app/components/merged/EnhancedTestimonials';
import { AboutMe } from '@/app/pages/AboutMe';
import { Gallery } from '@/app/pages/Gallery';
import { ThemeProvider, useTheme } from '@/app/contexts/ThemeContext';
import { ThemeToggle } from '@/app/components/shared/ThemeToggle';
import { CartProvider } from '@/app/contexts/CartContext';
import { motion, AnimatePresence } from 'motion/react';

function AppContent() {
  const { isDark } = useTheme();
  const [activePage, setActivePage] = useState<'home' | 'about' | 'gallery'>('home');
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isServiceSelectionOpen, setIsServiceSelectionOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [activeService, setActiveService] = useState<'web' | 'electrical' | 'printing'>('web');
  const [showAllProducts, setShowAllProducts] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleStartProject = () => {
    setIsServiceSelectionOpen(true);
  };

  const handleServiceSelect = (service: string, contactMethod: 'whatsapp' | 'email' | 'sms') => {
    const serviceNames = {
      web: 'Web Development',
      electrical: 'Electrical Installation',
      printing: 'General Printing'
    };

    const serviceName = serviceNames[service as keyof typeof serviceNames];
    const message = `Hello! I'm interested in your ${serviceName} services.`;

    if (contactMethod === 'whatsapp') {
      window.open(`https://wa.me/2348109368514?text=${encodeURIComponent(message)}`, '_blank');
    } else if (contactMethod === 'sms') {
      window.open(`sms:+2348109368514?body=${encodeURIComponent(message)}`, '_blank');
    } else {
      setIsContactModalOpen(true);
    }
  };

  const handleServiceClick = (service: 'web' | 'electrical' | 'printing') => {
    setActiveService(service);
    setShowAllProducts(true);
    setTimeout(() => {
      document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-slate-900' : 'bg-gray-50'}`}>
      <ThemeToggle />
      <MainNav activePage={activePage} onPageChange={setActivePage} />

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute inset-0 ${isDark ? 'bg-linear-to-br from-purple-900/20 via-slate-900 to-orange-900/20' : 'bg-linear-to-br from-purple-100/30 via-gray-50 to-orange-100/30'}`} />
        <div className={`absolute top-0 left-1/4 w-96 h-96 ${isDark ? 'bg-purple-500/10' : 'bg-purple-300/20'} rounded-full blur-3xl animate-pulse`} />
        <div className={`absolute bottom-0 right-1/4 w-96 h-96 ${isDark ? 'bg-orange-500/10' : 'bg-orange-300/20'} rounded-full blur-3xl animate-pulse`} style={{ animationDelay: '1s' }} />
        <div className={`absolute top-1/2 left-1/2 w-96 h-96 ${isDark ? 'bg-pink-500/10' : 'bg-pink-300/20'} rounded-full blur-3xl animate-pulse`} style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative">
        {activePage === 'home' && (
          <>
            <RotatingProfileHero
              onContactClick={handleStartProject}
              onExploreServices={scrollToServices}
            />

            <div ref={servicesRef}>
              <EnhancedServicesSection
                activeService={activeService}
                onServiceChange={setActiveService}
              />
            </div>

            {!showAllProducts ? (
              <FeaturedServices onServiceClick={handleServiceClick} />
            ) : (
              <div id="products-section" className="max-w-7xl mx-auto px-6 overflow-hidden">
                <AnimatePresence mode="wait">
                  {activeService === 'web' && (
                    <motion.div
                      key="web"
                      initial={{ x: 300, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -300, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <WebDevProductsWithImages />
                    </motion.div>
                  )}
                  {activeService === 'electrical' && (
                    <motion.div
                      key="electrical"
                      initial={{ x: 300, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -300, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <ElectricalProductsWithImages />
                    </motion.div>
                  )}
                  {activeService === 'printing' && (
                    <motion.div
                      key="printing"
                      initial={{ x: 300, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -300, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <PrintingProductsWithImages />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            <div className="max-w-7xl mx-auto px-6">
              <EnhancedTestimonials />
            </div>

            <ContactSection onContactClick={handleStartProject} />

            <footer className="relative border-t border-white/10 py-12">
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center">
                  <p className={`mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    © 2026 Daniel Jegbefumhen. All rights reserved.
                  </p>
                  <p className={`text-sm ${isDark ? 'text-slate-600' : 'text-slate-500'}`}>
                    Crafted with passion and precision • Web Development • Electrical Installation • Printing Services
                  </p>
                </div>
              </div>
            </footer>
          </>
        )}

        {activePage === 'about' && <AboutMe onContactClick={handleStartProject} />}

        {activePage === 'gallery' && <Gallery onRequestSample={handleStartProject} />}
      </div>

      <FloatingCartButton onClick={() => setIsCartModalOpen(true)} />

      <ServiceSelectionModal
        isOpen={isServiceSelectionOpen}
        onClose={() => setIsServiceSelectionOpen(false)}
        onServiceSelect={handleServiceSelect}
      />

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

      <CartModal
        isOpen={isCartModalOpen}
        onClose={() => setIsCartModalOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </ThemeProvider>
  );
}