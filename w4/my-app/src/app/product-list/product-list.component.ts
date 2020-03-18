import { Component, OnInit, Input } from '@angular/core';
import{Category} from '../category';
import{CategoriesService} from '../categories.service';
import { PRODUCTS } from '../mock-products';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  category:Category;
  products = PRODUCTS;
  

   constructor( private route: ActivatedRoute,
     private categoriesService: CategoriesService,
     ) {  }

     ngOnInit(): void {
      this.getCategory();
     }
     getCategory(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.categoriesService.getCategory(id)
        .subscribe(category => this.category =category);
    }



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
    }