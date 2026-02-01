import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { Star, Heart, Truck, RefreshCw, Shield, ChevronDown, Check, Ruler, Info, ShieldCheck } from 'lucide-react';
import Reveal from './Reveal';

interface ProductPageProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductPage: React.FC<ProductPageProps> = ({ product, onAddToCart }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isAdding, setIsAdding] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>('desc');
  const [selectedSize, setSelectedSize] = useState('Universelle');

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddToCart = () => {
    setIsAdding(true);
    onAddToCart({ ...product, price: product.price }); // Pass props
    // Simulate "Adding" state
    setTimeout(() => setIsAdding(false), 2000);
  };

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="pt-32 pb-12 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Breadcrumb */}
        <div className="text-white/40 text-[10px] uppercase tracking-[0.2em] mb-8">
          Accueil / Collection / <span className="text-gold">{product.name}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 relative">
          
          {/* LEFT: GALLERY (Sticky on Desktop) */}
          <div className="w-full lg:w-[55%] h-fit">
            <div className="flex flex-col-reverse md:flex-row gap-4">
               {/* Thumbnails */}
               <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
                  {product.images.map((img, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => setSelectedImage(idx)}
                      className={`min-w-[80px] w-20 h-24 cursor-pointer overflow-hidden border transition-all duration-300 ${selectedImage === idx ? 'border-gold opacity-100' : 'border-transparent opacity-50 hover:opacity-80'}`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </div>
                  ))}
               </div>
               
               {/* Main Image with Zoom Effect */}
               <div className="flex-1 relative group overflow-hidden bg-surface aspect-[4/5] cursor-none">
                 <img 
                   src={product.images[selectedImage]} 
                   alt={product.name} 
                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-125 origin-center" 
                   style={{ transformOrigin: 'var(--zoom-origin, center)' }}
                   onMouseMove={(e) => {
                     const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
                     const x = (e.clientX - left) / width * 100;
                     const y = (e.clientY - top) / height * 100;
                     e.currentTarget.style.setProperty('--zoom-origin', `${x}% ${y}%`);
                   }}
                 />
                 <div className="absolute top-4 right-4 bg-black/40 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-widest text-white rounded-full border border-white/10">
                   Zoom
                 </div>
               </div>
            </div>
          </div>

          {/* RIGHT: INFO (Sticky) */}
          <div className="w-full lg:w-[45%] flex flex-col lg:sticky lg:top-32 h-fit">
            
            <Reveal>
              <div className="flex justify-between items-start mb-2">
                 <h1 className="font-serif text-5xl text-white leading-tight">{product.name}</h1>
                 <button className="text-gold hover:scale-110 transition-transform">
                    <Heart size={24} strokeWidth={1} />
                 </button>
              </div>
              
              <div className="flex items-center gap-4 mb-8">
                <span className="font-serif text-3xl text-gold">{product.price} €</span>
                <div className="h-4 w-[1px] bg-white/20"></div>
                <div className="flex items-center gap-2 text-white/60 text-sm group cursor-pointer">
                  <div className="flex text-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} strokeWidth={1} />
                    ))}
                  </div>
                  <span className="underline decoration-transparent group-hover:decoration-gold transition-all underline-offset-4">
                    {product.reviews} avis
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-gray-300 font-light leading-relaxed mb-10 text-lg border-l-2 border-gold/30 pl-4 italic">
                "{product.longDescription}"
              </p>
            </Reveal>

            {/* Selectors */}
            <Reveal delay={0.2}>
              <div className="mb-8 p-6 bg-surface border border-white/5 rounded-sm">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs text-white uppercase tracking-widest flex items-center gap-2">
                     <Ruler size={14} className="text-gold"/> Taille
                  </span>
                  <button className="text-[10px] text-gold underline underline-offset-4 uppercase tracking-wider hover:text-white transition-colors">Guide des tailles</button>
                </div>
                <div className="flex flex-wrap gap-3">
                  {['XS', 'S', 'M', 'L', 'Universelle'].map(size => (
                    <button 
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`h-10 px-6 border text-xs uppercase tracking-wider transition-all duration-300 ${selectedSize === size ? 'border-gold text-black bg-gold font-medium' : 'border-white/20 text-white hover:border-white'}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                <p className="mt-4 text-[10px] text-gray-500 flex items-center gap-2">
                   <Info size={12}/> Modèle ajustable grâce à sa chaînette d'extension de 10cm.
                </p>
              </div>
            </Reveal>

            {/* CTA */}
            <Reveal delay={0.3}>
              <button 
                onClick={handleAddToCart}
                disabled={isAdding}
                className={`w-full py-5 text-sm font-bold uppercase tracking-[0.2em] transition-all duration-500 relative overflow-hidden group mb-4 ${
                  isAdding ? 'bg-green-900 text-white' : 'bg-white text-black hover:bg-gold'
                }`}
              >
                <span className={`relative z-10 flex items-center justify-center gap-3 ${isAdding ? 'scale-110' : ''}`}>
                  {isAdding ? <><Check size={18} /> Ajouté au panier</> : `Ajouter au panier • ${product.price} €`}
                </span>
                {!isAdding && <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>}
              </button>
              
              <div className="flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest text-gold mb-10">
                 <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                 En stock - Expédié sous 24h
              </div>
            </Reveal>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 mb-10 border-y border-white/10 py-6">
              {[
                { icon: Shield, text: "Paiement Sécurisé" },
                { icon: Truck, text: "Livraison Offerte" },
                { icon: RefreshCw, text: "Retours 30j" }
              ].map((badge, idx) => (
                <div key={idx} className="text-center flex flex-col items-center gap-2 group">
                  <badge.icon size={20} className="text-gold group-hover:scale-110 transition-transform" strokeWidth={1} />
                  <span className="text-[10px] uppercase text-white/60 tracking-wider">{badge.text}</span>
                </div>
              ))}
            </div>

            {/* Accordions */}
            <div className="space-y-1">
              {[
                { id: 'desc', title: 'Description & Détails', content: "Confectionnée à la main dans notre atelier parisien, cette chaîne est résistante à l'eau, à la sueur et au parfum. La dorure 18 carats (3 microns) assure une brillance longue durée garantie 2 ans." },
                { id: 'mat', title: 'Matériaux Précieux', content: "Base laiton plaqué or 18k. Perles de culture d'eau douce grade AAA. Sans nickel ni plomb, parfait pour les peaux sensibles." },
                { id: 'liv', title: 'Livraison & Coffret', content: "Livré dans son écrin luxe 'Lumière de Corps' avec pochette de voyage en satin. Expédition Colissimo suivie offerte dès 100€ d'achat." }
              ].map((item) => (
                <div key={item.id} className="border-b border-white/10 last:border-0">
                  <button 
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full py-5 flex justify-between items-center text-left text-white hover:text-gold transition-colors group"
                  >
                    <span className="font-serif text-lg tracking-wide">{item.title}</span>
                    <ChevronDown size={16} className={`transition-transform duration-500 text-white/50 group-hover:text-gold ${openAccordion === item.id ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openAccordion === item.id ? 'max-h-60 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                    <p className="text-sm text-gray-400 font-light leading-relaxed pl-4 border-l border-white/10">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
            
             {/* Certificate Badge */}
            <div className="mt-8 p-4 bg-[#151515] border border-gold/10 flex items-center gap-4">
               <div className="p-2 border border-gold rounded-full">
                  <ShieldCheck size={20} className="text-gold" strokeWidth={1}/>
               </div>
               <div>
                  <h4 className="font-serif text-white text-sm">Certificat d'Authenticité Inclus</h4>
                  <p className="text-[10px] text-gray-500">Chaque pièce est numérotée et certifiée.</p>
               </div>
            </div>

          </div>
        </div>

        {/* BELOW FOLD SECTIONS */}
        <div className="mt-32">
           <h3 className="font-serif text-3xl text-white mb-10 text-center">Vous aimerez aussi</h3>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[1,2,3,4].map((i) => (
                 <div key={i} className="group cursor-pointer">
                    <div className="aspect-[3/4] bg-surface mb-4 overflow-hidden">
                       <img src={`https://source.unsplash.com/random/400x500?jewelry&sig=${i+10}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
                    </div>
                    <div className="text-center">
                       <h4 className="font-serif text-lg text-white group-hover:text-gold transition-colors">Chaîne Divine {i}</h4>
                       <p className="text-xs text-gray-500">89 €</p>
                    </div>
                 </div>
              ))}
           </div>
        </div>

      </div>

      {/* Sticky Mobile CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full bg-background/90 backdrop-blur-lg border-t border-white/10 p-4 z-30 flex gap-4 items-center animate-fade-in-up">
        <div className="flex flex-col">
           <span className="text-[10px] text-white/60 uppercase">Total</span>
           <span className="font-serif text-gold text-xl">{product.price} €</span>
        </div>
        <button 
          onClick={handleAddToCart}
          className="flex-1 bg-white text-black font-bold py-3 text-xs uppercase tracking-widest hover:bg-gold transition-colors"
        >
          {isAdding ? 'Ajouté !' : 'Ajouter au panier'}
        </button>
      </div>
    </div>
  );
};

export default ProductPage;