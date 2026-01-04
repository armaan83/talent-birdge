
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

interface FooterProps {
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onLinkClick }) => {
  return (
    <footer className="bg-gray-950 pt-32 pb-16 px-8 md:px-16 text-gray-500 border-t border-white/5 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"></div>
      
      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-24 mb-32">
            
            {/* Branding Column */}
            <div className="lg:col-span-2 space-y-12">
                <div className="flex items-center gap-3">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="40" height="40" rx="4" fill="white" fillOpacity="0.1"/>
                        <path d="M12 12H24C26.2091 12 28 13.7909 28 16V16C28 18.2091 26.2091 20 24 20H12V12Z" stroke="#f97316" strokeWidth="2" strokeLinejoin="round"/>
                        <path d="M12 20H24C26.2091 20 28 21.7909 28 24V24C28 26.2091 26.2091 28 24 28H12V20Z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                        <path d="M12 12V28" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <span className="text-xl font-serif font-bold tracking-tight text-white uppercase">
                      Talent <span className="text-orange-500">Bridge</span>
                    </span>
                </div>
                <p className="text-lg font-light leading-relaxed max-w-sm text-gray-400">
                    Architecting value through elite talent acquisition and strategic lead generation for global enterprises.
                </p>
                <div className="flex gap-8">
                    {['Linkedin', 'Twitter', 'Medium'].map(social => (
                        <a key={social} href="#" className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-500 hover:text-orange-500 transition-all duration-300">
                            {social}
                        </a>
                    ))}
                </div>
            </div>

            {/* Solutions Column */}
            <div className="space-y-8">
                <h4 className="text-white text-[11px] font-bold uppercase tracking-[0.4em] mb-4">Solutions</h4>
                <ul className="space-y-4 text-sm font-light">
                    <li><a href="#products" onClick={(e) => onLinkClick(e, 'products')} className="hover:text-orange-500 transition-colors">Global Sourcing</a></li>
                    <li><a href="#products" onClick={(e) => onLinkClick(e, 'products')} className="hover:text-orange-500 transition-colors">Enterprise Lead Gen</a></li>
                    <li><a href="#products" onClick={(e) => onLinkClick(e, 'products')} className="hover:text-orange-500 transition-colors">eComm Consulting</a></li>
                    <li><a href="#products" onClick={(e) => onLinkClick(e, 'products')} className="hover:text-orange-500 transition-colors">Market Strategy</a></li>
                </ul>
            </div>

            {/* Firm Column */}
            <div className="space-y-8">
                <h4 className="text-white text-[11px] font-bold uppercase tracking-[0.4em] mb-4">The Firm</h4>
                <ul className="space-y-4 text-sm font-light">
                    <li><a href="#about" onClick={(e) => onLinkClick(e, 'about')} className="hover:text-orange-500 transition-colors">Our History</a></li>
                    <li><a href="#journal" onClick={(e) => onLinkClick(e, 'journal')} className="hover:text-orange-500 transition-colors">Leadership</a></li>
                    <li><a href="#" onClick={(e) => onLinkClick(e, 'resources')} className="hover:text-orange-500 transition-colors">Resources</a></li>
                    <li><a href="#" className="hover:text-orange-500 transition-colors">Contact</a></li>
                </ul>
            </div>

            {/* Global Presence */}
            <div className="space-y-8">
                <h4 className="text-white text-[11px] font-bold uppercase tracking-[0.4em] mb-4">Headquarters</h4>
                <div className="text-sm font-light space-y-4 leading-relaxed">
                    <p>Park Avenue, Suite 1400<br/>New York, NY 10166</p>
                    <p className="text-orange-500">+1 (212) 555-0198</p>
                    <p>inquiry@talentbridge.global</p>
                </div>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-medium uppercase tracking-widest text-gray-600">
            <p>&copy; 2025 Talent Bridge Global Consulting Group LLC.</p>
            <div className="flex gap-12">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Engagement</a>
                <a href="#" className="hover:text-white transition-colors">Cookie Strategy</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
