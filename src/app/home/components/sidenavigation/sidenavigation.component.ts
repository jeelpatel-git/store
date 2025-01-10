import { Component} from '@angular/core';
import { category } from '../../types/category.type';
import { categories } from '../../sampleData/categories.data';


@Component({
  selector: 'app-sidenavigation',
  templateUrl: './sidenavigation.component.html',
  styleUrls: ['./sidenavigation.component.scss']
})
export class SidenavigationComponent{
  categories: category[] = [];
  constructor() {}

  getCategories():category[] {
    return this.categories = categories;
  }

  
}
