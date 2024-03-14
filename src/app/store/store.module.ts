import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreListComponent } from './store-list/store-list.component';
import { StoreItemComponent } from './store-item/store-item.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CartModule } from '../cart/cart.module';
import { DisplaySettingsComponent } from './display-settings/display-settings.component';



@NgModule({
  declarations: [
    StoreListComponent,
    StoreItemComponent,
    DisplaySettingsComponent
  ],
  imports: [
    CommonModule, 
    FormsModule, 
    HttpClientModule,
    CartModule
  ],

  exports: [
    StoreItemComponent,
    StoreListComponent,
    DisplaySettingsComponent
  ]
})
export class StoreModule { }
