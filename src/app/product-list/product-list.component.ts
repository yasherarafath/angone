import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../monk-products';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

 products = PRODUCTS;

  constructor() { }

  ngOnInit() {
  }

}
