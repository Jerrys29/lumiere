import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, Search, X, Heart } from 'lucide-react';
import { ViewState } from '../types';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, onCartClick, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-40 transition-all duration-700 border-b ${
          scrolled
            ? 'bg-background/80 backdrop-blur-md border-white/5 py-4'
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Left: Menu & Search */}
          <div className="flex items-center space-x-6">
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="text-white hover:text-gold transition-colors relative group"
            >
              <Menu size={24} strokeWidth={1} />
            </button>
            <button className="text-white hover:text-gold transition-colors hidden md:block">
               <Search size={20} strokeWidth={1} />
            </button>
          </div>

          {/* Center: Logo */}
          <div 
            className="absolute left-1/2 transform -translate-x-1/2 cursor-pointer group text-center"
            onClick={() => onNavigate('HOME')}
          >
            <h1 className="font-serif text-2xl md:text-3xl tracking-widest text-gold-light group-hover:text-gold transition-colors duration-500">
              LUMIÈRE
            </h1>
            <span className="text-[10px] tracking-[0.4em] text-white/60 uppercase hidden md:block group-hover:tracking-[0.6em] transition-all duration-700">
              De Corps
            </span>
          </div>

          {/* Right: Cart & Heart */}
          <div className="flex items-center space-x-6">
             <button className="text-white hover:text-gold transition-colors hidden md:block">
               <Heart size={20} strokeWidth={1} />
             </button>
            <button 
              onClick={onCartClick}
              className="relative text-white hover:text-gold transition-colors group"
            >
              <ShoppingBag size={24} strokeWidth={1} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold-rose text-white text-[10px] flex items-center justify-center rounded-full animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Full Screen Menu Overlay */}
      <div className={`fixed inset-0 z-50 bg-background transition-all duration-700 ease-in-out ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
         {/* Decorative particles for menu */}
         <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold/5 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-rose/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
         </div>

        <div className="p-8 flex flex-col h-full relative z-10">
          <div className="flex justify-between items-center mb-12">
            <span className="font-serif text-xl text-gold">Menu</span>
            <button onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-gold transition-colors">
              <X size={32} strokeWidth={1} />
            </button>
          </div>
          
          <div className="flex flex-col space-y-8 text-center justify-center flex-1">
             {['Collection', 'Nos Ateliers', 'Le Journal', 'À Propos'].map((item, idx) => (
               <a 
                 key={item} 
                 href="#" 
                 className={`font-serif text-4xl text-white hover:text-gold transition-colors transform ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                 style={{ transitionDelay: `${idx * 100}ms` }}
                 onClick={() => setMobileMenuOpen(false)}
               >
                 {item}
               </a>
             ))}
          </div>

          <div className="mt-auto text-center space-y-6">
             <p className="text-gold font-script text-3xl">Suivez-nous</p>
             <div className="flex justify-center space-x-8 text-sm text-gray-400 uppercase tracking-widest">
                <span className="hover:text-white cursor-pointer transition-colors">Instagram</span>
                <span className="hover:text-white cursor-pointer transition-colors">Pinterest</span>
                <span className="hover:text-white cursor-pointer transition-colors">TikTok</span>
             </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
