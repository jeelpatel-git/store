import { Injectable } from '@angular/core';
import { Product } from '../../types/product.type';
import { Observable, of } from 'rxjs';
import { ProductsData } from '../../sampleData/products.data';

@Injectable()
export class ProductsService {

  constructor() { }

  getProductList(): Observable<Product[]> {
    return of(ProductsData);
  }

}
