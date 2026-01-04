
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Product } from '../types';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onInquire: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack, onInquire }) => {
  return (
    <div className="pt-32 min-h-screen bg-gray-50 animate-fade-in-up">
      <div className="max-w-[1600px] mx-auto px-8 md:px-16 pb-32">
        
        <button 
          onClick={onBack}
          className="group flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 hover:text-orange-600 transition-all mb-16"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:-translate-x-2 transition-transform">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Solutions
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative group">
            <div className="relative w-full aspect-[4/5] bg-gray-200 overflow-hidden shadow-2xl">
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
              />
            </div>
          </div>

          <div className="flex flex-col">
             <span className="text-[11px] font-bold text-orange-600 uppercase tracking-[0.4em] mb-6">{product.category} Strategy</span>
             <h1 className="text-5xl md:text-7xl font-serif text-gray-900 mb-8 leading-tight">{product.name}</h1>
             <div className="h-[1px] w-24 bg-orange-500 mb-10"></div>
             <p className="text-xl text-gray-600 font-light leading-relaxed mb-12">
               {product.longDescription || product.description}
             </p>

             <div className="space-y-12">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {product.features.map((feature, idx) => (
                   <div key={idx} className="flex items-start gap-4">
                     <div className="mt-1.5 w-2 h-2 bg-orange-500"></div>
                     <span className="text-sm font-medium text-gray-700">{feature}</span>
                   </div>
                 ))}
               </div>

               <button 
                 onClick={onInquire}
                 className="group flex items-center gap-6 px-12 py-6 bg-gray-900 text-white rounded-none text-xs font-bold uppercase tracking-[0.3em] hover:bg-orange-500 transition-all duration-500 shadow-xl"
               >
                 Initiate Strategic Inquiry
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-2 transition-transform">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                 </svg>
               </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
