import { NgModule } from '@angular/core';
import { StoreComponent } from './store/store.component';
import { ModelModule } from '../model/model.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CounterDirective } from './store/counter.directive';


@NgModule({
  declarations: [StoreComponent, CounterDirective],
  imports: [ModelModule, BrowserModule, FormsModule],
  exports: [StoreComponent]
})
export class StoreModule { }
