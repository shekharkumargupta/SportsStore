import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Product } from "../model/product/product.model";
import { ProductRepository } from "../model/product/product.repository";


@Component({
    selector: `product-editor`,
    templateUrl: 'productEditor.component.html'
})
export class ProductEditorComponent{

    editing: boolean = false;
    product: Product = new Product();

    constructor(private repository: ProductRepository,
        private router: Router,
        activateRoute: ActivatedRoute){

            this.editing = activateRoute.snapshot.params["mode"] == "edit";
            if(this.editing){
                Object.assign(this.editing,
                    repository.getProduct(activateRoute.snapshot.params["id"])
                );
            }
    }

    save(){
        this.repository.saveProduct(this.product);
        this.router.navigateByUrl("/admin/main/products")
    }


}