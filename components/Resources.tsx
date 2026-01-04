
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

interface ResourcesProps {
  onBack: () => void;
}

const Resources: React.FC<ResourcesProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-gray-50 flex flex-col">
      <div className="max-w-7xl mx-auto px-8 w-full">
        
        <header className="mb-24 text-center">
            <button 
                onClick={onBack}
                className="group flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-orange-600 transition-colors mx-auto mb-12"
            >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Return to Intelligence
            </button>
            <h1 className="text-5xl md:text-7xl font-serif text-gray-900 mb-8">Executive Resources</h1>
            <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
                Strategic whitepapers, market reports, and global webinars for multinational leadership.
            </p>
        </header>

        {/* Resource Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
            <div className="bg-white p-12 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
                <span className="text-orange-600 text-[10px] font-bold uppercase tracking-widest mb-6 block">Whitepaper</span>
                <h3 className="text-3xl font-serif text-gray-900 mb-6 group-hover:text-orange-600 transition-colors">Cross-Border eCommerce 2025</h3>
                <p className="text-gray-500 mb-12 font-light">Navigating digital regulation and talent acquisition in the APAC region.</p>
                <button className="text-[10px] font-bold uppercase tracking-widest border-b-2 border-orange-500 pb-1">Download Report</button>
            </div>
            <div className="bg-white p-12 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
                <span className="text-orange-600 text-[10px] font-bold uppercase tracking-widest mb-6 block">Analysis</span>
                <h3 className="text-3xl font-serif text-gray-900 mb-6 group-hover:text-orange-600 transition-colors">The Lead-Gen Evolution</h3>
                <p className="text-gray-500 mb-12 font-light">Why intent data is replacing volume in enterprise sales cycles.</p>
                <button className="text-[10px] font-bold uppercase tracking-widest border-b-2 border-orange-500 pb-1">Read Briefing</button>
            </div>
        </div>

        {/* Webinars Section - Empty State */}
        <section className="bg-gray-900 py-24 px-12 text-center text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[100px]"></div>
            <div className="relative z-10 max-w-xl mx-auto">
                <h2 className="text-4xl font-serif mb-6 text-white">Upcoming Webinars</h2>
                <div className="py-16 border-y border-white/10 my-12">
                    <p className="text-gray-400 text-lg italic mb-2">There are no upcoming live events at this time.</p>
                    <p className="text-gray-500 text-sm font-light">Please check back soon for our Q3 Strategic Outlook.</p>
                </div>
                <div className="space-y-6">
                    <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-orange-500">Get Notified</p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input 
                            type="email" 
                            placeholder="Corporate Email" 
                            className="bg-white/5 border border-white/20 px-6 py-4 flex-1 text-sm outline-none focus:border-orange-500 transition-colors"
                        />
                        <button className="bg-orange-500 px-8 py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-orange-600 transition-all">
                            Join Waitlist
                        </button>
                    </div>
                </div>
            </div>
        </section>

      </div>
    </div>
  );
};

export default Resources;
