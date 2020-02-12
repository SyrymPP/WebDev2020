import { Component, OnInit, Input } from '@angular/core';
import { products, Product } from '../products';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
// export class ProductItemComponent {
//   products = products;
export class ProductItemComponent implements OnInit {
  @Input() product;
  slideIndex = 1;
  constructor() {}

  ngOnInit(): void {
  }
  share(product: Product):void {
    window.open(`//api.whatsapp.com/send?phone=77478865590_NUMBER&text=${product.link}`, "_blank");
  }
  onNotify(){
    window.alert('The product has been shared!');
  }



  }


