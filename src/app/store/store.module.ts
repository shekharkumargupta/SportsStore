import { NgModule } from '@angular/core';
import { StoreComponent } from './store/store.component';
import { ModelModule } from '../model/model.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CounterDirective } from './store/counter.directive';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
  declarations: [StoreComponent, CounterDirective, 
    CartSummaryComponent, CartDetailsComponent, 
    CheckoutComponent],
  exports: [StoreComponent, CartDetailsComponent, CheckoutComponent]
})
export class StoreModule { }
