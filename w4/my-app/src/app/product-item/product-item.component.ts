import { Component, OnInit, Input } from '@angular/core';
import {  Product } from '../products';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {ProductService} from '../product.service'
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})

export class ProductItemComponent implements OnInit {
  product:Product;
  constructor(private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location) { }

  ngOnInit(): void {
    this.getProduct();
  }
  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id)
      .subscribe(product => this.product = product);
  }
  
  goBack(): void {
    this.location.back();
  }


  }


