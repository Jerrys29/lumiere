import React from 'react';
import { X, Minus, Plus, Trash2, Lock, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose, items, onUpdateQuantity, onRemove }) => {
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      {/* Backdrop with blur */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full md:w-[500px] bg-[#0F0F0F] z-[51] transform transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) shadow-[-10px_0_40px_rgba(0,0,0,0.8)] border-l flex flex-col ${isOpen ? 'translate-x-0 border-gold-rose/20' : 'translate-x-full border-white/5'
        }`}>

        {/* Header */}
        <div className="p-8 border-b border-white/5 flex justify-between items-center bg-[#0F0F0F]">
          <h2 className="font-serif text-3xl text-white">Votre Panier <span className="text-gold text-lg font-sans">({items.length})</span></h2>
          <button onClick={onClose} className="text-white/40 hover:text-white transition-colors hover:rotate-90 duration-300">
            <X size={24} strokeWidth={1} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
              <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center text-gold opacity-50">
                <Lock size={30} strokeWidth={1} />
              </div>
              <span className="font-serif text-2xl text-white/40">Votre panier est vide</span>
              <button onClick={onClose} className="text-gold underline underline-offset-4 hover:text-white transition-colors uppercase text-xs tracking-widest">
                Découvrir la collection
              </button>
            </div>
          ) : (
            items.map((item, idx) => (
              <div key={item.id} className="flex gap-6 animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="w-28 h-36 bg-surface overflow-hidden border border-white/5 relative group">
                  <img src={item.images?.[0] || '/image.png'} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-serif text-xl text-white">{item.name}</h3>
                      <button onClick={() => onRemove(item.id)} className="text-white/20 hover:text-red-400 transition-colors">
                        <Trash2 size={16} strokeWidth={1} />
                      </button>
                    </div>
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-2">{item.selectedSize || 'Taille Unique'}</p>
                    <p className="text-gold font-serif text-lg">{item.price} €</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-white/10 px-3 py-1 bg-white/5">
                      <button
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="p-1 hover:text-gold text-white/60 transition-colors"
                        disabled={item.quantity <= 1}
                      >
                        <Minus size={12} />
                      </button>
                      <span className="mx-4 text-sm font-medium w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="p-1 hover:text-gold text-white transition-colors"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-8 bg-surface border-t border-white/5 space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-white/60">
                <span>Sous-total</span>
                <span>{subtotal} €</span>
              </div>
              <div className="flex justify-between text-sm text-white/60">
                <span>Livraison</span>
                <span className="text-gold">Offerte</span>
              </div>
            </div>

            <div className="flex justify-between font-serif text-3xl text-white border-t border-white/10 pt-4">
              <span>Total</span>
              <span className="text-gold">{subtotal} €</span>
            </div>

            <button className="w-full bg-gradient-gold text-black font-bold py-5 uppercase tracking-[0.2em] text-xs transition-all duration-300 group flex items-center justify-center gap-3 btn-shimmer shadow-gold-lg hover:shadow-rose hover:scale-[1.02] active:scale-[0.98]">
              Commander
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="flex justify-center items-center gap-2 text-[10px] text-white/30 uppercase tracking-widest">
              <Lock size={10} />
              <span>Paiement sécurisé crypté SSL</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
