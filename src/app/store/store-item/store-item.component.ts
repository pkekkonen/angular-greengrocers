import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.css']
})
export class StoreItemComponent {
  @Input('item') item: Item | null = null;

  constructor(private readonly cartService: CartService) {}

  addToCart(item: Item) {
    this.cartService.addItem(item);
  }

}