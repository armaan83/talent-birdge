
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { BRAND_NAME } from '../constants';

interface NavbarProps {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
  onOpenInquiry: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavClick, onOpenInquiry }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    setMobileMenuOpen(false);
    onNavClick(e, targetId);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled || mobileMenuOpen 
            ? 'bg-white/80 backdrop-blur-xl py-4 shadow-sm border-b border-gray-100' 
            : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 flex items-center justify-between">
          
          {/* Logo */}
          <a 
            href="#" 
            onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                onNavClick(e, '');
            }}
            className="flex items-center gap-3 group transition-transform duration-300 hover:scale-[1.02]"
          >
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="4" fill={scrolled ? "#111827" : "white"} fillOpacity={scrolled ? "1" : "0.1"}/>
                <path d="M12 12H24C26.2091 12 28 13.7909 28 16V16C28 18.2091 26.2091 20 24 20H12V12Z" stroke={scrolled ? "#111827" : "white"} strokeWidth="2" strokeLinejoin="round"/>
                <path d="M12 20H24C26.2091 20 28 21.7909 28 24V24C28 26.2091 26.2091 28 24 28H12V20Z" stroke="#f97316" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M12 12V28" stroke={scrolled ? "#111827" : "white"} strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className={`text-xl font-serif font-bold tracking-tight transition-colors duration-500 ${scrolled ? 'text-gray-900' : 'text-white'}`}>
              TALENT <span className="text-orange-500">BRIDGE</span>
            </span>
          </a>
          
          {/* Desktop Nav */}
          <div className={`hidden md:flex items-center gap-12 text-[10px] font-bold uppercase tracking-[0.25em] ${scrolled ? 'text-gray-600' : 'text-white/80'}`}>
            <a href="#products" onClick={(e) => handleLinkClick(e, 'products')} className="hover:text-orange-500 transition-colors">Solutions</a>
            <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="hover:text-orange-500 transition-colors">Strategy</a>
            <a href="#" onClick={(e) => handleLinkClick(e, 'resources')} className="hover:text-orange-500 transition-colors">Resources</a>
            <a href="#journal" onClick={(e) => handleLinkClick(e, 'journal')} className="hover:text-orange-500 transition-colors">Insights</a>
          </div>

          {/* Consultation CTA */}
          <div className="flex items-center gap-8">
            <button 
              onClick={onOpenInquiry}
              className={`px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-500 ${
                scrolled 
                  ? 'bg-gray-900 text-white hover:bg-orange-500 shadow-lg' 
                  : 'bg-white text-gray-900 hover:bg-orange-500 hover:text-white'
              }`}
            >
              Consult with Partner
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
