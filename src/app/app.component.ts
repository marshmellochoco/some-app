import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'some-app';
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
