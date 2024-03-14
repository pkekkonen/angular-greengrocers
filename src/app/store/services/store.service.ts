import { Injectable, inject } from '@angular/core';
import { Item } from 'src/app/models/item';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class StoreService {
  filter: string = "none";
  sort: string = "none";

  http = inject(HttpClient);

  get items(): Promise<Item[]> {
    // @ts-ignore
    return firstValueFrom(this.http.get<Item[]>(`${environment.apiUrl}`,  {headers: {'Content-Type': 'application/json' }}));
  }

  updateFilter(newFilter: string) {
    this.filter = newFilter;
  }

  updateSort(newSort: string) {
    this.sort = newSort;
  }
}
