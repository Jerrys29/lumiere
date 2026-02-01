export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  longDescription: string;
  images: string[];
  reviews: number;
  rating: number;
  features: string[];
  isNew?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
  image: string;
}

export type ViewState = 'HOME' | 'PRODUCT';
