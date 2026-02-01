import { Product, Testimonial } from './types';

export const HERO_VIDEO_URL = "https://player.vimeo.com/external/371842098.sd.mp4?s=d0107248880496173dc765e94b462998f4f9f783&profile_id=164&oauth2_token_id=57447761"; 

export const FEATURED_PRODUCT: Product = {
  id: 'chain-001',
  name: "L'Éclat Solaire",
  category: "Or",
  price: 149,
  description: "Chaîne de hanche plaquée or 18k avec perles d'eau douce.",
  longDescription: "Une pièce maîtresse qui célèbre la lumière. Cette chaîne de hanche artisanale épouse vos courbes avec une délicatesse infinie. Chaque perle est sélectionnée à la main pour son lustre unique, créant un bijou qui est autant une œuvre d'art qu'un accessoire. Portez-la pour une occasion spéciale ou pour sublimer votre quotidien.",
  images: [
    "https://images.unsplash.com/photo-1543233604-3b83648eb8a6?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1616428796856-425b8214f44c?q=80&w=1000&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1629224316810-9d8805b95076?q=80&w=1000&auto=format&fit=crop"
  ],
  reviews: 327,
  rating: 4.9,
  features: [
    "Plaqué or 18 carats",
    "Perles d'eau douce naturelles",
    "Résistant à l'eau",
    "Hypoallergénique"
  ]
};

export const COLLECTION_PRODUCTS: Product[] = [
  {
    id: 'chain-002',
    name: "Rivière de Lune",
    category: "Argent",
    price: 89,
    description: "Argent sterling 925 et cristaux.",
    longDescription: "",
    images: ["https://images.unsplash.com/photo-1651160601368-634291dd4d4c?q=80&w=800&auto=format&fit=crop"],
    reviews: 120,
    rating: 4.8,
    features: []
  },
  {
    id: 'chain-003',
    name: "Perle d'Orient",
    category: "Perles",
    price: 129,
    description: "Perles baroques et fil d'or.",
    longDescription: "",
    images: ["https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=800&auto=format&fit=crop"],
    reviews: 85,
    rating: 5.0,
    features: [],
    isNew: true
  },
  {
    id: 'chain-004',
    name: "Désir Nocturne",
    category: "Or",
    price: 199,
    description: "Double chaîne or avec onyx.",
    longDescription: "",
    images: ["https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop"],
    reviews: 45,
    rating: 4.9,
    features: []
  },
  {
    id: 'chain-005',
    name: "Larme de Vénus",
    category: "Cristaux",
    price: 75,
    description: "Zircons cubiques scintillants.",
    longDescription: "",
    images: ["https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=800&auto=format&fit=crop"],
    reviews: 210,
    rating: 4.7,
    features: []
  },
  {
    id: 'chain-006',
    name: "Baiser Rose",
    category: "Or Rose",
    price: 115,
    description: "Or rose 14k délicat.",
    longDescription: "",
    images: ["https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop"],
    reviews: 67,
    rating: 4.9,
    features: [],
    isNew: true
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sophie M.",
    location: "Paris",
    text: "Je ne me suis jamais sentie aussi féminine. C'est plus qu'un bijou, c'est une sensation de puissance immédiate.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Clara D.",
    location: "Nice",
    text: "La qualité est incroyable. Je la porte à la plage comme en soirée, elle ne bouge pas. Un véritable coup de cœur.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Amandine L.",
    location: "Bordeaux",
    text: "Un packaging sublime, une livraison rapide. L'expérience luxe est bien là du début à la fin.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Elodie P.",
    location: "Lyon",
    text: "C'est devenu mon accessoire signature. Discret sous les vêtements, sublime quand il se dévoile.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=150&auto=format&fit=crop"
  }
];
