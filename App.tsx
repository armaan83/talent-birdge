
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import About from './components/About';
import Journal from './components/Journal';
import Assistant from './components/Assistant';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import JournalDetail from './components/JournalDetail';
import Resources from './components/Resources';
import Checkout from './components/Checkout';
import { Product, ViewState } from './types';

function App() {
  const [view, setView] = useState<ViewState>({ type: 'home' });

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    if (targetId === 'resources') {
      setView({ type: 'resources' });
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (targetId === 'contact') {
      setView({ type: 'checkout' });
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (view.type !== 'home') {
      setView({ type: 'home' });
      setTimeout(() => scrollToSection(targetId), 50);
    } else {
      scrollToSection(targetId);
    }
  };

  const scrollToSection = (targetId: string) => {
    if (!targetId) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }
    
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      try {
        window.history.pushState(null, '', `#${targetId}`);
      } catch (err) {}
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 selection:bg-orange-100 selection:text-orange-900 overflow-x-hidden">
      {view.type !== 'checkout' && (
        <Navbar 
            onNavClick={handleNavClick} 
            onOpenInquiry={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setView({ type: 'checkout' });
            }}
        />
      )}
      
      <main>
        {view.type === 'home' && (
          <div className="animate-in fade-in duration-1000">
            <Hero />
            <About />
            <ProductGrid onProductClick={(p) => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setView({ type: 'product', product: p });
            }} />
            <Journal onArticleClick={(a) => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setView({ type: 'journal', article: a });
            }} />
          </div>
        )}

        {view.type === 'product' && (
          <ProductDetail 
            product={view.product} 
            onBack={() => {
              setView({ type: 'home' });
              setTimeout(() => scrollToSection('products'), 50);
            }}
            onInquire={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setView({ type: 'checkout' });
            }}
          />
        )}

        {view.type === 'journal' && (
          <JournalDetail 
            article={view.article} 
            onBack={() => setView({ type: 'home' })}
          />
        )}

        {view.type === 'resources' && (
          <Resources onBack={() => setView({ type: 'home' })} />
        )}

        {view.type === 'checkout' && (
            <Checkout 
                onBack={() => setView({ type: 'home' })}
            />
        )}
      </main>

      {view.type !== 'checkout' && <Footer onLinkClick={handleNavClick} />}
      
      <Assistant />
    </div>
  );
}

export default App;
