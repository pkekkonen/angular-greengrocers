import { Component } from '@angular/core';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-display-settings',
  templateUrl: './display-settings.component.html',
  styleUrls: ['./display-settings.component.css']
})
export class DisplaySettingsComponent {
  constructor(private readonly storeService: StoreService) {}

  onFilterChange(event: Event){
    const element = event.currentTarget as HTMLInputElement
    const value = element.value
    this.storeService.updateFilter(value)
  }

  onSortingChange(event: Event){
    const element = event.currentTarget as HTMLInputElement
    const value = element.value
    this.storeService.updateSort(value)
  }
}
