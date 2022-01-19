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
    this.items = [
      {
        src: "assets/img1.jpg",
        alt: "space guy 1",
        text: "This is just some image that I got from the internet. Nothing too special. 🎈",
      },
      {
        src: "assets/img2.jpg",
        alt: "space guy 2",
        text: "This is just some image that I got from the internet. Nothing too special. ☕",
      },
      {
        src: "assets/img3.jpg",
        alt: "space guy 3",
        text: "This is just some image that I got from the internet. Nothing too special. 🚀",
      },
    ];
    // return this.productApi.getProducts().subscribe((data: {}) => {
    //   this.items = data
    // })
  }
}
