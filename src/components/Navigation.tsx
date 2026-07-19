import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { useScrollDirection } from '../hooks/useScrollDirection';

const Navigation = ({
  onContactClick
}: {
  onContactClick: () => void;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollDirection = useScrollDirection();
  const [atTop, setAtTop] = useState(true);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.scrollY === 0);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = `fixed top-0 w-full border-b border-white/20 z-40 transition-transform duration-300 ${scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'} ${atTop ? 'bg-transparent' : 'bg-white/80 backdrop-blur-md'}`;

  const scrollToSection = (sectionId: string) => {
    if (isHome) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    } else {
      window.location.assign(`/#${sectionId}`);
    }
    setIsMenuOpen(false);
  };

  return <nav className={navClass} aria-label="Primary">
      <div className="container-max flex items-center justify-between py-4 px-6">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2" aria-label="Corbett Industries home">
            <img src="/lovable-uploads/nicotine logo.webp" srcSet="/lovable-uploads/nicotine logo.webp 1x" alt="Corbett Industries logo" className="w-8 h-8 rounded-lg object-contain" />
            <span className="font-bold text-xl text-deep-navy">Corbett Industries</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <button type="button" onClick={() => scrollToSection('capabilities')} className="text-gray-900 hover:text-blue-600 transition-colors" aria-label="View manufacturing capabilities section">
            Manufacturing
          </button>
          <button type="button" onClick={() => scrollToSection('products')} className="text-gray-900 hover:text-blue-600 transition-colors" aria-label="View product portfolio section">
            Products
          </button>
          <button type="button" onClick={() => scrollToSection('compliance')} className="text-gray-900 hover:text-blue-600 transition-colors" aria-label="View quality and compliance section">
            Quality
          </button>
          <Link to="/guides" className="text-gray-900 transition-colors hover:text-blue-600">
            Guides
          </Link>
          <button type="button" onClick={() => scrollToSection('about')} className="text-gray-900 hover:text-blue-600 transition-colors" aria-label="View about section">
            About
          </button>
          <Button onClick={onContactClick} className="btn-primary">
            Request Quote
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-expanded={isMenuOpen} aria-label="Toggle navigation menu" type="button">
          <div className="w-6 h-6 flex flex-col justify-center space-y-1">
            <span className={`block h-0.5 bg-deep-navy transition-all ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
            <span className={`block h-0.5 bg-deep-navy transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 bg-deep-navy transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
          </div>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && <div className="absolute top-full left-0 w-full bg-deep-navy/95 backdrop-blur-lg md:hidden">
            <div className="flex flex-col py-6 px-6 space-y-4">
              <button type="button" onClick={() => scrollToSection('capabilities')} className="text-white hover:text-sky-glow transition-colors text-left">
                Manufacturing
              </button>
              <button type="button" onClick={() => scrollToSection('products')} className="text-white hover:text-sky-glow transition-colors text-left">
                Products
              </button>
              <button type="button" onClick={() => scrollToSection('compliance')} className="text-white hover:text-sky-glow transition-colors text-left">
                Quality
              </button>
              <Link to="/guides" className="text-white transition-colors hover:text-sky-glow" onClick={() => setIsMenuOpen(false)}>
                Guides
              </Link>
              <button type="button" onClick={() => scrollToSection('about')} className="text-white hover:text-sky-glow transition-colors text-left">
                About
              </button>
              <Button onClick={onContactClick} className="btn-primary mt-4">
                Request Quote
              </Button>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;