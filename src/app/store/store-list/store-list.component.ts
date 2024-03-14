import { Component } from '@angular/core';
import { Item } from 'src/app/models/item';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css']
})
export class StoreListComponent {
  constructor(private readonly storeService: StoreService) {}

  items: Item[] = [];

  async ngOnInit() {
    this.items = await this.storeService.items;
  }
  
}
