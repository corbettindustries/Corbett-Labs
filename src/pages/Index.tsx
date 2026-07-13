
import React, { Suspense, lazy, useState } from 'react';
import EnhancedPreloader from '../components/EnhancedPreloader';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Navigation from '../components/Navigation';
import EnhancedHero from '../components/EnhancedHero';
import ContactModal from '../components/ContactModal';

const MetricsCounter = lazy(() => import('../components/MetricsCounter'));
const EnhancedOEMCapabilities = lazy(() => import('../components/EnhancedOEMCapabilities'));
const ProductPortfolio = lazy(() => import('../components/ProductPortfolio'));
const ComplianceSection = lazy(() => import('../components/ComplianceSection'));
const AboutSection = lazy(() => import('../components/AboutSection'));
const Footer = lazy(() => import('../components/Footer'));

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const { scrollRef } = useScrollAnimation();

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  const handleContactClick = () => {
    setIsContactModalOpen(true);
  };

  const handleContactClose = () => {
    setIsContactModalOpen(false);
  };

  if (isLoading) {
    return <EnhancedPreloader onComplete={handlePreloaderComplete} />;
  }

  return (
    <div className="min-h-screen">
      <Navigation onContactClick={handleContactClick} />
      <main ref={scrollRef}>
        <EnhancedHero onContactClick={handleContactClick} />
        <Suspense fallback={null}>
          <MetricsCounter />
          <EnhancedOEMCapabilities />
          <ProductPortfolio onContactClick={handleContactClick} />
          <ComplianceSection onContactClick={handleContactClick} />
          <AboutSection />
          <Footer onContactClick={handleContactClick} />
        </Suspense>
      </main>
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={handleContactClose} 
      />
    </div>
  );
};

export default Index;
