import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidenavigationComponent } from './components/sidenavigation/sidenavigation.component';
import { ProductsComponent } from './components/products/products.component';
import { SharedModule } from '../shared/shared.module';
import {HttpClientModule } from '@angular/common/http';
import { ProductStoreItem } from './services/products/products.storeItem';
import { ProductsService } from './services/products/products.service';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';
import { ProductGalleryComponent } from './components/product-gallery/product-gallery.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { SearchProductComponent } from './components/search-product/search-product.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    SidenavigationComponent,
    ProductsComponent,
    ProductGalleryComponent,
    FooterComponent,
    SearchProductComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    SharedModule,
    HttpClientModule,
    RouterModule,
    HomeRoutingModule,
    ReactiveFormsModule
  ],
  providers:[ProductStoreItem, ProductsService]
})
export class HomeModule { }
