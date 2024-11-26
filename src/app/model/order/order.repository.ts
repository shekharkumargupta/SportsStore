import { Injectable } from "@angular/core";
import { StaticDataSource } from "../product/static.datasource";
import { Order } from "./order.model";
import { Observable } from "rxjs";


@Injectable()
export class OrderRepository{

    private orders: Order[] = []

    constructor(private dataSource: StaticDataSource){}

    getOrders(): Order[]{
        return this.orders;
    }

    saveOrder(order: Order): Observable<Order>{
        return this.dataSource.saveOrder(order);
    }
}