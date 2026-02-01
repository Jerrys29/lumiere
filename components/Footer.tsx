import React from 'react';
import { Facebook, Twitter, Instagram, CreditCard } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="font-serif text-2xl text-gold">LUMIÈRE <span className="text-white text-xs block mt-1 tracking-[0.3em] font-sans">DE CORPS</span></h3>
            <p className="text-gray-500 font-light text-sm leading-relaxed">
              La destination ultime pour les bijoux de corps haute couture. Célébrez votre féminité avec élégance et audace.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif text-lg mb-6">Service Client</h4>
            <ul className="space-y-3 text-sm text-gray-400 font-light">
              <li><a href="#" className="hover:text-gold transition-colors">Contactez-nous</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Livraison & Retours</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Suivre ma commande</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Légal</h4>
            <ul className="space-y-3 text-sm text-gray-400 font-light">
              <li><a href="#" className="hover:text-gold transition-colors">Conditions Générales</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Politique de Confidentialité</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Mentions Légales</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Cookies</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-serif text-lg mb-6">Suivez-nous</h4>
            <div className="flex gap-4 text-gray-400 mb-6">
              <a href="#" className="hover:text-gold transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-gold transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-gold transition-colors"><Twitter size={20} /></a>
            </div>
            <p className="text-xs text-gray-500 uppercase tracking-wider">Paiement sécurisé</p>
            <div className="flex gap-2 mt-2 text-white/30">
               {/* Mock Payment Icons */}
               <div className="w-8 h-5 bg-white/10 rounded"></div>
               <div className="w-8 h-5 bg-white/10 rounded"></div>
               <div className="w-8 h-5 bg-white/10 rounded"></div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} Lumière de Corps. Tous droits réservés.</p>
          <p className="mt-2 md:mt-0 font-script text-lg text-gold/40">Conçu avec amour à Paris</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
