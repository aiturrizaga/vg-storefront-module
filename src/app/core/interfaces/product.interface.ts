export interface Product {
  id: number;
  brand: string;
  name: string;
  slug: string;
  presentation: string;
  thumbnail: string;
  rating: number;
  image: ProductImage
  prices: ProductPrice[];
}

export interface ProductPrice {
  currency: string;
  price: number;
  description: string;
  fromUnit: number;
  salient: boolean;
  visible: boolean;
  default: boolean;
}

export interface ProductImage {
  large?: string;
  medium?: string;
  small?: string;
}
