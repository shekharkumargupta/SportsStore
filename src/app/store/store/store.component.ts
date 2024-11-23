import { Component } from '@angular/core';
import { Cart } from 'src/app/model/cart/cart.model';
import { Product } from 'src/app/model/product/product.model';
import { ProductRepository } from 'src/app/model/product/product.repository';

@Component({
  standalone: false,
  selector: 'store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {

  selectedCategory: string | undefined;
  productsPerPage = 4;
  selectedPage = 1;

  constructor(private repository: ProductRepository, private cart: Cart){}

  get products(): Product[] {
    let pageIndex = (this.selectedPage -1) * this.productsPerPage
    return this.repository.getProducts(this.selectedCategory)
        .slice(pageIndex, pageIndex + this.productsPerPage);
  }

  get categories(): string[] {
    return this.repository.getCategories();
  }

  changeCategory(newCategory?: string){
    this.selectedCategory = newCategory;
  }

  changePage(newPage: number){
    this.selectedPage = newPage;
  }

  changePageSize(newSize: number){
    this.productsPerPage = Number(newSize);
    this.changePage(1);
  }

  get pageCount(): number{
    return Math.ceil(this.repository
      .getProducts(this.selectedCategory).length/this.productsPerPage)
  }

  addProductToCart(product: Product){
    this.cart.addLine(product);
  }

}
