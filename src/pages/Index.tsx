import React, { Suspense, lazy, useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Navigation from '../components/Navigation';
import EnhancedHero from '../components/EnhancedHero';
import ContactModal from '../components/ContactModal';
import Seo from '../components/Seo';
import GuidesPreviewSection from '../components/GuidesPreviewSection';
import HomepageFaqSection from '../components/HomepageFaqSection';
import HomepageIntroSection from '../components/HomepageIntroSection';
import { canonicalSiteUrl, homepageDescription, homepageFaqs, homepageTitle } from '../lib/content';
import { breadcrumbSchema, faqSchema, organizationSchema, webpageSchema, websiteSchema } from '../lib/schema';

const MetricsCounter = lazy(() => import('../components/MetricsCounter'));
const EnhancedOEMCapabilities = lazy(() => import('../components/EnhancedOEMCapabilities'));
const ProductPortfolio = lazy(() => import('../components/ProductPortfolio'));
const ComplianceSection = lazy(() => import('../components/ComplianceSection'));
const AboutSection = lazy(() => import('../components/AboutSection'));
const Footer = lazy(() => import('../components/Footer'));

const Index = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const { scrollRef } = useScrollAnimation();
  const location = useLocation();

  const schema = useMemo(() => {
    const origin = canonicalSiteUrl;
    return [
      organizationSchema(origin),
      websiteSchema(origin),
      webpageSchema({
        origin,
        path: '/',
        title: homepageTitle,
        description: homepageDescription,
        imagePath: '/lovable-uploads/nicotine open pouch.webp'
      }),
      breadcrumbSchema(origin, [{ name: 'Home', path: '/' }]),
      faqSchema(origin, '/', homepageFaqs)
    ];
  }, []);

  const handleContactClick = () => {
    setIsContactModalOpen(true);
  };

  const handleContactClose = () => {
    setIsContactModalOpen(false);
  };

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const sectionId = location.hash.replace('#', '');
    const element = document.getElementById(sectionId);
    if (element) {
      requestAnimationFrame(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      });
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen">
      <Seo
        title={homepageTitle}
        description={homepageDescription}
        canonicalPath="/"
        schema={schema}
      />
      <Navigation onContactClick={handleContactClick} />
      <main ref={scrollRef}>
        <EnhancedHero onContactClick={handleContactClick} />
        <HomepageIntroSection onContactClick={handleContactClick} />
        <Suspense fallback={null}>
          <MetricsCounter />
          <EnhancedOEMCapabilities />
          <ProductPortfolio onContactClick={handleContactClick} />
          <ComplianceSection onContactClick={handleContactClick} />
          <AboutSection />
          <GuidesPreviewSection />
          <HomepageFaqSection onContactClick={handleContactClick} />
        </Suspense>
      </main>
      <Footer onContactClick={handleContactClick} />
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={handleContactClose} 
      />
    </div>
  );
};

export default Index;
