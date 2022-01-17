import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  items = [{
    src: "assets/img1.jpg",
    alt: "space guy 1",
    text: "This is just some image that I got from the internet. Nothing too special. 🎈",
  }, {
    src: "assets/img2.jpg",
    alt: "space guy 2",
    text: "This is just some image that I got from the internet. Nothing too special. ☕",

  }, {
    src: "assets/img3.jpg",
    alt: "space guy 3",
    text: "This is just some image that I got from the internet. Nothing too special. 🚀",
  },]

}
