import { Component, Input } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  @Input() product: any;
  qty: number = 1;

  constructor(private cartService: CartService) { }

  addToCart() {
    this.cartService.addToCart(this.product, this.qty);
    this.qty = 1;
    alert('Your product has been added to the cart!');
  }
}
