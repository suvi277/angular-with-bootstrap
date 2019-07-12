import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
	
	@Input() title = ``;
	@Input() content = ``;
	@Input() className = `card p-3`;
	@Input() imgSrc = ``;
	@Input() cta = ``;
	
	constructor() { }
	
	ngOnInit() {
  }

}
