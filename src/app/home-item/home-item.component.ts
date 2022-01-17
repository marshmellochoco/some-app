import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-item',
  templateUrl: './home-item.component.html',
  styleUrls: ['./home-item.component.scss']
})
export class HomeItemComponent implements OnInit {
  @Input() item: any;
  @Input() index: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
