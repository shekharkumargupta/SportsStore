import { NgModule } from "@angular/core";
import { ProductRepository } from "./product/product.repository";
import { StaticDataSource } from "./product/static.datasource";
import { Cart } from "./cart/cart.model";
import { Order } from "./order/order.model";
import { OrderRepository } from "./order/order.repository";
import { RestDataSource } from "./product/rest.datasource";
import { HttpClientModule } from "@angular/common/http";
import { AuthService } from "./auth.service";

@NgModule({
    imports: [HttpClientModule],
    providers: [ProductRepository, StaticDataSource, Cart, Order, OrderRepository,
        {provide: StaticDataSource, useClass: RestDataSource},
        RestDataSource, AuthService
    ]
})
export class ModelModule{

}