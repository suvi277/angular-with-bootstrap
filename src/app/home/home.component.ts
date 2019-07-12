import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
	imageList = [
		{
			title: "Heading",
			imgSrc: "//placehold.it/250x150",
			cta: "See More"
		},{
			title: "Heading",
			imgSrc: "//placehold.it/250x150",
			cta: "See More"
		},{
			title: "Heading",
			imgSrc: "//placehold.it/250x150",
			cta: "See More"
		},{
			title: "Heading",
			imgSrc: "//placehold.it/250x150",
			cta: "See More"
		}
	]

    constructor() { }
}