import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items: any = [];

  constructor(public productApi: ProductService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    return this.productApi.getProducts().subscribe((data: {}) => {
      this.items = data
    })
  }
}
