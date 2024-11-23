import { NgModule } from '@angular/core';
import { StoreComponent } from './store/store.component';
import { ModelModule } from '../model/model.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CounterDirective } from './store/counter.directive';
import { CartSummaryComponent } from './cartsummary/cart-summary.component';


@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule],
  declarations: [StoreComponent, CounterDirective, CartSummaryComponent],
  exports: [StoreComponent]
})
export class StoreModule { }
