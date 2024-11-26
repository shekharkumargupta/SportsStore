import { Component } from '@angular/core';
import { Cart } from 'src/app/model/cart/cart.model';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent {

  constructor(public cart: Cart){}
}
