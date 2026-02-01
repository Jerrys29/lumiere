import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ProductPage from './components/ProductPage';
import Cart from './components/Cart';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import { ViewState, CartItem, Product } from './types';
import { FEATURED_PRODUCT, TESTIMONIALS } from './constants';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('HOME');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Cinematic Loader Effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  // Cart Logic
  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(1, item.quantity + delta) };
      }
      return item;
    }));
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // View Navigation with Scroll Reset
  const navigateTo = (view: ViewState) => {
    // Add simple transition logic here if needed
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentView(view);
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[100] cursor-none">
        <div className="relative">
           <h1 className="font-serif text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-gold-dark via-gold to-gold-dark animate-shimmer tracking-widest opacity-0 animate-fade-in">
             LUMIÈRE
           </h1>
           <div className="h-[1px] w-0 bg-gold absolute bottom-0 left-0 animate-[shimmer_2s_ease-out_forwards] w-full mt-4"></div>
        </div>
        <p className="mt-6 text-xs uppercase tracking-[0.5em] text-white/40 animate-pulse">Chargement de l'élégance</p>
      </div>
    );
  }

  return (
    <div className="bg-background text-text-main font-sans min-h-screen selection:bg-gold selection:text-black overflow-x-hidden">
      <CustomCursor />
      
      {/* Background Particles/Noise could go here */}
      
      <Navbar 
        cartCount={cartCount} 
        onCartClick={() => setIsCartOpen(true)}
        currentView={currentView}
        onNavigate={navigateTo}
      />

      <Cart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemove={removeFromCart}
        onUpdateQuantity={updateQuantity}
      />

      <main className="animate-fade-in">
        {currentView === 'HOME' ? (
          <HomePage 
            onNavigate={navigateTo} 
            featuredProduct={FEATURED_PRODUCT}
            testimonials={TESTIMONIALS}
          />
        ) : (
          <ProductPage 
            product={FEATURED_PRODUCT} 
            onAddToCart={addToCart} 
          />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
