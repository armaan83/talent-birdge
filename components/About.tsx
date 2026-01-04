
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-white">
      
      {/* Core Mission */}
      <div className="py-32 px-6 md:px-24 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div>
           <span className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-6 block">Our Legacy</span>
           <h2 className="text-4xl md:text-6xl font-serif text-gray-900 leading-tight mb-12">
            A decade and a half <br/> of scaling global vision.
           </h2>
           <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
            Founded in 2011, Talent Bridge was established with a singular focus: to solve the complexities of international growth for multinational organizations. 
           </p>
           <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
            We operate at the intersection of human talent and digital infrastructure.
           </p>
        </div>
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200" 
            alt="Business consultation" 
            className="w-full h-[600px] object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute -bottom-8 -left-8 bg-orange-500 p-12 text-white hidden md:block shadow-xl">
            <p className="text-4xl font-serif">14</p>
            <p className="text-xs uppercase tracking-widest font-semibold mt-1">Years of Trust</p>
          </div>
        </div>
      </div>

      {/* Strategic Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-gray-900 p-12 lg:p-24 flex flex-col justify-center text-white">
           <h3 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">
             From Sourcing <br/> to Marketing.
           </h3>
           <p className="text-lg text-gray-400 font-light leading-relaxed mb-12">
             We provide end-to-end support for companies entering or expanding in new territories.
           </p>
           <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-orange-500 mb-2">Lead Gen</h4>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest">Qualified prospects only</p>
              </div>
              <div>
                <h4 className="font-bold text-orange-500 mb-2">eCommerce</h4>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest">Global scale ready</p>
              </div>
           </div>
        </div>
        <div className="bg-gray-50 p-12 lg:p-24 flex flex-col justify-center border-l border-gray-100">
           <h3 className="text-3xl md:text-5xl font-serif mb-8 leading-tight text-gray-900">
             Multinational <br/> Expertise.
           </h3>
           <p className="text-lg text-gray-600 font-light leading-relaxed">
             Navigating labor laws, digital regulations, and cultural marketing nuances requires more than just tools—it requires a partner who has been there.
           </p>
        </div>
      </div>
    </section>
  );
};

export default About;
