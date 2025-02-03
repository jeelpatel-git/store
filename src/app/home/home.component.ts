import { Component } from '@angular/core';
import { ProductStoreItem } from './services/products/products.storeItem';
import { filter } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private productsStoreItem: ProductStoreItem, private router:Router){
    this.productsStoreItem.loadProducts();
    router.events.pipe(filter(event => 
      event instanceof NavigationEnd )).subscribe(e => {
        if((e as NavigationEnd).url === "/home"){
          router.navigate(['/home/products']);
        }
      });
  }

  getSearchProduct(event:any) {
    //console.log(event.target.value);
    if(event!= "") {
      this.productsStoreItem.getProductsBySearch(event);
    } else {
      this.productsStoreItem.loadProducts();
    }
  }
}
