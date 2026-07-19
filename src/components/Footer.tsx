import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer = ({ onContactClick }: { onContactClick: () => void }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const scrollToSection = (sectionId: string) => {
    if (isHome) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.assign(`/#${sectionId}`);
    }
  };

  return (
    <footer className="bg-deep-navy text-white relative overflow-hidden">
      
      <div className="container-max py-12 px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Link to="/" className="flex items-center space-x-2">
                <img src="/lovable-uploads/nicotine logo.webp" srcSet="/lovable-uploads/nicotine logo.webp 1x" alt="Corbett Industries logo" className="w-10 h-10 rounded-lg object-contain" />
                <span className="font-bold text-2xl">Corbett Industries</span>
              </Link>
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              CDMO nicotine pouch manufacturer supporting OEM manufacturing, private label nicotine
              pouches, custom formulations, premium packaging, and export-oriented production.
            </p>
            {/* Social media buttons removed as requested */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Manufacturing</h3>
            <div className="space-y-3">
              <button
                type="button"
                onClick={() => scrollToSection('capabilities')}
                className="block text-white/80 hover:text-sky-glow transition-colors"
              >
                OEM Capabilities
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('products')}
                className="block text-white/80 hover:text-sky-glow transition-colors"
              >
                Flavor and Strength Portfolio
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('compliance')}
                className="block text-white/80 hover:text-sky-glow transition-colors"
              >
                Quality and Compliance
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('about')}
                className="block text-white/80 hover:text-sky-glow transition-colors"
              >
                About Corbett Industries
              </button>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <div className="space-y-3 text-white/80">
              <Link to="/guides" className="block transition-colors hover:text-sky-glow">
                Guides
              </Link>
              <Link to="/guides/how-nicotine-pouches-are-manufactured" className="block transition-colors hover:text-sky-glow">
                Manufacturing Guide
              </Link>
              <Link to="/guides/oem-vs-private-label-vs-white-label-manufacturing" className="block transition-colors hover:text-sky-glow">
                OEM vs Private Label
              </Link>
              <Link to="/guides/global-regulations-for-nicotine-pouches" className="block transition-colors hover:text-sky-glow">
                Regulations Overview
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Get in Touch</h3>
            <address className="space-y-3 text-white/80 not-italic">
              <p>Uttarakhand, India</p>
              <p>
                <a href="mailto:pouchex@CorbettIndustries.co" className="transition-colors hover:text-sky-glow">
                  pouchex@CorbettIndustries.co
                </a>
              </p>
              <button
                type="button"
                onClick={onContactClick}
                className="btn-primary mt-4"
              >
                Request Quote
              </button>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">
              © 2026 Corbett Industries. All rights reserved. Leading OEM Innovations Globally.
            </div>
            {/* Footer links removed as requested */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
