import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  id: number = 0;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params["id"];
    })
  }

  images = [{
    src: "assets/img1.jpg",
    alt: "space guy 1",
  }, {
    src: "assets/img2.jpg",
    alt: "space guy 2",

  }, {
    src: "assets/img3.jpg",
    alt: "space guy 3",
  },]
}
