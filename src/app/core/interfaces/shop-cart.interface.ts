export interface CartItem {
  productId: number;
  productName: string;
  productImage: string;
  productPresentation: string;
  price: number;
  quantity: number;
  subtotal: number;
}

export interface ShoppingCart {
  items: CartItem[];
  totalAmount: number;
}
