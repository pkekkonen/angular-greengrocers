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

  getItems(): Item[] {
    let res = this.items;
    if(this.storeService.filter !== "none")
      res = res.filter((i) => i.type === this.storeService.filter)
    if(this.storeService.sort === "alphabetically") {
      res = res.sort((a, b) => (a.name < b.name ? -1 : 1));
    } else if(this.storeService.sort === "pricing") {
      res = res.sort((a, b) => (a.price < b.price ? -1 : 1));
    } else {
      res = res.sort((a, b) => (a.id < b.id ? -1 : 1));
    }
    return res;
  }
}
