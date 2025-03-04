import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ProductGalleryComponent } from './components/product-gallery/product-gallery.component';



const routes: Routes = [
  { path:'', 
    component: HomeComponent, 
    children: [
      {
        path:'products',
        component: ProductGalleryComponent
      },
  ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
