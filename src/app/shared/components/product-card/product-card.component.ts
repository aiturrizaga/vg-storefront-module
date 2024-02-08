import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem, Product } from '@vg/core/interfaces';
import { ProductHelper } from '@vg/shared/helpers';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styles: ``
})
export class ProductCardComponent {
  @Input({required: true}) product?: Product;
  @Output() increaseQuantity: EventEmitter<CartItem> = new EventEmitter<CartItem>();
  @Output() decreaseQuantity: EventEmitter<CartItem> = new EventEmitter<CartItem>();

  public quantity: number = 0;

  constructor(public productHelper: ProductHelper) {
  }

  increase(): void {
    this.quantity++;
    this.increaseQuantity.emit(this.getCartItem());
  }

  decrease(): void {
    this.quantity--;
    this.decreaseQuantity.emit(this.getCartItem());
  }

  getCartItem(): CartItem {
    if (!this.product) {
      throw 'Product not defined in card';
    }
    const price: number = this.productHelper.getDefaultPrice(this.product.prices);
    const cartItem: CartItem = {
      productId: this.product.id,
      productName: this.product.name,
      productImage: this.product.thumbnail,
      productPresentation: this.product.presentation,
      price: price,
      quantity: this.quantity,
      subtotal: price * this.quantity
    }
    return cartItem;
  }

}
