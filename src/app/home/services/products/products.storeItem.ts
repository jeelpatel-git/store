import { StoreItem } from "src/app/shared/storeItem";
import { Product } from "../../types/product.type";
import { ProductsService } from "./products.service";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class ProductStoreItem extends StoreItem<Product[]> {
     filteredProducts: Product[] = [];     
    constructor( private ProductService: ProductsService) {
        super([])
    }

    async loadProducts() {
        this.ProductService.getProductList().subscribe((products)=>{
            this.setValue(products);
            this.filteredProducts = [...products]
        })
    }

    async getAscendingProducts() {
        this.ProductService.getProductList().subscribe((products) => {
            const sortedProducts = this.filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
            this.setValue(sortedProducts);
        });
    }
    

    async getDecendingProducts() {
        this.ProductService.getProductList().subscribe((products) => {
            const sortedProducts = this.filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
            this.setValue(sortedProducts);
        });
    }

    async getProductsBySearch(productName:any) {
        this.ProductService.getProductList().subscribe((products) => {
            const searchProducts: any[] = Array.isArray(this.filteredProducts)
  ? this.filteredProducts.filter((product: any) => product.name === productName)
  : [];
            console.log(searchProducts)
            this.setValue(searchProducts);
        });
    }

    get products$(): Observable<Product[]> {
        return this.value$;
    }

    get products(): Product[] {
        return this.value;
    }
}