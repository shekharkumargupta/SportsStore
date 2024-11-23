import { NgModule } from "@angular/core";
import { ProductRepository } from "./product/product.repository";
import { StaticDataSource } from "./product/static.datasource";

@NgModule({
    providers: [ProductRepository, StaticDataSource]
})
export class ModelModule{

}