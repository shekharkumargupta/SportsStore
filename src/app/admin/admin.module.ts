import { CommonModule } from "@angular/common";
import { Component, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { AdminComponent } from "./admin.component";
import { AuthGuard } from "./auth.guard";
import { MaterialFeatures } from "./material.module";
import { ProductTableComponent } from "./productTable.components";
import { ProductEditorComponent } from "./productEditor.component";
import { OrderTableComponent } from "./orderTableComponent";
import { Product } from "../model/product/product.model";

let routing = RouterModule.forChild([
    {path: "auth", component: AuthComponent},
    //{path: "main", component: AdminComponent},
    {
        path: "main", component: AdminComponent, canActivate: [AuthGuard],
        children: [
            {path: "products/:mode/:id", component: ProductEditorComponent},
            {path: "products/:mode", component: ProductEditorComponent},
            {path: "products", component: ProductTableComponent},
            {path: "orders", component: OrderTableComponent},
            {path: "**", redirectTo: "products"}
        ]
    },
    {path: "**", redirectTo: "auth"}
]);

@NgModule({
    imports: [CommonModule, FormsModule, routing, MaterialFeatures],
    declarations: [AuthComponent, AdminComponent, ProductTableComponent, 
        ProductEditorComponent, OrderTableComponent
    ],
    providers: [AuthGuard]
})
export class AdminModule{

}