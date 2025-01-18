import { Component } from '@angular/core';
import { ProductStoreItem } from '../../services/products/products.storeItem';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  
})
export class ProductsComponent {


  constructor(public productStoreItem: ProductStoreItem) {
  }

  getProductImage(product: any): string {
    if (product.display_img_url && product.display_img_url.trim() !== '') {
      return `../../../../assets/images/${product.display_img_url}`;
    }
    return '../../../../assets/images/no-image.jpg';
  }
  

}
