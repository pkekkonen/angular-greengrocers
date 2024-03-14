import { Component } from '@angular/core';
import { CartService } from './cart/services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private readonly cartService: CartService) {}

  getTotal() {
    return this.cartService.totalCost;
  }

}
