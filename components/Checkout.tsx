
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

interface CheckoutProps {
  onBack: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen pt-32 pb-32 px-8 bg-gray-950 text-white animate-fade-in-up">
      <div className="max-w-4xl mx-auto">
        
        <button 
          onClick={onBack}
          className="group flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 hover:text-orange-500 transition-all mb-20"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Return to Strategy
        </button>

        <div className="space-y-24">
            <header className="space-y-8">
                <span className="text-[11px] font-bold text-orange-500 uppercase tracking-[0.5em] block">Consultation Gateway</span>
                <h1 className="text-6xl md:text-8xl font-serif leading-tight">Connect with a <br/><span className="italic text-gray-400">Senior Partner.</span></h1>
                <p className="text-xl text-gray-400 font-light max-w-2xl leading-relaxed">
                    Initiate a private consultation to discuss global sourcing, enterprise lead generation, or eCommerce scaling strategies.
                </p>
            </header>
            
            <form className="space-y-20 pb-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                 <div className="space-y-4">
                     <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-500">Executive Name</label>
                     <input type="text" className="w-full bg-transparent border-b border-white/20 py-4 text-xl outline-none focus:border-orange-500 transition-colors placeholder:text-gray-800" placeholder="Your Full Name" />
                 </div>
                 <div className="space-y-4">
                     <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-500">Corporate Email</label>
                     <input type="email" className="w-full bg-transparent border-b border-white/20 py-4 text-xl outline-none focus:border-orange-500 transition-colors placeholder:text-gray-800" placeholder="professional@company.com" />
                 </div>
              </div>

              <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-500">Organization & Scope</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/20 py-4 text-xl outline-none focus:border-orange-500 transition-colors placeholder:text-gray-800" placeholder="Company Name & Industry" />
              </div>

              <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-500">Strategic Objectives</label>
                  <textarea rows={4} className="w-full bg-transparent border-b border-white/20 py-4 text-xl outline-none focus:border-orange-500 transition-colors resize-none placeholder:text-gray-800" placeholder="How can we assist your global growth?" />
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                  <p className="text-xs text-gray-500 font-light max-w-sm">
                      By submitting this form, you agree to our professional terms of engagement and privacy policy. 
                  </p>
                  <button className="px-16 py-6 bg-orange-500 text-white text-xs font-bold uppercase tracking-[0.4em] hover:bg-white hover:text-gray-950 transition-all duration-500 shadow-2xl">
                    Submit Inquiry
                  </button>
              </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
