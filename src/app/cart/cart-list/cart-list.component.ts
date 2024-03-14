import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CartItem } from 'src/app/models/cart-item';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent {
  constructor(private readonly cartService: CartService) {}

  getCartItems(): CartItem[] {
    return this.cartService.getItems();
  }
  
}
