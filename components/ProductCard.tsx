
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div className="group bg-white border border-gray-200 hover:border-orange-500 transition-all duration-500 cursor-pointer flex flex-col shadow-sm" onClick={() => onClick(product)}>
      <div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105 grayscale group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/10 transition-colors duration-500"></div>
      </div>
      
      <div className="p-10 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-orange-600 bg-orange-50 px-3 py-1">{product.category}</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-300 group-hover:text-orange-500 transition-colors">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
        </div>
        <h3 className="text-3xl font-serif text-gray-900 mb-4">{product.name}</h3>
        <p className="text-gray-500 font-light leading-relaxed mb-8 flex-1">{product.description}</p>
        <span className="text-sm font-bold uppercase tracking-widest text-gray-900 group-hover:text-orange-500 transition-colors">Explore Solution &rarr;</span>
      </div>
    </div>
  );
};

export default ProductCard;
