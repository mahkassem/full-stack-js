import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  items: any = [];
  constructor(private cartService: CartService) {
    this.items = this.cartService.items;
  }

  removeFromCart(product: any) {
    this.cartService.removeFromCart(product);
    this.items = this.cartService.items;
  }

  get total() {
    let total = 0;
    this.items.forEach((item: any) => {
      total += item.qty * item.price;
    });
    return total;
  }
}
