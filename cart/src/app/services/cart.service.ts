import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: any = [];

  constructor() { }

  addToCart(product: any, qty: number) {
    // Check if the product is already in the cart
    const index = this.items.findIndex((item: any) => item.id === product.id);
    if (index > -1) {
      this.items[index].qty += qty;
      return;
    }
    product.qty = qty;
    this.items.push(product);
  }

  removeFromCart(product: any) {
    this.items.splice(this.items.indexOf(product), 1);
  }
}
