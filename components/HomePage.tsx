import React, { useRef } from 'react';
import { ViewState, Product, Testimonial } from '../types';
import { HERO_VIDEO_URL, COLLECTION_PRODUCTS } from '../constants';
import { ArrowDown, Gem, ShieldCheck, Ruler, Star, Instagram, ArrowRight, Play } from 'lucide-react';
import Reveal from './Reveal';

interface HomePageProps {
  onNavigate: (view: ViewState) => void;
  featuredProduct: Product;
  testimonials: Testimonial[];
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate, featuredProduct, testimonials }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToContent = () => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full overflow-hidden">
      {/* SECTION 1: HERO */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Video with Ken Burns effect */}
        <div className="absolute inset-0 w-full h-full scale-110 animate-[spin-slow_60s_linear_infinite_reverse] origin-center"> {/* Simulated slight movement */}
          <div className="absolute inset-0 bg-[#0A0A0A] z-0"></div>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60"
          >
            <source src={HERO_VIDEO_URL} type="video/mp4" />
          </video>
        </div>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <Reveal delay={0.2}>
            <span className="font-script text-3xl md:text-5xl mb-4 block drop-shadow-lg text-glow" style={{
              background: 'linear-gradient(135deg, #E5D4A6 0%, #C9A962 50%, #B76E79 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              L'Art de Sublimer Vos Courbes
            </span>
          </Reveal>

          <Reveal delay={0.4}>
            <h2 className="font-serif text-5xl md:text-8xl text-white mb-6 tracking-wide leading-tight text-glow-strong">
              ÉLÉGANCE <br /> <span className="italic text-gold animate-glow">INTEMPORELLE</span>
            </h2>
          </Reveal>

          <Reveal delay={0.6}>
            <p className="text-white/80 font-light max-w-lg mb-10 text-lg leading-relaxed mix-blend-screen">
              Chaînes de hanches artisanales conçues pour célébrer chaque mouvement de votre corps avec grâce et sensualité.
            </p>
          </Reveal>

          <Reveal delay={0.8}>
            <div className="flex gap-4">
              <button
                onClick={() => onNavigate('PRODUCT')}
                className="group relative px-8 py-4 bg-transparent text-gold border-2 border-gold hover:text-black overflow-hidden transition-all duration-500 btn-shimmer shadow-gold hover:shadow-gold-lg active:scale-98"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-gold -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                <span className="relative z-10 uppercase tracking-[0.2em] text-sm font-medium flex items-center gap-2">
                  Découvrir la Collection
                </span>
              </button>
            </div>
          </Reveal>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-110"
          onClick={scrollToContent}
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-gold-rose to-transparent animate-pulse"></div>
          <span className="text-[10px] uppercase tracking-widest text-gold-champagne">Explorer</span>
        </div>
      </section>

      {/* SECTION 2: VALUE PROPS */}
      <section ref={scrollRef} className="py-24 bg-background relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[
            { icon: Gem, title: "Fait Main", text: "Chaque pièce est assemblée avec passion dans nos ateliers parisiens." },
            { icon: Ruler, title: "Ajustable", text: "Des chaînes conçues pour s'adapter parfaitement à toutes les silhouettes." },
            { icon: ShieldCheck, title: "Hypoallergénique", text: "Or 18k et matériaux nobles respectueux de votre peau." }
          ].map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.2}>
              <div className="group p-8 hover:bg-white/5 border border-transparent hover:border-white/5 transition-all duration-500 rounded-sm">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-surface border border-gold/30 flex items-center justify-center text-gold group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(201,169,98,0.1)]">
                  <item.icon strokeWidth={1} size={32} />
                </div>
                <h3 className="font-serif text-2xl text-white mb-3 group-hover:text-gold transition-colors">{item.title}</h3>
                <p className="font-sans text-sm text-gray-400 font-light leading-relaxed">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full max-w-xs mx-auto h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent mt-24"></div>
      </section>

      {/* SECTION 4: COLLECTION GRID (Moved up as requested) */}
      <section className="py-24 bg-surface relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <Reveal>
              <div>
                <h2 className="font-serif text-4xl md:text-5xl text-white mb-2">Notre Collection</h2>
                <p className="text-gray-400 font-light">Des créations uniques pour chaque occasion.</p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex gap-4 mt-6 md:mt-0 overflow-x-auto pb-2 md:pb-0">
                {['Tout', 'Or', 'Argent', 'Perles', 'Cristaux'].map((filter, i) => (
                  <button
                    key={filter}
                    className={`px-4 py-2 text-xs uppercase tracking-wider border rounded-full transition-all whitespace-nowrap ${i === 0 ? 'border-gold text-gold bg-gold/10' : 'border-white/10 text-white/60 hover:text-white hover:border-white/30'}`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COLLECTION_PRODUCTS.map((prod, idx) => (
              <Reveal key={prod.id} delay={idx * 0.1}>
                <div className="group relative product-card cursor-pointer transition-all duration-500 hover:-translate-y-2" onClick={() => onNavigate('PRODUCT')}>
                  <div className="relative aspect-[4/5] overflow-hidden bg-gray-900 shadow-lg group-hover:shadow-gold-lg transition-all duration-500">
                    <img
                      src={prod.images?.[0] || '/image.png'}
                      alt={prod.name}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent group-hover:from-black/20 transition-all duration-500" />
                    {prod.isNew && (
                      <span className="absolute top-4 left-4 bg-gradient-gold text-black text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 shadow-gold">
                        Nouveau
                      </span>
                    )}

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gold-rose/30 via-gold-champagne/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[1px]">
                      <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center text-white scale-50 group-hover:scale-100 transition-transform duration-300 delay-75">
                        <span className="uppercase text-xs tracking-widest">Voir</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 text-center group-hover:-translate-y-2 transition-all duration-300">
                    <h3 className="font-serif text-2xl text-white mb-1 group-hover:text-gold-champagne transition-colors">{prod.name}</h3>
                    <p className="text-xs text-gold uppercase tracking-widest mb-2">{prod.category}</p>
                    <span className="text-white/60 font-light group-hover:text-white transition-colors">{prod.price} €</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="text-white border-b border-gold pb-1 uppercase tracking-[0.2em] text-xs hover:text-gold transition-colors">
              Voir toute la collection
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 3: FEATURED PRODUCT SHOWCASE */}
      <section className="py-32 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 relative group">
            <Reveal>
              <div className="overflow-hidden relative shadow-2xl shadow-gold/5">
                <img
                  src={featuredProduct.images?.[0] || '/image.png'}
                  alt="Featured"
                  className="w-full h-[700px] object-cover"
                />

                {/* Hotspots */}
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 group/spot">
                  <div className="w-4 h-4 bg-gold rounded-full animate-ping absolute"></div>
                  <div className="w-4 h-4 bg-gold rounded-full relative border-2 border-black cursor-pointer shadow-[0_0_15px_#C9A962]"></div>
                  <div className="absolute left-8 top-0 w-56 bg-surface/90 backdrop-blur border border-gold/20 text-xs p-4 text-white opacity-0 group-hover/spot:opacity-100 transition-all duration-500 translate-y-2 group-hover/spot:translate-y-0 pointer-events-none">
                    <h4 className="font-serif text-lg text-gold mb-1">Perles d'eau douce</h4>
                    <p className="text-gray-400 font-light">Sélectionnées à la main pour leur éclat naturel.</p>
                  </div>
                </div>

                <div className="absolute bottom-1/4 right-1/3 group/spot">
                  <div className="w-4 h-4 bg-gold rounded-full animate-ping absolute animation-delay-500"></div>
                  <div className="w-4 h-4 bg-gold rounded-full relative border-2 border-black cursor-pointer shadow-[0_0_15px_#C9A962]"></div>
                  <div className="absolute right-8 top-0 w-56 bg-surface/90 backdrop-blur border border-gold/20 text-xs p-4 text-white opacity-0 group-hover/spot:opacity-100 transition-all duration-500 translate-y-2 group-hover/spot:translate-y-0 pointer-events-none text-right">
                    <h4 className="font-serif text-lg text-gold mb-1">Plaqué Or 18k</h4>
                    <p className="text-gray-400 font-light">Résistant à l'eau et hypoallergénique.</p>
                  </div>
                </div>
              </div>
            </Reveal>
            {/* Parallax Element Decor */}
            <div className="absolute -bottom-10 -left-10 w-2/3 h-2/3 border border-gold/10 -z-10 hidden md:block" />
          </div>

          <div className="w-full md:w-1/2 space-y-8 pl-0 md:pl-10">
            <Reveal>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-[1px] w-12 bg-gold"></div>
                <span className="uppercase tracking-[0.3em] text-xs text-gold">Best Seller</span>
              </div>
              <h2 className="font-serif text-5xl md:text-6xl text-white mb-6 leading-none">{featuredProduct.name}</h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-gray-300 font-light leading-relaxed text-lg mb-8">
                {featuredProduct.longDescription}
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-surface border border-white/10 text-gold"><Gem size={16} /></div>
                  <span className="text-sm text-white/80">Perles Naturelles</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-surface border border-white/10 text-gold"><ShieldCheck size={16} /></div>
                  <span className="text-sm text-white/80">Garantie 2 ans</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.6}>
              <div className="flex flex-col md:flex-row items-center gap-8 pt-4 border-t border-white/10">
                <div className="text-center md:text-left">
                  <p className="text-xs text-gray-500 mb-1">À partir de</p>
                  <span className="font-serif text-4xl text-gold">{featuredProduct.price} €</span>
                </div>
                <button
                  onClick={() => onNavigate('PRODUCT')}
                  className="w-full md:w-auto bg-white text-black px-10 py-4 uppercase tracking-widest text-xs hover:bg-gold transition-colors duration-300 font-bold flex items-center justify-center gap-2 group"
                >
                  Ajouter au panier
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="mt-6 flex items-center gap-2 text-xs text-white/40">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => <div key={i} className="w-6 h-6 rounded-full bg-gray-700 border border-black"></div>)}
                </div>
                <span>2,847 femmes portent cette chaîne</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 5: LIFESTYLE GALLERY */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
          <Reveal>
            <h2 className="font-serif text-4xl text-white">Moments Précieux</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-script text-2xl text-gold hidden md:block">#LumiereDeCorps</p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 h-[800px] w-full gap-4 px-4">
          {/* Bento Grid Layout */}
          <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-sm">
            <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Lifestyle" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
              <span className="text-gold font-serif italic text-2xl mb-2">Soirée d'été</span>
              <span className="text-white text-xs uppercase tracking-widest underline decoration-gold underline-offset-4">Shop the look</span>
            </div>
          </div>

          <div className="col-span-1 row-span-1 relative group overflow-hidden rounded-sm">
            <img src="https://images.unsplash.com/photo-1534030347209-7147fd2e7a3a?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Lifestyle" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white border border-white px-4 py-2 uppercase text-xs tracking-widest">Voir</span>
            </div>
          </div>

          <div className="col-span-1 row-span-2 relative group overflow-hidden rounded-sm">
            <img src="https://images.unsplash.com/photo-1550614000-4b9519e02a48?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Lifestyle" />
            <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-serif text-xl">Intimité</span>
            </div>
          </div>

          <div className="col-span-1 row-span-1 relative group overflow-hidden rounded-sm">
            <img src="https://images.unsplash.com/photo-1605763240004-7e93b172d754?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Lifestyle" />
          </div>
        </div>
      </section>

      {/* SECTION 6: TESTIMONIALS CAROUSEL */}
      <section className="py-24 bg-background relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-5xl text-gold mb-4">Ce qu'elles en disent</h2>
              <div className="flex justify-center gap-1">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="#C9A962" className="text-gold" />)}
              </div>
              <p className="mt-4 text-white/50 text-sm tracking-widest uppercase">2000+ Avis Vérifiés</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 overflow-hidden">
            {testimonials.slice(0, 3).map((t, i) => (
              <Reveal key={t.id} delay={i * 0.2}>
                <div className="bg-surface p-10 relative group hover:-translate-y-2 transition-transform duration-500 border border-white/5 hover:border-gold/30">
                  <div className="absolute top-6 right-8 text-gold font-serif text-8xl opacity-10">"</div>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-gold/50">
                      <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <span className="font-serif text-white text-lg block">{t.name}</span>
                      <span className="text-xs text-gold uppercase tracking-wider">{t.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 font-light italic leading-relaxed relative z-10">"{t.text}"</p>

                  <div className="mt-6 flex items-center gap-2 opacity-50 text-xs text-green-400">
                    <ShieldCheck size={12} />
                    <span>Achat vérifié</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: INSTAGRAM FEED */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
            <div className="flex items-center gap-2 text-white">
              <Instagram size={20} />
              <span className="font-serif text-xl">@ChainesDeHanches</span>
            </div>
            <button className="text-xs text-gold uppercase tracking-widest hover:text-white transition-colors">Suivre</button>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="aspect-square bg-surface relative group overflow-hidden cursor-pointer">
                <img
                  src={`https://source.unsplash.com/random/400x400?jewelry&sig=${item}`}
                  alt="Insta"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Instagram className="text-white drop-shadow-lg" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: NEWSLETTER */}
      <section className="py-32 bg-[#0F0F0F] relative overflow-hidden">
        {/* Subtle geometric pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #C9A962 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background to-transparent pointer-events-none"></div>

        <div className="max-w-xl mx-auto px-6 relative z-10 text-center">
          <Reveal>
            <h2 className="font-serif text-4xl text-white mb-4">L'Excellence Privilège</h2>
            <p className="text-gray-400 font-light mb-10 text-lg">Inscrivez-vous à notre lettre confidentielle et recevez <span className="text-gold">-15% sur votre première commande</span>.</p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="relative group">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-white/30 focus:outline-none focus:border-gold transition-colors text-center font-serif text-xl"
              />
              <button className="mt-8 px-10 py-3 bg-white text-black font-medium text-xs uppercase tracking-[0.2em] hover:bg-gold transition-colors hover:scale-105 transform duration-300">
                S'inscrire
              </button>
            </div>
            <p className="mt-6 text-[10px] text-gray-600 flex items-center justify-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-900"></span>
              Vos données sont protégées. Désabonnement à tout moment.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
