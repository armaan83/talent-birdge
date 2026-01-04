
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[850px] overflow-hidden bg-gray-950 flex items-center justify-center text-center">
      
      {/* Premium Parallax Background */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{ 
            transform: `translateY(${scrollY * 0.4}px) scale(${1.05 + scrollY * 0.0001})`,
            transition: 'transform 0.05s linear'
        }}
      >
        <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2400" 
            alt="Corporate Excellence" 
            className="w-full h-full object-cover opacity-40 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-950/20 to-gray-950"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl px-8">
        <div className="space-y-16">
          <div className="flex flex-col items-center gap-8">
            <div className="overflow-hidden">
                <span className="inline-block px-6 py-2 rounded-none border-l-2 border-orange-500 bg-white/5 text-orange-500 text-[11px] font-bold uppercase tracking-[0.4em] animate-in slide-in-from-left duration-1000">
                  Global Strategy & Recruitment Firm
                </span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-[120px] font-serif text-white leading-[0.95] tracking-tighter animate-in slide-in-from-bottom-16 duration-1000 delay-200">
              Architecting <span className="italic text-orange-500">Value</span><br/> Through Talent.
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-3xl mx-auto animate-in fade-in duration-1000 delay-500">
            End-to-end recruitment and lead-generation strategy for the world's most ambitious eCommerce enterprises.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center pt-8 animate-in slide-in-from-bottom-8 duration-1000 delay-700">
            <a 
              href="#products" 
              onClick={(e) => handleNavClick(e, 'products')}
              className="group relative px-14 py-6 bg-orange-500 text-white rounded-none text-xs font-bold uppercase tracking-[0.3em] overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(249,115,22,0.4)]"
            >
              <span className="relative z-10">Our Solutions</span>
              <div className="absolute inset-0 bg-gray-900 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </a>
            <a 
              href="#about" 
              onClick={(e) => handleNavClick(e, 'about')}
              className="px-14 py-6 border border-white/20 text-white hover:bg-white hover:text-gray-950 transition-all duration-500 text-xs font-bold uppercase tracking-[0.3em]"
            >
              The Strategy
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 opacity-30 animate-pulse">
         <span className="text-[9px] uppercase tracking-[0.6em] text-white">Explore Excellence</span>
         <div className="w-[1px] h-20 bg-gradient-to-b from-orange-500 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
