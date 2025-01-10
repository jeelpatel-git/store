import { Component, AfterViewInit } from '@angular/core';
import { ProductStoreItem } from '../../services/products/products.storeItem';
declare var bootstrap: any;
@Component({
  selector: 'app-product-gallery',
  templateUrl: './product-gallery.component.html',
  styleUrls: ['./product-gallery.component.scss']
})
export class ProductGalleryComponent implements AfterViewInit {

  isAToZSelected = false;
  isZToASelected = false;
  private offcanvas: any;
  constructor(public productsStoreItem: ProductStoreItem) {

  }

  ngAfterViewInit() {
   
    const offcanvasElement = document.getElementById('offcanvasRight');
    this.offcanvas = new bootstrap.Offcanvas(offcanvasElement);
  }

  selectAToZ() {
    this.isAToZSelected = true;
    this.isZToASelected = false;
  }

  selectZToA() {
    this.isAToZSelected = false;
    this.isZToASelected = true;
  }

  ascendingProducts() {
    this.productsStoreItem.getAscendingProducts();
  }

 decendingProducts() {
    this.productsStoreItem.getDecendingProducts();
  }

  applySelection() {
    if (this.isAToZSelected) {
      this.ascendingProducts();
    } else if (this.isZToASelected) {
      this.decendingProducts()
    } else {
      this.clearFilter();
    }
    this.offcanvas.hide();
  }

  clearFilter() {
    this.isAToZSelected = false;
    this.isZToASelected = false;
    this.productsStoreItem.loadProducts();
    this.offcanvas.hide();
  }


}
