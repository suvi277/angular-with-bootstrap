import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  items = [1, 2, 3].map(() => `https://picsum.photos/768/280?random&t=${Math.random()}`);

  constructor() { }

  ngOnInit() {
  }

}
