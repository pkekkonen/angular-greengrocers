import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CartItemComponent,
    CartListComponent
  ],
  imports: [
    CommonModule, 
    FormsModule, 
    HttpClientModule
  ],

  exports: [
    CartItemComponent,
    CartListComponent
  ]
})
export class CartModule { }
