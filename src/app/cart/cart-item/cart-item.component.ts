import { Component, Input } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input('cartItem') cartItem: CartItem | null = null;

  
  constructor(private readonly cartService: CartService) {}

  increaseQuantity(item: CartItem) {
    this.cartService.increaseQuantity(item);
  }

  decreaseQuantity(item: CartItem) {
    this.cartService.decreaseQuantity(item);
  }
}
